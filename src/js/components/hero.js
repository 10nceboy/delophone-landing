import { isTouchDevice } from '../utils/dom';

let timeoutIdOver = null;
let timeoutIdOut = null;

let over = false;
const delayMS = 100;

const smoothContentSwitch = (element, newContent) => {
  element.style.opacity = 0;
  setTimeout(() => {
    element.innerHTML = newContent;
    element.style.transition = 'opacity 0.15s ease-in-out';
    element.style.opacity = 1;
  }, 150);
};

if (!isTouchDevice()) {
  const heroBtn = document.querySelector('.hero__button button');
  const heroBtn8800 = document.querySelector('.hero__button8800 button');
  const label = document.querySelector('.hero__label span');
  const label2 = document.querySelector('.num8800__hero-label-2 span');
  const originalContent = label.textContent;
  const originalContent2 = label2.textContent;
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

  heroBtn8800.addEventListener('mouseover', () => {
    clearTimeout(timeoutIdOut);

    timeoutIdOver = setTimeout(() => {
      over = true;

      smoothContentSwitch(label2, newContent);
    }, delayMS);
  });

  if (heroBtn8800) {
    heroBtn8800?.addEventListener('mouseout', () => {
      clearTimeout(timeoutIdOver);
      if (over === true) {
        timeoutIdOut = setTimeout(() => {
          smoothContentSwitch(label2, originalContent2);
          over = false;
        }, delayMS);
      }
    });
  }
}

/**fix hero iamge drag */

const hero = document.querySelector('#hero');
const hero8800 = document.querySelector('#hero8800');

hero.addEventListener('mousedown', (event) => {
  if (event.target === hero) {
    event.preventDefault();
  }
});

if (hero8800) {
  hero8800.addEventListener('mousedown', (event) => {
    if (event.target === hero) {
      event.preventDefault();
    }
  });
}
