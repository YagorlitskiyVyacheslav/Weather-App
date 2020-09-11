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
  fetchWeather.currentWeather(refs.searchFormInput.value).then(data => {
    renderingCurrentWeather(data);
  });

  if (refs.searchFormInput.value.length !== 0) {

    fetchImage.fetchImage(refs.searchFormInput.value).then(data => {
      if (data.largeImg !== undefined) {
        refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
      } else {
        console.log('alert');
        //TODO: alert що немає такого міста 
      }
    });

  } else {
    console.log('alert');
    //TODO: alert що нічого не ввели в input 
  }
})