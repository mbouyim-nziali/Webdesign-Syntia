"use strict";

let person_2 = {
    name: "Nziali",
    vorname:"syntia",
    alter: 23,
    geschlecht:"Weiblich"
};

// so iterire man nicht über Objekte for(let e in person_2){
//     console.log(person_2[e]);
// }

// entries gibt uns die Arrays representation eines arrays
// entries gibt uns die Eigenschaftensname und die werte des Objekt in paare



for(let paar of Object.entries(person_2)){
    console.log(paar);
    for(let e of paar){
        console.log(e);
    }
}

// keys gibt uns nur die Eingenschaftsname zurück


// for (let e of eigenschaft) {
//     console.log(e);
    
// }

Object.keys(person_2).forEach(element => {
    console.log(element);
});

// values gibt uns die Werte eines Objekts


Object.values(person_2).forEach(element => {
    console.log(element);

});

