$(document).ready(function() {
  // Banner Slick Slider JS 
  $(".banner-slick-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1400,
    Infinity: true
  });
  // Testimonials Slick Slider JS
  $(".testimonials-slick-slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});