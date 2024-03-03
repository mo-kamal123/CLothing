/*=============== SHOW MENU ===============*/
const navmenu = document.getElementById("nav__menu");
const navtoggle = document.getElementById("nav__toggle");
const navclose = document.getElementById("nav__close");

// menu show

if (navtoggle) {
  navtoggle.addEventListener("click", () => {
    navmenu.classList.add("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
if (navclose) {
  navclose.addEventListener("click", () => {
    navmenu.classList.remove("show-menu");
  });
}

/*=============== SWIPER CLOTHING ===============*/
let swiperhome = new Swiper(".home-swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    768:{
        slidesPerView: 3,
        centeredSlides:'auto',
    },
    1125:{
        centeredSlides:'auto',
        spaceBetween: -64,
    }
  }
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgheader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bgheader')
                      :header.classList.remove('bgheader')
}
window.addEventListener('scroll', bgheader)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration: 2500,
})

sr.reveal(`.home-swiper, .home-footer`)
sr.reveal(`.home-circle`, {scale: 1.5, delay: 300})
sr.reveal(`.home-subcircle`, {scale:1.5, delay:300})
sr.reveal(`.home-title`, {scale: 1, origin: 'bottom', delay:1200})
sr.reveal(`.home-title`, {scale: 1, origin: 'bottom', delay:1200})
sr.reveal(`.swiper-button-prev, .swiper-button-next`, {origin: 'bottom'})