/* ============================================================
   DATA: LESSONS      (treat as content/lessons.js)
   ============================================================ */
const LESSONS = [
{id:1, level:1, title:"What is Programming?", est:"4 min",
 explain:`<p>A computer only does exactly what it's told, in the exact order it's told. <span class="term" data-term="Program">Programming</span> is the act of writing those instructions.</p>
 <p>Think of a recipe: "crack two eggs, whisk them, pour into a hot pan." A program is the same idea, except the "chef" is your computer and the "recipe" is written in a language it understands — like Python.</p>`,
 example:`# This is a tiny "recipe" for a computer
print("Crack two eggs")
print("Whisk them")
print("Pour into the pan")`,
 lineExplain:[["print(\"Crack two eggs\")","Tells the computer: show this line of text on the screen."],["print(\"Whisk them\")","Same idea — one instruction, one line, done in order."]],
 tryPrompt:"Change the three lines below into your own 3-step recipe for anything (making toast, tying a shoe, whatever you like).",
 tryStarter:`print("Step 1: ...")\nprint("Step 2: ...")\nprint("Step 3: ...")`,
 quiz:[
   {q:"A computer program is best described as:",opts:["A list of instructions the computer follows in order","A picture the computer draws","A password for the computer"],correct:0,explain:"Programs are step-by-step instructions, followed exactly and in order."},
   {q:"If you give a computer instructions in the wrong order, it will usually:",opts:["Fix the order automatically","Do them in the order you wrote, even if that breaks things","Refuse to run at all"],correct:1,explain:"Computers don't guess your intent — they follow the exact order you wrote."}
 ]},
{id:2, level:1, title:"What is Python?", est:"4 min",
 explain:`<p>Python is a <span class="term" data-term="Programming Language">programming language</span> — a set of words and rules the computer understands. It's known for reading almost like plain English, which makes it a great first language.</p>
 <p>Python is used to build websites, analyze data, automate boring tasks, and much more. When you write Python code and run it, another program (the <span class="term" data-term="Interpreter">Python interpreter</span>) reads your instructions and carries them out.</p>`,
 example:`print("Hello, I'm learning Python!")`,
 lineExplain:[["print(...)","A built-in Python command that displays text."],["\"Hello, I'm learning Python!\"","The text itself, wrapped in quotes so Python knows it's text, not code."]],
 tryPrompt:"Write one line of code that prints a short introduction of yourself.",
 tryStarter:`print("Hi, my name is ...")`,
 quiz:[
   {q:"Python code is turned into action by:",opts:["The Python interpreter, which reads and runs it","Your web browser only","Nothing — Python runs itself"],correct:0,explain:"The interpreter reads your code line by line and carries out each instruction."},
   {q:"One reason Python is popular for beginners is:",opts:["It requires no computer","Its code reads close to plain English","It only works on phones"],correct:1,explain:"Python's readable syntax is a big part of why it's a common first language."}
 ]},
{id:3, level:1, title:"Your First Python Program", est:"3 min",
 explain:`<p>Every programmer's traditional first program does one thing: it displays a short message. It's a way of proving "yes, my code runs."</p>
 <p>In the Code Lab below (and throughout this site), you'll write real Python and click <strong>Run</strong> to see it work instantly — right in your browser.</p>`,
 example:`print("Hello, World!")`,
 lineExplain:[["print(\"Hello, World!\")","Displays the text Hello, World! on the screen. That's the whole program."]],
 tryPrompt:"Run the classic first program below, then change the message to something of your own.",
 tryStarter:`print("Hello, World!")`,
 quiz:[
   {q:"The traditional first program in any language usually:",opts:["Deletes files","Prints a short greeting message","Connects to the internet"],correct:1,explain:"\"Hello, World!\" is a friendly tradition — it just proves the code runs."},
   {q:"To run the code you write on this site, you:",opts:["Click the Run button","Save it and email it to yourself","Restart your computer"],correct:0,explain:"Click Run and Python executes your code immediately, right in the browser."}
 ]},
{id:4, level:1, title:"print()", est:"5 min",
 explain:`<p><code>print()</code> is Python's way of showing text or values on the screen. Whatever you put inside the parentheses gets displayed.</p>
 <p>Text goes inside quotes — either <code>"double"</code> or <code>'single'</code> quotes work, just be consistent. You can print multiple things by separating them with commas.</p>`,
 example:`print("My favorite number is", 7)
print("Python", "is", "fun")`,
 lineExplain:[["print(\"My favorite number is\", 7)","Prints the text, then a space, then the number 7 — commas add a space between items."],["print(\"Python\", \"is\", \"fun\")","Prints three separate pieces of text, automatically spaced apart."]],
 tryPrompt:"Print your favorite food and how many times a week you eat it, as two separate items in one print() call.",
 tryStarter:`print("My favorite food is", "...", "and I eat it", 3, "times a week")`,
 quiz:[
   {q:"What does print(\"a\", \"b\") display?",opts:["ab","a b","a, b"],correct:1,explain:"Commas inside print() automatically add a space between the items."},
   {q:"Text passed to print() must be:",opts:["In all capital letters","Wrapped in quotes","Exactly one word"],correct:1,explain:"Quotes tell Python \"this is text\" (called a string) rather than code to run."}
 ]},
{id:5, level:1, title:"Comments", est:"3 min",
 explain:`<p>A <span class="term" data-term="Comment">comment</span> is a note in your code that Python completely ignores. Comments start with <code>#</code> and are for humans — to explain what the code does, or leave yourself a reminder.</p>`,
 example:`# This program greets the user
print("Welcome!")  # this line does the greeting`,
 lineExplain:[["# This program greets the user","A comment. Python skips this line entirely — it's just a note."],["print(\"Welcome!\")  # this line does the greeting","Code and a comment can share a line; everything after # is ignored."]],
 tryPrompt:"Add a comment above the line explaining what it does, then run it (the comment won't change the output).",
 tryStarter:`print("This code does something")`,
 quiz:[
   {q:"A line starting with # is:",opts:["Run twice","Ignored by Python — it's just a note for humans","An error"],correct:1,explain:"Comments exist purely for readability; Python skips them."},
   {q:"Comments are useful for:",opts:["Making code run faster","Explaining your code to yourself or others later","Fixing bugs automatically"],correct:1,explain:"They're documentation, not functionality."}
 ]},
{id:6, level:1, title:"Variables", est:"6 min",
 explain:`<p>A <span class="term" data-term="Variable">variable</span> is like a labeled box where you store information so you can use it later.</p>
 <p>You create one by choosing a name, then using <code>=</code> to store a value in it. From then on, using that name gives you back what's stored inside.</p>`,
 example:`name = "Christian"
age = 22
print(name)
print(age)`,
 lineExplain:[["name = \"Christian\"","Creates a box labeled name and puts the text Christian inside it."],["age = 22","Creates a second box labeled age, holding the number 22."],["print(name)","Opens the name box and displays what's inside: Christian."]],
 tryPrompt:"Fill in the blank so it prints your own name.",
 tryStarter:`name = "_____"\nprint(name)`,
 quiz:[
   {q:"A variable is best described as:",opts:["A labeled box that stores a value","A type of loop","A kind of error"],correct:0,explain:"Variables store values under a name so you can reuse them."},
   {q:"After running x = 5, what does print(x) show?",opts:["x","5","Nothing"],correct:1,explain:"print(x) looks inside the box named x and shows what's stored there: 5."}
 ]},
{id:7, level:1, title:"Strings", est:"5 min",
 explain:`<p>A <span class="term" data-term="String">string</span> is text — any characters wrapped in quotes. Strings can be joined together with <code>+</code> (this is called <span class="term" data-term="Concatenation">concatenation</span>).</p>`,
 example:`first = "Christian"
last = "Reyes"
full = first + " " + last
print(full)`,
 lineExplain:[["first = \"Christian\"","Stores the text Christian in a variable."],["full = first + \" \" + last","Joins first, a space, and last into one longer string."],["print(full)","Displays the combined text: Christian Reyes."]],
 tryPrompt:"Combine a greeting word and a name into one printed sentence using +.",
 tryStarter:`greeting = "Hello, "\nname = "friend"\nprint(greeting + name)`,
 quiz:[
   {q:"\"5\" + \"3\" (both as strings) results in:",opts:["8","\"53\"","An error"],correct:1,explain:"+ on strings joins the text together rather than doing math — it becomes \"53\"."},
   {q:"Strings must be:",opts:["Wrapped in quotes","Written in capital letters","Shorter than 10 characters"],correct:0,explain:"Quotes are what tell Python \"this is text.\""}
 ]},
{id:8, level:1, title:"Numbers", est:"5 min",
 explain:`<p>Python has two common number types: whole numbers (<span class="term" data-term="Integer">integers</span>, like <code>7</code>) and numbers with decimals (<span class="term" data-term="Float">floats</span>, like <code>7.5</code>). You can do math directly with them.</p>`,
 example:`price = 120
quantity = 3
total = price * quantity
print(total)`,
 lineExplain:[["price = 120","An integer stored in a variable."],["total = price * quantity","Multiplies the two numbers using *."],["print(total)","Shows the result: 360."]],
 tryPrompt:"Calculate and print the total cost of 4 items that each cost 25.50.",
 tryStarter:`price = 25.50\nquantity = 4\ntotal = price * quantity\nprint(total)`,
 quiz:[
   {q:"Which symbol multiplies two numbers in Python?",opts:["x","*","&"],correct:1,explain:"Python uses * for multiplication (and ** for powers)."},
   {q:"7.5 is an example of a:",opts:["String","Float (a number with a decimal)","Boolean"],correct:1,explain:"Numbers with a decimal point are called floats."}
 ]},
{id:9, level:1, title:"Booleans", est:"4 min",
 explain:`<p>A <span class="term" data-term="Boolean">boolean</span> is a value that is either <code>True</code> or <code>False</code> — nothing in between. They usually come from asking a yes/no question, like "is this number bigger than 10?"</p>`,
 example:`is_raining = True
is_sunny = False
print(is_raining)
print(10 > 5)`,
 lineExplain:[["is_raining = True","Stores the boolean value True."],["print(10 > 5)","Python checks the comparison and prints the result: True."]],
 tryPrompt:"Store a boolean describing whether you've eaten today, and print it.",
 tryStarter:`has_eaten = True\nprint(has_eaten)`,
 quiz:[
   {q:"A boolean can hold:",opts:["Any whole number","Only True or False","Any text"],correct:1,explain:"Booleans are strictly two-valued: True or False."},
   {q:"What does print(3 > 10) output?",opts:["3","10","False"],correct:2,explain:"3 is not greater than 10, so the comparison evaluates to False."}
 ]},
{id:10, level:1, title:"Basic Operators", est:"6 min",
 explain:`<p><span class="term" data-term="Operator">Operators</span> are symbols that do work: <code>+ - * /</code> for math, and comparisons like <code>== &gt; &lt;</code> that ask a true/false question.</p>`,
 example:`print(10 + 3)
print(10 - 3)
print(10 / 3)
print(10 % 3)
print(10 == 10)`,
 lineExplain:[["print(10 / 3)","Division — always gives back a float, here 3.333..."],["print(10 % 3)","The remainder operator — 10 divided by 3 leaves a remainder of 1."],["print(10 == 10)","== checks equality (not the same as =, which assigns a value) and prints True."]],
 tryPrompt:"Print the remainder when 17 is divided by 5, using %.",
 tryStarter:`print(17 % 5)`,
 quiz:[
   {q:"The % operator gives you:",opts:["A percentage","The remainder of a division","Half of a number"],correct:1,explain:"% (modulo) returns what's left over after dividing."},
   {q:"= and == are:",opts:["The same thing","Different: = assigns a value, == compares two values","Both used only for text"],correct:1,explain:"= stores a value; == asks \"are these equal?\" and returns True or False."}
 ]},
{id:11, level:1, title:"Getting User Input", est:"5 min",
 explain:`<p><code>input()</code> pauses your program and waits for the person using it to type something and press Enter. Whatever they type comes back as a string.</p>`,
 example:`name = input("What's your name? ")
print("Nice to meet you,", name)`,
 lineExplain:[["name = input(\"What's your name? \")","Shows the prompt, waits for typed input, then stores it in name."],["print(\"Nice to meet you,\", name)","Uses the typed value in a printed sentence."]],
 tryPrompt:"Ask for the user's favorite color and print it back in a sentence.",
 tryStarter:`color = input("What's your favorite color? ")\nprint("Nice, I like", color, "too!")`,
 quiz:[
   {q:"input() always returns:",opts:["A number","A string (text), even if the user types digits","A boolean"],correct:1,explain:"Everything typed through input() comes back as text — you convert it if you need a number."},
   {q:"The text inside input(\"...\") is:",opts:["Ignored","The prompt shown to the user before they type","Run as code"],correct:1,explain:"It's just the message shown to the person before they type their answer."}
 ]},
{id:12, level:1, title:"Converting Data Types", est:"6 min",
 explain:`<p>Because <code>input()</code> always gives text, you often need to convert it to a number before doing math. <code>int()</code> converts to a whole number, <code>float()</code> converts to a decimal number, and <code>str()</code> converts to text.</p>`,
 example:`age_text = input("How old are you? ")
age = int(age_text)
next_year = age + 1
print("Next year you'll be", next_year)`,
 lineExplain:[["age = int(age_text)","Converts the typed text into a real number so it can be used in math."],["next_year = age + 1","Now that age is a number, + adds 1 to it normally."]],
 tryPrompt:"Ask for two numbers as input, convert both to int, and print their sum.",
 tryStarter:`a = input("First number: ")\nb = input("Second number: ")\n# convert and add them below\n`,
 quiz:[
   {q:"Why convert input() results with int()?",opts:["To make the text uppercase","Because input() gives text, and int() turns it into a real number for math","Because it's required for every program"],correct:1,explain:"Text and numbers behave differently — int() bridges the gap so you can do arithmetic."},
   {q:"int(\"7\") + int(\"3\") equals:",opts:["\"73\"","10","An error"],correct:1,explain:"Once both are converted to real numbers, + does addition: 7 + 3 = 10."}
 ]},
{id:13, level:2, title:"What are Conditions?", est:"4 min",
 explain:`<p>A <span class="term" data-term="Condition">condition</span> is a true/false question your program asks itself, like "is age 18 or more?" Programs use conditions to decide which lines of code to run.</p>
 <p>In Python, a condition is just an expression that evaluates to <code>True</code> or <code>False</code> — the same booleans you already met.</p>`,
 example:`age = 20
print(age >= 18)
print(age == 100)`,
 lineExplain:[["print(age >= 18)","Asks \"is age 18 or more?\" — since age is 20, this prints True."],["print(age == 100)","Asks \"does age equal 100?\" — since it doesn't, this prints False."]],
 tryPrompt:"Store a number in a variable and print whether it's greater than 50.",
 tryStarter:`n = 75\nprint(n > 50)`,
 quiz:[
   {q:"A condition always evaluates to:",opts:["A string","True or False","A list"],correct:1,explain:"Conditions are boolean expressions — they only ever come out True or False."},
   {q:"What does age >= 18 mean?",opts:["age is exactly 18","age is 18 or more","age is less than 18"],correct:1,explain:">= means \"greater than or equal to\"."}
 ]},
{id:14, level:2, title:"if", est:"5 min",
 explain:`<p>An <code>if</code> statement runs a block of code only when its condition is <code>True</code>. The code that belongs to the if must be indented (usually 4 spaces) underneath it.</p>`,
 example:`age = 20
if age >= 18:
    print("You're an adult")`,
 lineExplain:[["if age >= 18:","Checks the condition. Notice the colon : at the end — it's required."],["    print(\"You're an adult\")","Indented under the if, so it only runs when the condition is True."]],
 tryPrompt:"Store a temperature and print \"It's hot\" only if it's above 30.",
 tryStarter:`temperature = 35\nif temperature > 30:\n    print("It's hot")`,
 quiz:[
   {q:"Code indented under an if statement runs:",opts:["Always, no matter what","Only when the if condition is True","Only when the if condition is False"],correct:1,explain:"The indented block is skipped entirely when the condition is False."},
   {q:"What is required at the end of an if line?",opts:["A semicolon ;","A colon :","Nothing extra"],correct:1,explain:"Python requires a colon after if (and elif, else, for, while, def)."}
 ]},
{id:15, level:2, title:"else", est:"4 min",
 explain:`<p><code>else</code> gives the program something to do when the <code>if</code> condition is <code>False</code>. It always comes after an if block, and never has its own condition.</p>`,
 example:`age = 15
if age >= 18:
    print("You're an adult")
else:
    print("You're a minor")`,
 lineExplain:[["else:","Catches every case where the if condition was False. No condition needed here."],["    print(\"You're a minor\")","Runs only because age >= 18 was False."]],
 tryPrompt:"Check if a number is at least 10; print one message if so, another if not.",
 tryStarter:`score = 4\nif score >= 10:\n    print("Nice score!")\nelse:\n    print("Keep trying")`,
 quiz:[
   {q:"else runs when:",opts:["The if condition was True","The if condition was False","Always, in addition to if"],correct:1,explain:"else is the \"otherwise\" branch — it only fires when the if didn't."},
   {q:"Can else have its own condition, like else x > 5:?",opts:["Yes","No — else never takes a condition","Only in loops"],correct:1,explain:"else simply means \"anything not already covered\" — no condition needed or allowed."}
 ]},
{id:16, level:2, title:"elif", est:"5 min",
 explain:`<p><code>elif</code> (short for "else if") lets you check additional conditions when the first if was False. Python checks each one top to bottom and runs the first match.</p>`,
 example:`score = 75
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")`,
 lineExplain:[["elif score >= 80:","Only checked if the first if was False. Since score is 75, this is also False."],["elif score >= 70:","Checked next — 75 >= 70 is True, so \"C\" prints and the rest are skipped."]],
 tryPrompt:"Write an if/elif/else chain that prints a grade letter for a score of your choice.",
 tryStarter:`score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C or below")`,
 quiz:[
   {q:"Once one elif branch runs, Python:",opts:["Also checks every branch below it","Skips the rest of the chain","Runs the else too"],correct:1,explain:"Only the first True branch (top to bottom) runs; the rest are skipped automatically."},
   {q:"You can have how many elif blocks in one chain?",opts:["Exactly one","At most two","As many as you need"],correct:2,explain:"There's no limit — chain as many elif checks as the situation needs."}
 ]},
{id:17, level:2, title:"Comparison Operators", est:"5 min",
 explain:`<p><span class="term" data-term="Comparison Operator">Comparison operators</span> compare two values and produce a boolean: <code>== equal</code>, <code>!= not equal</code>, <code>&gt; greater than</code>, <code>&lt; less than</code>, <code>&gt;=</code>, <code>&lt;=</code>.</p>`,
 example:`print(5 == 5)
print(5 != 3)
print(5 > 3)
print(5 <= 4)`,
 lineExplain:[["print(5 != 3)","!= means \"not equal to\" — since 5 and 3 differ, this is True."],["print(5 <= 4)","<= means \"less than or equal to\" — 5 is not <= 4, so this is False."]],
 tryPrompt:"Print the results of comparing two numbers of your choice using at least three different comparison operators.",
 tryStarter:`a = 12\nb = 7\nprint(a > b)\nprint(a == b)\nprint(a != b)`,
 quiz:[
   {q:"Which operator checks \"not equal to\"?",opts:["=!","!=","<>"],correct:1,explain:"Python uses != for \"not equal to\"."},
   {q:"5 >= 5 evaluates to:",opts:["True","False","An error"],correct:0,explain:">= includes \"equal to\", so 5 >= 5 is True."}
 ]},
{id:18, level:2, title:"Logical Operators", est:"6 min",
 explain:`<p><span class="term" data-term="Logical Operator">Logical operators</span> combine multiple conditions. <code>and</code> needs both sides True, <code>or</code> needs at least one side True, and <code>not</code> flips True to False (or vice versa).</p>`,
 example:`age = 25
has_id = True
if age >= 18 and has_id:
    print("Allowed in")`,
 lineExplain:[["if age >= 18 and has_id:","Both conditions must be True at once for and to be True."],["    print(\"Allowed in\")","Runs because age >= 18 is True AND has_id is True."]],
 tryPrompt:"Use and to check two conditions together, and or to check if at least one is true.",
 tryStarter:`temp = 22\nis_sunny = True\nprint(temp > 20 and is_sunny)\nprint(temp > 30 or is_sunny)`,
 quiz:[
   {q:"x and y is True only when:",opts:["x is True","Both x and y are True","Either x or y is True"],correct:1,explain:"and requires every condition joined by it to be True."},
   {q:"not True evaluates to:",opts:["True","False","An error"],correct:1,explain:"not flips a boolean to its opposite value."}
 ]},
{id:19, level:2, title:"Simple Decision-Making Programs", est:"7 min",
 explain:`<p>Now put it together: conditions, if/elif/else, comparisons, and logical operators can combine to make programs that react differently depending on input.</p>`,
 example:`age = int(input("Enter your age: "))
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")`,
 lineExplain:[["age = int(input(\"Enter your age: \"))","Gets a number from the user to make a decision about."],["if age >= 18:","The condition that decides which message to show."]],
 tryPrompt:"Build an Age Checker: ask for age, then print \"You are an adult.\" or \"You are a minor.\"",
 tryStarter:`age = int(input("Enter your age: "))\nif age >= 18:\n    print("You are an adult.")\nelse:\n    print("You are a minor.")`,
 quiz:[
   {q:"A decision-making program typically combines:",opts:["Only print() statements","Input, conditions, and if/elif/else","Only comments"],correct:1,explain:"These programs read input, test conditions, and branch based on the result."},
   {q:"If age is exactly 18 in the Age Checker example, it prints:",opts:["You are a minor.","You are an adult.","Nothing"],correct:1,explain:"18 >= 18 is True, so the if branch runs."}
 ]},
{id:20, level:3, title:"Why Do We Need Loops?", est:"4 min",
 explain:`<p>A <span class="term" data-term="Loop">loop</span> repeats a block of code so you don't have to copy-paste it over and over. Anything that says "do this 10 times" or "keep going until something happens" is a job for a loop.</p>
 <p>Without loops, printing "Hello" five times means writing print("Hello") five separate times. With a loop, you write it once and tell Python how many times to run it.</p>`,
 example:`print("Hello")
print("Hello")
print("Hello")
# vs. with a loop:
for i in range(3):
    print("Hello")`,
 lineExplain:[["for i in range(3):","Tells Python to repeat the next indented block 3 times."],["    print(\"Hello\")","This one line does the work of the three print() calls above it."]],
 tryPrompt:"Print your name 5 times using a loop instead of five separate print() lines.",
 tryStarter:`for i in range(5):\n    print("Your Name")`,
 quiz:[
   {q:"Loops exist mainly to:",opts:["Make code run slower","Repeat a block of code without rewriting it","Store multiple values"],correct:1,explain:"Loops save you from copy-pasting the same lines many times."},
   {q:"Which is a sign a loop might help?",opts:["\"Print this once\"","\"Do this 10 times\"","\"Store a name\""],correct:1,explain:"Any repeated or \"keep going until\" task is a loop's job."}
 ]},
{id:21, level:3, title:"for Loops", est:"6 min",
 explain:`<p>A <code>for</code> loop repeats code once for each item in a sequence. <code>for i in range(5):</code> runs the indented block 5 times, with <code>i</code> taking the values 0, 1, 2, 3, 4 in turn.</p>`,
 example:`for i in range(5):
    print(i)`,
 lineExplain:[["for i in range(5):","i is a variable that changes each time through the loop."],["    print(i)","Runs once per loop, printing the current value of i: 0, then 1, then 2, then 3, then 4."]],
 tryPrompt:"Use a for loop to print the numbers 1 through 5.",
 tryStarter:`for i in range(1, 6):\n    print(i)`,
 quiz:[
   {q:"In for i in range(5):, how many times does the loop run?",opts:["4","5","6"],correct:1,explain:"range(5) produces 5 values: 0 through 4, so the loop body runs 5 times."},
   {q:"What does i represent inside the loop?",opts:["A fixed value that never changes","The current item/number for this pass through the loop","The total number of loops"],correct:1,explain:"i updates automatically on each pass — that's what makes the loop useful."}
 ]},
{id:22, level:3, title:"while Loops", est:"6 min",
 explain:`<p>A <code>while</code> loop keeps repeating as long as its condition stays <code>True</code>. Unlike a for loop, it doesn't know in advance how many times it'll run — it just keeps checking.</p>
 <p>You must change something inside the loop that eventually makes the condition False, or it never stops (an infinite loop).</p>`,
 example:`count = 1
while count <= 5:
    print(count)
    count = count + 1`,
 lineExplain:[["while count <= 5:","Checked before every pass — as soon as this is False, the loop stops."],["    count = count + 1","Without this line, count would stay 1 forever and the loop would never end."]],
 tryPrompt:"Use a while loop to print numbers from 1 up to 3.",
 tryStarter:`count = 1\nwhile count <= 3:\n    print(count)\n    count = count + 1`,
 quiz:[
   {q:"A while loop stops when:",opts:["You tell it to stop with print()","Its condition becomes False","It has run exactly 10 times"],correct:1,explain:"while loops run purely based on their condition, however many times that takes."},
   {q:"What happens if you forget to update the loop variable inside a while loop?",opts:["Python fixes it automatically","The loop may run forever (infinite loop)","The loop runs zero times"],correct:1,explain:"If the condition never becomes False, the loop never stops."}
 ]},
{id:23, level:3, title:"range()", est:"5 min",
 explain:`<p><code>range()</code> generates a sequence of numbers, most often used with for loops. <code>range(5)</code> gives 0-4, <code>range(2, 5)</code> gives 2-4, and <code>range(0, 10, 2)</code> gives 0, 2, 4, 6, 8 (step of 2).</p>`,
 example:`for i in range(2, 6):
    print(i)`,
 lineExplain:[["for i in range(2, 6):","Starts at 2, stops before 6 — so it produces 2, 3, 4, 5."]],
 tryPrompt:"Print every even number from 0 to 8 using range() with a step of 2.",
 tryStarter:`for i in range(0, 10, 2):\n    print(i)`,
 quiz:[
   {q:"range(3, 7) produces:",opts:["3, 4, 5, 6","3, 4, 5, 6, 7","0, 1, 2, 3"],correct:0,explain:"range() always stops before its second number — 7 is never included."},
   {q:"range(0, 10, 2) counts by:",opts:["1s","2s","10s"],correct:1,explain:"The third argument to range() is the step size — here it jumps by 2 each time."}
 ]},
{id:24, level:3, title:"break", est:"4 min",
 explain:`<p><code>break</code> immediately stops a loop, even if its condition would otherwise still be True. It's useful for stopping early once you've found what you need.</p>`,
 example:`for i in range(10):
    if i == 3:
        break
    print(i)`,
 lineExplain:[["    if i == 3:","Checks each number as the loop runs."],["        break","As soon as i is 3, the loop stops completely — 3 and beyond never print."]],
 tryPrompt:"Loop through numbers 0-9, but break out of the loop as soon as you reach 5.",
 tryStarter:`for i in range(10):\n    if i == 5:\n        break\n    print(i)`,
 quiz:[
   {q:"break does what?",opts:["Skips just the current pass and continues looping","Stops the loop completely, right away","Pauses the program"],correct:1,explain:"break exits the loop entirely — no more passes happen after it."},
   {q:"In the example, what's the last number printed before the loop breaks?",opts:["1","2","3"],correct:1,explain:"i goes 0, 1, 2 (each printed), then when i becomes 3 the if is True and break exits immediately — so 3 is never printed."}
 ]},
{id:25, level:3, title:"continue", est:"4 min",
 explain:`<p><code>continue</code> skips the rest of the current pass and jumps straight to the next one — unlike break, the loop keeps going.</p>`,
 example:`for i in range(5):
    if i == 2:
        continue
    print(i)`,
 lineExplain:[["    if i == 2:","Checks each number."],["        continue","Skips print(i) just for this one pass (when i is 2), then moves on to i = 3."]],
 tryPrompt:"Print numbers 0-9, but skip printing any number that's exactly divisible by 3 (use continue).",
 tryStarter:`for i in range(10):\n    if i % 3 == 0:\n        continue\n    print(i)`,
 quiz:[
   {q:"continue is different from break because it:",opts:["Also stops the loop entirely","Skips only the current pass, then the loop keeps going","Restarts the whole loop from 0"],correct:1,explain:"continue jumps to the next iteration instead of ending the loop."},
   {q:"In the example, does 2 ever get printed?",opts:["Yes","No — continue skips it","Only sometimes"],correct:1,explain:"When i equals 2, continue skips the print(i) line for that pass."}
 ]},
{id:26, level:3, title:"Nested Loops", est:"6 min",
 explain:`<p>A <span class="term" data-term="Nested Loop">nested loop</span> is a loop inside another loop. The inner loop runs completely for every single pass of the outer loop — useful for grids, patterns, and tables.</p>`,
 example:`for row in range(3):
    for col in range(3):
        print(row, col)`,
 lineExplain:[["for row in range(3):","The outer loop runs 3 times total."],["    for col in range(3):","For each single pass of the outer loop, this inner loop runs all 3 of its own passes."]],
 tryPrompt:"Use nested loops to print a 3x3 grid of stars, three stars per row, on separate lines.",
 tryStarter:`for row in range(3):\n    line = ""\n    for col in range(3):\n        line = line + "*"\n    print(line)`,
 quiz:[
   {q:"In a nested loop with an outer loop of 3 and an inner loop of 3, how many total inner passes happen?",opts:["3","6","9"],correct:2,explain:"The inner loop runs 3 times for each of the outer loop's 3 passes: 3 × 3 = 9."},
   {q:"Nested loops are most useful for:",opts:["Storing a single value","Grids, tables, and patterns","Comments"],correct:1,explain:"Anything with rows and columns (or repeated repeats) usually calls for nesting loops."}
 ]},
{id:27, level:4, title:"Lists", est:"5 min",
 explain:`<p>A <span class="term" data-term="List">list</span> stores multiple values together, in order, inside square brackets <code>[ ]</code>, separated by commas. A list can hold any number of items, and you can change it later.</p>`,
 example:`friends = ["John", "Mark", "Anna"]
print(friends)
print(len(friends))`,
 lineExplain:[["friends = [\"John\", \"Mark\", \"Anna\"]","Creates a list with three string items, in this order."],["print(len(friends))","len() tells you how many items are in the list — here, 3."]],
 tryPrompt:"Create a list of three of your favorite foods and print the whole list.",
 tryStarter:`foods = ["pizza", "sushi", "tacos"]\nprint(foods)`,
 quiz:[
   {q:"A list is created using:",opts:["Curly braces { }","Square brackets [ ]","Parentheses ( )"],correct:1,explain:"Square brackets [ ] with comma-separated items make a list."},
   {q:"len(friends) tells you:",opts:["The first item in the list","How many items are in the list","The list's name"],correct:1,explain:"len() returns a count of items — useful for lists, strings, and more."}
 ]},
{id:28, level:4, title:"Accessing List Items", est:"6 min",
 explain:`<p>Each item in a list has a position called its <span class="term" data-term="Index">index</span>, starting at <code>0</code> for the first item. Use <code>list[index]</code> to grab a specific item. Negative indexes count from the end: <code>-1</code> is the last item.</p>`,
 example:`friends = ["John", "Mark", "Anna"]
print(friends[0])
print(friends[2])
print(friends[-1])`,
 lineExplain:[["print(friends[0])","Gets the first item — indexing starts at 0, not 1. Prints John."],["print(friends[-1])","Negative indexes count backward from the end. -1 is always the last item: Anna."]],
 tryPrompt:"Print the second item and the last item of a list of your own.",
 tryStarter:`colors = ["red", "green", "blue"]\nprint(colors[1])\nprint(colors[-1])`,
 quiz:[
   {q:"What is the index of the first item in a list?",opts:["1","0","-1"],correct:1,explain:"Python indexing always starts counting from 0."},
   {q:"friends[-1] gives you:",opts:["The first item","An error","The last item"],correct:2,explain:"Negative indexes count from the end of the list, so -1 is always the last item."}
 ]},
{id:29, level:4, title:"Adding Items", est:"4 min",
 explain:`<p><code>.append(item)</code> adds a new item to the end of a list. <code>.insert(index, item)</code> adds it at a specific position instead.</p>`,
 example:`friends = ["John", "Mark"]
friends.append("Anna")
print(friends)`,
 lineExplain:[["friends.append(\"Anna\")","Adds \"Anna\" to the end of the list, in place — the list itself changes."],["print(friends)","Now shows all three names, including the newly added one."]],
 tryPrompt:"Start with a list of two items and append a third one.",
 tryStarter:`snacks = ["chips", "candy"]\nsnacks.append("popcorn")\nprint(snacks)`,
 quiz:[
   {q:"friends.append(\"Anna\") does what?",opts:["Replaces the whole list with \"Anna\"","Adds \"Anna\" to the end of the list","Removes the last item"],correct:1,explain:"append() adds one new item onto the end of the existing list."},
   {q:"Which method lets you add an item at a specific position?",opts:[".insert(index, item)",".append(item)",".len(item)"],correct:0,explain:"insert() takes both a position and the item, unlike append() which always adds to the end."}
 ]},
{id:30, level:4, title:"Removing Items", est:"4 min",
 explain:`<p><code>.remove(value)</code> deletes the first item that matches that value. <code>.pop(index)</code> removes (and gives back) the item at a specific position — leaving it empty removes the last item.</p>`,
 example:`friends = ["John", "Mark", "Anna"]
friends.remove("Mark")
print(friends)`,
 lineExplain:[["friends.remove(\"Mark\")","Finds \"Mark\" in the list and deletes it — the list shrinks by one item."],["print(friends)","Now shows only John and Anna."]],
 tryPrompt:"Start with a list of three items and remove the middle one.",
 tryStarter:`tasks = ["dishes", "laundry", "trash"]\ntasks.remove("laundry")\nprint(tasks)`,
 quiz:[
   {q:".remove(\"Mark\") deletes:",opts:["The item at position \"Mark\"","The first item that equals \"Mark\"","Every item in the list"],correct:1,explain:"remove() searches for a matching value, not a position."},
   {q:"What does .pop() with no arguments remove?",opts:["The first item","A random item","The last item"],correct:2,explain:"pop() without an index defaults to removing (and returning) the last item."}
 ]},
{id:31, level:4, title:"Looping Through Lists", est:"5 min",
 explain:`<p>A <code>for</code> loop can go directly through a list's items — no <code>range()</code> or index needed. <code>for item in my_list:</code> gives you each value, one at a time.</p>`,
 example:`friends = ["John", "Mark", "Anna"]
for friend in friends:
    print("Hello,", friend)`,
 lineExplain:[["for friend in friends:","friend takes on each value in the list in turn — first \"John\", then \"Mark\", then \"Anna\"."],["    print(\"Hello,\", friend)","Runs once per item in the list, using the current value each time."]],
 tryPrompt:"Loop through a list of three numbers and print each one doubled.",
 tryStarter:`nums = [3, 6, 9]\nfor n in nums:\n    print(n * 2)`,
 quiz:[
   {q:"for friend in friends: loops:",opts:["A fixed number of times, always 10","Once for every item in the friends list","Only once"],correct:1,explain:"This form of for loop automatically runs once per item, whatever the list's length."},
   {q:"Do you need range() to loop through a list's items directly?",opts:["Yes, always","No — for item in list: works without it","Only for lists longer than 5"],correct:1,explain:"range() is for counting numbers; looping straight through a list doesn't need it."}
 ]},
{id:32, level:4, title:"Tuples", est:"4 min",
 explain:`<p>A <span class="term" data-term="Tuple">tuple</span> is just like a list, but written with parentheses <code>( )</code> instead of brackets — and once created, it can't be changed. Use tuples for values that should stay fixed.</p>`,
 example:`point = (3, 7)
print(point[0])
print(point[1])`,
 lineExplain:[["point = (3, 7)","A tuple with two values — parentheses instead of square brackets."],["print(point[0])","Tuples are indexed the same way as lists: position 0 is the first item."]],
 tryPrompt:"Create a tuple with your favorite color and a number, then print each item.",
 tryStarter:`fav = ("blue", 7)\nprint(fav[0])\nprint(fav[1])`,
 quiz:[
   {q:"Tuples are written with:",opts:["Square brackets [ ]","Parentheses ( )","Curly braces { }"],correct:1,explain:"Tuples use ( ) — that's the main visual difference from a list."},
   {q:"The key difference between a list and a tuple is:",opts:["Tuples can hold more items","Tuples can't be changed once created","Lists can't be indexed"],correct:1,explain:"Tuples are immutable — you can read them but not modify them after creation."}
 ]},
{id:33, level:4, title:"Sets", est:"4 min",
 explain:`<p>A <span class="term" data-term="Set">set</span> is an unordered collection of unique values — duplicates are automatically removed, and there's no guaranteed order. Sets use curly braces <code>{ }</code>.</p>`,
 example:`numbers = {1, 2, 2, 3, 3, 3}
print(numbers)`,
 lineExplain:[["numbers = {1, 2, 2, 3, 3, 3}","Duplicate values are dropped automatically — the set only keeps one of each."],["print(numbers)","Prints {1, 2, 3} — order isn't guaranteed to match how you typed it."]],
 tryPrompt:"Create a set from a list of numbers with some repeats, and print it to see the duplicates disappear.",
 tryStarter:`nums = {5, 5, 6, 7, 7, 7}\nprint(nums)`,
 quiz:[
   {q:"What happens to duplicate values in a set?",opts:["Python raises an error","They're automatically removed — each value appears once","They're kept, just reordered"],correct:1,explain:"Sets only ever store unique values, no matter how many duplicates you write."},
   {q:"Sets are written using:",opts:["( )","[ ]","{ }"],correct:2,explain:"Curly braces { } create a set (when there are no key:value pairs — that's a dictionary instead)."}
 ]},
{id:34, level:4, title:"Dictionaries", est:"6 min",
 explain:`<p>A <span class="term" data-term="Dictionary">dictionary</span> stores <span class="term" data-term="Key-Value Pair">key-value pairs</span> — instead of a numeric index, you look values up by a name (key) you choose. Written with curly braces <code>{ }</code> and colons between key and value.</p>`,
 example:`student = {
    "name": "Christian",
    "age": 22
}
print(student["name"])
print(student["age"])`,
 lineExplain:[["student = { \"name\": \"Christian\", \"age\": 22 }","Two key-value pairs: \"name\" maps to \"Christian\", \"age\" maps to 22."],["print(student[\"name\"])","Looks up the value stored under the key \"name\" — not a numeric position."]],
 tryPrompt:"Create a dictionary describing a pet with keys \"name\" and \"type\", then print both values.",
 tryStarter:`pet = {"name": "Rex", "type": "dog"}\nprint(pet["name"])\nprint(pet["type"])`,
 quiz:[
   {q:"Dictionaries look up values by:",opts:["A numeric position like 0, 1, 2","A key you choose, like \"name\"","Alphabetical order"],correct:1,explain:"Dictionaries map keys to values — you look things up by the key, not a position."},
   {q:"student[\"age\"] in the example returns:",opts:["\"age\"","22","An error"],correct:1,explain:"Indexing a dictionary with a key gives back the value stored under that key: 22."}
 ]},

/* -------- Level 5 — Functions -------- */
{id:35, level:5, title:"What is a Function?", est:"5 min",
 explain:`<p>A <span class="term" data-term="Function">function</span> is like a machine: you give it something, it does a job, and it can hand something back. <code>print()</code> and <code>len()</code> are functions you've already been using — they were just built for you. Now you'll build your own.</p>`,
 example:`print("Hello")
len("Python")`,
 lineExplain:[["print(\"Hello\")","print is a function someone already built — you just feed it a value and it does its job."],["len(\"Python\")","len is another ready-made function — it takes a value in and hands a number back out."]],
 tryPrompt:"Call two functions you already know (like print() and len()) on a string of your choice.",
 tryStarter:`word = "python"\nprint(word)\nprint(len(word))`,
 quiz:[
   {q:"A function is best described as:",opts:["A type of variable","A reusable block of code that performs a task","A kind of loop"],correct:1,explain:"Functions package up a task so you can reuse it by name instead of rewriting the code."},
   {q:"Which of these have you already been using as functions?",opts:["print() and len()","name and age","if and else"],correct:0,explain:"print() and len() are both built-in functions — code someone else already wrote for you to reuse."}
 ]},
{id:36, level:5, title:"Creating Functions", est:"6 min",
 explain:`<p>You create your own function with <code>def</code>, a name, parentheses, and a colon. Everything indented underneath belongs to the function — it only runs when the function is called.</p>`,
 example:`def greet():
    print("Hello there!")`,
 lineExplain:[["def greet():","def starts a new function definition named greet. The colon and indented line below are its body."],["    print(\"Hello there!\")","This only runs when greet() is actually called — defining it doesn't run it yet."]],
 tryPrompt:"Define a function called say_hi that prints a greeting of your choice.",
 tryStarter:`def say_hi():\n    print("Hi from my function!")`,
 quiz:[
   {q:"Which keyword starts a function definition?",opts:["func","def","function"],correct:1,explain:"Python uses def, short for \"define\", to start a function definition."},
   {q:"Does defining a function run its code right away?",opts:["Yes, immediately","No — it only runs when the function is called","Only the first line runs"],correct:1,explain:"def just teaches Python the recipe. Nothing inside actually runs until the function is called."}
 ]},
{id:37, level:5, title:"Calling Functions", est:"4 min",
 explain:`<p>Defining a function just teaches Python the recipe — nothing happens until you <span class="term" data-term="Function Call">call</span> it by writing its name followed by parentheses <code>()</code>.</p>`,
 example:`def greet():
    print("Hello there!")

greet()
greet()`,
 lineExplain:[["def greet():","Just defines the function — no output yet."],["greet()\ngreet()","Each call runs the function's body from top to bottom, so \"Hello there!\" prints twice."]],
 tryPrompt:"Define a function, then call it three times.",
 tryStarter:`def cheer():\n    print("You've got this!")\n\ncheer()\ncheer()\ncheer()`,
 quiz:[
   {q:"How do you call (run) a function named greet?",opts:["greet","call greet","greet()"],correct:2,explain:"Parentheses after the name are what actually run a function — without them, you're just referring to it."},
   {q:"If you call greet() three times, how many times does its body run?",opts:["Once, no matter what","Three times","Zero times"],correct:1,explain:"Each call runs the function's whole body again from the top, independently."}
 ]},
{id:38, level:5, title:"Parameters", est:"6 min",
 explain:`<p>A <span class="term" data-term="Parameter">parameter</span> is a placeholder name listed inside a function's parentheses when you define it. It lets a function accept different information each time it's called, instead of always doing the exact same thing.</p>`,
 example:`def greet(name):
    print("Hello,", name)

greet("Christian")`,
 lineExplain:[["def greet(name):","name is a parameter — a placeholder that will stand for whatever value is passed in."],["greet(\"Christian\")","\"Christian\" gets plugged into name inside the function for this particular call."]],
 tryPrompt:"Write a function that takes one parameter, item, and prints \"I bought <item>\".",
 tryStarter:`def bought(item):\n    print("I bought", item)\n\nbought("apples")`,
 quiz:[
   {q:"A parameter is:",opts:["A placeholder name in a function's definition","The result a function gives back","A type of loop"],correct:0,explain:"Parameters are named slots in the function definition that get filled in with real values when the function is called."},
   {q:"Why use parameters instead of hardcoding a value inside the function?",opts:["Parameters run faster","So the function can work with different values each time it's called","Functions require at least one parameter"],correct:1,explain:"Parameters make a function flexible and reusable — the same code can handle many different inputs."}
 ]},
{id:39, level:5, title:"Arguments", est:"5 min",
 explain:`<p>An <span class="term" data-term="Argument">argument</span> is the actual value you hand to a function when you call it — it fills in the parameter. A function can take more than one, separated by commas.</p>`,
 example:`def greet(name, age):
    print(name, "is", age, "years old")

greet("Christian", 22)`,
 lineExplain:[["def greet(name, age):","Two parameters this time — both need to be filled in when the function is called."],["greet(\"Christian\", 22)","\"Christian\" and 22 are the arguments — they fill name and age in that same order."]],
 tryPrompt:"Write a function with two parameters, city and country, and call it with your own values.",
 tryStarter:`def describe(city, country):\n    print(city, "is in", country)\n\ndescribe("Manila", "the Philippines")`,
 quiz:[
   {q:"What's the difference between a parameter and an argument?",opts:["They're exactly the same thing","A parameter is the placeholder in the definition; an argument is the real value passed in when calling","An argument only works with numbers"],correct:1,explain:"Parameter = the name in def(...). Argument = the actual value you supply at the call site."},
   {q:"In greet(\"Christian\", 22), what order do the arguments fill the parameters?",opts:["Alphabetical order","The same order they're listed in","Random order"],correct:1,explain:"Arguments are matched to parameters in the order they're written, left to right, by default."}
 ]},
{id:40, level:5, title:"Return Values", est:"7 min",
 explain:`<p><code>return</code> sends a value back out of a function so it can be stored or used elsewhere — unlike <code>print()</code>, which only displays something and hands nothing back. A function can only return once; the function stops as soon as it hits <code>return</code>.</p>`,
 example:`def add(a, b):
    return a + b

result = add(3, 4)
print(result)`,
 lineExplain:[["return a + b","Sends the sum back out of the function, instead of just printing it."],["result = add(3, 4)","Stores the returned value (7) in a new variable, so it can be reused later."]],
 tryPrompt:"Write a function called square that takes a number and returns its square, then print the result of calling it.",
 tryStarter:`def square(n):\n    return n * n\n\nprint(square(5))`,
 quiz:[
   {q:"What does return do that print() doesn't?",opts:["Nothing — they're identical","It sends a value back so it can be stored or reused in code","It shows the value with quotes"],correct:1,explain:"print() only displays text on screen. return hands a real value back to whatever called the function, so it can be saved or used further."},
   {q:"result = add(3, 4) works because add():",opts:["Prints its answer","Returns its answer","Has no parameters"],correct:1,explain:"Assignment only captures a value if the function actually returns one — print() alone wouldn't give result anything useful to store."}
 ]},
{id:41, level:5, title:"Default Parameters", est:"5 min",
 explain:`<p>A parameter can have a <span class="term" data-term="Default Parameter">default value</span>, used automatically if the caller doesn't provide one. Write it as <code>parameter=value</code> in the function definition.</p>`,
 example:`def greet(name, greeting="Hello"):
    print(greeting + ",", name)

greet("Christian")
greet("Christian", "Hi")`,
 lineExplain:[["def greet(name, greeting=\"Hello\"):","greeting defaults to \"Hello\" if the caller doesn't supply their own."],["greet(\"Christian\")\ngreet(\"Christian\", \"Hi\")","The first call uses the default \"Hello\"; the second overrides it with \"Hi\"."]],
 tryPrompt:"Write a function that takes a name and a title parameter defaulting to \"friend\", then call it both with and without a title.",
 tryStarter:`def welcome(name, title="friend"):\n    print("Welcome,", title, name)\n\nwelcome("Alex")\nwelcome("Alex", "Captain")`,
 quiz:[
   {q:"How do you give a parameter a default value?",opts:["default parameter","parameter=value in the definition","parameter == value"],correct:1,explain:"Writing name=value inside the parentheses of a def line sets that parameter's default."},
   {q:"If a default parameter isn't given an argument when called, what happens?",opts:["Python raises an error","The default value is used automatically","The function skips that step"],correct:1,explain:"Default values only kick in when the caller leaves that argument out — otherwise the supplied value overrides it."}
 ]},
{id:42, level:5, title:"Simple Function Projects", est:"8 min",
 explain:`<p>Real programs are built by combining small functions, each handling one job. Breaking a program into functions makes it easier to read, test, and reuse.</p>`,
 example:`def square(n):
    return n * n

def cube(n):
    return n * n * n

print(square(4))
print(cube(2))`,
 lineExplain:[["def square(n): / def cube(n):","Two small, separate functions — each does exactly one job."],["print(square(4))\nprint(cube(2))","Each function is called independently and its result printed."]],
 tryPrompt:"Write a function is_even(n) that returns True if n is even, otherwise False. Print the result for a couple of numbers.",
 tryStarter:`def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))\nprint(is_even(7))`,
 quiz:[
   {q:"Why break a program into several small functions instead of one big block of code?",opts:["It runs faster","It's easier to read, test, and reuse each piece","Python requires at least two functions per program"],correct:1,explain:"Small, focused functions are easier to understand, debug, and reuse elsewhere — a core habit in real-world programming."},
   {q:"is_even(n) returning n % 2 == 0 works because:",opts:["% 2 == 0 is always True","n % 2 == 0 is itself a True/False expression, which return can send back directly","is_even always returns True"],correct:1,explain:"n % 2 == 0 evaluates to a Boolean (True or False), and return can send that Boolean straight back as the function's result."}
 ]},

/* -------- Level 6 — Errors & Debugging -------- */
{id:43, level:6, title:"What is an Error?", est:"4 min",
 explain:`<p>An <span class="term" data-term="Error">error</span> is Python's way of saying "something in this code stopped me from finishing." Every programmer sees errors constantly — they're not a sign of failure, they're feedback that helps you fix your code.</p>`,
 example:`print("Hello"`,
 lineExplain:[["print(\"Hello\"","Missing the closing parenthesis — Python can't tell where the print() call ends, so it stops and reports an error instead of guessing."]],
 tryPrompt:"Run the broken line below on purpose to see what a real Python error looks like, then fix it.",
 tryStarter:`print("Hello"`,
 quiz:[
   {q:"An error means:",opts:["Your computer is broken","Python found something it can't understand or complete, and stopped to tell you","You have to start the whole program over"],correct:1,explain:"Errors are just Python's feedback that something needs fixing — not a sign anything is fundamentally wrong."},
   {q:"Should you feel bad about getting errors while coding?",opts:["Yes, it means you failed","No — errors are a completely normal part of writing code, for beginners and experts alike","Only if it happens more than once"],correct:1,explain:"Every programmer, no matter how experienced, sees errors constantly. They're part of the normal process, not a verdict on your ability."}
 ]},
{id:44, level:6, title:"Syntax Errors", est:"5 min",
 explain:`<p>A <span class="term" data-term="Syntax Error">SyntaxError</span> happens when code breaks Python's grammar rules — a missing colon, an unmatched bracket, a misspelled keyword. Python checks the grammar of the whole file before running any of it, so a single SyntaxError stops the entire program.</p>`,
 example:`age = 20
if age >= 18
    print("Adult")`,
 lineExplain:[["if age >= 18","Missing the colon : at the end — Python requires one after if, elif, else, for, while, and def."]],
 tryPrompt:"Fix the missing colon below so the program runs.",
 tryStarter:`age = 20\nif age >= 18\n    print("Adult")`,
 quiz:[
   {q:"A SyntaxError means:",opts:["The values in your code are wrong","The code breaks Python's grammar rules — like a missing colon or bracket","Your internet connection dropped"],correct:1,explain:"SyntaxErrors are about the structure and grammar of the code itself, not about the values it works with."},
   {q:"Can a program with a SyntaxError partially run?",opts:["Yes, everything before the error still runs","No — Python checks the whole file's grammar before running any of it","Only the first line runs"],correct:1,explain:"Python parses the entire file first. If anything breaks the grammar rules, nothing runs at all until it's fixed."}
 ]},
{id:45, level:6, title:"Name Errors", est:"4 min",
 explain:`<p>A <span class="term" data-term="Name Error">NameError</span> happens when code refers to a variable or function Python has never seen — almost always a typo, or a name used before it was ever created.</p>`,
 example:`name = "Christian"
print(nam)`,
 lineExplain:[["print(nam)","nam was never created — only name was. Python has no idea what nam refers to, so it raises a NameError."]],
 tryPrompt:"Spot and fix the misspelled variable name below.",
 tryStarter:`score = 100\nprint(scor)`,
 quiz:[
   {q:"A NameError usually means:",opts:["Too many variables were created","You used a variable or function name Python has never seen before","A number is missing decimals"],correct:1,explain:"NameError fires whenever Python encounters a name it doesn't recognize — nothing was ever assigned to it."},
   {q:"What's the most common cause of a NameError?",opts:["A misspelled variable name","Too much indentation","A missing colon"],correct:0,explain:"Simple typos in variable or function names are by far the most frequent cause of NameErrors."}
 ]},
{id:46, level:6, title:"Type Errors", est:"5 min",
 explain:`<p>A <span class="term" data-term="Type Error">TypeError</span> happens when an operation is used on data types that don't work together — like adding text and a number directly with <code>+</code>, or trying to call something that isn't actually a function.</p>`,
 example:`items = 3
print("You bought " + items)`,
 lineExplain:[["print(\"You bought \" + items)","+ can't combine a string and an integer directly — Python won't silently guess how to join them, so it raises a TypeError."]],
 tryPrompt:"Fix the TypeError below using str(), or by switching to a comma inside print().",
 tryStarter:`items = 3\nprint("You bought " + items)`,
 quiz:[
   {q:"TypeError usually happens when:",opts:["You misspell a variable name","You mix data types in a way Python can't handle, like string + number","You forget a colon"],correct:1,explain:"TypeErrors are specifically about combining or using values of the wrong type for a given operation."},
   {q:"Which of these fixes a \"text\" + number TypeError?",opts:["Wrapping the number in str(), or using a comma in print() instead of +","Adding more spaces around the +","Renaming the variable"],correct:0,explain:"str() converts the number to text so + can join two strings, or a comma in print() lets Python handle the conversion for you."}
 ]},
{id:47, level:6, title:"Index Errors", est:"4 min",
 explain:`<p>An <span class="term" data-term="Index Error">IndexError</span> happens when code asks for a list position that doesn't exist — like asking for item 5 in a list that only has 3 items.</p>`,
 example:`friends = ["John", "Mark", "Anna"]
print(friends[5])`,
 lineExplain:[["print(friends[5])","friends only has indexes 0, 1, and 2 — there is no index 5, so Python raises an IndexError."]],
 tryPrompt:"Fix the index below so it safely prints the list's last item.",
 tryStarter:`colors = ["red", "green", "blue"]\nprint(colors[5])`,
 quiz:[
   {q:"An IndexError happens when:",opts:["You ask for a list position that doesn't exist","A variable name is misspelled","You forget quotation marks"],correct:0,explain:"IndexError is specifically about asking a list, string, or tuple for a position that's out of range."},
   {q:"What's a safe way to always get a list's last item, no matter its length?",opts:["list[100]","list[-1]","list[first]"],correct:1,explain:"Negative indexing counts from the end, so -1 always refers to the last item regardless of the list's length."}
 ]},
{id:48, level:6, title:"Reading Error Messages", est:"6 min",
 explain:`<p>Python's error message (called a <span class="term" data-term="Traceback">traceback</span>) tells you the line where the problem happened, and the error type plus a short explanation on the very last line — that last line is usually the best place to start reading.</p>`,
 example:`Traceback (most recent call last):
  File "main.py", line 2, in <module>
    print(nam)
NameError: name 'nam' is not defined`,
 lineExplain:[["File \"main.py\", line 2","Tells you exactly which line caused the problem — start your search there."],["NameError: name 'nam' is not defined","The last line names the error type and gives a short, specific explanation. Read this line first."]],
 tryPrompt:"Run the broken code below, then find the line number and error type in the message it shows.",
 tryStarter:`total = 10\nprint(totl)`,
 quiz:[
   {q:"In a Python traceback, where's the most useful information usually found?",opts:["The very first line","The very last line — it names the error type and gives a short explanation","Always in the exact middle"],correct:1,explain:"The final line of a traceback names the specific error and explains it — that's the best starting point."},
   {q:"What does the line number in an error message tell you?",opts:["How many total errors exist in the file","Exactly which line of your code triggered the problem","Nothing useful, it's random"],correct:1,explain:"The line number points you straight to where Python ran into trouble, saving you from scanning the whole file."}
 ]},
{id:49, level:6, title:"Finding Mistakes", est:"6 min",
 explain:`<p>Good debugging is a habit: read the error type and message, find the line it points to, and compare it to what you actually meant to write. Sometimes the real mistake is on an earlier line the broken line depends on.</p>`,
 example:`price = 9.99
quantity = 3
total = pric * quantity
print(total)`,
 lineExplain:[["total = pric * quantity","pric is a typo for price — comparing this line to the variable actually created above reveals the mistake."]],
 tryPrompt:"Find and fix the mistake below by comparing each variable used to the ones actually created.",
 tryStarter:`price = 9.99\nquantity = 3\ntotal = pric * quantity\nprint(total)`,
 quiz:[
   {q:"When debugging, what's a good first step?",opts:["Rewrite the whole program from scratch","Read the error type and message, then find the line it points to","Ignore it and run the program again unchanged"],correct:1,explain:"Reading the specific error and its line number focuses your search instead of guessing randomly."},
   {q:"Sometimes the real mistake is:",opts:["Always on the exact line the error names","On an earlier line the broken line actually depends on","Never inside your own code"],correct:1,explain:"An error often surfaces on the line where it finally breaks something, even though the actual mistake happened earlier."}
 ]},
{id:50, level:6, title:"Fixing Broken Programs", est:"7 min",
 explain:`<p>Fixing code is a cycle: run it, read the error, make one small change, run it again. Don't try to fix everything at once from memory — one fix at a time keeps you from accidentally introducing new mistakes.</p>`,
 example:`def add(a, b)
    return a + b

print(add(3, "4"))`,
 lineExplain:[["def add(a, b)","Missing the colon after the parentheses — every def line needs one."],["print(add(3, \"4\"))","Even after adding the colon, this mixes an integer and a string — passing add(3, 4) instead would fix it."]],
 tryPrompt:"This program has two separate bugs. Fix them one at a time, running after each fix, until it prints 7.",
 tryStarter:`def add(a, b)\n    return a + b\n\nprint(add(3, "4"))`,
 quiz:[
   {q:"When a program has multiple bugs, what's the best approach?",opts:["Fix everything at once from memory","Fix one bug, run it, then move to the next error that shows up","Delete the program and start completely over"],correct:1,explain:"Fixing one issue at a time and re-running lets you confirm each fix actually worked before tackling the next."},
   {q:"Why run the code again after each single fix?",opts:["It isn't really necessary","To confirm that fix worked and clearly see the next issue, instead of guessing at several at once","Because Python requires it before continuing"],correct:1,explain:"Re-running after each change verifies your fix and reveals the next real problem, rather than stacking guesses."}
 ]},

/* -------- Level 7 — Files & Data -------- */
{id:51, level:7, title:"Writing to a File", est:"6 min",
 explain:`<p>To create or update a <span class="term" data-term="File">file</span>, use <code>open(filename, "w")</code> inside a <code>with</code> block — <code>"w"</code> means write mode. <code>with</code> makes sure the file is safely closed for you when the block ends, even if something goes wrong.</p>`,
 example:`with open("notes.txt", "w") as f:
    f.write("Hello, file!")
print("File written!")`,
 lineExplain:[["with open(\"notes.txt\", \"w\") as f:","Opens (or creates) notes.txt in write mode. with automatically closes it when the indented block ends."],["f.write(\"Hello, file!\")","Writes text into the open file, replacing any old contents it may have had."]],
 tryPrompt:"Write your own message into a file called diary.txt using the pattern above.",
 tryStarter:`with open("diary.txt", "w") as f:\n    f.write("Today I learned about files.")\nprint("Saved!")`,
 quiz:[
   {q:"What does mode \"w\" do when opening a file?",opts:["Opens it for reading only","Opens it for writing, creating the file if it doesn't exist yet","Deletes the file immediately"],correct:1,explain:"\"w\" mode writes to a file, creating it first if needed — and starts it empty if it already existed."},
   {q:"Why use with open(...) as f: instead of just open(...)?",opts:["It's required for every line of Python code","It automatically closes the file for you once the block ends","It makes the file open faster"],correct:1,explain:"with handles closing the file automatically, even if an error happens partway through — safer than remembering to close it yourself."}
 ]},
{id:52, level:7, title:"Reading from a File", est:"5 min",
 explain:`<p><code>open(filename, "r")</code> opens a file for reading (<code>"r"</code> is actually the default mode). <code>.read()</code> pulls in the file's entire contents as one string.</p>`,
 example:`with open("notes.txt", "w") as f:
    f.write("Hello, file!")

with open("notes.txt", "r") as f:
    content = f.read()
print(content)`,
 lineExplain:[["with open(\"notes.txt\", \"r\") as f:","Opens the same file again, this time in read mode."],["content = f.read()","Reads the file's entire contents into one string, stored in content."]],
 tryPrompt:"Write a short message to a file, then open it again and print what you read back.",
 tryStarter:`with open("log.txt", "w") as f:\n    f.write("Practice makes progress.")\n\nwith open("log.txt", "r") as f:\n    text = f.read()\nprint(text)`,
 quiz:[
   {q:"Which mode opens a file for reading?",opts:["\"w\"","\"r\"","\"read\""],correct:1,explain:"\"r\" is the read mode — and also Python's default if you leave the mode out entirely."},
   {q:"f.read() gives you:",opts:["The file's entire contents as one string","Just the file's name","The number of lines in the file"],correct:0,explain:"read() pulls in everything in the file at once, as a single string."}
 ]},
{id:53, level:7, title:"Reading Line by Line", est:"6 min",
 explain:`<p>Looping directly over an open file gives you one line at a time — handy for processing a file bit by bit instead of all at once. <code>.strip()</code> removes the invisible newline character left at the end of each line.</p>`,
 example:`with open("todo.txt", "w") as f:
    f.write("Buy milk\\nWalk dog\\nRead book")

with open("todo.txt", "r") as f:
    for line in f:
        print(line.strip())`,
 lineExplain:[["for line in f:","Loops through the open file one line at a time, just like looping through a list."],["print(line.strip())",".strip() removes the trailing newline so each line prints cleanly."]],
 tryPrompt:"Write three lines to a file, then loop through and print each one with a dash in front.",
 tryStarter:`with open("items.txt", "w") as f:\n    f.write("apples\\nbananas\\ncherries")\n\nwith open("items.txt", "r") as f:\n    for line in f:\n        print("-", line.strip())`,
 quiz:[
   {q:"Looping with for line in f: gives you:",opts:["The whole file as one string","One line at a time","Only the first line"],correct:1,explain:"Iterating over an open file object yields it line by line, similar to looping through a list of strings."},
   {q:"Why call .strip() on each line?",opts:["To make the text uppercase","To remove the trailing newline character left over from the file","To count the characters in the line"],correct:1,explain:"Each line read from a file keeps its newline character at the end — strip() cleans that off before you use or print it."}
 ]},
{id:54, level:7, title:"CSV Files", est:"7 min",
 explain:`<p><span class="term" data-term="CSV">CSV</span> (comma-separated values) stores tabular data as plain text — one row per line, columns separated by commas. Python's built-in <code>csv</code> module handles reading and writing rows for you.</p>`,
 example:`import csv

with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "grade"])
    writer.writerow(["Alex", "A"])

with open("students.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)`,
 lineExplain:[["writer.writerow([\"name\", \"grade\"])","Writes one row — each item in the list becomes a comma-separated column in the file."],["for row in reader: print(row)","Each row read back comes in as a list of strings, one item per column."]],
 tryPrompt:"Write two rows of your own CSV data (like fruit and price), then read and print each row.",
 tryStarter:`import csv\n\nwith open("fruits.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["fruit", "price"])\n    writer.writerow(["apple", "0.50"])\n\nwith open("fruits.csv", "r") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)`,
 quiz:[
   {q:"CSV stands for:",opts:["Comma-Separated Values","Coded String Values","Computer System Variables"],correct:0,explain:"CSV files store rows of data as plain text, with commas marking where one column ends and the next begins."},
   {q:"csv.writer(f).writerow([...]) writes:",opts:["One row, turning each list item into a column","The entire file's contents at once","Only numbers, never text"],correct:0,explain:"Each call to writerow() adds exactly one row, using the list's items as that row's columns."}
 ]},
{id:55, level:7, title:"JSON Data", est:"7 min",
 explain:`<p><span class="term" data-term="JSON">JSON</span> stores structured data — like dictionaries and lists — as text, and is one of the most common formats for exchanging data between programs. <code>json.dumps()</code> converts a Python object into JSON text; <code>json.loads()</code> converts it back.</p>`,
 example:`import json

student = {"name": "Christian", "age": 22}
text = json.dumps(student)
print(text)

back = json.loads(text)
print(back["name"])`,
 lineExplain:[["text = json.dumps(student)","Converts the Python dictionary into a JSON-formatted string, ready to save or send somewhere."],["back = json.loads(text)","Converts that JSON string back into a real Python dictionary you can use normally, like back[\"name\"]."]],
 tryPrompt:"Create a dictionary describing a pet, convert it to JSON text with json.dumps(), then print it.",
 tryStarter:`import json\n\npet = {"name": "Rex", "type": "dog"}\ntext = json.dumps(pet)\nprint(text)`,
 quiz:[
   {q:"json.dumps() converts a Python object into:",opts:["A JSON-formatted string","A CSV file","A list of numbers"],correct:0,explain:"dumps (\"dump string\") turns a Python object like a dict or list into JSON text."},
   {q:"json.loads() does the opposite of dumps() — it converts:",opts:["A string into a number","JSON text back into a real Python object","A file into plain text"],correct:1,explain:"loads (\"load string\") parses JSON text back into a usable Python dictionary or list."}
 ]},
{id:56, level:7, title:"Basic Data Processing", est:"7 min",
 explain:`<p>Real data work combines everything so far: get data into a list or dictionary, process it with loops and conditions, and use built-in helpers like <code>sum()</code> and <code>max()</code> to answer questions about it.</p>`,
 example:`scores = [88, 92, 75, 60, 99]
total = 0
for s in scores:
    total = total + s
average = total / len(scores)
print("Average:", average)`,
 lineExplain:[["total = total + s","Adds up every score in the list, one at a time, as the loop runs through them."],["average = total / len(scores)","Dividing the running total by how many scores there are gives the average."]],
 tryPrompt:"Given a list of prices, print the total and the most expensive item using sum() and max().",
 tryStarter:`prices = [12.50, 7.25, 20.00, 4.99]\ntotal = sum(prices)\nprint("Total:", total)\nprint("Most expensive:", max(prices))`,
 quiz:[
   {q:"What does sum(prices) do?",opts:["Counts how many prices there are","Adds up every value in the list","Sorts the list from low to high"],correct:1,explain:"sum() is a built-in that adds up all the numeric values in a list for you."},
   {q:"max(prices) returns:",opts:["The list's length","The largest value in the list","The first value in the list"],correct:1,explain:"max() scans the whole list and gives back whichever value is largest."}
 ]},
{id:57, level:8, title:"What are Objects?", est:"5 min",
 explain:`<p>Almost everything in Python is an <span class="term" data-term="Object">object</span> — a bundle that groups together some data and the actions that make sense for that data. A string is an object. A list is an object. Even the numbers you've been using are objects.</p>
 <p>Think of a real-world thing, like a dog. A dog has <em>attributes</em> (name, breed, age) and it can <em>do</em> things (bark, sit, eat). In code, an object works the same way — it groups data (attributes) with behavior (methods) into one thing you can pass around and reuse.</p>`,
 example:`text = "hello"
print(text.upper())
print(text.count("l"))`,
 lineExplain:[["text.upper()","upper() is a method that belongs to every string object — it acts on the data (text) it's attached to."],["text.count(\"l\")","count() is another method — same object, different action. Every string object comes with these built in."]],
 tryPrompt:"You've been calling methods on objects this whole time without naming them that. Call two different string methods on a sentence of your own and print the results.",
 tryStarter:`sentence = "Python is fun"\nprint(sentence.lower())\nprint(sentence.replace("fun", "great"))`,
 quiz:[
   {q:"An object, in programming, is best described as:",opts:["A bundle of data plus the actions (methods) that work with that data","Only a number","A type of error"],correct:0,explain:"Objects group related data (attributes) and behavior (methods) together as one thing."},
   {q:"Which of these have you already been using as objects, without naming them that?",opts:["Nothing yet","Strings and lists — they both have built-in methods","Only comments"],correct:1,explain:"Strings, lists, and dictionaries are all objects — that's why they come with built-in methods like .upper() or .append()."}
 ]},
{id:58, level:8, title:"What are Classes?", est:"6 min",
 explain:`<p>A <span class="term" data-term="Class">class</span> is a blueprint for creating objects. It doesn't do anything by itself — it just describes what objects made from it will look like and be able to do.</p>
 <p>If a class is a cookie cutter, an object made from it is the actual cookie. You can stamp out as many cookies (objects) as you want from one cutter (class), and each one is separate, even though they're shaped the same way.</p>`,
 example:`class Dog:
    pass

my_dog = Dog()
print(type(my_dog))`,
 lineExplain:[["class Dog:","Defines a new blueprint named Dog. Nothing happens yet — this just describes what a Dog will be."],["my_dog = Dog()","Creates an actual Dog object from the blueprint. This is called \"instantiating\" the class."]],
 tryPrompt:"Create an empty class called Car, then create one object from it and print its type.",
 tryStarter:`class Car:\n    pass\n\nmy_car = Car()\nprint(type(my_car))`,
 quiz:[
   {q:"A class is:",opts:["A blueprint that describes what objects made from it will look like","A single object","A type of loop"],correct:0,explain:"The class itself is just the description — you create actual objects from it separately."},
   {q:"Dog() in the example does what?",opts:["Deletes the Dog class","Creates a new Dog object from the blueprint","Prints \"Dog\""],correct:1,explain:"Calling the class name with parentheses creates (\"instantiates\") a new object from that blueprint."}
 ]},
{id:59, level:8, title:"Attributes", est:"6 min",
 explain:`<p><span class="term" data-term="Attribute">Attributes</span> are the pieces of data attached to an object — the "name, breed, age" part of our earlier dog example. You can set them when an object is created, and read or change them afterward with a dot.</p>`,
 example:`class Dog:
    pass

my_dog = Dog()
my_dog.name = "Rex"
my_dog.age = 3
print(my_dog.name, "is", my_dog.age, "years old")`,
 lineExplain:[["my_dog.name = \"Rex\"","Attaches a name attribute directly to this particular Dog object."],["print(my_dog.name, ...)","Dot notation (object.attribute) is how you read an attribute's value back out."]],
 tryPrompt:"Create a Car object and give it color and speed attributes, then print a sentence using both.",
 tryStarter:`class Car:\n    pass\n\nmy_car = Car()\nmy_car.color = "red"\nmy_car.speed = 120\nprint("A", my_car.color, "car going", my_car.speed)`,
 quiz:[
   {q:"An attribute is:",opts:["A piece of data attached to an object","A type of loop","A built-in Python function"],correct:0,explain:"Attributes are the data that lives on an object, accessed with a dot, like my_dog.name."},
   {q:"How do you read an object's attribute?",opts:["object[attribute]","object.attribute","object->attribute"],correct:1,explain:"Python uses dot notation — object.attribute — to access an attribute's current value."}
 ]},
{id:60, level:8, title:"Methods", est:"6 min",
 explain:`<p>A <span class="term" data-term="Method">method</span> is a function that belongs to a class — an action objects made from that class can perform. You define a method inside the class using <code>def</code>, just like a regular function, but it lives inside the class body.</p>`,
 example:`class Dog:
    def bark(self):
        print("Woof!")

my_dog = Dog()
my_dog.bark()`,
 lineExplain:[["def bark(self):","Defines a method named bark, indented inside the class. Every method needs self as its first parameter — more on that soon."],["my_dog.bark()","Calls the method on this specific object, using the same dot notation as attributes, but with parentheses."]],
 tryPrompt:"Add a honk method to a Car class that prints \"Beep beep!\", then call it.",
 tryStarter:`class Car:\n    def honk(self):\n        print("Beep beep!")\n\nmy_car = Car()\nmy_car.honk()`,
 quiz:[
   {q:"A method is:",opts:["A function defined inside a class, which objects of that class can call","A type of attribute","A syntax error"],correct:0,explain:"Methods are the \"actions\" part of a class — functions attached to the objects it creates."},
   {q:"How do you call a method on an object called my_dog?",opts:["my_dog.bark","my_dog.bark()","bark(my_dog)"],correct:1,explain:"Methods are called with dot notation plus parentheses, just like any function call."}
 ]},
{id:61, level:8, title:"__init__", est:"7 min",
 explain:`<p>Setting attributes one by one after creating an object (like we did with my_dog.name = ...) gets repetitive. <span class="term" data-term="Constructor">__init__</span> is a special method that runs automatically the moment an object is created, so you can set up its attributes in one place.</p>`,
 example:`class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

my_dog = Dog("Rex", 3)
print(my_dog.name, my_dog.age)`,
 lineExplain:[["def __init__(self, name, age):","__init__ runs automatically when Dog(...) is called. name and age are the values passed in."],["self.name = name","Stores the name that was passed in as an attribute on this specific object."],["my_dog = Dog(\"Rex\", 3)","Creating the object now fills in both attributes immediately — no extra lines needed."]],
 tryPrompt:"Give the Car class an __init__ that sets color and speed, then create one Car and print both attributes.",
 tryStarter:`class Car:\n    def __init__(self, color, speed):\n        self.color = color\n        self.speed = speed\n\nmy_car = Car("blue", 100)\nprint(my_car.color, my_car.speed)`,
 quiz:[
   {q:"__init__ runs:",opts:["Automatically, the moment an object is created","Only if you call it by name","Never, unless there's an error"],correct:0,explain:"__init__ is Python's constructor — it fires automatically as soon as you write ClassName(...)."},
   {q:"In __init__(self, name, age), what does name become once Dog(\"Rex\", 3) is called?",opts:["It stays empty","It's set to \"Rex\", matching the first argument passed in","It's set to 3"],correct:1,explain:"Arguments passed to the class line up with __init__'s parameters in order, just like a normal function call."}
 ]},
{id:62, level:8, title:"self", est:"6 min",
 explain:`<p><span class="term" data-term="Self">self</span> refers to "this particular object" — whichever object the method is currently being called on. It's how a method knows which object's attributes to use, since one class can produce many different objects.</p>
 <p>You never pass self in yourself — Python fills it in automatically. You just need to include it as the first parameter whenever you define a method.</p>`,
 example:`class Dog:
    def __init__(self, name):
        self.name = name
    def bark(self):
        print(self.name, "says woof!")

a = Dog("Rex")
b = Dog("Milo")
a.bark()
b.bark()`,
 lineExplain:[["print(self.name, ...)","self.name refers to whichever Dog is calling bark() — Rex when a.bark() runs, Milo when b.bark() runs."],["a.bark()","Python quietly passes a in as self here — that's why bark() knows to use Rex's name."]],
 tryPrompt:"Add a describe method to the Car class that prints self.color and self.speed, then create two different cars and call describe() on each.",
 tryStarter:`class Car:\n    def __init__(self, color, speed):\n        self.color = color\n        self.speed = speed\n    def describe(self):\n        print("A", self.color, "car at", self.speed, "km/h")\n\nc1 = Car("red", 120)\nc2 = Car("blue", 90)\nc1.describe()\nc2.describe()`,
 quiz:[
   {q:"self inside a method refers to:",opts:["The class itself, never a specific object","Whichever specific object the method is being called on","A built-in Python keyword unrelated to objects"],correct:1,explain:"self is how a method reaches back to the exact object it was called on, so a.bark() and b.bark() can behave differently."},
   {q:"Do you ever type the value for self yourself when calling a method, like my_dog.bark(self)?",opts:["Yes, always","No — Python passes it in automatically","Only for __init__"],correct:1,explain:"Python fills self in automatically based on which object you called the method on — you never pass it explicitly."}
 ]},
{id:63, level:8, title:"Basic Inheritance", est:"7 min",
 explain:`<p><span class="term" data-term="Inheritance">Inheritance</span> lets one class reuse and extend another class, instead of starting from scratch. The new class (the "child") automatically gets everything the original class (the "parent") has, and can add or override its own bits.</p>`,
 example:`class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        print(self.name, "makes a sound")

class Dog(Animal):
    def speak(self):
        print(self.name, "barks")

a = Animal("Generic Animal")
d = Dog("Rex")
a.speak()
d.speak()`,
 lineExplain:[["class Dog(Animal):","Putting Animal in parentheses means Dog inherits everything from Animal — its __init__ included."],["def speak(self):","Dog defines its own speak(), which overrides (replaces) the parent's version just for Dog objects."]],
 tryPrompt:"Create a Vehicle class with a describe() method, then a Car class that inherits from it and overrides describe() with its own message.",
 tryStarter:`class Vehicle:\n    def describe(self):\n        print("This is a vehicle")\n\nclass Car(Vehicle):\n    def describe(self):\n        print("This is a car")\n\nv = Vehicle()\nc = Car()\nv.describe()\nc.describe()`,
 quiz:[
   {q:"Inheritance lets a class:",opts:["Reuse and extend another class's attributes and methods","Delete another class","Only exist inside a loop"],correct:0,explain:"A child class automatically gets what the parent class has, and can add to or override it."},
   {q:"In class Dog(Animal):, which class is the parent?",opts:["Dog","Animal","Neither — they're unrelated"],correct:1,explain:"The class in parentheses is the parent being inherited from; Dog is the child that extends it."}
 ]},
{id:64, level:9, title:"Automation Basics", est:"6 min",
 explain:`<p>One of Python's most useful real-world jobs is <span class="term" data-term="Automation">automation</span> — writing a script once so it can repeat a boring task for you, instantly, as many times as you need.</p>
 <p>You already have every tool you need for this: loops, conditions, and functions. Automation is really just using them on a real task instead of a practice example.</p>`,
 example:`names = ["Anna", "Mark", "Christian", "Ella"]
for name in names:
    print("Welcome,", name + "!")
print("Sent", len(names), "welcome messages.")`,
 lineExplain:[["for name in names:","This loop does the repetitive part automatically — one greeting per name, with zero copy-pasting."],["print(\"Sent\", len(names), ...)","A quick summary line is common in automation scripts, so you know the job actually ran."]],
 tryPrompt:"Given a list of filenames, print a \"renamed\" message for each one, then print how many were processed.",
 tryStarter:`files = ["photo1.jpg", "photo2.jpg", "notes.txt"]\nfor f in files:\n    print("Processed:", f)\nprint("Done —", len(files), "files handled.")`,
 quiz:[
   {q:"Automation in Python usually means:",opts:["Learning a brand-new set of commands","Using loops, conditions, and functions to repeat a task without doing it by hand","Something only advanced programmers can do"],correct:1,explain:"Automation scripts lean on the same building blocks you already know — just pointed at a real, repetitive task."},
   {q:"Why print a summary line at the end of an automation script?",opts:["Python requires it","So you have quick confirmation the job actually ran and how much it did","It makes the code run faster"],correct:1,explain:"A short summary is a simple way to confirm the script did what you expected."}
 ]},
{id:65, level:9, title:"File Organization", est:"6 min",
 explain:`<p>Python can inspect a folder and sort files automatically — for example, grouping them by their extension. The built-in <code>os</code> module lets your code look around the file system the same way you would in a file explorer.</p>`,
 example:`import os

files = ["report.pdf", "photo.jpg", "notes.txt", "chart.jpg"]
for f in files:
    ext = f.split(".")[-1]
    print(f, "->", ext, "folder")`,
 lineExplain:[["import os","Brings in Python's built-in module for working with files and folders (not used directly in this small example, but essential for real file organizing)."],["ext = f.split(\".\")[-1]","Splits the filename at each dot and grabs the last piece — the extension, like \"jpg\" or \"pdf\"."]],
 tryPrompt:"Given a list of filenames, print each one next to the extension it would be sorted into.",
 tryStarter:`files = ["song.mp3", "resume.docx", "beat.mp3", "invoice.pdf"]\nfor f in files:\n    ext = f.split(".")[-1]\n    print(f, "->", ext)`,
 quiz:[
   {q:"f.split(\".\")[-1] on \"photo.jpg\" gives:",opts:["\"photo\"","\"jpg\"","An error"],correct:1,explain:"split(\".\") breaks the name at each dot into a list; [-1] grabs the last piece, which is the extension."},
   {q:"The os module is useful for:",opts:["Doing math","Working with files, folders, and the file system","Sending emails"],correct:1,explain:"os is Python's built-in toolkit for interacting with the operating system's files and directories."}
 ]},
{id:66, level:9, title:"Simple Data Analysis", est:"7 min",
 explain:`<p>Combining lists, loops, and built-ins like <code>sum()</code>, <code>min()</code>, and <code>max()</code> lets you answer real questions about a dataset — the same core skill behind spreadsheets and data science tools, just written in Python.</p>`,
 example:`sales = [120, 340, 95, 410, 260]
print("Total:", sum(sales))
print("Average:", sum(sales) / len(sales))
print("Best day:", max(sales))
print("Worst day:", min(sales))`,
 lineExplain:[["sum(sales) / len(sales)","Total divided by count gives the average — a common first question to ask about any dataset."],["max(sales) / min(sales)","Built-in functions instantly find the highest and lowest values without writing your own loop."]],
 tryPrompt:"Given a list of daily temperatures, print the total, average, hottest, and coldest values.",
 tryStarter:`temps = [22, 25, 19, 30, 27]\nprint("Total:", sum(temps))\nprint("Average:", sum(temps) / len(temps))\nprint("Hottest:", max(temps))\nprint("Coldest:", min(temps))`,
 quiz:[
   {q:"To find the average of a list of numbers, you:",opts:["Use average(list)","Divide sum(list) by len(list)","There's no way to do this in Python"],correct:1,explain:"Python has no built-in average() — but sum() divided by len() gets you there in one line."},
   {q:"What does max(sales) tell you?",opts:["How many sales there were","The single highest value in the list","The average value"],correct:1,explain:"max() scans every value and returns whichever one is largest."}
 ]},
{id:67, level:9, title:"Working with APIs", est:"7 min",
 explain:`<p>An <span class="term" data-term="API">API</span> lets your program ask another service for data over the internet — like current weather, exchange rates, or a joke. Python's <code>requests</code> library makes this a couple of lines: send a request, get data back, usually as JSON.</p>`,
 example:`import requests

response = requests.get("https://api.example.com/joke")
data = response.json()
print(data["joke"])`,
 lineExplain:[["response = requests.get(...)","Sends a request to the API's address and waits for its reply."],["data = response.json()","Most APIs reply in JSON — this line converts that reply into a normal Python dictionary you can use."]],
 tryPrompt:"This example won't run without a real API address, so instead: given this sample response dictionary already in Python form, print its \"joke\" value the way your code would after calling .json().",
 tryStarter:`data = {"joke": "Why do programmers prefer dark mode? Because light attracts bugs."}\nprint(data["joke"])`,
 quiz:[
   {q:"An API lets your program:",opts:["Request data from another service over the internet","Only work offline","Automatically fix its own errors"],correct:0,explain:"APIs are how programs talk to other services and pull in live data, like weather or prices."},
   {q:"response.json() typically returns data as:",opts:["A Python dictionary (or list), parsed from JSON","Plain unreadable bytes","A CSV file"],correct:0,explain:"Most web APIs reply in JSON text, and .json() converts that straight into normal Python data you can use like any dictionary or list."}
 ]},
{id:68, level:9, title:"Basic Databases", est:"7 min",
 explain:`<p>A <span class="term" data-term="Database">database</span> stores data so it survives after your program ends — unlike a normal variable, which disappears when the program stops. Python's built-in <code>sqlite3</code> module gives you a full mini-database in a single file, no separate installation needed.</p>`,
 example:`import sqlite3

conn = sqlite3.connect(":memory:")
c = conn.cursor()
c.execute("CREATE TABLE students (name TEXT, age INTEGER)")
c.execute("INSERT INTO students VALUES ('Christian', 22)")
conn.commit()

c.execute("SELECT * FROM students")
print(c.fetchall())`,
 lineExplain:[["c.execute(\"CREATE TABLE ...\")","Creates a table (like a spreadsheet) with named columns — here, name and age."],["c.execute(\"SELECT * FROM students\")","Asks the database for every row in the table; fetchall() returns them as a Python list."]],
 tryPrompt:"Create an in-memory database with a \"books\" table (title, year), insert one book, then select and print all rows.",
 tryStarter:`import sqlite3\n\nconn = sqlite3.connect(":memory:")\nc = conn.cursor()\nc.execute("CREATE TABLE books (title TEXT, year INTEGER)")\nc.execute("INSERT INTO books VALUES ('Dune', 1965)")\nconn.commit()\nc.execute("SELECT * FROM books")\nprint(c.fetchall())`,
 quiz:[
   {q:"Why use a database instead of a regular Python variable?",opts:["Databases are always faster to type","Data in a database survives after the program ends, unlike a variable","Variables can't hold numbers"],correct:1,explain:"A normal variable disappears when your program stops; database data is saved and can be reopened later."},
   {q:"sqlite3 is useful because:",opts:["It requires a separate paid server","It's built into Python and stores a whole database in one file","It only works with text, never numbers"],correct:1,explain:"sqlite3 ships with Python and needs no separate installation or server — great for learning and small projects."}
 ]},
{id:69, level:9, title:"Command-Line Programs", est:"6 min",
 explain:`<p>So far your programs have asked for input while running. A <span class="term" data-term="Command-Line Program">command-line program</span> instead reads information passed in when it's launched, using the <code>sys.argv</code> list — handy for scripts meant to run quickly and automatically.</p>`,
 example:`import sys

print("Arguments received:", sys.argv)
if len(sys.argv) > 1:
    print("Hello,", sys.argv[1])
else:
    print("No name given.")`,
 lineExplain:[["sys.argv","A list of everything typed after the program's name on the command line. argv[0] is always the script's own name."],["if len(sys.argv) > 1:","Checks whether the user actually supplied an extra argument before trying to use it."]],
 tryPrompt:"sys.argv can't be tested from this in-browser editor the normal way, so instead: pretend sys.argv already equals [\"script.py\", \"Christian\"], store that as a list, and print a greeting using its second item.",
 tryStarter:`argv = ["script.py", "Christian"]\nprint("Hello,", argv[1])`,
 quiz:[
   {q:"sys.argv holds:",opts:["The values typed after the script's name when it's run from a command line","Every variable in the program","Nothing until the program finishes"],correct:0,explain:"sys.argv is a list of command-line arguments, with the script's own name always first at index 0."},
   {q:"Why check len(sys.argv) > 1 before using sys.argv[1]?",opts:["It's not necessary","To avoid an IndexError if no extra argument was actually given","To make the program run faster"],correct:1,explain:"If the user didn't supply an argument, sys.argv[1] wouldn't exist — checking the length first avoids a crash."}
 ]}
];

