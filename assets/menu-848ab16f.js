(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const L=()=>{const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",document.body.appendChild(e);const t=document.createElement("div");e.appendChild(t);const n=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),n},p=e=>{if(e){const t=L();document.body.style.paddingRight=`${t}px`,document.body.style.overflow="hidden",document.querySelector("html").style.overflow="hidden"}else document.body.style.paddingRight="",document.body.style.overflowY="",document.querySelector("html").style.overflow=""},I=e=>{e.scrollIntoView({behavior:"smooth",block:"center"})},g=(e,t)=>{document.addEventListener("click",n=>{e.contains(n.target)||t()})},$=e=>{const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight-100||document.documentElement.clientHeight-100)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},h=(e,t,n="_active",s="_visible",o=500)=>{e==null||e.classList.add(`${t}${s}`),requestAnimationFrame(()=>e.classList.add(`${t}${n}`))},f=(e,t,n="_active",s="_visible",o=500)=>{e.classList.remove(`${t}${n}`),setTimeout(()=>{e.classList.remove(`${t}${s}`)},o)},y=()=>{const e={mobile:360,smartphone:480,tablet:960,laptop:1200};let t="";for(const[n,s]of Object.entries(e))window.matchMedia(`(min-width: ${s}px)`).matches&&(t=n);return t||"mobile"},v=()=>"ontouchstart"in window||navigator.maxTouchPoints||navigator.msMaxTouchPoints;document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header__burger"),t=document.querySelector(".header__burger_opened"),n=document.querySelector(".header_start-button_mobile"),s=document.querySelector(".header__dropdown"),o=document.querySelector(".overlay");e==null||e.addEventListener("click",()=>{e.classList.toggle("header__burger_hidden"),n.classList.add("active"),document.querySelector(".header").classList.add("header_active"),o.classList.add("overlay__active"),document.querySelector(".container-bottom").style.display="block",p(!0)}),t==null||t.addEventListener("click",()=>{e.classList.remove("header__burger_hidden"),n.classList.remove("active"),document.querySelector(".header").classList.remove("header_active"),s.classList.remove("active"),o.classList.remove("overlay__active"),document.querySelector(".container-bottom").style.display="none",p(!1)})});const w=document.querySelectorAll(".dropdown"),S=(e,t)=>{const n=e.querySelector(".dropdown__button");e.dataset.value=t,n.innerText=t};w.forEach(e=>{const t=e.classList.contains("dropdown_inline"),n=t?e:e.querySelector(".dropdown__button");let s=!1;if(t){const m=e.dataset.dropdown;document.getElementById("start-city");const l=document.querySelector(`.dropdown__content[data-dropdown="${m}"]`);l&&(n.addEventListener("click",b=>{b.preventDefault(),s=!s,s?(n.classList.add("dropdown_active"),h(l,"dropdown__content"),document.getElementById("phone-numbers").scrollIntoView({block:"start",behavior:"smooth"})):(f(l,"dropdown__content"),n.classList.remove("dropdown_active"))}),l.querySelector(".dropdown__close").addEventListener("click",()=>{["mobile","smartphone","tablet"].includes(u)||e.classList.contains("footer-downside__menu")&&["laptop","desktop","tablet"].includes(u)||(s=!s,f(l,"dropdown__content"))}));return}const o=()=>{s=!0,s&&h(e,"dropdown")},r=()=>{f(e,"dropdown")};let c=null,i=null;const a=150;let d=!1;e.addEventListener("mouseenter",()=>{if(v())return;const m=y();["mobile","smartphone","tablet"].includes(m)||e.classList.contains("footer-downside__menu")&&["laptop","desktop","tablet"].includes(m)||(clearTimeout(i),c=setTimeout(()=>{d=!0,o()},a))}),e.addEventListener("mouseleave",()=>{v()||(clearTimeout(c),d===!0&&(i=setTimeout(()=>{r()},a)))}),e.dataset.value&&e.querySelectorAll(".dropdown__menu li").forEach(l=>{l.addEventListener("click",()=>{e.dataset.value&&S(e,l.dataset.value)})});const u=y();(!["laptop"].includes(u)||v())&&e.addEventListener("click",()=>{e.classList.contains("footer-downside__menu")||(s=!s,s?h(e,"dropdown"):f(e,"dropdown"))}),g(e,()=>{["mobile","smartphone"].includes(u)&&(e.classList.contains("dropdown_mobile")||e.classList.contains("dropdown_tablet"))||(e.classList.remove("dropdown_active","dropdown_visible"),s=!1)})});const E={Москва:"8 (495) 286–01–11",Сочи:"8 (862) 225-75-32","Санкт-Петербург":"8 (812) 409-05-00"},q=(e,t)=>{new MutationObserver(function(s){s.forEach(function(o){o.attributeName==="data-value"&&t(e)})}).observe(e,{attributes:!0,childList:!1,characterData:!1})},T=document.querySelectorAll(".city");T.forEach(e=>{q(e,t=>{const{value:n}=t.dataset;document.querySelectorAll(".phone-number a").forEach(s=>{s.textContent=E[n]})})});const O=e=>{const t=e.offsetTop,n=window.pageYOffset,s=t-n;let o=null;const r=i=>{o===null&&(o=i);const a=i-o,d=c(a,n,s,600);window.scrollTo(0,d),a<600&&requestAnimationFrame(r)},c=(i,a,d,u)=>(i/=u/2,i<1?d/2*i*i+a:(i--,-d/2*(i*(i-2)-1)+a));requestAnimationFrame(r)},_=e=>{const t=document.querySelector(e.getAttribute("href"));t&&("scrollBehavior"in document.documentElement.style?t.scrollIntoView({behavior:"smooth"}):O(t))};document.querySelectorAll(".menu-link").forEach(e=>{e.addEventListener("click",n=>n.preventDefault());const t=document.querySelector(".header_start-button_mobile");e.parentNode.addEventListener("click",n=>{if(n.preventDefault(),v()){const s=document.querySelector(".header__burger"),o=document.querySelector(".header_active");if(o){o.classList.remove("header_active"),s.classList.remove("header__burger_hidden"),t.classList.remove("active"),p(!1),setTimeout(()=>{_(e)},200);return}}_(e)})});export{f as a,$ as b,g as c,I as d,p as e,y as g,v as i,O as s,h as t};
