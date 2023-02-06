import {
  computePosition,
  arrow,
  offset,
  detectOverflow
} from '@floating-ui/dom';
import {
  getDeviceType,
  transitionEnter,
  transitionLeave,
} from '../utils/dom';



const svg = `
<svg class="icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="7.5" r="7" stroke="#F88C28"/>
<path
  d="M6.7517 9.45316V9.40153C6.75737 8.85373 6.81406 8.41778 6.92177 8.09369C7.02948 7.7696 7.18254 7.50717 7.38095 7.30641C7.57936 7.10564 7.81746 6.92065 8.09524 6.75143C8.26247 6.64818 8.4127 6.52629 8.54592 6.38576C8.67914 6.24235 8.78401 6.07744 8.86054 5.89101C8.93991 5.70459 8.97959 5.49809 8.97959 5.27151C8.97959 4.99044 8.9144 4.74665 8.78401 4.54015C8.65363 4.33365 8.47931 4.17447 8.26105 4.06262C8.0428 3.95076 7.80045 3.89484 7.53401 3.89484C7.30159 3.89484 7.07766 3.94359 6.86224 4.04111C6.64683 4.13862 6.46684 4.29207 6.32228 4.50143C6.17772 4.7108 6.0941 4.9847 6.07143 5.32314H5C5.02268 4.83556 5.14739 4.41826 5.37415 4.07122C5.60374 3.72419 5.90561 3.45889 6.27976 3.27533C6.65675 3.09178 7.07483 3 7.53401 3C8.03288 3 8.46655 3.10038 8.83503 3.30115C9.20635 3.50191 9.49263 3.77725 9.69388 4.12715C9.89796 4.47706 10 4.87572 10 5.32314C10 5.63862 9.95181 5.924 9.85544 6.17925C9.7619 6.43451 9.62585 6.66252 9.44728 6.86329C9.27154 7.06405 9.05896 7.24187 8.80952 7.39675C8.56009 7.55449 8.36026 7.72084 8.21003 7.89579C8.05981 8.06788 7.95068 8.27294 7.88265 8.51099C7.81463 8.74904 7.77778 9.04589 7.77211 9.40153V9.45316H6.7517ZM7.29592 12C7.08617 12 6.90618 11.924 6.75595 11.772C6.60573 11.62 6.53061 11.4379 6.53061 11.2256C6.53061 11.0134 6.60573 10.8313 6.75595 10.6793C6.90618 10.5272 7.08617 10.4512 7.29592 10.4512C7.50567 10.4512 7.68566 10.5272 7.83588 10.6793C7.98611 10.8313 8.06122 11.0134 8.06122 11.2256C8.06122 11.3662 8.02579 11.4952 7.95493 11.6128C7.8869 11.7304 7.79478 11.825 7.67857 11.8967C7.56519 11.9656 7.43764 12 7.29592 12Z"
  fill="#F88C28"
/>
</svg>`;

const renderTooltip = (content) => {
  const popup = document.createElement('div');
  popup.classList.add('tooltip__inner');
  popup.role = 'tooltip';
  popup.innerHTML = `
      <div class="tooltip__content">${content}</div>
      <div class="tooltip__arrow"></div>
    `;
  return popup;
};

const renderActivator = (element) => {
  const activator = document.createElement('div');
  activator.classList.add('icon', 'tooltip__activator');
  element.appendChild(activator);
  activator.innerHTML = svg;
  return activator;
};

const tooltips = document.querySelectorAll('.tooltip');

const hideTooltip = (event) => {
  const tooltipContent =
    event.target?.parentNode?.querySelector('.tooltip__inner');
  transitionLeave(tooltipContent, 'tooltip__inner');
};

const deviceType = getDeviceType();

tooltips.forEach((item) => {
  let activator = item?.querySelector('.tooltip__activator');
  if (!activator) {
    activator = renderActivator(item);
  }

  const tooltipContent = renderTooltip(item.getAttribute('data-tooltip'));
  item.appendChild(tooltipContent);

  requestAnimationFrame(() => {
    const arrowEl = tooltipContent.querySelector('.tooltip__arrow');

    /**center at mobile devices */
    let overflow = null;
    const mobileDisplay = {
      name: 'middleware',
      async fn(middlewareArguments) {
        if (deviceType !== 'mobile') {
          return { middlewareArguments };
        }
        const padding = 15;
        overflow = await detectOverflow(middlewareArguments);

        middlewareArguments.middlewareData.arrow.x =
          middlewareArguments.middlewareData.arrow.x - overflow.left - padding;

        return {
          ...middlewareArguments,
          x: middlewareArguments.x + overflow.left + padding,
          y: middlewareArguments.y
        };
      }
    };

    const computePopperPosition = async () => {
      const { x, y, middlewareData } = await computePosition(
        activator,
        tooltipContent,
        {
          placement: 'top',
          animation: false,
          middleware: [
            offset(10),
            arrow({
              element: arrowEl
            }),
            mobileDisplay
          ]
        }
      );

      Object.assign(tooltipContent.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      const arrowData = middlewareData.arrow;
      if (arrowData) {
        const { x: arrowX, y: arrowY } = arrowData;

        Object.assign(arrowEl.style, {
          left: arrowX != null ? `${arrowX}px` : '',
          top: arrowY != null ? `${arrowY}px` : ''
        });
      }
    };

    let width =
      item.getAttribute(`data-tooltip-width-${deviceType}`) ??
      'max(calc(100vw - 30px)';

    tooltipContent.style.maxWidth = width;
    tooltipContent.style.width = width;

    computePopperPosition();

    activator.addEventListener('mouseenter', async () => {
      await computePopperPosition();

      transitionEnter(tooltipContent, 'tooltip__inner');
      window.setTimeout(async () => {
        computePopperPosition();
      });
    });

    activator.addEventListener('mouseleave', hideTooltip);
    activator.addEventListener('click', () => {
      if (event.currentTarget === activator) {
        hideTooltip;
      }
    });
  });

  item.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
  });
});