/* ============================================================
   DATA: LEVELS   (metadata for grouping lessons)
   ============================================================ */
const LEVELS = [
  {num:1, title:"Getting Started"},
  {num:2, title:"Making Decisions"},
  {num:3, title:"Repeating Things"},
  {num:4, title:"Working With Collections"},
  {num:5, title:"Functions"},
  {num:6, title:"Errors & Debugging"},
  {num:7, title:"Files & Data"},
  {num:8, title:"Object-Oriented Programming"},
  {num:9, title:"Practical Python"}
];
function levelBadgeClass(n){ return "l" + (((n-1)%4)+1); }
function levelOf(n){ return LEVELS.find(lv=>lv.num===n) || {num:n, title:"Level "+n}; }

/* ============================================================
   DATA: CHALLENGES   (treat as content/challenges.js)
   ============================================================ */
const CHALLENGES = [
{id:"c1", title:"Hello, Solar System", stars:1, lesson:4,
 desc:"Print a greeting to each of the first three planets, one per line: Mercury, Venus, Earth.",
 starter:`# print a greeting for each planet, one per line\n`,
 inputs:[], expect:["mercury","venus","earth"],
 hints:["You just need three print() calls, one per planet.","Each line should say something like \"Hello, Mercury!\" — the planet name just has to appear somewhere in your text.","Try: print(\"Hello, Mercury!\") then repeat for Venus and Earth."],
 solution:`print("Hello, Mercury!")\nprint("Hello, Venus!")\nprint("Hello, Earth!")`,
 solutionExplain:"Three separate print() calls, each producing its own line of output. Order doesn't matter to the checker here — only that all three names show up."},

{id:"c2", title:"Your Name Tag", stars:1, lesson:6,
 desc:"Store your name in a variable called name, and your age in a variable called age. Print a sentence using both.",
 starter:`name = "____"\nage = 0\nprint(name, "is", age, "years old")`,
 inputs:[], expect:["is","years old"],
 hints:["Replace the placeholder text with your actual name, in quotes.","age should be a whole number, not text — no quotes around it.","The print() line is already written for you; you only need to change the two variables above it."],
 solution:`name = "Christian"\nage = 22\nprint(name, "is", age, "years old")`,
 solutionExplain:"name holds a string, age holds an integer. print() with commas automatically separates each piece with a space."},

{id:"c3", title:"Mad Libs Mini", stars:2, lesson:7,
 desc:"Create three variables: adjective, animal, and place. Combine them into one sentence using + and print it. Example: \"The silly cat danced in the kitchen.\"",
 starter:`adjective = "silly"\nanimal = "cat"\nplace = "kitchen"\n# build and print your sentence using +\n`,
 inputs:[], expect:["silly","cat","kitchen"],
 hints:["You already have the three variables — the missing piece is combining them into one string.","Use + to join pieces of text together, and remember to add \" \" for spaces between words.","Try: print(\"The \" + adjective + \" \" + animal + \" was in the \" + place)"],
 solution:`adjective = "silly"\nanimal = "cat"\nplace = "kitchen"\nprint("The " + adjective + " " + animal + " danced in the " + place + ".")`,
 solutionExplain:"Each + joins another chunk of text onto the sentence. Spaces have to be added manually as their own \" \" strings."},

{id:"c4", title:"Age in Days", stars:2, lesson:12,
 desc:"Ask the user for their age with input(), convert it to a number, multiply by 365, and print roughly how many days old they are.",
 starter:`age_text = input("How old are you? ")\n# convert to a number and calculate days\n`,
 inputs:["22"], expect:["8030"],
 hints:["input() gives you text — you'll need int() before you can multiply.","Multiply the converted age by 365.","Try: age = int(age_text) then days = age * 365 then print(days)."],
 solution:`age_text = input("How old are you? ")\nage = int(age_text)\ndays = age * 365\nprint(days)`,
 solutionExplain:"int() turns the typed text into a real number, which can then be used in the multiplication age * 365."},

{id:"c5", title:"Celsius to Fahrenheit", stars:2, lesson:12,
 desc:"Ask the user for a temperature in Celsius, convert it to a number, and print the equivalent in Fahrenheit using the formula F = C * 9/5 + 32.",
 starter:`c_text = input("Temperature in Celsius: ")\n# convert, calculate, and print Fahrenheit\n`,
 inputs:["20"], expect:["68"],
 hints:["Convert the input to a number first — use float() so decimals work too.","The formula is F = C * 9 / 5 + 32 — Python follows normal order of operations.","Try: c = float(c_text) then f = c * 9/5 + 32 then print(f)."],
 solution:`c_text = input("Temperature in Celsius: ")\nc = float(c_text)\nf = c * 9/5 + 32\nprint(f)`,
 solutionExplain:"float() allows decimal input. The formula matches standard math order: multiplication/division before addition."},

{id:"c6", title:"Positive, Negative, or Zero", stars:3, lesson:19,
 desc:"Ask the user for a number. Print \"positive\" if it's greater than 0, \"negative\" if it's less than 0, or \"zero\" if it equals 0.",
 starter:`n_text = input("Enter a number: ")\nn = int(n_text)\n# use if / elif / else to decide and print\n`,
 inputs:["-5"], expect:["negative"],
 hints:["You'll need three branches: if, elif, and else.","Check n > 0 first, then n < 0, and let else handle the remaining case (zero).","Try:\nif n > 0:\n    print(\"positive\")\nelif n < 0:\n    print(\"negative\")\nelse:\n    print(\"zero\")"],
 solution:`n_text = input("Enter a number: ")\nn = int(n_text)\nif n > 0:\n    print("positive")\nelif n < 0:\n    print("negative")\nelse:\n    print("zero")`,
 solutionExplain:"Python checks conditions top to bottom and runs the first one that's True. Indentation (4 spaces) is what tells Python which lines belong to which branch."},

{id:"c7", title:"Even or Odd", stars:3, lesson:19,
 desc:"Ask the user for a whole number. Print \"even\" if it divides evenly by 2, otherwise print \"odd\". Use % to check.",
 starter:`n = int(input("Enter a whole number: "))\n# check remainder with % and print even/odd\n`,
 inputs:["7"], expect:["odd"],
 hints:["n % 2 gives the remainder when dividing by 2 — that remainder is either 0 or 1.","If n % 2 == 0, the number is even. Otherwise, it's odd.","Try:\nif n % 2 == 0:\n    print(\"even\")\nelse:\n    print(\"odd\")"],
 solution:`n = int(input("Enter a whole number: "))\nif n % 2 == 0:\n    print("even")\nelse:\n    print("odd")`,
 solutionExplain:"Any even number has no remainder when divided by 2, so n % 2 == 0 is the standard even/odd check."},

{id:"c8", title:"Mini Calculator", stars:4, lesson:19,
 desc:"Ask for two numbers and an operator (+, -, *, or /). Print the result of applying that operator to the two numbers.",
 starter:`a = float(input("First number: "))\nb = float(input("Second number: "))\nop = input("Operator (+, -, *, /): ")\n# use if/elif/else on op and print the result\n`,
 inputs:["10","4","*"], expect:["40"],
 hints:["You'll compare op against each symbol: if op == \"+\": ... elif op == \"-\": ...","Each branch does the matching operation and prints the result.","Try:\nif op == \"+\":\n    print(a + b)\nelif op == \"-\":\n    print(a - b)\nelif op == \"*\":\n    print(a * b)\nelif op == \"/\":\n    print(a / b)"],
 solution:`a = float(input("First number: "))\nb = float(input("Second number: "))\nop = input("Operator (+, -, *, /): ")\nif op == "+":\n    print(a + b)\nelif op == "-":\n    print(a - b)\nelif op == "*":\n    print(a * b)\nelif op == "/":\n    print(a / b)\nelse:\n    print("I don't know that operator")`,
 solutionExplain:"Each elif checks one more possible symbol. Comparing strings with == works just like comparing numbers. A final else catches anything unexpected."},

{id:"c9", title:"Adult or Minor", stars:2, lesson:15,
 desc:"Ask the user for their age. Print \"You are an adult.\" if it's 18 or over, otherwise print \"You are a minor.\"",
 starter:`age = int(input("Enter your age: "))\n# use if/else to print the right message\n`,
 inputs:["16"], expect:["minor"],
 hints:["You only need two branches: if and else.","The condition should check age >= 18.","Try:\nif age >= 18:\n    print(\"You are an adult.\")\nelse:\n    print(\"You are a minor.\")"],
 solution:`age = int(input("Enter your age: "))\nif age >= 18:\n    print("You are an adult.")\nelse:\n    print("You are a minor.")`,
 solutionExplain:"else automatically covers every case the if didn't — here, any age under 18."},

{id:"c10", title:"Grade Checker", stars:3, lesson:16,
 desc:"Ask for a score (0-100). Print the letter grade: 90+ is \"A\", 80-89 is \"B\", 70-79 is \"C\", below 70 is \"F\".",
 starter:`score = int(input("Enter your score: "))\n# use if/elif/else to print A, B, C, or F\n`,
 inputs:["83"], expect:["b"],
 hints:["You'll need if, then two elif branches, then else for anything below 70.","Check the highest range first: score >= 90.","Try:\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")"],
 solution:`score = int(input("Enter your score: "))\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")`,
 solutionExplain:"Python checks each branch top to bottom and stops at the first True one — so order matters, highest range first."},

{id:"c11", title:"Login Check", stars:3, lesson:18,
 desc:"Ask for a username and a password. Print \"Access granted\" only if username is \"admin\" AND password is \"1234\". Otherwise print \"Access denied\".",
 starter:`username = input("Username: ")\npassword = input("Password: ")\n# use and to check both, then if/else\n`,
 inputs:["admin","1234"], expect:["granted"],
 hints:["Combine two comparisons with and.","Both username == \"admin\" and password == \"1234\" must be True.","Try:\nif username == \"admin\" and password == \"1234\":\n    print(\"Access granted\")\nelse:\n    print(\"Access denied\")"],
 solution:`username = input("Username: ")\npassword = input("Password: ")\nif username == "admin" and password == "1234":\n    print("Access granted")\nelse:\n    print("Access denied")`,
 solutionExplain:"and only lets the if branch run when both comparisons are True — get either one wrong and it falls to else."},

{id:"c12", title:"Count to Ten", stars:1, lesson:21,
 desc:"Use a for loop to print the numbers 1 through 10, one per line.",
 starter:`# use a for loop with range()\n`,
 inputs:[], expect:["1","5","10"],
 hints:["range(1, 11) gives you 1 through 10 (remember, range stops before its second number).","You need exactly one print() inside the loop.","Try:\nfor i in range(1, 11):\n    print(i)"],
 solution:`for i in range(1, 11):\n    print(i)`,
 solutionExplain:"range(1, 11) produces 1 through 10; the loop prints each value on its own line."},

{id:"c13", title:"Times Table", stars:2, lesson:23,
 desc:"Ask the user for a number, then print its multiplication table from 1x to 10x (e.g. for 5: 5 x 1 = 5, 5 x 2 = 10, ...).",
 starter:`n = int(input("Which times table? "))\n# use a for loop to print n x 1 through n x 10\n`,
 inputs:["5"], expect:["5 x 1 = 5","5 x 10 = 50"],
 hints:["Loop i from 1 to 10 using range(1, 11).","Inside the loop, calculate n * i and print it in a sentence.","Try:\nfor i in range(1, 11):\n    print(n, \"x\", i, \"=\", n*i)"],
 solution:`n = int(input("Which times table? "))\nfor i in range(1, 11):\n    print(n, "x", i, "=", n*i)`,
 solutionExplain:"The loop variable i takes each value 1-10 in turn, and n*i is recalculated fresh on every pass."},

{id:"c14", title:"Sum Up To N", stars:3, lesson:22,
 desc:"Ask the user for a number, then use a while loop to add up all whole numbers from 1 up to that number and print the total.",
 starter:`n = int(input("Sum up to: "))\ntotal = 0\ncount = 1\n# use a while loop to add count to total, then increase count\n`,
 inputs:["5"], expect:["15"],
 hints:["Start total at 0 and count at 1.","While count <= n, add count to total, then increase count by 1.","Try:\nwhile count <= n:\n    total = total + count\n    count = count + 1\nprint(total)"],
 solution:`n = int(input("Sum up to: "))\ntotal = 0\ncount = 1\nwhile count <= n:\n    total = total + count\n    count = count + 1\nprint(total)`,
 solutionExplain:"Each pass adds the current count to the running total, then bumps count — once count passes n, the loop's condition goes False and it stops."},

{id:"c15", title:"Star Triangle", stars:3, lesson:26,
 desc:"Use nested loops to print a triangle of stars: 1 star on the first line, 2 on the second, up to 5 on the fifth line.",
 starter:`# use a nested loop: outer for rows, inner for stars per row\n`,
 inputs:[], expect:["*","**","*****"],
 hints:["The outer loop controls which row you're on (1 through 5).","The inner loop should run 'row' times, building up a string of stars.","Try:\nfor row in range(1, 6):\n    line = \"\"\n    for col in range(row):\n        line = line + \"*\"\n    print(line)"],
 solution:`for row in range(1, 6):\n    line = ""\n    for col in range(row):\n        line = line + "*"\n    print(line)`,
 solutionExplain:"The inner loop runs a different number of times on each pass of the outer loop — row times — building one more star per line."},

{id:"c16", title:"List Average", stars:2, lesson:27,
 desc:"Given a list of numbers, use a loop to add them all up, then print the average (total divided by how many there are).",
 starter:`scores = [80, 92, 74, 88, 95]\n# loop through scores, sum them, then print the average\n`,
 inputs:[], expect:["85.8"],
 hints:["Start a total at 0, then loop through the list adding each number to it.","Divide the total by len(scores) to get the average.","Try:\ntotal = 0\nfor s in scores:\n    total = total + s\nprint(total / len(scores))"],
 solution:`scores = [80, 92, 74, 88, 95]\ntotal = 0\nfor s in scores:\n    total = total + s\nprint(total / len(scores))`,
 solutionExplain:"The loop adds every item to total; dividing by len(scores) — the count of items — gives the average."},

{id:"c17", title:"Build a Guest List", stars:2, lesson:29,
 desc:"Start with an empty list. Append three names to it one at a time, then print the final list.",
 starter:`guests = []\n# append three names, then print guests\n`,
 inputs:[], expect:["["],
 hints:["Start with guests = [] — an empty list.","Call guests.append(\"Name\") three separate times, once per name.","Try:\nguests.append(\"Sam\")\nguests.append(\"Priya\")\nguests.append(\"Alex\")\nprint(guests)"],
 solution:`guests = []\nguests.append("Sam")\nguests.append("Priya")\nguests.append("Alex")\nprint(guests)`,
 solutionExplain:"append() adds one item at a time onto the end of the list, growing it from empty to three names."},

{id:"c18", title:"Find the Total Price", stars:3, lesson:31,
 desc:"Given a list of prices, loop through it and print the total (sum of all prices).",
 starter:`prices = [12.50, 8.00, 3.25, 19.99]\n# loop through prices, add them up, and print the total\n`,
 inputs:[], expect:["43.74"],
 hints:["Start a total at 0, then use for price in prices: to go through each one.","Add each price to total inside the loop.","Try:\ntotal = 0\nfor price in prices:\n    total = total + price\nprint(total)"],
 solution:`prices = [12.50, 8.00, 3.25, 19.99]\ntotal = 0\nfor price in prices:\n    total = total + price\nprint(total)`,
 solutionExplain:"Looping directly through the list (no index needed) and accumulating a running total is the standard pattern for summing a list."},

{id:"c19", title:"Student Record", stars:2, lesson:34,
 desc:"Create a dictionary for a student with keys \"name\", \"age\", and \"grade\". Print a sentence using all three values.",
 starter:`student = {\n    "name": "Alex",\n    "age": 17,\n    "grade": "11th"\n}\n# print a sentence using student[\"name\"], student[\"age\"], and student[\"grade\"]\n`,
 inputs:[], expect:["alex","17","11th"],
 hints:["Look up each value with student[\"key\"], the same way as the lesson example.","Combine the three lookups into one print() call using commas.","Try: print(student[\"name\"], \"is\", student[\"age\"], \"and in grade\", student[\"grade\"])"],
 solution:`student = {\n    "name": "Alex",\n    "age": 17,\n    "grade": "11th"\n}\nprint(student["name"], "is", student["age"], "and in grade", student["grade"])`,
 solutionExplain:"Each student[\"key\"] looks up its matching value; print() with commas joins them into one readable line."},

{id:"c20", title:"Greeting Machine", stars:2, lesson:38,
 desc:"Write a function greet(name) that prints \"Hello, <name>!\" — then call it with two different names.",
 starter:`# define greet(name) so it prints "Hello, <name>!"\n\n# then call it twice with different names\n`,
 inputs:[], expect:["hello","!"],
 hints:["Start with def greet(name):, then indent a print() line underneath.","Inside, print(\"Hello,\", name, \"!\") — or build the string with +.","Don't forget to actually call greet(\"...\") after defining it — twice, with different names."],
 solution:`def greet(name):\n    print("Hello, " + name + "!")\n\ngreet("Maya")\ngreet("Leo")`,
 solutionExplain:"def greet(name) creates a reusable function. Each call passes a different argument into the name parameter."},

{id:"c21", title:"Add Two Numbers", stars:2, lesson:40,
 desc:"Write a function add(a, b) that returns the sum of its two arguments. Call it and print the result.",
 starter:`# define add(a, b) so it returns a + b\n\n# then call it and print the result\n`,
 inputs:[], expect:["9"],
 hints:["Use return, not print(), inside the function — the function should hand the value back, not display it.","return a + b is all the function body needs.","Call it like print(add(4, 5)) to see the returned value."],
 solution:`def add(a, b):\n    return a + b\n\nprint(add(4, 5))`,
 solutionExplain:"return sends a + b back out of the function so it can be printed (or stored, or reused) by whatever called it."},

{id:"c22", title:"Friendly Reminder", stars:3, lesson:41,
 desc:"Write a function remind(task, urgency=\"soon\") that prints \"Don't forget to <task> — do it <urgency>!\". Call it once without urgency, and once overriding it.",
 starter:`# define remind(task, urgency="soon")\n\n# call it once without urgency, once with urgency="now"\n`,
 inputs:[], expect:["forget","soon","now"],
 hints:["Give urgency a default value right in the function definition: urgency=\"soon\".","The print() line can combine task and urgency the same way you've joined text before.","Call it twice: remind(\"study\") and remind(\"study\", \"now\")."],
 solution:`def remind(task, urgency="soon"):\n    print("Don't forget to", task, "— do it", urgency + "!")\n\nremind("study")\nremind("study", "now")`,
 solutionExplain:"Leaving urgency out of the first call falls back to its default \"soon\"; the second call overrides it with \"now\"."},

{id:"c23", title:"Safe Addition", stars:2, lesson:46,
 desc:"Ask the user for two numbers as text input, convert both to numbers, and print their sum — avoiding the TypeError you'd get from adding raw input() text.",
 starter:`a_text = input("First number: ")\nb_text = input("Second number: ")\n# convert both to numbers, then add and print\n`,
 inputs:["4","5"], expect:["9"],
 hints:["input() always gives you text, even if the user types a number.","Convert both values with int() (or float()) before adding them.","Try: a = int(a_text) then b = int(b_text) then print(a + b)."],
 solution:`a_text = input("First number: ")\nb_text = input("Second number: ")\na = int(a_text)\nb = int(b_text)\nprint(a + b)`,
 solutionExplain:"input() always returns text. Converting both values with int() before adding avoids the TypeError that + would raise on two strings meant to be numbers."},

{id:"c24", title:"Last Item, Safely", stars:2, lesson:47,
 desc:"Given a list of any length, print its last item using an index that will never cause an IndexError, no matter how many items the list has.",
 starter:`tasks = ["email", "laundry", "groceries", "gym"]\n# print the last item without risking an IndexError\n`,
 inputs:[], expect:["gym"],
 hints:["A fixed number like tasks[3] only works for this exact list length.","Negative indexing counts backward from the end and always stays in range.","Try: print(tasks[-1])"],
 solution:`tasks = ["email", "laundry", "groceries", "gym"]\nprint(tasks[-1])`,
 solutionExplain:"tasks[-1] always refers to the last item, whether the list has 4 items or 400 — unlike a fixed positive index, it can never go out of range."},

{id:"c25", title:"Fix the Two Bugs", stars:3, lesson:50,
 desc:"This program is supposed to print 7, but it has two separate bugs. Find and fix both.",
 starter:`def add(a, b)\n    return a + b\n\nprint(add(3, "4"))`,
 inputs:[], expect:["7"],
 hints:["Run it first — the error message tells you exactly which line and what kind of problem to look for.","Bug 1: every def line needs a colon : at the end.","Bug 2: once it runs, add(3, \"4\") mixes an integer and a string — change \"4\" to 4."],
 solution:`def add(a, b):\n    return a + b\n\nprint(add(3, 4))`,
 solutionExplain:"The missing colon was a SyntaxError stopping the whole program; passing a string into an integer addition would have caused a TypeError next. Fixing one bug at a time, and running after each fix, reveals them one at a time instead of all at once."},

{id:"c26", title:"Write and Read Back", stars:2, lesson:52,
 desc:"Write the text \"Practice makes progress.\" to a file called log.txt, then open it again, read it back, and print it.",
 starter:`# write "Practice makes progress." to log.txt\n\n# then open it again, read it back, and print it\n`,
 inputs:[], expect:["practice makes progress"],
 hints:["Use with open(\"log.txt\", \"w\") as f: then f.write(\"...\") to save the text.","Open the same file again, this time with \"r\" mode, to read it.","content = f.read() then print(content)."],
 solution:`with open("log.txt", "w") as f:\n    f.write("Practice makes progress.")\n\nwith open("log.txt", "r") as f:\n    content = f.read()\nprint(content)`,
 solutionExplain:"The first with block creates and writes the file. The second reopens it in read mode and pulls the text back out with .read()."},

{id:"c27", title:"CSV Row Count", stars:3, lesson:54,
 desc:"Write a CSV file with a header row and three data rows of your choice, then read it back and print how many data rows it has (not counting the header).",
 starter:`import csv\n\n# write a CSV with a header row and three data rows\n\n# read it back and print the number of data rows\n`,
 inputs:[], expect:["3"],
 hints:["writer.writerow() once for the header, then three more times for data rows.","When reading it back, collect every row into a list first: rows = list(reader)","The header takes up one of those rows, so print(len(rows) - 1)."],
 solution:`import csv\n\nwith open("data.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["item", "qty"])\n    writer.writerow(["pen", "3"])\n    writer.writerow(["book", "1"])\n    writer.writerow(["eraser", "5"])\n\nwith open("data.csv", "r") as f:\n    reader = csv.reader(f)\n    rows = list(reader)\nprint(len(rows) - 1)`,
 solutionExplain:"list(reader) turns every row (including the header) into a Python list of rows. Subtracting 1 accounts for the header row so only data rows are counted."},

{id:"c28", title:"Round-Trip JSON", stars:2, lesson:55,
 desc:"A book dictionary is already defined for you. Convert it to JSON text, convert that text back into a dictionary, then print the title from the reloaded version.",
 starter:`import json\n\nbook = {"title": "Dune", "author": "Frank Herbert"}\n# convert to JSON text, then back to a dict, then print the title from the reloaded dict\n`,
 inputs:[], expect:["dune"],
 hints:["json.dumps(book) turns the dictionary into JSON text.","json.loads(text) turns that JSON text back into a real dictionary.","Print the reloaded dictionary's \"title\" key, e.g. reloaded[\"title\"]."],
 solution:`import json\n\nbook = {"title": "Dune", "author": "Frank Herbert"}\ntext = json.dumps(book)\nreloaded = json.loads(text)\nprint(reloaded["title"])`,
 solutionExplain:"dumps() and loads() are inverses of each other — round-tripping data through JSON text and back gives an equivalent dictionary, so reloaded[\"title\"] works exactly like book[\"title\"] did."},

{id:"c29", title:"Build a Student Class", stars:2, lesson:61,
 desc:"Create a Student class with an __init__ that takes name and grade, then create one Student and print a sentence using both attributes.",
 starter:`class Student:\n    # add __init__ here, storing name and grade\\n    pass\n\n# create a Student and print a sentence using their name and grade\\n`,
 inputs:[], expect:["is in grade"],
 hints:["__init__ needs self, name, and grade as parameters.","Inside __init__, set self.name = name and self.grade = grade.","After creating the object, print something like student.name + \" is in grade \" + str(student.grade)."],
 solution:`class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n\ns = Student("Christian", 12)\nprint(s.name, "is in grade", s.grade)`,
 solutionExplain:"__init__ runs automatically when Student(...) is called, storing both values as attributes so they can be read back with dot notation afterward."},

{id:"c30", title:"Sales Summary", stars:2, lesson:66,
 desc:"Given a list of daily sales numbers, print the total and the average, rounded to 2 decimal places using round().",
 starter:`sales = [150, 220, 90, 310, 175]\\n# print the total, then the average rounded to 2 decimal places\\n`,
 inputs:[], expect:["945","189.0"],
 hints:["total = sum(sales) gives you the total in one line.","average = total / len(sales) gives the raw average.","round(average, 2) rounds it to 2 decimal places for printing."],
 solution:`sales = [150, 220, 90, 310, 175]\ntotal = sum(sales)\naverage = round(total / len(sales), 2)\nprint("Total:", total)\nprint("Average:", average)`,
 solutionExplain:"sum() and len() combine to compute the average, and round(value, 2) trims it to a clean two-decimal number for display."}
];

