import { toggleOverflow } from '../utils/dom';

const overlay = document.querySelector('.overlay');

const hideModal = (modal, activator) => {
  modal?.classList.remove('modal_active');
  overlay?.classList.remove('overlay_active');
  modal?.classList.remove('modal_visible');
  toggleOverflow(false);
  if (activator?.dataset.hide) {
    activator.style.display = '';
  }
};

const showModal = (modal, activator) => {
  overlay?.classList.add('overlay_active');
  modal?.classList.add('modal_visible');
  setTimeout(() => {
    modal.classList.add('modal_active');
  }, 100);
  toggleOverflow(true);
  if (activator?.dataset?.hide) {
    activator.style.display = 'none';
  }
};

document.querySelectorAll('.modal__activator').forEach((activator) => {
  const modalId = activator.dataset.modal;
  const modal = document.querySelector(`.modal[data-modal="${modalId}"]`);
  if (modal) {
    activator.addEventListener('click', () => {
      showModal(modal, activator);
    });
  }
});

document.querySelectorAll('.modal').forEach((modal) => {
  const modalId = modal.dataset.modal;

  const activator = document.querySelector(
    `.modal__activator[data-modal="${modalId}"]`
  );

  modal.addEventListener('mouseup', (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (modal.classList.contains('modal_active')) {
      hideModal(modal, activator);
    }
  });

  modal
    .querySelector('.modal__close')
    .addEventListener('click', () => hideModal(modal, activator));

  modal.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (modal.classList.contains('modal_active')) {
      hideModal(modal, activator);
    }
  });
});
