"use strict";
let essen = "attieke";
switch (essen) {
    case "fufu":
    case "rice":
        console.log(`ja! das mag ich nicht!`);
        break;
    case "attieke":
    case "koki mit banane":
        console.log(`ja! das mag ich!`);
        break;
    
    default:
        console.log(`ich kenne ${essen} nicht! was ist das?`);
        break;
}

// ============AUFGABEN=====================

let produkt = "rice";

switch (produkt) {
    case "Brot":
        console.log("1.89€");
        break;
    case "Milch":
        console.log("0,79€");
        break;
    case "Schokolade":
        console.log("0,99€");
        break;
    case "chips":
        console.log("0,99€");
        break;
    case "Apfel":
        console.log("0,79€");
        break;

    default:
        console.log(`${produkt} wurde nicht gefunden!`);
        break;
}