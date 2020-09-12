import refs from './refs';
import moment from 'moment';
moment().format();


function updateDayOfWeek(){
    const today = moment();
    const dayIsToday = today.format('ddd');
    refs.dayOfWeek.innerHTML = dayIsToday;
}
updateDayOfWeek();

function updateDayOfMonth() {
    const number = moment();
    const dayOfTheMonth = number.format('DD');
    refs.dayOfMonth.innerHTML = dayOfTheMonth;
}
updateDayOfMonth();

function updateMonth() {
    const mounth = moment();
    const currentMounth = mounth.format('MMMM');
    refs.monthSpan.innerHTML = currentMounth;
}
updateMonth();  

// refs.dayOfWeek.addEventListener('load', updateDayOfWeek());
// refs.dayOfMonth.addEventListener('load', updateDayOfMonth());
// refs.monthSpan.addEventListener('load', updateMonth());


function updateTime() {
const now = moment();
const currentTime = now.format('HH:mm:ss');
refs.timeSpan.textContent = currentTime;
}
 setInterval(updateTime, 1000);