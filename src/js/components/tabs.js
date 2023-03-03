const activators = document.querySelectorAll('.tabs__activator');
const items = document.querySelectorAll('.tabs__item');
const autocomplete = document.querySelector('.autocomplete');
const mobiles = document.querySelector('.choose__button_mobiles');
const eighties = document.querySelector('.choose__button_8800');

activators.forEach((activator) => {
  activator.addEventListener('click', (event) => {
    const tabId = event.currentTarget.dataset.tab;

    const tabItem = document.querySelector(`.tabs__item[data-tab="${tabId}"]`);



    activators.forEach((activator) => {
      activator.classList.remove('tabs__activator_active');
    });

    event.target.classList.add('tabs__activator_active');

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
