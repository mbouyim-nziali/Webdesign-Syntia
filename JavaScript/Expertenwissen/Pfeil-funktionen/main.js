"use strict";

// function multiplizieren(a, b) {   return a * b;};
// const multiplizieren = (a, b) => {return a * b;};
const multiplizieren = (a, b) => a * b;

console.log(multiplizieren(7, 8));

// const begruessung = function(name){return `Hallo${name}`;};

// const begruessung = name => `Hallo ${ name}`;
// console.log(begruessung("Vanessa"));

// const sinn = function(){return 42;};

const sinn = () => 42;
console.log(sinn());

let einkaufListe = [
    "brot",
    "Bohnen",
    "rice",
    "Saft"
];

einkaufListe.forEach(element => console.log(element));

