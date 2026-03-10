"use strict";

//Title 🟧 Module 8 - Events: Lesson 01. Section Intro_

//# 🧠 Concept Explanation

//  An event is something that happens in the browser.
//? Examples:
//  • A user clicks a button
//  • A key is pressed
//  • The mouse moves
//  • A form is submitted
//  • A page finishes loading
//  An event listener is JavaScript code that waits for something to happen and then runs a function.

//? Think of it like this:
//  “When this happens → do this.”

//# Basic Syntax

Element.addEventListener("eventType", function() {
    //  code to run
});

//  Let's break this down.

const button = document.querySelector("button");

//  This selects the button from the page.

button.addEventListener("click", function() {
    console.log("Button clicked!");
});

//? Line by line:
//  • addEventListener → tells JavaScript to watch for something
//  • "click" → the type of event
//  • function() {} → what should happen when the event occurs

//? So we are saying:
//  “When the button is clicked, log a message.”

//# 🧱 Why This Matters

//  Without events:
//  • Pages are static
//  • Nothing responds to the user

//  With events:
//  • Buttons work
//  • Forms submit
//  • Menus open
//  • Games run
//  • Apps feel alive

//  Events are the foundation of:
//  • Counters
//  • To-do lists
//  • Forms
//  • Games
//  • Almost every web app

//! ⚠️ Common Beginner Mistakes

//  1. Forgetting to select the element first
//  2. Misspelling the event name ("Click" instead of "click")
//  3. Writing:

button.addEventListener("click", myFunction());

//  That calls the function immediately.
//? We must pass the function reference:

button.addEventListener("click", myFunction);


//# 🛠 Guided Practice

//  Let’s build something tiny.

//? Task:
//  Create a button that changes text when clicked.
//  HTML

```
<button id="changeBtn">Click me</button>
<p id="message">Hello</p>
```

//? Your Goal
//  When the button is clicked:
//  • The paragraph text should change to:
//  "You clicked the button!"

//? Think Like a Developer
//  1. How do we select the button?
//  Answer: We select the button with document.getElementById('button').

//  2. How do we select the paragraph?
//  Answer: We select the paragraph with document.getElementById('p').

//  3. Which event do we listen for?
//  Answer: We do listen for a basic button or element interaction in the browser, we almost always listen for the "click" event.

//  4. How do we change text in the DOM?
//  Answer: We can change text in the DOM by selecting  an element, then setting its textContent, usually inside an event listener.

//!❗ Hint (if needed)
//  • Use document.getElementById
//  • Use "click"
//  • Use .textContent
//  You’re done when clicking the button reliably updates the text.

//# 💬 Reflection
//  Why do we pass a function into addEventListener instead of running it immediately?
//  Think about that carefully — it’s a core concept.
//  Answer: For scalable and maintainable applications, addEventListener is strongly recommended because it avoids overwriting issues.

//  Events are where JavaScript starts to feel powerful.
//  You’ve just moved from static pages to interactive behavior.

//! Feedback

//  We pass a function into addEventListener so the browser can call it later when the event happens. If we run the function immediately with parentheses, it executes straight away instead of waiting for the click.

//  Example

function sayHello() {
    console.log('Hello');
}

button.addEventListener('click', sayHello);


//! 💡 Reflection Question
//  Why do you think we pass the function name like this:

button.addEventListener("click". handleClick);

//  instead of writing:

handleClick();

//? What would happen if we used ()?
//  Answer: If we use handleClick() the browser has nothing to call when the click happens.

//! Feedback

//  Your answer shows you are thinking in the right direction, but it needs a small correction to be fully accurate.
//  You wrote: If we use handleClick() the browser has nothing to call when the click happens.
//  That is "partly true", but it misses one important detail.

//? What actually happens
//  When we write:

button.addEventListener('click', handleClick());

//  two things happen:
//  1. handleClick() runs immediately
//  2. The return value of that function is passed into addEventListener
//  So the browser is not receiving the function itself, it is receiving whatever the function returned.

//  Example:

function handleClick() {
    console.log("Hello");
};

//  If we write:

button.addEventListener('click', handleClick());

//  This is what happens step-by-step:
//  1️⃣ JavaScript runs handleClick() right away
//  2️⃣ "Hello" prints immediately
//  3️⃣ The function returns undefined
//  4️⃣ addEventListener receives undefined instead of a function

//  When the click happens later:
//  • the browser has no function to execute.

//* Correct version

button.addEventListener('click', handleClick);

//  Here we are giving the browser the "function reference", so it can call it later.

//! Improved answer

//  A stronger version of your reflection would be:
//  • If we use handleClick(), the function runs immediately when JavaScript reaches that line. The event listener then receives the return value instead of the function itself, so there is no function left to run when the click event occurs.

