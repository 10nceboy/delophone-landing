import{g as L,h as $}from"./menu-d5da2a40.js";const m=e=>{localStorage.setItem("cartArray",JSON.stringify(e))},A=()=>JSON.parse(localStorage.getItem("cartArray"))||[],w={mobile:"Мобильные",499:"Москва (499)",495:"Москва (495)",sochi:"Сочи",spb:"Санкт-Петербург",kras:"Краснодар"},f=[{id:"1",type:"single",group:"499",code1:"8 495",code2:"",number:"2434561",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"2",type:"pair",group:"499",code1:"8 495",code2:"8 499",number:"2564561",price:"1 990₽ разово",abonprice:""},{id:"3",type:"vip",group:"495",code1:"8 495",code2:"",number:"7277777",price:"450 000 ₽",abonprice:""},{id:"4",type:"vip",group:"sochi",code1:"8 495",code2:"",number:"7777777",price:"450 000 ₽",abonprice:""},{id:"5",type:"pair",group:"mobile",code1:"8 495",code2:"8 499",number:"7377777",price:"150 000 ₽",abonprice:""},{id:"6",type:"single",group:"mobile",code1:"8 495",code2:"",number:"2934566",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"7",type:"single",group:"kras",code1:"8 495",code2:"",number:"2434567",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"8",type:"single",group:"499",code1:"8 495",code2:"",number:"2434568",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"9",type:"single",group:"499",code1:"8 495",code2:"",number:"2434569",price:"990₽ разово",abonprice:"190 ₽/мес"}],a=document.querySelector(".cart__content-upside"),l=document.querySelector(".choose__phones-cards"),q=document.querySelector(".cart__summary"),p=document.querySelector(".cart__button-buy"),S=document.querySelector(".cart__header"),_=document.querySelector(".cart__mobile-quantity");document.querySelector(".cart__content-header");let r=[];const h=()=>`
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
  </svg>`,u={single:"single",pair:"pair",vip:"vip"},E=()=>{f.forEach(e=>{switch(e.type){case u.single:l.innerHTML+=`<div class="card card_white choose__phones-card" data-id="${e.id}">
      <div class="choose__phones-single-number no-select">
        <span class="choose__city-code" data-city-code="${e.code1}"
          >${e.code1}</span> <span class="choose__phone-number no-select" data-number="${e.number}"
        >&nbsp;<i>${e.number.charAt(0)}</i><i>${e.number.charAt(1)}</i><i>${e.number.charAt(2)}</i><i>-</i><i>${e.number.charAt(3)}</i><i>${e.number.charAt(4)}</i
        ><i>-</i><i>${e.number.charAt(5)}</i><i>${e.number.charAt(6)}</i></span>
      </div >
    </div> `;break;case u.pair:l.innerHTML+=`
        <div class="card card_white choose__phones-card" data-id="${e.id}">
          <div class="choose__phones-pair-numbers">
            <span class="no-select">
                <span class="choose__city-code no-select" data-city-code="${e.code1}"
                  >${e.code1}</span
                >
                <span class="choose__phone-number">
                  <i>${e.number}</i>
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
        `;break;case u.vip:l.innerHTML+=`<div class="card card_white choose__phones-card" data-id ="${e.id}" >
          <div class="choose__phones-vip-number no-select">
            <span class="choose__city-code">${e.code1}</span>  <span class="choose__phone-number ">
              <i>${e.number}</i>
              </span>
            <div class="choose__phones-vip-price" data-price=${e.price}>${e.price}</div>
        </div>
        </div>`;break}})},x=e=>{if(r.some(t=>t.id===e))return!1;{const t=f.find(s=>s.id===e);return r.push(t),t}},I=e=>{const t=r.findIndex(i=>i.id===e);if(t<0)return;const s=a.querySelectorAll(".cart__item")[t];s.classList.add("cart__item_deleted"),s.addEventListener("animationend",()=>{r.splice(t,1),b(),m(r)},{once:!0})},T=e=>`<div class="cart__content-header"">${w[e]??""}</div>`;function g(e){var i,c;const{target:t}=e,s=(c=(i=t.parentElement)==null?void 0:i.parentElement)==null?void 0:c.dataset.cartItemId;s&&I(s)}const b=()=>{a.innerHTML="",r=L(r,"group");let e=null,t="",s=a.querySelectorAll(".cart__item-icon");s.forEach(i=>i.removeEventListener("click",g)),r.forEach(({id:i,number:c,code1:n,code2:o,group:d,abonprice:v,price:y,type:C})=>{e!==d&&(e=d,t+=T(d)),C!=="pair"?t+=`<div class="card card_white cart__item" data-cart-item-id=${i}>
          <div class="cart__item-number">
          <span class="choose__city-code">${n}</span> ${c.substring(0,3)}-${c.substring(3,5)}-${c.substring(5,7)}
 </div>
 <div class="cart__item-price">${y}<div class="cart__item-price_per-month">${v}</div>
 </div>${h()}</div>`:t+=`<div class="card card_white cart__item">
      <div class="cart__item-pair-numbers">
        <div class="cart__item-number">
        <span class="choose__city-code">${n}</span> ${c.substring(0,3)}-${c.substring(3,5)}-${c.substring(5,7)}
        </div>
        <div class="cart__item-number">
        <span class="choose__city-code">${o}</span> ${c.substring(0,3)}-${c.substring(3,5)}-${c.substring(5,7)}
        </div>
      </div>
      <div class="cart__item-price">${y}</div>
      <div class="cart__item-price_per-month">${v}</div>
      ${h()}
      </div>`}),a.innerHTML=t,s=a.querySelectorAll(".cart__item-icon"),s.forEach(i=>{i.addEventListener("click",g)}),k(),H()},H=()=>{let e=0,t=0;r.forEach(s=>{e+=parseInt(s.price.split(" ").join(""),10),t+=parseInt(s.abonprice.split(" ").join(""),10)||0}),q.innerHTML=`
  <div class="cart__summary">
    <span class="cart__summary_once">${e} ₽,</span>
    <span class="cart__summary_per-month"> ${t} ₽/мес </span>
  </div>`},k=()=>{let e=r.length;S.innerHTML=`
  <span class="cart__header-choice">Выбран${$(e,["","о","о"])}</span>&nbsp;<b
    class="cart__quantity"
  >${e}</b
  >&nbsp;<span class="cart__quantity-number">номер${$(e,["","а","ов"])}</span>
`,_.textContent=e,_.classList.add("cart__mobile-quantity_active"),e==0?(p.disabled=!0,_.classList.remove("cart__mobile-quantity_active")):e==1&&(p.textContent="Купите номер телефона"),e>0&&(p.disabled=!1)},M=()=>{location.pathname.includes("order")?r=A():(m([]),E(),document.querySelectorAll(".choose__phones-card").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.id;if(!x(s))return;b();const c=r.findIndex(o=>o.id===s);a.querySelectorAll(".cart__item")[c].classList.add("cart__item_new"),m(r)})})),b()};M();
