// server.js
// -----------------------------------------------------------------------
// Serves the PyStart static site AND exposes POST /api/tutor, which is
// the ONLY place the real Anthropic API key is ever used. The browser
// never sees the key — script.js just calls the same-origin /api/tutor
// endpoint, and this server attaches the key + system prompt before
// forwarding the request to Anthropic.
//
// Run locally:
//   1. npm install
//   2. copy .env.example to .env and paste your key from
//      https://console.anthropic.com/settings/keys
//   3. node server.js
//   4. open http://localhost:3000
// -----------------------------------------------------------------------
import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());
app.use(express.static(__dirname)); // serves index.html, styles.css, script.js

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = "claude-sonnet-5"; // good balance of quality/cost for a tutoring chatbot

const TUTOR_SYSTEM = `You are a warm, patient Python tutor built into a beginner learning site called PyStart.
Rules you must follow:
1. When the learner asks for help, first ask what they've already tried (unless they've clearly already explained what they tried).
2. Try to identify the specific concept they're misunderstanding, and name it plainly.
3. Give a short, simple explanation of that concept, using a real-world analogy when useful.
4. Give ONE hint that nudges them toward the fix without writing the fix for them.
5. Invite them to try again before giving more.
6. Only give the complete corrected code if they explicitly ask for the full answer, or if they've clearly struggled across multiple exchanges. Even then, explain why it works afterward.
Keep replies short (3-6 sentences plus at most one small code snippet). Never lecture. Be encouraging, plain-spoken, and avoid jargon unless you immediately explain it. This is for a complete beginner.`;

app.post("/api/tutor", async (req, res) => {
  if (!ANTHROPIC_API_KEY) {
    console.error("Missing ANTHROPIC_API_KEY — set it in your .env file.");
    return res.status(500).json({ error: "Tutor is not configured on the server yet." });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages must be a non-empty array." });
  }

  try {
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1000,
        system: TUTOR_SYSTEM,
        messages,
      }),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      console.error("Anthropic API error:", data);
      return res.status(upstream.status).json({
        error: data?.error?.message || "The tutor service returned an error.",
      });
    }

    res.json(data);
  } catch (err) {
    console.error("Tutor proxy error:", err);
    res.status(502).json({ error: "Could not reach the tutor service." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`PyStart running at http://localhost:${PORT}`));
