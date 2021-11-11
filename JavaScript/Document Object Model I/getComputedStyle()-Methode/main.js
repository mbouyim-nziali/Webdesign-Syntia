"use strict";

let jumbo = document.querySelector(".jumbotron");

let jumbo_style = getComputedStyle(jumbo);

console.log(jumbo_style);

console.log(jumbo_style.color);
console.log(jumbo_style.backgroundColor);
console.log(jumbo_style.blockSize);