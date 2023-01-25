import { toggleOverflow } from '../utils/dom';

const overlay = document.querySelector('.overlay');

const hideModal = (modal) => {
  modal?.classList.remove('modal__active');
};

const showModal = (modal) => {
  modal?.classList.add('modal_active');
};

document.querySelectorAll('.modal__activator').forEach((activator) => {
  const modalId = activator.dataset.modal;
  const modal = document.querySelector(`.modal[data-modal="${modalId}"]`);

  if (modal) {
    activator.addEventListener('click', () => {
      showModal(modal);
      overlay.classList.add('overlay_active');
      toggleOverflow(true);
    });

    overlay.addEventListener('click', () => {
      hideModal(modal);
    });
  }
});

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', () => {
    if (e.target !== e.currentTarget) {
      return;
    }
    if (modal.classList.contains('modal_active')) {
      hideModal(modal);
    }
  });
});