/* ============================================================
   DATA: DEBUG LAB
   ============================================================ */
const DEBUGS = [
{id:"d1", title:"The Missing Letter", kind:"fix",
 broken:`name = "Christian"\nprint(nam)`,
 desc:"This program should print the name — but it crashes. Why?",
 hints:["Read the error carefully — it names a variable Python has never seen.","Compare the variable created on line 1 with the one used on line 2, letter by letter.","The variable is called name, but line 2 tries to print nam — missing an \"e\"."],
 fixed:`name = "Christian"\nprint(name)`,
 expect:["christian"],
 explain:"This is a NameError — Python has never heard of a variable called nam because it was never created. Variable names must match exactly, every time."},

{id:"d2", title:"The Untabbed Line", kind:"fix",
 broken:`age = 20\nif age >= 18:\nprint("You're an adult")`,
 desc:"Python refuses to run this at all. What's missing?",
 hints:["The error mentions indentation.","Every line that belongs inside an if block needs to be indented (usually 4 spaces).","Indent the print() line so it sits underneath the if."],
 fixed:`age = 20\nif age >= 18:\n    print("You're an adult")`,
 expect:["adult"],
 explain:"Python uses indentation (not curly braces) to know which lines belong inside a block. The unindented print() left Python not knowing it belonged to the if."},

{id:"d3", title:"One Equals Too Few", kind:"fix",
 broken:`score = 90\nif score = 90:\n    print("Perfect score!")`,
 desc:"This program is checking if the score is exactly 90 — but it won't even run.",
 hints:["= and == do different jobs in Python.","= assigns a value; == compares two values for equality.","An if statement needs a comparison, so it should use ==, not =."],
 fixed:`score = 90\nif score == 90:\n    print("Perfect score!")`,
 expect:["perfect"],
 explain:"= stores a value into a variable. == asks a true/false question. Conditions (if, elif, while) always need ==, not =."},

{id:"d4", title:"Numbers Can't Hug Words", kind:"fix",
 broken:`items = 3\nprint("You bought " + items + " items")`,
 desc:"This crashes with a TypeError. What's going on?",
 hints:["+ behaves differently for text vs. numbers.","You can't directly + a string and an integer together — Python doesn't know how to combine them.","Convert items to text first with str(items), or use commas in print() instead of +."],
 fixed:`items = 3\nprint("You bought", items, "items")`,
 expect:["bought","3","items"],
 explain:"+= between a string and a number raises a TypeError because Python won't silently guess how to combine them. Either wrap the number in str(), or switch to comma-separated print() arguments, which handle the conversion for you."},

{id:"d5", title:"The Loop That Never Ends", kind:"mc",
 broken:`count = 1\nwhile count <= 5:\n    print(count)`,
 desc:"This program is supposed to print 1 through 5, then stop. Instead, it freezes the whole page. What's the bug?",
 options:["The while condition uses <= instead of <","count is never increased inside the loop, so the condition is always true","print() can't be used inside a while loop"],
 correct:1,
 explain:"count starts at 1 and the loop keeps checking count <= 5 — but nothing inside the loop ever changes count, so it's 1 forever and the condition never becomes false. The fix is adding count = count + 1 inside the loop. This is why we're not running this one live — a true infinite loop would freeze your browser tab."},

{id:"d6", title:"The Branch That Never Runs", kind:"fix",
 broken:`age = 20\nif age >= 18\n    print("Adult")`,
 desc:"This program should print \"Adult\" — instead Python won't even run it.",
 hints:["Compare this if line to ones you've seen work correctly.","Every if, elif, else, for, and while line needs one particular character at the end.","Add a colon : right after the condition, before the newline."],
 fixed:`age = 20\nif age >= 18:\n    print("Adult")`,
 expect:["adult"],
 explain:"Python requires a colon : at the end of an if line (and elif/else/for/while/def). Without it, Python can't tell where the condition ends and the block begins — that's a SyntaxError."},

{id:"d7", title:"Wrong Branch Wins", kind:"mc",
 broken:`score = 95\nif score >= 70:\n    print("C")\nelif score >= 90:\n    print("A")\nelse:\n    print("F")`,
 desc:"A score of 95 should clearly be an \"A\" — but this prints \"C\" instead. What's wrong?",
 options:["The elif for 90 should come before the if for 70, since Python stops at the first True branch","print() doesn't work inside elif","score >= 70 should use > instead"],
 correct:0,
 explain:"Python checks branches top to bottom and runs only the first one that's True. Since 95 >= 70 is checked first and is True, \"C\" prints and the elif for 90 is never even reached — even though 95 also satisfies it. Ranges need to be ordered from most specific (highest) to least specific (lowest)."},

{id:"d8", title:"One Short", kind:"mc",
 broken:`for i in range(1, 5):\n    print(i)`,
 desc:"This is supposed to print 1, 2, 3, 4, 5 — but 5 never shows up. What's wrong?",
 options:["range(1, 5) stops before 5, so it only produces 1, 2, 3, 4 — it should be range(1, 6)","print() only works four times per program","i should start at 0 instead of 1"],
 correct:0,
 explain:"range()'s second number is exclusive — Python stops before reaching it. To include 5, the range needs to be range(1, 6). This kind of off-by-one mistake is extremely common with range()."},

{id:"d9", title:"Skip vs. Stop", kind:"fix",
 broken:`for i in range(1, 6):\n    if i == 3:\n        break\n    print(i)`,
 desc:"This should print every number 1-5 except 3 — instead it stops after printing 1 and 2, and 4 and 5 never appear.",
 hints:["Compare what break does versus what you actually want here.","You want to skip just one number and keep going, not stop the whole loop.","Replace break with continue."],
 fixed:`for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)`,
 expect:["1","2","4","5"],
 explain:"break exits the loop completely the moment it runs. continue only skips the current pass and lets the loop keep going — which is what \"skip just this one\" actually needs."},

{id:"d10", title:"Defined But Never Called", kind:"mc",
 broken:`def greet():\n    print("Hello!")`,
 desc:"This program is supposed to print \"Hello!\" — but running it produces no output at all. Why?",
 options:["print() is spelled wrong","The function is defined but never called","greet needs a parameter"],
 correct:1,
 explain:"def only teaches Python the recipe for greet — it doesn't run the body. Without a line like greet() after the definition, the print() inside never actually executes."},

{id:"d11", title:"The Silent Return", kind:"fix",
 broken:`def add(a, b):\n    print(a + b)\n\nresult = add(3, 4)\nprint(result * 2)`,
 desc:"This crashes trying to double the result. The addition itself works and even prints — so what's wrong?",
 hints:["print() and return do different jobs — only one of them hands a value back to be stored.","result ends up storing None, because add() never actually returns anything.","Change print(a + b) inside the function to return a + b."],
 fixed:`def add(a, b):\n    return a + b\n\nresult = add(3, 4)\nprint(result * 2)`,
 expect:["14"],
 explain:"print() only displays a value on screen — it doesn't send anything back to the caller. Without a return, result gets None, and None can't be multiplied. return is what makes a function's answer usable elsewhere."},

{id:"d12", title:"Out of Range", kind:"mc",
 broken:`friends = ["John", "Mark", "Anna"]\nprint(friends[3])`,
 desc:"This program crashes trying to print a friend's name. friends clearly has three people in it — so what's wrong?",
 options:["friends[3] asks for a 4th item, but valid indexes for a 3-item list are only 0, 1, and 2","print() can't be used with lists","friends needs to be a tuple instead of a list"],
 correct:0,
 explain:"List indexing starts at 0, so a 3-item list has valid indexes 0, 1, and 2 — index 3 doesn't exist. Asking for it raises an IndexError. The fix would be using index 2 for the last item, or better, the safer friends[-1]."},

{id:"d13", title:"Reading a File That Isn't There", kind:"mc",
 broken:`with open("mystery.txt", "r") as f:\n    print(f.read())`,
 desc:"This program crashes immediately. mystery.txt was never created anywhere in the program — what's the bug?",
 options:["read() only works on CSV files","Opening a file in \"r\" mode requires it to already exist — mystery.txt was never written first","with open() is spelled incorrectly"],
 correct:1,
 explain:"\"r\" mode only opens existing files for reading — it can't create one. Since mystery.txt was never saved first (with mode \"w\"), Python raises a FileNotFoundError. The fix is writing the file before trying to read it back."},

{id:"d14", title:"The Missing self", kind:"mc",
 broken:`class Dog:\n    def bark():\n        print("Woof!")\n\nmy_dog = Dog()\nmy_dog.bark()`,
 desc:"This crashes the moment bark() is called. The method looks fine on its own — what's missing?",
 options:["bark needs to be spelled differently","Every method needs self as its first parameter — bark() is missing it","Dog needs to be lowercase"],
 correct:1,
 explain:"When you call my_dog.bark(), Python automatically tries to pass my_dog in as the first argument. Without self in the parameter list to catch it, Python has nowhere to put it and raises a TypeError about too many arguments."},

{id:"d15", title:"The Unset Attribute", kind:"fix",
 broken:`class Dog:\n    def __init__(self, name):\n        self.n = name\n\nmy_dog = Dog("Rex")\nprint(my_dog.name)`,
 desc:"This crashes with an AttributeError on the last line. The Dog clearly has a name — so what's wrong?",
 hints:["Look closely at what __init__ actually names the attribute versus what's being read afterward.","self.n and my_dog.name are not the same attribute — the names have to match exactly.","Change self.n = name to self.name = name."],
 fixed:`class Dog:\n    def __init__(self, name):\n        self.name = name\n\nmy_dog = Dog("Rex")\nprint(my_dog.name)`,
 expect:["rex"],
 explain:"__init__ stored the value under self.n, but the last line asks for my_dog.name — an attribute that was never created. Attribute names have to match exactly, just like variable names."}
];

