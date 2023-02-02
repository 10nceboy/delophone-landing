import { clickOutside, itemTransition } from '../utils/dom';

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

  let state = false;

  const closeDropdown = (content) => {
    content?.classList.remove('dropdown__content_active');
    content.addEventListener(
      'transitionend',
      () => {
        content?.classList.remove('dropdown__content_visible');
      },
      { once: true }
    );
  };

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
          itemTransition(content, 'dropdown__content', state);
        } else {
          closeDropdown(content);
        }
      });
      content
        .querySelector('.dropdown__close')
        .addEventListener('click', () => {
          state = !state;

          closeDropdown(content);
        });
    }
    return;
  }

  let dropdownState = false;

  dropdown.addEventListener('click', () => {
    dropdownState = !dropdownState;

    itemTransition(dropdown, 'dropdown', dropdownState);
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
    dropdownState = false;
  });
});
