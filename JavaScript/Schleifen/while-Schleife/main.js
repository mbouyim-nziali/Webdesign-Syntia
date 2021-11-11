"use strict";

let a = 12, b = 30, c = 0;

while (a <= b) {
    c +=a;
    a++;
}
console.log(c);

let d = 0;
while (d < 10) {
    d++;
    if(d === 5){
        continue;
    }
    else if (d === 7){
        break;
    }

    console.log(d);
}

console.log("Schleife beendet");

