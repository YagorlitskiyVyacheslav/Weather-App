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
<<<<<<< HEAD
  refs.favoriteCityStar.addEventListener('click', () => {
    localStorage.setItem('town', [`${refs.searchFormInput.value}`]);
    refs.favoriteCityList.insertAdjacentHTML('beforeend', `<li class="search-form__favorite-item">${refs.searchFormInput.value}</li>`);
    if (localStorage.getItem('town').indexOf(`${refs.searchFormInput.value}`) != -1) {
      return;
    }
  })
})

=======

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
>>>>>>> 20d4aab48d8d48d76fe5e86cb27ed53155cfc629
