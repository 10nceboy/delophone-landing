import { scrollToElement, isInViewport, itemTransition } from '../utils/dom';

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
const animationDruation = 500;

document.addEventListener('DOMContentLoaded', () => {
  const collapsibles = document.querySelectorAll('.collapse');

  collapsibles.forEach((collapse) => {
    let animated = false;
    const arrow = renderArrow(collapse);
    let state = false;
    const content = collapse.querySelector('.collapse__content');
    collapse.addEventListener('click', () => {
      if (animated || scrolling) {
        return false;
      }
      animated = true;
      window.setTimeout(() => (animated = false), 400);

      if (arrow) {
        arrow.classList.toggle('collapse__arrow_active');
      }

      state = !state;

      if (state) {
        itemTransition(content, 'collapse__content', state);
        collapse
          .querySelector('.collapse__activator')
          .classList.toggle('collapse__activator_active');
      } else {
        content.classList.remove('collapse__content_active');
        content.classList.remove('collapse__content_visble');
        window.setTimeout(() => {
          collapse
            .querySelector('.collapse__activator')
            .classList.toggle('collapse__activator_active');
        }, animationDruation);
      }

      window.setTimeout(() => {
        if (state && !isInViewport(content)) {
          scrolling = true;
          scrollToElement(collapse);
          window.setTimeout(() => (scrolling = false), 300);
        }
      }),
        animationDruation;
    });
    content.addEventListener('click', (event) => event.stopPropagation());
  });
});
