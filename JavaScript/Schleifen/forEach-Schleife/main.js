"use strict";
let persons = [];
let person_1 = {
    name: "Mbouyim",
    vorname:"Vanessa",
    alter: 23,
    geschlecht:"Weiblich"
};

let person_2 = {
    name: "Nziali",
    vorname:"syntia",
    alter: 23,
    geschlecht:"Weiblich"
};

let person_3 = {
    name: "Diomande",
    vorname:"Cheick Idriss",
    alter: 23,
    geschlecht:"Männlich"
};

persons.push(person_1);
persons.push(person_2);
persons.push(person_3);

// let meine_funktion = function(e){
//     console.log(e);
// };

// persons.forEach(meine_funktion);

// persons.forEach(function(e){
//     console.log(e);
// });

persons.forEach(element =>{ console.log(element)
    
});