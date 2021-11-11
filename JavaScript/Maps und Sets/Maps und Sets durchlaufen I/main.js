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


// mein_map.forEach(function(wert, eigenschaft, map){
//     console.log(wert);
//     console.log(eigenschaft);
//     // console.log(map);
// });


for (const paar of mein_map) {
    console.log(paar);
    for (const iterator of paar) {
        console.log(iterator);
    }
}
console.log("------------------------------------------------------------");
for (let [eigenschaft, wert] of mein_map) {
    console.log(eigenschaft);
    console.log(wert);
}

console.log("------------------------------------------------------------");

let mein_set = new Set();
// add um element in Set hunzuefuegen.
mein_set.add(1);
mein_set.add("some Text");
mein_set.add({name: "Nziali", vorname: "Vanessa"});
mein_set.add([2,3,4]);
mein_set.add(Math.sqrt(4));

mein_set.forEach(element => {
    console.log(element);
});

console.log("------------------------for of schleife------------------------------------");

for (const iterator of mein_set) {
    console.log(iterator);
}