import {
  clickOutside,
  getDeviceType,
  transitionEnter,
  transitionLeave
} from '../utils/dom';

const dropdowns = document.querySelectorAll('.dropdown');
/**
 * Set value of dropdown in data-value attribute
 * @param {HTMLElement} dropdown
 * @param {any} value
 */
const setDropdownValue = (dropdown, value) => {
  const button = dropdown.querySelector('.dropdown__button');
  dropdown.dataset.value = value;
  button.innerText = value;
};

dropdowns.forEach((dropdown) => {
  const isInline = dropdown.classList.contains('dropdown_inline');

  /**handlers for inline dropdowns */
  const activator = isInline
    ? dropdown
    : dropdown.querySelector('.dropdown__button');

  let state = false;

  if (isInline) {
    const dropdownId = dropdown.dataset.dropdown;
    const content = document.querySelector(
      `.dropdown__content[data-dropdown="${dropdownId}"]`
    );

    if (content) {
      activator.addEventListener('click', (event) => {
        event.preventDefault();
        state = !state;
        if (state) {
          activator.classList.add('dropdown_active');
          transitionEnter(content, 'dropdown__content');
        } else {
          transitionLeave(content, 'dropdown__content');
          activator.classList.remove('dropdown_active');
        }
      });
      content
        .querySelector('.dropdown__close')
        .addEventListener('click', () => {
          state = !state;
          transitionLeave(content, 'dropdown__content');
        });
    }
    return;
  }

  dropdown.addEventListener('click', () => {
    state = !state;
    if (state) {
      transitionEnter(dropdown, 'dropdown');
    } else {
      transitionLeave(dropdown, 'dropdown');
    }
  });

  if (dropdown.dataset.value) {
    const items = dropdown.querySelectorAll('.dropdown__menu li');

    items.forEach((dropdownItem) => {
      dropdownItem.addEventListener('click', () => {
        if (dropdown.dataset.value) {
          setDropdownValue(dropdown, dropdownItem.dataset.value);
        }
      });
    });
  }

  const deviceType = getDeviceType();

  clickOutside(dropdown, () => {
    if (
      (['mobile', 'smartphone'].includes(deviceType) &&
        dropdown.classList.contains('dropdown_mobile')) ||
      dropdown.classList.contains('dropdown_tablet')
    ) {
      return;
    }
    dropdown.classList.remove('dropdown_active', 'dropdown_visible');
    state = false;
  });
});