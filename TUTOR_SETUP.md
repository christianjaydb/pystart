# Getting the AI Tutor working

The tutor bubble was failing because the site was calling
`https://api.anthropic.com/v1/messages` **straight from the browser**, with
no API key attached. Browsers block that (no CORS, no credentials) — so it
always fell through to the "I couldn't reach the tutor service" message.

An API key is a secret. If it's pasted into `script.js`, anyone who views
your page source can copy it and run up your bill. It has to live on a
server you control, not in the browser.

## What changed

- `script.js` now calls `/api/tutor` (same origin, no key involved).
- `server.js` is a tiny Node/Express server that:
  1. Serves your existing `index.html`, `styles.css`, and `script.js` as-is.
  2. Exposes `POST /api/tutor`, attaches your real API key + the tutor's
     system prompt, and forwards the request to Anthropic.

## Run it locally

```bash
npm install
cp .env.example .env
# paste your key from https://console.anthropic.com/settings/keys into .env
npm start
```

Then open http://localhost:3000 — the tutor bubble will work.

## Deploying

Any host that can run a small Node server works: Render, Railway, Fly.io,
a VPS, etc. Set the `ANTHROPIC_API_KEY` environment variable in that
host's dashboard (not in a committed file), then run `npm start`.

If you'd rather deploy to a serverless platform (Vercel, Netlify, Cloudflare
Workers), the same idea applies — just move the logic inside `/api/tutor`
in `server.js` into that platform's serverless function format. The key
rule stays the same: the Anthropic API key only ever lives in server-side
environment variables.
