import Bowser from 'bowser';

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

export const getViewportWidth = () =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

export const toggleOverflow = (flag) => {
  const browser = Bowser.getParser(window.navigator.userAgent);
  if (flag) {
    const paddingRight = getScrollbarWidth();

    document.body.style.paddingRight = `${paddingRight}px`;
    document.body.style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('.page-wrapper').style.marginTop = '53px';
    document.querySelector('.the-header').style.position = 'fixed';
  } else {
    document.body.style.paddingRight = '';
    document.body.style.overflowY = '';

    document.querySelector('html').style.overflow = '';
    document.querySelector('.page-wrapper').style.marginTop = '';
    document.querySelector('.the-header').style.position = '';
    document.querySelector('.page-wrapper').style.pointerEvents = '';
  }
};

export const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints ||
    navigator.msMaxTouchPoints
  );
};

export const animateCollapseOpen = (el, callback = () => {}) => {
  const width = getComputedStyle(el).width;
  el.style.width = width;
  el.style.position = 'absolute';
  el.style.visibility = 'hidden';
  el.style.height = 'auto';
  const height = getComputedStyle(el).height;
  const heightNum = parseInt(height);
  el.style.width = null;
  el.style.position = null;
  el.style.visibility = null;
  el.style.height = 0;
  getComputedStyle(el).height;

  requestAnimationFrame(() => {
    el.style.height = `${heightNum}px`;
    callback();
  });
};

export const animateCollapseClose = (el) => {
  const height = getComputedStyle(el).height;
  el.style.height = height;
  requestAnimationFrame(() => {
    el.style.height = 0;
    callback();
  });
};

export const checkOverflow = (el) => {
  const curOverflow = el.style.overflow;
  if (!curOverflow || curOverflow === 'visible') {
    el.style.overflow = 'hidden';
  }
  const isOverflowing =
    el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
  el.style.overflow = curOverflow;
  return isOverflowing;
};

export const smoothScroll = (el, block = 'end', delay = 160) => {
  window.setTimeout(() => {
    el.scrollIntoView({ behavior: 'smooth', block });
  }, delay);
};


const toggleElementsActive = (...elements ) => {
   elements.forEach((el)=>el.classList.toggle('active'));
}