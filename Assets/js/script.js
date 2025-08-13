
// Hero Area Slider JS Start
$(document).ready(function(){
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    dots: false,
    arrows: true,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
  });
});

// Hero Area Slider JS End

// Fancybox JS Start
Fancybox.bind("[data-fancybox='photo-gallery-wrap']", {
  animated: true,
  showClass: "fancybox-fadeIn",
  hideClass: "fancybox-fadeOut",
});
// Fancybox JS End