"use strict";

let jumbo = document.querySelector(".jumbotron");
let class_list = jumbo.classList;
console.log(jumbo.classList);
// klasse hinzufügen
jumbo.classList.add("meine_klasse");
//klasse entfernen
jumbo.classList.remove("jumbotron");
//klasse ersetzen
jumbo.classList.replace("meine_klasse", "deine_klasse");
// Vorhandensein von klasse abfragen
console.log(jumbo.classList.contains("deine_klasse"));
console.log(jumbo.classList.contains("jumbotron"));

// toggle : basculer vers 
//Klassen toggeln(An-Au-Schalter)
jumbo.classList.toggle("auch-eine-klasse");
jumbo.classList.toggle("auch-eine-klasse");

