import{g as x,f as o,h as g}from"./menu-d5da2a40.js";const C=e=>{localStorage.setItem("cartArray",JSON.stringify(e))},h=()=>JSON.parse(localStorage.getItem("cartArray"))||[],E={mobile:"Мобильные",499:"Москва (499)",495:"Москва (495)",49599:"Москва 499+495 (комплект)",8800:"8 800",sochi:"Сочи",spb:"Санкт-Петербург",kras:"Краснодар"},q=[{id:"1",type:"single",group:"499",code1:"8 495",code2:"",number:"2434561",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"2",type:"pair",group:"49599",code1:"8 495",code2:"8 499",number:"2564561",price:"1 990₽ разово",abonprice:""},{id:"3",type:"vip",group:"495",code1:"8 495",code2:"",number:"7277777",price:"450 000 ₽",abonprice:""},{id:"4",type:"vip",group:"sochi",code1:"8 495",code2:"",number:"7777777",price:"450 000 ₽",abonprice:""},{id:"5",type:"pair",group:"49599",code1:"8 495",code2:"8 499",number:"7377777",price:"150 000 ₽",abonprice:""},{id:"6",type:"single",group:"mobile",code1:"8 988",code2:"",number:"2934566",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"7",type:"single",group:"kras",code1:"8 861",code2:"",number:"2434567",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"8",type:"single",group:"495",code1:"8 495",code2:"",number:"2434568",price:"990₽",abonprice:"190"},{id:"9",type:"single",group:"495",code1:"8 495",code2:"",number:"4434569",price:"990₽",abonprice:"190"},{id:"10",type:"single",group:"8800",code1:"8 800",code2:"",number:"1233567",price:"990",abonprice:"190"}],l=document.querySelector(".cart__content-upside"),u=document.querySelector(".choose__phones-cards"),A=document.querySelector(".cart__summary"),_=document.querySelector(".cart__button-buy"),$=document.querySelector(".cart__header"),d=document.querySelector(".cart__mobile-quantity");let i=[];const f=()=>`
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
  </svg>`,p={single:"single",pair:"pair",vip:"vip"},I=()=>{q.forEach(e=>{switch(e.type){case p.single:u.innerHTML+=`<div class="card card_white choose__phones-card" data-id="${e.id}">
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
        </div>`;break}})},T=e=>{if(i.some(t=>t.id===e))return!1;{const t=q.find(s=>s.id===e);return i.push(t),t}},S=e=>{const t=i.findIndex(r=>r.id===e);if(t<0)return;const s=l.querySelectorAll(".cart__item")[t];s.classList.add("cart__item_deleted"),s.addEventListener("animationend",()=>{i.splice(t,1),m(),C(i)},{once:!0})},k=e=>`<div class="cart__content-header no-select">${E[e]??""}</div>`;function L(e){var r,c,a;const{target:t}=e,s=(c=(r=t.parentElement)==null?void 0:r.parentElement)==null?void 0:c.dataset.cartItemId;(a=document.querySelector(`.choose__phones-card_disabled[data-id="${s}"]`))==null||a.classList.remove("choose__phones-card_disabled"),s&&S(s)}const m=()=>{i=x(i,"group");let e=null,t="";i.length==0&&(location.pathname.includes("order")?t=` <div class="cart__content-header">
Вернитесь к выбору номеров. <br> Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`:t=` <div class="cart__content-header">
Нажимайте на подходящие номера, чтобы выбрать их для
покупки.
</div>`);let s=l.querySelectorAll(".cart__item-icon");s.forEach(r=>r.removeEventListener("click",L)),i.forEach(({id:r,number:c,code1:a,code2:b,group:n,abonprice:v,price:y,type:w})=>{e!==n&&(e=n,t+=k(n)),w!=="pair"?t+=`<div class="card card_white cart__item" data-cart-item-id=${r}>
          <div class="cart__item-number no-select">
          <span class="choose__city-code">${a}</span> ${c.substring(0,3)}-${c.substring(3,5)}-${c.substring(5,7)}
 </div>
 <div class="cart__item-price no-select">${y}<div class="cart__item-price_per-month no-select">${v}</div>
 </div>${f()}</div>`:t+=`<div class="card card_white cart__item" data-cart-item-id=${r}>
      <div class="cart__item-pair-numbers no-select">
        <div class="cart__item-number">
        <span class="choose__city-code">${a}</span> ${c.substring(0,3)}-${c.substring(3,5)}-${c.substring(5,7)}
        </div>
        <div class="cart__item-number">
        <span class="choose__city-code">${b}</span> ${c.substring(0,3)}-${c.substring(3,5)}-${c.substring(5,7)}
        </div>
      </div>
      <div class="cart__item-price no-select">${y}</div>
      <div class="cart__item-price_per-month no-select">${v}</div>
      ${f()}
      </div>`}),l.innerHTML=t,s=l.querySelectorAll(".cart__item-icon"),s.forEach(r=>{r.addEventListener("click",L)}),M(),H()},H=()=>{let e=0,t=0;i.forEach(r=>{e+=parseInt(r.price.split(" ").join(""),10),t+=parseInt(r.abonprice.split(" ").join(""),10)||0}),A.innerHTML=`
  <div class="cart__summary">
    <span class="cart__summary_once">${o(e)} ₽,</span>
    <span class="cart__summary_per-month"> ${o(t)} ₽/мес </span>
  </div>`;const s=document.querySelector(".order__pay-once");if(s){const r=document.querySelector(".order__pay-per-month"),c=document.querySelector(".order__summary");s.textContent=o(e),r.textContent=o(t),c.textContent=o(t+e),document.querySelector(".order__summary-button").textContent=document.querySelector(".order__summary").textContent}},M=()=>{var t,s;let e=i.length;$.innerHTML=`
  <span class="cart__header-choice no-select">Выбран${g(e,["","о","о"])}</span>&nbsp;<b
    class="cart__quantity no-select"
  >${e}</b
  >&nbsp;<span class="cart__quantity-number no-select">номер${g(e,["","а","ов"])}</span>
`,$.classList.add("no-select"),(d||_)&&(e==0?(_.disabled=!0,d.classList.remove("cart__mobile-quantity_active"),(t=document.querySelector(".cart__mobile-button"))==null||t.classList.remove("cart__mobile-button_active")):e==1&&(_.textContent="Купите номер телефона"),e>0?(_.disabled=!1,d.classList.add("cart__mobile-quantity_active"),d.textContent=e,(s=document.querySelector(".cart__mobile-button"))==null||s.classList.add("cart__mobile-button_active")):d.classList.remove("cart__mobile-quantity_active"))},P=()=>{location.pathname.includes("order")?i=h():(i=h(),I(),document.querySelectorAll(".choose__phones-card").forEach(t=>{t.addEventListener("click",s=>{s.stopPropagation();const r=t.dataset.id;if(!T(r)){t.classList.remove("choose__phones-card_disabled"),S(r);return}t.classList.add("choose__phones-card_disabled"),m();const a=i.findIndex(n=>n.id===r);l.querySelectorAll(".cart__item")[a].classList.add("cart__item_new"),C(i)})})),m()};P();
