"use strict";
let jumbo = document.querySelector(".jumbotron");
console.log(jumbo);

// console.log(jumbo.innerHTML);
// console.log(jumbo.innerText);
// console.log(jumbo.textContent);

let string_1 = "";

let string_2 = "<header><h2>ich bin vanessa Mbouyim syntia und wohne im Bamberg.</h2></header>";
let string_3 = "<p><h1>ich bin vanessa Mbouyim syntia und wohne im Bamberg.</h1></p>";
let string_4 = "ich bin vanessa Mbouyim syntia und wohne im Bamberg.";

// jumbo.innerHTML = string_1;
// jumbo.innerText = string_1;
// jumbo.textContent = string_1;

// jumbo.innerHTML =  string_2;
jumbo.innerHTML +=  string_3;
// jumbo.innerText = string_3;

jumbo.textContent = string_2;