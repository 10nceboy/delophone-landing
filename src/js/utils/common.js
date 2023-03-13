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
    return (
      match[1] +
      '(' +
      match[2] +
      ') ' +
      match[3] +
      '-' +
      match[4] +
      '-' +
      match[5]
    );
  }
};

export const declination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) =>
  txt[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];

export const groupBy = (array, field) => {
  return array.reduce((groups, item) => {
    const value = item[field];
    groups[value] = groups[value] || [];
    groups[value].push(item);
    return groups;
  }, []);
};

export const sortByField = (arr, field) => {
  return arr.sort((a, b) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  });
};
