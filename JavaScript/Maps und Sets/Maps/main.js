"use strict";

let mein_map = new Map();

// werte in Map hinzuefugen mit set
mein_map.set("test", "wert zur eingenschaft Test");
mein_map.set("a",1);
mein_map.set("b",2);
mein_map.set(true, 34);
mein_map.set(1, 10);
mein_map.set(13,"Ich bin da");
mein_map.set([], "wert zur eingenschaft []");
mein_map.set({}, "wert zur eingenschaft{}")
mein_map.set(function(){}, 34);
console.log(mein_map);

console.log(mein_map.get("test"));
console.log(mein_map.get("a"));
console.log(mein_map.get("b"));
console.log(mein_map.get(1));
console.log(mein_map.get(true));
console.log(mein_map.get(13));
// Vergleich bei Objekte ist einbisschen problematish ist da sie niemals gleich sind.
console.log(mein_map.get([]));
console.log(mein_map.get({}));
console.log(mein_map.get(function(){}));

//has fragt ob ein element(eigenschaft) in unsere Array enthalten ist.
// has Renvoie un booléen affirmant qu'une valeur a été associée ou non à la clé dans l'objet Map.

console.log(mein_map.has(true));
console.log(mein_map.has("b"));

//delete um element zu löschen
mein_map.delete("b");
// mein_map.clear();

console.log(mein_map.size);
console.log(mein_map);