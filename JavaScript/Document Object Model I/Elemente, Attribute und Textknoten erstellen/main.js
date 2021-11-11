"use strict";
//bElement erstellen
let div = document.createElement("div");
// console.log(div);
// attribute erstellen
let attr = document.createAttribute("id");
attr.value = "meine_id";
// console.log(attr);

div.setAttributeNode(attr);
// Attribute erstellen und hinzufügen
div.setAttribute("class", "mein_class");

let text = document.createTextNode("Loren Ipsum dolor sit amet.");
console.log(text);
console.log(div);

