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
        dropdown.dispatchEvent(
          new CustomEvent('change', {
            detail: {
              value: dropdownItem.dataset.value
            }
          })
        );
      });
    });

    document.addEventListener('click', (evt) => {
      let targetEl = evt.target;

      dropdown.classList.remove('.active');
    });

    dropdown.addEventListener('change', ({ detail }) => {
      setDropdownValue(dropdown, detail.value);
      dropdown.classList.remove('_active');
    });
  });
});
