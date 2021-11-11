"use strict";
const multipliziert = function(zahl_1, zahl_2 = 20){
    console.log(zahl_1);
    console.log(zahl_2);
    console.log(zahl_1 * zahl_2);

};

let value_1 = 67;
let value_2 = 56;

multipliziert(value_1, value_2);

const neu_function = function(vorname =" Max ", nachname = "Musterman", alter = 60){
    console.log(`hallo meine Name ist ${vorname} ${nachname} und ich bin ${alter} jahre alt`);
};

let vor = "Vanessa";
let nach = "Nziali";
let neu_alter = 23;

neu_function();
console.log("---------------");
neu_function(vor);
console.log("---------------");
neu_function(undefined, nach, undefined)
console.log("---------------");
neu_function(undefined, undefined, neu_alter);
console.log("---------------");
neu_function(vor, nach, neu_alter);