"use strict";
let li = document.createElement("li");
li.setAttribute("id", "mein-liselement");
let a = document.createElement("a");
a.setAttribute("href" , "#");
a.setAttribute("id", "meine-ankerelement");
let text = document.createTextNode("PHP");
a.appendChild(text);
li.appendChild(a);

let liste = document.querySelector("#navigation > ul ");
// liste.appendChild(li);

// liste.insertAdjacentElement("beforebegin", li);
// liste.insertAdjacentElement("afterbegin", li);
// liste.insertAdjacentElement("beforeend", li);
// liste.insertAdjacentElement("afterend", li);
// console.log(liste);

let dom_string = "<li id = \"mein_listelement\"><a id=\"mein_ankerelement\" href= \"#\">Angular</a></li>";

// liste.insertAdjacentHTML("beforebegin", dom_string);
// liste.insertAdjacentHTML("afterbegin", dom_string);
// liste.insertAdjacentHTML("beforeend", dom_string);
// liste.insertAdjacentHTML("afterend", dom_string);
let new_text = "ich bin vanessa und wohne im Bamberg."
// liste.insertAdjacentText("afterbegin", new_text);

// liste.insertAdjacentText("beforebegin", new_text);
// liste.insertAdjacentText("afterend", new_text);
liste.insertAdjacentText("beforeend", new_text);

