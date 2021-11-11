"use strict";

let zahl = [34, 56, 30, 7, 90, 1, 23,20,4];
console.log(zahl);
let new_zahl = [];

zahl.forEach(element => {
    if (element >= 20){
        new_zahl.push(element);
    }

});
console.log(new_zahl);

// Arrays filtern

let new_zahl_2 = zahl.filter(element => {
    if (element <= 20){
      return true;
     
    } else{
        return false;
    }
    
});

console.log(new_zahl_2);