/* ============================================================
   DATA: QUIZ POOL  (auto-built from lesson quizzes, tagged by lesson)
   ============================================================ */
const QUIZ_POOL = LESSONS.flatMap(l => l.quiz.map(q => ({...q, lessonId:l.id, lessonTitle:l.title})));

/* ============================================================
   DATA: PROJECTS
   ============================================================ */
const PROJECTS = [
{id:"p1", title:"Simple Calculator", level:"First project", time:"20–30 min",
 summary:"Build a calculator that asks for two numbers and an operation, then shows the result.",
 requirements:["Ask the user for a first number","Ask the user for a second number","Ask which operation to perform (+, -, *, /)","Use if/elif to run the right operation","Display the result clearly"],
 steps:["Ask for the first number with input(), and convert it with float().","Ask for the second number the same way.","Ask which operation to perform, and store the answer as text.","Write if / elif statements — one branch per operation.","Inside each branch, calculate the result and print it.","Run it a few times with different numbers and operations to make sure it all works."],
 starter:`# Simple Calculator\n# Step 1: ask for the first number\n\n# Step 2: ask for the second number\n\n# Step 3: ask which operation to perform\n\n# Step 4-5: use if/elif to calculate and print the result\n`,
 checkInputs:["8","2","+"], checkExpect:["10"]},

{id:"p2", title:"Number Guessing Game", level:"Next project", time:"25–35 min",
 summary:"The computer picks a secret number. The player guesses, and the game says higher, lower, or correct.",
 requirements:["Store a secret number in a variable (you choose it, for now)","Ask the player to guess","Compare their guess to the secret number","Tell them if their guess was too high, too low, or correct"],
 steps:["Store a secret number, e.g. secret = 7.","Ask the player for a guess with input(), and convert it to int().","Use if/elif/else to compare guess to secret.","If guess is too low, print a \"higher\" hint. If too high, print a \"lower\" hint. If equal, congratulate them.","Test it three times: once guessing too low, once too high, once correct."],
 starter:`# Number Guessing Game\nsecret = 7\n\n# Step 1: ask the player to guess (convert to int)\n\n# Step 2: compare their guess to secret using if/elif/else\n`,
 checkInputs:["7"], checkExpect:["correct","right","congrat","nice","well done","you got it","yes"]},

{id:"p3", title:"Temperature Converter", level:"Next project", time:"15–20 min",
 summary:"Ask for a temperature and a unit, then convert it and print the result in the other unit.",
 requirements:["Ask for a temperature (a number)","Ask whether it's currently in Celsius or Fahrenheit","Convert it to the other unit using the correct formula","Print the converted value clearly"],
 steps:["Ask for the temperature and convert it to float().","Ask the unit it's currently in — expect the user to type \"C\" or \"F\".","If the unit is \"C\", convert to Fahrenheit: F = C * 9/5 + 32.","If the unit is \"F\", convert to Celsius: C = (F - 32) * 5/9.","Print the result, ideally saying which unit it's now in."],
 starter:`# Temperature Converter\ntemp = float(input("Enter the temperature: "))\nunit = input("Is that C or F? ")\n\n# convert based on unit and print the result\n`,
 checkInputs:["20","C"], checkExpect:["68"]},

{id:"p4", title:"Age Checker", level:"Next project", time:"10–15 min",
 summary:"Ask the user for their age and tell them whether they're an adult or a minor.",
 requirements:["Ask the user for their age","Convert it to a number","Use if/else to decide which message to print","Print \"You are an adult.\" or \"You are a minor.\""],
 steps:["Ask for the age with input(), and convert it to int().","Write an if statement checking age >= 18.","Inside the if, print \"You are an adult.\"","Add an else that prints \"You are a minor.\"","Test it twice: once with an age 18 or over, once under 18."],
 starter:`# Age Checker\nage = int(input("Enter your age: "))\n\n# Step 2-4: use if/else to print the right message\n`,
 checkInputs:["20"], checkExpect:["adult"]},

{id:"p5", title:"Multiplication Table Generator", level:"Next project", time:"15–20 min",
 summary:"Ask the user for a number, then print its full multiplication table from 1x to 10x using a loop.",
 requirements:["Ask the user for a number","Use a for loop to go from 1 to 10","On each pass, calculate the number times the loop counter","Print each line clearly, e.g. \"5 x 3 = 15\""],
 steps:["Ask for a number with input(), and convert it to int().","Write a for loop using range(1, 11) so it covers 1 through 10.","Inside the loop, multiply the number by the loop variable.","Print the result as a clear sentence for each line.","Test it with a couple of different numbers, including 1 and 10."],
 starter:`# Multiplication Table Generator\nn = int(input("Which number's table? "))\n\n# Step 2-4: loop from 1 to 10, calculate, and print each line\n`,
 checkInputs:["7"], checkExpect:["7 x 1 = 7","7 x 10 = 70"]},

{id:"p6", title:"Quiz Game", level:"Next project", time:"25–35 min",
 summary:"Ask the player three multiple-choice questions and keep score, printing how many they got right at the end.",
 requirements:["Store at least 3 questions, each with an answer","Ask each question with input() and check the answer","Keep a running score using a variable","Print the final score out of the total at the end"],
 steps:["Store your questions and correct answers — a list of dictionaries works well, e.g. {\"q\": \"...\", \"a\": \"...\"}.","Create a score variable starting at 0.","Loop through the questions, asking each with input().","Compare the player's answer to the correct one (consider using .lower() so capitalization doesn't matter) and add 1 to score for each correct answer.","After the loop, print the final score out of the total number of questions.","Test it by answering some right and some wrong."],
 starter:`# Quiz Game\\nquestions = [\\n    {"q": "2 + 2 = ?", "a": "4"},\\n    {"q": "Capital of France?", "a": "paris"},\\n    {"q": "Python is a ___ language.", "a": "programming"}\\n]\\nscore = 0\\n\\n# Step 3-4: loop through questions, ask each, compare answers, update score\\n\\n# Step 5: print the final score\\n`,
 checkInputs:["4","paris","programming"], checkExpect:["3"]},

{id:"p7", title:"Password Generator", level:"Next project", time:"15–25 min",
 summary:"Ask how long the password should be, then build a random password of that length using letters, numbers, and symbols.",
 requirements:["Ask the user for the desired password length","Build a random password of exactly that length","Include a mix of letters, numbers, and symbols to choose from","Print the generated password"],
 steps:["Ask for the length with input(), and convert it to int().","Store a string of possible characters to choose from, e.g. letters + numbers + symbols.","Import Python's random module.","Use a loop (or a list comprehension) that picks one random character per position, length times, using random.choice().","Join the chosen characters together into one password string with \"\".join(...).","Print the finished password, and try a few different lengths."],
 starter:`# Password Generator\\nimport random\\n\\nlength = int(input("How long should the password be? "))\\ncharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"\\n\\n# Step 4-5: pick 'length' random characters and join them into one password\\n`,
 checkInputs:["10"], checkExpect:[]}
];

