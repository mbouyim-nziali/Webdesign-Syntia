"use strict";
// Bedingung ? Ausdruck_1 : Ausdruck_2;

let meine_zahl = 10;

let result = meine_zahl > 10 ? "ich bin gößer als 10" : "ich bin kleiner ober gleich 10";
console.log(result);

let geschlecht = 0;

let result_1 =`Hallo ich bin ${geschlecht ? "Frau" : "Herr"} Mustermann!`;

console.log(result_1);

let fuehrerschein = false;
const fuehrerschein_kontrolle = function(){
    return fuehrerschein ? " ich darf Auto fahren" : " ich darf nicht";
};

console.log(fuehrerschein_kontrolle());

let erdbeschleunigung = 6;
let panik = false;
erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung = 9.81) : (panik = false, erdbeschleunigung =9.81);

console.log(erdbeschleunigung);
console.log(panik);

let farbe = "grün"
console.log(farbe == "blau" ? "ich mag blau" : farbe == "rot" ? "ich mag auch rot" : `${farbe} mag ich nicht`);
