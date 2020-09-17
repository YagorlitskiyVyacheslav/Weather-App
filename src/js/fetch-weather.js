import refs from "./refs";
import moment from 'moment';
moment().format();


function SortArrayForDays(data) {
  let newObj = {};
  let dateForDay = [];
  data.list.forEach(everyDay => {
    if (dateForDay[0] != everyDay.dt_txt.split(' ')[0]) {
      dateForDay = everyDay.dt_txt.split(' ');
      newObj[dateForDay[0]] = [];
      newObj[dateForDay[0]].push(everyDay);
    } else {
      newObj[dateForDay[0]].push(everyDay);
    }
  });
  const newArr = []
  for (let key in newObj) {
    newArr.push(newObj[key]);
  }

  return newArr;
}

function getNameDayWeek(data) {
  if (data === 0) return 'Sunday';
  if (data === 1) return 'Monday';
  if (data === 2) return 'Tuesday';
  if (data === 3) return 'Wednesday';
  if (data === 4) return 'Thoursday';
  if (data === 5) return 'Friday';
  if (data === 6) return 'Saturday';
}

function getNameMonth(data) {
  if (data === 0) return 'Jan';
  if (data === 1) return 'Feb';
  if (data === 2) return 'Mar';
  if (data === 3) return 'Apr';
  if (data === 4) return 'May';
  if (data === 5) return 'Jun';
  if (data === 6) return 'Jul';
  if (data === 7) return 'Aug';
  if (data === 8) return 'Sep';
  if (data === 9) return 'Oct';
  if (data === 10) return 'Nov';
  if (data === 11) return 'Dec';
}

export default {
  apiKey: 'a34e0daebedc4e667c5896b64f2b27c9',
  baseUrl: 'https://api.openweathermap.org/data/2.5',
  weatherFor5Days(cityName) {
    const searchOptions = `/forecast?q=${cityName}&units=metric&appid=${this.apiKey}`;
    return fetch(this.baseUrl + searchOptions)
      .then(res => res.json())
      .then(data => {
        const result = [];
        let id = 0;
        data.list = SortArrayForDays(data);
        data.list.forEach((day, i) => {
          let dayOfTheWeek = new Date((day[0].dt - new Date().getTimezoneOffset()*60+data.city.timezone) * 1000).getDay();
          let dateMonth = new Date((day[0].dt - new Date().getTimezoneOffset()*60+data.city.timezone) * 1000).getDate();
          let month = new Date((day[0].dt - new Date().getTimezoneOffset()*60+data.city.timezone) * 1000).getMonth();
          dayOfTheWeek = getNameDayWeek(dayOfTheWeek);
          month = getNameMonth(month);

          let min = 100;
          let max = 0;
          day.forEach(element => {
            if (element.main.temp_min < min) min = element.main.temp_min;
            if (element.main.temp_max > max) max = element.main.temp_max;

            const time = element.dt_txt.split(' ')[1]
            element.time = `${time.split(':')[0]}:${time.split(':')[1]}`;
            
            element.icon = element.weather[0].icon;
            element.main.temp_min = Math.round(element.main.temp_min);
            element.main.temp_max = Math.round(element.main.temp_max);
            element.main.temp = Math.round(element.main.temp);
            delete element.clouds;
            delete element.pop;
            delete element.sys;
            delete element.visibility;
            delete element.dt;
            delete element.main.feels_like;
            delete element.main.grnd_level;
            delete element.main.sea_level;
            delete element.main.temp_kf;
            delete element.weather;
            delete element.dt_txt;
          })
          result.push({
            forecast: [...day]
          });
          result[i].id = id;
          id ++;
          result[i].day = dayOfTheWeek;
          result[i].date = dateMonth;
          result[i].month = month;
          if(result[i] === result[0]) {
            result[i].icon = result[i].forecast[0].icon;
          } else {
            result[i].icon = result[i].forecast[2].icon;
          }
          result[i].minTemperature = Math.round(min);
          result[i].maxTemperature = Math.round(max);
          result[i].city = data.city.name;
        });
        return result;
      })
      .catch(err => err)
  },
  currentWeather(cityName) {
    const params = `/weather?q=${cityName}&units=metric&appid=${this.apiKey}`;
    return fetch(this.baseUrl + params)
      .then(res => res.json())
      .then(data => {
        if(data.cod === '404') return null;
        if(data.cod === '400') return null;
        const result = {};
        result.timezone = data.timezone;
        result.icon = data.weather[0].icon;
        result.name = data.name;
        result.country = data.sys.country;
        result.sunrise = `${new Date((data.sys.sunrise)*1000+(-10800+data.timezone)*1000).getHours()}:${new Date((data.sys.sunrise)*1000+(-10800+data.timezone)*1000).getMinutes()}`;
        result.sunset = `${new Date(data.sys.sunset*1000).getHours()}:${new Date(data.sys.sunset*1000).getMinutes()}`;
        result.currentTemp = Math.round(data.main.temp);
        result.tempMin = Math.round(data.main.temp_min);
        result.tempMax = Math.round(data.main.temp_max);
        return result;
      }).catch(err => err);
  },
  searchWeaherByGeoOn5Days({lat, lon}) {
    const params = `/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`;
    return fetch(this.baseUrl + params)
      .then(res => res.json())
      .then(data => data.name)
      .then(cityName => this.weatherFor5Days(cityName));
  },
  searchWeaherByGeoOnCurrentDay({lat, lon}) {
    const params = `/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`;
    return fetch(this.baseUrl + params)
      .then(res => res.json())
      .then(data => data.name)
      .then(cityName => this.currentWeather(cityName));
  }
}