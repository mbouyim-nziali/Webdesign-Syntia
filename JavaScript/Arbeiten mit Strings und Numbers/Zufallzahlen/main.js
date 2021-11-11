"use strict";

let mimimum = 0, maximum = 255;

function zufallzaahl(min, max) {
    return Math.floor(Math.random()*((max - min) + 1) + min);
}

console.log(zufallzaahl(mimimum, maximum));