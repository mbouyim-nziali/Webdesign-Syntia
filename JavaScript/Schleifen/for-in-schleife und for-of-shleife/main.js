"use strict";
let person = {
    ame: "Nziali",
    vorname:"syntia",
    alter: 23,
    geschlecht:"Weiblich"
},

arrays = [
    "arrays1",
    "arrays2",
    "arrays3",
    "arrays4"

];

// for -in Schleife durchlaufe die eingenschaft eines Objekt;
// for…in sollte nicht für den Durchlauf eines Arrays verwendet werden, bei dem die 
//Indexreihenfolge wichtig ist.

for (const key in arrays) {
    console.log(key);
}

for (const key in person) {
    console.log(key);
}

// die for -of schleife durchlaufe die Werte eines objekt  und gilt nur für iterable Objekt wie Arrays, 
// Map, Set, das arguments Objekt und weitere eingeschlossen.

for (const iterator of arrays) {
    console.log(iterator);
}

// for -of gilt nicht für einfache Objekte da sie nicht iterable sind.
// for (const iterator of person) {
//     console.log(iterator);
// }



// let zahl = {
//     a: 20,
//     b: -49,
//     c:34,
//     d: -5

// };

// for (const key in zahl) {
//     if (zahl[key] >= 0) {
//         zahl[key] *= zahl[key] ;
//     }
//     console.log(zahl[key]);
// };