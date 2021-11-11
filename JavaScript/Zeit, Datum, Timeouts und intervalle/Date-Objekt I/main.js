"use strict";
let date = new Date();
console.log(date);

// Date.now gibt den nummerischen Wert der aktuellen Zeit an  
//die Anzahl der Millisekunden die seit dem 1. Januar 1970 00:00:00 UTC vergangen sind.
console.log(Date.now());
// erstellung eines Datum durcg die nummerischen Wert der aktuellen Zeit an 
let date_2 = new Date(1649887448776);
console.log(date_2);

// Datum String erstellen
let date_3 = new Date("Aug 20 2021 12:36:52 GMT+0200");
console.log(date_3);

// invalide Date
let date_4 = new Date("06.November.2020 12:34:56 Uhr");
console.log(date_4);

//syntax von datum : 
// new Date(year, monthIndex [, day [, hour [, minutes [, seconds [, milliseconds]]]]]);
// [, day [, hour [, minutes [, seconds [, milliseconds]]]]]): sind optionale

let date_5 = new Date(2020, 9, 3, 12, 30, 6 ,6);
console.log(date_5);

