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




export const formatPhoneNumber = (str) => {
  let cleaned = ('' + str).replace(/\D/g, '');
  let match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return match[1] + '(' + match[2] + ') ' + match[3] + '-' + match[4] + '-' + match[5]
  };
};