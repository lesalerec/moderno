$(function () {
  $('.star').rateYo({
    starWidth: '12px',
    normalFill: '#707070',
    ratedFill: '#ffa726',
    readOnly: true,
  });

  var swiper = new Swiper('.product__slider-inner', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: true,
        slidesPerGroup: 3,
      },
    },
  });

  var mixer = mixitup('.products__content');
});
