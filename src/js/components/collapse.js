import { smoothScroll } from '../utils/dom';

document.addEventListener('DOMContentLoaded', () => {
  const collapsibles = document.querySelectorAll('.collapse');

  collapsibles.forEach((collapse) => {
    const content = collapse.querySelector('.collapse__content');
    let opened = false;
    let animating = false;
    const collapseH = parseInt(getComputedStyle(collapse).height) + 25;

    collapse.addEventListener('click', () => {
      if (animating) {
        return;
      }
      animating = true;
      if (!opened) {
        collapse.style.height = '';
        collapse.classList.add('collapse_before-open');
        requestAnimationFrame(() => {
          const contentHeight = parseInt(getComputedStyle(content).height);
          collapse.style.height = `${contentHeight + collapseH}px`;
          requestAnimationFrame(() => {
            collapse.classList.add('collapse_active');
            smoothScroll(collapse, 'start', 0);
          });
          collapse.addEventListener('transitionend', () => {
            animating = false;
          });
        });
      } else {
        collapse.style.height = '';
        collapse.classList.remove('collapse_active');
      }
      opened = !opened;
    });

    content.addEventListener('click', (event) => event.stopPropagation());
  });
});