/* ============================================================
   DATA: GLOSSARY
   ============================================================ */
const GLOSSARY = {
 "Program":"A set of instructions written for a computer to follow, in order.",
 "Programming Language":"A set of words and rules used to write instructions a computer can understand, like Python.",
 "Interpreter":"The program that reads your Python code and actually carries out its instructions.",
 "Variable":"A named box that stores a value, so you can use or change it later in your code.",
 "String":"Text — any characters wrapped in quotes, like \"hello\".",
 "Concatenation":"Joining two or more strings together, usually with +.",
 "Integer":"A whole number, with no decimal point — like 7 or -3.",
 "Float":"A number that includes a decimal point, like 7.5.",
 "Boolean":"A value that is only ever True or False.",
 "Operator":"A symbol that performs an action, like + for addition or == for comparing two values.",
 "Comment":"A note in your code, starting with #, that Python ignores completely.",
 "Function":"A reusable, named block of code that performs a task — print() is a function.",
 "Loop":"A way to repeat a block of code multiple times.",
 "List":"A collection of items stored together in order, like [\"a\",\"b\",\"c\"].",
 "Condition":"A true/false question, like age >= 18, used to decide what a program should do next.",
 "Syntax Error":"A mistake in how code is written — Python can't even understand what you meant.",
 "Type Conversion":"Turning a value from one data type into another, e.g. text into a number with int().",
 "Argument":"A value you hand to a function inside its parentheses, e.g. the \"hi\" in print(\"hi\").",
 "Comparison Operator":"A symbol like ==, !=, >, <, >=, or <= that compares two values and produces True or False.",
 "Logical Operator":"and, or, or not — used to combine or flip conditions.",
 "Elif":"Short for \"else if\" — checks another condition when the previous if (or elif) was False.",
 "Range":"range() generates a sequence of numbers, most often used to control how many times a for loop runs.",
 "Break":"A keyword that immediately stops a loop, even if its condition is still True.",
 "Continue":"A keyword that skips the rest of the current loop pass and jumps to the next one.",
 "Nested Loop":"A loop written inside another loop — the inner loop runs completely for every pass of the outer loop.",
 "Index":"A number showing an item's position in a list or string, starting at 0 for the first item.",
 "Tuple":"A collection like a list, but written with ( ) and unable to be changed after it's created.",
 "Set":"An unordered collection of unique values, written with { } — duplicates are removed automatically.",
 "Dictionary":"A collection of key-value pairs, written with { }, where you look up values by a key instead of a position.",
 "Key-Value Pair":"One entry in a dictionary — a key (like \"name\") mapped to its value (like \"Christian\").",
 "Parameter":"A placeholder name listed in a function's definition, filled in with a real value when the function is called.",
 "Function Call":"Actually running a function by writing its name followed by parentheses, e.g. greet().",
 "Return Value":"The value a function sends back with return, so it can be stored or used elsewhere.",
 "Default Parameter":"A parameter that automatically uses a preset value if the caller doesn't supply one.",
 "Error":"Python's way of signaling that something in the code stopped it from finishing — normal, and fixable.",
 "Traceback":"The message Python shows when an error happens, including the line number, error type, and explanation.",
 "Name Error":"An error raised when code refers to a variable or function Python has never seen — usually a typo.",
 "Type Error":"An error raised when an operation is used on data types that don't work together, like text + number.",
 "Index Error":"An error raised when code asks for a list (or string) position that doesn't exist.",
 "File":"A place where data is stored outside your program, on disk, so it can be saved and reopened later.",
 "CSV":"Comma-Separated Values — a plain-text format for tabular data, one row per line, columns split by commas.",
 "JSON":"A text format for structured data like dictionaries and lists, commonly used to exchange data between programs.",
 "Object":"A bundle of data (attributes) and actions (methods) grouped together as one thing — a string or list is an object.",
 "Class":"A blueprint that describes what objects made from it will look like and be able to do.",
 "Attribute":"A piece of data attached to an object, accessed with a dot, like my_dog.name.",
 "Method":"A function that belongs to a class — an action objects made from that class can perform.",
 "Constructor":"__init__ — a special method that runs automatically when a new object is created, used to set up its attributes.",
 "Self":"Inside a method, self refers to the specific object the method is currently being called on.",
 "Inheritance":"When one class (the child) reuses and extends another class (the parent), instead of starting from scratch.",
 "Automation":"Writing a script once so it can repeat a task for you automatically, instead of doing it by hand.",
 "API":"Application Programming Interface — a way for your program to request data or services from another program, often over the internet.",
 "Database":"A place where data is stored so it survives after your program ends, unlike a normal variable.",
 "Command-Line Program":"A program that reads information passed in when it's launched (via sys.argv), rather than asking for input while running."
};

