(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(l){if(l.ep)return;l.ep=!0;const r=o(l);fetch(l.href,r)}})();const kt=()=>{const t=document.createElement("div");t.style.visibility="hidden",t.style.overflow="scroll",document.body.appendChild(t);const e=document.createElement("div");t.appendChild(e);const o=t.offsetWidth-e.offsetWidth;return t.parentNode.removeChild(t),o},rt=t=>{if(t){const e=kt();document.body.style.paddingRight=`${e}px`,document.body.style.overflow="hidden",document.querySelector("html").style.overflow="hidden"}else document.body.style.paddingRight="",document.body.style.overflowY="",document.querySelector("html").style.overflow=""},Pt=t=>{t.scrollIntoView({behavior:"smooth",block:"center"})},At=(t,e)=>{document.addEventListener("click",o=>{t.contains(o.target)||e()})},Bt=t=>{const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight-100||document.documentElement.clientHeight-100)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)},K=(t,e,o="_active",n="_visible",l=500)=>{t==null||t.classList.add(`${e}${n}`),requestAnimationFrame(()=>t.classList.add(`${e}${o}`))},N=(t,e,o="_active",n="_visible",l=500)=>{t.classList.remove(`${e}${o}`),setTimeout(()=>{t.classList.remove(`${e}${n}`)},l)},lt=()=>{const t={mobile:360,smartphone:480,tablet:960,laptop:1200};let e="";for(const[o,n]of Object.entries(t))window.matchMedia(`(min-width: ${n}px)`).matches&&(e=o);return e||"mobile"},Q=()=>"ontouchstart"in window||navigator.maxTouchPoints||navigator.msMaxTouchPoints;document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".header__burger"),e=document.querySelector(".header__burger_opened"),o=document.querySelector(".header_start-button_mobile"),n=document.querySelector(".header__dropdown"),l=document.querySelector(".overlay");t.addEventListener("click",()=>{t.classList.toggle("header__burger_hidden"),o.classList.add("active"),document.querySelector(".header").classList.add("header_active"),l.classList.add("overlay__active"),document.querySelector(".container-bottom").style.display="block",rt(!0)}),e.addEventListener("click",()=>{t.classList.remove("header__burger_hidden"),o.classList.remove("active"),document.querySelector(".header").classList.remove("header_active"),n.classList.remove("active"),l.classList.remove("overlay__active"),document.querySelector(".container-bottom").style.display="none",rt(!1)})});const Ft=document.querySelectorAll(".dropdown"),Mt=(t,e)=>{const o=t.querySelector(".dropdown__button");t.dataset.value=e,o.innerText=e};Ft.forEach(t=>{const e=t.classList.contains("dropdown_inline"),o=e?t:t.querySelector(".dropdown__button");let n=!1;if(e){const u=t.dataset.dropdown;document.getElementById("start-city");const f=document.querySelector(`.dropdown__content[data-dropdown="${u}"]`);f&&(o.addEventListener("click",m=>{m.preventDefault(),n=!n,n?(o.classList.add("dropdown_active"),K(f,"dropdown__content"),document.getElementById("phone-numbers").scrollIntoView({block:"start",behavior:"smooth"})):(N(f,"dropdown__content"),o.classList.remove("dropdown_active"))}),f.querySelector(".dropdown__close").addEventListener("click",()=>{n=!n,N(f,"dropdown__content")}));return}const l=()=>{n=!0,n&&K(t,"dropdown")},r=()=>{N(t,"dropdown")};let i=null,s=null;const c=150;let a=!1;t.addEventListener("mouseenter",()=>{if(Q())return;const u=lt();t.classList.contains("footer-downside__menu")&&["laptop","desktop","tablet"].includes(u)||(clearTimeout(s),i=setTimeout(()=>{a=!0,l()},c))}),t.addEventListener("mouseleave",()=>{Q()||(clearTimeout(i),a===!0&&(s=setTimeout(()=>{r()},c)))}),t.dataset.value&&t.querySelectorAll(".dropdown__menu li").forEach(f=>{f.addEventListener("click",()=>{t.dataset.value&&Mt(t,f.dataset.value)})});const p=lt();Q()&&t.addEventListener("click",()=>{n=!n,n?K(t,"dropdown"):N(t,"dropdown")}),At(t,()=>{["mobile","smartphone"].includes(p)&&(t.classList.contains("dropdown_mobile")||t.classList.contains("dropdown_tablet"))||(t.classList.remove("dropdown_active","dropdown_visible"),n=!1)})});const Vt=t=>{const e=t.querySelector(".collapse__arrow");if(e)return e.innerHTML=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.7998 22.4L15.9998 10.4L3.1998 22.4" stroke="#2B8FEB" stroke-linecap="round"/>
    </svg>
  `,e},pt=400;document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".collapse"),e=document.getElementById("start");t.forEach(o=>{let n=!1;const l=Vt(o);let r=!1;const i=o.querySelector(".collapse__content"),s=o.querySelector(".collapse__activator");o.addEventListener("click",()=>{if(n)return!1;r=!r,n=!0,window.setTimeout(()=>n=!1,320),l&&l.classList.toggle("collapse__arrow_active"),r?(s.classList.toggle("collapse__activator_active"),K(i,"collapse__content"),e.scrollIntoView({block:"start",behavior:"smooth",inline:"end"})):(N(i,"collapse__content"),window.setTimeout(()=>{s.classList.toggle("collapse__activator_active")},pt)),window.setTimeout(()=>{r&&!Bt(i)&&(Pt(o),e.scrollIntoView({block:"start",behavior:"smooth",inline:"end"}),window.setTimeout(()=>!1,pt))})}),i.addEventListener("click",c=>c.stopPropagation())})});const se=(t,e=150)=>{let o;return(...n)=>{clearTimeout(o),o=setTimeout(()=>{t.apply(globalThis,n)},e)}},ce=(t,e=" ")=>t.toLocaleString("en").replace(/,/g,e),ae=t=>{let o=(""+t).replace(/\D/g,"").match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);if(o)return o[1]+"("+o[2]+") "+o[3]+"-"+o[4]+"-"+o[5]},ue=(t,e,o=[2,0,1,1,1,2])=>e[t%100>4&&t%100<20?2:o[t%10<5?t%10:5]],de=(t,e)=>t.sort((o,n)=>o[e]<n[e]?-1:o[e]>n[e]?1:0);function X(t){return t.split("-")[1]}function ut(t){return t==="y"?"height":"width"}function V(t){return t.split("-")[0]}function tt(t){return["top","bottom"].includes(V(t))?"x":"y"}function ht(t,e,o){let{reference:n,floating:l}=t;const r=n.x+n.width/2-l.width/2,i=n.y+n.height/2-l.height/2,s=tt(e),c=ut(s),a=n[c]/2-l[c]/2,p=s==="x";let u;switch(V(e)){case"top":u={x:r,y:n.y-l.height};break;case"bottom":u={x:r,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:i};break;case"left":u={x:n.x-l.width,y:i};break;default:u={x:n.x,y:n.y}}switch(X(e)){case"start":u[s]-=a*(o&&p?-1:1);break;case"end":u[s]+=a*(o&&p?-1:1)}return u}const Ht=async(t,e,o)=>{const{placement:n="bottom",strategy:l="absolute",middleware:r=[],platform:i}=o,s=r.filter(Boolean),c=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:l}),{x:p,y:u}=ht(a,n,c),f=n,m={},d=0;for(let h=0;h<s.length;h++){const{name:g,fn:v}=s[h],{x:y,y:w,data:b,reset:L}=await v({x:p,y:u,initialPlacement:n,placement:f,strategy:l,middlewareData:m,rects:a,platform:i,elements:{reference:t,floating:e}});p=y??p,u=w??u,m={...m,[g]:{...m[g],...b}},L&&d<=50&&(d++,typeof L=="object"&&(L.placement&&(f=L.placement),L.rects&&(a=L.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:l}):L.rects),{x:p,y:u}=ht(a,f,c)),h=-1)}return{x:p,y:u,placement:f,strategy:l,middlewareData:m}};function Lt(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function G(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function st(t,e){var o;e===void 0&&(e={});const{x:n,y:l,platform:r,rects:i,elements:s,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:m=0}=e,d=Lt(m),h=s[f?u==="floating"?"reference":"floating":u],g=G(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(h)))==null||o?h:h.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(s.floating)),boundary:a,rootBoundary:p,strategy:c})),v=u==="floating"?{...i.floating,x:n,y:l}:i.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(s.floating)),w=await(r.isElement==null?void 0:r.isElement(y))&&await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1},b=G(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:c}):v);return{top:(g.top-b.top+d.top)/w.y,bottom:(b.bottom-g.bottom+d.bottom)/w.y,left:(g.left-b.left+d.left)/w.x,right:(b.right-g.right+d.right)/w.x}}const Wt=Math.min,It=Math.max;function Nt(t,e,o){return It(t,Wt(e,o))}const zt=t=>({name:"arrow",options:t,async fn(e){const{element:o,padding:n=0}=t||{},{x:l,y:r,placement:i,rects:s,platform:c,elements:a}=e;if(o==null)return{};const p=Lt(n),u={x:l,y:r},f=tt(i),m=ut(f),d=await c.getDimensions(o),h=f==="y",g=h?"top":"left",v=h?"bottom":"right",y=h?"clientHeight":"clientWidth",w=s.reference[m]+s.reference[f]-u[f]-s.floating[m],b=u[f]-s.reference[f],L=await(c.getOffsetParent==null?void 0:c.getOffsetParent(o));let q=L?L[y]:0;q&&await(c.isElement==null?void 0:c.isElement(L))||(q=a.floating[y]||s.floating[m]);const A=w/2-b/2,B=p[g],W=q-d[m]-p[v],R=q/2-d[m]/2+A,x=Nt(B,R,W),C=X(i)!=null&&R!=x&&s.reference[m]/2-(R<B?p[g]:p[v])-d[m]/2<0;return{[f]:u[f]-(C?R<B?B-R:W-R:0),data:{[f]:x,centerOffset:R-x}}}}),jt=["top","right","bottom","left"];jt.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);const Yt={left:"right",right:"left",bottom:"top",top:"bottom"};function J(t){return t.replace(/left|right|bottom|top/g,e=>Yt[e])}function Xt(t,e,o){o===void 0&&(o=!1);const n=X(t),l=tt(t),r=ut(l);let i=l==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=J(i)),{main:i,cross:J(i)}}const Zt={start:"end",end:"start"};function it(t){return t.replace(/start|end/g,e=>Zt[e])}const Kt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:n,middlewareData:l,rects:r,initialPlacement:i,platform:s,elements:c}=e,{mainAxis:a=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:d=!0,...h}=t,g=V(n),v=V(i)===i,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),w=u||(v||!d?[J(i)]:function(x){const C=J(x);return[it(x),C,it(C)]}(i));u||m==="none"||w.push(...function(x,C,F,O){const $=X(x);let E=function(I,nt,qt){const ft=["left","right"],mt=["right","left"],$t=["top","bottom"],Ot=["bottom","top"];switch(I){case"top":case"bottom":return qt?nt?mt:ft:nt?ft:mt;case"left":case"right":return nt?$t:Ot;default:return[]}}(V(x),F==="start",O);return $&&(E=E.map(I=>I+"-"+$),C&&(E=E.concat(E.map(it)))),E}(i,d,m,y));const b=[i,...w],L=await st(e,h),q=[];let A=((o=l.flip)==null?void 0:o.overflows)||[];if(a&&q.push(L[g]),p){const{main:x,cross:C}=Xt(n,r,y);q.push(L[x],L[C])}if(A=[...A,{placement:n,overflows:q}],!q.every(x=>x<=0)){var B,W;const x=(((B=l.flip)==null?void 0:B.index)||0)+1,C=b[x];if(C)return{data:{index:x,overflows:A},reset:{placement:C}};let F=(W=A.filter(O=>O.overflows[0]<=0).sort((O,$)=>O.overflows[1]-$.overflows[1])[0])==null?void 0:W.placement;if(!F)switch(f){case"bestFit":{var R;const O=(R=A.map($=>[$.placement,$.overflows.filter(E=>E>0).reduce((E,I)=>E+I,0)]).sort(($,E)=>$[1]-E[1])[0])==null?void 0:R[0];O&&(F=O);break}case"initialPlacement":F=i}if(n!==F)return{reset:{placement:F}}}return{}}}},Qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,l=await async function(r,i){const{placement:s,platform:c,elements:a}=r,p=await(c.isRTL==null?void 0:c.isRTL(a.floating)),u=V(s),f=X(s),m=tt(s)==="x",d=["left","top"].includes(u)?-1:1,h=p&&m?-1:1,g=typeof i=="function"?i(r):i;let{mainAxis:v,crossAxis:y,alignmentAxis:w}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return f&&typeof w=="number"&&(y=f==="end"?-1*w:w),m?{x:y*h,y:v*d}:{x:v*d,y:y*h}}(e,t);return{x:o+l.x,y:n+l.y,data:l}}}};function _(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function D(t){return _(t).getComputedStyle(t)}const vt=Math.min,z=Math.max,U=Math.round;function _t(t){const e=D(t);let o=parseFloat(e.width),n=parseFloat(e.height);const l=t.offsetWidth,r=t.offsetHeight,i=U(o)!==l||U(n)!==r;return i&&(o=l,n=r),{width:o,height:n,fallback:i}}function P(t){return Ct(t)?(t.nodeName||"").toLowerCase():""}let Z;function Et(){if(Z)return Z;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(Z=t.brands.map(e=>e.brand+"/"+e.version).join(" "),Z):navigator.userAgent}function T(t){return t instanceof _(t).HTMLElement}function S(t){return t instanceof _(t).Element}function Ct(t){return t instanceof _(t).Node}function gt(t){return typeof ShadowRoot>"u"?!1:t instanceof _(t).ShadowRoot||t instanceof ShadowRoot}function et(t){const{overflow:e,overflowX:o,overflowY:n,display:l}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(l)}function Gt(t){return["table","td","th"].includes(P(t))}function ct(t){const e=/firefox/i.test(Et()),o=D(t),n=o.backdropFilter||o.WebkitBackdropFilter;return o.transform!=="none"||o.perspective!=="none"||!!n&&n!=="none"||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"||["transform","perspective"].some(l=>o.willChange.includes(l))||["paint","layout","strict","content"].some(l=>{const r=o.contain;return r!=null&&r.includes(l)})}function at(){return/^((?!chrome|android).)*safari/i.test(Et())}function dt(t){return["html","body","#document"].includes(P(t))}function Tt(t){return S(t)?t:t.contextElement}const St={x:1,y:1};function H(t){const e=Tt(t);if(!T(e))return St;const o=e.getBoundingClientRect(),{width:n,height:l,fallback:r}=_t(e);let i=(r?U(o.width):o.width)/n,s=(r?U(o.height):o.height)/l;return i&&Number.isFinite(i)||(i=1),s&&Number.isFinite(s)||(s=1),{x:i,y:s}}function M(t,e,o,n){var l,r;e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),s=Tt(t);let c=St;e&&(n?S(n)&&(c=H(n)):c=H(t));const a=s?_(s):window,p=at()&&o;let u=(i.left+(p&&((l=a.visualViewport)==null?void 0:l.offsetLeft)||0))/c.x,f=(i.top+(p&&((r=a.visualViewport)==null?void 0:r.offsetTop)||0))/c.y,m=i.width/c.x,d=i.height/c.y;if(s){const h=_(s),g=n&&S(n)?_(n):n;let v=h.frameElement;for(;v&&n&&g!==h;){const y=H(v),w=v.getBoundingClientRect(),b=getComputedStyle(v);w.x+=(v.clientLeft+parseFloat(b.paddingLeft))*y.x,w.y+=(v.clientTop+parseFloat(b.paddingTop))*y.y,u*=y.x,f*=y.y,m*=y.x,d*=y.y,u+=w.x,f+=w.y,v=_(v).frameElement}}return G({width:m,height:d,x:u,y:f})}function k(t){return((Ct(t)?t.ownerDocument:t.document)||window.document).documentElement}function ot(t){return S(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Rt(t){return M(k(t)).left+ot(t).scrollLeft}function Y(t){if(P(t)==="html")return t;const e=t.assignedSlot||t.parentNode||gt(t)&&t.host||k(t);return gt(e)?e.host:e}function Dt(t){const e=Y(t);return dt(e)?e.ownerDocument.body:T(e)&&et(e)?e:Dt(e)}function j(t,e){var o;e===void 0&&(e=[]);const n=Dt(t),l=n===((o=t.ownerDocument)==null?void 0:o.body),r=_(n);return l?e.concat(r,r.visualViewport||[],et(n)?n:[]):e.concat(n,j(n))}function yt(t,e,o){let n;if(e==="viewport")n=function(i,s){const c=_(i),a=k(i),p=c.visualViewport;let u=a.clientWidth,f=a.clientHeight,m=0,d=0;if(p){u=p.width,f=p.height;const h=at();(!h||h&&s==="fixed")&&(m=p.offsetLeft,d=p.offsetTop)}return{width:u,height:f,x:m,y:d}}(t,o);else if(e==="document")n=function(i){const s=k(i),c=ot(i),a=i.ownerDocument.body,p=z(s.scrollWidth,s.clientWidth,a.scrollWidth,a.clientWidth),u=z(s.scrollHeight,s.clientHeight,a.scrollHeight,a.clientHeight);let f=-c.scrollLeft+Rt(i);const m=-c.scrollTop;return D(a).direction==="rtl"&&(f+=z(s.clientWidth,a.clientWidth)-p),{width:p,height:u,x:f,y:m}}(k(t));else if(S(e))n=function(i,s){const c=M(i,!0,s==="fixed"),a=c.top+i.clientTop,p=c.left+i.clientLeft,u=T(i)?H(i):{x:1,y:1};return{width:i.clientWidth*u.x,height:i.clientHeight*u.y,x:p*u.x,y:a*u.y}}(e,o);else{const i={...e};if(at()){var l,r;const s=_(t);i.x-=((l=s.visualViewport)==null?void 0:l.offsetLeft)||0,i.y-=((r=s.visualViewport)==null?void 0:r.offsetTop)||0}n=i}return G(n)}function wt(t,e){return T(t)&&D(t).position!=="fixed"?e?e(t):t.offsetParent:null}function bt(t,e){const o=_(t);if(!T(t))return o;let n=wt(t,e);for(;n&&Gt(n)&&D(n).position==="static";)n=wt(n,e);return n&&(P(n)==="html"||P(n)==="body"&&D(n).position==="static"&&!ct(n))?o:n||function(l){let r=Y(l);for(;T(r)&&!dt(r);){if(ct(r))return r;r=Y(r)}return null}(t)||o}function Jt(t,e,o){const n=T(e),l=k(e),r=M(t,!0,o==="fixed",e);let i={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(n||!n&&o!=="fixed")if((P(e)!=="body"||et(l))&&(i=ot(e)),T(e)){const c=M(e,!0);s.x=c.x+e.clientLeft,s.y=c.y+e.clientTop}else l&&(s.x=Rt(l));return{x:r.left+i.scrollLeft-s.x,y:r.top+i.scrollTop-s.y,width:r.width,height:r.height}}const Ut={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:n,strategy:l}=t;const r=o==="clippingAncestors"?function(a,p){const u=p.get(a);if(u)return u;let f=j(a).filter(g=>S(g)&&P(g)!=="body"),m=null;const d=D(a).position==="fixed";let h=d?Y(a):a;for(;S(h)&&!dt(h);){const g=D(h),v=ct(h);g.position==="fixed"?m=null:(d?v||m:v||g.position!=="static"||!m||!["absolute","fixed"].includes(m.position))?m=g:f=f.filter(y=>y!==h),h=Y(h)}return p.set(a,f),f}(e,this._c):[].concat(o),i=[...r,n],s=i[0],c=i.reduce((a,p)=>{const u=yt(e,p,l);return a.top=z(u.top,a.top),a.right=vt(u.right,a.right),a.bottom=vt(u.bottom,a.bottom),a.left=z(u.left,a.left),a},yt(e,s,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:n}=t;const l=T(o),r=k(o);if(o===r)return e;let i={scrollLeft:0,scrollTop:0},s={x:1,y:1};const c={x:0,y:0};if((l||!l&&n!=="fixed")&&((P(o)!=="body"||et(r))&&(i=ot(o)),T(o))){const a=M(o);s=H(o),c.x=a.x+o.clientLeft,c.y=a.y+o.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-i.scrollLeft*s.x+c.x,y:e.y*s.y-i.scrollTop*s.y+c.y}},isElement:S,getDimensions:function(t){return T(t)?_t(t):t.getBoundingClientRect()},getOffsetParent:bt,getDocumentElement:k,getScale:H,async getElementRects(t){let{reference:e,floating:o,strategy:n}=t;const l=this.getOffsetParent||bt,r=this.getDimensions;return{reference:Jt(e,await l(o),n),floating:{x:0,y:0,...await r(o)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>D(t).direction==="rtl"};function te(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:l=!0,ancestorResize:r=!0,elementResize:i=!0,animationFrame:s=!1}=n,c=l&&!s,a=c||r?[...S(t)?j(t):t.contextElement?j(t.contextElement):[],...j(e)]:[];a.forEach(m=>{c&&m.addEventListener("scroll",o,{passive:!0}),r&&m.addEventListener("resize",o)});let p,u=null;if(i){let m=!0;u=new ResizeObserver(()=>{m||o(),m=!1}),S(t)&&!s&&u.observe(t),S(t)||!t.contextElement||s||u.observe(t.contextElement),u.observe(e)}let f=s?M(t):null;return s&&function m(){const d=M(t);!f||d.x===f.x&&d.y===f.y&&d.width===f.width&&d.height===f.height||o(),f=d,p=requestAnimationFrame(m)}(),o(),()=>{var m;a.forEach(d=>{c&&d.removeEventListener("scroll",o),r&&d.removeEventListener("resize",o)}),(m=u)==null||m.disconnect(),u=null,s&&cancelAnimationFrame(p)}}const ee=(t,e,o)=>{const n=new Map,l={platform:Ut,...o},r={...l.platform,_c:n};return Ht(t,e,{...l,platform:r})},oe=`
<svg class="icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="7.5" r="7" stroke="#F88C28"/><path
  d="M6.7517 9.45316V9.40153C6.75737 8.85373 6.81406 8.41778 6.92177 8.09369C7.02948 7.7696 7.18254 7.50717 7.38095 7.30641C7.57936 7.10564 7.81746 6.92065 8.09524 6.75143C8.26247 6.64818 8.4127 6.52629 8.54592 6.38576C8.67914 6.24235 8.78401 6.07744 8.86054 5.89101C8.93991 5.70459 8.97959 5.49809 8.97959 5.27151C8.97959 4.99044 8.9144 4.74665 8.78401 4.54015C8.65363 4.33365 8.47931 4.17447 8.26105 4.06262C8.0428 3.95076 7.80045 3.89484 7.53401 3.89484C7.30159 3.89484 7.07766 3.94359 6.86224 4.04111C6.64683 4.13862 6.46684 4.29207 6.32228 4.50143C6.17772 4.7108 6.0941 4.9847 6.07143 5.32314H5C5.02268 4.83556 5.14739 4.41826 5.37415 4.07122C5.60374 3.72419 5.90561 3.45889 6.27976 3.27533C6.65675 3.09178 7.07483 3 7.53401 3C8.03288 3 8.46655 3.10038 8.83503 3.30115C9.20635 3.50191 9.49263 3.77725 9.69388 4.12715C9.89796 4.47706 10 4.87572 10 5.32314C10 5.63862 9.95181 5.924 9.85544 6.17925C9.7619 6.43451 9.62585 6.66252 9.44728 6.86329C9.27154 7.06405 9.05896 7.24187 8.80952 7.39675C8.56009 7.55449 8.36026 7.72084 8.21003 7.89579C8.05981 8.06788 7.95068 8.27294 7.88265 8.51099C7.81463 8.74904 7.77778 9.04589 7.77211 9.40153V9.45316H6.7517ZM7.29592 12C7.08617 12 6.90618 11.924 6.75595 11.772C6.60573 11.62 6.53061 11.4379 6.53061 11.2256C6.53061 11.0134 6.60573 10.8313 6.75595 10.6793C6.90618 10.5272 7.08617 10.4512 7.29592 10.4512C7.50567 10.4512 7.68566 10.5272 7.83588 10.6793C7.98611 10.8313 8.06122 11.0134 8.06122 11.2256C8.06122 11.3662 8.02579 11.4952 7.95493 11.6128C7.8869 11.7304 7.79478 11.825 7.67857 11.8967C7.56519 11.9656 7.43764 12 7.29592 12Z"
  fill="#F88C28"
/></svg>`;document.addEventListener("DOMContentLoaded",()=>{const t=r=>{const i=document.createElement("div");return i.classList.add("tooltip__inner"),i.role="tooltip",i.innerHTML=`
    <div class="tooltip__content">${r}</div>
    <div class="tooltip__arrow"></div>
    `,i},e=r=>{const i=document.createElement("div");return i.classList.add("icon","tooltip__activator"),r.appendChild(i),i.innerHTML=oe,i},o=document.querySelectorAll(".tooltip"),n=r=>{var i,s,c;(c=(s=(i=r.target)==null?void 0:i.parentNode)==null?void 0:s.querySelector(".tooltip__inner"))==null||c.classList.remove("tooltip__inner_visible")},l=lt();o.forEach(r=>{let i=r==null?void 0:r.querySelector(".tooltip__activator");i||(i=e(r));const s=t(r.getAttribute("data-tooltip"));r.appendChild(s),requestAnimationFrame(()=>{const c=s.querySelector(".tooltip__arrow");let a=null;const p={name:"middleware",async fn(d){if(!["smartphone","mobile","laptop","tablet"].includes(l))return{middlewareArguments:d};if(l!=="mobile"){const{right:h,left:g}=await st(d);let v=d.x;return h>0&&(v=v-h,d.middlewareData.arrow.x=d.middlewareData.arrow.x+h),g>0&&(v=v+g,d.middlewareData.arrow.x=d.middlewareData.arrow.x-g),{...d,x:v,y:d.y}}else return a=await st(d),d.middlewareData.arrow.x=d.middlewareData.arrow.x-a.left-15,{...d,x:d.x+a.left+15,y:d.y}}},u=async()=>{const{x:d,y:h,middlewareData:g,placement:v}=await ee(i,s,{placement:"top",animation:!1,middleware:[Qt(10),Kt(),zt({element:c}),p]});Object.assign(s.style,{left:`${d}px`,top:`${h}px`});const y=g.arrow;if(y){let{x:w,y:b}=y;v==="bottom"&&(b=-s.offsetHeight+5),Object.assign(c.style,{left:w!=null?`${w}px`:"",top:b!=null?`${b}px`:""})}};let f=r.getAttribute(`data-tooltip-width-${l}`)??"max(calc(100vw - 30px)";s.style.maxWidth=f,s.style.width=f,u(),te(i,s,u);let m=!1;i.addEventListener("mouseenter",async()=>{m=!0,s.classList.add("tooltip__inner_visible"),await u()}),i.addEventListener("mouseleave",d=>{m=!1,setTimeout(()=>{m||n(d)})}),i.addEventListener("click",()=>{event.currentTarget})}),r.addEventListener("click",c=>{c.stopPropagation(),c.preventDefault()})})});const ne={Москва:"8 (495) 286–01–11",Сочи:"8 (862) 225-75-32","Санкт-Петербург":"8 (812) 409-05-00"},ie=(t,e)=>{new MutationObserver(function(n){n.forEach(function(l){l.attributeName==="data-value"&&e(t)})}).observe(t,{attributes:!0,childList:!1,characterData:!1})},re=document.querySelectorAll(".city");re.forEach(t=>{ie(t,e=>{const{value:o}=e.dataset;document.querySelectorAll(".phone-number a").forEach(n=>{n.textContent=ne[o]})})});const le=t=>{const e=t.offsetTop,o=window.pageYOffset,n=e-o;let l=null;const r=s=>{l===null&&(l=s);const c=s-l,a=i(c,o,n,600);window.scrollTo(0,a),c<600&&requestAnimationFrame(r)},i=(s,c,a,p)=>(s/=p/2,s<1?a/2*s*s+c:(s--,-a/2*(s*(s-2)-1)+c));requestAnimationFrame(r)},xt=t=>{const e=document.querySelector(t.getAttribute("href"));e&&("scrollBehavior"in document.documentElement.style?e.scrollIntoView({behavior:"smooth"}):le(e))};document.querySelectorAll(".menu-link").forEach(t=>{t.addEventListener("click",o=>o.preventDefault());const e=document.querySelector(".header_start-button_mobile");t.parentNode.addEventListener("click",o=>{if(o.preventDefault(),Q()){const n=document.querySelector(".header__burger"),l=document.querySelector(".header_active");if(l){l.classList.remove("header_active"),n.classList.remove("header__burger_hidden"),e.classList.remove("active"),rt(!1),setTimeout(()=>{xt(t)},200);return}}xt(t)})});export{N as a,rt as b,At as c,se as d,ae as e,ce as f,de as g,ue as h,Q as i,le as s,K as t};
