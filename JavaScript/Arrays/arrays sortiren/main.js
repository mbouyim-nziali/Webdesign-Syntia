"use strict";
let students = ["Nadege", "Dora", "Idriss", "Francis", "Gerad", "Prince", "Syntia"];
students.sort();
console.log(students);

// let zahlen = [45,333,90909,4,34,25,789,2];
// zahlen.sort();
// console.log(zahlen);

let zahlen = [45,333,90909,4,34,25,789,2];

let new_zahl = zahlen.sort((a,b) => a -b );

console.log(new_zahl);

let zahlen_2 = [-3,-5,-6,-7,40,4,30,2,1,9];
let new_zahl_2 = zahlen_2.sort(function(a,b){
    return b - a;

});

console.log(new_zahl_2);

