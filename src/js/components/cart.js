
import { phones } from "../constants/cart";



const cartEl = document.querySelector('.cart__content-upside');
const phoneCards = document.querySelector('.choose__phones-cards')
const summary = document.querySelector('.cart__summary')
const buyButton = document.querySelector('.cart__button-buy')
const cartHeader = document.querySelector('.cart__header')
const mobileQuantity = document.querySelector('.cart__mobile-quantity')
const cartConHeader = document.querySelector(`.cart__content-header`)







const saveCart = () => {
  localStorage.setItem("cartArray", JSON.stringify(cartArray));
};


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


phones.forEach(phone => {
  switch (phone.type) {
    case "single":
      phoneCards.innerHTML += `<div class="card card_white choose__phones-card" data-id="${phone.id}">
    <div class="choose__phones-single-number no-select">
      <span class="choose__city-code" data-city-code="${phone.code1}"
        >${phone.code1}</span> <span class="choose__phone-number no-select" data-number="${phone.number}"
      >&nbsp;<i>${phone.number.charAt(0)}</i><i>${phone.number.charAt(1)}</i><i>${phone.number.charAt(2)}</i><i>-</i><i>${phone.number.charAt(3)}</i><i>${phone.number.charAt(4)}</i
      ><i>-</i><i>${phone.number.charAt(5)}</i><i>${phone.number.charAt(6)}</i></span>
    </div >
  </div> `
      break


    case "pair":
      phoneCards.innerHTML += `
      <div class="card card_white choose__phones-card" data-id="${phone.id}">
        <div class="choose__phones-pair-numbers">
          <span class="no-select">
            <span class="choose__city-code no-select" data-city-code="${phone.code1}"
              >${phone.code1}</span
            >
            <span class="choose__phone-number">
              <i>${phone.number.charAt(0)}</i><i>${phone.number.charAt(1)}</i
              ><i>${phone.number.charAt(2)}</i><i>-</i><i>${phone.number.charAt(3)}</i
              ><i>${phone.number.charAt(4)}</i><i>-</i><i>${phone.number.charAt(5)}</i
              ><i>${phone.number.charAt(6)}</i>
            </span></span
          >
          <div class="choose__phones-pair-complect">
            <span class="no-select">Комплект 495+499</span
            ><span
              class="tooltip"
              data-tooltip-width-laptop="300px"
              data-tooltip-width-tablet="300px"
              data-tooltip-width-smartphone="252px"
              data-tooltip="Сразу два номера в комплекте: 
          8 <i>${phone.code1.substring(2, 5)}</i> ${phone.number.substring(0, 3)}-${phone.number.substring(3, 5)}-${phone.number.substring(5, 7)}
          8 <i>${phone.code2.substring(2, 5)}</i> ${phone.number.substring(0, 3)}-${phone.number.substring(3, 5)}-${phone.number.substring(5, 7)}
          Номера продаются только вместе"
            ></span>
          </div>
        </div>
      </div>      
      `
      break

    case "vip":
      phoneCards.innerHTML +=
        `<div class="card card_white choose__phones-card" data-id ="${phone.id}" >
        <div class="choose__phones-vip-number no-select">
          <span class="choose__city-code">${phone.code1}</span>  <span class="choose__phone-number ">
            <i>${phone.number}</i>
            </span>
          <div class="choose__phones-vip-price" data-price=${phone.price}>${phone.price}</div>
      </div>
      </div>`
      break
  }
})

const cards = document.querySelectorAll('.choose__phones-card')



cards.forEach((card) => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    addToCart(id);
    renderNumber();
    renderSummary();
    renderCartHeader()
    saveCart()
  })
}
)


const renderItemHeader = (header) => {
  const cartConHeader = document.createElement('div');

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


const addToCart = (id) => {
  if (cartArray.some(item => item.id === id)) {
  }
  else {
    const item = phones.find(phone => phone.id === id)
    cartArray.push(item)

  }
}

const removeFromCart = (id) => {
  cartArray = cartArray.filter(item => item.id !== id)
  renderNumber();
}

const renderNumber = () => {
  cartEl.innerHTML = "";
  cartArray.forEach((item) => {

    if (item.type !== "pair") {
      cartEl.innerHTML += `<div class="card card_white cart__item">
 <div class="cart__item-number">
   <span class="choose__city-code">${item.code1}</span> ${item.number.substring(0, 3)}-${item.number.substring(3, 5)}-${item.number.substring(5, 7)}
 </div>
 <div class="cart__item-price">${item.price}<div class="cart__item-price_per-month">${item.abonprice}</div></div>
 ${renderDeleteIcon()}</div>`
    }
    else {
      cartEl.innerHTML += `<div class="card card_white cart__item">
      <div class="cart__item-pair-numbers">
        <div class="cart__item-number">
        <span class="choose__city-code">${item.code1}</span> ${item.number.substring(0, 3)}-${item.number.substring(3, 5)}-${item.number.substring(5, 7)}
        </div>
        <div class="cart__item-number">
        <span class="choose__city-code">${item.code2}</span> ${item.number.substring(0, 3)}-${item.number.substring(3, 5)}-${item.number.substring(5, 7)}
        </div>
      </div>
      <div class="cart__item-price">${item.price}</div>
      <div class="cart__item-price_per-month">${item.abonprice}</div>
      ${renderDeleteIcon()}</div>`
    }
    const closeIcons = document.querySelectorAll('.cart__item-icon')
    closeIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        const id = item.id;
        removeFromCart(id)
        renderSummary();
        renderCartHeader()
        saveCart()
      })
    })
  })
}

const renderSummary = () => {
  let totalPrice = 0;
  let totalAbonPrice = 0;
  cartArray.forEach(item => {
    totalPrice += parseInt(item.price.split(" ").join(""), 10)
    totalAbonPrice += parseInt(item.abonprice.split(" ").join(""), 10) || 0;
  })
  summary.innerHTML = `<div class="cart__summary">
  <span class="cart__summary_once">${totalPrice} ₽,</span>
  <span class="cart__summary_per-month"> ${totalAbonPrice} ₽/мес </span>
</div>`
}


const declination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

const renderCartHeader = () => {
  let quantity = cartArray.length;
  cartHeader.innerHTML = `
  <span class="cart__header-choice">Выбран${declination(quantity, ['', 'о', 'о'])}</span>&nbsp;<b
    class="cart__quantity"
  >${quantity}</b
  >&nbsp;<span class="cart__quantity-number">номер${declination(quantity, ['', 'а', 'ов'])}</span>
`
  mobileQuantity.textContent = quantity;
  mobileQuantity.classList.add('cart__mobile-quantity_active')


  if (quantity == 0) {
    buyButton.disabled = true;
    mobileQuantity.classList.remove('cart__mobile-quantity_active')
  }

  else if (quantity == 1) {
    buyButton.textContent = "Купите номер телефона"
  }
  if (quantity > 0)
    buyButton.disabled = false;
}




let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []


renderNumber()
renderSummary();
renderCartHeader()








