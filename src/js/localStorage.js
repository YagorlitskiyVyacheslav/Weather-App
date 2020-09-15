import refs from './refs';
import fetchWeather from './fetch-weather';
import fetchImage from './fetch-bg-image';
import renderingCurrentWeather from './renderingCurrentWeather';
import preloader from './preloader';

let cityArray = localStorage.getItem('town') ? JSON.parse(localStorage.getItem('town')) : [];
localStorage.setItem('town', JSON.stringify(cityArray))
const data = JSON.parse(localStorage.getItem('town'));

const createCityItem = (item, index) => {
  refs.favoriteCityList.insertAdjacentHTML('beforeend', `<li class="favorite-list__item">
          <p class="favorite-list__item-link">${item}</p>
          <button class="favorite-list__item-close">&#10006;</button>
        </li>`);
        
};
const removeFavoriteItem = (index) => {
    const favoriteListItem = document.querySelectorAll('.favorite-list__item');
    favoriteListItem[index].addEventListener('click', (e) => {
      if (e.target.localName === 'button') {
        refs.favoriteCityList.removeChild(favoriteListItem[index]);
        cityArray.forEach((item, i) => {
          if (item === favoriteListItem[index].childNodes[1].textContent) {
            cityArray.splice(i, 1);
            localStorage.setItem('town', JSON.stringify(cityArray))
          }
        })
      }
    })
}
refs.favoriteCityList.addEventListener('click', (e) => {
  if (e.target.classList.contains('favorite-list__item-link')) {
      preloader.search();
      refs.searchFormInput.value = e.target.textContent;
      fetchWeather.currentWeather(refs.searchFormInput.value).then(data => {
        if (data === null) return;
        renderingCurrentWeather(data);
      });
      fetchImage.fetchImage(refs.searchFormInput.value).then(data => {
        if (data === null) return;
        refs.backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
      });
  }
})
data.forEach((item, index) => {
    createCityItem(item);
    removeFavoriteItem(index)
});

const setInputValue = (e) => {
    e.preventDefault();
    if(cityArray.indexOf(refs.searchFormInput.value.toLowerCase()) != -1) {
        return;
    }
    cityArray.push(refs.searchFormInput.value.toLowerCase());
    localStorage.setItem('town', JSON.stringify(cityArray));
    refs.favoriteCityStar.removeEventListener('click', setInputValue);
    createCityItem(refs.searchFormInput.value);
    cityArray.forEach((item, i) => {
        removeFavoriteItem(i)
    })
};

export default () => {
    refs.favoriteCityStar.addEventListener('click', setInputValue);
}

