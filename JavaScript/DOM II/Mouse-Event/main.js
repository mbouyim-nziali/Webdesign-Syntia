"use strict";

let jumbo = document.querySelector(".jumbotron");
jumbo.addEventListener("click", (e) =>{
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target);
});

jumbo.addEventListener("dblclick", e =>{
    console.log("DBCLICK");
    console.log(e);
});

jumbo.addEventListener("mousedown", e =>{
    console.log("MouseDOwn");
    console.log(e);
});

jumbo.addEventListener("mouseup", e =>{
    console.log("Mouseup");
    console.log(e);
});

jumbo.addEventListener("mouseover", e =>{
    console.log("Mousover");
    console.log(e);
});

jumbo.addEventListener("mouseout", e =>{
    console.log("Mousout");
    console.log(e);
});





