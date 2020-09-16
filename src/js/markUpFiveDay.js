import fetchWeater from './fetch-weather';
import refs from './refs';
import fiveDaysWeatherList from '../template/fiveDays-template.hbs';
import hourlyWeatherList from '../template/hourlyDay-template.hbs';


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
    onClickMoreInfo.addEventListener(`click`, (e) => {
      if(!e.target.dataset.id)return;
      const contWeatherHourl = document.querySelector(
        '.five-days-weather__hourly',
      );
      // if(!e.target.dataset)
      // // $(document).width(function(){
      //   $('.hourly-weather-list').slick({
      //       arrows:true,
      //      draggable: false,
      //       slidesToShow:5, 
      //       slidesToScroll:1,
      //       infinite:false,
      //       fill: false,
      //       horizontalAlign: "center",
      //       verticalAlign: "50%",
      //       responsive: [
      //         {breakpoint: 768,settings: { slidesToShow: 3, slidesToScroll: 1 }},
      //         { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      //       ]
      //   });
      // });
    
      contWeatherHourl.innerHTML = '';
      const markUpHourly = hourlyWeatherList(data[e.target.dataset.id]);
      contWeatherHourl.insertAdjacentHTML('beforeend', markUpHourly);
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