"use strict";

let jumbotron = document.querySelector(".jumbotron");

console.log(jumbotron.className);

jumbotron.className = "new-class";
jumbotron.className += " lorem";
jumbotron.className = jumbotron.className.replace("new", "meine");
jumbotron.className = jumbotron.className.replace(" lorem", "");

let nav = document.querySelector("#navigation > ul > li > a");
// console.log(nav);

nav.className = "";

let new_nav = document.querySelector("#navigation > ul > li:nth-of-type(3) > a");
// console.log(new_nav);

new_nav.className = "active";




