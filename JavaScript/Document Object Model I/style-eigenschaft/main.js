"use strict";

let jumbo = document.querySelector(".jumbotron");
// Das cssStyleDeclaration-objekt ausgeben
console.log(jumbo.style);
// inkine-Styles auslesen
console.log(jumbo.style.backgroundColor);
//inline-style verändern
jumbo.style.backgroundColor = "#ffeeaa";
jumbo.style.width = "300px";
jumbo.style.heigth = "100px";
