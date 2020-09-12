import fetchWeater from './fetch-weather';
import refs from './refs';
import fiveDaysWeatherList from '../template/fiveDays-template.hbs';
import hourlyWeatherList from '../template/hourlyDay-template.hbs';


const switchBtn = {
  isActiveBtnOneDay: true,
  isActiveBtnFiveDay: false,
};

const onBtnOneDayClick = function () {
  if (!this.isActiveBtnOneDay) {
    return;
  }
  this.isActiveBtnOneDay = false;
  refs.onClickBtnFiveDay.classList.remove('weather-button-active');
  refs.onClickBtnFiveDay.classList.add('weather-button-unactive');
  refs.onClickBtnOneDay.classList.remove('weather-button-unactive');
  refs.onClickBtnOneDay.classList.add('weather-button-active');
  refs.containerWeatherToday.style.display = 'flex';
  refs.weatherContainer.style.display = 'none';
  refs.timerContainer.style.display = 'flex';
  refs.blickQuote.style.display = 'block';
  refs.weatherContainer.innerHTML = '';
  this.isActiveBtnFiveDay = false;
  return;
};

const onBtnFiveDayClick = function () {
  if (this.isActiveBtnFiveDay) {
    console.log('in5', this.isActiveBtnFiveDay);
    return;
  }
  this.isActiveBtnFiveDay = true;
  refs.onClickBtnFiveDay.classList.remove('weather-button-unactive');
  refs.onClickBtnFiveDay.classList.add('weather-button-active');
  refs.onClickBtnOneDay.classList.remove('weather-button-active');
  refs.onClickBtnOneDay.classList.add('weather-button-unactive');
  refs.timerContainer.style.display = 'none';
  refs.containerWeatherToday.style.display = 'none';
  refs.weatherContainer.style.display = 'block';
  refs.blickQuote.style.display = 'none';
  this.isActiveBtnOneDay = true;
  fetchWeater.weatherFor5Days(refs.searchFormInput.value).then(data => {
    console.log(data);
    const markUp = fiveDaysWeatherList(data);
    refs.weatherContainer.insertAdjacentHTML('beforeend', markUp);
    const onClickMoreInfo = document.querySelector(
      '.fiveDaysCityWeatherList__item',
    );

    onClickMoreInfo.addEventListener(`click`, () => {
      const onClickMoreInfo = document.querySelector(
        '.fiveDaysCityWeatherList__item',
      );
      onClickMoreInfo.classList.add('activContainer');
      const contWeatherHourl = document.querySelector(
        '.fiveDaysCityWeather__hourly',
      );
      const markUpHourly = hourlyWeatherList(data);
      contWeatherHourl.insertAdjacentHTML('beforeend', markUpHourly);
      const hourlyWeatherContainerClose = document.querySelector(
        '.hourly-weather-close',
      );
      hourlyWeatherContainerClose.addEventListener(`click`, () => {
        contWeatherHourl.innerHTML = '';
      });
      return markUpHourly;
    });
    return markUp;
  });
};

refs.onClickBtnOneDay.addEventListener(
  `click`,
  onBtnOneDayClick.bind(switchBtn),
);

refs.onClickBtnFiveDay.addEventListener(
  `click`,
  onBtnFiveDayClick.bind(switchBtn),
);