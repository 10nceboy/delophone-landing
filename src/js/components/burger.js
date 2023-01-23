import { toggleOverflow } from '../utils/dom.js';

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.header__menu');
  const burgerCloseButton = document.querySelector('.header__burger_opened');
  const loginPhoneNumber = document.querySelector('.login__phone-number');
  const dropdownButton = document.querySelector('.dropdown__button');
  const menuOverlay = document.querySelector('body');
  const changeButtonColor = document.querySelector(
    '.header_start-button_mobile'
  );
  const loginButton = document.querySelector('.button__login-button ');
  const heroHidden = document.querySelector('hero');

  burgerButton.addEventListener('click', () => {
    menuOverlay.classList.toggle('overlay_gray');
    headerMenu.classList.add('active');
    burgerButton.classList.toggle('header__burger_hidden');
    burgerCloseButton.classList.toggle('active');
    loginPhoneNumber.classList.toggle('active');
    dropdownButton.classList.toggle('active');
    menuOverlay.classList.toggle('overlay_gray', 'lock');
    changeButtonColor.classList.add('active');
    loginButton.classList.toggle('active');
    heroHidden.classList.toggle('hidden');
  });

  burgerCloseButton.addEventListener('click', () => {
    menuOverlay.classList.toggle('overlay_gray');
    headerMenu.classList.remove('active');
    burgerButton.classList.remove('header__burger_hidden');
    burgerCloseButton.classList.remove('active');
    loginPhoneNumber.classList.toggle('active');
    dropdownButton.classList.toggle('active');
    changeButtonColor.classList.remove('active');
    loginButton.classList.toggle('active');
    heroHidden.classList.toggle('hid');
  });
});
