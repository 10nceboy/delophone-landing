(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const g=()=>{const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",document.body.appendChild(e);const t=document.createElement("div");e.appendChild(t);const n=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),n},y=e=>{if(e){const t=g();document.body.style.paddingRight=`${t}px`,document.body.style.overflow="hidden",document.querySelector("html").style.overflow="hidden"}else document.body.style.paddingRight="",document.body.style.overflowY="",document.querySelector("html").style.overflow=""},$=e=>{e.scrollIntoView({behavior:"smooth",block:"center"})},L=(e,t)=>{document.addEventListener("click",n=>{e.contains(n.target)||t()})},k=e=>{const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight-100||document.documentElement.clientHeight-100)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},h=(e,t,n="_active",r="_visible",o=500)=>{e==null||e.classList.add(`${t}${r}`),requestAnimationFrame(()=>e.classList.add(`${t}${n}`))},m=(e,t,n="_active",r="_visible",o=500)=>{e.classList.remove(`${t}${n}`),setTimeout(()=>{e.classList.remove(`${t}${r}`)},o)},p=()=>{const e={mobile:360,smartphone:480,tablet:960,laptop:1200};let t="";for(const[n,r]of Object.entries(e))window.matchMedia(`(min-width: ${r}px)`).matches&&(t=n);return t||"mobile"},f=()=>"ontouchstart"in window||navigator.maxTouchPoints||navigator.msMaxTouchPoints;document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header__burger"),t=document.querySelector(".header__burger_opened"),n=document.querySelector(".header_start-button_mobile"),r=document.querySelector(".header__dropdown"),o=document.querySelector(".overlay");e.addEventListener("click",()=>{e.classList.toggle("header__burger_hidden"),n.classList.add("active"),document.querySelector(".header").classList.add("header_active"),o.classList.add("overlay__active"),document.querySelector(".container-bottom").style.display="block",y(!0)}),t.addEventListener("click",()=>{e.classList.remove("header__burger_hidden"),n.classList.remove("active"),document.querySelector(".header").classList.remove("header_active"),r.classList.remove("active"),o.classList.remove("overlay__active"),document.querySelector(".container-bottom").style.display="none",y(!1)})});const w=document.querySelectorAll(".dropdown"),S=(e,t)=>{const n=e.querySelector(".dropdown__button");e.dataset.value=t,n.innerText=t};w.forEach(e=>{const t=e.classList.contains("dropdown_inline"),n=t?e:e.querySelector(".dropdown__button");let r=!1;if(t){const u=e.dataset.dropdown;document.getElementById("start-city");const l=document.querySelector(`.dropdown__content[data-dropdown="${u}"]`);l&&(n.addEventListener("click",_=>{_.preventDefault(),r=!r,r?(n.classList.add("dropdown_active"),h(l,"dropdown__content"),document.getElementById("phone-numbers").scrollIntoView({block:"start",behavior:"smooth"})):(m(l,"dropdown__content"),n.classList.remove("dropdown_active"))}),l.querySelector(".dropdown__close").addEventListener("click",()=>{r=!r,m(l,"dropdown__content")}));return}const o=()=>{r=!0,r&&h(e,"dropdown")},s=()=>{m(e,"dropdown")};let i=null,c=null;const a=150;let d=!1;e.addEventListener("mouseenter",()=>{if(f())return;const u=p();e.classList.contains("footer-downside__menu")&&["laptop","desktop","tablet"].includes(u)||(clearTimeout(c),i=setTimeout(()=>{d=!0,o()},a))}),e.addEventListener("mouseleave",()=>{f()||(clearTimeout(i),d===!0&&(c=setTimeout(()=>{s()},a)))}),e.dataset.value&&e.querySelectorAll(".dropdown__menu li").forEach(l=>{l.addEventListener("click",()=>{e.dataset.value&&S(e,l.dataset.value)})});const v=p();f()&&e.addEventListener("click",()=>{r=!r,r?h(e,"dropdown"):m(e,"dropdown")}),L(e,()=>{["mobile","smartphone"].includes(v)&&(e.classList.contains("dropdown_mobile")||e.classList.contains("dropdown_tablet"))||(e.classList.remove("dropdown_active","dropdown_visible"),r=!1)})});const E={Москва:"8 (495) 286–01–11",Сочи:"8 (862) 225-75-32","Санкт-Петербург":"8 (812) 409-05-00"},q=(e,t)=>{new MutationObserver(function(r){r.forEach(function(o){o.attributeName==="data-value"&&t(e)})}).observe(e,{attributes:!0,childList:!1,characterData:!1})},T=document.querySelectorAll(".city");T.forEach(e=>{q(e,t=>{const{value:n}=t.dataset;document.querySelectorAll(".phone-number a").forEach(r=>{r.textContent=E[n]})})});const O=e=>{const t=e.offsetTop,n=window.pageYOffset,r=t-n;let o=null;const s=c=>{o===null&&(o=c);const a=c-o,d=i(a,n,r,600);window.scrollTo(0,d),a<600&&requestAnimationFrame(s)},i=(c,a,d,v)=>(c/=v/2,c<1?d/2*c*c+a:(c--,-d/2*(c*(c-2)-1)+a));requestAnimationFrame(s)},b=e=>{const t=document.querySelector(e.getAttribute("href"));t&&("scrollBehavior"in document.documentElement.style?t.scrollIntoView({behavior:"smooth"}):O(t))};document.querySelectorAll(".menu-link").forEach(e=>{e.addEventListener("click",n=>n.preventDefault());const t=document.querySelector(".header_start-button_mobile");e.parentNode.addEventListener("click",n=>{if(n.preventDefault(),f()){const r=document.querySelector(".header__burger"),o=document.querySelector(".header_active");if(o){o.classList.remove("header_active"),r.classList.remove("header__burger_hidden"),t.classList.remove("active"),y(!1),setTimeout(()=>{b(e)},200);return}}b(e)})});export{m as a,k as b,L as c,$ as d,y as e,p as g,f as i,O as s,h as t};
