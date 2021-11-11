"use strict";
//Ein Set-Objekt speichert eindeutige Werte jedes beliebigen Typs, 
//egal ob es sich dabei um primitive Werte oder Objektreferenzen handelt.

let mein_set = new Set();
// add um element in Set hunzuefuegen.
mein_set.add(1);
mein_set.add("some Text");
mein_set.add({name: "Nziali", vorname: "Vanessa"});
mein_set.add([2,3,4]);
mein_set.add(Math.sqrt(4));
console.log(mein_set);

// has fragt ob ein element enthalten ist.

console.log(mein_set.has(1));
console.log(mein_set.has("some Text"));
console.log(mein_set.has(2));
console.log(mein_set.has([2,3,4]));

// delete

mein_set.delete("some Text");
// mein_set.clear();

console.log(mein_set);
console.log(mein_set.size);