/* ============================================================
   STATE / STORAGE     (treat as core/state.js)
   ============================================================ */
const DEFAULT_STATE = {
  xp:0, streak:0, lastActiveDay:null,
  completedLessons:[], completedChallenges:[], completedDebug:[],
  quizAttempts:{},        // lessonId or "mixed" -> [{score,total,date}]
  projectStatus:{},       // projectId -> "in_progress" | "done"
  achievements:[],
  activity:[]              // [{text, date}]
};
let STATE = JSON.parse(JSON.stringify(DEFAULT_STATE));
let saveTimer = null;

async function loadState(){
  try{
    const res = await window.storage.get("pystart_progress", false);
    if(res && res.value){
      STATE = Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), JSON.parse(res.value));
    }
  }catch(e){ /* first run — no saved state yet */ }
  bumpStreak();
  renderAll();
}
function saveState(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async ()=>{
    try{ await window.storage.set("pystart_progress", JSON.stringify(STATE), false); }catch(e){}
  }, 250);
}
function todayStr(){ return new Date().toISOString().slice(0,10); }
function bumpStreak(){
  const today = todayStr();
  if(STATE.lastActiveDay === today) return;
  const y = new Date(Date.now()-86400000).toISOString().slice(0,10);
  STATE.streak = (STATE.lastActiveDay === y) ? STATE.streak + 1 : 1;
  STATE.lastActiveDay = today;
  saveState();
}
function addXP(n){ STATE.xp += n; checkAchievements(); saveState(); renderSidebar(); renderDashboard(); }
function logActivity(text){
  STATE.activity.unshift({text, date:new Date().toLocaleString()});
  STATE.activity = STATE.activity.slice(0,15);
}
function toast(msg){
  const t = document.getElementById("toast");
  t.innerHTML = msg; t.classList.add("show");
  clearTimeout(toast._tm);
  toast._tm = setTimeout(()=>t.classList.remove("show"), 2200);
}
/* Shared line-icon set for achievements (no emoji) */
const ACH_ICONS = {
  flag:`<path d="M6 21V4"/><path d="M6 5.6c1.8-1.3 3.6-1.3 5.4 0s3.6 1.3 5.4 0v7c-1.8 1.3-3.6 1.3-5.4 0s-3.6-1.3-5.4 0z"/>`,
  book:`<path d="M12 6.5c-1.8-1.1-4-1.7-6.2-1.7-.7 0-1.3.55-1.3 1.2v11c0 .65.6 1.2 1.3 1.2 2.2 0 4.4.6 6.2 1.7 1.8-1.1 4-1.7 6.2-1.7.7 0 1.3-.55 1.3-1.2V6c0-.65-.6-1.2-1.3-1.2-2.2 0-4.4.6-6.2 1.7z"/><path d="M12 6.5V19.9"/>`,
  bolt:`<path d="M13.2 2.8 6.3 13.6a.6.6 0 0 0 .5.9h4.6l-1 6.7a.4.4 0 0 0 .7.3l7-10.8a.6.6 0 0 0-.5-.9h-4.6l1-6.7a.4.4 0 0 0-.7-.3z"/>`,
  bug:`<ellipse cx="12" cy="14" rx="4.6" ry="5.6"/><path d="M12 8.4V6"/><path d="M9.2 7.2 7.8 5.4"/><path d="M14.8 7.2 16.2 5.4"/><path d="M7.4 12.2H4.1"/><path d="M7.4 16.8H4.3"/><path d="M16.6 12.2h3.3"/><path d="M16.6 16.8h3.1"/>`,
  brain:`<path d="M9.4 4.8a2.6 2.6 0 0 0-2.6 2.7v.2A2.6 2.6 0 0 0 5 10.2v.9a2.6 2.6 0 0 0 1.1 2.1 2.9 2.9 0 0 0 2.3 4.5h.3a2 2 0 0 0 2-2V7a2.2 2.2 0 0 0-1.3-2.2z"/><path d="M14.6 4.8a2.6 2.6 0 0 1 2.6 2.7v.2a2.6 2.6 0 0 1 1.9 2.5v.9a2.6 2.6 0 0 1-1.1 2.1 2.9 2.9 0 0 1-2.3 4.5h-.3a2 2 0 0 1-2-2V7a2.2 2.2 0 0 1 1.3-2.2z"/>`,
  flame:`<path d="M12 3c1.5 2.2 2.2 4 2.2 5.6a2.2 2.2 0 0 1-1 1.9c1.4-.1 2.6-1 3.2-2.3.8 1.6 1.1 3 1.1 4.3 0 3.6-2.4 6.5-6.5 6.5s-6.5-2.9-6.5-6.5c0-1.7.6-3.2 1.7-4.7a2.6 2.6 0 0 0 1.5 1.9C8.2 7.4 9.6 5 12 3z"/>`,
  blocks:`<path d="M12 3.4 20.4 8 12 12.6 3.6 8z"/><path d="M3.6 12l8.4 4.6 8.4-4.6"/><path d="M3.6 16l8.4 4.6 8.4-4.6"/>`,
  cap:`<path d="M12 4 2 9l10 5 10-5z"/><path d="M6 11.5V16c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5v-4.5"/><path d="M21 9v6.5"/>`,
  compass:`<circle cx="12" cy="12" r="8.5"/><path d="M15.3 8.7 13.1 13l-4.3 2.2 2.2-4.3z"/>`,
  loop:`<path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3L19.5 8.5"/><path d="M19.5 4.5v4h-4"/><path d="M19.5 12a7.5 7.5 0 0 1-12.8 5.3L4.5 15.5"/><path d="M4.5 19.5v-4h4"/>`,
  box:`<path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M4 7l8 4 8-4"/><path d="M12 11v10"/>`,
  gear:`<circle cx="12" cy="12" r="3"/><path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/>`,
  search:`<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>`,
  folder:`<path d="M4 7a1.3 1.3 0 0 1 1.3-1.3h4.2l1.8 2.1h7.4A1.3 1.3 0 0 1 20 9.1V17a1.3 1.3 0 0 1-1.3 1.3H5.3A1.3 1.3 0 0 1 4 17z"/>`,
  trophy:`<path d="M8 4h8v4a4 4 0 0 1-8 0z"/><path d="M8 5H5.5a1 1 0 0 0-1 1.2C4.9 8.5 6.3 10 8 10.3"/><path d="M16 5h2.5a1 1 0 0 1 1 1.2C19.1 8.5 17.7 10 16 10.3"/><path d="M12 12v3"/><path d="M9 19h6"/><path d="M9.5 15h5l.5 4h-6z"/>`,
  dice:`<rect x="4" y="4" width="16" height="16" rx="3.2"/><circle cx="8.4" cy="8.4" r="1.15" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="15.6" cy="15.6" r="1.15" fill="currentColor" stroke="none"/>`,
  sparkle:`<path d="M12 3c.7 4 2.7 6 6.7 6.7-4 .7-6 2.7-6.7 6.7-.7-4-2.7-6-6.7-6.7C9.3 9 11.3 7 12 3z"/><path d="M19 3.5c.3 1.4 1 2.1 2.4 2.4-1.4.3-2.1 1-2.4 2.4-.3-1.4-1-2.1-2.4-2.4 1.4-.3 2.1-1 2.4-2.4z"/>`,
  close:`<path d="M6 6l12 12M18 6 6 18"/>`,
  send:`<path d="M4 12 20 4l-6.5 16-3-6.5z"/><path d="M4 12l9.5 1.5"/>`
};
const CHEVRON = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`;
const CHECK_SM = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;flex-shrink:0;"><path d="M5 12.5l4.3 4.3L19 7"/></svg>`;
function icon(key, size, extraStyle){
  size = size || 15;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;flex-shrink:0;${extraStyle||''}">${ACH_ICONS[key]||ACH_ICONS.trophy}</svg>`;
}
function achIcon(key, size){ return icon(key, size); }
function starIcon(filled, size){
  size = size || 13;
  const star = `<path d="M12 3.2l2.6 5.4 5.8.6-4.4 4 1.2 5.8L12 16l-5.1 3 1.2-5.8-4.4-4 5.8-.6z"/>`;
  return filled
    ? `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" style="flex-shrink:0;">${star}</svg>`
    : `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" style="flex-shrink:0;opacity:.4;">${star}</svg>`;
}
function starRating(filled, total){
  total = total || 4;
  let out = "";
  for(let i=0;i<total;i++) out += starIcon(i<filled);
  return `<span style="display:inline-flex;gap:1px;vertical-align:-3px;">${out}</span>`;
}
const DIFF_LABELS = {1:"Easy", 2:"Medium", 3:"Hard", 4:"Expert"};
function difficultyChip(stars, total, active){
  total = total || 4;
  const cls = "l" + Math.min(stars, 4);
  let dots = "";
  for(let i=0;i<total;i++) dots += starIcon(i<stars, 11);
  return `<button type="button" class="diff-chip ${cls}${active?' active':''}" onclick="event.stopPropagation();filterChallenges(${stars})" title="Show only ${DIFF_LABELS[stars]} challenges"><span class="diff-stars">${dots}</span>${DIFF_LABELS[stars]||""}</button>`;
}

