

import { numberQuantity, choice } from '../constants/cart'

const cart = document.querySelector('.cart')
const cartEl = document.querySelector('.cart__content-upside');

const numbers = document.querySelectorAll('.choose__phones-card')


const renderItemHeader = () => {
  const cartConHeader = document.createElement('div');
  cartConHeader.className = 'cart__content-header';
  cartEl.appendChild(cartConHeader);
  const activeTab = document.querySelector('.tabs__activator_active');
  const tabId = activeTab.dataset.tab;
  const autocomplete = document.querySelector('.autocomplete__input')
  if (tabId != "cities") {
    cartConHeader.textContent = activeTab.textContent;
  }
  else {
    cartConHeader.textContent = autocomplete.value
  }
}


const renderItem = () => {
  const cartItem = document.createElement('div');
  cartEl.appendChild(cartItem);
  cartItem.className = "card card_white cart__item";
  cartItem.innerHTML = `<div class="cart__item-number">
  <span class="choose__city-code">8 495</span> 243-45-61
</div>
<div class="cart__item-price">
  990₽ разово,
  <div class="cart__item-price_per-month">190₽/мес</div>
</div>
${renderDeleteIcon()}`
}








const renderDeleteIcon = () => {
  return `
    <svg
    class="cart__item-icon"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12.5" cy="12.5" r="12" stroke="#9CA5AC" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.38201 8.6741C9.18674 8.47884 8.87016 8.47884 8.6749 8.6741C8.47964 8.86936 8.47964 9.18594 8.6749 9.38121L11.7941 12.5004L8.67489 15.6195C8.47963 15.8148 8.47963 16.1314 8.67489 16.3266C8.87016 16.5219 9.18674 16.5219 9.382 16.3266L12.5012 13.2075L15.62 16.3263C15.8153 16.5216 16.1319 16.5216 16.3271 16.3263C16.5224 16.1311 16.5224 15.8145 16.3271 15.6192L13.2083 12.5004L16.3271 9.38149C16.5224 9.18623 16.5224 8.86965 16.3271 8.67439C16.1319 8.47912 15.8153 8.47912 15.62 8.67439L12.5012 11.7933L9.38201 8.6741Z"
      fill="#9CA5AC"
    />
  </svg>`;
};



numbers.forEach(number => (number.addEventListener(`click`, () => {
  renderItemHeader();
  renderItem()
  const cartItem = document.querySelector('.cart__item')
  document.querySelector('.cart__item-icon').addEventListener('click', () => { cartItem.remove() })
})))

































const buyButton = document.querySelector('.cart__button-buy')
const cartQuantity = document.querySelector('.cart__quantity')
const QuantityNumber = document.querySelector('.cart__quantity-number')
const choiceHeader = document.querySelector('.cart__header-choice')




document.addEventListener('DOMContentLoaded', () => {





  let quantity = parseInt(cartQuantity.textContent.split(" ").join(""), 10)
  const declination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];





  if (quantity == 0) {
    buyButton.disabled = true;
    choiceHeader.textContent = choice + 'о'
    QuantityNumber.textContent = numberQuantity + 'ов'

  }
  else {
    if (buyButton) {
      buyButton.disabled = false;
    }
    QuantityNumber.textContent = numberQuantity + declination(quantity, ['', 'а', 'ов'])
    if (quantity % 2 == 1) {
      choiceHeader.textContent = choice
    }
    else {
      choiceHeader.textContent = choice + 'о'
    }

    if (quantity == 1) buyButton.textContent = "Купите номер телефона"
  }

});

