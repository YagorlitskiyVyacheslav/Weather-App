import refs from './refs';

const data = JSON.parse(localStorage.getItem('town'));

export default {
    addClassFillYellow() {
        console.log(refs.searchFormInput.value.toLowerCase())
        console.log(data)
        console.log(data.indexOf(refs.searchFormInput.value.toLowerCase()) )
        if (data.indexOf(refs.searchFormInput.value.toLowerCase()) !== -1) {
            refs.favoriteCityStar.classList.add('search-form__star--yelow')
        }
    },
    removeClassFillYellow() {
        refs.favoriteCityStar.classList.remove('search-form__star--yelow');
    }
}

