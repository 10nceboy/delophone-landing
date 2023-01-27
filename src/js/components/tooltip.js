import { createPopper } from '@popperjs/core';

const createTooltip = (content) => `
      <div class="tooltip__arrow"></div>
      <div class="tooltip__content">${content}</div>
    `;

const items = document.querySelectorAll('.tooltip__activator');

items.forEach((item) => {
  item.addEventListener('mouseenter', (event) => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.role = 'tooltip';
    tooltip.innerHTML = createTooltip(
      event.target.getAttribute('data-tooltip')
    );
    const reference = event.target;
    reference.appendChild(tooltip);

    window.setTimeout(() => {
      const popper = createPopper(reference, tooltip, {
        placement: 'top',
        animation: false
      });
    });
  });

  item.addEventListener('mouseleave', (event) => {
    const tooltip = event.target.querySelector('.tooltip');
    tooltip.remove();
  });
});
