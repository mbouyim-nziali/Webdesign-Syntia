"use strict";
// Gültigkeitbereich : Bereich indem man Zugriff auf eine Variable hat 
// Globale Variablen : wird außerhalb aller codeblöcke definiert und ist von überrall zugängiglich
// Lokale Variablen: wird innerhalb eines codesbloks definiert und ist nur in diesem 
//und in den Codeblöcken die darin enthalten sind Verfügbar.


let variable_1 = "variable 1";

const meine_function = function(){
    let variable_2 = " hallo leute ";

    
    if(true){
        let variable_3 = " ich bin da! ";
        console.log(variable_3);
        console.log(variable_2);
    }
    //console.log(variable_3);
    console.log(variable_1);
    console.log(variable_2);
    
};

meine_function();

console.log(variable_1);
//console.log(variable_2);
