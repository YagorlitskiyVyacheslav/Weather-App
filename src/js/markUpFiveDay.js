import fetchWeater from './fetch-weather';
import refs from './refs';
import fiveDaysWeatherList from '../template/fiveDays-template.hbs';
import hourlyWeatherList from '../template/hourlyDay-template.hbs';




 const switchBtn ={
  isActive :false,
  // activeBtnOneDay,
  // activeBtnFiveDay,
 
 onBtnOneDayClick(){


  if (this.isActive){
      return
  }
  
  this.isActive = true;
  
     refs.onClickBtnFiveDay.classList.remove("weather-button-active");
     refs.onClickBtnFiveDay.classList.add("weather-button-unactive");
     refs.onClickBtnOneDay.classList.remove("weather-button-unactive");
     refs.onClickBtnOneDay.classList.add("weather-button-active");
     refs. containerWeatherToday.style.display = 'flex';
     refs.weatherContainer.style.display = 'none';
     refs.weatherContainer.innerHTML = '';
    return
    },
    
    onBtnFiveDayClick(){
     if (this.isActive){
        return
    }

    this.isActive = true;
    refs.onClickBtnFiveDay.classList.remove("weather-button-unactive");
    refs.onClickBtnFiveDay.classList.add("weather-button-active");
    refs.onClickBtnOneDay.classList.remove("weather-button-active");
    refs.onClickBtnOneDay.classList.add("weather-button-unactive");
    refs. containerWeatherToday.style.display = 'none';
    refs.weatherContainer.style.display = 'block';
  
   fetchWeater.weatherFor5Days('london').then(data =>{ 
     
       const markUp = fiveDaysWeatherList(data);
       refs.weatherContainer.insertAdjacentHTML('beforeend', markUp);
       const onClickMoreInfo=document.querySelector('.fiveDaysCityWeatherList__item');
    

         onClickMoreInfo.addEventListener(`click`,(e) =>{
           const onClickMoreInfo=document.querySelector('.fiveDaysCityWeatherList__item');
            onClickMoreInfo.classList.add("activContainer") 
            const contWeatherHourl = document.querySelector('.fiveDaysCityWeather__hourly');
            const markUpHourly = hourlyWeatherList(data);
            contWeatherHourl.insertAdjacentHTML('beforeend', markUpHourly);
            return markUpHourly
         });
    
       return markUp
      });
       
     },
    
 }
refs.onClickBtnOneDay.addEventListener(`click`, switchBtn.onBtnOneDayClick);
 refs.onClickBtnFiveDay.addEventListener(`click`, switchBtn.onBtnFiveDayClick) ;


 switchBtn.onBtnOneDayClick()
 switchBtn.onBtnFiveDayClick()