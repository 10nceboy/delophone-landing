import{g as S,h as g}from"./menu-d5da2a40.js";const f=e=>{localStorage.setItem("cartArray",JSON.stringify(e))},y=()=>JSON.parse(localStorage.getItem("cartArray"))||[],w={mobile:"Мобильные",499:"Москва (499)",495:"Москва (495)",49599:"Москва 499+495 (комплект)",8800:"8 800",sochi:"Сочи",spb:"Санкт-Петербург",kras:"Краснодар"},L=[{id:"1",type:"single",group:"499",code1:"8 495",code2:"",number:"2434561",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"2",type:"pair",group:"49599",code1:"8 495",code2:"8 499",number:"2564561",price:"1 990₽ разово",abonprice:""},{id:"3",type:"vip",group:"495",code1:"8 495",code2:"",number:"7277777",price:"450 000 ₽",abonprice:""},{id:"4",type:"vip",group:"sochi",code1:"8 495",code2:"",number:"7777777",price:"450 000 ₽",abonprice:""},{id:"5",type:"pair",group:"49599",code1:"8 495",code2:"8 499",number:"7377777",price:"150 000 ₽",abonprice:""},{id:"6",type:"single",group:"mobile",code1:"8 988",code2:"",number:"2934566",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"7",type:"single",group:"kras",code1:"8 861",code2:"",number:"2434567",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"8",type:"single",group:"495",code1:"8 495",code2:"",number:"2434568",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"9",type:"single",group:"495",code1:"8 495",code2:"",number:"4434569",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"10",type:"single",group:"8800",code1:"8 800",code2:"",number:"1233567",price:"990₽ разово",abonprice:"190 ₽/мес"}],o=document.querySelector(".cart__content-upside"),u=document.querySelector(".choose__phones-cards"),E=document.querySelector(".cart__summary"),d=document.querySelector(".cart__button-buy"),x=document.querySelector(".cart__header"),n=document.querySelector(".cart__mobile-quantity");let c=[];const $=()=>`
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
  </svg>`,p={single:"single",pair:"pair",vip:"vip"},A=()=>{L.forEach(e=>{switch(e.type){case p.single:u.innerHTML+=`<div class="card card_white choose__phones-card" data-id="${e.id}">
      <div class="choose__phones-single-number no-select">
        <span class="choose__city-code" data-city-code="${e.code1}"
          >${e.code1}</span> <span class="choose__phone-number no-select" data-number="${e.number}"
        >&nbsp;<i>${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}</i></span>
      </div >
    </div> `;break;case p.pair:u.innerHTML+=`
        <div class="card card_white choose__phones-card" data-id="${e.id}">
          <div class="choose__phones-pair-numbers">
            <span class="no-select">
                <span class="choose__city-code no-select" data-city-code="${e.code1}"
                  >${e.code1}</span
                >
                <span class="choose__phone-number">
                  <i>${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}
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
            8 <i>${e.code1.substring(2,5)}</i> ${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}
            8 <i>${e.code2.substring(2,5)}</i> ${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}
            Номера продаются только вместе"
              ></span>
            </div>
          </div>
        </div>      
        `;break;case p.vip:u.innerHTML+=`<div class="card card_white choose__phones-card" data-id ="${e.id}" >
          <div class="choose__phones-vip-number no-select">
            <span class="choose__city-code">${e.code1}</span>  <span class="choose__phone-number ">
              <i>${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}</i>
              </span>
            <div class="choose__phones-vip-price" data-price=${e.price}>${e.price}</div>
        </div>
        </div>`;break}})},I=e=>{if(c.some(t=>t.id===e))return!1;{const t=L.find(s=>s.id===e);return c.push(t),t}},C=e=>{const t=c.findIndex(i=>i.id===e);if(t<0)return;const s=o.querySelectorAll(".cart__item")[t];s.classList.add("cart__item_deleted"),s.addEventListener("animationend",()=>{c.splice(t,1),m(),f(c)},{once:!0})},T=e=>`<div class="cart__content-header"">${w[e]??""}</div>`;function h(e){var i,r,a;const{target:t}=e,s=(r=(i=t.parentElement)==null?void 0:i.parentElement)==null?void 0:r.dataset.cartItemId;(a=document.querySelector(`.choose__phones-card_disabled[data-id="${s}"]`))==null||a.classList.remove("choose__phones-card_disabled"),s&&C(s)}const m=()=>{c=S(c,"group");let e=null,t="";c.length==0&&(t=` <div class="cart__content-header">
Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`);let s=o.querySelectorAll(".cart__item-icon");s.forEach(i=>i.removeEventListener("click",h)),c.forEach(({id:i,number:r,code1:a,code2:l,group:_,abonprice:b,price:v,type:q})=>{e!==_&&(e=_,t+=T(_)),q!=="pair"?t+=`<div class="card card_white cart__item" data-cart-item-id=${i}>
          <div class="cart__item-number">
          <span class="choose__city-code">${a}</span> ${r.substring(0,3)}-${r.substring(3,5)}-${r.substring(5,7)}
 </div>
 <div class="cart__item-price">${v}<div class="cart__item-price_per-month">${b}</div>
 </div>${$()}</div>`:t+=`<div class="card card_white cart__item" data-cart-item-id=${i}>
      <div class="cart__item-pair-numbers">
        <div class="cart__item-number">
        <span class="choose__city-code">${a}</span> ${r.substring(0,3)}-${r.substring(3,5)}-${r.substring(5,7)}
        </div>
        <div class="cart__item-number">
        <span class="choose__city-code">${l}</span> ${r.substring(0,3)}-${r.substring(3,5)}-${r.substring(5,7)}
        </div>
      </div>
      <div class="cart__item-price">${v}</div>
      <div class="cart__item-price_per-month">${b}</div>
      ${$()}
      </div>`}),o.innerHTML=t,s=o.querySelectorAll(".cart__item-icon"),s.forEach(i=>{i.addEventListener("click",h)}),H(),k()},k=()=>{let e=0,t=0;c.forEach(s=>{e+=parseInt(s.price.split(" ").join(""),10),t+=parseInt(s.abonprice.split(" ").join(""),10)||0}),E.innerHTML=`
  <div class="cart__summary">
    <span class="cart__summary_once">${e} ₽,</span>
    <span class="cart__summary_per-month"> ${t} ₽/мес </span>
  </div>`},H=()=>{var t,s;let e=c.length;x.innerHTML=`
  <span class="cart__header-choice">Выбран${g(e,["","о","о"])}</span>&nbsp;<b
    class="cart__quantity"
  >${e}</b
  >&nbsp;<span class="cart__quantity-number">номер${g(e,["","а","ов"])}</span>
`,(n||d)&&(e==0?(d.disabled=!0,n.classList.remove("cart__mobile-quantity_active"),(t=document.querySelector(".cart__mobile-button"))==null||t.classList.remove("cart__mobile-button_active")):e==1&&(d.textContent="Купите номер телефона"),e>0?(d.disabled=!1,n.classList.add("cart__mobile-quantity_active"),n.textContent=e,(s=document.querySelector(".cart__mobile-button"))==null||s.classList.add("cart__mobile-button_active")):n.classList.remove("cart__mobile-quantity_active"))},M=()=>{location.pathname.includes("order")?c=y():(c=y(),A(),document.querySelectorAll(".choose__phones-card").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.id;if(!I(s)){t.classList.remove("choose__phones-card_disabled"),C(s);return}t.classList.add("choose__phones-card_disabled"),m();const r=c.findIndex(l=>l.id===s);o.querySelectorAll(".cart__item")[r].classList.add("cart__item_new"),f(c)})})),m()};M();
