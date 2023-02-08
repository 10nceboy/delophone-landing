/**
 * Classic debounce
 * @param {Function} func
 * @param {number} timeout
 * @returns
 */
export const debounce = (func, timeout = 150) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

/**
 * Format number to be like from 1900 to 1 900, add separators
 * @param {number,string} n
 * @param {string} separator
 * @returns
 */
export const formatNumber = (n, separator = ' ') =>
  n.toLocaleString('en').replace(/,/g, separator);
