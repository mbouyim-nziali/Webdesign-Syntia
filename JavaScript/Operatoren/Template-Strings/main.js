"use strict";

let vorname = "vanessa";
let nachnahme = "Nziali";
let alter = 23;

let name = vorname + " " + nachnahme;
console.log(name);

let begruessung = `Hallo ${name} !`;
console.log(begruessung);

let studienFach = "Informatik";
let note = 1.3;

let result = studienFach + " mit der  " + note + " bestanden";

let gesamt_note = `ich habe ${result}`;

console.log(gesamt_note)

let mehrzeiliger_template_string = `${begruessung} ich bin ${alter} jahre alt. ` + 
` ${gesamt_note}`;

console.log(mehrzeiliger_template_string);