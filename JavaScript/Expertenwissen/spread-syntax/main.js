"use strict";
// für Funktionen
let arrays = [2,50,80,50];
const addieren = function(a, b, c, d){
    console.log(a + b + c + d);
};
// addieren(arrays[0],arrays[1],arrays[2],arrays[3]);
// man kann auch so schreiben
addieren(...arrays)

// für arrays

let arrays_2 = ["banana", "orange", "kiwi"];
let groeße_arrays = ["apfel", "trauben", ...arrays_2];

console.log(groeße_arrays);

// für Objekte

let kel = {
    name: "vanessa",
    alter:23,
    objekt: true
};

let groesse_objekt = {
    betreff: "spread-syntax",
    ...kel,
    datum: new Date()
};

console.log(groesse_objekt);

// für instanzen von objekten

let datumswerte = [2020, 5, 14];
let datum = new Date(...datumswerte);
console.log(datum);