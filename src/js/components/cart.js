import { getCart, saveCart } from '../utils/cart';
import { declination, formatNumber, sortByField } from '../utils/common';

import { groups, phones } from '../constants/cart';

const cartEl = document.querySelector('.cart__content-upside');
const phoneCards = document.querySelector('.choose__phones-cards');
const summary = document.querySelector('.cart__summary');
const buyButton = document.querySelector('.cart__button-buy');
const cartHeader = document.querySelector('.cart__header');
const mobileQuantity = document.querySelector('.cart__mobile-quantity');
let cartArray = [];

/**
 * Temporary mock for checking condition of getting cart from locaStorage for testing
 * TODO replace with actual code that will be work with backend))
 */

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

const phoneTypes = {
  single: 'single',
  pair: 'pair',
  vip: 'vip'
};

const renderPhones = () => {
  phones.forEach((phone) => {
    switch (phone.type) {
      case phoneTypes.single:
        phoneCards.innerHTML += `<div class="card card_white choose__phones-card" data-id="${
          phone.id
        }">
      <div class="choose__phones-single-number no-select">
        <span class="choose__city-code" data-city-code="${phone.code1}"
          >${
            phone.code1
          }</span> <span class="choose__phone-number no-select" data-number="${
          phone.number
        }"
        >&nbsp;<i>${phone.number.substring(0, 3)}-${phone.number.substring(
          3,
          5
        )}-${phone.number.substring(5, 7)}</i></span>
      </div>
    </div> `;
        break;

      case phoneTypes.pair:
        phoneCards.innerHTML += `
        <div class="card card_white choose__phones-card" data-id="${phone.id}">
          <div class="choose__phones-pair-numbers">
            <span class="no-select">
                <span class="choose__city-code no-select" data-city-code="${
                  phone.code1
                }"
                  >${phone.code1}</span
                >
                <span class="choose__phone-number">
                  <i>${phone.number.substring(0, 3)}-${phone.number.substring(
          3,
          5
        )}-${phone.number.substring(5, 7)}
                  </i>
                </span>
              </span>
            <div class="choose__phones-pair-complect">
              <span class="no-select">Комплект 495+499</span
              ><span
                class="tooltip"
                data-tooltip-width-laptop="300px"
                data-tooltip-width-tablet="300px"
                data-tooltip-width-smartphone="252px"
                data-tooltip="Сразу два номера в комплекте: 
            8 <i>${phone.code1.substring(2, 5)}</i> ${phone.number.substring(
          0,
          3
        )}-${phone.number.substring(3, 5)}-${phone.number.substring(5, 7)}
            8 <i>${phone.code2.substring(2, 5)}</i> ${phone.number.substring(
          0,
          3
        )}-${phone.number.substring(3, 5)}-${phone.number.substring(5, 7)}
            Номера продаются только вместе"
              ></span>
            </div>
          </div>
        </div>      
        `;
        break;

      case phoneTypes.vip:
        phoneCards.innerHTML += `<div class="card card_white choose__phones-card" data-id ="${
          phone.id
        }" >
          <div class="choose__phones-vip-number no-select">
            <span class="choose__city-code">${
              phone.code1
            }</span>  <span class="choose__phone-number ">
              <i>${phone.number.substring(0, 3)}-${phone.number.substring(
          3,
          5
        )}-${phone.number.substring(5, 7)}</i>
              </span>
            <div class="choose__phones-vip-price" data-price=${phone.price}>${
          phone.price
        }</div>
        </div>
        </div>`;
        break;
    }
  });
};

/**Initial phone rendering */

const addToCart = (id) => {
  if (cartArray.some((item) => item.id === id)) {
    return false;
  } else {
    const item = phones.find((phone) => phone.id === id);
    cartArray.push(item);
    return item;
  }
};

const removeFromCart = (id) => {
  const index = cartArray.findIndex((item) => item.id === id);
  if (index < 0) {
    return;
  }
  const deletedEl = cartEl.querySelectorAll('.cart__item')[index];
  deletedEl.classList.add('cart__item_deleted');
  deletedEl.addEventListener(
    'animationend',
    () => {
      cartArray.splice(index, 1);
      renderCartArray();
      saveCart(cartArray);
    },
    { once: true }
  );
};

const renderCartSubheader = (group) => {
  const groupText = groups[group] ?? '';
  return `<div class="cart__content-header no-select">${groupText}</div>`;
};

function deleteCartItem(event) {
  const { target } = event;
  const id = target.parentElement?.parentElement?.dataset.cartItemId;
  document
    .querySelector(`.choose__phones-card_disabled[data-id="${id}"]`)
    ?.classList.remove('choose__phones-card_disabled');
  if (id) {
    removeFromCart(id);
  }
}

