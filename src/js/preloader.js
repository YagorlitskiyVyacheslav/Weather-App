import refs from './refs';


export default () => { 
 refs.preloader.classList.add('display-block');

 setTimeout(() => {
   refs.preloader.classList.remove('display-block')
 }, 1000)

}
