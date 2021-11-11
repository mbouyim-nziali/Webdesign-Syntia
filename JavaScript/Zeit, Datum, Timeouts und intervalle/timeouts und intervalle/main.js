"use strict";

// setTimeout(callback-funktion, Zeitspanne[, parameter1, parameter2, ...., parameterN])
// console.log("los");
// setTimeout(function() {
//     console.log("fertig");   
// },2000);

// zweite Variante um Timeout zu erstellen

// console.log("los");

//setTimeout("console.log('fertig');", 2000); 
// Timeout löschen. mit clearTimeout dafür braucht man den id der Timeout

// console.log(setTimeout("console.log('fertig');", 2000))// um der id der Timeout zu bekommen.

// clearTimeout(1);

// setInterval(callback-funktion, Zeitspanne[, parameter1, parameter2, ...., parameterN])

// setInterval(() => {
//     console.log("Eine Sekunde ist um!")
// }, 1000);

// setInterval(code-string, Zeitspanne)

console.log(setInterval("console.log('Eine Sekunde ist um');", 1000));
clearTimeout(1);