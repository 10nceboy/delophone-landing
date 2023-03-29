import { plus, minus, minusTop, plusTop } from '../constants/sales';

const elements = document.querySelectorAll('.sales__scheme-element');

elements.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.currentTarget
      ?.querySelector('.sales__scheme-icon')
      .classList.toggle('sales__scheme-icon_active');

    const iconTop = event.currentTarget?.querySelector(
      '.sales__scheme-circle-top'
    );

    const icon = event.currentTarget.querySelector('.sales__scheme-circle');

    if (iconTop) {
      if (iconTop.getAttribute('d') === minusTop) {
        iconTop.setAttribute('d', plusTop);
        iconTop.classList.add('sales__icon-plus');
      } else {
        iconTop.setAttribute('d', minusTop);
        iconTop.classList.remove('sales__icon-plus');
      }
    } else {
      if (icon.getAttribute('d') === minus) {
        icon.setAttribute('d', plus);
      } else {
        icon.setAttribute('d', minus);
      }
    }
  });
});
