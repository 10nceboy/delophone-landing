/**
 * Get scrollbar width for page (need to add it when scrolling is turned off)
 * @returns
 */
export const getScrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};

/**
 * Cross-browser turn on / off of page scrolling (for modals, dialogs, etc)
 * @param {boolean} flag
 */
export const toggleOverflow = (flag) => {
  if (flag) {
    const paddingRight = getScrollbarWidth();
    document.body.style.paddingRight = `${paddingRight}px`;
    document.body.style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'hidden';
  } else {
    document.body.style.paddingRight = '';
    document.body.style.overflowY = '';
    document.querySelector('html').style.overflow = '';
  }
};

/**
 * Scrolls window to specific element
 * @param {HTMLElement} element
 */
export const scrollToElement = (element) => {
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

/**
 * Add a handler for click ouside of specific element
 * @param {HTMLElement} element
 * @param {function} callback
 */
export const clickOutside = (element, callback) => {
  document.addEventListener('click', (event) => {
    if (!element.contains(event.target)) {
      callback();
    }
  });
};

/**
 * Checks if element is in viewport
 * @param {HTMLElement} element
 * @returns {boolean}
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight - 100 ||
      document.documentElement.clientHeight - 100) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Make a enter transition for element with specifific className, by adding visibleClass than activeClass on the next animation frame
 * @param {HTMLElement} el
 * @param {string} className
 * @param {string} activeClass
 * @param {string} visibleClass
 */
export const transitionEnter = (
  el,
  className,
  activeClass = '_active',
  visibleClass = '_visible',
  duration = 500
) => {
  el?.classList.add(`${className}${visibleClass}`);
  requestAnimationFrame(() => el.classList.add(`${className}${activeClass}`));
};

/**
 * Make a leave transition for element with specifific className, by removing activeClass than removing visibleClass when transition ends
 * @param {HTMLElement} el
 * @param {string} className
 * @param {string} activeClass
 * @param {string} visibleClass
 */
export const transitionLeave = (
  el,
  className,
  activeClass = '_active',
  visibleClass = '_visible',
  duration = 500
) => {
  el.classList.remove(`${className}${activeClass}`);
  setTimeout(() => {
    el.classList.remove(`${className}${visibleClass}`);
  }, duration);
};

/**
 * get Media Query state
 * @returns {boolean}
 */
export const getDeviceType = () => {
  const breakpoints = {
    mobile: 360,
    smartphone: 480,
    tablet: 960,
    laptop: 1200
  };

  let deviceType = '';

  for (const [key, value] of Object.entries(breakpoints)) {
    if (window.matchMedia(`(min-width: ${value}px)`).matches) {
      deviceType = key;
    }
  }
  return deviceType || 'mobile';
};

/**
 * Check if device supports touching events
 * @returns {boolean}
 */
export const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints ||
    navigator.msMaxTouchPoints
  );
};
