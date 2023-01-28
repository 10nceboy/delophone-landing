export const debounce = (func, timeout = 150) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const formatNumber = (n, separator = ' ') =>
  n.toLocaleString('en').replace(/,/g, separator);
