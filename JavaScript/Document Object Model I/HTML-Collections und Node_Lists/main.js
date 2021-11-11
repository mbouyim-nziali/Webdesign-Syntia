"use strict";
let html_collection = document.getElementsByTagName("li");

let html_collection_1 = document.getElementsByClassName("jumbotron");


for (let index = 0; index < html_collection_1.length; index++) {
    const element = html_collection_1[index];
    console.log(element);
}

for (let index = 0; index < html_collection.length; index++) {
    const element = html_collection[index];
    console.log(element);
    
}

for (const iterator of html_collection_1) {
    console.log(iterator);
    
}

for (const iterator of html_collection) {
    console.log(iterator);
    
}

// Node-Lists

let node_list = document.querySelectorAll("a");
let node_list_1 = document.querySelectorAll("p");

for (const iterator of node_list) {
    console.log(iterator);
}

for (const iterator of node_list_1) {
    console.log(iterator);
}

node_list_1.forEach(function(element) {
    console.log(element);
    
})