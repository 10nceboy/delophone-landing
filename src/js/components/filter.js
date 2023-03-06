const activators = document.querySelectorAll('.filters__activator');
const items = document.querySelectorAll('.filters__item');



activators.forEach((activator) => {
    activator.addEventListener('click', (event) => {
        const filterId = event.currentTarget.dataset.filter;

        const filterItem = document.querySelector(`.filters__item[data-filter="${filterId}"]`);


        activators.forEach((activator) => {
            activator.classList.remove('filters__activator_active');
        });

        event.target.classList.add('filters__activator_active');



        items.forEach((content) => {
            content.classList.remove('filters__item_active');
        });

        filterItem.classList.add('filters__item_visible');
        requestAnimationFrame(() => {
            filterItem.classList.add('filters__item_active');
            filterItem.classList.remove('filters__item_visible');
        });
    });
});