const ACHIEVEMENT_DEFS = [
  {id:"first_run", label:"First Program", icon:"flag", test:s=>s._ranOnce},
  {id:"first_lesson", label:"First Lesson", icon:"book", test:s=>s.completedLessons.length>=1},
  {id:"five_challenges", label:"5 Challenges Solved", icon:"bolt", test:s=>s.completedChallenges.length>=5},
  {id:"debugger", label:"Debugger", icon:"bug", test:s=>s.completedDebug.length>=3},
  {id:"quiz_whiz", label:"Quiz Whiz", icon:"brain", test:s=>Object.values(s.quizAttempts).some(list=>list.some(a=>a.score===a.total))},
  {id:"streak3", label:"3-Day Streak", icon:"flame", test:s=>s.streak>=3},
  {id:"project1", label:"First Project Built", icon:"blocks", test:s=>Object.values(s.projectStatus).some(v=>v==="done")},
  {id:"level1_grad", label:"Level 1 Graduate", icon:"cap", test:s=>LESSONS.filter(l=>l.level===1).every(l=>s.completedLessons.includes(l.id))},
  {id:"level2_grad", label:"Level 2 Graduate", icon:"compass", test:s=>LESSONS.filter(l=>l.level===2).every(l=>s.completedLessons.includes(l.id))},
  {id:"level3_grad", label:"Level 3 Graduate", icon:"loop", test:s=>LESSONS.filter(l=>l.level===3).every(l=>s.completedLessons.includes(l.id))},
  {id:"level4_grad", label:"Level 4 Graduate", icon:"box", test:s=>LESSONS.filter(l=>l.level===4).every(l=>s.completedLessons.includes(l.id))},
  {id:"level5_grad", label:"Level 5 Graduate", icon:"gear", test:s=>LESSONS.filter(l=>l.level===5).every(l=>s.completedLessons.includes(l.id))},
  {id:"level6_grad", label:"Level 6 Graduate", icon:"search", test:s=>LESSONS.filter(l=>l.level===6).every(l=>s.completedLessons.includes(l.id))},
  {id:"level7_grad", label:"Level 7 Graduate", icon:"folder", test:s=>LESSONS.filter(l=>l.level===7).every(l=>s.completedLessons.includes(l.id))},
];
function checkAchievements(){
  ACHIEVEMENT_DEFS.forEach(a=>{
    if(!STATE.achievements.includes(a.id) && a.test(STATE)){
      STATE.achievements.push(a.id);
      logActivity(`Achievement unlocked: ${a.label}`);
      toast(`${icon('trophy',14,'margin-right:5px;')}Achievement unlocked: ${a.label}`);
    }
  });
}

/* ============================================================
   ROUTER
   ============================================================ */
let CURRENT_LESSON = null, CURRENT_PROJECT = null;
function go(page, param){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page-"+page).classList.add("active");
  document.querySelectorAll(".nav-item[data-page]").forEach(n=>n.classList.toggle("active", n.dataset.page===page));
  document.getElementById("navMoreBtn")?.classList.toggle("active", navOverflowPages.includes(page));
  window.scrollTo(0,0);
  if(page==="dashboard") renderDashboard();
  if(page==="learn") renderLessonList();
  if(page==="practice") renderChallengeList();
  if(page==="debug") renderDebugList();
  if(page==="projects") renderProjectList();
  if(page==="quiz") renderQuizHome();
  if(page==="progress") renderProgress();
  if(page==="glossary") renderGlossary();
  if(page==="lesson" && param) openLesson(param);
  if(page==="project-detail" && param) openProject(param);
}
function goToLevel(num){
  go("learn");
  requestAnimationFrame(()=>{
    const el = document.getElementById("level-"+num);
    if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
  });
}
function reviewTopic(lessonId){
  go("quiz");
  startQuiz(lessonId);
}
document.querySelectorAll(".nav-item[data-page]").forEach(btn=>{
  btn.addEventListener("click", ()=>go(btn.dataset.page));
});

/* ============================================================
   MOBILE NAV OVERFLOW ("More" popup)
   When the bottom nav bar can't fit every item, the ones that
   don't fit are moved into a bottom-sheet popup behind a
   "More" button instead of being left to horizontal-scroll off
   screen.
   ============================================================ */
const MOBILE_NAV_BP = 760;
let navMeta = null;      // [{page,label,iconHTML}] captured once from the DOM
let navOverflowPages = [];

function captureNavMeta(){
  if(navMeta) return navMeta;
  navMeta = [...document.querySelectorAll("#navList > .nav-item[data-page]")].map(btn=>({
    page: btn.dataset.page,
    label: btn.textContent.trim(),
    iconHTML: btn.querySelector(".ico").innerHTML
  }));
  return navMeta;
}

function isMobileNav(){
  return window.matchMedia(`(max-width:${MOBILE_NAV_BP}px)`).matches;
}

function layoutMobileNav(){
  const navList = document.getElementById("navList");
  const moreBtn = document.getElementById("navMoreBtn");
  const items = [...navList.querySelectorAll(".nav-item[data-page]")];

  if(!isMobileNav()){
    items.forEach(b=>b.style.display="");
    moreBtn.style.display = "none";
    navOverflowPages = [];
    closeNavSheet();
    return;
  }

  captureNavMeta();
  // Reset to natural state first so we can measure true widths.
  items.forEach(b=>b.style.display="");
  moreBtn.style.display = "none";

  const containerWidth = navList.getBoundingClientRect().width;
  const gap = 2; // matches .nav{gap:2px}
  const moreWidth = moreBtn.getBoundingClientRect().width || 56;

  let used = 0, cutoff = items.length;
  for(let i=0;i<items.length;i++){
    const w = items[i].getBoundingClientRect().width;
    const withThis = used + (i>0?gap:0) + w;
    const itemsLeftAfter = items.length - (i+1);
    const reserve = itemsLeftAfter>0 ? gap+moreWidth : 0;
    if(withThis + reserve > containerWidth){
      cutoff = i;
      break;
    }
    used = withThis;
  }

  if(cutoff >= items.length){
    moreBtn.style.display = "none";
    navOverflowPages = [];
    navList.classList.add("nav-fill");
  }else{
    navOverflowPages = navMeta.slice(cutoff).map(m=>m.page);
    items.forEach((b,i)=>{ b.style.display = i<cutoff ? "" : "none"; });
    moreBtn.style.display = "";
    navList.classList.remove("nav-fill");
    const activePage = document.querySelector(".page.active")?.id.replace("page-","");
    moreBtn.classList.toggle("active", navOverflowPages.includes(activePage));
  }
}

function renderNavSheet(){
  const list = document.getElementById("navSheetList");
  const activePage = document.querySelector(".page.active")?.id.replace("page-","");
  list.innerHTML = captureNavMeta()
    .filter(m=>navOverflowPages.includes(m.page))
    .map(m=>`<button type="button" class="nav-sheet-item ${m.page===activePage?"active":""}" data-page="${m.page}">
        <span class="ico">${m.iconHTML}</span>${m.label}
      </button>`).join("");
  list.querySelectorAll(".nav-sheet-item").forEach(btn=>{
    btn.addEventListener("click", ()=>{ go(btn.dataset.page); closeNavSheet(); });
  });
}

function openNavSheet(){
  renderNavSheet();
  document.getElementById("navSheetBack").classList.add("show");
}
function closeNavSheet(){
  document.getElementById("navSheetBack").classList.remove("show");
}
document.getElementById("navMoreBtn").addEventListener("click", openNavSheet);
document.getElementById("navSheetBack").addEventListener("click", (e)=>{
  if(e.target.id==="navSheetBack") closeNavSheet();
});

let navResizeTimer = null;
window.addEventListener("resize", ()=>{
  clearTimeout(navResizeTimer);
  navResizeTimer = setTimeout(layoutMobileNav, 120);
});

/* ============================================================
   RENDER: sidebar + dashboard
   ============================================================ */
function renderSidebar(){
  document.getElementById("streakVal").textContent = STATE.streak + (STATE.streak===1?" day":" days");
  document.getElementById("xpVal").textContent = STATE.xp;
  const mStreak = document.getElementById("mStreakVal");
  const mXp = document.getElementById("mXpVal");
  if(mStreak) mStreak.textContent = STATE.streak + (STATE.streak===1?" day":" days");
  if(mXp) mXp.textContent = STATE.xp;
}
function overallPct(){
  const total = LESSONS.length + CHALLENGES.length + PROJECTS.length;
  const done = STATE.completedLessons.length + STATE.completedChallenges.length + Object.values(STATE.projectStatus).filter(v=>v==="done").length;
  return Math.round(100*done/total);
}
function renderDashboard(){
  const pct = overallPct();
  document.getElementById("dashPct").textContent = pct+"%";
  const ring = document.getElementById("dashRing");
  const c = 226; ring.setAttribute("stroke-dashoffset", c - (c*pct/100));

  const nextLesson = LESSONS.find(l=>!STATE.completedLessons.includes(l.id));
  document.getElementById("dashGreeting").textContent = STATE.completedLessons.length===0 ? "Welcome!" : "Welcome back";
  document.getElementById("dashHeadline").innerHTML = nextLesson ? `You're on: ${nextLesson.title}` : `You've completed every lesson! ${icon('sparkle',18,'margin-left:4px;')}`;
  document.getElementById("dashSub").textContent = nextLesson ? `Estimated time: ${nextLesson.est}` : "Head to Practice or Projects to keep sharpening your skills.";
  const cbtn = document.getElementById("continueBtn");
  cbtn.onclick = ()=> nextLesson ? go("lesson", nextLesson.id) : go("practice");
  cbtn.textContent = nextLesson ? "Continue learning →" : "Practice more →";

  document.getElementById("statLessons").textContent = STATE.completedLessons.length + " / " + LESSONS.length;
  document.getElementById("statChallenges").textContent = STATE.completedChallenges.length + " / " + CHALLENGES.length;
  document.getElementById("statProjects").textContent = Object.values(STATE.projectStatus).filter(v=>v==="done").length + " / " + PROJECTS.length;
  document.getElementById("statQuizzes").textContent = Object.values(STATE.quizAttempts).reduce((a,l)=>a+l.length,0);

  document.getElementById("dashLevelProgress").innerHTML = LEVELS.map(lv=>{
    const lessons = LESSONS.filter(l=>l.level===lv.num);
    const done = lessons.filter(l=>STATE.completedLessons.includes(l.id)).length;
    const pct = Math.round(100*done/lessons.length);
    return `<button type="button" class="level-row clickable" onclick="goToLevel(${lv.num})" title="Jump to Level ${lv.num} lessons">
      <div class="lname">Level ${lv.num}: ${lv.title}</div>
      <div class="progressbar"><div style="width:${pct}%"></div></div>
      <div class="lpct">${pct}%</div>
      <span class="chev">${CHEVRON}</span>
    </button>`;
  }).join("");

  const ach = document.getElementById("dashAchievements");
  if(STATE.achievements.length===0){
    ach.innerHTML = `<div class="empty-note">Nothing yet — run your first program to unlock one!</div>`;
  }else{
    ach.innerHTML = STATE.achievements.map(id=>{
      const a = ACHIEVEMENT_DEFS.find(x=>x.id===id);
      return `<div class="badge l4" style="font-size:12.5px;padding:6px 12px;">${icon(a.icon,14,'margin-right:4px;')}${a.label}</div>`;
    }).join("");
  }
  renderSidebar();
}

/* ============================================================
   RENDER: Learn list + lesson detail
   ============================================================ */
function renderLessonList(){
  document.getElementById("lessonList").innerHTML = LEVELS.map(lv=>{
    const lessons = LESSONS.filter(l=>l.level===lv.num);
    const rows = lessons.map(l=>{
      const done = STATE.completedLessons.includes(l.id);
      return `<button class="lesson-row ${done?'done':''}" onclick="go('lesson', ${l.id})" style="cursor:pointer;border:1px solid var(--border);">
        <div class="num">${done?CHECK_SM:l.id}</div>
        <div class="body">
          <div class="t">${l.title}</div>
          <div class="d">${l.est} · ${done?'Completed':'Not started'}</div>
        </div>
      </button>`;
    }).join("");
    return `<div class="section-title" id="level-${lv.num}">Level ${lv.num}: ${lv.title}</div><div class="lesson-list">${rows}</div>`;
  }).join("");
}

function openLesson(id){
  const l = LESSONS.find(x=>x.id===id);
  CURRENT_LESSON = l;
  go_silent_lesson_page();
  const idx = LESSONS.indexOf(l);
  const next = LESSONS[idx+1];
  document.getElementById("lessonDetail").innerHTML = `
    <div class="badge ${levelBadgeClass(l.level)}">Level ${l.level}</div>
    <h1 class="page-title" style="margin-top:10px;">${l.title}</h1>
    <p class="page-sub">Estimated time: ${l.est}</p>

    <div class="step-block">
      <div class="step-label">Learn</div>
      <div class="prose">${l.explain}</div>
    </div>

    <div class="step-block">
      <div class="step-label">Example</div>
      <div class="codeblock">${escapeHtml(l.example)}</div>
      <div class="line-explain">
        ${l.lineExplain.map(([code,txt])=>`<div class="le-row"><code>${escapeHtml(code)}</code><span class="le-txt">${txt}</span></div>`).join("")}
      </div>
    </div>

    <div class="step-block">
      <div class="step-label">Try it yourself</div>
      <p class="prose" style="margin-bottom:10px;">${l.tryPrompt}</p>
      ${buildEditor("lessonEditor", l.tryStarter, [])}
    </div>

    <div class="step-block">
      <div class="step-label">Check your understanding</div>
      <div id="lessonQuizArea"></div>
    </div>

    <div class="step-block" style="display:flex;gap:10px;align-items:center;">
      <button class="btn success" onclick="completeLesson(${l.id})" id="lessonCompleteBtn">
        ${STATE.completedLessons.includes(l.id) ? CHECK_SM+" Lesson complete" : "Mark lesson complete"}
      </button>
      ${next ? `<button class="btn secondary" onclick="go('lesson', ${next.id})">Next: ${next.title} →</button>` : `<span style="color:var(--text-muted);font-size:13px;display:inline-flex;align-items:center;gap:4px;">${icon('sparkle',14)}That's every lesson so far!</span>`}
    </div>
  `;
  wireEditor("lessonEditor");
  renderMiniQuiz("lessonQuizArea", l);
}
function go_silent_lesson_page(){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page-lesson").classList.add("active");
  window.scrollTo(0,0);
}
function completeLesson(id){
  if(!STATE.completedLessons.includes(id)){
    STATE.completedLessons.push(id);
    addXP(20);
    logActivity(`Completed lesson: ${LESSONS.find(l=>l.id===id).title}`);
    checkAchievements();
    saveState();
    toast("Lesson complete! +20 XP");
  }
  document.getElementById("lessonCompleteBtn").innerHTML = CHECK_SM+" Lesson complete";
  renderDashboard();
}

function renderMiniQuiz(containerId, lesson){
  const container = document.getElementById(containerId);
  let idx = 0, correctCount = 0;
  function renderQ(){
    if(idx >= lesson.quiz.length){
      container.innerHTML = `<div class="feedback pass">Nice — you got ${correctCount}/${lesson.quiz.length} right.</div>`;
      const list = STATE.quizAttempts[lesson.id] || [];
      list.push({score:correctCount, total:lesson.quiz.length, date:new Date().toLocaleDateString()});
      STATE.quizAttempts[lesson.id] = list;
      saveState();
      return;
    }
    const q = lesson.quiz[idx];
    container.innerHTML = `
      <div class="card">
        <div class="quiz-q" style="font-size:14.5px;">${q.q}</div>
        <div class="mc-options">
          ${q.opts.map((o,i)=>`<button class="mc-opt" data-i="${i}">${o}</button>`).join("")}
        </div>
        <div id="miniQFeedback"></div>
      </div>`;
    container.querySelectorAll(".mc-opt").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const i = parseInt(btn.dataset.i);
        container.querySelectorAll(".mc-opt").forEach(b=>b.disabled=true);
        if(i===q.correct){ btn.classList.add("correct"); correctCount++; }
        else{
          btn.classList.add("wrong");
          container.querySelectorAll(".mc-opt")[q.correct].classList.add("correct");
        }
        document.getElementById("miniQFeedback").innerHTML = `<div class="feedback ${i===q.correct?'pass':'fail'}">${q.explain}</div>
          <button class="btn small secondary" style="margin-top:10px;" onclick="(${renderQ.toString().replace(/"/g,'&quot;')})()" id="nextMiniQ">${idx+1<lesson.quiz.length?'Next question':'See result'}</button>`;
        idx++;
        document.getElementById("nextMiniQ").onclick = renderQ;
      });
    });
  }
  renderQ();
}

/* ============================================================
   PYTHON EXECUTION ENGINE  (treat as core/pyEngine.js)
   ============================================================ */
let pyodideReadyPromise = null;
function ensurePyodide(){
  if(!pyodideReadyPromise){
    pyodideReadyPromise = (typeof loadPyodide === "function")
      ? loadPyodide({indexUrl:"https://cdnjs.cloudflare.com/ajax/libs/pyodide/0.26.4/"})
      : Promise.reject(new Error("Pyodide script failed to load"));
    // Don't let a failed/rejected load get stuck as the permanent cached
    // result — clear it so the next attempt (e.g. clicking Run again)
    // actually retries instead of instantly re-throwing the same error.
    pyodideReadyPromise.catch(()=>{ pyodideReadyPromise = null; });
  }
  return pyodideReadyPromise;
}
// run code with a queue of pre-set input() responses; returns {ok, output, error}
async function runPython(code, inputs){
  let pyodide;
  try{ pyodide = await ensurePyodide(); }
  catch(e){ return {ok:false, output:"", error:"Couldn't start the Python engine. Check your connection and try again."}; }

  const inputList = (inputs||[]).map(x=>String(x));
  pyodide.globals.set("__inputs__", inputList);
  const setup = `
import sys, io, builtins
_q = list(__inputs__)
def _fake_input(prompt=""):
    sys.stdout.write(str(prompt))
    return _q.pop(0) if _q else ""
builtins.input = _fake_input
sys.stdout = io.StringIO()
sys.stderr = sys.stdout
`;
  try{
    await pyodide.runPythonAsync(setup);
    await pyodide.runPythonAsync(code);
    const out = await pyodide.runPythonAsync("sys.stdout.getvalue()");
    return {ok:true, output: out, error:null};
  }catch(e){
    let out = "";
    try{ out = await pyodide.runPythonAsync("sys.stdout.getvalue()"); }catch(_e){}
    return {ok:false, output:out, error: friendlyError(String(e && e.message || e))};
  }
}
function friendlyError(raw){
  if(raw.includes("NameError")) return "NameError — you're using a variable name Python doesn't recognize. Check the spelling matches exactly.";
  if(raw.includes("IndentationError")) return "IndentationError — a line isn't indented the way Python expects. Lines inside if/for/while/def need 4 spaces in front.";
  if(raw.includes("SyntaxError")) return "SyntaxError — Python can't understand this line. Check for missing colons (:), quotes, or parentheses.";
  if(raw.includes("TypeError")) return "TypeError — you're combining two things that don't mix directly (like text and a number). Try converting one with str() or int().";
  if(raw.includes("ZeroDivisionError")) return "ZeroDivisionError — the code tried to divide a number by zero, which isn't allowed.";
  if(raw.includes("IndexError")) return "IndexError — you're trying to reach an item at a position that doesn't exist in the list.";
  if(raw.includes("KeyError")) return "KeyError — you're looking up a dictionary key that isn't there.";
  if(raw.includes("AttributeError")) return "AttributeError — you're trying to use an attribute or method that this object doesn't actually have. Check the spelling, and make sure it was set (often in __init__).";
  if(raw.includes("ValueError")) return "ValueError — a value isn't in the form Python expected (e.g. trying to int() text that isn't a number).";
  if(raw.includes("FileNotFoundError")) return "FileNotFoundError — you tried to read a file that doesn't exist yet. Write it first with mode \"w\", or check the filename.";
  const m = raw.match(/([A-Za-z]+Error):.*$/m);
  return m ? m[0] : raw.split("\n").pop();
}

