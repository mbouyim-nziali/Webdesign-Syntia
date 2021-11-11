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

// console.log(mein_map.entries());
// console.log(mein_map.keys());
// console.log(mein_map.values());

for(let [eingenschaft, wert] of mein_map.entries()){
    console.log(eingenschaft);
    console.log(wert);
}

console.log("---------------------------------------------------------------");

for(let wert of mein_map.values()){
    console.log(wert);
}

console.log("---------------------------------------------------------------");

for(let eigenschaft of mein_map.keys()){
    console.log(eigenschaft);
}



let mein_set = new Set();
// add um element in Set hunzuefuegen.
mein_set.add(1);
mein_set.add("some Text");
mein_set.add({name: "Nziali", vorname: "Vanessa"});
mein_set.add([2,3,4]);
mein_set.add(Math.sqrt(4));

for(let wert of mein_set.values()){
    console.log(wert);
}



