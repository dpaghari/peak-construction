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
    adaptiveHeight: true,
  });
  $('.c-project-carousel__slides').slick({
    prevArrow: $('.c-project-carousel__btn--back'),
    nextArrow: $('.c-project-carousel__btn--next'),
    slidesToShow: 1,
    infinite: true,
    adaptiveHeight: true,
  });
  $('.c-portrait-carousel__slides').slick({
    prevArrow: $('.c-portrait-carousel__btn--back'),
    nextArrow: $('.c-portrait-carousel__btn--next'),
    slidesToShow: 1,
    infinite: true,
    adaptiveHeight: true,
  });

});
