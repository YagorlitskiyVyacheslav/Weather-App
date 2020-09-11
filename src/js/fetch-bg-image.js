import refs from './refs';

export default {
    apiKey: '17953661-fbb86eb9264530d2720389de2',
    baseUrl: `https://pixabay.com/api/`,
    fetchImage(query) {
        const params = `?image_type=photo&orientation=vertical&q=${query}&key=${this.apiKey}`;
        return fetch(this.baseUrl + params)
            .then(res => res.json())
            .then(data => {
                const result = { largeImg: data.hits[0].largeImageURL, smallImg: data.hits[0].webformatURL }

                return result;
            })
            .catch(err => err)
    }
};

refs.searchForm.addEventListener("submit", onBackgroundPhoto)

function onBackgroundPhoto(event) {
    event.preventDefault()

    const inputRef = document.querySelector('.search-form__input');
    const backgroundRef = document.querySelector('.background-image');

    if (inputRef.value.length !== 0) {

        fetchImage.fetchImage(inputRef.value).then(data => {
            if (data.largeImg !== undefined) {
                backgroundRef.setAttribute("style", `background-image: url("${data.largeImg}")`);
            } else {
                console.log('alert');
                //TODO: alert що немає такого міста 
            }
        });

    } else {
        console.log('alert');
        //TODO: alert що нічого не ввели в input 
    }

}