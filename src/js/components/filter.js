import { clickOutside } from '../utils/dom';

const activators = document.querySelectorAll('.filters__activator');
const items = document.querySelectorAll('.filters__item');
const filterDropdownButton = document.querySelector(
  '.filters__dropdown-button'
);
const filterDropdown = document.querySelector('.filter__wrapper');
const errorReset = document.querySelector('.search__error-button');
const filterReset = document.querySelector('.filter__reset');

const renderArrow = (filters) => {
  const arrow = document.querySelector('.filter__arrow');
  if (arrow) {
    arrow.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `;
    return arrow;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const arrow = renderArrow(filterDropdownButton);
  filterDropdown.addEventListener('click', () => {
    const arrow = document.querySelector('.filter__arrow');
    arrow.classList.toggle('filter__arrow_active');
  });
});

activators.forEach((activator) => {
  activator.addEventListener('click', (event) => {
    const filterId = event.currentTarget.dataset.filter;
    const searchId = event.currentTarget.dataset.search;
    if (searchId !== 'phones') {
      filterReset.classList.remove('filter__reset_active');
    } else {
      filterReset.classList.add('filter__reset_active');
    }

    const filterItem = document.querySelector(
      `.filters__item[data-filter="${filterId}"]`
    );
    filterDropdownButton.innerHTML = activator.innerHTML;

    const arrow = document.querySelector('.filter__arrow');
    arrow.classList.remove('filter__arrow_active');

    activators.forEach((activator) => {
      activator.classList.remove('filters__activator_active');
    });

    event.target.classList.add('filters__activator_active');

    items.forEach((content) => {
      content.classList.remove('filters__item_active');
    });

    filterItem.classList.add('filters__item_visible');
    requestAnimationFrame(() => {
      filterItem.classList.add('filters__item_active');
      filterItem.classList.remove('filters__item_visible');
    });
  });
});

clickOutside(filterDropdown, () => {
  const arrow = document.querySelector('.filter__arrow');
  if (arrow) arrow.classList.remove('filter__arrow_active');
});

errorReset.addEventListener('click', () => {
  activators.forEach((activator) => {
    activator.classList.remove('filters__activator_active');
    filterItem.classList.add('filters__item_visible');
  });
});
