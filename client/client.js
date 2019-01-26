$(document).ready(function (){
  $('.c-splash').on('click', function () {
    $(this).fadeOut('slow');
  });

  $('.c-hero .c-carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    adaptiveHeight: true,
  });
  $('.c-capabilities .c-carousel').slick({
    prevArrow: $('.c-capabilities__btn--back'),
    nextArrow: $('.c-capabilities__btn--next'),
    slidesToShow: 1,
    infinite: true,
  });
  // $('.c-capabilities .c-carousel').slick({
  //   prevArrow: $('.c-capabilities__btn--back'),
  //   nextArrow: $('.c-capabilities__btn--next'),
  //   slidesToShow: 1,
  //   infinite: true,
  // });

});
