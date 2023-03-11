


const activators = document.querySelectorAll('.tabs__activator');
const items = document.querySelectorAll('.tabs__item');
const autocomplete = document.querySelector('.autocomplete');
const autocompleteInput = document.querySelector('.autocomplete__input');


activators.forEach((activator) => {
  activator.addEventListener('click', (event) => {
    const tabId = event.currentTarget.dataset.tab;

    const tabItem = document.querySelector(`.tabs__item[data-tab="${tabId}"]`);

    const autocomplete = document.querySelector('.autocomplete')

    activators.forEach((activator) => {
      activator.classList.remove('tabs__activator_active');
    });

    event.target.classList.add('tabs__activator_active');

    if (tabId !== 'cities') {
      autocomplete.classList.add('autocomplete_disabled')
      autocompleteInput.value = ''
    }
    else {
      autocomplete.classList.remove('autocomplete_disabled');
      autocompleteInput.value = 'Москва (495)'
    }

    items.forEach((content) => {
      content.classList.remove('tabs__item_active');
    });

    tabItem.classList.add('tabs__item_visible');
    requestAnimationFrame(() => {
      tabItem.classList.add('tabs__item_active');
      tabItem.classList.remove('tabs__item_visible');
    });
  });
});
