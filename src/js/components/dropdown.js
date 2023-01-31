import { clickOutside } from '../utils/dom';

const dropdowns = document.querySelectorAll('.dropdown');

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

  if (isInline) {
    const dropdownId = dropdown.dataset.dropdown;
    const content = document.querySelector(
      `.dropdown__content[data-dropdown="${dropdownId}"]`
    );

    if (content) {
      activator.addEventListener('click', () => {
        content?.classList.toggle('dropdown__content_visible');
        requestAnimationFrame(() => {
          content?.classList.toggle('dropdown__content_active');
        });
      });
      content
        .querySelector('.dropdown__close')
        .addEventListener('click', () => {
          content?.classList.toggle('dropdown__content_active');
        });
    }
    return;
  }

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
