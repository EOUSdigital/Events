# 🟧 Module 8 - Events: Lesson 01. Section Intro_

## 📘 Overview

This lesson introduces **JavaScript Events** and how to use **event
listeners** to make web pages interactive.

------------------------------------------------------------------------

## 🎯 Learning Objectives

By the end of this lesson, you should be able to:

-   Understand what an **event** is
-   Use `addEventListener`
-   Pass a **function reference**
-   Avoid calling functions immediately (`()` mistake)
-   Update the DOM based on user interaction

------------------------------------------------------------------------

## 🧠 Key Concept

An event listener follows this pattern:

``` javascript
element.addEventListener("event", function() {
  // code to run
});
```

👉 Meaning:

> "When this happens → run this code"

------------------------------------------------------------------------

## ⚠️ Common Mistake

❌ Incorrect:

``` javascript
button.addEventListener("click", handleClick());
```

✔ Correct:

``` javascript
button.addEventListener("click", handleClick);
```

------------------------------------------------------------------------

# 🧠 Concept Explanation

## `An event is something that happens in the browser.`

Examples:
- A user clicks a button
- A key is pressed
- The mouse moves
- A form is submitted
- A page finishes loading
- An event listener is JavaScript code that waits for something to happen and then runs a function.

### Think of it like this:
- “When this happens → do this.”

------------------------------------------------------------------------

## Basic Syntax

``` javascript
element.addEventListener("eventType", function() {
    //  code to run
});
```
### Let's break this down.

``` javascript
const button = document.querySelector("button");
```

### This selects the button from the page.

``` javascript
button.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

### Line by line:
- addEventListener → tells JavaScript to watch for something
- "click" → the type of event
- function() {} → what should happen when the event occurs

### So we are saying:
- “When the button is clicked, log a message.”

## 🧱 Why This Matters

Without events:
- Pages are static
- Nothing responds to the user

With events:
- Buttons work
- Forms submit
- Menus open
- Games run
- Apps feel alive

Events are the foundation of:
- Counters
- To-do lists
- Forms
- Games
- Almost every web app

## ⚠️ Common Beginner Mistakes
1. Forgetting to select the element first
2. Misspelling the event name ("Click" instead of "click")
3. Writing:

``` javascript
button.addEventListener("click", myFunction());
```

That calls the function immediately.

## We must pass the function reference:
``` javascript
button.addEventListener("click", myFunction);
```

------------------------------------------------------------------------

## 🛠 Mini Project

### Task 1

Click a button → change text.

### Task 2

Two buttons: - Change Text - Reset Text

------------------------------------------------------------------------

## 💻 Example Solution

``` javascript
"use strict";

const message = document.getElementById('newMessage');
const changeBtn = document.getElementById('changeText');
const resetBtn = document.getElementById('resetText');

const originalText = message.textContent;

changeBtn.addEventListener('click', changeText);
resetBtn.addEventListener('click', resetText);

function changeText() {
  message.textContent = 'World!';
}

function resetText() {
  message.textContent = originalText;
}
```

------------------------------------------------------------------------

## 🧠 Key Takeaways

-   `handleClick` → pass function\
-   `handleClick()` → run function immediately\
-   Event listeners require a **function reference**\
-   Store original state early for resets

------------------------------------------------------------------------

## 💬 Reflection

Why must we pass a function reference instead of calling it immediately?
- Answer: We need to pass the function reference to `onClick` prop so that it can be called later, once the click actually happens.
------------------------------------------------------------------------

## ✅ Status

✔ Lesson Completed\
✔ Concepts Understood\
✔ Ready for Next Lesson
