import{p}from"./common-3fc2919b.js";import{s as L,I as y,r as _}from"./index-01d81e83.js";const k="+7 (999) 999-99-99",E="1234",v=120,u={connectionCode:"Ошибка связи, отправьте код повторно",connection:"Ошибка связи",wrongCode:"Вы ввели неверный код, попробуйте ещё раз",wrongNumber:"Вы ввели некорректный номер телефона",nullNumber:"Введите номер телефона",oldCode:"Код устарел, отправьте новый",noAttempts:"У вас не осталось попыток, отправьте код заново"},e=document.querySelector(".login__input-number"),s=document==null?void 0:document.querySelectorAll(".login__input-code"),g=document.querySelector(".login__phone-number-submit"),l=document.querySelector(".login__error-no-tel"),h=document.querySelector(".login__loader"),f=document.querySelector(".login__resend-code"),S=document.querySelector(".login__timer"),w=document.querySelector(".login__waiting-caption"),a=document.querySelector(".login__error-wrong-code"),m=i=>{const r=Math.floor(i/60),n=i%60,o=document.querySelector(".minutes"),t=document.querySelector(".seconds");o.textContent=r!==0?`${r} мин`:"",t.textContent=`${n} сек`,i<=0&&_()};S&&(m(v),L(m));if(e){const r=y(e,{mask:"",lazy:!0,overwrite:!1,prepare:o=>o,commit:o=>o===e.value});e==null||e.addEventListener("focus",()=>{r.updateOptions({mask:"+{7} (000) 000-00-00",lazy:!1})}),e==null||e.addEventListener("paste",o=>{let t=o.clipboardData.getData("text");t.length<18?(r.updateOptions({lazy:!0}),window.setTimeout(()=>{r.updateOptions({lazy:!1})},10)):(r.value=t,e.value=t)});let n=0;g==null||g.addEventListener("click",o=>{let t=p(e.value).trim();t===""?(o.preventDefault(),l.classList.add("login__error_show"),e.classList.add("login__input_error"),l.innerText=u.nullNumber,n++,n>1&&(l.classList.add("login__error_animated"),window.setTimeout(()=>{l.classList.remove("login__error_animated")},150))):t.length<10?(o.preventDefault(),l.classList.add("login__error_show"),e.classList.add("login__input_error"),l.innerText=u.wrongNumber,n++,n>1&&(l.classList.add("login__error_animated"),window.setTimeout(()=>{l.classList.remove("login__error_animated")},150))):t.length===10&&(l.classList.remove("login__error_show"),e.classList.remove("login__input_error"),sessionStorage.setItem("phone",e.value.trim()))}),e==null||e.addEventListener("input",()=>{r.updateValue();let o=p(e.value).trim();o!==""&&o.length<1&&(l.classList.remove("login__error_show"),e.classList.remove("login__input_error")),e.value.trim().length===10&&(l.classList.remove("login__error_show"),e.classList.remove("login__input_error")),e.value.trim()===k?document.querySelector(".login__form_phone").action="login-base.html":document.querySelector(".login__form_phone").action="login-out-base.html"}),e==null||e.addEventListener("keydown",o=>{let t=[];if(o.ctrlKey?t=["a","x","v","z","c"]:t=["Enter","Tab","Backspace","Delete","Ctrl","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","0","1","2","3","4","5","6","7","8","9"],t.includes(o.key))return!0;o.preventDefault()})}s==null||s.forEach(i=>i.addEventListener("keydown",r=>{if(["Enter","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","0","1","2","3","4","5","6","7","8","9"].includes(r.key))return!0;r.preventDefault()}));s.forEach((i,r)=>i.addEventListener("keydown",n=>{if(n.target.value.trim()===""&&n.key=="Backspace"&&r>0)s[r-1].focus();else if(n.key!=="Backspace"&&r<s.length-1){const o=n.currentTarget.getAttribute("maxlength");n.currentTarget.value.length==o&&s[r+1].focus()}}));let c=[],d=3;s.forEach((i,r)=>i.addEventListener("input",n=>{if(n.target.value.trim()!==""&&(c[r]=n.target.value.trim()),c.length==4){const o=parseInt(document.querySelector(".seconds").innerText);c.join("")!==E?(a.classList.add("login__error_show"),d>1?(d--,a.innerHTML=`
          Вы ввели неверный код, осталось попыток:
         <span class="login__сode-attepmts">${d}</span>
         </div>`):(a.innerText=u.noAttempts,_()),s.forEach(t=>{t.classList.add("login__input_error"),t.value="",s[0].focus(),c=[]})):o>0?(document.querySelector(".login__error-wrong-code").classList.remove("login__error_show"),_(),s.forEach(t=>t.classList.remove("login__input_error"))):o<=0&&(a.classList.add("login__error_show"),s.forEach(t=>t.classList.add("login__input_error")),a.innerText=u.oldCode)}}));document.addEventListener("DOMContentLoaded",()=>{location.pathname.includes("base")&&(document.querySelector(".login__number").innerText=sessionStorage.getItem("phone"))});f==null||f.addEventListener("click",()=>{_(),m(v),L(m),a.classList.remove("login__error_show"),s.forEach(i=>{i.classList.remove("login__input_error"),i.value=null,s[0].focus()}),d=3});h&&setTimeout(()=>{h.classList.add("login_petal-error"),w.classList.add("login__waiting-error"),w.innerText="Ошибка связи",document.querySelector(".login__error-phone-submit").classList.add("login__error_show")},5e3);
