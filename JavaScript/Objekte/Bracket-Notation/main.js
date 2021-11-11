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

console.log(konto_1);

// Eigenschaften auslrsen (Bracket-Notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);

let wert_2 = konto_2["inhaber"]["vorname"];
console.log(wert_2);

// Eigenschaften verändern mit (Bracket-Notation)

konto_1["kontostand"] = -888;
console.log(konto_1);
console.log(konto_1["kontostand"]);

// Eigenschaften setzen (hinzufuegen) mit (Bracket-Notation)

konto_1["geld_abzug"] = -400;
console.log(konto_1);

// Warum sollten wir die bracket-notation jemals verwenden?
// da ist sehr hilfreich für die Nutzung von String.

let eigenschaft = "iban";
let wert_3 =konto_1[eigenschaft];
console.log(wert_3);



// eigenschaft verändern

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
    preis: 989899,
};

// eigenschaft von Objekte hinzufuegen
auto_anlegen["ps"] = 90099;
// eigenschaft von Objekte verändern
let new_model = "model";
auto_anlegen["model"] = "i20";

console.log(`Mein Auto hat den Model ${auto_anlegen["model"]} und ${auto_anlegen["ps"]} PS`);
