"use strict";
let date = new Date();
date.setFullYear(2010);
date.setMonth(3);
date.setDate(29)
date.setHours(20);
date.setMinutes(30);
date.setSeconds(45);
date.setMilliseconds(111);
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());

//UTC für die WeltZeit.

let date_utc = new Date();
date_utc.setUTCFullYear(2010);
date_utc.setUTCMonth(3)
date_utc.setUTCDate(29)
date_utc.setUTCHours(20);
date_utc.setUTCMinutes(30);
date_utc.setUTCSeconds(45);
date_utc.setUTCMilliseconds(111);
console.log(date_utc);


console.log(date_utc.getUTCFullYear());
console.log(date_utc.getUTCMonth());
console.log(date_utc.getUTCDate());
console.log(date.getUTCHours())

let date_unix = new Date();

date_unix.setTime(1629892735799)
console.log(date_unix);
console.log(date_unix.getTime());

