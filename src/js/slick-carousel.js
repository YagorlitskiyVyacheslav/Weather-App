import 'slick-carousel/slick/slick.min';
require('jquery');
import $ from 'jquery';
window.$ = window.jQuery = $;

function slider1() {
  $(document).width(function () {
    $('.five-days-weather-list').slick({
      arrows: true,
      appendArrows: $('five-days-weather-btns'),
      prevArrow: $('.five-days-weather-btns__prev'),
      nextArrow: $('.five-days-weather-btns__next'),
      infinite: false,
      disabled: true,
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 2800,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
      ],
    });
  });
}

function slider2() {
  $(document).width(function () {
    $('.hourly-weather-list').slick({
      arrows: true,
      draggable: true,
      infinite: false,
      appendArrows: $('hourly-weather-btns'),
      prevArrow: $('.hourly-weather-btns__prev'),
      nextArrow: $('.hourly-weather-btns__next'),
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 2800,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 2
          }
        },
      ],
    });
  });
}
export {
  slider1,
  slider2
};
