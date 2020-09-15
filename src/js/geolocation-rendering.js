import fetchWeather from './fetch-weather';
import refs from './refs';
import fetchImage from './fetch-bg-image';
import { onBtnOneDayClick, onBtnFiveDayClick } from './markUpFiveDay';
import renderingCurrentWeather from './renderingCurrentWeather';


const onGetPositionSuccess = (location) => {
  const coords = {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
  };
  fetchWeather.searchWeaherByGeoOnCurrentDay(coords).then(data => renderingCurrentWeather(data))
};
const onGetPositionError = (error) => {
  error.defaultCity = () => {
    fetchWeather.currentWeather('Kyiv').then(data => renderingCurrentWeather(data));
  };
  error.defaultCity();
  fetchImage.fetchImage('Kyiv').then(data => {
    refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
  });
};
export default () => {
  navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError
  );
};

