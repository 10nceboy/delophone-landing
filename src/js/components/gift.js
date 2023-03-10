import { clickOutside } from '../utils/dom';

document.addEventListener('DOMContentLoaded', () => {
  const gift = document.querySelector('.gift');
  const giftButton = document.querySelector('.gift__button');
  const giftCloseButton = document.querySelector('.gift__close-button');

  giftButton.addEventListener('click', () => {
    gift.classList.toggle('gift_active');
  });

  giftCloseButton.addEventListener('click', () => {
    gift.classList.remove('gift_active');
  });
});
