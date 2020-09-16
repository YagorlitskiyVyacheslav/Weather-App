import './sass/main.scss';
import refs from './js/refs';
import fetchWeather from './js/fetch-weather';
import fetchImage from './js/fetch-bg-image';
import quotes from './js/quote';
import timerDate from './js/timer-date';
import preloader from './js/preloader';
import geolocation from './js/geolocation-rendering';
import { onBtnOneDayClick, onBtnFiveDayClick } from './js/markUpFiveDay';
import renderingCurrentWeather from './js/renderingCurrentWeather';
import 'slick-carousel/slick/slick.min';
import slick2 from 'slick-carousel';
require('jquery');
import $ from 'jquery';
window.$ = window.jQuery = $;
import localStorageInput from './js/localStorage';
import formStar from './js/favorite-sity-star';
import { error, defaultModules } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import notification from './js/renderingWeatherAndNotification';


document.addEventListener('DOMContentLoaded', preloader.start());
document.addEventListener('DOMContentLoaded', geolocation);
refs.onClickBtnOneDay.addEventListener(`click`, onBtnOneDayClick);
refs.onClickBtnFiveDay.addEventListener('click', () => {
  const cityName = refs.cityName.textContent.split(',')[0];
  fetchWeather.weatherFor5Days(cityName).then(data => {
    onBtnFiveDayClick(data);
    $(document).width(function () {
      $('.five-days-weather-list').slick({
        arrows: true,
        draggable: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
          { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
        ]
      });
    });
    // $('.slick-slider').slick('slickNext').slick('slickPrev'); 
  });

})



refs.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  preloader.search()
  setTimeout(() => {
    onBtnOneDayClick();
    formStar.removeClassFillYellow();
    formStar.addClassFillYellow();
    notification.renderingWeatherAndNotification();
    localStorageInput();
  }, 1000)
})