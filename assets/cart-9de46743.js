import{b as E,e as o,g as h}from"./menu-c8c7a834.js";const q=e=>{localStorage.setItem("cartArray",JSON.stringify(e))},$=()=>JSON.parse(localStorage.getItem("cartArray"))||[],A={mobile:"Мобильные",499:"Москва (499)",495:"Москва (495)",49599:"Москва 499+495 (комплект)",8800:"8 800",sochi:"Сочи",spb:"Санкт-Петербург",kras:"Краснодар"},S=[{id:"1",type:"single",group:"499",code1:"8 495",code2:"",number:"2434561",price:"990 ₽ разово",abonprice:"190 ₽/мес"},{id:"2",type:"pair",group:"49599",code1:"8 495",code2:"8 499",number:"2564561",price:"1 990 ₽ разово",abonprice:""},{id:"3",type:"vip",group:"495",code1:"8 495",code2:"",number:"7277777",price:"450 000 ₽",abonprice:""},{id:"4",type:"vip",group:"sochi",code1:"8 495",code2:"",number:"7777777",price:"450 000 ₽",abonprice:""},{id:"5",type:"pair",group:"49599",code1:"8 495",code2:"8 499",number:"7377777",price:"150 000 ₽",abonprice:""},{id:"6",type:"single",group:"mobile",code1:"8 988",code2:"",number:"2934566",price:"990 ₽ разово",abonprice:"190 ₽/мес"},{id:"7",type:"single",group:"kras",code1:"8 861",code2:"",number:"2434567",price:"990 ₽ разово",abonprice:"190 ₽/мес"},{id:"8",type:"single",group:"495",code1:"8 495",code2:"",number:"2434568",price:"990 ₽ разово",abonprice:"190 ₽/мес"},{id:"9",type:"single",group:"495",code1:"8 495",code2:"",number:"4434569",price:"990 ₽ разово",abonprice:"190 ₽/мес"},{id:"10",type:"single",group:"8800",code1:"8 800",code2:"",number:"1233567",price:"990 ₽ разово",abonprice:"190 ₽/мес"}],d=document.querySelector(".cart__content-upside"),m=document.querySelector(".choose__phones-cards"),I=document.querySelector(".cart__summary"),l=document.querySelector(".cart__button-buy"),f=document.querySelector(".cart__header"),_=document.querySelector(".cart__mobile-button"),a=document.querySelector(".cart__mobile-quantity");let r=[];const L=()=>`
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
  </svg>`,b={single:"single",pair:"pair",vip:"vip"},T=()=>{S.forEach(e=>{switch(e.type){case b.single:m.innerHTML+=`<div class="card card_white choose__phones-card" data-id="${e.id}">
      <div class="choose__phones-single-number no-select">
        <span class="choose__city-code" data-city-code="${e.code1}"
          >${e.code1}</span> <span class="choose__phone-number no-select" data-number="${e.number}"
        >&nbsp;<i>${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}</i></span>
      </div>
    </div> `;break;case b.pair:m.innerHTML+=`
        <div class="card card_white choose__phones-card" data-id="${e.id}">
          <div class="choose__phones-pair-numbers">
            <span class="no-select">
                <span class="choose__city-code no-select" data-city-code="${e.code1}"
                  >${e.code1}</span
                >
                <span class="choose__phone-number">
                  <i>${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}</i>
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
        `;break;case b.vip:m.innerHTML+=`<div class="card card_white choose__phones-card" data-id ="${e.id}" >
          <div class="choose__phones-vip-number no-select">
            <span class="choose__city-code">${e.code1}</span>  <span class="choose__phone-number ">
              <i>${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}</i>
              </span>
            <div class="choose__phones-vip-price" data-price=${e.price}>${e.price}</div>
        </div>
        </div>`;break}})},k=e=>{if(r.some(t=>t.id===e))return!1;{const t=S.find(s=>s.id===e);return r.push(t),t}},x=e=>{const t=r.findIndex(c=>c.id===e);if(t<0)return;const s=d.querySelectorAll(".cart__item")[t];s.classList.add("cart__item_deleted"),r.splice(t,1),q(r),s.addEventListener("animationend",()=>{v()},{once:!0})},H=e=>`<div class="cart__content-header no-select">${A[e]??""}</div>`;function C(e){var c,i,n;const{target:t}=e,s=(i=(c=t.parentElement)==null?void 0:c.parentElement)==null?void 0:i.dataset.cartItemId;(n=document.querySelector(`.choose__phones-card_disabled[data-id="${s}"]`))==null||n.classList.remove("choose__phones-card_disabled"),s&&x(s)}const v=()=>{r=E(r,"group");let e=null,t="";r.length==0&&(location.pathname.includes("order")?t=` <div class="cart__content-header">
Вернитесь к выбору номеров. <br> Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`:t=` <div class="cart__content-header">
Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`);let s=d.querySelectorAll(".cart__item-icon");s.forEach(c=>c.removeEventListener("click",C)),r.forEach(({id:c,number:i,code1:n,code2:u,group:p,abonprice:y,price:g,type:w})=>{e!==p&&(e=p,t+=H(p)),w!=="pair"?t+=`<div class="card card_white cart__item" data-cart-item-id=${c}>
          <div class="cart__item-number no-select">
          <span class="choose__city-code">${n}</span> ${i.substring(0,3)}-${i.substring(3,5)}-${i.substring(5,7)}
 </div>
 <div class="cart__item-price no-select">${g}<div class="cart__item-price_per-month no-select">${y}</div>
 </div>${L()}</div>`:t+=`<div class="card card_white cart__item" data-cart-item-id=${c}>
      <div class="cart__item-pair-numbers no-select">
        <div class="cart__item-number">
        <span class="choose__city-code">${n}</span> ${i.substring(0,3)}-${i.substring(3,5)}-${i.substring(5,7)}
        </div>
        <div class="cart__item-number">
        <span class="choose__city-code">${u}</span> ${i.substring(0,3)}-${i.substring(3,5)}-${i.substring(5,7)}
        </div>
      </div>
      <div class="cart__item-price no-select">${g}</div>
      <div class="cart__item-price_per-month no-select">${y}</div>
      ${L()}
      </div>`}),d.innerHTML=t,s=d.querySelectorAll(".cart__item-icon"),s.forEach(c=>{c.addEventListener("click",C)}),P(),M()},M=()=>{let e=0,t=0;r.forEach(c=>{e+=parseInt(c.price.split(" ").join(""),10),t+=parseInt(c.abonprice.split(" ").join(""),10)||0}),I.innerHTML=`
  <div class="cart__summary">
    <span class="cart__summary_once">${o(e)} ₽,</span>
    <span class="cart__summary_per-month"> ${o(t)} ₽/мес </span>
  </div>`;const s=document.querySelector(".order__pay-once");if(s){const c=document.querySelector(".order__pay-per-month"),i=document.querySelector(".order__summary");s.textContent=o(e),c.textContent=o(t),i.textContent=o(t+e),document.querySelector(".order__summary-button").textContent=document.querySelector(".order__summary").textContent}},P=()=>{let e=r.length;f.innerHTML=`
  <span class="cart__header-choice no-select">Выбран${h(e,["","о","о"])}</span>&nbsp;<b
    class="cart__quantity no-select"
  >${e}</b
  >&nbsp;<span class="cart__quantity-number no-select">номер${h(e,["","а","ов"])}</span>
`,f.classList.add("no-select"),(a||l)&&(e==0?(l.disabled=!0,a.classList.remove("cart__mobile-quantity_active"),_.classList.remove("cart__mobile-button_active")):e==1&&(l.textContent="Купите номер телефона"),e>0?(l.disabled=!1,a.classList.add("cart__mobile-quantity_active"),a.textContent=e,_.classList.add("cart__mobile-button_active")):(a.classList.remove("cart__mobile-quantity_active"),_.classList.remove("cart__mobile-button_active")))},B=()=>{location.pathname.includes("order")?r=$():(r=$(),T(),document.querySelectorAll(".choose__phones-card").forEach(t=>{const s=t.dataset.id;r.some(c=>c.id===s)&&t.classList.add("choose__phones-card_disabled"),t.addEventListener("click",()=>{if(!k(s)){t.classList.remove("choose__phones-card_disabled"),x(s),r.length!==0?a.textContent=r.length:(a.textContent=r.length,a.classList.remove("cart__mobile-quantity_active"),_.classList.remove("cart__mobile-button_active"));return}t.classList.add("choose__phones-card_disabled"),v();const i=r.findIndex(u=>u.id===s);d.querySelectorAll(".cart__item")[i].classList.add("cart__item_new"),q(r)})})),v()};B();
