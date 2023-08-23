import { toggleOverflow } from '../utils/dom.js';

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.header__burger');
  const burgerCloseButton = document.querySelector('.header__burger_opened');
  const changeButtonColor = document.querySelector(
    '.header_start-button_mobile'
  );
  const dropdowns = document.querySelector('.header__dropdown');
  const overlay = document.querySelector('.overlay');

  burgerButton?.addEventListener('click', () => {
    burgerButton.classList.toggle('header__burger_hidden');
    changeButtonColor.classList.add('active');
    document.querySelector('.header').classList.add('header_active');
    overlay.classList.add('overlay__active');
    document.querySelector('.container-bottom').style.display = 'block';
    toggleOverflow(true);
  });

  burgerCloseButton?.addEventListener('click', () => {
    burgerButton.classList.remove('header__burger_hidden');
    changeButtonColor.classList.remove('active');
    document.querySelector('.header').classList.remove('header_active');
    dropdowns.classList.remove('active');
    overlay.classList.remove('overlay__active');
    document.querySelector('.container-bottom').style.display = 'none';
    toggleOverflow(false);
  });
});
