import './sass/main.scss';

import refs from './js/refs';
import fetchWeather from './js/fetch-weather';
import fetchImage from './js/fetch-bg-image';
import quotes from './js/quote';
import preloader from './js/preloader'
import geolocation from './js/geolocation-rendering';
import { onBtnOneDayClick, onBtnFiveDayClick } from './js/markUpFiveDay';
import renderingCurrentWeather from './js/renderingCurrentWeather';
import { error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


document.addEventListener('DOMContentLoaded', preloader())

document.addEventListener('DOMContentLoaded', () => {
  navigator.geolocation.getCurrentPosition(
    geolocation.onGetPositionSuccess,
    geolocation.onGetPositionError
  );
});
refs.onClickBtnOneDay.addEventListener(`click`, onBtnOneDayClick);

refs.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  preloader();
  if (refs.searchFormInput.value.length === 0) {
    error({
      text: "Please write search city!",
    });
  } else {
    fetchImage.fetchImage(refs.searchFormInput.value).then(data => {
      if (data.largeImg === undefined) {
        error({
          text: "Can't show such city!",
        });
      } else {
        refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
      }
    });
  }
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
  refs.onClickBtnFiveDay.addEventListener(`click`, () => {
    onBtnFiveDayClick(refs.searchFormInput.value)
  });
  fetchImage.fetchImage(refs.searchFormInput.value).then(data => {
      refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
  });
})