//* Developer thinking pattern

//  This is a very common mental model:
//  • functionName     → give the function
//  • functionName()   → run the function
//  Events always need "the function itself", not the result of running it.


//# One quick check for understanding

//  What do you think will happen in this example?

function greet() {
    console.log("Welcome");
}

button.addEventListener('click', greet());

//  Will "Welcome" appear:
//  A) Only when the button is clicked
//  B) Immediately when the script runs
//  C) Both

//  Answer: B

//! Feedback

//  Correct — B is the right answer. Good reasoning.
//  Let’s walk through it carefully so the concept becomes solid.

//TODO The Code

function greet() {
    console.log("Welcome");
};

button.addEventListener('click', greet());

//? Step-by-Step What JavaScript Does

//  1️⃣ JavaScript reads the line
//  greet()

//  The parentheses mean:
//  • Run the function immediately.
//  So this executes right away.

//  2️⃣ The function runs
//  console.log("Welcome");

//  The console prints:
//  • Welcome
//  This happens as soon as the script loads, not when the button is clicked.

//  3️⃣ The function finishes
//  Since greet() does not return anything, the return value is:
//  • undefined

//  4️⃣ addEventListener receives undefined
//  So JavaScript effectively sees this:

button.addEventListener('click', undefined);

//  Now the browser has no function to call when the click happens.

//? Correct Version

button.addEventListener('click', greet);

//  Here we are passing the function itself, not executing it.
//  So the browser stores it and runs it later when the click occurs.

//# The Mental Rule Developers Use

//  • functionName     → pass the function
//  • functionName()   → run the function immediately

//  Event listeners always need the function itself, not the result.

//? Small Developer Insight
//  This concept appears everywhere in JavaScript, not just events.
//  You will see it again with:
//  • setTimeout
//  • setInterval
//  • Promises
//  • callbacks
//  • async functions
//  Understanding this now will make many later topics easier.

//? Quick Reflection
//  Looking at this code:

button.addEventListener('click', function() {
    console.log('Clicked!');
});

//  Why does this version work "even though we are using parentheses" after function?
//  Think about "what is actually being passed to" addEventListener here.
//  Answer: The functionName() will run the function itself, not the result of running it.

//! Feedback

//TODO Good attempt. You are thinking about the difference between running a function and passing a function, which is exactly the right concept. However, your answer needs a small correction.

//  Your answer said: The functionName() will run the function itself, not the result of running it.

//  Actually, functionName() does run the function and returns its result, which is the opposite of what we want in an event listener.
//  Let’s look carefully at the example again.

//# The Code

button.addEventListener('click', function () {
    console.log('Clicked!');
});

//  You noticed something important:
//  • There are parentheses after function.
//  But those parentheses "do not execute the function".

//? What is really happening
//  This code is creating a "function expression" (an anonymous function).

function() {
    console.log('Clicked!');
};

//  This creates a function object.
//  Then that function object is passed into addEventListener.
//  So the browser receives:
//  • “Here is the function to run later when the click happens.”

//? Why it works
//  Because we are "passing the function itself", not executing it.

button.addEventListener('click', function() {
    console.log('Clicked!');
});

//  means:
//  When the button is clicked
//      ↓
//  Run this function

//  The function is "stored by the browser" and executed later.

//# Compare the two situations

//? Correct (function passed)

button.addEventListener('click', handleClick);

//  or

button.addEventListener('click', function () {
    console.log('Clicked!');
});

//  Both pass a "function reference".

//? Incorrect (function executed immediately)

button.addEventListener('click', handleClick());

//  This "runs the function immediately", then passes its result.

//? Improved answer
//  A stronger version of your answer would be:
//  • This works because the anonymous function is being passed to addEventListener. The parentheses belong to the function definition, not a function call, so the function is not executed immediately. The browser stores the function and runs it when the click event occurs.

//? How developers mentally see this
//  functionName      → give the function
//  functionName()    → run the function

//  function () {}    → create a new function


//! Exercise

//?  One final thinking question

//  Which of these will NOT work?
//  A)  button.addEventListener('click', handleClick);
//  B)  button.addEventListener('click', handleClick());
//  C)  button.addEventListener('click', () => handleClick());

//  Take a moment and reason through "what each line is actually passing into" 'addEventListener'.

//  Answer: The correct answer is "B" because it runs the function immediately, then passes its result.

//! Feedback

//  Correct — B is the one that will NOT work as intended. Good reasoning.
//  Let’s briefly confirm why each option behaves the way it does.

//* A) Works ✅

button.addEventListener('click', handleClick);

//  What is passed to 'addEventListener'?
//  • handleClick
//  That is a function reference.

