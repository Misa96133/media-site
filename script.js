const hamburger = document.querySelector(".hamburger-menu");
const header = document.getElementById("header");
const mask = document.getElementById("mask");

hamburger.addEventListener("click", function (){
    header.classList.toggle("active");
});

mask.addEventListener("click", function(){
    header.classList.remove("active");
});



// const swipeArea = document.querySelector('.swipe-area');
// let startX;

// swipeArea.addEventListener('touchstart', (e) => {
//   startX = e.touches[0].clientX;
// });

// swipeArea.addEventListener('touchmove', (e) => {
//   const moveX = startX - e.touches[0].clientX;
//   swipeArea.scrollLeft += moveX;
// });


const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    breakpoints: {
      // 768px以上の場合
    //   768: {
    //     slidesPerView: 3
    //   }
    }
  });