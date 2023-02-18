(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const kt=()=>{const t=document.createElement("div");t.style.visibility="hidden",t.style.overflow="scroll",document.body.appendChild(t);const e=document.createElement("div");t.appendChild(e);const n=t.offsetWidth-e.offsetWidth;return t.parentNode.removeChild(t),n},I=t=>{if(t){const e=kt();document.body.style.paddingRight=`${e}px`,document.body.style.overflow="hidden",document.querySelector("html").style.overflow="hidden"}else document.body.style.paddingRight="",document.body.style.overflowY="",document.querySelector("html").style.overflow=""},qt=t=>{t.scrollIntoView({behavior:"smooth",block:"center"})},Dt=(t,e)=>{document.addEventListener("click",n=>{t.contains(n.target)||e()})},bt=t=>{const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight-100||document.documentElement.clientHeight-100)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)},P=(t,e,n="_active",o="_visible",i=500)=>{t==null||t.classList.add(`${e}${o}`),requestAnimationFrame(()=>t.classList.add(`${e}${n}`))},R=(t,e,n="_active",o="_visible",i=500)=>{t.classList.remove(`${e}${n}`),setTimeout(()=>{t.classList.remove(`${e}${o}`)},i)},rt=()=>{const t={mobile:360,smartphone:480,tablet:960,laptop:1200};let e="";for(const[n,o]of Object.entries(t))window.matchMedia(`(min-width: ${o}px)`).matches&&(e=n);return e||"mobile"},Q=()=>"ontouchstart"in window||navigator.maxTouchPoints||navigator.msMaxTouchPoints;document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".header__burger"),e=document.querySelector(".header__burger_opened"),n=document.querySelector(".header_start-button_mobile"),o=document.querySelector(".header__dropdown"),i=document.querySelector(".overlay");t.addEventListener("click",()=>{t.classList.toggle("header__burger_hidden"),n.classList.add("active"),document.querySelector(".header").classList.add("header_active"),i.classList.add("overlay__active"),document.querySelector(".container-bottom").style.display="block",I(!0)}),e.addEventListener("click",()=>{t.classList.remove("header__burger_hidden"),n.classList.remove("active"),document.querySelector(".header").classList.remove("header_active"),o.classList.remove("active"),i.classList.remove("overlay__active"),document.querySelector(".container-bottom").style.display="none",I(!1)})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".expand__card"),e=document.querySelector(".expand__button"),n=document.querySelectorAll(".expand__content"),o=document.querySelectorAll(".phone-numbers__header"),i=document.getElementById("phone-numbers");let s=!1;Array.from(o).some(c=>bt(c)),t.addEventListener("click",()=>{s=!s,s?(e.classList.add("expand__button_active"),n.forEach(c=>P(c,"expand__content")),o.forEach(c=>P(c,"phone-numbers__header")),i.scrollIntoView({block:"start"})):(n.forEach(c=>R(c,"expand__content")),o.forEach(c=>R(c,"phone-numbers__header")),window.setTimeout(()=>{e.classList.remove("expand__button_active")},400),i.scrollIntoView({block:"end"}))})});const Pt=document.querySelectorAll(".dropdown"),Ft=(t,e)=>{const n=t.querySelector(".dropdown__button");t.dataset.value=e,n.innerText=e};Pt.forEach(t=>{const e=t.classList.contains("dropdown_inline"),n=e?t:t.querySelector(".dropdown__button");let o=!1;if(e){const u=t.dataset.dropdown,f=document.querySelector(`.dropdown__content[data-dropdown="${u}"]`);f&&(n.addEventListener("click",p=>{p.preventDefault(),o=!o,o?(n.classList.add("dropdown_active"),P(f,"dropdown__content")):(R(f,"dropdown__content"),n.classList.remove("dropdown_active"))}),f.querySelector(".dropdown__close").addEventListener("click",()=>{o=!o,R(f,"dropdown__content")}));return}const i=()=>{o=!0,o&&P(t,"dropdown")},s=()=>{R(t,"dropdown")};let r=null,c=null;const l=150;let a=!1;t.addEventListener("mouseenter",()=>{if(Q())return;const u=rt();t.classList.contains("footer-downside__menu")&&["laptop","desktop","tablet"].includes(u)||(clearTimeout(c),r=setTimeout(()=>{a=!0,i()},l))}),t.addEventListener("mouseleave",()=>{Q()||(clearTimeout(r),a===!0&&(c=setTimeout(()=>{s()},l)))}),t.dataset.value&&t.querySelectorAll(".dropdown__menu li").forEach(f=>{f.addEventListener("click",()=>{t.dataset.value&&Ft(t,f.dataset.value)})});const m=rt();Q()&&t.addEventListener("click",()=>{o=!o,o?P(t,"dropdown"):R(t,"dropdown")}),Dt(t,()=>{["mobile","smartphone"].includes(m)&&(t.classList.contains("dropdown_mobile")||t.classList.contains("dropdown_tablet"))||(t.classList.remove("dropdown_active","dropdown_visible"),o=!1)})});const Bt=t=>{const e=t.querySelector(".collapse__arrow");if(e)return e.innerHTML=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.7998 22.4L15.9998 10.4L3.1998 22.4" stroke="#2B8FEB" stroke-linecap="round"/>
    </svg>
  `,e};let it=!1;const ft=400;document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".collapse").forEach(e=>{let n=!1;const o=Bt(e);let i=!1;const s=e.querySelector(".collapse__content"),r=e.querySelector(".collapse__activator");e.addEventListener("click",()=>{if(n||it)return!1;i=!i,n=!0,window.setTimeout(()=>n=!1,320),o&&o.classList.toggle("collapse__arrow_active"),i?(r.classList.toggle("collapse__activator_active"),P(s,"collapse__content")):(R(s,"collapse__content"),window.setTimeout(()=>{r.classList.toggle("collapse__activator_active")},ft)),window.setTimeout(()=>{i&&!bt(s)&&(it=!0,qt(e),window.setTimeout(()=>it=!1,ft))})}),s.addEventListener("click",c=>c.stopPropagation())})});const F=document.querySelector(".overlay"),st=(t,e)=>{t==null||t.classList.remove("modal_active"),F==null||F.classList.remove("overlay_active"),t==null||t.classList.remove("modal_visible"),I(!1),e!=null&&e.dataset.hide&&(e.style.display="")},Mt=(t,e)=>{var n;F==null||F.classList.add("overlay_active"),t==null||t.classList.add("modal_visible"),setTimeout(()=>{t.classList.add("modal_active")},100),I(!0),(n=e==null?void 0:e.dataset)!=null&&n.hide&&(e.style.display="none")};document.querySelectorAll(".modal__activator").forEach(t=>{const e=t.dataset.modal,n=document.querySelector(`.modal[data-modal="${e}"]`);n&&t.addEventListener("click",()=>{Mt(n,t)})});document.querySelectorAll(".modal").forEach(t=>{const e=t.dataset.modal,n=document.querySelector(`.modal__activator[data-modal="${e}"]`);t.addEventListener("mouseup",o=>{o.target===o.currentTarget&&t.classList.contains("modal_active")&&st(t,n)}),t.querySelector(".modal__close").addEventListener("click",()=>st(t,n)),t.addEventListener("click",o=>{o.target===o.currentTarget&&t.classList.contains("modal_active")&&st(t,n)})});function Y(t){return t.split("-")[1]}function at(t){return t==="y"?"height":"width"}function M(t){return t.split("-")[0]}function tt(t){return["top","bottom"].includes(M(t))?"x":"y"}function mt(t,e,n){let{reference:o,floating:i}=t;const s=o.x+o.width/2-i.width/2,r=o.y+o.height/2-i.height/2,c=tt(e),l=at(c),a=o[l]/2-i[l]/2,m=M(e),u=c==="x";let f;switch(m){case"top":f={x:s,y:o.y-i.height};break;case"bottom":f={x:s,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:r};break;case"left":f={x:o.x-i.width,y:r};break;default:f={x:o.x,y:o.y}}switch(Y(e)){case"start":f[c]-=a*(n&&u?-1:1);break;case"end":f[c]+=a*(n&&u?-1:1);break}return f}const Vt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:u}=mt(a,o,l),f=o,p={},d=0;for(let g=0;g<c.length;g++){const{name:b,fn:h}=c[g],{x:v,y,data:x,reset:w}=await h({x:m,y:u,initialPlacement:o,placement:f,strategy:i,middlewareData:p,rects:a,platform:r,elements:{reference:t,floating:e}});if(m=v??m,u=y??u,p={...p,[b]:{...p[b],...x}},w&&d<=50){d++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(a=w.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:m,y:u}=mt(a,f,l)),g=-1;continue}}return{x:m,y:u,placement:f,strategy:i,middlewareData:p}};function $t(t){return{top:0,right:0,bottom:0,left:0,...t}}function xt(t){return typeof t!="number"?$t(t):{top:t,right:t,bottom:t,left:t}}function N(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function ct(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:f=!1,padding:p=0}=e,d=xt(p),b=c[f?u==="floating"?"reference":"floating":u],h=N(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(b)))==null||n?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:m,strategy:l})),v=u==="floating"?{...r.floating,x:o,y:i}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),x=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},w=N(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:l}):v);return{top:(h.top-w.top+d.top)/x.y,bottom:(w.bottom-h.bottom+d.bottom)/x.y,left:(h.left-w.left+d.left)/x.x,right:(w.right-h.right+d.right)/x.x}}const Nt=Math.min,Wt=Math.max;function Ht(t,e,n){return Wt(t,Nt(e,n))}const It=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t||{},{x:i,y:s,placement:r,rects:c,platform:l}=e;if(n==null)return{};const a=xt(o),m={x:i,y:s},u=tt(r),f=at(u),p=await l.getDimensions(n),d=u==="y"?"top":"left",g=u==="y"?"bottom":"right",b=c.reference[f]+c.reference[u]-m[u]-c.floating[f],h=m[u]-c.reference[u],v=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let y=v?u==="y"?v.clientHeight||0:v.clientWidth||0:0;y===0&&(y=c.floating[f]);const x=b/2-h/2,w=a[d],O=y-p[f]-a[g],_=y/2-p[f]/2+x,q=Ht(w,_,O),z=Y(r)!=null&&_!=q&&c.reference[f]/2-(_<w?a[d]:a[g])-p[f]/2<0?_<w?w-_:O-_:0;return{[u]:m[u]-z,data:{[u]:q,centerOffset:_-q}}}}),jt={left:"right",right:"left",bottom:"top",top:"bottom"};function G(t){return t.replace(/left|right|bottom|top/g,e=>jt[e])}function Yt(t,e,n){n===void 0&&(n=!1);const o=Y(t),i=tt(t),s=at(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=G(r)),{main:r,cross:G(r)}}const zt={start:"end",end:"start"};function lt(t){return t.replace(/start|end/g,e=>zt[e])}function Xt(t){const e=G(t);return[lt(t),e,lt(e)]}function Ut(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Kt(t,e,n,o){const i=Y(t);let s=Ut(M(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(lt)))),s}const Zt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:s,initialPlacement:r,platform:c,elements:l}=e,{mainAxis:a=!0,crossAxis:m=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:d=!0,...g}=t,b=M(o),h=M(r)===r,v=await(c.isRTL==null?void 0:c.isRTL(l.floating)),y=u||(h||!d?[G(r)]:Xt(r));!u&&p!=="none"&&y.push(...Kt(r,d,p,v));const x=[r,...y],w=await ct(e,g),O=[];let _=((n=i.flip)==null?void 0:n.overflows)||[];if(a&&O.push(w[b]),m){const{main:D,cross:X}=Yt(o,s,v);O.push(w[D],w[X])}if(_=[..._,{placement:o,overflows:O}],!O.every(D=>D<=0)){var q,ot;const D=(((q=i.flip)==null?void 0:q.index)||0)+1,X=x[D];if(X)return{data:{index:D,overflows:_},reset:{placement:X}};let V=(ot=_.find(U=>U.overflows[0]<=0))==null?void 0:ot.placement;if(!V)switch(f){case"bestFit":{var z;const U=(z=_.map(K=>[K.placement,K.overflows.filter($=>$>0).reduce(($,Rt)=>$+Rt,0)]).sort((K,$)=>K[1]-$[1])[0])==null?void 0:z[0];U&&(V=U);break}case"initialPlacement":V=r;break}if(o!==V)return{reset:{placement:V}}}return{}}}};async function Qt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=M(n),c=Y(n),l=tt(n)==="x",a=["left","top"].includes(r)?-1:1,m=s&&l?-1:1,u=typeof e=="function"?e(t):e;let{mainAxis:f,crossAxis:p,alignmentAxis:d}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof d=="number"&&(p=c==="end"?d*-1:d),l?{x:p*m,y:f*a}:{x:f*a,y:p*m}}const Gt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Qt(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function L(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function C(t){return L(t).getComputedStyle(t)}const pt=Math.min,W=Math.max,J=Math.round;function _t(t){const e=C(t);let n=parseFloat(e.width),o=parseFloat(e.height);const i=t.offsetWidth,s=t.offsetHeight,r=J(n)!==i||J(o)!==s;return r&&(n=i,o=s),{width:n,height:o,fallback:r}}function T(t){return Et(t)?(t.nodeName||"").toLowerCase():""}let Z;function Lt(){if(Z)return Z;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(Z=t.brands.map(e=>e.brand+"/"+e.version).join(" "),Z):navigator.userAgent}function S(t){return t instanceof L(t).HTMLElement}function E(t){return t instanceof L(t).Element}function Et(t){return t instanceof L(t).Node}function ht(t){if(typeof ShadowRoot>"u")return!1;const e=L(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function et(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Jt(t){return["table","td","th"].includes(T(t))}function dt(t){const e=/firefox/i.test(Lt()),n=C(t),o=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||(o?o!=="none":!1)||e&&n.willChange==="filter"||e&&(n.filter?n.filter!=="none":!1)||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const s=n.contain;return s!=null?s.includes(i):!1})}function Ct(){return!/^((?!chrome|android).)*safari/i.test(Lt())}function ut(t){return["html","body","#document"].includes(T(t))}function St(t){return E(t)?t:t.contextElement}const Tt={x:1,y:1};function B(t){const e=St(t);if(!S(e))return Tt;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:s}=_t(e);let r=(s?J(n.width):n.width)/o,c=(s?J(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}function k(t,e,n,o){var i,s;e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),c=St(t);let l=Tt;e&&(o?E(o)&&(l=B(o)):l=B(t));const a=c?L(c):window,m=!Ct()&&n;let u=(r.left+(m&&((i=a.visualViewport)==null?void 0:i.offsetLeft)||0))/l.x,f=(r.top+(m&&((s=a.visualViewport)==null?void 0:s.offsetTop)||0))/l.y,p=r.width/l.x,d=r.height/l.y;if(c){const g=L(c),b=o&&E(o)?L(o):o;let h=g.frameElement;for(;h&&o&&b!==g;){const v=B(h),y=h.getBoundingClientRect(),x=getComputedStyle(h);y.x+=(h.clientLeft+parseFloat(x.paddingLeft))*v.x,y.y+=(h.clientTop+parseFloat(x.paddingTop))*v.y,u*=v.x,f*=v.y,p*=v.x,d*=v.y,u+=y.x,f+=y.y,h=L(h).frameElement}}return{width:p,height:d,top:f,right:u+p,bottom:f+d,left:u,x:u,y:f}}function A(t){return((Et(t)?t.ownerDocument:t.document)||window.document).documentElement}function nt(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function te(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=S(n),s=A(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},c={x:1,y:1};const l={x:0,y:0};if((i||!i&&o!=="fixed")&&((T(n)!=="body"||et(s))&&(r=nt(n)),S(n))){const a=k(n);c=B(n),l.x=a.x+n.clientLeft,l.y=a.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+l.x,y:e.y*c.y-r.scrollTop*c.y+l.y}}function At(t){return k(A(t)).left+nt(t).scrollLeft}function ee(t){const e=A(t),n=nt(t),o=t.ownerDocument.body,i=W(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=W(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+At(t);const c=-n.scrollTop;return C(o).direction==="rtl"&&(r+=W(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function j(t){if(T(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ht(t)&&t.host||A(t);return ht(e)?e.host:e}function Ot(t){const e=j(t);return ut(e)?e.ownerDocument.body:S(e)&&et(e)?e:Ot(e)}function H(t,e){var n;e===void 0&&(e=[]);const o=Ot(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),s=L(o);return i?e.concat(s,s.visualViewport||[],et(o)?o:[]):e.concat(o,H(o))}function ne(t,e){const n=L(t),o=A(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=Ct();(a||!a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function oe(t,e){const n=k(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=S(t)?B(t):{x:1,y:1},r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function gt(t,e,n){return e==="viewport"?N(ne(t,n)):E(e)?N(oe(e,n)):N(ee(A(t)))}function ie(t,e){const n=e.get(t);if(n)return n;let o=H(t).filter(c=>E(c)&&T(c)!=="body"),i=null;const s=C(t).position==="fixed";let r=s?j(t):t;for(;E(r)&&!ut(r);){const c=C(r),l=dt(r);(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position))?o=o.filter(m=>m!==r):i=c,r=j(r)}return e.set(t,o),o}function se(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ie(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,m)=>{const u=gt(e,m,i);return a.top=W(u.top,a.top),a.right=pt(u.right,a.right),a.bottom=pt(u.bottom,a.bottom),a.left=W(u.left,a.left),a},gt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function re(t){return S(t)?_t(t):t.getBoundingClientRect()}function vt(t){return!S(t)||C(t).position==="fixed"?null:t.offsetParent}function ce(t){let e=j(t);for(;S(e)&&!ut(e);){if(dt(e))return e;e=j(e)}return null}function yt(t){const e=L(t);let n=vt(t);for(;n&&Jt(n)&&C(n).position==="static";)n=vt(n);return n&&(T(n)==="html"||T(n)==="body"&&C(n).position==="static"&&!dt(n))?e:n||ce(t)||e}function le(t,e,n){const o=S(e),i=A(e),s=k(t,!0,n==="fixed",e);let r={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(o||!o&&n!=="fixed")if((T(e)!=="body"||et(i))&&(r=nt(e)),S(e)){const l=k(e,!0);c.x=l.x+e.clientLeft,c.y=l.y+e.clientTop}else i&&(c.x=At(i));return{x:s.left+r.scrollLeft-c.x,y:s.top+r.scrollTop-c.y,width:s.width,height:s.height}}const ae={getClippingRect:se,convertOffsetParentRelativeRectToViewportRelativeRect:te,isElement:E,getDimensions:re,getOffsetParent:yt,getDocumentElement:A,getScale:B,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||yt,s=this.getDimensions;return{reference:le(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>C(t).direction==="rtl"};function de(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=!0,animationFrame:c=!1}=o,l=i&&!c,a=l||s?[...E(t)?H(t):t.contextElement?H(t.contextElement):[],...H(e)]:[];a.forEach(d=>{l&&d.addEventListener("scroll",n,{passive:!0}),s&&d.addEventListener("resize",n)});let m=null;if(r){let d=!0;m=new ResizeObserver(()=>{d||n(),d=!1}),E(t)&&!c&&m.observe(t),!E(t)&&t.contextElement&&!c&&m.observe(t.contextElement),m.observe(e)}let u,f=c?k(t):null;c&&p();function p(){const d=k(t);f&&(d.x!==f.x||d.y!==f.y||d.width!==f.width||d.height!==f.height)&&n(),f=d,u=requestAnimationFrame(p)}return n(),()=>{var d;a.forEach(g=>{l&&g.removeEventListener("scroll",n),s&&g.removeEventListener("resize",n)}),(d=m)==null||d.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const ue=(t,e,n)=>{const o=new Map,i={platform:ae,...n},s={...i.platform,_c:o};return Vt(t,e,{...i,platform:s})},fe=`
<svg class="icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="7.5" r="7" stroke="#F88C28"/>
<path
  d="M6.7517 9.45316V9.40153C6.75737 8.85373 6.81406 8.41778 6.92177 8.09369C7.02948 7.7696 7.18254 7.50717 7.38095 7.30641C7.57936 7.10564 7.81746 6.92065 8.09524 6.75143C8.26247 6.64818 8.4127 6.52629 8.54592 6.38576C8.67914 6.24235 8.78401 6.07744 8.86054 5.89101C8.93991 5.70459 8.97959 5.49809 8.97959 5.27151C8.97959 4.99044 8.9144 4.74665 8.78401 4.54015C8.65363 4.33365 8.47931 4.17447 8.26105 4.06262C8.0428 3.95076 7.80045 3.89484 7.53401 3.89484C7.30159 3.89484 7.07766 3.94359 6.86224 4.04111C6.64683 4.13862 6.46684 4.29207 6.32228 4.50143C6.17772 4.7108 6.0941 4.9847 6.07143 5.32314H5C5.02268 4.83556 5.14739 4.41826 5.37415 4.07122C5.60374 3.72419 5.90561 3.45889 6.27976 3.27533C6.65675 3.09178 7.07483 3 7.53401 3C8.03288 3 8.46655 3.10038 8.83503 3.30115C9.20635 3.50191 9.49263 3.77725 9.69388 4.12715C9.89796 4.47706 10 4.87572 10 5.32314C10 5.63862 9.95181 5.924 9.85544 6.17925C9.7619 6.43451 9.62585 6.66252 9.44728 6.86329C9.27154 7.06405 9.05896 7.24187 8.80952 7.39675C8.56009 7.55449 8.36026 7.72084 8.21003 7.89579C8.05981 8.06788 7.95068 8.27294 7.88265 8.51099C7.81463 8.74904 7.77778 9.04589 7.77211 9.40153V9.45316H6.7517ZM7.29592 12C7.08617 12 6.90618 11.924 6.75595 11.772C6.60573 11.62 6.53061 11.4379 6.53061 11.2256C6.53061 11.0134 6.60573 10.8313 6.75595 10.6793C6.90618 10.5272 7.08617 10.4512 7.29592 10.4512C7.50567 10.4512 7.68566 10.5272 7.83588 10.6793C7.98611 10.8313 8.06122 11.0134 8.06122 11.2256C8.06122 11.3662 8.02579 11.4952 7.95493 11.6128C7.8869 11.7304 7.79478 11.825 7.67857 11.8967C7.56519 11.9656 7.43764 12 7.29592 12Z"
  fill="#F88C28"
/>
</svg>`;document.addEventListener("DOMContentLoaded",()=>{const t=s=>{const r=document.createElement("div");return r.classList.add("tooltip__inner"),r.role="tooltip",r.innerHTML=`
      <div class="tooltip__content">${s}</div>
      <div class="tooltip__arrow"></div>
    `,r},e=s=>{const r=document.createElement("div");return r.classList.add("icon","tooltip__activator"),s.appendChild(r),r.innerHTML=fe,r},n=document.querySelectorAll(".tooltip"),o=s=>{var r,c,l;(l=(c=(r=s.target)==null?void 0:r.parentNode)==null?void 0:c.querySelector(".tooltip__inner"))==null||l.classList.remove("tooltip__inner_visible")},i=rt();n.forEach(s=>{let r=s==null?void 0:s.querySelector(".tooltip__activator");r||(r=e(s));const c=t(s.getAttribute("data-tooltip"));s.appendChild(c),requestAnimationFrame(()=>{const l=c.querySelector(".tooltip__arrow");let a=null;const m={name:"middleware",async fn(d){if(!["smartphone","mobile","laptop","tablet"].includes(i))return{middlewareArguments:d};if(i!=="mobile"){const{right:g,left:b}=await ct(d);let h=d.x;return g>0&&(h=h-g,d.middlewareData.arrow.x=d.middlewareData.arrow.x+g),b>0&&(h=h+b,d.middlewareData.arrow.x=d.middlewareData.arrow.x-b),{...d,x:h,y:d.y}}else return a=await ct(d),d.middlewareData.arrow.x=d.middlewareData.arrow.x-a.left-15,{...d,x:d.x+a.left+15,y:d.y}}},u=async()=>{const{x:d,y:g,middlewareData:b,placement:h}=await ue(r,c,{placement:"top",animation:!1,middleware:[Gt(10),Zt(),It({element:l}),m]});Object.assign(c.style,{left:`${d}px`,top:`${g}px`});const v=b.arrow;if(v){let{x:y,y:x}=v;h==="bottom"&&(x=-c.offsetHeight+5),Object.assign(l.style,{left:y!=null?`${y}px`:"",top:x!=null?`${x}px`:""})}};let f=s.getAttribute(`data-tooltip-width-${i}`)??"max(calc(100vw - 30px)";c.style.maxWidth=f,c.style.width=f,u(),de(r,c,u);let p=!1;r.addEventListener("mouseenter",async()=>{p=!0,c.classList.add("tooltip__inner_visible"),await u()}),r.addEventListener("mouseleave",d=>{p=!1,setTimeout(()=>{p||o(d)})}),r.addEventListener("click",()=>{event.currentTarget})}),s.addEventListener("click",l=>{l.stopPropagation(),l.preventDefault()})})});const me={Москва:"8 (495) 286–01–11",Сочи:"8 (862) 225-75-32","Санкт-Петербург":"8 (812) 409-05-00"},pe=(t,e)=>{new MutationObserver(function(o){o.forEach(function(i){i.attributeName==="data-value"&&e(t)})}).observe(t,{attributes:!0,childList:!1,characterData:!1})},he=document.querySelectorAll(".city");he.forEach(t=>{pe(t,e=>{const{value:n}=e.dataset;document.querySelectorAll(".phone-number a").forEach(o=>{o.textContent=me[n]})})});const ge=t=>{const e=t.offsetTop,n=window.pageYOffset,o=e-n;let i=null;const s=c=>{i===null&&(i=c);const l=c-i,a=r(l,n,o,600);window.scrollTo(0,a),l<600&&requestAnimationFrame(s)},r=(c,l,a,m)=>(c/=m/2,c<1?a/2*c*c+l:(c--,-a/2*(c*(c-2)-1)+l));requestAnimationFrame(s)},wt=t=>{const e=document.querySelector(t.getAttribute("href"));e&&("scrollBehavior"in document.documentElement.style?e.scrollIntoView({behavior:"smooth"}):ge(e))};document.querySelectorAll(".menu-link").forEach(t=>{t.addEventListener("click",n=>n.preventDefault());const e=document.querySelector(".header_start-button_mobile");t.parentNode.addEventListener("click",n=>{if(n.preventDefault(),Q()){const o=document.querySelector(".header__burger"),i=document.querySelector(".header_active");if(i){i.classList.remove("header_active"),o.classList.remove("header__burger_hidden"),e.classList.remove("active"),I(!1),setTimeout(()=>{wt(t)},200);return}}wt(t)})});export{Q as i};