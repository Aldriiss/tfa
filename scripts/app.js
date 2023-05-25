"use strict";

let burgerButton = document.querySelector(".burger");
let menu = document.querySelector(".nav__menu");
let body = document.querySelector("body");
let navEl = document.querySelectorAll(".nav__lien");


if(burgerButton){
    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle('active');
        menu.classList.toggle('switch');
        body.classList.toggle('overflow');
        

    })
    for (const el of navEl) {
    el.addEventListener("click", Switch )
    }
    function Switch(){
        menu.classList.remove("switch");
        burgerButton.classList.remove('active');
    }

};

