import{e as v,j as E}from"./menu-c8c7a834.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".calculator__sum"),n=document.querySelectorAll(".calculator__sum-per-month");let s=1990,l=0;const h=e=>{s=parseInt(e,10),t.forEach(c=>{c.textContent=v(s)})},p=e=>{l=parseInt(e,10),n.forEach(c=>c.textContent=v(l))},S=(e,c)=>{h(s+e),p(l+c)},f=({textContent:e})=>e.trim()===""?0:parseInt(e,10),L=(e,c)=>{e.textContent=String(c),e.dispatchEvent(new Event("change"))},q=e=>{e.prevValue=f(e),L(e,f(e)+1)},I=(e,c)=>{const o=f(e);o<=0||(e.prevValue=o,o-1<=0&&c.classList.add("calculator__decrement_disabled"),L(e,o-1))},g=(e,c,o,a)=>{var m;const r=(m=c==null?void 0:c.parentElement)==null?void 0:m.parentElement.querySelector(".calculator__price"),d=r==null?void 0:r.querySelector(".calculator__price-fixed"),i=r.querySelector(".calculator__price-per-month"),u=r.querySelector(".tooltip");if(e>0){const x=v(o*e),b=v(a*e);d.textContent=`${x} ₽ разово${i?",":""}`,r.classList.remove("calculator__price_disabled"),i&&a&&(i.textContent=`${b} ₽ / мес`),u&&(u.style.display="block")}else d.textContent="Не выбрано",r.classList.add("calculator__price_disabled"),u&&(u.style.display="none"),i&&a&&(i.textContent="")},C=function(e,c,o){const a=f(e),r=parseInt(e.prevValue,10),d=a===0?-r:a-r;S(parseInt(c,10)*d,parseInt(o)*d),e.prevValue=a,g(a,e,c,o)};document.querySelectorAll(".calculator__multiplier").forEach(e=>{const c=e.querySelector(".calculator__input"),o=e.dataset.price,a=e.dataset.monthlyPrice,r=()=>{C(c,o,a)};let d,i;const u=e.querySelector(".calculator__increment"),m=e.querySelector(".calculator__decrement");u.addEventListener("click",()=>{clearInterval(d),q(c),m.classList.remove("calculator__decrement_disabled")}),u.addEventListener("mouseup",()=>{clearInterval(d)}),m.addEventListener("click",()=>{clearInterval(i),I(c,m)}),m.addEventListener("mouseup",()=>{clearInterval(i)}),c.addEventListener("change",()=>{r()})})});const _=document.querySelector(".overlay"),y=(t,n)=>{t==null||t.classList.remove("modal_active"),_==null||_.classList.remove("overlay_active"),t==null||t.classList.remove("modal_visible"),E(!1),n!=null&&n.dataset.hide&&(n.style.display="")},k=(t,n)=>{var s;_==null||_.classList.add("overlay_active"),t==null||t.classList.add("modal_visible"),setTimeout(()=>{t.classList.add("modal_active")},100),E(!0),(s=n==null?void 0:n.dataset)!=null&&s.hide&&(n.style.display="none")};document.querySelectorAll(".modal__activator").forEach(t=>{const n=t.dataset.modal,s=document.querySelector(`.modal[data-modal="${n}"]`);s&&t.addEventListener("click",()=>{k(s,t)})});document.querySelectorAll(".modal").forEach(t=>{const n=t.dataset.modal,s=document.querySelector(`.modal__activator[data-modal="${n}"]`);t.addEventListener("mouseup",l=>{l.target===l.currentTarget&&t.classList.contains("modal_active")&&y(t,s)}),t.querySelector(".modal__close").addEventListener("click",()=>y(t,s)),t.addEventListener("click",l=>{l.target===l.currentTarget&&t.classList.contains("modal_active")&&y(t,s)})});