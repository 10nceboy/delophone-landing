import { cities } from '../constants/city';
// import { watchData } from '../utils/watch';

const citiesDropdowns = document.querySelectorAll('.city');

citiesDropdowns.forEach((dropdown) => {
  cities.forEach((city) => {
    const li = document.createElement('li');
    li.innerText = city;
    li.dataset.value = city;
    dropdown.appendChild(li);
  });
});

// watchData(document.querySelector('.'), 'value', (el) => {
//   citiesDropdowns.forEach((dropdown) => {
//     dropdown.querySelector('.dropdown__button').textContent = el.dataset.value;
//   });
// });
