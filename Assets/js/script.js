// ================= Hero Slider (Slick) =================
$(document).ready(function () {
  $(".hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    dots: true,
    arrows: true,
    fade: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

// ================= client Slider (Slick) =================
$(document).ready(function () {
  $(".event-client").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});

// ================= Fancybox =================
Fancybox.bind("[data-fancybox]", {
  animated: true,
  showClass: "fancybox-fadeIn",
  hideClass: "fancybox-fadeOut",
  dragToClose: true,
  Thumbs: false,
});

// ================= AOS (Animation on Scroll) =================
AOS.init({
  once: false,
  offset: 120,
  duration: 600,
  easing: "ease-in-out",
});

// ================= upcoming event Slider (Swiper) =================

var swiper1 = new Swiper(".mySwiper1", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});
