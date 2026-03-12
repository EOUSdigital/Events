"use strict";

console.log("JavaScript loaded");

//Title 🟧 Module 8 - Events: Lesson 01. Section Intro_

//TODO 🛠 Guided Practice

//# 🧮 Task 1

//! Solution
/*
const button = document.getElementById("changeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function() {

    message.textContent = "You clicked the button!";
});

//! Feedback

//  You are very close, and this is a great first attempt. Let’s walk through it calmly and identify what went wrong.

//? 1️⃣ The Problem in Your Code

//  You wrote:

document.getElementById('changeBtn').addEventListener.textContent("click", "You clicked the button!");

//  There are three issues here.


//! Issue 1 — addEventListener is a function

//  You used:
addEventListener.textContent

//  But addEventListener must be called like a function:
addEventListener()


//! Issue 2 — We must pass a function
//  An event listener needs a function to run when the event happens.

//  • Think of it like this:
//  When the button is clicked
//      ↓
//  Run this function

//  • So the structure should look like:

Element.addEventListener("event", function() {
    //  code to run
});


//! Issue 3 — We must change the paragraph separately
//  Inside the function we update the paragraph text.

//? 2️⃣ Step-by-Step Correct Approach

//* Step 1 — Select the button

// const button = document.getElementById('changeBtn');

//  This line finds the button in the page.

//* Step 2 — Select the paragraph

// const message = document.getElementById('message');

//  We store the paragraph so we can change it.

//* Step 3 — Add the event listener

button.addEventListener('click', function() {
    message.textContent = "You clicked the button!";
});

//? 3️⃣ Final Working Example

//  Select elements
// const button = document.getElementById('changeBtn');
// const message = document.getElementById('message');

//  Add event listener
button.addEventListener('click', function() {
    message.textContent = "You clicked the button!";
});

//? 4️⃣ Think Like a Developer

//  Break the logic into steps:
//  1️⃣ Find the button
//  2️⃣ Wait for a click
//  3️⃣ When clicked
//  4️⃣ Change the paragraph text

//! That is exactly how events work everywhere in JavaScript apps.

//? 5️⃣ Small Improvement (Best Practice)

//  Instead of writing everything inside addEventListener, we often create a separate function.

function handleClick() {
    message.textContent = "You clicked the button!";
};

button.addEventListener("click", handleClick());

//  This keeps code cleaner as projects grow.
*/

//# Task 2

const text = document.querySelector('#changeText');
const newMessage = document.querySelector('#newMessage');
const reset = document.querySelector('#resetText');

text.addEventListener('click', function() {
    newMessage.textContent = '. . . World!'
})



//  I want to discuss about "--gray-50 → --gray-975" that is similar to Tailwind or design system palettes. 
//  Do you know a better modern pattern for "6. Navigation Layout - logo | nav links | sign in" I can use?