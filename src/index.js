import './sass/main.scss';

import fetchWeater from './js/fetch-weather';
import refs from './js/refs';
import quotes from './js/quote';

const onGetPositionSuccess = (location) => {
    console.log(location.coords.latitude)

}

navigator.geolocation.getCurrentPosition(onGetPositionSuccess)

fetchWeater.weatherFor5Days('london').then(data => console.log(data))