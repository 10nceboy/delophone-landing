import { toggleOverflow } from '../utils/dom.js';

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.header__burger');
  const burgerCloseButton = document.querySelector('.header__burger_opened');
  const changeButtonColor = document.querySelector(
    '.header_start-button_mobile'
  );
  const dropdowns = document.querySelector('.header__dropdown');


  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('header__burger_hidden');
    changeButtonColor.classList.add('active');
    document.querySelector('.header').classList.add('header_active');
    toggleOverflow(true);
  });

  burgerCloseButton.addEventListener('click', () => {
    burgerButton.classList.remove('header__burger_hidden');
    changeButtonColor.classList.remove('active');
    document.querySelector('.header').classList.remove('header_active');
    dropdowns.classList.remove('active');
    toggleOverflow(false);
  });

});


