"use strict";
const arr = [
    {
        name: "Vanessa",
        alter: 33,
        geschlecht: "weiblich"
        
    },

    {
        name: "Anessa",
        alter: 23,
        geschlecht: "weiblich"
        
    },

    { 
        name: "Dora",
        alter: 28,
        geschlecht: "weiblich"

    },

    {
        name: "Nadege",
        alter: 25,
        geschlecht: "weiblich"
    }

];

// arr.sort(function(a, b) {
//     return b.alter - a.alter;
    
// });

// console.log(arr);

arr.sort(function(a,b) {
    if(a.name < b.name){
        return -1;

    }else if(a.name > b.name){

       return 1;

    }else{
        return 0;
    }
    
});

console.log(arr);
