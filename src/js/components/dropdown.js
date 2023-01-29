import { clickOutside } from '../utils/dom';

const dropdowns = document.querySelectorAll('.dropdown');

const setDropdownValue = (dropdown, value) => {
  const button = dropdown.querySelector('.dropdown__button');
  dropdown.dataset.value = value;
  button.innerText = value;
};

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown_active');
    requestAnimationFrame(() => dropdown.classList.toggle('dropdown_visible'));
  });
  const items = dropdown.querySelectorAll('.dropdown__menu li');
  items.forEach((dropdownItem) => {
    dropdownItem.addEventListener('click', () => {
      if (dropdown.dataset.value) {
        setDropdownValue(dropdown, dropdownItem.dataset.value);
      }
    });
  });
  clickOutside(dropdown, () => {
    dropdown.classList.remove('dropdown_active', 'dropdown_visible');
  });
});