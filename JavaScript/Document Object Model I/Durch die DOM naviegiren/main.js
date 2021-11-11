"use strict";

let ul = document.querySelector("#navigation > ul");
// console.log(nav);

// Kindelemente

let child_nodes = ul.childNodes; // alle kindeelemente inkl. Text- und Kommentarknoten
let children = ul.children; // gibt alle kindelement exkl Text- und Kommentarknoten
let childnode = ul.firstChild; // gibt das erste kindelement inkl. Text- und Kommentarknoten zurück
let childnode_1 = ul.lastChild; // gibt das letztes kindelement inkl. Text- und Kommentarknoten zurück

let first_element_child = ul.firstElementChild;// gibt das erste kindelement exkl. Text- und Kommentarknoten zurück
let last_element_child = ul.lastElementChild; // gibt das letztes kindelement exkl. Text- und Kommentarknoten zurück


console.log(child_nodes);
console.log(children);
console.log(childnode);
console.log(childnode_1);

console.log(first_element_child);
console.log(last_element_child);

// Geschwisterelemente

let next_sibling = ul.nextSibling; // nächstes Geschwisterelement inkl. Text und Kommentarknoten
let previous_sibling = ul.previousSibling; // vorangehende Geschwisterelement inkl. Text und Kommentarknoten
let next_element_sibling = ul.firstElementChild.nextElementSibling; // nächstes Geschwisterelement exkl. Text und Kommentarknoten
let previous_element_sibling = ul.lastElementChild.previousElementSibling; // vorangehende Geschwisterelement exkl. Text und Kommentarknoten

console.log(previous_sibling);
console.log(next_sibling);
console.log(next_element_sibling);
console.log(previous_element_sibling);

// Elternelement 

let parent_element = ul.parentElement; // Elernelement eines Elements

console.log(parent_element);

// allgemeines navigieren 

let anker = ul.querySelectorAll("li > a");

console.log(anker);


