import fetchWeather from './fetch-weather';
import refs from './refs';
import fetchImage from './fetch-bg-image';
import { onBtnOneDayClick, onBtnFiveDayClick } from './markUpFiveDay';
import renderingCurrentWeather from './renderingCurrentWeather';
import updateTimer from './timer-date';

const onGetPositionSuccess = location => {
  const coords = {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
  };
  fetchWeather.searchWeaherByGeoOnCurrentDay(coords).then(data => {
    renderingCurrentWeather(data);
    const timerID = updateTimer(data.timezone);
    refs.searchForm.addEventListener('submit', () => {
      clearInterval(timerID);
    });
  });
};
const onGetPositionError = error => {
  error.defaultCity = () => {
    fetchWeather.currentWeather('Kyiv').then(data => {
      renderingCurrentWeather(data);
      const timerID = updateTimer(data.timezone);
      refs.searchForm.addEventListener('submit', () => {
        clearInterval(timerID);
      });
    });
  };
  error.defaultCity();
  fetchImage.fetchImage('Kyiv').then(data => {
    refs.backgroundRef.setAttribute(
      'style',
      `background-image: url("${data.largeImg}")`,
    );
  });
};
export default () => {
  navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
  );
};
