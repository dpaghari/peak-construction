$(document).ready(function (){
  $('.c-splash').on('click', function () {
    $(this).fadeOut('slow');
  });

  $(document).on('click', '.c-nav__menu-btn, .c-nav__close-btn', function() {
    $('.c-nav').toggleClass('active');
    $('.c-search').toggleClass('hide');
  });
  $(document).on('click', '.c-search__btn, .c-search__close-btn', function() {
    $('.c-search').toggleClass('active');
    $('.c-nav').toggleClass('hide');
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
  $('.c-project__image-slides').slick({
    arrows: false,
    dots: true,
    dotsClass: 'c-project__dot-container',
    slidesToShow: 1,
    infinite: false,
  });
  $('.c-portrait-carousel__slides').slick({
    arrows: false,
    dots: true,
    dotsClass: 'c-portrait-carousel__dot-container',
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
    
  $('.c-card-carousel__slides').slick({
    arrows: false,
    dots: true,
    dotsClass: 'c-card-carousel__dot-container',
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});
