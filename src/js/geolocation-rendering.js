import fetchWeather from './fetch-weather';
import refs from './refs';

export default {
    onGetPositionSuccess(location) {
      const coords = {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      };
      fetchWeather.searchWeaherByGeoOnCurrentDay(coords).then(data => {
        refs.cityName.innerHTML = `${data.name}, ${data.country}`;
        refs.currentWeatherIcon.src = `https://openweathermap.org/img/w/${data.icon}.png`;
        refs.tempToday.innerHTML = `${data.currentTemp}`;
        refs.tempTodayMin.innerHTML = `${data.tempMin}`;
        refs.tempTodayMax.innerHTML = `${data.tempMax}`;
      })
    },
    onGetPositionError(error) {
      console.log(error)
      error.defaultCity = () => {
        fetchWeather.currentWeather('Kyiv').then(data => {
          refs.cityName.innerHTML = `${data.name}, ${data.country}`;
          refs.currentWeatherIcon.src = `https://openweathermap.org/img/w/${data.icon}.png`;
          refs.tempTodayMin.innerHTML = `${data.tempMin}`;
          refs.tempTodayMax.innerHTML = `${data.tempMax}`;
        })
      };
      error.defaultCity();
    }
}
const onGetPositionSuccess = location => {
  const coords = {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
  };
  fetchWeather.searchWeaherByGeoOnCurrentDay(coords).then(data => {
    refs.cityName.innerHTML = `${data.name}, ${data.country}`;
    refs.currentWeatherIcon.src = `https://openweathermap.org/img/w/${data.icon}.png`;
    refs.tempToday.innerHTML = `${data.currentTemp}`;
    refs.tempTodayMin.innerHTML = `${data.tempMin}`;
    refs.tempTodayMax.innerHTML = `${data.tempMax}`;
  })
};
const onGetPositionError = error => {
  console.log(error)
  error.defaultCity = () => {
    fetchWeather.currentWeather('Kyiv').then(data => {
      refs.cityName.innerHTML = `${data.name}, ${data.country}`;
      refs.currentWeatherIcon.src = `https://openweathermap.org/img/w/${data.icon}.png`;
      refs.tempTodayMin.innerHTML = `${data.tempMin}`;
      refs.tempTodayMax.innerHTML = `${data.tempMax}`;
    })
  };
  error.defaultCity();
}

