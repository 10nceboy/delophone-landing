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

export const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints ||
    navigator.msMaxTouchPoints
  );
};

export const scrollToElement = (element) => {
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export const clickOutside = (element, callback) => {
  document.addEventListener('click', (event) => {
    if (!element.contains(event.target)) {
      callback();
    }
  });
};

export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// export const itemTransition = (el, className, state) => {
//   if (state) {
//     el.classlist.add(`${className}_active`);
//     requestAnimationFrame(() => el.classlist.add(`${className}_visible`));
//   } else {
//     el.classlist.remove(`${className}_active`);
//     el.classlist.remove(`${className}_visible`);
//   }
// };
