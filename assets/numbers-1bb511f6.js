import{c as L,t as u,d as h,a as m}from"./carousel-8383c908.js";import"./cart-e0f788d5.js";const _=document.querySelectorAll(".filters__activator"),y=document.querySelectorAll(".filters__item"),S=document.querySelector(".filters__dropdown-button"),v=document.querySelector(".filter__wrapper");document.querySelector(".filter__dropdown-list");const g=document.querySelector(".search__error-button"),q=e=>{const t=document.querySelector(".filter__arrow");if(t)return t.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,t};document.addEventListener("DOMContentLoaded",()=>{q(),v.addEventListener("click",()=>{document.querySelector(".filter__arrow").classList.toggle("filter__arrow_active")})});_.forEach(e=>{e.addEventListener("click",t=>{const c=t.currentTarget.dataset.filter,i=document.querySelector(`.filters__item[data-filter="${c}"]`);S.innerHTML=e.innerHTML,document.querySelector(".filter__arrow").classList.remove("filter__arrow_active"),_.forEach(s=>{s.classList.remove("filters__activator_active")}),t.target.classList.add("filters__activator_active"),y.forEach(s=>{s.classList.remove("filters__item_active")}),i.classList.add("filters__item_visible"),requestAnimationFrame(()=>{i.classList.add("filters__item_active"),i.classList.remove("filters__item_visible")})})});L(v,()=>{const e=document.querySelector(".filter__arrow");e&&e.classList.remove("filter__arrow_active")});g.addEventListener("click",()=>{_.forEach(e=>{e.classList.remove("filters__activator_active"),filterItem.classList.add("filters__item_visible")})});document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".search__input");const t=document.querySelector(".search__submit-button");document.querySelector(".search");const c=document.querySelector(".search__close-button"),i=()=>{c.classList.remove("search__close-button_active"),t.classList.remove("search__submit-button_active"),setTimeout(()=>{c.classList.remove("search__close-button_visible"),t.classList.remove("search__submit-button_visible"),e.classList.remove("search__input_active")},200)},a=()=>{u(t,"search__submit-button"),u(c,"search__close-button"),u(e,"search__input")};e.addEventListener("keyup",s=>{s.target.value.length==0?i():a()}),c.addEventListener("click",()=>{i(),e.value=""}),e.addEventListener("keydown",s=>{if(["Enter","Tab","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","0","1","2","3","4","5","6","7","8","9","(",")","?","*"].includes(s.key))return!0;s.preventDefault()})});const p=["Москва (495)","Москва (499)","Санкт-Петербург","Сочи","Краснодар","Ростов-на-Дону","Екатеринбург","Самара","Казань","Челябинск","Владивосток","Тюмень","Воронеж","Ставрополь","Волгоград","Нижний Новгород","Новосибирск"],E=e=>{const t=e.querySelector(".autocomplete__arrow");if(t)return t.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,t};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".autocomplete"),t=document.querySelector(".autocomplete__input"),c=E(e);function i(o){o.stopPropagation();const{target:r}=o;t.value=r.innerHTML;const n=document.querySelector(".autocomplete__options");m(n,"autocomplete__options"),window.setTimeout(()=>{s()},300),c.classList.remove("autocomplete__arrow_active")}const a=o=>{const r=document.createElement("ul");r.className="autocomplete__options",r.id="autocomplete__options",e.appendChild(r),o.forEach(n=>{const l=document.createElement("li");l.innerHTML=n,r.appendChild(l),l.className="autocomplete__option-item",l.addEventListener("click",i)})},s=()=>{const o=document.querySelector("#autocomplete__options");o&&(o.querySelectorAll(".autocomplete__option").forEach(n=>n.removeEventListener("click",i)),o.remove())},w=h(o=>{s();const r=o.toLowerCase().trim(),n=p.filter(d=>d.toLowerCase().trim().includes(r));if(!n.length){a(["Нет пододящих городов"]),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active");return}a(n),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active")});t.addEventListener("input",o=>{const r=o.target.value.toString().toLowerCase().trim();w(r)}),L(e,()=>{const o=document.querySelector(".autocomplete__options");o&&(c.classList.remove("autocomplete__arrow_active"),m(o,"autocomplete__options"),window.setTimeout(()=>{s()},100))}),e.addEventListener("click",()=>{c.classList.add("autocomplete__arrow_active");const o=document.querySelector(".autocomplete__options");if(!o){t.focus(),a(p);const r=document.querySelector(".autocomplete__options");u(r,"autocomplete__options")}u(o,"autocomplete__options")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".gift"),t=document.querySelector(".gift__button"),c=document.querySelector(".gift__close-button");t.addEventListener("click",()=>{e.classList.add("gift_active")}),c.addEventListener("click",()=>{e.classList.remove("gift_active")})});
