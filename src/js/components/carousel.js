import Swiper, { Navigation } from 'swiper';

document.addEventListener('DOMContentLoaded', async () => {
  await import('swiper/css/bundle');

  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    speed: 500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      }
    },
    cssMode: true,
    navigation: {
      nextEl: '.carousel__button_next',
      prevEl: '.carousel__button_prev'
    }
  });
});