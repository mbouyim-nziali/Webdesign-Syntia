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

let wert_1 = konto_1.iban;

console.log(wert_1);
console.log(`${konto_2.inhaber.vorname} ${konto_2.inhaber.nachname} hat ${konto_2.kontostand}€ auf sein Konto`);

// Eigenschaften setzen (hinzufuegen) (Dot-Notation)

konto_1.abhebelimit = 1000;
console.log(konto_1);
console.log(`${konto_1.abhebelimit}€`);
// eigenschaft verändern
konto_1.kontostand = 33998;

console.log(konto_1);

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

// eigenschaft von Objekte hinzufuegen
auto_anlegen.ps = 90099;
// eigenschaft von Objekte verändern
auto_anlegen.model = "ieco";

console.log(`Mein Auto hat den Model ${auto_anlegen.model} und ${auto_anlegen.ps} PS`);
