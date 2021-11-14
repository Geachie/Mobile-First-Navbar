"use strict";

// nav toggle - select button and links

const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#navLinks");

// add event listener

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});
