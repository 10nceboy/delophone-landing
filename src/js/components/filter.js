import { clickOutside } from '../utils/dom';

const activators = document.querySelectorAll('.filter__activator');
const items = document.querySelectorAll('.filter__item');
const filterDropdownButton = document.querySelector('.filter__dropdown-button');
const filterDropdown = document.querySelector('.filter__wrapper');
const filterReset = document.querySelector('.filter__reset');

const renderArrow = () => {
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
    const topFilters = ['cities', 'mobiles', '8800'];
    const bottomFilters = ['usuals', 'bronze', 'silver', 'gold', 'vip'];

    if (searchId !== 'phones') {
      filterReset.classList.remove('filter__reset_active');
    } else {
      filterReset.classList.add('filter__reset_active');
    }

    if (!topFilters.includes(filterId)) {
      filterDropdownButton.innerHTML = activator.innerHTML;
    }

    const arrow = document.querySelector('.filter__arrow');

    arrow.classList.remove('filter__arrow_active');
    const parentActivators = event.target
      .closest('.filter__activators')
      .querySelectorAll('.filter__activator_active');

    parentActivators.forEach((activator) => {
      activator.classList.remove('filter__activator_active');
    });

    event.target.classList.add('filter__activator_active');

    const filterItem = document.querySelector(
      `.filter__item[data-filter="${filterId}"]`
    );

    if (bottomFilters.includes(filterId)) {
      items.forEach((content) => {
        content.classList.remove('filter__item_active');
      });
      filterItem.classList.add('filter__item_visible');
      requestAnimationFrame(() => {
        filterItem.classList.add('filter__item_active');
        filterItem.classList.remove('filter__item_visible');
      });
    }
  });
});

clickOutside(filterDropdown, () => {
  const arrow = document.querySelector('.filter__arrow');
  if (arrow) arrow.classList.remove('filter__arrow_active');
});
