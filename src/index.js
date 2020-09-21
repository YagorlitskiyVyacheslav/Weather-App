import './sass/main.scss';
import refs from './js/refs';
import fetchWeather from './js/fetch-weather';
import fetchImage from './js/fetch-bg-image';
import './js/quote';
import './js/timer-date';
import preloader from './js/preloader';
import geolocation from './js/geolocation-rendering';
import { onBtnOneDayClick, onBtnFiveDayClick } from './js/markUpFiveDay';
import renderingCurrentWeather from './js/renderingCurrentWeather';
<<<<<<< HEAD
import 'slick-carousel/slick/slick.min';
import slick2 from 'slick-carousel';
require('jquery');
import $ from 'jquery';
window.$ = window.jQuery = $;
=======
import { slider1 } from './js/slick-carousel';
>>>>>>> ea3c7c9ed5d769ababf91bde26b083a895e5b6c1
import localStorageInput from './js/localStorage';
import formStar from './js/favorite-sity-star';
import notification from './js/notification';
import updateTimer from './js/timer-date';

document.addEventListener('DOMContentLoaded', geolocation);
refs.onClickBtnOneDay.addEventListener(`click`, onBtnOneDayClick);
refs.onClickBtnFiveDay.addEventListener('click', () => {
  const cityName = refs.cityName.textContent.split(',')[0];
  fetchWeather.weatherFor5Days(cityName).then(data => {
    onBtnFiveDayClick(data);
<<<<<<< HEAD
    $(document).width(function () {
      $('.five-days-weather-list').slick({
        arrows: true,
        draggable: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
          { breakpoint: 1280, settings: { slidesToShow: 5, slidesToScroll: 1 } },
        ]
      });
    });
  });
  // $('.slick-slider').slick('slickNext').slick('slickPrev'); 
});

refs.searchForm.addEventListener('submit', (e) => {
=======
    slider1();
  });
});
refs.searchForm.addEventListener('submit', e => {
>>>>>>> ea3c7c9ed5d769ababf91bde26b083a895e5b6c1
  e.preventDefault();
  preloader.search();
  setTimeout(() => {
    onBtnOneDayClick();
    formStar.removeClassFillYellow();
    formStar.addClassFillYellow();
    fetchWeather.currentWeather(refs.searchFormInput.value).then(data => {
      if (data === '400' || data === '404') {
        notification(data);
        return;
      }

      fetchImage.fetchImage(refs.searchFormInput.value).then(data => {
        refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
      });
      renderingCurrentWeather(data);
    });
    localStorageInput();
  }, 1000)
})
