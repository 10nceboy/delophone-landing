import{c as E,t as m,d as H,a as $}from"./menu-239b9c86.js";/* empty css                */import"./tabs-20316558.js";const y=document.querySelectorAll(".filters__activator"),x=document.querySelectorAll(".filters__item"),I=document.querySelector(".filters__dropdown-button"),C=document.querySelector(".filter__wrapper");document.querySelector(".filter__dropdown-list");const D=document.querySelector(".search__error-button"),B=e=>{const t=document.querySelector(".filter__arrow");if(t)return t.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,t};document.addEventListener("DOMContentLoaded",()=>{B(),C.addEventListener("click",()=>{document.querySelector(".filter__arrow").classList.toggle("filter__arrow_active")})});y.forEach(e=>{e.addEventListener("click",t=>{const r=t.currentTarget.dataset.filter,s=document.querySelector(`.filters__item[data-filter="${r}"]`);I.innerHTML=e.innerHTML,document.querySelector(".filter__arrow").classList.remove("filter__arrow_active"),y.forEach(i=>{i.classList.remove("filters__activator_active")}),t.target.classList.add("filters__activator_active"),x.forEach(i=>{i.classList.remove("filters__item_active")}),s.classList.add("filters__item_visible"),requestAnimationFrame(()=>{s.classList.add("filters__item_active"),s.classList.remove("filters__item_visible")})})});E(C,()=>{const e=document.querySelector(".filter__arrow");e&&e.classList.remove("filter__arrow_active")});D.addEventListener("click",()=>{y.forEach(e=>{e.classList.remove("filters__activator_active"),filterItem.classList.add("filters__item_visible")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search__input"),t=document.querySelector(".search__submit-button");document.querySelector(".search");const r=document.querySelector(".search__close-button"),s=document.querySelectorAll(".choose__phone-number"),d=()=>{r.classList.remove("search__close-button_active"),t.classList.remove("search__submit-button_active"),setTimeout(()=>{r.classList.remove("search__close-button_visible"),t.classList.remove("search__submit-button_visible"),e.classList.remove("search__input_active")},200)},i=()=>{m(t,"search__submit-button"),m(r,"search__close-button"),m(e,"search__input")};e.addEventListener("input",u=>{const p=u.target.value.trim();let c=new RegExp(p,"gi");s.forEach(o=>{o.querySelectorAll("i").forEach(n=>{const _=n.textContent;if(_.match(c)){const M=_.replace(c,'<i class="search__highlight">$&</i>');n.innerHTML=M}else n.innerHTML=_})})}),e.addEventListener("keyup",u=>{u.target.value.length==0?d():i()}),r.addEventListener("click",()=>{d(),e.value=""}),e.addEventListener("keydown",u=>{if(["Enter","Tab","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","0","1","2","3","4","5","6","7","8","9","(",")","?","*"].includes(u.key))return!0;u.preventDefault()})});const k=[{id:"1",type:"single",filter:"city",code1:"8 495",code2:"",number:"2434561",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"2",type:"pair",filter:"city",code1:"8 495",code2:"8 499",number:"2564561",price:"1 990₽ разово",abonprice:""},{id:"3",type:"vip",filter:"city",code1:"8 495",code2:"",number:"7277777",price:"450 000 ₽",abonprice:""},{id:"4",type:"vip",filter:"mobile",code1:"8 495",code2:"",number:"7777777",price:"450 000 ₽",abonprice:""},{id:"5",type:"pair",filter:"mobile",code1:"8 495",code2:"8 499",number:"7377777",price:"150 000 ₽",abonprice:""},{id:"6",type:"single",filter:"city",code1:"8 495",code2:"",number:"2934561",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"7",type:"single",filter:"city",code1:"8 495",code2:"",number:"2434561",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"8",type:"single",filter:"city",code1:"8 495",code2:"",number:"2434561",price:"990₽ разово",abonprice:"190 ₽/мес"},{id:"9",type:"single",filter:"city",code1:"8 495",code2:"",number:"2434561",price:"990₽ разово",abonprice:"190 ₽/мес"}],v=document.querySelector(".cart__content-upside"),b=document.querySelector(".choose__phones-cards"),O=document.querySelector(".cart__summary"),L=document.querySelector(".cart__button-buy"),N=document.querySelector(".cart__header"),h=document.querySelector(".cart__mobile-quantity");document.querySelector(".cart__content-header");const T=()=>{localStorage.setItem("cartArray",JSON.stringify(l))},S=()=>`
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
  </svg>`;k.forEach(e=>{switch(e.type){case"single":b.innerHTML+=`<div class="card card_white choose__phones-card" data-id="${e.id}">
    <div class="choose__phones-single-number no-select">
      <span class="choose__city-code" data-city-code="${e.code1}"
        >${e.code1}</span> <span class="choose__phone-number no-select" data-number="${e.number}"
      >&nbsp;<i>${e.number.charAt(0)}</i><i>${e.number.charAt(1)}</i><i>${e.number.charAt(2)}</i><i>-</i><i>${e.number.charAt(3)}</i><i>${e.number.charAt(4)}</i
      ><i>-</i><i>${e.number.charAt(5)}</i><i>${e.number.charAt(6)}</i></span>
    </div >
  </div> `;break;case"pair":b.innerHTML+=`
      <div class="card card_white choose__phones-card" data-id="${e.id}">
        <div class="choose__phones-pair-numbers">
          <span class="no-select">
            <span class="choose__city-code no-select" data-city-code="${e.code1}"
              >${e.code1}</span
            >
            <span class="choose__phone-number">
              <i>${e.number.charAt(0)}</i><i>${e.number.charAt(1)}</i
              ><i>${e.number.charAt(2)}</i><i>-</i><i>${e.number.charAt(3)}</i
              ><i>${e.number.charAt(4)}</i><i>-</i><i>${e.number.charAt(5)}</i
              ><i>${e.number.charAt(6)}</i>
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
          8 <i>${e.code1.substring(2,5)}</i> ${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}
          8 <i>${e.code2.substring(2,5)}</i> ${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}
          Номера продаются только вместе"
            ></span>
          </div>
        </div>
      </div>      
      `;break;case"vip":b.innerHTML+=`<div class="card card_white choose__phones-card" data-id ="${e.id}" >
        <div class="choose__phones-vip-number no-select">
          <span class="choose__city-code">${e.code1}</span>  <span class="choose__phone-number ">
            <i>${e.number}</i>
            </span>
          <div class="choose__phones-vip-price" data-price=${e.price}>${e.price}</div>
      </div>
      </div>`;break}});const F=document.querySelectorAll(".choose__phones-card");F.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.id;P(t),f(),g(),w(),T()})});const P=e=>{if(!l.some(t=>t.id===e)){const t=k.find(r=>r.id===e);l.push(t)}},R=e=>{l=l.filter(t=>t.id!==e),f()},f=()=>{v.innerHTML="",l.forEach(e=>{e.type!=="pair"?v.innerHTML+=`<div class="card card_white cart__item">
 <div class="cart__item-number">
   <span class="choose__city-code">${e.code1}</span> ${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}
 </div>
 <div class="cart__item-price">${e.price}<div class="cart__item-price_per-month">${e.abonprice}</div></div>
 ${S()}</div>`:v.innerHTML+=`<div class="card card_white cart__item">
      <div class="cart__item-pair-numbers">
        <div class="cart__item-number">
        <span class="choose__city-code">${e.code1}</span> ${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}
        </div>
        <div class="cart__item-number">
        <span class="choose__city-code">${e.code2}</span> ${e.number.substring(0,3)}-${e.number.substring(3,5)}-${e.number.substring(5,7)}
        </div>
      </div>
      <div class="cart__item-price">${e.price}</div>
      <div class="cart__item-price_per-month">${e.abonprice}</div>
      ${S()}</div>`,document.querySelectorAll(".cart__item-icon").forEach(r=>{r.addEventListener("click",()=>{const s=e.id;R(s),g(),w(),T()})})})},g=()=>{let e=0,t=0;l.forEach(r=>{e+=parseInt(r.price.split(" ").join(""),10),t+=parseInt(r.abonprice.split(" ").join(""),10)||0}),O.innerHTML=`<div class="cart__summary">
  <span class="cart__summary_once">${e} ₽,</span>
  <span class="cart__summary_per-month"> ${t} ₽/мес </span>
</div>`},q=(e,t,r=[2,0,1,1,1,2])=>t[e%100>4&&e%100<20?2:r[e%10<5?e%10:5]],w=()=>{let e=l.length;N.innerHTML=`
  <span class="cart__header-choice">Выбран${q(e,["","о","о"])}</span>&nbsp;<b
    class="cart__quantity"
  >${e}</b
  >&nbsp;<span class="cart__quantity-number">номер${q(e,["","а","ов"])}</span>
`,h.textContent=e,h.classList.add("cart__mobile-quantity_active"),e==0?(L.disabled=!0,h.classList.remove("cart__mobile-quantity_active")):e==1&&(L.textContent="Купите номер телефона"),e>0&&(L.disabled=!1)};let l=JSON.parse(localStorage.getItem("cartArray"))||[];f();g();w();const A=["Москва (495)","Москва (499)","Санкт-Петербург","Сочи","Краснодар","Ростов-на-Дону","Екатеринбург","Самара","Казань","Челябинск","Владивосток","Тюмень","Воронеж","Ставрополь","Волгоград","Нижний Новгород","Новосибирск"],j=e=>{const t=e.querySelector(".autocomplete__arrow");if(t)return t.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,t};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".autocomplete"),t=document.querySelector(".autocomplete__input"),r=j(e);function s(c){c.stopPropagation();const{target:o}=c;t.value=o.innerHTML;const a=document.querySelector(".autocomplete__options");$(a,"autocomplete__options"),window.setTimeout(()=>{i()},300),r.classList.remove("autocomplete__arrow_active")}const d=c=>{const o=document.createElement("ul");o.className="autocomplete__options",o.id="autocomplete__options",e.appendChild(o),c.forEach(a=>{const n=document.createElement("li");n.innerHTML=a,o.appendChild(n),n.className="autocomplete__option-item",n.addEventListener("click",s)})},i=()=>{const c=document.querySelector("#autocomplete__options");c&&(c.querySelectorAll(".autocomplete__option").forEach(a=>a.removeEventListener("click",s)),c.remove())},p=H(c=>{i();const o=c.toLowerCase().trim(),a=A.filter(_=>_.toLowerCase().trim().includes(o));if(!a.length){d(["Нет пододящих городов"]),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active");return}d(a),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active")});t.addEventListener("input",c=>{const o=c.target.value.toString().toLowerCase().trim();p(o)}),E(e,()=>{const c=document.querySelector(".autocomplete__options");c&&(r.classList.remove("autocomplete__arrow_active"),$(c,"autocomplete__options"),window.setTimeout(()=>{i()},100))}),e.addEventListener("click",()=>{r.classList.add("autocomplete__arrow_active");const c=document.querySelector(".autocomplete__options");if(!c){t.focus(),d(A);const o=document.querySelector(".autocomplete__options");m(o,"autocomplete__options")}m(c,"autocomplete__options")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".gift"),t=document.querySelector(".gift__button"),r=document.querySelector(".gift__close-button");t.addEventListener("click",()=>{e.classList.add("gift_active")}),r.addEventListener("click",()=>{e.classList.remove("gift_active")})});
