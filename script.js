const hamburger = document.querySelector(".hamburger-menu");
const header = document.getElementById("header");
const mask = document.getElementById("mask");
const navi = document.getElementById("navi");

hamburger.addEventListener("click", function (){
    header.classList.toggle("active");
});

mask.addEventListener("click", function(){
    header.classList.remove("active");
});

navi.addEventListener("click",function (){
    header.classList.toggle("active");
});

