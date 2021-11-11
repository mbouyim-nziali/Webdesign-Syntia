"use strict";

// objekte definieren

// Inhaber-Objekte (Vorname, Nachname, Geschelcht, Alter)

// let inhaber_1 = {
//     vorname: "Vanessa Syntia",
//     nachname: "Mbouyim Nzaili",
//     geschlecht: "weiblich",
//     alter: 23,

// };

// console.log(inhaber_1);

// let inhaber_2 = {
//     vorname: "Cheick Idriss",
//     nachname: "Diomande",
//     geschlecht: "männlich",
//     alter: 27,

// };

// console.log(inhaber_2);

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

console.log(konto_1);

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

console.log(konto_2);

// Inhaber-Objekte (Vorname, Nachname, Geschelcht, Alter)

let auto_anlegen = {
    marke: "TOYOTA",
    model: "MCG",
    kraftstoffart:"Bezin", 
    kilometerstand: "1000 km",
    ausstattung: {
        navigationssystem: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: true,
        panoramadach : true,

    },

    zustand: "sehr gut",
    preis: 989899

};

console.log(auto_anlegen);

