"use strict";
let person = [
    "Rose",
    "Vanessa",
    "Nziali",
    "Mbouyim",
    "Vanessa"
];

// includes(): durchsucht das Array ab einem Startindex nach einem Wert und gibt true zurück, wenn das
//Element gefunden wurde, bzw flase , wenn es nicht gefunden wurde
// Syntax: includes(Suchtwert, Startindex) ici le starindex c'est l'index par partie duquel on commence 
// a chercher. il est optional
//include ist nicht destruktiv dh unsere Arrays wird nicht verändern.

console.log(person.includes("Dora"));
console.log(person.includes("Vanessa", 2));

// indexOf(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt den Index der ersten Fundstelle 
// zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
// Syntax: indexOf(Suchwert[, Startindex])
// nicht destruktiv

console.log(person.indexOf("Vanessa"));
console.log(person.indexOf("Vanessa",1));
console.log(person.indexOf("Vanessa",0));

// lastIndexOf(): Durchsucht das Array ab einem Startindex rückwärts nach einem Wert und gibt den Index der ersten Fundstelle 
// zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
// Syntax: lastIndexOf(Suchwert[, Startindex])
// nicht destruktiv

console.log(person.lastIndexOf("Vanessa"));
console.log(person.lastIndexOf("Vanessa",3));
console.log(person.lastIndexOf("Vanessa",0));


