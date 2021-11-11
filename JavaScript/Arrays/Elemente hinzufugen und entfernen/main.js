"use strict";
let person = [
    "vanessa",
    "Dora",
    "Nadege",
    "ayden"
];

person[1] = "Sonia";

console.log(person);
console.log(person[1]);

// push(): fügt ein Element am Ende des Arrays hinzu (und gibt die neue Größe des Arrays zurück)

person.push("Idriss");

console.log(person.push("Maman"))

console.log(person);

// Elemente in einem Arrays löschen: pop() remove der last Element von einem arrays und gibt es zurück

// person.pop();
console.log(person);
console.log(person.pop());

// unshift(): fügt einem Element am Anfang des Arrays hinzu (und gibt die neue Größe des arrays zurück)

person.unshift("Papa");
console.log(person);
// console.log(person.unshift());

// shift(): Entfernt das erste Element aus dem Array (und gibt es zurück)

console.log(person);
console.log(person.shift());

