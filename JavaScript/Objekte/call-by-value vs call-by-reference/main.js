"use strict";

let meine_variable = "vanessa";
let mein_objekt = {
    zahl: 466,
};

const meine_funktion = function(v, o){
    v = "Mamanu";
    o.zahl = 555;
}

meine_funktion(meine_variable , mein_objekt);

console.log(meine_variable);
console.log(mein_objekt);

// Aufgabe

let konto = {
    iban: "DE4388228798998",
    bic: "GFCJHBCJBYNJ",
    inhaber:{
        vorname: "Vanessa Syntia",
        nachname: "Mbouyim Nzaili",
        geschlecht: "weiblich",
        alter: 23,
    },
    kontostand: 5000,
    aktiv: true,
};

const geld_einzahlen = function(new_konto, value){
    new_konto.kontostand = new_konto.kontostand + value;
};

geld_einzahlen(konto,20000);

console.log(konto.kontostand);

const geld_abheben = function(new_konto, value){
     new_konto.kontostand = new_konto.kontostand - value;
};

geld_abheben(konto,555);

console.log(konto.kontostand)



