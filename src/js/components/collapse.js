import {
  scrollToElement,
  isInViewport,
  transitionEnter,
  transitionLeave
} from '../utils/dom';

const renderArrow = (collapse) => {
  const arrow = collapse.querySelector('.collapse__arrow');
  if (arrow) {
    arrow.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.7998 22.4L15.9998 10.4L3.1998 22.4" stroke="#2B8FEB" stroke-linecap="round"/>
    </svg>
  `;
    return arrow;
  }
};

let scrolling = false;
const animationDruation = 400;

document.addEventListener('DOMContentLoaded', () => {
  const collapsibles = document.querySelectorAll('.collapse');
  const starter = document.getElementById('start');

  collapsibles.forEach((collapse) => {
    let animated = false;
    const arrow = renderArrow(collapse);
    let state = false;
    const content = collapse.querySelector('.collapse__content');
    const activator = collapse.querySelector('.collapse__activator');

    collapse.addEventListener('click', () => {
      if (animated) {
        return false;
      }
      state = !state;
      animated = true;
      window.setTimeout(() => (animated = false), 320);

      if (arrow) {
        arrow.classList.toggle('collapse__arrow_active');
      }

      if (state) {
        activator.classList.toggle('collapse__activator_active');
        transitionEnter(content, 'collapse__content');
        starter.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'end' });
      } else {
        transitionLeave(content, 'collapse__content');
        window.setTimeout(() => {
          activator.classList.toggle('collapse__activator_active');
        }, animationDruation);
      }

      window.setTimeout(() => {
        if (state && !isInViewport(content)) {
          scrolling = true;
          scrollToElement(collapse);
          starter.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'end' });

          window.setTimeout(() => (scrolling = false), animationDruation);
        }
      }),
        animationDruation;
    });
    content.addEventListener('click', (event) => event.stopPropagation());
  });
});
