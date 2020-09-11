import fetchWeather from './fetch-weather';
import refs from './refs';
import fetchImage from './fetch-bg-image'

const renderingCurrentWeather = (data) => {
 refs.cityName.innerHTML = `${data.name}, ${data.country}`;
 refs.currentWeatherIcon.src = `https://openweathermap.org/img/w/${data.icon}.png`;
 refs.tempToday.innerHTML = `${data.currentTemp}`;
 refs.tempTodayMin.innerHTML = `${data.tempMin}`;
 refs.tempTodayMax.innerHTML = `${data.tempMax}`;
 refs.sunrise.innerHTML = `${data.sunrise}`;
 refs.sunset.innerHTML = `${data.sunset}`
}
export default {
    onGetPositionSuccessCurrentDay(location) {
      const coords = {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      };
      
      fetchWeather.searchWeaherByGeoOnCurrentDay(coords).then(data => {
        renderingCurrentWeather(data);
        console.log(data.name)
      })
    },
    onGetPositionErrorCurrentDay(error) {
      error.defaultCity = () => {
        fetchWeather.currentWeather('Kyiv').then(data => {
          renderingCurrentWeather(data);
        })
      };
      error.defaultCity();
      fetchImage.fetchImage('Kyiv').then(data => {
        refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
      });
    }
}

