import { isTouchDevice, toggleOverflow } from '../utils/dom';
import { smoothScrollSafari } from '../utils/polyfill';

const scrollToSectionByLink = (link) => {
  const section = document.querySelector(link.getAttribute('href'));
  if (section) {
    if ('scrollBehavior' in document.documentElement.style) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      smoothScrollSafari(section);
    }
  }
};

document.querySelectorAll('.menu-link').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
  const start = document.querySelector('.header_start-button_mobile');

  link.parentNode.addEventListener('click', (event) => {
    event.preventDefault();

    if (isTouchDevice()) {
      const burgerButton = document.querySelector('.header__burger');

      const header = document.querySelector('.header_active');

      if (header) {
        header.classList.remove('header_active');

        burgerButton.classList.remove('header__burger_hidden');
        start.classList.remove('active');

        toggleOverflow(false);
        setTimeout(() => {
          scrollToSectionByLink(link);
        }, 200);

        return;
      }
    }
    scrollToSectionByLink(link);
  });
});
