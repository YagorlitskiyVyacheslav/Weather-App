import refs from "./refs";


const apiKey = 'a34e0daebedc4e667c5896b64f2b27c9';
export default {
    baseUrl: 'http://api.openweathermap.org/data/2.5',
    weatherFor5Days(cityName) {
        const searchOptions = `/forecast?q=${cityName}&units=metric&appid=${apiKey}`;
        return fetch(this.baseUrl + searchOptions)
          .then(res => res.json())
          .then(data => data)
          .catch(err => err)
    }
}