import{a as m}from"./common-3fc2919b.js";document.addEventListener("DOMContentLoaded",()=>{const v=document.querySelectorAll(".calculator__sum"),f=document.querySelectorAll(".calculator__sum-per-month");let u=1990,i=0;const p=e=>{u=parseInt(e,10),v.forEach(t=>{t.textContent=m(u)})},y=e=>{i=parseInt(e,10),f.forEach(t=>t.textContent=m(i))},E=(e,t)=>{p(u+e),y(i+t)},d=({textContent:e})=>e.trim()===""?0:parseInt(e,10),_=(e,t)=>{e.textContent=String(t),e.dispatchEvent(new Event("change"))},h=e=>{e.prevValue=d(e),_(e,d(e)+1)},I=(e,t)=>{const n=d(e);n<=0||(e.prevValue=n,n-1<=0&&t.classList.add("calculator__decrement_disabled"),_(e,n-1))},S=(e,t,n,r)=>{var s;const c=(s=t==null?void 0:t.parentElement)==null?void 0:s.parentElement.querySelector(".calculator__price"),o=c==null?void 0:c.querySelector(".calculator__price-fixed"),a=c.querySelector(".calculator__price-per-month"),l=c.querySelector(".tooltip");if(e>0){const C=m(n*e),q=m(r*e);o.textContent=`${C} ₽ разово${a?",":""}`,c.classList.remove("calculator__price_disabled"),a&&r&&(a.textContent=`${q} ₽ / мес`),l&&(l.style.display="block")}else o.textContent="Не выбрано",c.classList.add("calculator__price_disabled"),l&&(l.style.display="none"),a&&r&&(a.textContent="")},L=function(e,t,n){const r=d(e),c=parseInt(e.prevValue,10),o=r===0?-c:r-c;E(parseInt(t,10)*o,parseInt(n)*o),e.prevValue=r,S(r,e,t,n)};document.querySelectorAll(".calculator__multiplier").forEach(e=>{const t=e.querySelector(".calculator__input"),n=e.dataset.price,r=e.dataset.monthlyPrice,c=()=>{L(t,n,r)};let o,a;const l=e.querySelector(".calculator__increment"),s=e.querySelector(".calculator__decrement");l.addEventListener("click",()=>{clearInterval(o),h(t),s.classList.remove("calculator__decrement_disabled")}),l.addEventListener("mouseup",()=>{clearInterval(o)}),s.addEventListener("click",()=>{clearInterval(a),I(t,s)}),s.addEventListener("mouseup",()=>{clearInterval(a)}),t.addEventListener("change",()=>{c()})})});