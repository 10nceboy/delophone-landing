import Swiper, { Navigation } from 'swiper';

document.addEventListener('DOMContentLoaded', async () => {
  await import('swiper/css/bundle');
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    speed: 500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      }
    },
    grabCursor: true,
    draggable: true,
    autoplay: 5000,
    navigation: {
      nextEl: '.carousel__button_next',
      prevEl: '.carousel__button_prev'
    },
    resizeObserver: true
  });
});
