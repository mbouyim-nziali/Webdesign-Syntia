"use strict";

let s = " Loren ipsum dolor sit amet ipsum. ";

console.log(s.length);
console.log(s.indexOf("ipsum", 3));
console.log(s.lastIndexOf("ipsum", 10));
console.log(s.includes("ipsum", 20));
console.log(s.toLocaleLowerCase());
console.log(s.toLocaleUpperCase());

// die Methode trim macht die leerzeichen weg.
console.log(s.trim());
console.log(s.repeat(5));

let regex = /i\w{4}/g;
let regex_1 = /L\w{4}/;
console.log(s.search(regex));
console.log(s.replace(regex, "opsum"));
console.log(s.match(regex));

console.log(s.search(regex_1));
console.log(s.replace(regex_1, "Welcome"));
console.log(s.match(regex_1));
