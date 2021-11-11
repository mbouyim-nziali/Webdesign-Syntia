"use strict";

let person = {
    nachname: "Mbouyim Nziali",
    vorname: "vanessa syntia",
    alter: 24,
    geschlecht:"weiblicht",
    meine_methode(){console.log(this);}
};
person.meine_methode();

let person_1 = {
    nachname: "Mbouyim Nziali",
    vorname: "vanessa syntia",
    alter: 24,
    geschlecht:"weiblicht",
    meine_methode() {
        const meine_function = function() {console.log(this);}
        meine_function();
    }
}
person_1.meine_methode();

let person_2 = {
    nachname: "Mbouyim Nziali",
    vorname: "vanessa syntia",
    alter: 24,
    geschlecht:"weiblicht",
    meine_methode() {
        const meine_function = () => {console.log(this);}
        meine_function();
    }
}
person_2.meine_methode();

