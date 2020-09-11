import fetchWeater from './fetch-weather';
import refs from './refs';
import fiveDaysWeatherList from '../template/fiveDays-template.hbs';
import hourlyWeatherList from '../template/hourlyDay-template.hbs';



const isActiveBtnFiveDay = false;
 const switchBtn ={
  isActiveBtnOneDay :true,
  // isActiveBtnFiveDay: false,
 
 onBtnOneDayClick(){
  // console.log("do",this.isActiveBtnOneDay);
  //  if (!this.isActiveBtnOneDay){
  //   console.log("in",this.isActiveBtnOneDay);
  //     return
  //  };
    //  this.isActiveBtnOneDay =false;
     refs.onClickBtnFiveDay.classList.remove("weather-button-active");
     refs.onClickBtnFiveDay.classList.add("weather-button-unactive");
     refs.onClickBtnOneDay.classList.remove("weather-button-unactive");
     refs.onClickBtnOneDay.classList.add("weather-button-active");
     refs. containerWeatherToday.style.display = 'flex';
     refs.weatherContainer.style.display = 'none';
     refs.weatherContainer.innerHTML = '';
    //  console.log("after",this.isActiveBtnOneDay);
  //  return  this.iaActiveBtnFiveDay = false;
  
    },
    

    onBtnFiveDayClick(){
    //   console.log("do5" ,this.isActiveBtnFiveDay);
     if (activeBtnFiveDay){
      // console.log("in5" ,this.isActiveBtnFiveDay);
        return;
      };
      
      isActiveBtnFiveDay =true;
    refs.onClickBtnFiveDay.classList.remove("weather-button-unactive");
    refs.onClickBtnFiveDay.classList.add("weather-button-active");
    refs.onClickBtnOneDay.classList.remove("weather-button-active");
    refs.onClickBtnOneDay.classList.add("weather-button-unactive");
    refs. containerWeatherToday.style.display = 'none';
    refs.weatherContainer.style.display = 'block';
    // console.log(this.isActiveBtnFiveDay)
    
    // return  this.isActiveBtnOneDay=true;
   fetchWeater.weatherFor5Days('london').then(data =>{ 
     
       const markUp = fiveDaysWeatherList(data);
       refs.weatherContainer.insertAdjacentHTML('beforeend', markUp);
       const onClickMoreInfo=document.querySelector('.fiveDaysCityWeatherList__item');
       

         onClickMoreInfo.addEventListener(`click`,(e) =>{
           const onClickMoreInfo=document.querySelector('.fiveDaysCityWeatherList__item');
            onClickMoreInfo.classList.add("activContainer") ;
            const contWeatherHourl = document.querySelector('.fiveDaysCityWeather__hourly');
            const markUpHourly = hourlyWeatherList(data);
            contWeatherHourl.insertAdjacentHTML('beforeend', markUpHourly);
            return markUpHourly
         });
       
       return markUp
       
      });
      console.log("after5" ,this.isActiveBtnFiveDay);
   }
 }


refs.onClickBtnOneDay.addEventListener(`click`, switchBtn.onBtnOneDayClick);
 refs.onClickBtnFiveDay.addEventListener(`click`, switchBtn.onBtnFiveDayClick) ;


//  switchBtn.onBtnOneDayClick()
//  switchBtn.onBtnFiveDayClick()