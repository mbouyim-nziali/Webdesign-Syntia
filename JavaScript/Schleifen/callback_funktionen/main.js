"use strict";

// callbackfunction sind funktionen , die als parameter in andre fuktionen übergeben werden.

// let funtion_1 = function(){
//     console.log("ich bin funktion 1!");
// };

let funktion_2 = function(f){
    console.log("ich bin funktion 2");  
    f();
};

funktion_2(function(){
    console.log("ich bin funktion 1!");
});
