"use strict";
// Eigenschaften des window-Objekts
console.log(window);
console.log(innerWidth);
console.log(innerHeight);
console.log(outerWidth);
console.log(outerHeight);
console.log(scrollX);
console.log(scrollY);

// noch später in Kurs
console.log(location);
console.log(localStorage);
console.log(sessionStorage);

// Methoden des window-objekts

// alert("ACHTUNG!!");
// console.log(confirm("Bist du dir sicher?"));
// prompt("Wie geht es dir");
// print();
// let antwort = prompt("Wie geht es dir");
// console.log(antwort);

// open("https://www.google.de");
// close();

let nav = document.querySelector("#navigation");
let nav_style = getComputedStyle(nav);
console.log(nav_style);
