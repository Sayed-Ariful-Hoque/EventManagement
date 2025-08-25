// Hero Area Slider JS Start
$(document).ready(function () {
  $(".hero-slider").slick({
    // autoplay: true,
    // autoplaySpeed: 4500,
    // speed: 1000,
    dots: false,
    arrows: true,
    fade: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
  });
});

// Hero Area Slider JS End
Fancybox.bind("[data-fancybox]", {
  animated: true,
  showClass: "fancybox-fadeIn",
  hideClass: "fancybox-fadeOut",
});
// Fancybox JS End

// section Animation  Js Start
AOS.init({
  once: true,
  offset: 100,
  duration: 1200,
  easing: "ease-in-out",
});
// section Animation  Js End

// swiper slider
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
