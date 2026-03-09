"use strict";

//Title 🟧 Module 8 - Events: Lesson 01. Section Intro_

//TODO  Recommended folder structure (Lesson 01)

//  Module-08-Events/
//      Lesson-01-Event-Listeners/
//          index.html
//          css/
//              style.css
//          js/
//              script.js

//  This scales well as lessons grow. It also prevents a flat folder from becoming messy later.

//# What each file should contain

//? 1) index.html
//  Keep it minimal and predictable:
//  • A basic page shell
//  • The elements you will interact with (button, paragraph, input, etc.)
//  • Links to CSS and JS
//  Important: load JS at the end of the body (or use defer).

//  Use either of these approaches:

//* Option A (recommended): defer

<script src="js/script.js" defer></script>

//* Option B: script at the bottom

<script src="js/script.js"></script>

//? 2) css/style.css
//  Keep it simple and readable:
//  • Basic layout spacing
//  • Font and background
//  • A small “demo container” so the lesson looks clean
//  Avoid over-styling. The lesson goal is events, not design.

//? 3) js/script.js
//  Structure it so it is consistent across lessons:
//  • “Selectors” at the top
//  • Event listeners next
//  • Functions at the bottom

//! Example pattern:

//  1) Selectors
const changeBtn = document.querySelector('#changeBtn');
const message = document.querySelector('#message');

//  2) Event Listeners
changeBtn.addEventListener('click', handleClick);

//  3) Handlers / functions
function handleClick() {
    message.textContent = 'You clicked the button!';
};

//  This keeps your code easy to scan and maintain.

//# Suggested “lesson template” you can copy every time

//  For each lesson folder, add:
//  • index.html
//  • /css/style.css
//  • /js/script.js

//  And in script.js, use the same headings:
//  • Selectors
//  • Event listeners
//  • Handlers / helper functions
//  Consistency will speed you up significantly by Module 09–12.

//  Practical next step
//  Create the structure above and paste your index.html and script.js here (even if incomplete). I will review it and suggest small improvements without rewriting everything for you.


//TODO  The goal of this lesson is simple:

//  Create a button and a message area so JavaScript can react when the button is clicked.

//  So we will build two files:
//  Lesson-01-Event-Listeners/
//      index.html
//      style.css

//? 1️⃣ index.html
//  This page only needs three things:
//  1. A title
//  2. A button
//  3. A paragraph that JavaScript will change

//  Why we added IDs
//  We will need JavaScript to find these elements.

id="changeBtn"

//  JavaScript will listen for the click.

id="message"

//  JavaScript will change this text.

//? 2️⃣ style.css
//  We keep the styling very light so the lesson stays focused.

//? 3️⃣ What this page gives us
//  Our HTML now contains elements JavaScript can interact with:

//  User clicks button
        ↓
//  JavaScript listens for event
        ↓
//  JavaScript changes paragraph text

//! This is the core pattern for almost every web application.

//? 4️⃣ Your next step
//  Now create script.js.
//  Your task:
//  1. Select the button
//  2. Select the paragraph
//  3. Add a click event listener
//  4. Change the paragraph text when clicked

//* Hint:
//  You will likely use:

//  document.querySelector()
//  addEventListener()
//  textContent

//# 💡 Reflection question
//  Before writing the code:
//  Why do you think we give elements an id when working with JavaScript events?
//  Answer: 
//  • The HTML id attribute is used to specify a unique id for an HTML element.
//  • The id attribute specifies a unique id for an HTML element.
//  • The value of the id attribute must be unique within the HTML document.
//  • The id attribute is used to point to a specific style declaration in a style sheet.
//  • It is also used by JavaScript to access and manipulate the element with the specific id.
//  • The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.


































