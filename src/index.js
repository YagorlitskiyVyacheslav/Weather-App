import './sass/main.scss';
import refs from './js/refs';
import fetchWeather from './js/fetch-weather';
import fetchImage from './js/fetch-bg-image';
import quotes from './js/quote';
import timerDate from './js/timer-date';
import preloader from './js/preloader'
import geolocation from './js/geolocation-rendering';
import { onBtnOneDayClick, onBtnFiveDayClick } from './js/markUpFiveDay';
import renderingCurrentWeather from './js/renderingCurrentWeather';
import { error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import carousel from './js/slick-carousel';
require ('jquery');
require ('slick-carousel');
import $ from 'jquery';

 window.$ = window.jQuery = $;



document.addEventListener('DOMContentLoaded', preloader())
document.addEventListener('DOMContentLoaded', geolocation.getWeather);
refs.onClickBtnOneDay.addEventListener(`click`, onBtnOneDayClick);
refs.onClickBtnFiveDay.addEventListener('click', () => {
  const cityName = refs.cityName.textContent.split(',')[0];
  fetchWeather.weatherFor5Days(cityName).then(data => {
    onBtnFiveDayClick(data);
    $(document).width(function(){
      $('.fiveDaysCityWeatherList').slick({
          arrows:true, // показать стрелки
          dots:false, // не показывать точки
          slidesToShow:3, // показывать по 3 слайда
          slidesToScroll:1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
            
              }
            }
          ]
      });
  });
});
});
refs.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  preloader();
  onBtnOneDayClick();
  fetchWeather.currentWeather(refs.searchFormInput.value).then(data => {
    if(data === null) return;
    renderingCurrentWeather(data);
  });
  refs.favoriteCityStar.addEventListener('click', () => {
    localStorage.setItem('town', [`${refs.searchFormInput.value}`]);
    refs.favoriteCityList.insertAdjacentHTML('beforeend', `<li class="search-form__favorite-item">${refs.searchFormInput.value}</li>`);
    if (localStorage.getItem('town').indexOf(`${refs.searchFormInput.value}`) != -1) {
      return;
    }
  })
  fetchImage.fetchImage(refs.searchFormInput.value).then(data => {
      if(data === null) return;
      refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
  });
})