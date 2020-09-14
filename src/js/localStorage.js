import refs from './refs';
import fetchWeather from './fetch-weather';
import renderingCurrentWeather from './renderingCurrentWeather';
import preloader from './preloader';

let cityArray = localStorage.getItem('town') ? JSON.parse(localStorage.getItem('town')) : [];
localStorage.setItem('town', JSON.stringify(cityArray))
const data = JSON.parse(localStorage.getItem('town'));
const createCityItem = (item) => {
  refs.favoriteCityList.insertAdjacentHTML('beforeend', `<li class="favorite-list__item">
          <p class="favorite-list__item-link">${item}</p>
          <button class="favorite-list__item-close">&#10006;</button>
        </li>`);
};

refs.favoriteCityList.addEventListener('click', (e) => {
  if (e.target.classList.contains('favorite-list__item-link')) {
      preloader();
      refs.searchFormInput.value = e.target.textContent;
      fetchWeather.currentWeather(refs.searchFormInput.value).then(data => {
        if (data === null) return;
        renderingCurrentWeather(data);
      });
  }
})
data.forEach(item => {
    createCityItem(item);
});

const setInputValue = (e) => {
    e.preventDefault();
    if(cityArray.indexOf(refs.searchFormInput.value) != -1) {
        return;
    }
    cityArray.push(refs.searchFormInput.value);
    localStorage.setItem('town', JSON.stringify(cityArray));
    refs.favoriteCityStar.removeEventListener('click', setInputValue);
    console.log(refs.favoriteCityList)
    createCityItem(refs.searchFormInput.value);
};

export default () => {
    refs.favoriteCityStar.addEventListener('click', setInputValue);
}

