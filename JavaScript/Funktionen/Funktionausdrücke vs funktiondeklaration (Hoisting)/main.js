"use strict";

// Funktionausdrücke

const function_1 = function(){
    console.log("Function 1");

};

function_1();

let function_2 = function(){
    console.log("Funktion 2");

};

function_2();

function_2 = function(){
    console.log("Funktion 2 (NEU)")
};

function_2();

// Funktionsdeklaration (werden gehoistet)

function function_3 () {
    let number_5 = 56;

    console.log(number_5);
    
}

function_3();