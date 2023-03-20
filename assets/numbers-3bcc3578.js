import{c as y,t as _,a as p,d as T}from"./menu-91078bf9.js";import"./cart-9496d2bf.js";import"./tabs-df46f4eb.js";const S=document.querySelectorAll(".filters__activator"),A=document.querySelectorAll(".filters__item"),M=document.querySelector(".filters__dropdown-button"),q=document.querySelector(".filter__wrapper"),b=document.querySelector(".filter__reset"),x=e=>{const t=document.querySelector(".filter__arrow");if(t)return t.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,t};document.addEventListener("DOMContentLoaded",()=>{x(),q.addEventListener("click",()=>{document.querySelector(".filter__arrow").classList.toggle("filter__arrow_active")})});S.forEach(e=>{e.addEventListener("click",t=>{const o=t.currentTarget.dataset.filter;t.currentTarget.dataset.search!=="phones"?b.classList.remove("filter__reset_active"):b.classList.add("filter__reset_active");const a=document.querySelector(`.filters__item[data-filter="${o}"]`);M.innerHTML=e.innerHTML,document.querySelector(".filter__arrow").classList.remove("filter__arrow_active"),S.forEach(c=>{c.classList.remove("filters__activator_active")}),t.target.classList.add("filters__activator_active"),A.forEach(c=>{c.classList.remove("filters__item_active")}),a.classList.add("filters__item_visible"),requestAnimationFrame(()=>{a.classList.add("filters__item_active"),a.classList.remove("filters__item_visible")})})});y(q,()=>{const e=document.querySelector(".filter__arrow");e&&e.classList.remove("filter__arrow_active")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search__input"),t=document.querySelector(".search__submit-button"),o=document.querySelector(".search__close-button"),s=document.querySelectorAll(".choose__phone-number"),a=()=>{o.classList.remove("search__close-button_active"),t.classList.remove("search__submit-button_active"),setTimeout(()=>{o.classList.remove("search__close-button_visible"),t.classList.remove("search__submit-button_visible"),e.classList.remove("search__input_active")},200)},h=()=>{_(t,"search__submit-button"),_(o,"search__close-button"),_(e,"search__input")};e.addEventListener("input",c=>{const{value:n}=c.target,k=n.includes("*");let L=n==null?void 0:n.trim().replace(/[?]/gi,".").replace(/[*]/gi,"").split("").join("[\\s-]*");k&&(L=`${L}$`);let g=new RegExp(L,"g");s.forEach(O=>{O.querySelectorAll("i").forEach(f=>{const w=f.textContent;if(w.matchAll(g)){const C=w.replace(g,'<i class="search__highlight">$&</i>');f.innerHTML=C}o.addEventListener("click",()=>{f.textContent=w})})})}),e.addEventListener("keyup",c=>{c.target.value.length==0?a():h()}),o.addEventListener("click",c=>{a(),e.value="",e.focus()}),e.addEventListener("keydown",c=>{const n=["Enter","Tab","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","0","1","2","3","4","5","6","7","8","9","(",")","?","*"];if(c.target.value.includes("*")&&c.key==="*"&&c.preventDefault(),n.includes(c.key))return!0;c.preventDefault()})});const v=["Москва (495)","Москва (499)","Санкт-Петербург","Сочи","Краснодар","Ростов-на-Дону","Екатеринбург","Самара","Казань","Челябинск","Владивосток","Тюмень","Воронеж","Ставрополь","Волгоград","Нижний Новгород","Новосибирск"],B=e=>{const t=e.querySelector(".autocomplete__arrow");if(t)return t.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,t},m=document.querySelector(".autocomplete"),D=document.querySelector(".autocomplete__input-wrapper"),i=document.querySelector(".autocomplete__input"),l=B(m),I=document.querySelector(".autocomplete__arrow-wrapper"),r=document.querySelector(".autocomplete__close-button");function E(e){const{target:t}=e;i.value=t.innerHTML;const o=document.querySelector(".autocomplete__options");p(o,"autocomplete__options"),window.setTimeout(()=>{u()},300),l.classList.remove("autocomplete__arrow_active"),r.classList.remove("autocomplete__close-button_active"),e.stopImmediatePropagation()}const d=e=>{const t=document.createElement("ul");t.className="autocomplete__options",t.id="autocomplete__options",m.appendChild(t),e.forEach(o=>{const s=document.createElement("li");s.innerHTML=o,t.appendChild(s),s.className="autocomplete__option-item",s.addEventListener("click",E)})},u=()=>{const e=document.querySelector("#autocomplete__options");e&&(e.querySelectorAll(".autocomplete__option").forEach(o=>o.removeEventListener("click",E)),e.remove())},H=e=>{u();const t=e.toLowerCase().trim(),o=v.filter(a=>a.toLowerCase().trim().includes(t));if(!o.length){d(["Нет подходящих городов"]),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_disabled"),document.querySelector(".autocomplete__option-item").classList.add("autocomplete__option-item_disabled");return}d(o),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active")},F=T(H);i.addEventListener("input",e=>{const t=e.target.value.toString().toLowerCase().trim();F(t),t?r.classList.add("autocomplete__close-button_active"):r.classList.remove("autocomplete__close-button_active")});y(m,()=>{const e=document.querySelector(".autocomplete__options");e&&(l.classList.remove("autocomplete__arrow_active"),p(e,"autocomplete__options"),window.setTimeout(()=>{u()},100))});D.addEventListener("click",e=>{e.stopPropagation(),l.classList.add("autocomplete__arrow_active");const t=document.querySelector(".autocomplete__options");if(t)p(t,"autocomplete__options"),window.setTimeout(()=>{u()},100),l.classList.remove("autocomplete__arrow_active"),r.classList.remove("autocomplete__close-button_active");else{r.classList.add("autocomplete__close-button_active"),d(v);const o=document.querySelector(".autocomplete__options");_(o,"autocomplete__options")}});I.addEventListener("click",e=>{e.stopImmediatePropagation(),l.classList.add("autocomplete__arrow_active");const t=document.querySelector(".autocomplete__options");if(t)p(t,"autocomplete__options"),window.setTimeout(()=>{u()},100),l.classList.remove("autocomplete__arrow_active"),r.classList.remove("autocomplete__close-button_active");else{d(v);const o=document.querySelector(".autocomplete__options");r.classList.add("autocomplete__close-button_active"),_(o,"autocomplete__options")}});r.addEventListener("click",e=>{i.value="",u(),d(v),i.focus(),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active"),r.classList.remove("autocomplete__close-button_active")});i.addEventListener("click",e=>{e.target.value.trim()!==""&&r.classList.add("autocomplete__close-button_active")});const $=document.querySelectorAll("[data-disableAutocomplete]");$.forEach(e=>{e.addEventListener("click",t=>{const{target:o}=t,s=o.dataset.disableautocomplete;console.log(s),s==="true"?(i.value=" ",m.classList.add("autocomplete_disabled")):(m.classList.remove("autocomplete_disabled"),i.value="Москва (495)")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".gift"),t=document.querySelector(".gift__button"),o=document.querySelector(".gift__close-button");t.addEventListener("click",()=>{e.classList.toggle("gift_active")}),o.addEventListener("click",()=>{e.classList.remove("gift_active")})});
