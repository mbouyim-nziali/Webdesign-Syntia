"use strict";
let d = new Date();
console.log(d);

// tolocaleString umwandeln das standard Date in einer andere Date lesbare Sprache
// syntax d.tolocaleString([schema,[, Optionen]])

let de_De = d.toLocaleString("de-DE");
let en_US = d.toLocaleString("en-US");
let fr_CA = d.toLocaleString("fr-CA");
let fr_FR = d.toLocaleString("fr-FR");
let es_ES = d.toLocaleString("es-ES");

console.log(de_De);
console.log(en_US);
console.log(fr_CA);
console.log(fr_FR);
console.log(es_ES);

let optionen = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
};

let de_De_2 = d.toLocaleString("fr-FR", optionen);
console.log(de_De_2);

// die tolocaleDateString gibt uns nur das Datum ohne Urhzeit.

let datum = d.toLocaleDateString();
console.log(datum);

let new_optionen = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
};

let de_DE_datum = d.toLocaleDateString("de-DE", new_optionen);
console.log(de_DE_datum);

// toLocaleTimeString() gibt nur die Uhrzeit
let zeit = d.toLocaleTimeString();
console.log(zeit);

let optionen_1 = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
};

let zeit_1_DE = d.toLocaleTimeString("de-DE", optionen_1);
console.log(zeit_1_DE);
