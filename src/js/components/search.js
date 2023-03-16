import { transitionEnter } from '../utils/dom';

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search__input');
  const submitButton = document.querySelector('.search__submit-button');
  const search = document.querySelector('.search');
  const closeButton = document.querySelector('.search__close-button');
  const cardNumbers = document.querySelectorAll('.choose__phone-number');

  const onSearchLeave = () => {
    closeButton.classList.remove('search__close-button_active');
    submitButton.classList.remove('search__submit-button_active');
    setTimeout(() => {
      closeButton.classList.remove('search__close-button_visible');
      submitButton.classList.remove('search__submit-button_visible');
      searchInput.classList.remove('search__input_active');
    }, 200);
  };

  const onSearchStart = () => {
    transitionEnter(submitButton, 'search__submit-button');
    transitionEnter(closeButton, 'search__close-button');
    transitionEnter(searchInput, 'search__input');
  };

  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.trim();
    let re = new RegExp(searchTerm.split('').join('[\\s-]*'), 'gi');
    cardNumbers.forEach((card) => {
      const numbers = card.querySelectorAll('i');

      numbers.forEach((number) => {
        const text = number.textContent;
        const matches = text.matchAll(re);
        if (matches) {
          const highlightedText = text.replace(
            re,
            '<i class="search__highlight">$&</i>'
          );
          number.innerHTML = highlightedText;
        }
        closeButton.addEventListener('click', () => {
          number.textContent = text;
        });
      });
    });
  });

  searchInput.addEventListener('keyup', (event) => {
    if (event.target.value.length == 0) {
      onSearchLeave();
    } else {
      onSearchStart();
    }
  });

  closeButton.addEventListener('click', (event) => {
    onSearchLeave();
    searchInput.value = '';
  });

  searchInput.addEventListener('keydown', (event) => {
    const allowedKeys = [
      'Enter',
      'Tab',
      'Backspace',
      'Delete',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '(',
      ')',
      '?',
      '*'
    ];

    if (allowedKeys.includes(event.key)) {
      return true;
    }
    event.preventDefault();
  });
});
