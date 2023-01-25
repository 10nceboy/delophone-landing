import { toggleOverflow } from '../utils/dom';

const overlay = document.querySelector('.overlay');

const hideModal = (modal) => {
  modal?.classList.remove('modal_active');
  overlay.classList.remove('overlay_active');
  modal?.classList.remove('modal_visible');
  toggleOverflow(false);
};

const showModal = (modal) => {
  overlay.classList.add('overlay_active');
  modal?.classList.add('modal_visible');
  window.setTimeout(() => {
    modal.classList.add('modal_active');
  }, 100);
  toggleOverflow(true);
};

document.querySelectorAll('.modal__activator').forEach((activator) => {
  const modalId = activator.dataset.modal;
  const modal = document.querySelector(`.modal[data-modal="${modalId}"]`);

  if (modal) {
    activator.addEventListener('click', () => {
      showModal(modal);
    });
  }
});

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('mouseup', (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (modal.classList.contains('modal_active')) {
      hideModal(modal);
    }
  });
  modal.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (modal.classList.contains('modal_active')) {
      hideModal(modal);
    }
  });
});
