"use strict";

let auto_1 = {
    marke: "TOYOTA",
    model: "Model X"
};

let auto_2 = {
    marke: "BMW",
    model: "i8"
};

function auto_vergleichen(a_1, a_2) {
    return(a_1.model === a_2.model && a_1.marke === a_2.marke);
}

console.log(auto_vergleichen(auto_1, auto_2));