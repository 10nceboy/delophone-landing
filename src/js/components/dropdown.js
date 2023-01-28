import { clickOutside } from '../utils/dom';

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  const setDropdownValue = (dropdown, value) => {
    const button = dropdown.querySelector('.dropdown__button');
    dropdown.dataset.value = value;
    button.innerText = value;
  };

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () =>
      dropdown.classList.toggle('active')
    );

    const items = dropdown.querySelectorAll('.dropdown__menu li');

    /** handle item click => dispatch syntetic event  */
    items.forEach((dropdownItem) => {
      dropdownItem.addEventListener('click', () => {
        if (dropdown.dataset.value) {
          setDropdownValue(dropdown, dropdownItem.dataset.value);
        }
      });
    });

    clickOutside(dropdown, () => dropdown.classList.remove('active'));
  });
});
