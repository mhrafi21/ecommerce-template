
const mobileNav = document.querySelector(".mobile-nav");
const menuBtn = document.getElementById("openMenu");

menuBtn.addEventListener("click" , ()=>{
    mobileNav.classList.toggle("active");
})
// hero = swipper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//   hero swipper js

// testimonial swipper js
var swiper = new Swiper(".testimonial-swipper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//   testimonial swipper js