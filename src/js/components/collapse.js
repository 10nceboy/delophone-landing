document.addEventListener('DOMContentLoaded', () => {
  const collapsibles = document.querySelectorAll('.collapse');

  collapsibles.forEach((collapse) => {
    const content = collapse.querySelector('.collapse__content');
    const activator = collapse.querySelector('.collapse__activator');
    let opened = false;
    let animating = false;

    collapse.addEventListener('click', () => {
      if (!opened) {
        collapse.style.height = '';
        collapse.classList.add('collapse_before-open');
        const collapseHeight = parseInt(getComputedStyle(collapse).height);

        requestAnimationFrame(() => {
          collapse.style.height = collapseHeight + 'px';
          requestAnimationFrame(() => {
            collapse.classList.add('collapse_active');
          });
        });
      } else {
        collapse.classList.remove('collapse_active');
        collapse.style.height = '25px';
      }
      opened = !opened;
    });

    content.addEventListener('transitionstart', () => {});
  });
});
