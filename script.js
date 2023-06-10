"use strict";

const mobileMenuOverlay = document.querySelector(".overlay");
const navOpener = document.querySelector("#open");
const navCloser = document.querySelector("#close");

navOpener.addEventListener("click", (e) => {
    mobileMenuOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
    navOpener.classList.add("hide");
    navCloser.classList.remove("hide");
});
navCloser.addEventListener("click", (e) => {
    mobileMenuOverlay.classList.remove("show");
    document.body.style.overflow = "visible";
    navCloser.classList.add("hide");
    navOpener.classList.remove("hide");
});

mobileMenuOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
        mobileMenuOverlay.classList.remove("show");
    }
});