const renderCartArray = () => {
  cartArray = sortByField(cartArray, 'group');
  let prevItemGroup = null;
  let newCartHTML = ``;

  if (cartArray.length == 0) {
    if (location.pathname.includes('order')) {
      newCartHTML = ` <div class="cart__content-header">
Вернитесь к выбору номеров. <br> Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`;
    } else {
      newCartHTML = ` <div class="cart__content-header">
Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`;
    }
  }

  let closeIcons = cartEl.querySelectorAll('.cart__item-icon');
  closeIcons.forEach((closeIcon) =>
    closeIcon.removeEventListener('click', deleteCartItem)
  );

  cartArray.forEach(
    ({ id, number, code1, code2, group, abonprice, price, type }) => {
      /**Render subheader (Городские, Мобильные etc) */
      if (prevItemGroup !== group) {
        prevItemGroup = group;
        newCartHTML += renderCartSubheader(group);
      }

      if (type !== 'pair') {
        newCartHTML += `<div class="card card_white cart__item" data-cart-item-id=${id}>
          <div class="cart__item-number no-select">
          <span class="choose__city-code">${code1}</span> ${number.substring(
          0,
          3
        )}-${number.substring(3, 5)}-${number.substring(5, 7)}
 </div>
 <div class="cart__item-price no-select">${price}<div class="cart__item-price_per-month no-select">${abonprice}</div>
 </div>${renderDeleteIcon()}</div>`;
      } else {
        newCartHTML += `<div class="card card_white cart__item" data-cart-item-id=${id}>
      <div class="cart__item-pair-numbers no-select">
        <div class="cart__item-number">
        <span class="choose__city-code">${code1}</span> ${number.substring(
          0,
          3
        )}-${number.substring(3, 5)}-${number.substring(5, 7)}
        </div>
        <div class="cart__item-number">
        <span class="choose__city-code">${code2}</span> ${number.substring(
          0,
          3
        )}-${number.substring(3, 5)}-${number.substring(5, 7)}
        </div>
      </div>
      <div class="cart__item-price no-select">${price}</div>
      <div class="cart__item-price_per-month no-select">${abonprice}</div>
      ${renderDeleteIcon()}
      </div>`;
      }
    }
  );
  cartEl.innerHTML = newCartHTML;

  closeIcons = cartEl.querySelectorAll('.cart__item-icon');

  /**
   * Creating delete listeners for "close" buttons on cart Items
   */
  closeIcons.forEach((closeIcon) => {
    closeIcon.addEventListener('click', deleteCartItem);
  });
  renderCartHeader();
  renderSummary();
};

const renderSummary = () => {
  let totalPrice = 0;
  let totalAbonPrice = 0;
  cartArray.forEach((item) => {
    totalPrice += parseInt(item.price.split(' ').join(''), 10);
    totalAbonPrice += parseInt(item.abonprice.split(' ').join(''), 10) || 0;
  });
  summary.innerHTML = `
  <div class="cart__summary">
    <span class="cart__summary_once">${formatNumber(totalPrice)} ₽,</span>
    <span class="cart__summary_per-month"> ${formatNumber(
      totalAbonPrice
    )} ₽/мес </span>
  </div>`;

  const orderPay = document.querySelector('.order__pay-once');
  if (orderPay) {
    const orderPayAbon = document.querySelector('.order__pay-per-month');
    const orderSum = document.querySelector('.order__summary');
    orderPay.textContent = formatNumber(totalPrice);
    orderPayAbon.textContent = formatNumber(totalAbonPrice);
    orderSum.textContent = formatNumber(totalAbonPrice + totalPrice);
    document.querySelector('.order__summary-button').textContent =
      document.querySelector('.order__summary').textContent;
  }
};

const renderCartHeader = () => {
  let quantity = cartArray.length;

  cartHeader.innerHTML = `
  <span class="cart__header-choice no-select">Выбран${declination(quantity, [
    '',
    'о',
    'о'
  ])}</span>&nbsp;<b
    class="cart__quantity no-select"
  >${quantity}</b
  >&nbsp;<span class="cart__quantity-number no-select">номер${declination(
    quantity,
    ['', 'а', 'ов']
  )}</span>
`;
  cartHeader.classList.add('no-select');

  if (mobileQuantity || buyButton) {
    if (quantity == 0) {
      buyButton.disabled = true;
      mobileQuantity.classList.remove('cart__mobile-quantity_active');
      document
        .querySelector('.cart__mobile-button')
        ?.classList.remove('cart__mobile-button_active');
    } else if (quantity == 1) {
      buyButton.textContent = 'Купите номер телефона';
    }
    if (quantity > 0) {
      buyButton.disabled = false;
      mobileQuantity.classList.add('cart__mobile-quantity_active');
      mobileQuantity.textContent = quantity;
      document
        .querySelector('.cart__mobile-button')
        ?.classList.add('cart__mobile-button_active');
    } else mobileQuantity.classList.remove('cart__mobile-quantity_active');
  }
};
const init = () => {
  if (location.pathname.includes('order')) {
    cartArray = getCart();
  } else {
    cartArray = getCart();
    renderPhones();
    const cards = document.querySelectorAll('.choose__phones-card');

    cards.forEach((card) => {
      const id = card.dataset.id;
      if (cartArray.some((item) => item.id === id)) {
        card.classList.add('choose__phones-card_disabled');
      }
      card.dispatchEvent(new MouseEvent('mousedown'));
      card.dispatchEvent(new MouseEvent('mouseup'));

      card.addEventListener('click', (event) => {
        const isPresent = addToCart(id);
        if (!isPresent) {
          card.classList.remove('choose__phones-card_disabled');
          removeFromCart(id);

          return;
        }

        card.classList.add('choose__phones-card_disabled');
        renderCartArray();
        const index = cartArray.findIndex((item) => item.id === id);
        const newEl = cartEl.querySelectorAll('.cart__item')[index];
        newEl.classList.add('cart__item_new');
        saveCart(cartArray);
      });
    });
  }
  renderCartArray();
};

init();
