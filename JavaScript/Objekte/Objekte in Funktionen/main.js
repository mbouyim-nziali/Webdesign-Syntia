"use strict";


let konto_1 = {
    iban: "DE4388228798998",
    bic: "GFCJHBCJBYNJ",
    inhaber:{
        vorname: "Vanessa Syntia",
        nachname: "Mbouyim Nzaili",
        geschlecht: "weiblich",
        alter: 23,
    },
    kontostand: 78768688,
    aktiv: true,
};


let konto_2 = {
    iban: "DE43882287989677",
    bic: "GFCJHBCJBYSSS",
    inhaber:{
        vorname: "Cheick Idriss",
        nachname: "Diomande",
        geschlecht: "männlich",
        alter: 27,
    },
    kontostand: 888868688,
    aktiv: false,
};

let konto_3 = {
    iban: "DE43882284449677",
    bic: "GFCJHBCJBUUSS",
    inhaber:{
        vorname: "Dora",
        nachname: "Nziali",
        geschlecht: "weiblich",
        alter: 27,
    },
    kontostand: 8,
    aktiv: false,
};


const kontostand_ausgeben = function(konto) { 
    console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand}€ auf dem konto.`)
};

const iban_ausgeben = function(konto) { 
    console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto["iban"]}.`)
};

kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);
kontostand_ausgeben(konto_3);

iban_ausgeben(konto_2);