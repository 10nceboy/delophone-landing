const s=document.querySelectorAll(".tabs__activator"),o=document.querySelectorAll(".tabs__item");document.querySelector(".autocomplete");document.querySelector(".autocomplete__input");const r=document.querySelector(".search__error-button");s.forEach(t=>{t.addEventListener("click",c=>{const i=c.currentTarget.dataset.tab;s.forEach(a=>{a.classList.remove("tabs__activator_active")}),c.target.classList.add("tabs__activator_active"),o.forEach(a=>{a.classList.remove("tabs__item_active")});const e=document.querySelector(`.tabs__item[data-tab="${i}"]`);e&&(e.classList.add("tabs__item_visible"),requestAnimationFrame(()=>{e.classList.add("tabs__item_active"),e.classList.remove("tabs__item_visible")}))})});r.addEventListener("click",()=>{s.forEach(t=>{t.classList.contains("choose__button_cities")?t.classList.add("tabs__activator_active"):t.classList.remove("tabs__activator_active")})});
