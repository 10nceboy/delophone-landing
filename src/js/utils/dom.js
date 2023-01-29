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
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        observer.disconnect();
      }
    });
  }, options);

  observer.observe(element);
};

export const clickOutside = (element, callback) => {
  document.addEventListener('click', (event) => {
    if (!element.contains(event.target)) {
      callback();
    }
  });
};
