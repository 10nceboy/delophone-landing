import{g as S,f as x,h as y}from"./menu-d5da2a40.js";const f=e=>{localStorage.setItem("cartArray",JSON.stringify(e))},g=()=>JSON.parse(localStorage.getItem("cartArray"))||[],w={mobile:"Мобильные",499:"Москва (499)",495:"Москва (495)",49599:"Москва 499+495 (комплект)",8800:"8 800",sochi:"Сочи",spb:"Санкт-Петербург",kras:"Краснодар"},C=[{id:"1",type:"single",group:"499",code1:"8 495",code2:"",number:"2434561",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"2",type:"pair",group:"49599",code1:"8 495",code2:"8 499",number:"2564561",price:"1 990₽ разово",abonprice:""},{id:"3",type:"vip",group:"495",code1:"8 495",code2:"",number:"7277777",price:"450 000 ₽",abonprice:""},{id:"4",type:"vip",group:"sochi",code1:"8 495",code2:"",number:"7777777",price:"450 000 ₽",abonprice:""},{id:"5",type:"pair",group:"49599",code1:"8 495",code2:"8 499",number:"7377777",price:"150 000 ₽",abonprice:""},{id:"6",type:"single",group:"mobile",code1:"8 988",code2:"",number:"2934566",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"7",type:"single",group:"kras",code1:"8 861",code2:"",number:"2434567",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"8",type:"single",group:"495",code1:"8 495",code2:"",number:"2434568",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"9",type:"single",group:"495",code1:"8 495",code2:"",number:"4434569",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"10",type:"single",group:"8800",code1:"8 800",code2:"",number:"1233567",price:"990₽ разово",abonprice:"190 ₽/мес"}],d=document.querySelector(".cart__content-upside"),u=document.querySelector(".choose__phones-cards"),A=document.querySelector(".cart__summary"),l=document.querySelector(".cart__button-buy"),E=document.querySelector(".cart__header"),o=document.querySelector(".cart__mobile-quantity");let a=[];const h=()=>`
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
  </svg>`,p={single:"single",pair:"pair",vip:"vip"},I=()=>{C.forEach(e=>{switch(e.type){case p.single:u.innerHTML+=`<div class="card card_white choose__phones-card" data-id="${e.id}">
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
        </div>`;break}})},T=e=>{if(a.some(t=>t.id===e))return!1;{const t=C.find(s=>s.id===e);return a.push(t),t}},L=e=>{const t=a.findIndex(r=>r.id===e);if(t<0)return;const s=d.querySelectorAll(".cart__item")[t];s.classList.add("cart__item_deleted"),s.addEventListener("animationend",()=>{a.splice(t,1),m(),f(a)},{once:!0})},k=e=>`<div class="cart__content-header"">${w[e]??""}</div>`;function $(e){var r,c,i;const{target:t}=e,s=(c=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:c.dataset.cartItemId;(i=document.querySelector(`.choose__phones-card_disabled[data-id="${s}"]`))==null||i.classList.remove("choose__phones-card_disabled"),s&&L(s)}const m=()=>{a=S(a,"group");let e=null,t="";a.length==0&&(location.pathname.includes("order")?t=` <div class="cart__content-header">
Вернитесь к выбору номеров. <br> Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`:t=` <div class="cart__content-header">
Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`);let s=d.querySelectorAll(".cart__item-icon");s.forEach(r=>r.removeEventListener("click",$)),a.forEach(({id:r,number:c,code1:i,code2:n,group:_,abonprice:b,price:v,type:q})=>{e!==_&&(e=_,t+=k(_)),q!=="pair"?t+=`<div class="card card_white cart__item" data-cart-item-id=${r}>
          <div class="cart__item-number">
          <span class="choose__city-code">${i}</span> ${c.substring(0,3)}-${c.substring(3,5)}-${c.substring(5,7)}
 </div>
 <div class="cart__item-price">${v}<div class="cart__item-price_per-month">${b}</div>
 </div>${h()}</div>`:t+=`<div class="card card_white cart__item" data-cart-item-id=${r}>
      <div class="cart__item-pair-numbers">
        <div class="cart__item-number">
        <span class="choose__city-code">${i}</span> ${c.substring(0,3)}-${c.substring(3,5)}-${c.substring(5,7)}
        </div>
        <div class="cart__item-number">
        <span class="choose__city-code">${n}</span> ${c.substring(0,3)}-${c.substring(3,5)}-${c.substring(5,7)}
        </div>
      </div>
      <div class="cart__item-price">${v}</div>
      <div class="cart__item-price_per-month">${b}</div>
      ${h()}
      </div>`}),d.innerHTML=t,s=d.querySelectorAll(".cart__item-icon"),s.forEach(r=>{r.addEventListener("click",$)}),M(),H()},H=()=>{let e=0,t=0;a.forEach(r=>{e+=parseInt(r.price.split(" ").join(""),10),t+=parseInt(r.abonprice.split(" ").join(""),10)||0}),A.innerHTML=`
  <div class="cart__summary">
    <span class="cart__summary_once">${e} ₽,</span>
    <span class="cart__summary_per-month"> ${t} ₽/мес </span>
  </div>`;const s=document.querySelector(".order__pay-once");if(s){const r=document.querySelector(".order__pay-per-month"),c=document.querySelector(".order__summary");s.textContent=e,r.textContent=t;let i=parseInt(s.textContent),n=parseInt(r.textContent);c.textContent=x(i+n),document.querySelector(".order__summary-button").textContent=document.querySelector(".order__summary").textContent}},M=()=>{var t,s;let e=a.length;E.innerHTML=`
  <span class="cart__header-choice">Выбран${y(e,["","о","о"])}</span>&nbsp;<b
    class="cart__quantity"
  >${e}</b
  >&nbsp;<span class="cart__quantity-number">номер${y(e,["","а","ов"])}</span>
`,(o||l)&&(e==0?(l.disabled=!0,o.classList.remove("cart__mobile-quantity_active"),(t=document.querySelector(".cart__mobile-button"))==null||t.classList.remove("cart__mobile-button_active")):e==1&&(l.textContent="Купите номер телефона"),e>0?(l.disabled=!1,o.classList.add("cart__mobile-quantity_active"),o.textContent=e,(s=document.querySelector(".cart__mobile-button"))==null||s.classList.add("cart__mobile-button_active")):o.classList.remove("cart__mobile-quantity_active"))},P=()=>{location.pathname.includes("order")?a=g():(a=g(),I(),document.querySelectorAll(".choose__phones-card").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.id;if(!T(s)){t.classList.remove("choose__phones-card_disabled"),L(s);return}t.classList.add("choose__phones-card_disabled"),m();const c=a.findIndex(n=>n.id===s);d.querySelectorAll(".cart__item")[c].classList.add("cart__item_new"),f(a)})})),m()};P();
