"use strict";

// Element mit CSS_Selektor auswählen

let selector = document.querySelector("#navigation > ul");
console.log(selector);

let selector_1 = document.querySelector(".jumbotron");
console.log(selector_1);

let selector_2 = document.querySelector(".test");
console.log(selector_2);

// Invalid selector
// let selector_3 = document.querySelector("900 >");

// Element mit CSS_Selektor auswählen

let selector_all = document.querySelectorAll("body > #navigation > ul > li > a");
console.log(selector_all);

let selector_4 = document.querySelectorAll(".a");
console.log(selector_4);
