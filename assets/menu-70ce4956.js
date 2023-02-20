(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Rt=()=>{const t=document.createElement("div");t.style.visibility="hidden",t.style.overflow="scroll",document.body.appendChild(t);const e=document.createElement("div");t.appendChild(e);const n=t.offsetWidth-e.offsetWidth;return t.parentNode.removeChild(t),n},I=t=>{if(t){const e=Rt();document.body.style.paddingRight=`${e}px`,document.body.style.overflow="hidden",document.querySelector("html").style.overflow="hidden"}else document.body.style.paddingRight="",document.body.style.overflowY="",document.querySelector("html").style.overflow=""},At=t=>{t.scrollIntoView({behavior:"smooth",block:"center"})},kt=(t,e)=>{document.addEventListener("click",n=>{t.contains(n.target)||e()})},Dt=t=>{const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight-100||document.documentElement.clientHeight-100)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)},Z=(t,e,n="_active",o="_visible",i=500)=>{t==null||t.classList.add(`${e}${o}`),requestAnimationFrame(()=>t.classList.add(`${e}${n}`))},V=(t,e,n="_active",o="_visible",i=500)=>{t.classList.remove(`${e}${n}`),setTimeout(()=>{t.classList.remove(`${e}${o}`)},i)},st=()=>{const t={mobile:360,smartphone:480,tablet:960,laptop:1200};let e="";for(const[n,o]of Object.entries(t))window.matchMedia(`(min-width: ${o}px)`).matches&&(e=n);return e||"mobile"},Q=()=>"ontouchstart"in window||navigator.maxTouchPoints||navigator.msMaxTouchPoints;document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".header__burger"),e=document.querySelector(".header__burger_opened"),n=document.querySelector(".header_start-button_mobile"),o=document.querySelector(".header__dropdown"),i=document.querySelector(".overlay");t.addEventListener("click",()=>{t.classList.toggle("header__burger_hidden"),n.classList.add("active"),document.querySelector(".header").classList.add("header_active"),i.classList.add("overlay__active"),document.querySelector(".container-bottom").style.display="block",I(!0)}),e.addEventListener("click",()=>{t.classList.remove("header__burger_hidden"),n.classList.remove("active"),document.querySelector(".header").classList.remove("header_active"),o.classList.remove("active"),i.classList.remove("overlay__active"),document.querySelector(".container-bottom").style.display="none",I(!1)})});const qt=document.querySelectorAll(".dropdown"),Pt=(t,e)=>{const n=t.querySelector(".dropdown__button");t.dataset.value=e,n.innerText=e};qt.forEach(t=>{const e=t.classList.contains("dropdown_inline"),n=e?t:t.querySelector(".dropdown__button");let o=!1;if(e){const u=t.dataset.dropdown;document.getElementById("start-city");const f=document.querySelector(`.dropdown__content[data-dropdown="${u}"]`);f&&(n.addEventListener("click",p=>{p.preventDefault(),o=!o,o?(n.classList.add("dropdown_active"),Z(f,"dropdown__content"),document.getElementById("phone-numbers").scrollIntoView({block:"start",behavior:"smooth"})):(V(f,"dropdown__content"),n.classList.remove("dropdown_active"))}),f.querySelector(".dropdown__close").addEventListener("click",()=>{o=!o,V(f,"dropdown__content")}));return}const i=()=>{o=!0,o&&Z(t,"dropdown")},s=()=>{V(t,"dropdown")};let r=null,c=null;const l=150;let d=!1;t.addEventListener("mouseenter",()=>{if(Q())return;const u=st();t.classList.contains("footer-downside__menu")&&["laptop","desktop","tablet"].includes(u)||(clearTimeout(c),r=setTimeout(()=>{d=!0,i()},l))}),t.addEventListener("mouseleave",()=>{Q()||(clearTimeout(r),d===!0&&(c=setTimeout(()=>{s()},l)))}),t.dataset.value&&t.querySelectorAll(".dropdown__menu li").forEach(f=>{f.addEventListener("click",()=>{t.dataset.value&&Pt(t,f.dataset.value)})});const m=st();Q()&&t.addEventListener("click",()=>{o=!o,o?Z(t,"dropdown"):V(t,"dropdown")}),kt(t,()=>{["mobile","smartphone"].includes(m)&&(t.classList.contains("dropdown_mobile")||t.classList.contains("dropdown_tablet"))||(t.classList.remove("dropdown_active","dropdown_visible"),o=!1)})});const Bt=t=>{const e=t.querySelector(".collapse__arrow");if(e)return e.innerHTML=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.7998 22.4L15.9998 10.4L3.1998 22.4" stroke="#2B8FEB" stroke-linecap="round"/>
    </svg>
  `,e},ut=400;document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".collapse"),e=document.getElementById("start");t.forEach(n=>{let o=!1;const i=Bt(n);let s=!1;const r=n.querySelector(".collapse__content"),c=n.querySelector(".collapse__activator");n.addEventListener("click",()=>{if(o)return!1;s=!s,o=!0,window.setTimeout(()=>o=!1,320),i&&i.classList.toggle("collapse__arrow_active"),s?(c.classList.toggle("collapse__activator_active"),Z(r,"collapse__content"),e.scrollIntoView({block:"start",behavior:"smooth",inline:"end"})):(V(r,"collapse__content"),window.setTimeout(()=>{c.classList.toggle("collapse__activator_active")},ut)),window.setTimeout(()=>{s&&!Dt(r)&&(At(n),e.scrollIntoView({block:"start",behavior:"smooth",inline:"end"}),window.setTimeout(()=>!1,ut))})}),r.addEventListener("click",l=>l.stopPropagation())})});const q=document.querySelector(".overlay"),it=(t,e)=>{t==null||t.classList.remove("modal_active"),q==null||q.classList.remove("overlay_active"),t==null||t.classList.remove("modal_visible"),I(!1),e!=null&&e.dataset.hide&&(e.style.display="")},Ft=(t,e)=>{var n;q==null||q.classList.add("overlay_active"),t==null||t.classList.add("modal_visible"),setTimeout(()=>{t.classList.add("modal_active")},100),I(!0),(n=e==null?void 0:e.dataset)!=null&&n.hide&&(e.style.display="none")};document.querySelectorAll(".modal__activator").forEach(t=>{const e=t.dataset.modal,n=document.querySelector(`.modal[data-modal="${e}"]`);n&&t.addEventListener("click",()=>{Ft(n,t)})});document.querySelectorAll(".modal").forEach(t=>{const e=t.dataset.modal,n=document.querySelector(`.modal__activator[data-modal="${e}"]`);t.addEventListener("mouseup",o=>{o.target===o.currentTarget&&t.classList.contains("modal_active")&&it(t,n)}),t.querySelector(".modal__close").addEventListener("click",()=>it(t,n)),t.addEventListener("click",o=>{o.target===o.currentTarget&&t.classList.contains("modal_active")&&it(t,n)})});function j(t){return t.split("-")[1]}function lt(t){return t==="y"?"height":"width"}function B(t){return t.split("-")[0]}function tt(t){return["top","bottom"].includes(B(t))?"x":"y"}function ft(t,e,n){let{reference:o,floating:i}=t;const s=o.x+o.width/2-i.width/2,r=o.y+o.height/2-i.height/2,c=tt(e),l=lt(c),d=o[l]/2-i[l]/2,m=B(e),u=c==="x";let f;switch(m){case"top":f={x:s,y:o.y-i.height};break;case"bottom":f={x:s,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:r};break;case"left":f={x:o.x-i.width,y:r};break;default:f={x:o.x,y:o.y}}switch(j(e)){case"start":f[c]-=d*(n&&u?-1:1);break;case"end":f[c]+=d*(n&&u?-1:1);break}return f}const Mt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let d=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:u}=ft(d,o,l),f=o,p={},a=0;for(let g=0;g<c.length;g++){const{name:b,fn:h}=c[g],{x:v,y,data:x,reset:w}=await h({x:m,y:u,initialPlacement:o,placement:f,strategy:i,middlewareData:p,rects:d,platform:r,elements:{reference:t,floating:e}});if(m=v??m,u=y??u,p={...p,[b]:{...p[b],...x}},w&&a<=50){a++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(d=w.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:m,y:u}=ft(d,f,l)),g=-1;continue}}return{x:m,y:u,placement:f,strategy:i,middlewareData:p}};function Vt(t){return{top:0,right:0,bottom:0,left:0,...t}}function wt(t){return typeof t!="number"?Vt(t):{top:t,right:t,bottom:t,left:t}}function $(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function rt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:f=!1,padding:p=0}=e,a=wt(p),b=c[f?u==="floating"?"reference":"floating":u],h=$(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(b)))==null||n?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:d,rootBoundary:m,strategy:l})),v=u==="floating"?{...r.floating,x:o,y:i}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),x=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},w=$(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:l}):v);return{top:(h.top-w.top+a.top)/x.y,bottom:(w.bottom-h.bottom+a.bottom)/x.y,left:(h.left-w.left+a.left)/x.x,right:(w.right-h.right+a.right)/x.x}}const $t=Math.min,Nt=Math.max;function Wt(t,e,n){return Nt(t,$t(e,n))}const It=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t||{},{x:i,y:s,placement:r,rects:c,platform:l}=e;if(n==null)return{};const d=wt(o),m={x:i,y:s},u=tt(r),f=lt(u),p=await l.getDimensions(n),a=u==="y"?"top":"left",g=u==="y"?"bottom":"right",b=c.reference[f]+c.reference[u]-m[u]-c.floating[f],h=m[u]-c.reference[u],v=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let y=v?u==="y"?v.clientHeight||0:v.clientWidth||0:0;y===0&&(y=c.floating[f]);const x=b/2-h/2,w=d[a],R=y-p[f]-d[g],_=y/2-p[f]/2+x,k=Wt(w,_,R),Y=j(r)!=null&&_!=k&&c.reference[f]/2-(_<w?d[a]:d[g])-p[f]/2<0?_<w?w-_:R-_:0;return{[u]:m[u]-Y,data:{[u]:k,centerOffset:_-k}}}}),Ht={left:"right",right:"left",bottom:"top",top:"bottom"};function G(t){return t.replace(/left|right|bottom|top/g,e=>Ht[e])}function jt(t,e,n){n===void 0&&(n=!1);const o=j(t),i=tt(t),s=lt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=G(r)),{main:r,cross:G(r)}}const Yt={start:"end",end:"start"};function ct(t){return t.replace(/start|end/g,e=>Yt[e])}function zt(t){const e=G(t);return[ct(t),e,ct(e)]}function Xt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Ut(t,e,n,o){const i=j(t);let s=Xt(B(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(ct)))),s}const Kt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:s,initialPlacement:r,platform:c,elements:l}=e,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:a=!0,...g}=t,b=B(o),h=B(r)===r,v=await(c.isRTL==null?void 0:c.isRTL(l.floating)),y=u||(h||!a?[G(r)]:zt(r));!u&&p!=="none"&&y.push(...Ut(r,a,p,v));const x=[r,...y],w=await rt(e,g),R=[];let _=((n=i.flip)==null?void 0:n.overflows)||[];if(d&&R.push(w[b]),m){const{main:D,cross:z}=jt(o,s,v);R.push(w[D],w[z])}if(_=[..._,{placement:o,overflows:R}],!R.every(D=>D<=0)){var k,ot;const D=(((k=i.flip)==null?void 0:k.index)||0)+1,z=x[D];if(z)return{data:{index:D,overflows:_},reset:{placement:z}};let F=(ot=_.find(X=>X.overflows[0]<=0))==null?void 0:ot.placement;if(!F)switch(f){case"bestFit":{var Y;const X=(Y=_.map(U=>[U.placement,U.overflows.filter(M=>M>0).reduce((M,Ot)=>M+Ot,0)]).sort((U,M)=>U[1]-M[1])[0])==null?void 0:Y[0];X&&(F=X);break}case"initialPlacement":F=r;break}if(o!==F)return{reset:{placement:F}}}return{}}}};async function Zt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=B(n),c=j(n),l=tt(n)==="x",d=["left","top"].includes(r)?-1:1,m=s&&l?-1:1,u=typeof e=="function"?e(t):e;let{mainAxis:f,crossAxis:p,alignmentAxis:a}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof a=="number"&&(p=c==="end"?a*-1:a),l?{x:p*m,y:f*d}:{x:f*d,y:p*m}}const Qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Zt(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function L(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function C(t){return L(t).getComputedStyle(t)}const mt=Math.min,N=Math.max,J=Math.round;function bt(t){const e=C(t);let n=parseFloat(e.width),o=parseFloat(e.height);const i=t.offsetWidth,s=t.offsetHeight,r=J(n)!==i||J(o)!==s;return r&&(n=i,o=s),{width:n,height:o,fallback:r}}function T(t){return _t(t)?(t.nodeName||"").toLowerCase():""}let K;function xt(){if(K)return K;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(K=t.brands.map(e=>e.brand+"/"+e.version).join(" "),K):navigator.userAgent}function S(t){return t instanceof L(t).HTMLElement}function E(t){return t instanceof L(t).Element}function _t(t){return t instanceof L(t).Node}function pt(t){if(typeof ShadowRoot>"u")return!1;const e=L(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function et(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Gt(t){return["table","td","th"].includes(T(t))}function at(t){const e=/firefox/i.test(xt()),n=C(t),o=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||(o?o!=="none":!1)||e&&n.willChange==="filter"||e&&(n.filter?n.filter!=="none":!1)||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const s=n.contain;return s!=null?s.includes(i):!1})}function Lt(){return!/^((?!chrome|android).)*safari/i.test(xt())}function dt(t){return["html","body","#document"].includes(T(t))}function Et(t){return E(t)?t:t.contextElement}const Ct={x:1,y:1};function P(t){const e=Et(t);if(!S(e))return Ct;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:s}=bt(e);let r=(s?J(n.width):n.width)/o,c=(s?J(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}function A(t,e,n,o){var i,s;e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),c=Et(t);let l=Ct;e&&(o?E(o)&&(l=P(o)):l=P(t));const d=c?L(c):window,m=!Lt()&&n;let u=(r.left+(m&&((i=d.visualViewport)==null?void 0:i.offsetLeft)||0))/l.x,f=(r.top+(m&&((s=d.visualViewport)==null?void 0:s.offsetTop)||0))/l.y,p=r.width/l.x,a=r.height/l.y;if(c){const g=L(c),b=o&&E(o)?L(o):o;let h=g.frameElement;for(;h&&o&&b!==g;){const v=P(h),y=h.getBoundingClientRect(),x=getComputedStyle(h);y.x+=(h.clientLeft+parseFloat(x.paddingLeft))*v.x,y.y+=(h.clientTop+parseFloat(x.paddingTop))*v.y,u*=v.x,f*=v.y,p*=v.x,a*=v.y,u+=y.x,f+=y.y,h=L(h).frameElement}}return{width:p,height:a,top:f,right:u+p,bottom:f+a,left:u,x:u,y:f}}function O(t){return((_t(t)?t.ownerDocument:t.document)||window.document).documentElement}function nt(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Jt(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=S(n),s=O(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},c={x:1,y:1};const l={x:0,y:0};if((i||!i&&o!=="fixed")&&((T(n)!=="body"||et(s))&&(r=nt(n)),S(n))){const d=A(n);c=P(n),l.x=d.x+n.clientLeft,l.y=d.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+l.x,y:e.y*c.y-r.scrollTop*c.y+l.y}}function St(t){return A(O(t)).left+nt(t).scrollLeft}function te(t){const e=O(t),n=nt(t),o=t.ownerDocument.body,i=N(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=N(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+St(t);const c=-n.scrollTop;return C(o).direction==="rtl"&&(r+=N(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function H(t){if(T(t)==="html")return t;const e=t.assignedSlot||t.parentNode||pt(t)&&t.host||O(t);return pt(e)?e.host:e}function Tt(t){const e=H(t);return dt(e)?e.ownerDocument.body:S(e)&&et(e)?e:Tt(e)}function W(t,e){var n;e===void 0&&(e=[]);const o=Tt(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),s=L(o);return i?e.concat(s,s.visualViewport||[],et(o)?o:[]):e.concat(o,W(o))}function ee(t,e){const n=L(t),o=O(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const d=Lt();(d||!d&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function ne(t,e){const n=A(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=S(t)?P(t):{x:1,y:1},r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,d=o*s.y;return{width:r,height:c,x:l,y:d}}function ht(t,e,n){return e==="viewport"?$(ee(t,n)):E(e)?$(ne(e,n)):$(te(O(t)))}function oe(t,e){const n=e.get(t);if(n)return n;let o=W(t).filter(c=>E(c)&&T(c)!=="body"),i=null;const s=C(t).position==="fixed";let r=s?H(t):t;for(;E(r)&&!dt(r);){const c=C(r),l=at(r);(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position))?o=o.filter(m=>m!==r):i=c,r=H(r)}return e.set(t,o),o}function ie(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?oe(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((d,m)=>{const u=ht(e,m,i);return d.top=N(u.top,d.top),d.right=mt(u.right,d.right),d.bottom=mt(u.bottom,d.bottom),d.left=N(u.left,d.left),d},ht(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function se(t){return S(t)?bt(t):t.getBoundingClientRect()}function gt(t){return!S(t)||C(t).position==="fixed"?null:t.offsetParent}function re(t){let e=H(t);for(;S(e)&&!dt(e);){if(at(e))return e;e=H(e)}return null}function vt(t){const e=L(t);let n=gt(t);for(;n&&Gt(n)&&C(n).position==="static";)n=gt(n);return n&&(T(n)==="html"||T(n)==="body"&&C(n).position==="static"&&!at(n))?e:n||re(t)||e}function ce(t,e,n){const o=S(e),i=O(e),s=A(t,!0,n==="fixed",e);let r={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(o||!o&&n!=="fixed")if((T(e)!=="body"||et(i))&&(r=nt(e)),S(e)){const l=A(e,!0);c.x=l.x+e.clientLeft,c.y=l.y+e.clientTop}else i&&(c.x=St(i));return{x:s.left+r.scrollLeft-c.x,y:s.top+r.scrollTop-c.y,width:s.width,height:s.height}}const le={getClippingRect:ie,convertOffsetParentRelativeRectToViewportRelativeRect:Jt,isElement:E,getDimensions:se,getOffsetParent:vt,getDocumentElement:O,getScale:P,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||vt,s=this.getDimensions;return{reference:ce(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>C(t).direction==="rtl"};function ae(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=!0,animationFrame:c=!1}=o,l=i&&!c,d=l||s?[...E(t)?W(t):t.contextElement?W(t.contextElement):[],...W(e)]:[];d.forEach(a=>{l&&a.addEventListener("scroll",n,{passive:!0}),s&&a.addEventListener("resize",n)});let m=null;if(r){let a=!0;m=new ResizeObserver(()=>{a||n(),a=!1}),E(t)&&!c&&m.observe(t),!E(t)&&t.contextElement&&!c&&m.observe(t.contextElement),m.observe(e)}let u,f=c?A(t):null;c&&p();function p(){const a=A(t);f&&(a.x!==f.x||a.y!==f.y||a.width!==f.width||a.height!==f.height)&&n(),f=a,u=requestAnimationFrame(p)}return n(),()=>{var a;d.forEach(g=>{l&&g.removeEventListener("scroll",n),s&&g.removeEventListener("resize",n)}),(a=m)==null||a.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const de=(t,e,n)=>{const o=new Map,i={platform:le,...n},s={...i.platform,_c:o};return Mt(t,e,{...i,platform:s})},ue=`
<svg class="icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="7.5" r="7" stroke="#F88C28"/>
<path
  d="M6.7517 9.45316V9.40153C6.75737 8.85373 6.81406 8.41778 6.92177 8.09369C7.02948 7.7696 7.18254 7.50717 7.38095 7.30641C7.57936 7.10564 7.81746 6.92065 8.09524 6.75143C8.26247 6.64818 8.4127 6.52629 8.54592 6.38576C8.67914 6.24235 8.78401 6.07744 8.86054 5.89101C8.93991 5.70459 8.97959 5.49809 8.97959 5.27151C8.97959 4.99044 8.9144 4.74665 8.78401 4.54015C8.65363 4.33365 8.47931 4.17447 8.26105 4.06262C8.0428 3.95076 7.80045 3.89484 7.53401 3.89484C7.30159 3.89484 7.07766 3.94359 6.86224 4.04111C6.64683 4.13862 6.46684 4.29207 6.32228 4.50143C6.17772 4.7108 6.0941 4.9847 6.07143 5.32314H5C5.02268 4.83556 5.14739 4.41826 5.37415 4.07122C5.60374 3.72419 5.90561 3.45889 6.27976 3.27533C6.65675 3.09178 7.07483 3 7.53401 3C8.03288 3 8.46655 3.10038 8.83503 3.30115C9.20635 3.50191 9.49263 3.77725 9.69388 4.12715C9.89796 4.47706 10 4.87572 10 5.32314C10 5.63862 9.95181 5.924 9.85544 6.17925C9.7619 6.43451 9.62585 6.66252 9.44728 6.86329C9.27154 7.06405 9.05896 7.24187 8.80952 7.39675C8.56009 7.55449 8.36026 7.72084 8.21003 7.89579C8.05981 8.06788 7.95068 8.27294 7.88265 8.51099C7.81463 8.74904 7.77778 9.04589 7.77211 9.40153V9.45316H6.7517ZM7.29592 12C7.08617 12 6.90618 11.924 6.75595 11.772C6.60573 11.62 6.53061 11.4379 6.53061 11.2256C6.53061 11.0134 6.60573 10.8313 6.75595 10.6793C6.90618 10.5272 7.08617 10.4512 7.29592 10.4512C7.50567 10.4512 7.68566 10.5272 7.83588 10.6793C7.98611 10.8313 8.06122 11.0134 8.06122 11.2256C8.06122 11.3662 8.02579 11.4952 7.95493 11.6128C7.8869 11.7304 7.79478 11.825 7.67857 11.8967C7.56519 11.9656 7.43764 12 7.29592 12Z"
  fill="#F88C28"
/>
</svg>`;document.addEventListener("DOMContentLoaded",()=>{const t=s=>{const r=document.createElement("div");return r.classList.add("tooltip__inner"),r.role="tooltip",r.innerHTML=`
      <div class="tooltip__content">${s}</div>
      <div class="tooltip__arrow"></div>
    `,r},e=s=>{const r=document.createElement("div");return r.classList.add("icon","tooltip__activator"),s.appendChild(r),r.innerHTML=ue,r},n=document.querySelectorAll(".tooltip"),o=s=>{var r,c,l;(l=(c=(r=s.target)==null?void 0:r.parentNode)==null?void 0:c.querySelector(".tooltip__inner"))==null||l.classList.remove("tooltip__inner_visible")},i=st();n.forEach(s=>{let r=s==null?void 0:s.querySelector(".tooltip__activator");r||(r=e(s));const c=t(s.getAttribute("data-tooltip"));s.appendChild(c),requestAnimationFrame(()=>{const l=c.querySelector(".tooltip__arrow");let d=null;const m={name:"middleware",async fn(a){if(!["smartphone","mobile","laptop","tablet"].includes(i))return{middlewareArguments:a};if(i!=="mobile"){const{right:g,left:b}=await rt(a);let h=a.x;return g>0&&(h=h-g,a.middlewareData.arrow.x=a.middlewareData.arrow.x+g),b>0&&(h=h+b,a.middlewareData.arrow.x=a.middlewareData.arrow.x-b),{...a,x:h,y:a.y}}else return d=await rt(a),a.middlewareData.arrow.x=a.middlewareData.arrow.x-d.left-15,{...a,x:a.x+d.left+15,y:a.y}}},u=async()=>{const{x:a,y:g,middlewareData:b,placement:h}=await de(r,c,{placement:"top",animation:!1,middleware:[Qt(10),Kt(),It({element:l}),m]});Object.assign(c.style,{left:`${a}px`,top:`${g}px`});const v=b.arrow;if(v){let{x:y,y:x}=v;h==="bottom"&&(x=-c.offsetHeight+5),Object.assign(l.style,{left:y!=null?`${y}px`:"",top:x!=null?`${x}px`:""})}};let f=s.getAttribute(`data-tooltip-width-${i}`)??"max(calc(100vw - 30px)";c.style.maxWidth=f,c.style.width=f,u(),ae(r,c,u);let p=!1;r.addEventListener("mouseenter",async()=>{p=!0,c.classList.add("tooltip__inner_visible"),await u()}),r.addEventListener("mouseleave",a=>{p=!1,setTimeout(()=>{p||o(a)})}),r.addEventListener("click",()=>{event.currentTarget})}),s.addEventListener("click",l=>{l.stopPropagation(),l.preventDefault()})})});const fe={Москва:"8 (495) 286–01–11",Сочи:"8 (862) 225-75-32","Санкт-Петербург":"8 (812) 409-05-00"},me=(t,e)=>{new MutationObserver(function(o){o.forEach(function(i){i.attributeName==="data-value"&&e(t)})}).observe(t,{attributes:!0,childList:!1,characterData:!1})},pe=document.querySelectorAll(".city");pe.forEach(t=>{me(t,e=>{const{value:n}=e.dataset;document.querySelectorAll(".phone-number a").forEach(o=>{o.textContent=fe[n]})})});const he=t=>{const e=t.offsetTop,n=window.pageYOffset,o=e-n;let i=null;const s=c=>{i===null&&(i=c);const l=c-i,d=r(l,n,o,600);window.scrollTo(0,d),l<600&&requestAnimationFrame(s)},r=(c,l,d,m)=>(c/=m/2,c<1?d/2*c*c+l:(c--,-d/2*(c*(c-2)-1)+l));requestAnimationFrame(s)},yt=t=>{const e=document.querySelector(t.getAttribute("href"));e&&("scrollBehavior"in document.documentElement.style?e.scrollIntoView({behavior:"smooth"}):he(e))};document.querySelectorAll(".menu-link").forEach(t=>{t.addEventListener("click",n=>n.preventDefault());const e=document.querySelector(".header_start-button_mobile");t.parentNode.addEventListener("click",n=>{if(n.preventDefault(),Q()){const o=document.querySelector(".header__burger"),i=document.querySelector(".header_active");if(i){i.classList.remove("header_active"),o.classList.remove("header__burger_hidden"),e.classList.remove("active"),I(!1),setTimeout(()=>{yt(t)},200);return}}yt(t)})});export{V as a,Q as i,he as s,Z as t};