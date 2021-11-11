"use strict";
let link_1 = document.querySelector("#navigation > ul > li:nth-of-type(1) > a");
let link_1_parent = link_1.parentElement;
let link_2 = document.querySelector("#navigation > ul > li:nth-of-type(2) > a");
let link_2_parent = link_2.parentElement;

link_1.addEventListener("click", e => {
    e.preventDefault();
    console.log("link_1 hat es mitbekommen!");
})

link_2.addEventListener("click", e => {
    e.stopPropagation();
    console.log("link_2 hat es mitbekommen!");
})
link_1_parent.addEventListener("click", e => {
    console.log("link_1_parent hat es mitbekommen!");
})

link_2_parent.addEventListener("click", e => {
    console.log("link_2_parent hat es mitbekommen!");
})


