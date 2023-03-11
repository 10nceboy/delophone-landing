const i="номер",r="Выбран";document.querySelector(".cart");const s=document.querySelector(".cart__content-upside"),u=document.querySelectorAll(".choose__phones-card"),m=()=>{const t=document.createElement("div");t.className="cart__content-header",s.appendChild(t);const e=document.querySelector(".tabs__activator_active"),c=e.dataset.tab,o=document.querySelector(".autocomplete__input");c!="cities"?t.textContent=e.textContent:t.textContent=o.value},_=()=>{const t=document.createElement("div");s.appendChild(t),t.className="card card_white cart__item",t.innerHTML=`<div class="cart__item-number">
  <span class="choose__city-code">8 495</span> 243-45-61
</div>
<div class="cart__item-price">
  990₽ разово,
  <div class="cart__item-price_per-month">190₽/мес</div>
</div>
${C()}`},C=()=>`
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
  </svg>`;u.forEach(t=>t.addEventListener("click",()=>{m(),_();const e=document.querySelector(".cart__item");document.querySelector(".cart__item-icon").addEventListener("click",()=>{e.remove()})}));const n=document.querySelector(".cart__button-buy"),v=document.querySelector(".cart__quantity"),d=document.querySelector(".cart__quantity-number"),a=document.querySelector(".cart__header-choice");document.addEventListener("DOMContentLoaded",()=>{let t=parseInt(v.textContent.split(" ").join(""),10);const e=(c,o,l=[2,0,1,1,1,2])=>o[c%100>4&&c%100<20?2:l[c%10<5?c%10:5]];t==0?(n.disabled=!0,a.textContent=r+"о",d.textContent=i+"ов"):(n&&(n.disabled=!1),d.textContent=i+e(t,["","а","ов"]),t%2==1?a.textContent=r:a.textContent=r+"о",t==1&&(n.textContent="Купите номер телефона"))});
