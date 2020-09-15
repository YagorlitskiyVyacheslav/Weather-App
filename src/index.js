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
import localStorageInput from './js/localStorage';
import formStar from './js/favorite-sity-star';
import { error, defaultModules } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';


document.addEventListener('DOMContentLoaded', preloader.start());
document.addEventListener('DOMContentLoaded', geolocation);
refs.onClickBtnOneDay.addEventListener(`click`, onBtnOneDayClick);
refs.onClickBtnFiveDay.addEventListener('click', () => {
  const cityName = refs.cityName.textContent.split(',')[0];
  fetchWeather.weatherFor5Days(cityName).then(data => {
    onBtnFiveDayClick(data);
  })
});
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