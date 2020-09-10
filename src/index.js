import './sass/main.scss';

import fetchWeather from './js/fetch-weather';
import fetchImage from './js/fetch-bg-image';
import refs from './js/refs';
import quotes from './js/quote';

fetchWeather.weatherFor5Days('london').then(data => console.log(data));

document.addEventListener('DOMContentLoaded', qubeAnimation);

function qubeAnimation() {
  let scene = document.querySelector('.gw-parts-scene');

  if (!!!scene) {
    return;
  }

  for (let i = 0; i < 2; i++) {
    qwcreatePart(scene);
  }

  function qwcreatePart(scene) {
    let part = document.createElement('div');

    part.classList.add('gw-part');

    let partItem = document.createElement('div');

    partItem.classList.add('gw-part__item');

    scene.appendChild(partItem);

    scene.appendChild(part);
  }
  gsap.to('.gw-part', {
    duration: 30,
    x: -500,
    y: -440,
    borderRadius: '15px',
    rotate: 500,
    backgroundColor: 'transparent',
    border: '5px solid rgba(255, 255, 255, 0.6)',
    scale: 1.2,
    repeat: 50,
  });

  gsap.to('.gw-part__item', {
    duration: 30,
    borderRadius: '15px',
    x: 460,
    y: -410,
    rotate: 340,
    backgroundColor: 'transparent',
    border: '5px solid rgba(255, 255, 255, 0.6)',
    scale: 1.2,
    repeat: 50,
  });
}
