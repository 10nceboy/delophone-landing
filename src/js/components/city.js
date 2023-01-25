import { cities } from '../constants/city';

document.querySelectorAll('.city').forEach((list) => {
  cities.forEach((city) => {
    const li = document.createElement('li');
    li.innerText = city;
    li.dataset.value = city;
    list.appendChild(li);
  });
});
