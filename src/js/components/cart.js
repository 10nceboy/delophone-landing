import { phones } from "../constants/cart";


const cart = document.querySelector('.cart')
const cartEl = document.querySelector('.cart__content-upside');
const phoneCards = document.querySelector('.choose__phones-cards')
let cartArray = []




phones.forEach(phone => {
  switch (phone.type) {
    case "single":
      const card = document.createElement('div');
      phoneCards.appendChild(card)
      card.innerHTML = `<div class="card card_white choose__phones-card" data-id="${phone.id}">
    <div class="choose__phones-single-number no-select">
      <span class="choose__city-code" data-city-code="${phone.code1}"
        >${phone.code1}</span> <span class="choose__phone-number no-select" data-number="${phone.number}"
      >&nbsp;<i>${phone.number.charAt(0)}</i><i>${phone.number.charAt(1)}</i><i>${phone.number.charAt(2)}</i><i>-</i><i>${phone.number.charAt(3)}</i><i>${phone.number.charAt(4)}</i
      ><i>-</i><i>${phone.number.charAt(5)}</i><i>${phone.number.charAt(6)}</i></span>
    </div >
  </div> `
      break


    case "pair":
      const cardpair = document.createElement('div');
      phoneCards.appendChild(cardpair)
      cardpair.innerHTML = `<div class="card card_white choose__phones-card" data-id=${phone.id}>
        <div class="choose__phones-pair-numbers">
          <span class="no-select">
            <span class="choose__city-code no-select"  data-city-code="${phone.code1}"
            >${phone.code1}</span
            >
            <span class="choose__phone-number "
            <i>${phone.number.charAt(0)}</i><i>${phone.number.charAt(1)}</i><i>${phone.number.charAt(2)}</i><i>-</i><i>${phone.number.charAt(3)}</i><i>${phone.number.charAt(4)}</i
            ><i>-</i><i>${phone.number.charAt(5)}</i><i>${phone.number.charAt(6)}</i>
            </span
          ></span>
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
      `
      break

    case "vip":
      const cardvip = document.createElement('div');
      phoneCards.appendChild(cardvip)
      cardvip.innerHTML =
        `<div class="card card_white choose__phones-card" data-id ="${phone.id}" >
        <div class="choose__phones-vip-number no-select">
          <span class="choose__city-code">${phone.code1}</span>  <span class="choose__phone-number ">
            <i>${phone.number.charAt(0)}</i><i>${phone.number.charAt(1)}</i><i>${phone.number.charAt(2)}</i><i>-</i><i>${phone.number.charAt(3)}</i><i>${phone.number.charAt(4)}</i
            ><i>-</i><i>${phone.number.charAt(5)}</i><i>${phone.number.charAt(6)}</i>
            </span>
          <div class="choose__phones-vip-price" data-price=${phone.price}>${phone.price}</div>
      </div>
      </div>`
      break
  }
})


const cards = document.querySelectorAll('.choose__phones-card')

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    console.log(id)
  })
}
)


const addToCart = (id) => {
  if (cart.some(item => item.id === id)) {

  }
  else {
    const item = phones.find(phone => phone.id === id)
    cartArray.push(item)
  }

}


































