"use strict";

let a = [
    "papa",
    "maman",
    "dora",
    "Nadeg"
];


for (let index = 0; index < a.length; index++) {
    if (a[index] === "papa"){
        a.push("Syntia");

    }else if (a[index] == "dora") {
        a.pop();
    }else{
        console.log("die gesuchte Person ist nicht da");
    }
    
}
console.log(a);


for (let i = 0; i < 8; i++) {
    if (i == 4){
        continue;
    }else if (i == 7){
        break;
    }
    console.log(i);
}
console.log("jowhohiwh");


