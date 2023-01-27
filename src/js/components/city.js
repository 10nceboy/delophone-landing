import { cities } from '../constants/city';
import { phones, addresses } from '../constants/contacts';

import { watchValue } from '../utils/watch';

const citiesDropdowns = document.querySelectorAll('.city');

citiesDropdowns.forEach((dropdown) => {
  watchValue(dropdown, (el) => {
    const { value } = el.dataset;
    if (cities.includes(value));
    document.querySelectorAll('.phone-number').forEach((number) => {
      number.textContent = phones[value];
    });
    document.querySelectorAll('.address').forEach((address) => {
      address.textContent = addresses[value];
    });
  });
});
