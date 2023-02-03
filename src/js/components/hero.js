import { isTouchDevice } from '../utils/dom';

let timeoutIdOver = null;
let timeoutIdOut = null;

let over = false;
const delayMS = 100;

const smoothContentSwitch = (element, newContent) => {
  element.style.opacity = 0;
  setTimeout(() => {
    element.innerHTML = newContent;
    element.style.transition = 'opacity 0.2s ease-in-out';
    element.style.opacity = 1;
  }, 200);
};

if (!isTouchDevice()) {
  const heroBtn = document.querySelector('.hero__button button');
  const label = document.querySelector('.hero__label span');
  const originalContent = label.textContent;
  const newContent = '⚡️ Сразу после регистрации';

  heroBtn.addEventListener('mouseover', () => {
    clearTimeout(timeoutIdOut);

    timeoutIdOver = setTimeout(() => {
      over = true;

      smoothContentSwitch(label, newContent);
    }, delayMS);
  });

  heroBtn.addEventListener('mouseout', () => {
    clearTimeout(timeoutIdOver);
    if (over === true) {
      timeoutIdOut = setTimeout(() => {
        smoothContentSwitch(label, originalContent);
        over = false;
      }, delayMS);
    }
  });
}

/**fix hero iamge drag */

const hero = document.querySelector('#hero');

hero.addEventListener('mousedown', (event) => {
  if (event.target === hero) {
    event.preventDefault();
  }
});
