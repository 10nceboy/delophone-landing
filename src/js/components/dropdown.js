import {
  clickOutside,
  getDeviceType,
  isTouchDevice,
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
    const starterCity = document.getElementById('start-city');
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
          const phonenNumber = document.getElementById('phone-numbers');
          phonenNumber.scrollIntoView({ block: 'start', behavior: 'smooth' });
        } else {
          transitionLeave(content, 'dropdown__content');
          activator.classList.remove('dropdown_active');
        }
      });
      content
        .querySelector('.dropdown__close')
        .addEventListener('click', () => {
          if (
            ['mobile', 'smartphone', 'tablet'].includes(deviceType) ||
            (dropdown.classList.contains('footer-downside__menu') &&
              ['laptop', 'desktop', 'tablet'].includes(deviceType))
          ) {
            return;
          }

          state = !state;
          transitionLeave(content, 'dropdown__content');
        });
    }
    return;
  }

  const open = () => {
    state = true;
    if (state) {
      transitionEnter(dropdown, 'dropdown');
    }
  };

  const close = () => {
    transitionLeave(dropdown, 'dropdown');
  };

  let timeoutIdOver = null;
  let timeoutIdOut = null;
  const delayMS = 150;
  let over = false;

  dropdown.addEventListener('mouseenter', () => {
    if (isTouchDevice()) {
      return;
    }

    const deviceType = getDeviceType();

    if (
      ['mobile', 'smartphone', 'tablet'].includes(deviceType) ||
      (dropdown.classList.contains('footer-downside__menu') &&
        ['laptop', 'desktop', 'tablet'].includes(deviceType))
    ) {
      return;
    }

    clearTimeout(timeoutIdOut);
    timeoutIdOver = setTimeout(() => {
      over = true;
      open();
    }, delayMS);
  });

  dropdown.addEventListener('mouseleave', () => {
    if (isTouchDevice()) {
      return;
    }

    clearTimeout(timeoutIdOver);
    if (over === true) {
      timeoutIdOut = setTimeout(() => {
        close();
      }, delayMS);
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

  if (isTouchDevice()) {
    dropdown.addEventListener('click', () => {
      if (
        dropdown.classList.contains('footer-downside__menu') &&
        ['laptop', 'desktop', 'tablet'].includes(deviceType)
      ) {
        return;
      } else {
        state = !state;
        if (state) {
          transitionEnter(dropdown, 'dropdown');
        } else {
          transitionLeave(dropdown, 'dropdown');
        }
      }
    });
  }

  clickOutside(dropdown, () => {
    if (['mobile', 'smartphone'].includes(deviceType)) {
      if (
        dropdown.classList.contains('dropdown_mobile') ||
        dropdown.classList.contains('dropdown_tablet')
      )
        return;
    }
    dropdown.classList.remove('dropdown_active', 'dropdown_visible');
    state = false;
  });
});
