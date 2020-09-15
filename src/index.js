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
import { error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
<<<<<<< HEAD
=======
import  'slick-carousel/slick/slick.min';
import  slick2 from 'slick-carousel';
require ('jquery');
import $ from 'jquery';
 window.$ = window.jQuery = $;
>>>>>>> 58eff233249d3799c134d6b203972200f9f82fd1
import localStorageInput from './js/localStorage';
import formStar from './js/favorite-sity-star';


document.addEventListener('DOMContentLoaded', preloader.start());
document.addEventListener('DOMContentLoaded', geolocation);
refs.onClickBtnOneDay.addEventListener(`click`, onBtnOneDayClick);
refs.onClickBtnFiveDay.addEventListener('click', () => {
  const cityName = refs.cityName.textContent.split(',')[0];
  fetchWeather.weatherFor5Days(cityName).then(data => {
    onBtnFiveDayClick(data);
    $(document).width(function(){
      $('.five-days-weather-list').slick({
          arrows:true,
         draggable: false,
          slidesToShow:6, 
          slidesToScroll:6,
          infinite:false,
          responsive: [
            {breakpoint: 768,settings: { slidesToShow: 3, slidesToScroll: 1 }},
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
    fetchWeather.currentWeather(refs.searchFormInput.value).then(data => {
      if (data === null) {
        refs.searchFormInput.value = '';
        return;
      }
      renderingCurrentWeather(data);
    });
    localStorageInput();
    fetchImage.fetchImage(refs.searchFormInput.value).then(data => {
      if (data === null) {
        return error({
          text: "Can't show such city!",
        });
      } else if (data.value === undefined) {
        return error({
          text: "Please write search city!",
        });
      } else {
        return refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
      }
    });
  }, 1000)
})