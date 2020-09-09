import './sass/main.scss';
// import './styles.css';
import fiveDaysWeatherList from './tamplates/5day-tamplates.hbs';

const refs = {
  weatherContainer: document.querySelector('.weatherContainer'),
  onClickFiveDay: document.querySelector('.fiveDaysCityWeatherList__item'),
  
};
refs.onClickFiveDay.addEventListener(`click`, onBtnClick);

function onBtnClick(e){
event.preventDefault();
console.log(event.target.value)
}
