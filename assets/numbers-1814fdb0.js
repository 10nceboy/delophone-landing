import{c as y,t as d,a as L}from"./menu-b9fc1ec5.js";import"./cart-eff07828.js";/* empty css                   */import"./collapse-88a07cb4.js";import"./tooltip-7b6b1fd2.js";import{d as A}from"./common-3fc2919b.js";const C=document.querySelectorAll(".filter__activator"),T=document.querySelectorAll(".filter__item"),M=document.querySelector(".filter__dropdown-button"),q=document.querySelector(".filter__wrapper"),S=document.querySelector(".filter__reset"),x=()=>{const e=document.querySelector(".filter__arrow");if(e)return e.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,e};document.addEventListener("DOMContentLoaded",()=>{x(),q.addEventListener("click",()=>{document.querySelector(".filter__arrow").classList.toggle("filter__arrow_active")})});C.forEach(e=>{e.addEventListener("click",t=>{const o=t.currentTarget.dataset.filter,s=t.currentTarget.dataset.search,a=["cities","mobiles","8800"],w=["usuals","bronze","silver","gold","vip"];s!=="phones"?S.classList.remove("filter__reset_active"):S.classList.add("filter__reset_active"),a.includes(o)||(M.innerHTML=e.innerHTML),document.querySelector(".filter__arrow").classList.remove("filter__arrow_active"),t.target.closest(".filter__activators").querySelectorAll(".filter__activator_active").forEach(n=>{n.classList.remove("filter__activator_active")}),t.target.classList.add("filter__activator_active");const m=document.querySelector(`.filter__item[data-filter="${o}"]`);w.includes(o)&&(T.forEach(n=>{n.classList.remove("filter__item_active")}),m.classList.add("filter__item_visible"),requestAnimationFrame(()=>{m.classList.add("filter__item_active"),m.classList.remove("filter__item_visible")}))})});y(q,()=>{const e=document.querySelector(".filter__arrow");e&&e.classList.remove("filter__arrow_active")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search__input"),t=document.querySelector(".search__submit-button"),o=document.querySelector(".search__close-button"),s=document.querySelectorAll(".choose__phone-number"),a=()=>{o.classList.remove("search__close-button_active"),t.classList.remove("search__submit-button_active"),setTimeout(()=>{o.classList.remove("search__close-button_visible"),t.classList.remove("search__submit-button_visible"),e.classList.remove("search__input_active")},200)},w=()=>{d(t,"search__submit-button"),d(o,"search__close-button"),d(e,"search__input")};e.addEventListener("input",c=>{const{value:i}=c.target,m=i.includes("*");let n=i==null?void 0:i.trim().replace(/[?]/gi,".").replace(/[*]/gi,"").split("").join("[\\s-]*");m&&(n=`${n}$`);let b=new RegExp(n,"g");s.forEach(k=>{k.querySelectorAll("i").forEach(h=>{const g=h.textContent;if(g.matchAll(b)){const O=g.replace(b,'<i class="search__highlight">$&</i>');h.innerHTML=O}o.addEventListener("click",()=>{h.textContent=g})})})}),e.addEventListener("keyup",c=>{c.target.value.length==0?a():w()}),o.addEventListener("click",c=>{a(),e.value="",e.focus()}),e.addEventListener("keydown",c=>{const i=["Enter","Tab","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","0","1","2","3","4","5","6","7","8","9","(",")","?","*"];if(c.target.value.includes("*")&&c.key==="*"&&c.preventDefault(),i.includes(c.key))return!0;c.preventDefault()})});const f=["Москва (495)","Москва (499)","Санкт-Петербург","Сочи","Краснодар","Ростов-на-Дону","Екатеринбург","Самара","Казань","Челябинск","Владивосток","Тюмень","Воронеж","Ставрополь","Волгоград","Нижний Новгород","Новосибирск"],B=e=>{const t=e.querySelector(".autocomplete__arrow");if(t)return t.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,t},p=document.querySelector(".autocomplete"),D=document.querySelector(".autocomplete__input-wrapper"),l=document.querySelector(".autocomplete__input"),u=B(p),F=document.querySelector(".autocomplete__arrow-wrapper"),r=document.querySelector(".autocomplete__close-button");function E(e){const{target:t}=e;l.value=t.innerHTML;const o=document.querySelector(".autocomplete__options");L(o,"autocomplete__options"),window.setTimeout(()=>{_()},300),u.classList.remove("autocomplete__arrow_active"),r.classList.remove("autocomplete__close-button_active"),e.stopImmediatePropagation()}const v=e=>{const t=document.createElement("ul");t.className="autocomplete__options",t.id="autocomplete__options",p.appendChild(t),e.forEach(o=>{const s=document.createElement("li");s.innerHTML=o,t.appendChild(s),s.className="autocomplete__option-item",s.addEventListener("click",E)})},_=()=>{const e=document.querySelector("#autocomplete__options");e&&(e.querySelectorAll(".autocomplete__option").forEach(o=>o.removeEventListener("click",E)),e.remove())},H=e=>{_();const t=e.toLowerCase().trim(),o=f.filter(a=>a.toLowerCase().trim().includes(t));if(!o.length){v(["Нет подходящих городов"]),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_disabled"),document.querySelector(".autocomplete__option-item").classList.add("autocomplete__option-item_disabled");return}v(o),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active")},I=A(H);l.addEventListener("input",e=>{const t=e.target.value.toString().toLowerCase().trim();I(t),t?r.classList.add("autocomplete__close-button_active"):r.classList.remove("autocomplete__close-button_active")});y(p,()=>{const e=document.querySelector(".autocomplete__options");e&&(u.classList.remove("autocomplete__arrow_active"),L(e,"autocomplete__options"),window.setTimeout(()=>{_()},100))});D.addEventListener("click",e=>{e.stopPropagation(),u.classList.add("autocomplete__arrow_active");const t=document.querySelector(".autocomplete__options");if(t)L(t,"autocomplete__options"),window.setTimeout(()=>{_()},100),u.classList.remove("autocomplete__arrow_active"),r.classList.remove("autocomplete__close-button_active");else{r.classList.add("autocomplete__close-button_active"),v(f);const o=document.querySelector(".autocomplete__options");d(o,"autocomplete__options")}});F.addEventListener("click",e=>{e.stopImmediatePropagation(),u.classList.add("autocomplete__arrow_active");const t=document.querySelector(".autocomplete__options");if(t)L(t,"autocomplete__options"),window.setTimeout(()=>{_()},100),u.classList.remove("autocomplete__arrow_active"),r.classList.remove("autocomplete__close-button_active");else{v(f);const o=document.querySelector(".autocomplete__options");r.classList.add("autocomplete__close-button_active"),d(o,"autocomplete__options")}});r.addEventListener("click",e=>{l.value="",_(),v(f),l.focus(),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active"),r.classList.remove("autocomplete__close-button_active")});l.addEventListener("click",e=>{e.target.value.trim()!==""&&r.classList.add("autocomplete__close-button_active")});const $=document.querySelectorAll("[data-disableAutocomplete]");$.forEach(e=>{e.addEventListener("click",t=>{const{target:o}=t;o.dataset.disableautocomplete==="true"?(l.value=" ",p.classList.add("autocomplete_disabled")):(p.classList.remove("autocomplete_disabled"),l.value="Москва (495)")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".gift"),t=document.querySelector(".gift__button"),o=document.querySelector(".gift__close-button");t.addEventListener("click",()=>{e.classList.toggle("gift_active")}),o.addEventListener("click",()=>{e.classList.remove("gift_active")})});