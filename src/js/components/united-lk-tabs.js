const activators = document.querySelectorAll('.united-lk__tab-activator');
const items = document.querySelectorAll('.united-lk__tab-item');

activators.forEach((activator) => {
  activator.addEventListener('mouseenter', (event) => {
    const tabId = event.currentTarget.dataset.tab;

    activators.forEach((activator) => {
      activator.classList.remove('united-lk__tab-activator_active');
    });

    event.target.classList.add('united-lk__tab-activator_active');

    items.forEach((content) => {
      content.classList.remove('united-lk__tab-item_active');
    });

    const tabItem = document.querySelector(
      `.united-lk__tab-item[data-tab="${tabId}"]`
    );
    if (!tabItem) return;
    tabItem.classList.add('united-lk__tab-item_active');
  });
});
