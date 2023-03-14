import{c as f,t as _,d as g,a as L}from"./menu-d5da2a40.js";import"./cart-f2054ebb.js";import"./tabs-20316558.js";const p=document.querySelectorAll(".filters__activator"),y=document.querySelectorAll(".filters__item"),S=document.querySelector(".filters__dropdown-button"),w=document.querySelector(".filter__wrapper");document.querySelector(".filter__dropdown-list");const q=document.querySelector(".search__error-button"),E=e=>{const o=document.querySelector(".filter__arrow");if(o)return o.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,o};document.addEventListener("DOMContentLoaded",()=>{E(),w.addEventListener("click",()=>{document.querySelector(".filter__arrow").classList.toggle("filter__arrow_active")})});p.forEach(e=>{e.addEventListener("click",o=>{const c=o.currentTarget.dataset.filter,a=document.querySelector(`.filters__item[data-filter="${c}"]`);S.innerHTML=e.innerHTML,document.querySelector(".filter__arrow").classList.remove("filter__arrow_active"),p.forEach(s=>{s.classList.remove("filters__activator_active")}),o.target.classList.add("filters__activator_active"),y.forEach(s=>{s.classList.remove("filters__item_active")}),a.classList.add("filters__item_visible"),requestAnimationFrame(()=>{a.classList.add("filters__item_active"),a.classList.remove("filters__item_visible")})})});f(w,()=>{const e=document.querySelector(".filter__arrow");e&&e.classList.remove("filter__arrow_active")});q.addEventListener("click",()=>{p.forEach(e=>{e.classList.remove("filters__activator_active"),filterItem.classList.add("filters__item_visible")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search__input"),o=document.querySelector(".search__submit-button");document.querySelector(".search");const c=document.querySelector(".search__close-button"),a=document.querySelectorAll(".choose__phone-number"),l=()=>{c.classList.remove("search__close-button_active"),o.classList.remove("search__submit-button_active"),setTimeout(()=>{c.classList.remove("search__close-button_visible"),o.classList.remove("search__submit-button_visible"),e.classList.remove("search__input_active")},200)},s=()=>{_(o,"search__submit-button"),_(c,"search__close-button"),_(e,"search__input")};e.addEventListener("input",u=>{const d=u.target.value;let t=new RegExp(d.split("").join("[\\s-]*"),"gi");console.log(t),a.forEach(r=>{r.querySelectorAll("i").forEach(n=>{const m=n.textContent;if(n.textContent.replace("-","").matchAll(t)){const h=m.replace(t,'<i class="search__highlight">$&</i>');n.innerHTML=h}})})}),e.addEventListener("keyup",u=>{u.target.value.length==0?l():s()}),c.addEventListener("click",()=>{l(),e.value=""}),e.addEventListener("keydown",u=>{if(["Enter","Tab","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","0","1","2","3","4","5","6","7","8","9","(",")","?","*"].includes(u.key))return!0;u.preventDefault()})});const v=["Москва (495)","Москва (499)","Санкт-Петербург","Сочи","Краснодар","Ростов-на-Дону","Екатеринбург","Самара","Казань","Челябинск","Владивосток","Тюмень","Воронеж","Ставрополь","Волгоград","Нижний Новгород","Новосибирск"],b=e=>{const o=e.querySelector(".autocomplete__arrow");if(o)return o.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
    `,o};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".autocomplete"),o=document.querySelector(".autocomplete__input"),c=b(e);function a(t){t.stopPropagation();const{target:r}=t;o.value=r.innerHTML;const i=document.querySelector(".autocomplete__options");L(i,"autocomplete__options"),window.setTimeout(()=>{s()},300),c.classList.remove("autocomplete__arrow_active")}const l=t=>{const r=document.createElement("ul");r.className="autocomplete__options",r.id="autocomplete__options",e.appendChild(r),t.forEach(i=>{const n=document.createElement("li");n.innerHTML=i,r.appendChild(n),n.className="autocomplete__option-item",n.addEventListener("click",a)})},s=()=>{const t=document.querySelector("#autocomplete__options");t&&(t.querySelectorAll(".autocomplete__option").forEach(i=>i.removeEventListener("click",a)),t.remove())},d=g(t=>{s();const r=t.toLowerCase().trim(),i=v.filter(m=>m.toLowerCase().trim().includes(r));if(!i.length){l(["Нет пододящих городов"]),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active");return}l(i),document.querySelector(".autocomplete__options").classList.add("autocomplete__options_active")});o.addEventListener("input",t=>{const r=t.target.value.toString().toLowerCase().trim();d(r)}),f(e,()=>{const t=document.querySelector(".autocomplete__options");t&&(c.classList.remove("autocomplete__arrow_active"),L(t,"autocomplete__options"),window.setTimeout(()=>{s()},100))}),e.addEventListener("click",()=>{c.classList.add("autocomplete__arrow_active");const t=document.querySelector(".autocomplete__options");if(!t){o.focus(),l(v);const r=document.querySelector(".autocomplete__options");_(r,"autocomplete__options")}_(t,"autocomplete__options")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".gift"),o=document.querySelector(".gift__button"),c=document.querySelector(".gift__close-button");o.addEventListener("click",()=>{e.classList.toggle("gift_active")}),c.addEventListener("click",()=>{e.classList.remove("gift_active")})});