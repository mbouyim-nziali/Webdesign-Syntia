"use strict";
let values = [2,3,4,5,6,8,9,10,70,65];
let result = 0;

for (let index = 0; index < values.length; index++) {
   if(values[index] % 2 == 0) {
       result += values[index];
       console.log(`${values[index]} ist ein gerade Zahl`);
   }else {
       result -= values[index];
       console.log(`${values[index]} ist ein ungerade Zahl`);
   }   
}
console.log(result);
