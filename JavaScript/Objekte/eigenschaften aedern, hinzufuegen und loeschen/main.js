"use strict";
let auto = {
    marke : "Tesla",
};
// Eigenschaft aedern
auto.marke = "BMW";

//Eigenschaft hinzufuegen
auto.preis = 7777;
auto["farbe"] = "rot";

// Eigenschaft löschen

delete auto.preis;

console.log(auto);
