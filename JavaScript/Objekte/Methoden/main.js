"use strict";


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
    //Methoden
    geld_einzahlen(value){
       this.kontostand += value;
    },

    geld_abheben(value){
        this.kontostand -= value;
    }
};

konto.geld_einzahlen(1000);
console.log(konto.kontostand);

konto.geld_abheben(100);
console.log(konto.kontostand);

// Aufgabe

let Person = {
    vorname: "vanessa",
    nachname:"Nziali",
    alter: 23,
    verarbeiten() {
        return{
            name :`ich bin ${this.vorname} ${this.nachname}`,
            zusammenfassung: `${this.vorname} ${this.nachname} (${this.alter})`,
            begruessung: `Hallo ich heiße ${this.vorname} ${this.nachname}!`
                
        };
    }
};

console.log(Person.verarbeiten());


// const person_verarbeiten = function(p){
//     return{
//         name :`ich bin ${p.vorname} ${p.nachname}`,
//         zusammenfassung: `${p.vorname} ${p.nachname} (${p.alter})`,
//         begruessung: `Hallo ich heiße ${p.vorname} ${p.nachname}!`
//     }
    

// };

// console.log(person_verarbeiten(Person));

     