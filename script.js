"use strict";

// 🟧 Module 8 - Events: Lesson 01. Section Intro_

//# 🛠 Guided Practice

// 1. Task

//! Solution

const button = document.getElementById("changeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function() {

    message.textContent = "You clicked the button!";
});

//! Small Improvement

//  Instead of writing everything inside addEventListener, we often create a separate function.

function handleClick() {
    message.textContent = "You clicked the button!";
};

button.addEventListener("click", handleClick());