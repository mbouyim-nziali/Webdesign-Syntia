"use strict";

const multipliziert = function(zahl_1, zahl_2){
    return zahl_1 * zahl_2;
  
};

let value_1 = 6;
let value_2 = 5;

let result = multipliziert(value_1, value_2);
console.log(result);

// console.log(multipliziert(value_1, value_2));

let result_2 = multipliziert(result, result);
console.log(result_2);

// console.log(multipliziert(multipliziert(value_1, value_2), multipliziert(value_1, value_2)));