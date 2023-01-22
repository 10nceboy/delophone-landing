document.addEventListener('DOMContentLoaded', () => {
  const setDropdownValue = (dropdown, value) => {
    dropdown.data.value = value;
    dropdown.innerText = value;
  };

  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const items = dropdown.querySelectorAll('.dropdown-menu li');

    /** handle item click => dispatch syntetic event  */
    items.forEach((dropdownItem) => {
      dropdownItem.addEventListener('click', () => {
        dropdown.dispatchEvent(
          new CustomEvent('change', {
            detail: {
              value: dropdownItem.data.value
            }
          })
        );
      });
    });

    /**handle dropdown Change */
    dropdown.addEventListener('change', ({ detail }) =>
      setDropdownValue(dropdown, detail.value)
    );
  });
});
