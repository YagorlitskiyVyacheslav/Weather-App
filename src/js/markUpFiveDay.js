import fetchWeater from './fetch-weather';
import refs from './refs';
import fiveDaysWeatherList from '../template/fiveDays-template.hbs';
import hourlyWeatherList from '../template/hourlyDay-template.hbs';
import { slider2 } from './slick-carousel';
import { each } from 'jquery';

let isActiveBtnOneDay = true;
let isActiveBtnFiveDay = false;


const onBtnOneDayClick = function () {
  if (!isActiveBtnOneDay) {
    return;
  }
  isActiveBtnOneDay = false;
  refs.onClickBtnFiveDay.classList.remove('weather-button-active');
  refs.onClickBtnFiveDay.classList.add('weather-button-unactive');
  refs.onClickBtnOneDay.classList.remove('weather-button-unactive');
  refs.onClickBtnOneDay.classList.add('weather-button-active');
  refs.containerWeatherToday.style.display = 'flex';
  refs.weatherContainer.style.display = 'none';
  refs.timerContainer.style.display = 'flex';
  refs.blickQuote.style.display = 'block';
  refs.weatherContainer.innerHTML = '';
  isActiveBtnFiveDay = false;
  return;
};

const onBtnFiveDayClick = function (data) {
  if (isActiveBtnFiveDay) {
    return;
  }
  console.log(data)
  isActiveBtnFiveDay = true;
  refs.onClickBtnFiveDay.classList.remove('weather-button-unactive');
  refs.onClickBtnFiveDay.classList.add('weather-button-active');
  refs.onClickBtnOneDay.classList.remove('weather-button-active');
  refs.onClickBtnOneDay.classList.add('weather-button-unactive');
  refs.timerContainer.style.display = 'none';
  refs.containerWeatherToday.style.display = 'none';
  refs.weatherContainer.style.display = 'block';
  refs.blickQuote.style.display = 'none';
  isActiveBtnOneDay = true;
    const markUp = fiveDaysWeatherList(data);
    refs.weatherContainer.insertAdjacentHTML('beforeend', markUp);
    const cityTitle = document.querySelector('.five-days-city-title');
    cityTitle.textContent = refs.cityName.textContent;
    const onClickMoreInfo = document.querySelector(
      '.five-days-weather-list',
    );

// start

    // const ActivTeg =document.querySelectorAll('.five-days-weather-list__item');
    // console.dir(ActivTeg)
   

// Функциональный forEach
// ActivTeg.forEach(teg => console.log(teg));

// Указываем параметр idx если нужен доступ к счетчику
// ActivTeg.forEach((teg, idx) => console.log(`index ${idx}, value ${teg}`));

    // ActivTeg.addEventListener(`click`, (e) => {
    //   let elemId
    // console.log(e)
    // // if(elemId!==e.target.dataset.id){
    // //   elemId=e.target.dataset.id
    // //   console.log(elemId, "activ")
     
    // //   ActivTeg.classList.add('.active-day')
    // // }
    // // console.dir(e.target)
    // })



// end

    onClickMoreInfo.addEventListener(`click`, (e) => {
      if(!e.target.dataset.id)return;
      const contWeatherHourl = document.querySelector(
        '.five-days-weather__hourly',
      );
      contWeatherHourl.innerHTML = '';
      const markUpHourly = hourlyWeatherList(data[e.target.dataset.id]);
      contWeatherHourl.insertAdjacentHTML('beforeend', markUpHourly);
     slider2();
      const hourlyWeatherContainerClose = document.querySelector(
        '.hourly-weather-close',

      );
      hourlyWeatherContainerClose.addEventListener(`click`, () => {
        contWeatherHourl.innerHTML = '';
      });
  });
};
export {
  onBtnOneDayClick,
  onBtnFiveDayClick
}