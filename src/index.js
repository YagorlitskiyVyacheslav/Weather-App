import './sass/main.scss';

import fetchWeather from './js/fetch-weather';
import fetchImage from './js/fetch-bg-image';
import refs from './js/refs';
import quotes from './js/quote';
import  preloader from './js/preloader'
import geolocation from './js/geolocation-rendering';
import markUpFiveDays from './js/markUpFiveDay';
import renderingCurrentWeather from './js/renderingCurrentWeather';

document.addEventListener('DOMContentLoaded', preloader())

document.addEventListener('DOMContentLoaded', () => {
  navigator.geolocation.getCurrentPosition(
    geolocation.onGetPositionSuccessCurrentDay,
    geolocation.onGetPositionErrorCurrentDay
  );
})
refs.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchWeather.currentWeather(refs.searchFormInput.value).then(data => {
    renderingCurrentWeather(data);
  });
})
