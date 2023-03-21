const activators = document.querySelectorAll('.tabs__activator');
const items = document.querySelectorAll('.tabs__item');

activators.forEach((activator) => {
  activator.addEventListener('click', (event) => {
    const tabId = event.currentTarget.dataset.tab;

    activators.forEach((activator) => {
      activator.classList.remove('tabs__activator_active');
    });

    event.target.classList.add('tabs__activator_active');

    items.forEach((content) => {
      content.classList.remove('tabs__item_active');
    });

    const tabItem = document.querySelector(`.tabs__item[data-tab="${tabId}"]`);
    if (!tabItem) return;
    tabItem.classList.add('tabs__item_visible');
    requestAnimationFrame(() => {
      tabItem.classList.add('tabs__item_active');
      tabItem.classList.remove('tabs__item_visible');
    });
  });
});