//  Meaning:
//  Browser stores the function
//      ↓
//  When click happens
//      ↓
//  Browser runs handleClick()

//  So this is correct.

//* B) Incorrect ❌

button.addEventListener('click', handleClick());

//  Here JavaScript does this:
//  1. Runs handleClick() immediately
//  2. Uses the return value of that function
//  3. Passes that value to addEventListener

//  If the function returns nothing, the browser receives:
//  • undefined

//  So effectively it becomes:
button.addEventListener('click', undefined);

//! There is no function left to run when the click happens.

//* C) Works ✅

button.addEventListener('click', () => handleClick());

//  Here we are passing an arrow function.

//  The browser stores this function:
//  • () => handleClick()

//  Then when the click occurs:
//  click happens
//      ↓
//  arrow function runs
//      ↓
//  handleClick() executes

//  So this works perfectly.

//# Developer Mental Model

//  handleClick        → pass the function
//  handleClick()      → run the function now
//  () => handleClick() → create a function that will run it later

//? This distinction becomes extremely important later when we use:
//  • setTimeout
//  • setInterval
//  • Promises
//  • async / await
//  • callbacks
//  Understanding it now is "excellent groundwork".

//# Small reflection (developer thinking)

//  Between these two, which one is usually cleaner for simple code?
button.addEventListener('click', handleClick);

//  or
button.addEventListener('click', () => handleClick());

//  Think about "readability and unnecessary layers of functions".

//  Answer: The handleClick is cleaner for a simple code that improves readability. The () => handleClick() is recommended for complex code where layers of functions are necessary.

//! Feedback

//TODO  Your answer is mostly correct, especially the part about readability. Let’s refine it slightly so the concept becomes precise.

//? What you said (good part)

//  You wrote:
//  • handleClick is cleaner for simple code because it improves readability.
//  This is exactly right. When we already have a function, passing it directly is usually the cleanest approach.

//  Example:
button.addEventListener('click', handleClick);
//  This is easy to read and avoids unnecessary code.

//? Where we refine the idea

//  You said:
//  • () => handleClick() is recommended for complex code where layers of functions are necessary.
//  It is not really about complex code. The arrow function is used when we need to add something extra before calling the function.

//? For example:

//* Case 1 — Passing arguments

button.addEventListener('click', () => handleClick('Welcome'));

//  Here we cannot write:
button.addEventListener('click', handleClick('Welcome'));
//  because that would run immediately.

//  The arrow function "delays the execution".

//* Case 2 — Running multiple things

button.addEventListener('click', () => {
    console.log('Button pressed');
    handleClick();
});

//  Now the arrow function acts as a "wrapper" that runs several actions.

//# Clean developer rule

//  Developers usually think like this:

//  </> Plain text
//  • If I already have a function → pass it directly.
//  • If I need extra logic → use an arrow function.

//? Examples:

//  ☑️ Clean:
button.addEventListener('click', handleClick);

//  ☑️ When extra logic is needed:
button.addEventListener('click', () => handleClick('Hello'));

//? Why this matters in real apps
//  In larger applications you will often see patterns like:
//  • passing arguments
//  • logging analytics events
//  • preventing default form behavior
//  • triggering multiple functions
//  All of those require a "wrapper function".

//? Reflection

//  Consider this code:
button.addEventListener('click', () => handleClick());

//  Do you think the parentheses are "necessary" here?
//  Answer: Yes, the parentheses are useful because extra logic is necessary, and in larger applications we will see a wrapper function.

//  Or could we simplify it?
//  Answer: We can simplify a function only if we already have a function, passing it directly.

//! Feedback

//TODO  You’re thinking along the correct lines, but there is "one small adjustment" needed.

//  Your answer said:
//  • Yes, the parentheses are useful because extra logic is necessary.
//  In this specific example, "there is no extra logic", so the parentheses are "not necessary".
//  Let’s look carefully.

//? The Code

button.addEventListener('click', () => handleClick());

//  What does the arrow function do?

//  </> Plain text
// Click happens
//      ↓
//  Arrow function runs
//      ↓
//  handleClick() runs

//  But the arrow function is "only calling the function" and doing nothing else.

//? We can simplify it

//  Instead of wrapping it inside another function, we can pass the function directly:

button.addEventListener('click', handleClick);

//  This does the exact same thing but is "cleaner and easier to read".

//? When the arrow function is necessary

//  We use the wrapper when we need "extra behavior".

// Example 1 — Passing arguments

button.addEventListener('click', () => handleClick('Hello'));

// Example 2 — Running multiple actions

button.addEventListener('click', () => {
    console.log('Button clicked');
    handleClick();
});

//  In these cases the wrapper is useful.

//# The developer rule

