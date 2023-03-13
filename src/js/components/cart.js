import { getCart, saveCart } from '../utils/cart';
import { declination, sortByField } from '../utils/common';

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
        phoneCards.innerHTML += `<div class="card card_white choose__phones-card" data-id="${phone.id
          }">
      <div class="choose__phones-single-number no-select">
        <span class="choose__city-code" data-city-code="${phone.code1}"
          >${phone.code1
          }</span> <span class="choose__phone-number no-select" data-number="${phone.number
          }"
        >&nbsp;<i>${phone.number.charAt(0)}</i><i>${phone.number.charAt(
            1
          )}</i><i>${phone.number.charAt(2)}</i><i>-</i><i>${phone.number.charAt(
            3
          )}</i><i>${phone.number.charAt(4)}</i
        ><i>-</i><i>${phone.number.charAt(5)}</i><i>${phone.number.charAt(
            6
          )}</i></span>
      </div >
    </div> `;
        break;

      case phoneTypes.pair:
        phoneCards.innerHTML += `
        <div class="card card_white choose__phones-card" data-id="${phone.id}">
          <div class="choose__phones-pair-numbers">
            <span class="no-select">
                <span class="choose__city-code no-select" data-city-code="${phone.code1
          }"
                  >${phone.code1}</span
                >
                <span class="choose__phone-number">
                  <i>${phone.number}</i>
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
        phoneCards.innerHTML += `<div class="card card_white choose__phones-card" data-id ="${phone.id}" >
          <div class="choose__phones-vip-number no-select">
            <span class="choose__city-code">${phone.code1}</span>  <span class="choose__phone-number ">
              <i>${phone.number}</i>
              </span>
            <div class="choose__phones-vip-price" data-price=${phone.price}>${phone.price}</div>
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
  return `<div class="cart__content-header"">${groupText}</div>`;
};

function deleteCartItem(event) {
  const { target } = event;
  const id = target.parentElement?.parentElement?.dataset.cartItemId;
  if (id) {
    removeFromCart(id);
  }
}

const renderCartArray = () => {

  cartArray = sortByField(cartArray, 'group');
  let prevItemGroup = null;
  let newCartHTML = ``

  if (cartArray.length == 0) {
    newCartHTML = ` <div class="cart__content-header">
Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`

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
          <div class="cart__item-number">
          <span class="choose__city-code">${code1}</span> ${number.substring(
          0,
          3
        )}-${number.substring(3, 5)}-${number.substring(5, 7)}
 </div>
 <div class="cart__item-price">${price}<div class="cart__item-price_per-month">${abonprice}</div>
 </div>${renderDeleteIcon()}</div>`;
      } else {
        newCartHTML += `<div class="card card_white cart__item" data-cart-item-id=${id}>
      <div class="cart__item-pair-numbers">
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
      <div class="cart__item-price">${price}</div>
      <div class="cart__item-price_per-month">${abonprice}</div>
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
    <span class="cart__summary_once">${totalPrice} ₽,</span>
    <span class="cart__summary_per-month"> ${totalAbonPrice} ₽/мес </span>
  </div>`;
};

const renderCartHeader = () => {
  let quantity = cartArray.length;
  cartHeader.innerHTML = `
  <span class="cart__header-choice">Выбран${declination(quantity, [
    '',
    'о',
    'о'
  ])}</span>&nbsp;<b
    class="cart__quantity"
  >${quantity}</b
  >&nbsp;<span class="cart__quantity-number">номер${declination(quantity, [
    '',
    'а',
    'ов'
  ])}</span>
`;

  if (mobileQuantity || buyButton) {

    if (quantity == 0) {
      buyButton.disabled = true;
      mobileQuantity.classList.remove('cart__mobile-quantity_active');
    } else if (quantity == 1) {
      buyButton.textContent = 'Купите номер телефона';
    }
    if (quantity > 0) {
      buyButton.disabled = false;
      mobileQuantity.classList.add('cart__mobile-quantity_active');
      mobileQuantity.textContent = quantity;
    }
    else mobileQuantity.classList.remove('cart__mobile-quantity_active');
  };
}
const init = () => {
  if (location.pathname.includes('order')) {
    cartArray = getCart();
  } else {
    saveCart([]);
    renderPhones();
    const cards = document.querySelectorAll('.choose__phones-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const isPresent = addToCart(id);
        if (!isPresent) {
          return;
        }
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
