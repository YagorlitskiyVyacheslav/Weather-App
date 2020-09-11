
export default () => { 


document.addEventListener('DOMContentLoaded', ()=> 1000, qubeAnimation);

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

  
}}
