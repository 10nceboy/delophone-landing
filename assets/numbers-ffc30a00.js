import{c as S,t as a,a as _,d as O}from"./menu-91078bf9.js";import"./cart-c869a269.js";import"./tabs-20316558.js";const v=document.querySelectorAll(".filters__activator"),T=document.querySelectorAll(".filters__item"),C=document.querySelector(".filters__dropdown-button"),q=document.querySelector(".filter__wrapper"),A=document.querySelector(".search__error-button"),y=document.querySelector(".filter__reset"),M=e=>{const t=document.querySelector(".filter__arrow");if(t)return t.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,t};document.addEventListener("DOMContentLoaded",()=>{M(),q.addEventListener("click",()=>{document.querySelector(".filter__arrow").classList.toggle("filter__arrow_active")})});v.forEach(e=>{e.addEventListener("click",t=>{const o=t.currentTarget.dataset.filter,r=t.currentTarget.dataset.search;console.log(r),r!=="phones"?y.classList.remove("filter__reset_active"):y.classList.add("filter__reset_active");const s=document.querySelector(`.filters__item[data-filter="${o}"]`);C.innerHTML=e.innerHTML,document.querySelector(".filter__arrow").classList.remove("filter__arrow_active"),v.forEach(c=>{c.classList.remove("filters__activator_active")}),t.target.classList.add("filters__activator_active"),T.forEach(c=>{c.classList.remove("filters__item_active")}),s.classList.add("filters__item_visible"),requestAnimationFrame(()=>{s.classList.add("filters__item_active"),s.classList.remove("filters__item_visible")})})});S(q,()=>{const e=document.querySelector(".filter__arrow");e&&e.classList.remove("filter__arrow_active")});A.addEventListener("click",()=>{v.forEach(e=>{e.classList.remove("filters__activator_active"),filterItem.classList.add("filters__item_visible")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search__input"),t=document.querySelector(".search__submit-button");document.querySelector(".search");const o=document.querySelector(".search__close-button"),r=document.querySelectorAll(".choose__phone-number"),s=()=>{o.classList.remove("search__close-button_active"),t.classList.remove("search__submit-button_active"),setTimeout(()=>{o.classList.remove("search__close-button_visible"),t.classList.remove("search__submit-button_visible"),e.classList.remove("search__input_active")},200)},w=()=>{a(t,"search__submit-button"),a(o,"search__close-button"),a(e,"search__input")};e.addEventListener("input",c=>{const h=c.target.value.trim();let g=new RegExp(h.split("").join("[\\s-]*"),"gi");r.forEach(E=>{E.querySelectorAll("i").forEach(d=>{const p=d.textContent;if(p.matchAll(g)){const k=p.replace(g,'<i class="search__highlight">$&</i>');d.innerHTML=k}o.addEventListener("click",()=>{d.textContent=p})})})}),e.addEventListener("keyup",c=>{c.target.value.length==0?s():w()}),o.addEventListener("click",c=>{s(),e.value=""}),e.addEventListener("keydown",c=>{if(["Enter","Tab","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","0","1","2","3","4","5","6","7","8","9","(",")","?","*"].includes(c.key))return!0;c.preventDefault()})});const m=["Москва (495)","Москва (499)","Санкт-Петербург","Сочи","Краснодар","Ростов-на-Дону","Екатеринбург","Самара","Казань","Челябинск","Владивосток","Тюмень","Воронеж","Ставрополь","Волгоград","Нижний Новгород","Новосибирск"],x=e=>{const t=e.querySelector(".autocomplete__arrow");if(t)return t.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,t},L=document.querySelector(".autocomplete"),B=document.querySelector(".autocomplete__input-wrapper"),f=document.querySelector(".autocomplete__input"),i=x(L),D=document.querySelector(".autocomplete__arrow-wrapper"),l=document.querySelector(".autocomplete__close-button");function b(e){const{target:t}=e;f.value=t.innerHTML;const o=document.querySelector(".autocomplete__options");_(o,"autocomplete__options"),window.setTimeout(()=>{n()},300),i.classList.remove("autocomplete__arrow_active"),l.classList.remove("autocomplete__close-button_active"),e.stopImmediatePropagation()}const u=e=>{const t=document.createElement("ul");t.className="autocomplete__options",t.id="autocomplete__options",L.appendChild(t),e.forEach(o=>{const r=document.createElement("li");r.innerHTML=o,t.appendChild(r),r.className="autocomplete__option-item",r.addEventListener("click",b)})},n=()=>{const e=document.querySelector("#autocomplete__options");e&&(e.querySelectorAll(".autocomplete__option").forEach(o=>o.removeEventListener("click",b)),e.remove())},I=e=>{n();const t=e.toLowerCase().trim(),o=m.filter(s=>s.toLowerCase().trim().includes(t));if(!o.length){u(["Нет подходящих городов"]),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_disabled"),document.querySelector(".autocomplete__option-item").classList.add("autocomplete__option-item_disabled");return}u(o),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active")},H=O(I);f.addEventListener("input",e=>{const t=e.target.value.toString().toLowerCase().trim();H(t),t?l.classList.add("autocomplete__close-button_active"):l.classList.remove("autocomplete__close-button_active")});S(L,()=>{const e=document.querySelector(".autocomplete__options");e&&(i.classList.remove("autocomplete__arrow_active"),_(e,"autocomplete__options"),window.setTimeout(()=>{n()},100))});B.addEventListener("click",e=>{e.stopImmediatePropagation(),i.classList.add("autocomplete__arrow_active");const t=document.querySelector(".autocomplete__options");if(t)_(t,"autocomplete__options"),window.setTimeout(()=>{n()},100),i.classList.remove("autocomplete__arrow_active");else{u(m);const o=document.querySelector(".autocomplete__options");a(o,"autocomplete__options")}});D.addEventListener("click",e=>{e.stopImmediatePropagation(),i.classList.add("autocomplete__arrow_active");const t=document.querySelector(".autocomplete__options");if(t)_(t,"autocomplete__options"),window.setTimeout(()=>{n()},100),i.classList.remove("autocomplete__arrow_active");else{u(m);const o=document.querySelector(".autocomplete__options");a(o,"autocomplete__options")}});l.addEventListener("click",e=>{f.value="",n(),u(m),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active"),l.classList.remove("autocomplete__close-button_active")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".gift"),t=document.querySelector(".gift__button"),o=document.querySelector(".gift__close-button");t.addEventListener("click",()=>{e.classList.toggle("gift_active")}),o.addEventListener("click",()=>{e.classList.remove("gift_active")})});