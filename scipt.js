
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if(document.documentElement.scrollTop > 50){
    nav.classList.add("header-scrolled");
  }else{
    nav.classList.remove("header-scrolled")
  }
}


let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
  a.addEventListener("click", function(){
   navcollapse.classList.remove("show");
  })
})

// swiper starts 
var swiper = new Swiper('.my-swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   autoplay:
   {
    delay:3500,
   },
});



var swiper = new Swiper(".our-partner", {
   slidesPerView: 5,
   spaceBetween : 30,
   loop:true,
   autoplay: {delay:2000,},
   breakpoints:{
    '991': {
      slidesPerView: 5,
   spaceBetween: 30,
    },
    '767' : {
      slidesPerView: 3,
   spaceBetween: 10,
    },
    '320' : {
      slidesPerView: 2,
   spaceBetween: 8,
    },
   },
});