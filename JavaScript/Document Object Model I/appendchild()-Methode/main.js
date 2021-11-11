"use strict";
let div = document.createElement("div");

div.setAttribute("id", "mein_id");
div.setAttribute("class", "meine_classe");

let text = document.createTextNode("Loren Ipsum dolor sit amet.");

// appendchlid() : fugt ein Element als letztes kindelement in ein Elterelement ein.
// Syntax: elternelement.appendchild(kindelement);
// existiert das kindelement im Elternelement bereits, wird es entfernt und stattdessen als 
// letztes kindelement wieder angefügt


div.appendChild(text);

let  jumbo = document.querySelector(".jumbotron > section");
jumbo.appendChild(div);
console.log(jumbo);

console.log(text);
console.log(div);

let ul = document.querySelector("body > #navigation > ul");


let li = document.querySelector("body > #navigation > ul > li");

ul.appendChild(li);
console.log(ul);





