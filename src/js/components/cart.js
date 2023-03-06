const cart = [];
const cartEl = document.querySelector('.cart');

const getCart = () => {
  localStorage.getItem('cart');
};

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const numbersEl = document.querySelectorAll('.number');

const toggleNumber = (event) => {
  const { target } = event;
  const { number, id, cityCode } = target.dataset;
  if (!number.classList.contains('.number__active')) {
    cart.push({
      number,
      id,
      cityCode
    });
  } else {
    const index = cart.findIndex((cartItem) => cartItem.id === id);
    if (index < 0) {
      return;
    }
    cart.splice(index);
  }
};

const createListeners = (numbers) => {
  numbers.forEach((number) => {
    number.addEventListener('click', toggleNumber);
  });
};

const removeListeners = (numbers) => {
  numbers.forEach((number) => {
    number.removeEventListener('click', toggleNumber);
  });
};

createListeners(number);

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

const renderNumber = ({ cityCode, number, id }) => {
  return `
  <div class="card card_white cart__item" data-number-id=${id}>
    <div class="cart__item-number">
    <span class="choose__city-code">${cityCode}</span> ${number}
  </div>
  <div class="cart__item-price">
    990₽ разово,
    <div class="cart__item-price_per-month">190₽/мес</div>
  </div>
  ${renderDeleteIcon()};
</div>`;
};

const renderCart = () => {
  cartEl.innerHTML = cart.map((number) => renderNumber(number)).join('');
  setTimeout(() => {
    const cartItemsEl = cartEl.querySelectorAll('.cart__item');
    cartItemsEl.forEach((cartItem) => {
      const { numberId } = cartItem.dataset;
      if (numberId) {
        cartItem
          .querySelector('.cart__item-icon')
          .addEventListener('click', () => {
            cart = cart.filter((item) => item.id !== numberId);
          });
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  getCart();
  renderCart();
});
