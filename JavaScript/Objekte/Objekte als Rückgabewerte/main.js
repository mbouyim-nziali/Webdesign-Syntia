"use strict";

let Person = {
    vorname: "vanessa",
    nachname:"Nziali",
    alter: 23
};

const person_verarbeiten = function(p){
    return{
        name :`ich bin ${p.vorname} ${p.nachname}`,
        zusammenfassung: `${p.vorname} ${p.nachname} (${p.alter})`,
        begruessung: `Hallo ich heiße ${p.vorname} ${p.nachname}!`
    }
    

};

console.log(person_verarbeiten(Person));