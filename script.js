const hamburger = document.querySelector(".hamburger-menu");
const header = document.getElementById("header");
const mask = document.getElementById("mask");

hamburger.addEventListener("click", function (){
    header.classList.toggle("active");
});

mask.addEventListener("click", function(){
    header.classList.remove("active");
});


