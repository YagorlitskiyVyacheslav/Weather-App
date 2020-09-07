import './sass/main.scss';

import fetchWeater from './js/fetch-weater';
import refs from './js/refs';

Object.defineProperty(Array.prototype, 'chunk', {
  value: function (chunkSize) {
    var that = this;
    return Array(Math.ceil(that.length / chunkSize)).fill().map(function (_, i) {
      return that.slice(i * chunkSize, i * chunkSize + chunkSize);
    });
  }
});

fetchWeater.weatherFor5Days('london').then(data => {
    // const result = data.list.chunk(8);
    // data.list = result;
    // console.log(data)
    // data.list.forEach(day => {
    //     let min = 100;
    //     let max = 0;
    //     // console.log(element)
    //     day.forEach(element => {
    //         if (element.main.temp_min < min) min = element.main.temp_min;
    //         if (element.main.temp_max > max) max = element.main.temp_max;
    //         // const date =element.dt;
    //         // console.log(new Date(date * 1000))
    //     })
    //     data.main = {
    //         temp_min: min,
    //         temp_max: max,
    //         icon: day[4].weather[0].icon,
    //     }
    // });
    console.log(data)
})