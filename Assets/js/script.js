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
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
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

// ================= mobile menu =================

const menuToggle = document.getElementById("menuToggle");
const closeNav = document.getElementById("closeNav");
const mobileNav = document.getElementById("mobileNav");

// Open menu
menuToggle.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

// Close menu
closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

// Dropdown Toggle
const dropdowns = document.querySelectorAll(".mobile-menu-dropdown .dropdown-toggle");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = dropdown.parentElement;
    parent.classList.toggle("open");
  });
});
