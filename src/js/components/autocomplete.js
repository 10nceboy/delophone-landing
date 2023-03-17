import { autocompleteCities } from '../constants/autocomplete-cities';
import { debounce } from '../utils/common';
import { clickOutside, transitionEnter, transitionLeave } from '../utils/dom';

const renderArrow = (autocomplete) => {
  const arrow = autocomplete.querySelector('.autocomplete__arrow');
  if (arrow) {
    arrow.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `;
    return arrow;
  }
};

const autocomplete = document.querySelector('.autocomplete');
const autocompleteWrapper = document.querySelector(
  '.autocomplete__input-wrapper'
);
const autocompleteInput = document.querySelector('.autocomplete__input');
const arrow = renderArrow(autocomplete);
const arrowWrapper = document.querySelector('.autocomplete__arrow-wrapper');

const searchCloseButton = document.querySelector('.autocomplete__close-button');

function handleOptionClick(event) {
  const { target } = event;
  autocompleteInput.value = target.innerHTML;
  const autocompleteOptions = document.querySelector('.autocomplete__options');
  transitionLeave(autocompleteOptions, 'autocomplete__options');
  window.setTimeout(() => {
    removeautocompleteOptions();
  }, 300);
  arrow.classList.remove('autocomplete__arrow_active');
  searchCloseButton.classList.remove('autocomplete__close-button_active');
  event.stopImmediatePropagation();
}

const createautocompleteOptions = (list) => {
  const autocompleteOptions = document.createElement('ul');
  autocompleteOptions.className = 'autocomplete__options';
  autocompleteOptions.id = 'autocomplete__options';
  autocomplete.appendChild(autocompleteOptions);
  list.forEach((item) => {
    const autocompleteOption = document.createElement('li');
    autocompleteOption.innerHTML = item;
    autocompleteOptions.appendChild(autocompleteOption);
    autocompleteOption.className = 'autocomplete__option-item';
    autocompleteOption.addEventListener('click', handleOptionClick);
  });
};
const removeautocompleteOptions = () => {
  const autocompleteOptions = document.querySelector('#autocomplete__options');
  if (autocompleteOptions) {
    const options = autocompleteOptions.querySelectorAll(
      '.autocomplete__option'
    );
    options.forEach((option) =>
      option.removeEventListener('click', handleOptionClick)
    );
    autocompleteOptions.remove();
  }
};
const renderFilteredList = (inputValue) => {
  removeautocompleteOptions();
  const preparedValue = inputValue.toLowerCase().trim();
  const filteredCities = autocompleteCities.filter((cityName) =>
    cityName.toLowerCase().trim().includes(preparedValue)
  );
  if (!filteredCities.length) {
    createautocompleteOptions(['Нет подходящих городов']);
    const autocompleteOptions = document.querySelector(
      '.autocomplete__options'
    );
    autocompleteOptions.classList.add('autocomplete__options_disabled');

    document
      .querySelector('.autocomplete__option-item')
      .classList.add('autocomplete__option-item_disabled');
    return;
  }
  createautocompleteOptions(filteredCities);
  const autocompleteOptions = document.querySelector('.autocomplete__options');
  autocompleteOptions.classList.add('autocomplete__options_active');
};

const renderFilteredListDebounced = debounce(renderFilteredList);

autocompleteInput.addEventListener('input', (event) => {
  const inputValue = event.target.value.toString().toLowerCase().trim();
  renderFilteredListDebounced(inputValue);
  if (inputValue) {
    searchCloseButton.classList.add('autocomplete__close-button_active');
  } else
    searchCloseButton.classList.remove('autocomplete__close-button_active');
});

clickOutside(autocomplete, () => {
  const autocompleteOptions = document.querySelector('.autocomplete__options');
  if (autocompleteOptions) {
    arrow.classList.remove('autocomplete__arrow_active');
    transitionLeave(autocompleteOptions, 'autocomplete__options');
    window.setTimeout(() => {
      removeautocompleteOptions();
    }, 100);
  }
});

autocompleteWrapper.addEventListener('click', (event) => {
  event.stopImmediatePropagation();
  arrow.classList.add('autocomplete__arrow_active');
  const autocompleteOptions = document.querySelector('.autocomplete__options');
  if (!autocompleteOptions) {
    createautocompleteOptions(autocompleteCities);
    const autocompleteOptions = document.querySelector(
      '.autocomplete__options'
    );
    transitionEnter(autocompleteOptions, 'autocomplete__options');
  } else {
    transitionLeave(autocompleteOptions, 'autocomplete__options');
    window.setTimeout(() => {
      removeautocompleteOptions();
    }, 100);
    arrow.classList.remove('autocomplete__arrow_active');
  }
});

arrowWrapper.addEventListener('click', (event) => {
  event.stopImmediatePropagation();
  arrow.classList.add('autocomplete__arrow_active');
  const autocompleteOptions = document.querySelector('.autocomplete__options');
  if (!autocompleteOptions) {
    createautocompleteOptions(autocompleteCities);
    const autocompleteOptions = document.querySelector(
      '.autocomplete__options'
    );
    transitionEnter(autocompleteOptions, 'autocomplete__options');
  } else {
    transitionLeave(autocompleteOptions, 'autocomplete__options');
    window.setTimeout(() => {
      removeautocompleteOptions();
    }, 100);
    arrow.classList.remove('autocomplete__arrow_active');
  }
});

searchCloseButton.addEventListener('click', (event) => {
  autocompleteInput.value = '';
  removeautocompleteOptions();
  createautocompleteOptions(autocompleteCities);
  autocompleteInput.focus();
  document
    .querySelector('.autocomplete__options')
    .classList.add('autocomplete__options_active');
  searchCloseButton.classList.remove('autocomplete__close-button_active');
});
autocompleteInput.addEventListener('click', (event) => {
  if (event.target.value.trim() !== '')
    searchCloseButton.classList.add('autocomplete__close-button_active');
});
