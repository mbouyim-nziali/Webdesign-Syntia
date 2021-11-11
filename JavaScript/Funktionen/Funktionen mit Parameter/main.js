"use strict";
const meine_funktion = function( parameter_1, parameter_2, result){


    result = parameter_2 * parameter_1

    console.log(result);

};

meine_funktion(3,5, 0);
meine_funktion(89 , 50 ,0);
meine_funktion(100 , 50 ,0);
meine_funktion(89 , 5000 ,0);


const meine_function_2 = function(vorname, nachname){
  let gesamt_name = `Hallo meine vorname ist ${vorname} und meine Nachname ist ${nachname}. und du wie ist deine Name?`;
    console.log(gesamt_name);
};

let vor = "Vanessa syntia";
let nach = "Mbouyim Nziali";

meine_function_2(vor, nach);

const neu_function = function(value_1, value_2){
    console.log(value_1 + value_2);
    console.log(value_1 - value_2);
    console.log(value_1 * value_2);
    console.log(value_1 / value_2);
    console.log(value_1 % value_2);

};

let zahl_1 = 10;
let zahl_2 = 5;
let zahl_3 = 100;
let zahl_4 = 40;
let zahl_5 = 67;

neu_function(zahl_1, zahl_2);
console.log("----------------------------------------");
neu_function(zahl_3, zahl_2);
console.log("----------------------------------------");
neu_function(zahl_4, zahl_3);
console.log("----------------------------------------");
neu_function(zahl_3, zahl_2);
console.log("----------------------------------------");
neu_function(zahl_5, zahl_1);
console.log("----------------------------------------");
neu_function(zahl_4, zahl_2);
console.log("----------------------------------------");
neu_function(zahl_3, zahl_1);