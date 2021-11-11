"use strict";

const Restaurant = {
    hauptmenu: "Koki",
    dessert: "Vanille Eis",
    getraenk: "cola",
    preis: 300
}

// man kann auch die eigenschaften von Objekten verändern, hinzufuegen und löschen auch wenn sie als constante definiert.

Restaurant.hauptmenu = "eru";
Restaurant.nach_speise = "banane";
delete Restaurant.nach_speise;
console.log(Restaurant);

// Restaurant = " gggg"; darf man nicht machen
// Restaurant = {}; darf man nicht machen