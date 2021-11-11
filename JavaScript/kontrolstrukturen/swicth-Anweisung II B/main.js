"use strict";

let key = 40;

switch (key) {
    case 50:
        console.log(`${key} ist gleich der erste case`);
        break;

    case 40:
        console.log(`${key} ist gleich der zweite case`);
        break;

    case 70:
        console.log(`${key} ist gleich der dritte case`);
        break;

    default:
        console.log(`${key} ist gleich kein case`);
        break;
}

let value = "vanessa";

switch (value) {
    case "Vanessa":
        console.log(`hallo ich bin ${value}`);
        break;

    case "Dora":
        console.log(`hallo ich bin${value} `);
        break;

    case "vanessa":
        console.log(`hallo ich bin ${value}`);
        break;

    default:
        console.log(`hallo was ist dein name?`);
        break;
}