/* Generic editor widget builder */
function buildEditor(id, starterCode, inputsPlaceholder){
  return `
  <div class="editor-wrap" id="${id}-wrap">
    <div class="editor-bar">
      <div class="dots"><span></span><span></span><span></span></div>
      <div class="editor-actions">
        <button class="btn small secondary" onclick="resetEditor('${id}', \`${starterCode.replace(/`/g,'\\`')}\`)">Reset</button>
        <button class="btn small" onclick="runEditor('${id}')" id="${id}-run">▶ Run</button>
      </div>
    </div>
    <textarea class="code-input" id="${id}" spellcheck="false">${starterCode}</textarea>
    <div class="tip-note">Tip: avoid loops that never end (e.g. while True with no break) — they'll freeze this tab until you refresh.</div>
    <div class="output-panel" id="${id}-out"><div class="op-label">Output</div><pre>Click Run to see what your code does.</pre></div>
  </div>`;
}
function wireEditor(id){ /* placeholder for future keybindings */ }
function resetEditor(id, code){ document.getElementById(id).value = code; }
async function runEditor(id, inputs){
  const code = document.getElementById(id).value;
  const btn = document.getElementById(id+"-run");
  const out = document.getElementById(id+"-out");
  btn.disabled = true; btn.textContent = "Running…";
  out.className = "output-panel";
  out.innerHTML = `<div class="op-label">Output</div><pre>Running…</pre>`;
  const res = await runPython(code, inputs||[]);
  STATE._ranOnce = true; checkAchievements(); saveState();
  btn.disabled = false; btn.textContent = "▶ Run";
  if(res.ok){
    out.classList.add("ok");
    out.innerHTML = `<div class="op-label">Output</div><pre>${escapeHtml(res.output) || "(no output — did you forget a print()?)"}</pre>`;
  }else{
    out.classList.add("error");
    out.innerHTML = `<div class="op-label">Output</div><pre>${escapeHtml(res.output)}</pre><div class="op-label" style="margin-top:8px;color:var(--coral);">Error</div><pre>${escapeHtml(res.error)}</pre>`;
  }
  return res;
}
function escapeHtml(s){
  return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function checkExpect(output, expectList){
  const low = output.toLowerCase();
  return expectList.every(e=> low.includes(String(e).toLowerCase()));
}

/* ============================================================
   RENDER: Practice / Challenges
   ============================================================ */
let CHALLENGE_FILTER = null;
function renderChallengeList(){
  renderPracticeFilterBar();
  const list = CHALLENGE_FILTER ? CHALLENGES.filter(c=>c.stars===CHALLENGE_FILTER) : CHALLENGES;
  document.getElementById("challengeList").innerHTML = list.length
    ? list.map(c=>challengeCardHtml(c)).join("")
    : `<div class="empty-note">No challenges at that difficulty yet — try another level.</div>`;
  list.forEach(c=>wireChallenge(c));
}
function renderPracticeFilterBar(){
  const counts = {1:0,2:0,3:0,4:0};
  CHALLENGES.forEach(c=>counts[c.stars]=(counts[c.stars]||0)+1);
  const allBtn = `<button type="button" class="diff-chip all${CHALLENGE_FILTER===null?' active':''}" onclick="filterChallenges(null)">All (${CHALLENGES.length})</button>`;
  const tierBtns = [1,2,3,4].filter(s=>counts[s]>0).map(s=>{
    const active = CHALLENGE_FILTER===s;
    const cls = "l"+s;
    let dots=""; for(let i=0;i<4;i++) dots += starIcon(i<s, 11);
    return `<button type="button" class="diff-chip ${cls}${active?' active':''}" onclick="filterChallenges(${s})"><span class="diff-stars">${dots}</span>${DIFF_LABELS[s]} (${counts[s]})</button>`;
  }).join("");
  document.getElementById("practiceFilterBar").innerHTML = `<span class="filter-label">Filter:</span>${allBtn}${tierBtns}`;
}
function filterChallenges(stars){
  CHALLENGE_FILTER = (CHALLENGE_FILTER===stars) ? null : stars;
  renderChallengeList();
  document.getElementById("challengeList").scrollIntoView({behavior:"smooth", block:"start"});
}
function challengeCardHtml(c){
  const done = STATE.completedChallenges.includes(c.id);
  return `<div class="challenge-card" id="${c.id}-card">
    <div class="challenge-head">
      <div class="t">${done?CHECK_SM+' ':''}${c.title}</div>
      <div class="stars">${difficultyChip(c.stars, 4, CHALLENGE_FILTER===c.stars)}</div>
    </div>
    <div class="challenge-desc">${c.desc.replace(/\n/g,'<br>')}</div>
    ${buildEditor(c.id+"-ed", c.starter, c.inputs)}
    <div class="hint-actions">
      <button class="btn small secondary" onclick="submitChallenge('${c.id}')">Submit</button>
      <button class="btn small ghost" onclick="showHint('${c.id}', 0)">Hint 1</button>
      <button class="btn small ghost" onclick="showHint('${c.id}', 1)">Hint 2</button>
      <button class="btn small ghost" onclick="showHint('${c.id}', 2)">Hint 3</button>
      <button class="btn small ghost" onclick="showSolution('${c.id}')">Show solution</button>
    </div>
    <div id="${c.id}-hint"></div>
    <div id="${c.id}-feedback"></div>
    <div id="${c.id}-solution"></div>
  </div>`;
}
function wireChallenge(c){ /* nothing extra needed, buttons use inline handlers */ }
function showHint(id, level){
  const c = CHALLENGES.find(x=>x.id===id) || DEBUGS.find(x=>x.id===id);
  document.getElementById(id+"-hint").innerHTML = `<div class="hint-box"><strong>Hint ${level+1}:</strong> ${c.hints[level]}</div>`;
}
function showSolution(id){
  const c = CHALLENGES.find(x=>x.id===id);
  document.getElementById(id+"-solution").innerHTML = `
    <div class="solution-box">
      <strong>Solution</strong>
      <div class="codeblock">${escapeHtml(c.solution)}</div>
      <p style="margin:8px 0 0;">${c.solutionExplain}</p>
    </div>`;
}
async function submitChallenge(id){
  const c = CHALLENGES.find(x=>x.id===id);
  const res = await runEditor(id+"-ed", c.inputs);
  const fb = document.getElementById(id+"-feedback");
  if(!res.ok){
    fb.innerHTML = `<div class="feedback fail">Not quite — your code hit an error. Read the message above, or grab a hint below.</div>`;
    return;
  }
  const pass = checkExpect(res.output, c.expect);
  if(pass){
    fb.innerHTML = `<div class="feedback pass">Passed! Nice work.</div>`;
    if(!STATE.completedChallenges.includes(id)){
      STATE.completedChallenges.push(id);
      addXP(15 + c.stars*5);
      logActivity(`Solved challenge: ${c.title}`);
      checkAchievements(); saveState();
      toast(`Challenge solved! +${15+c.stars*5} XP`);
      renderDashboard();
      document.querySelector(`#${id}-card .t`).innerHTML = CHECK_SM+" " + c.title;
    }
  }else{
    fb.innerHTML = `<div class="feedback fail">Close, but the output doesn't look right yet. Check your logic and try again — or grab a hint.</div>`;
  }
}

/* ============================================================
   RENDER: Debug Lab
   ============================================================ */
function renderDebugList(){
  document.getElementById("debugList").innerHTML = DEBUGS.map(d=>{
    const done = STATE.completedDebug.includes(d.id);
    if(d.kind==="mc"){
      return `<div class="challenge-card" id="${d.id}-card">
        <div class="challenge-head"><div class="t">${done?CHECK_SM+' ':''}${d.title}</div><div class="badge l3">Spot the bug</div></div>
        <div class="challenge-desc">${d.desc}</div>
        <div class="codeblock">${escapeHtml(d.broken)}</div>
        <div class="mc-options" id="${d.id}-opts">
          ${d.options.map((o,i)=>`<button class="mc-opt" onclick="answerDebugMc('${d.id}', ${i})">${o}</button>`).join("")}
        </div>
        <div id="${d.id}-feedback"></div>
      </div>`;
    }
    return `<div class="challenge-card" id="${d.id}-card">
      <div class="challenge-head"><div class="t">${done?CHECK_SM+' ':''}${d.title}</div><div class="badge l3">Fix it</div></div>
      <div class="challenge-desc">${d.desc}</div>
      ${buildEditor(d.id+"-ed", d.broken, [])}
      <div class="hint-actions">
        <button class="btn small secondary" onclick="submitDebug('${d.id}')">Run &amp; Check</button>
        <button class="btn small ghost" onclick="showHint('${d.id}', 0)">Hint 1</button>
        <button class="btn small ghost" onclick="showHint('${d.id}', 1)">Hint 2</button>
        <button class="btn small ghost" onclick="showHint('${d.id}', 2)">Hint 3</button>
        <button class="btn small ghost" onclick="showDebugAnswer('${d.id}')">Show fix</button>
      </div>
      <div id="${d.id}-hint"></div>
      <div id="${d.id}-feedback"></div>
      <div id="${d.id}-solution"></div>
    </div>`;
  }).join("");
}
async function submitDebug(id){
  const d = DEBUGS.find(x=>x.id===id);
  const res = await runEditor(id+"-ed", []);
  const fb = document.getElementById(id+"-feedback");
  if(!res.ok){
    fb.innerHTML = `<div class="feedback fail">Still broken — read the error above. Try a hint if you're stuck.</div>`;
    return;
  }
  const pass = checkExpect(res.output, d.expect);
  if(pass){
    fb.innerHTML = `<div class="feedback pass">Fixed! ${d.explain}</div>`;
    markDebugDone(id, d.title);
  }else{
    fb.innerHTML = `<div class="feedback fail">It runs now, but the output isn't quite right yet. Keep going.</div>`;
  }
}
function answerDebugMc(id, i){
  const d = DEBUGS.find(x=>x.id===id);
  document.querySelectorAll(`#${id}-opts .mc-opt`).forEach((b,idx)=>{
    b.disabled = true;
    if(idx===d.correct) b.classList.add("correct");
    else if(idx===i) b.classList.add("wrong");
  });
  const fb = document.getElementById(id+"-feedback");
  fb.innerHTML = `<div class="feedback ${i===d.correct?'pass':'fail'}">${d.explain}</div>`;
  if(i===d.correct) markDebugDone(id, d.title);
}
function showDebugAnswer(id){
  const d = DEBUGS.find(x=>x.id===id);
  document.getElementById(id+"-solution").innerHTML = `
    <div class="solution-box"><strong>The fix</strong>
      <div class="codeblock">${escapeHtml(d.fixed)}</div>
      <p style="margin:8px 0 0;">${d.explain}</p>
    </div>`;
}
function markDebugDone(id, title){
  if(!STATE.completedDebug.includes(id)){
    STATE.completedDebug.push(id);
    addXP(20);
    logActivity(`Fixed bug: ${title}`);
    checkAchievements(); saveState();
    toast("Bug fixed! +20 XP");
    renderDashboard();
  }
}

/* ============================================================
   RENDER: Projects
   ============================================================ */
function renderProjectList(){
  document.getElementById("projectList").innerHTML = PROJECTS.map(p=>{
    const status = STATE.projectStatus[p.id] || "not_started";
    return `<div class="card" style="margin-bottom:14px;cursor:pointer;" onclick="go('project-detail', '${p.id}')">
      <div class="challenge-head">
        <div class="t">${status==="done"?CHECK_SM+' ':''}${p.title}</div>
        <span class="badge ${status==='done'?'l1':'l4'}">${status==="done"?"Completed":p.level}</span>
      </div>
      <div class="challenge-desc" style="margin-bottom:0;">${p.summary} · ~${p.time}</div>
    </div>`;
  }).join("");
}
function openProject(id){
  const p = PROJECTS.find(x=>x.id===id);
  CURRENT_PROJECT = p;
  document.querySelectorAll(".page").forEach(pg=>pg.classList.remove("active"));
  document.getElementById("page-project-detail").classList.add("active");
  window.scrollTo(0,0);
  const status = STATE.projectStatus[p.id] || "not_started";
  document.getElementById("projectDetail").innerHTML = `
    <div class="badge l4">${p.level}</div>
    <h1 class="page-title" style="margin-top:10px;">${p.title}</h1>
    <p class="page-sub">${p.summary} · Estimated time: ${p.time}</p>

    <div class="step-block">
      <div class="step-label">Requirements</div>
      <ul class="prose" style="padding-left:20px;">${p.requirements.map(r=>`<li>${r}</li>`).join("")}</ul>
    </div>

    <div class="step-block">
      <div class="step-label">Suggested approach</div>
      <ol class="proj-steps">${p.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
    </div>

    <div class="step-block">
      <div class="step-label">Build it</div>
      ${buildEditor(p.id+"-ed", p.starter, p.checkInputs)}
      <div class="hint-actions">
        <button class="btn secondary" onclick="checkProject('${p.id}')">Test my project</button>
        ${status==="done" ? `<span style="color:var(--green);font-weight:700;font-size:13.5px;align-self:center;display:inline-flex;align-items:center;gap:5px;">${CHECK_SM}Marked complete</span>` : ""}
      </div>
      <div id="${p.id}-feedback"></div>
    </div>
  `;
}
async function checkProject(id){
  const p = PROJECTS.find(x=>x.id===id);
  const res = await runEditor(p.id+"-ed", p.checkInputs);
  const fb = document.getElementById(p.id+"-feedback");
  if(!res.ok){
    fb.innerHTML = `<div class="feedback fail">It hit an error with test input (${p.checkInputs.join(", ")}). Check the error above and keep building.</div>`;
    STATE.projectStatus[p.id] = "in_progress"; saveState();
    return;
  }
  const pass = checkExpect(res.output, p.checkExpect);
  if(pass){
    fb.innerHTML = `<div class="feedback pass">Looks great! Your project handled the test case correctly.</div>`;
    if(STATE.projectStatus[p.id] !== "done"){
      STATE.projectStatus[p.id] = "done";
      addXP(50);
      logActivity(`Completed project: ${p.title}`);
      checkAchievements(); saveState();
      toast("Project complete! +50 XP");
      renderDashboard();
    }
  }else{
    fb.innerHTML = `<div class="feedback fail">It ran, but with test input (${p.checkInputs.join(", ")}) the output didn't match what we expected. Keep refining it.</div>`;
    STATE.projectStatus[p.id] = "in_progress"; saveState();
  }
}

/* ============================================================
   RENDER: Quiz
   ============================================================ */
function renderQuizHome(){
  const html = [`<div class="grid grid-3" style="margin-bottom:20px;">`,
    `<button class="card" style="text-align:left;border:1px solid var(--border);" onclick="startQuiz('mixed')">
      <div style="font-weight:800;font-size:14.5px;display:flex;align-items:center;gap:6px;">${icon('dice',15)}Mixed Review</div>
      <div style="color:var(--text-muted);font-size:12.5px;margin-top:4px;">5 random questions from everything you've learned</div>
    </button>`
  ];
  LESSONS.filter(l=>STATE.completedLessons.includes(l.id) || l.quiz).forEach(l=>{
    html.push(`<button class="card" style="text-align:left;border:1px solid var(--border);" onclick="startQuiz(${l.id})">
      <div style="font-weight:800;font-size:14.5px;">${l.title}</div>
      <div style="color:var(--text-muted);font-size:12.5px;margin-top:4px;">${bestScoreText(l.id)}</div>
    </button>`);
  });
  html.push(`</div>`);
  document.getElementById("quizArea").innerHTML = html.join("");
}
function bestScoreText(lessonId){
  const list = STATE.quizAttempts[lessonId];
  if(!list || !list.length) return "Not attempted yet";
  const best = Math.max(...list.map(a=>Math.round(100*a.score/a.total)));
  return `Best score: ${best}% · ${list.length} attempt${list.length>1?'s':''}`;
}
function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }
function startQuiz(scope){
  let pool = scope==="mixed" ? QUIZ_POOL : QUIZ_POOL.filter(q=>q.lessonId===scope);
  const qs = shuffle(pool).slice(0,5);
  let idx=0, correct=0;
  document.getElementById("quizIntroSub").textContent = scope==="mixed" ? "Mixed review" : LESSONS.find(l=>l.id===scope).title;
  function render(){
    const area = document.getElementById("quizArea");
    if(idx>=qs.length){
      const list = STATE.quizAttempts[scope] || [];
      list.push({score:correct, total:qs.length, date:new Date().toLocaleDateString()});
      STATE.quizAttempts[scope] = list;
      addXP(correct*5);
      logActivity(`Quiz (${scope==="mixed"?"Mixed Review":LESSONS.find(l=>l.id===scope).title}): ${correct}/${qs.length}`);
      checkAchievements(); saveState(); renderDashboard();
      area.innerHTML = `<div class="card quiz-result">
        <div class="score">${correct}/${qs.length}</div>
        <p style="color:var(--text-muted);">${correct===qs.length ? "Perfect score!" : correct/qs.length>=0.6 ? "Solid — review the ones you missed." : "Good attempt — that topic might be worth revisiting."}</p>
        <button class="btn" onclick="go('quiz')">Back to quizzes</button>
      </div>`;
      return;
    }
    const q = qs[idx];
    area.innerHTML = `
      <div class="quiz-progress">${qs.map((_,i)=>`<div class="qp-dot ${i<idx?'done':''}"></div>`).join("")}</div>
      <div class="card">
        <div class="quiz-q">${q.q}</div>
        <div class="mc-options">${q.opts.map((o,i)=>`<button class="mc-opt" data-i="${i}">${o}</button>`).join("")}</div>
        <div id="quizFeedback"></div>
      </div>`;
    area.querySelectorAll(".mc-opt").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const i = parseInt(btn.dataset.i);
        area.querySelectorAll(".mc-opt").forEach(b=>b.disabled=true);
        if(i===q.correct){ btn.classList.add("correct"); correct++; }
        else{ btn.classList.add("wrong"); area.querySelectorAll(".mc-opt")[q.correct].classList.add("correct"); }
        document.getElementById("quizFeedback").innerHTML = `<div class="feedback ${i===q.correct?'pass':'fail'}">${q.explain}</div>
          <button class="btn small secondary" id="quizNextBtn" style="margin-top:10px;">${idx+1<qs.length?'Next question':'See result'}</button>`;
        idx++;
        document.getElementById("quizNextBtn").onclick = render;
      });
    });
  }
  render();
}

/* ============================================================
   RENDER: Progress page
   ============================================================ */
function renderProgress(){
  const overviewRows = [
    {label:"Lessons completed", value:`${STATE.completedLessons.length}/${LESSONS.length}`, onclick:"go('learn')", title:"Go to Learn"},
    {label:"Challenges solved", value:`${STATE.completedChallenges.length}/${CHALLENGES.length}`, onclick:"go('practice')", title:"Go to Practice"},
    {label:"Debug bugs fixed", value:`${STATE.completedDebug.length}/${DEBUGS.length}`, onclick:"go('debug')", title:"Go to Debug Lab"},
    {label:"Projects completed", value:`${Object.values(STATE.projectStatus).filter(v=>v==='done').length}/${PROJECTS.length}`, onclick:"go('projects')", title:"Go to Projects"},
    {label:"Total XP", value:STATE.xp, onclick:null},
    {label:"Current streak", value:`${STATE.streak} day${STATE.streak===1?'':'s'}`, onclick:null},
  ];
  document.getElementById("progOverview").innerHTML = overviewRows.map(r=>{
    const inner = `<span class="prog-left">${r.label}</span>
      <span style="display:flex;align-items:center;"><strong>${r.value}</strong>${r.onclick ? `<span class="prog-chev">${CHEVRON}</span>` : ""}</span>`;
    return r.onclick
      ? `<button type="button" class="prog-row clickable" onclick="${r.onclick}" title="${r.title}">${inner}</button>`
      : `<div class="prog-row">${inner}</div>`;
  }).join("");

  const weak = LESSONS.map(l=>{
    const list = STATE.quizAttempts[l.id];
    if(!list || !list.length) return null;
    const best = Math.max(...list.map(a=>Math.round(100*a.score/a.total)));
    return {id:l.id, title:l.title, best};
  }).filter(x=>x && x.best < 70);
  document.getElementById("progWeak").innerHTML = weak.length
    ? weak.map(w=>`<button type="button" class="weak-row" onclick="reviewTopic(${w.id})" title="Retake quiz on ${w.title}">
        <span>${w.title}</span>
        <span style="display:flex;align-items:center;"><strong style="color:var(--coral);">${w.best}%</strong><span class="prog-chev">${CHEVRON}</span></span>
      </button>`).join("")
    : `<div class="empty-note">No weak spots yet — take a few quizzes to see this fill in.</div>`;

  document.getElementById("progActivity").innerHTML = STATE.activity.length
    ? STATE.activity.map(a=>`<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:13.5px;"><strong>${a.text}</strong><div style="color:var(--text-muted);font-size:12px;">${a.date}</div></div>`).join("")
    : `<div class="empty-note">Nothing logged yet — go complete a lesson!</div>`;
}

/* ============================================================
   RENDER: Glossary + term modal
   ============================================================ */
function renderGlossary(){
  document.getElementById("glossaryGrid").innerHTML = Object.entries(GLOSSARY).map(([t,d])=>`
    <div class="gterm"><div class="gt">${t}</div><div class="gd">${d}</div></div>`).join("");
}
function openTermModal(term){
  document.getElementById("termModalTitle").textContent = term;
  document.getElementById("termModalBody").textContent = GLOSSARY[term] || "Definition coming soon.";
  document.getElementById("termModalBack").classList.add("show");
}
function closeTermModal(){ document.getElementById("termModalBack").classList.remove("show"); }
document.addEventListener("click", (e)=>{
  if(e.target.classList.contains("term")){
    openTermModal(e.target.dataset.term);
  }
});
document.getElementById("termModalBack").addEventListener("click",(e)=>{
  if(e.target.id==="termModalBack") closeTermModal();
});

/* ============================================================
   AI TUTOR   (calls the Claude API directly from the browser)
   ============================================================ */
const TUTOR_SYSTEM = `You are a warm, patient Python tutor built into a beginner learning site called PyStart.
Rules you must follow:
1. When the learner asks for help, first ask what they've already tried (unless they've clearly already explained what they tried).
2. Try to identify the specific concept they're misunderstanding, and name it plainly.
3. Give a short, simple explanation of that concept, using a real-world analogy when useful.
4. Give ONE hint that nudges them toward the fix without writing the fix for them.
5. Invite them to try again before giving more.
6. Only give the complete corrected code if they explicitly ask for the full answer, or if they've clearly struggled across multiple exchanges. Even then, explain why it works afterward.
Keep replies short (3-6 sentences plus at most one small code snippet). Never lecture. Be encouraging, plain-spoken, and avoid jargon unless you immediately explain it. This is for a complete beginner.`;

let tutorHistory = [];
function tutorAddMsg(role, text){
  const div = document.createElement("div");
  div.className = "tmsg " + (role==="user"?"me":"bot");
  div.textContent = text;
  document.getElementById("tutorMsgs").appendChild(div);
  div.scrollIntoView({behavior:"smooth", block:"end"});
  return div;
}
async function tutorSend(){
  const input = document.getElementById("tutorInput");
  const text = input.value.trim();
  if(!text) return;
  input.value = "";
  tutorAddMsg("user", text);
  tutorHistory.push({role:"user", content:text});
  const typing = tutorAddMsg("bot", "…thinking");
  typing.classList.add("typing");
  try{
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        model:"claude-sonnet-4-6",
        max_tokens:1000,
        system: TUTOR_SYSTEM,
        messages: tutorHistory
      })
    });
    const data = await response.json();
    const reply = (data.content||[]).map(b=>b.type==="text"?b.text:"").join("\n").trim() || "Sorry, I didn't catch that — could you rephrase?";
    typing.remove();
    tutorAddMsg("bot", reply);
    tutorHistory.push({role:"assistant", content:reply});
  }catch(e){
    typing.remove();
    tutorAddMsg("bot", "I couldn't reach the tutor service just now. Please try again in a moment.");
  }
}
document.getElementById("tutorFab").addEventListener("click", ()=>{
  document.getElementById("tutorPanel").classList.add("show");
  if(tutorHistory.length===0){
    tutorAddMsg("bot", "Hi! I'm your Python tutor. Tell me what you're working on, or paste a bit of code you're stuck on — and let me know what you've already tried.");
  }
});
document.getElementById("tutorCloseBtn").addEventListener("click", ()=>document.getElementById("tutorPanel").classList.remove("show"));
document.getElementById("tutorSendBtn").addEventListener("click", tutorSend);
document.getElementById("tutorInput").addEventListener("keydown", e=>{ if(e.key==="Enter") tutorSend(); });

/* ============================================================
   BOOT
   ============================================================ */
function renderAll(){
  renderSidebar();
  renderDashboard();
  go("dashboard");
  layoutMobileNav();
  ensurePyodide(); // warm it up in the background
}
loadState();
window.addEventListener("load", layoutMobileNav);
