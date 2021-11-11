"use strict";

// Objekte in arrays

let autos = [

    {
        marke: "Toyota",
        modell: "i40 M",
        farbe: "bleu"
    },

    {
        marke: "BMW",
        modell: "i20",
        farbe: "rot"
    },

    {
        marke: "Mercedes",
        modell: "i30",
        farbe: "schwarz"
    }
]

console.log(autos);

console.log(autos[1].marke);

// Arrays in objekte

let waren = {

    obst:
    [
        "Bananen",
        "Birne",
        "Orange"
    ],

    
    gemuese:
    [
        "Mohren",
        "Sellerie",
        "Kohl"
    ],

    brot:
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot",
    
    ]
};

console.log(waren);
console.log(waren.obst)
console.log(waren.gemuese[2])