//  A simple mental rule developers use:
//  • If you already have the function → pass it directly.
//  • If you need extra logic → wrap it in a function.

//? Examples:

//  1. Clean:

button.addEventListener('click', handleClick);

//  2. Wrapper needed:

button.addEventListener('click', () => handleClick('Hello'));

//? Improved answer

//  A more precise version of your answer would be:
//  • The parentheses are not necessary in this case because the arrow function only calls handleClick. We can simplify the code by passing the function directly. A wrapper function is only needed when we want to add extra logic or pass arguments.

//# Final developer-thinking check

//  Which of these is the cleanest version?

//  A)  button.addEventListener('click', () => handleClick());
//  B)  button.addEventListener('click', handleClick);

//  Think about simplicity and readability, which are very important in professional code.

//  Answer: The cleanest version is B because we can simplify the code by passing the function directly, that will improve readability.

//! Feedback

//TODO  Correct — B is the cleanest solution. Excellent reasoning.

button.addEventListener('click', handleClick);

//  This is preferred because it is:
//  • Simpler – no unnecessary wrapper function
//  • More readable – developers instantly understand what is happening
//  • More maintainable – fewer layers of code
//  In professional codebases, developers try to avoid unnecessary functions whenever possible.

//? Why A is unnecessary

button.addEventListener('click', () => handleClick());

//  This creates an extra function layer that simply calls another function.

//  The browser does this:
//  click happens
//      ↓
//  arrow function runs
//      ↓
//  handleClick() runs
//  But since the arrow function does nothing extra, it adds complexity without benefit.

//? Clean developer rule (worth remembering)

//  </> Plan text
//  • If you already have the function → pass it directly
//  • If you need extra logic → wrap it in a function

//? Examples:

//  ☑️ Clean

button.addEventListener('click', handleClick);

//  ☑️ Wrapper needed

button.addEventListener('click', () => handleClick('Hello'));

//  ☑️ Wrapper needed (multiple actions)

button.addEventListener('click', () => {
    console.log('Clicked');
    handleClick();
});

//? What you just learned (very important)

//  You now understand the difference between:
//  • events
//  • callbacks
//  • setTimeout
//  • setInterval
//  • promises
//  • async functions
//  This lesson is a foundation concept.

//? Small checkpoint

//  If you saw this code:

setTimeout(handleClick, 2000);

//* What will happen?
//  A) handleClick runs immediately
//  B) handleClick runs after 2 seconds
//  C) Nothing happens
//  Think about the same rule we just used with "addEventListener".

//  Answer: The correct answer is "B) handleClick runs after 2 seconds" because the code has scheduled the function handleClick to run once after 2000 milliseconds (2 seconds).

//! Feedback

//TODO  Your answer about setTimeout is correct.

setTimeout(handleClick, 2000);

//  Because we passed the function reference, the browser schedules it and runs it after 2000 ms (2 seconds). Good understanding.

//  📝 Lesson 01 only needs to establish three core ideas. If these are clear, we can safely move forward.

//*   The three essential concepts of Lesson 01

//? 1️⃣ What an event is

//  Something that happens in the browser:
//  • click
//  • mousemove
//  • keydown
//  • submit
//  • load
//  These are user or browser actions.

//? 2️⃣ What an event listener does

//  It tells JavaScript:
//  When this event happens
//      ↓
//  Run this function

//* Example:

button.addEventListener('click', handleClick);

//? 3️⃣ Passing a function reference

//  Understanding the difference between:
//  • handleClick      → pass the function
//  • handleClick()    → run the function
//  This is the most important takeaway from Lesson 01.
//  You demonstrated you understand this through the exercises.

//* What Lesson 01 does NOT try to teach

//  It intentionally avoids deeper topics like:
//  • the event object
//  • different mouse events
//  • keyboard events
//  • event bubbling
//  • event delegation
//  Those are coming next in the module roadmap. 

//# Quick readiness checklist

//  Before moving to Lesson 02, a learner should be able to mentally explain this:
//  1. Select an element
//  2. Add an event listener
//  3. Run a function when the event occurs

const button = document.querySelector('#changeBtn');

button.addEventListener('click', handleClick);

function handleClick() {
    console.log('Button clicked');
}

//  If that logic makes sense, you are ready for the next lesson.

//# ✅ My mentor assessment

//  You clearly understood:
//  • function references
//  • event listeners
//  • callback behaviour
//  That is exactly the goal of Lesson 01.

//? One small suggestion before moving on

//  If you want to reinforce this lesson quickly, try one 2-minute mini exercise:

//  Add another button that:
//  Button 1 → changes text
//  Button 2 → resets text
//  Two event listeners on the same page will make the concept stick permanently.
