import { phones, cities } from '../constants/contacts';

import { watchValue } from '../utils/watch';

const citiesDropdowns = document.querySelectorAll('.city');

citiesDropdowns.forEach((dropdown) => {
  watchValue(dropdown, (el) => {
    const { value } = el.dataset;
    if (cities.includes(value));
    document.querySelectorAll('.phone-number a').forEach((number) => {
      number.textContent = phones[value];
    });
  });
});
