import{e as f,h as I}from"./menu-cbf16a02.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".calculator__sum"),c=document.querySelectorAll(".calculator__sum-per-month");let r=1990,u=0;const S=e=>{r=parseInt(e,10),t.forEach(n=>{n.textContent=f(r)})},q=e=>{u=parseInt(e,10),c.forEach(n=>n.textContent=f(u))},g=(e,n)=>{S(r+e),q(u+n)},v=({textContent:e})=>e.trim()===""?0:parseInt(e,10),y=(e,n)=>{e.textContent=String(n),e.dispatchEvent(new Event("change"))},E=e=>{e.prevValue=v(e),y(e,v(e)+1)},p=(e,n)=>{const a=v(e);a<=0||(e.prevValue=a,a-1<=0&&n.classList.add("calculator__decrement_disabled"),y(e,a-1))},C=(e,n,a,o)=>{var i;const s=(i=n==null?void 0:n.parentElement)==null?void 0:i.parentElement.querySelector(".calculator__price"),l=s==null?void 0:s.querySelector(".calculator__price-fixed"),d=s.querySelector(".calculator__price-per-month"),m=s.querySelector(".tooltip");if(e>0){const h=f(a*e),b=f(o*e);l.textContent=`${h}₽ разово${d?",":""}`,s.classList.remove("calculator__price_disabled"),d&&o&&(d.textContent=`${b} ₽ / мес`),m&&(m.style.display="block")}else l.textContent="Не выбрано",s.classList.add("calculator__price_disabled"),m&&(m.style.display="none"),d&&o&&(d.textContent="")},x=function(e,n,a){const o=v(e),s=parseInt(e.prevValue,10),l=o===0?-s:o-s;g(parseInt(n,10)*l,parseInt(a)*l),e.prevValue=o,C(o,e,n,a)};document.querySelectorAll(".calculator__multiplier").forEach(e=>{const n=e.querySelector(".calculator__input"),a=e.dataset.price,o=e.dataset.monthlyPrice,s=()=>{x(n,a,o)};let l,d;const m=e.querySelector(".calculator__increment"),i=e.querySelector(".calculator__decrement");m.addEventListener("click",()=>{clearInterval(l),E(n)}),m.addEventListener("mousedown",()=>{l=setInterval(()=>E(n),150),i.classList.remove("calculator__decrement_disabled"),m.addEventListener("mouseleave",()=>{clearInterval(l)},{once:!0})}),m.addEventListener("mouseup",()=>{clearInterval(l)}),i.addEventListener("click",()=>{clearInterval(d),p(n,i)}),i.addEventListener("mousedown",()=>{v(n)<=0||(d=setInterval(()=>p(n,i),150),i.addEventListener("mouseleave",()=>{clearInterval(d)},{once:!0}))}),i.addEventListener("mouseup",()=>{clearInterval(d)}),n.addEventListener("change",()=>{s()})})});const _=document.querySelector(".overlay"),L=(t,c)=>{t==null||t.classList.remove("modal_active"),_==null||_.classList.remove("overlay_active"),t==null||t.classList.remove("modal_visible"),I(!1),c!=null&&c.dataset.hide&&(c.style.display="")},V=(t,c)=>{var r;_==null||_.classList.add("overlay_active"),t==null||t.classList.add("modal_visible"),setTimeout(()=>{t.classList.add("modal_active")},100),I(!0),(r=c==null?void 0:c.dataset)!=null&&r.hide&&(c.style.display="none")};document.querySelectorAll(".modal__activator").forEach(t=>{const c=t.dataset.modal,r=document.querySelector(`.modal[data-modal="${c}"]`);r&&t.addEventListener("click",()=>{V(r,t)})});document.querySelectorAll(".modal").forEach(t=>{const c=t.dataset.modal,r=document.querySelector(`.modal__activator[data-modal="${c}"]`);t.addEventListener("mouseup",u=>{u.target===u.currentTarget&&t.classList.contains("modal_active")&&L(t,r)}),t.querySelector(".modal__close").addEventListener("click",()=>L(t,r)),t.addEventListener("click",u=>{u.target===u.currentTarget&&t.classList.contains("modal_active")&&L(t,r)})});
