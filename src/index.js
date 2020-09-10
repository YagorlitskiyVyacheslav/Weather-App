import './sass/main.scss';

import fetchWeather from './js/fetch-weather';
import fetchImage from './js/fetch-bg-image';
import refs from './js/refs';
import quotes from './js/quote';
import geolocation from './js/geolocation-rendering';

navigator.geolocation.getCurrentPosition(
  geolocation.onGetPositionSuccess,
  geolocation.onGetPositionError
);