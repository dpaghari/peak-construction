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
    dots: true,
    dotsClass: 'c-hero__carousel-dot-container',
  });
  $('.c-capabilities .c-carousel').slick({
    prevArrow: $('.c-capabilities__btn--back'),
    nextArrow: $('.c-capabilities__btn--next'),
    slidesToShow: 1,
    infinite: true,
  });
  $('.c-project-carousel__slides').slick({
    prevArrow: $('.c-project-carousel__btn--back'),
    nextArrow: $('.c-project-carousel__btn--next'),
    slidesToShow: 1,
    infinite: true,
  });
  $('.c-portrait-carousel__slides').slick({
    arrows: false,
    dots: true,
    dotsClass: 'c-portrait-carousel__dot-container',
    slidesToShow: 1,
    infinite: true,
  });
  $('.c-card-carousel__slides').slick({
    arrows: false,
    dots: true,
    dotsClass: 'c-card-carousel__dot-container',
    slidesToShow: 1,
    infinite: true,
  });

});
