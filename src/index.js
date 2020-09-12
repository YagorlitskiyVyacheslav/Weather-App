import './sass/main.scss';

import refs from './js/refs';
import fetchWeather from './js/fetch-weather';
import fetchImage from './js/fetch-bg-image';
import quotes from './js/quote';
import preloader from './js/preloader'
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
  preloader();
  fetchWeather.currentWeather(refs.searchFormInput.value).then(data => {
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
      refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
  });
})