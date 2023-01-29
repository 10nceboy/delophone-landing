import { scrollToElement } from '../utils/dom';

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

document.addEventListener('DOMContentLoaded', () => {
  const collapsibles = document.querySelectorAll('.collapse');

  collapsibles.forEach((collapse) => {
    let animated = false;
    const arrow = renderArrow(collapse);
    const content = collapse.querySelector('.collapse__content');
    collapse.addEventListener('click', () => {
      if (animated) {
        return false;
      }
      animated = true;
      window.setTimeout(() => (animated = false), 200);
      content.classList.toggle('collapse__content_visible');
      if (arrow) {
        arrow.classList.toggle('collapse__arrow_active');
      }
      requestAnimationFrame(() => {
        if (collapse.classList.contains('collapse__content_visible')) {
          scrollToElement(content);
        }
      });
    });
    content.addEventListener('click', (event) => event.stopPropagation());
  });
});