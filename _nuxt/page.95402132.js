import{u as Tt}from"./nuxt-link.a31d843b.js";import{t as G,B as xt,x as qe,y as nn,z as Lt,A as Se,C as Ce,D as rn,E as sn,G as on,H as cn,I as an,J as kt,K as un,L as ln,M as fn,N as Nt,O as pn,P as dn,b as ge,Q as It,r as Ge,R as be,i as ne,a as Mt,e as _e,T as $t,U as hn,g as mn,V as gn,W as vn,n as Ue,X as yn,c as D,s as En,Y as ye,u as fe,p as Ee,Z as Sn,S as bn}from"./runtime-core.esm-bundler.c9b12900.js";import{d as Rn}from"./app.config.5ff5ca90.js";const Cn="http://www.w3.org/2000/svg",te=typeof document<"u"?document:null,Je=te&&te.createElement("template"),_n={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?te.createElementNS(Cn,e):te.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>te.createTextNode(e),createComment:e=>te.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>te.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const a=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Je.innerHTML=r?`<svg>${e}</svg>`:e;const d=Je.content;if(r){const c=d.firstChild;for(;c.firstChild;)d.appendChild(c.firstChild);d.removeChild(c)}t.insertBefore(d,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wn(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Pn(e,t,n){const r=e.style,s=Se(n);if(n&&!s){for(const o in n)je(r,o,n[o]);if(t&&!Se(t))for(const o in t)n[o]==null&&je(r,o,"")}else{const o=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const et=/\s*!important$/;function je(e,t,n){if(Ce(n))n.forEach(r=>je(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=An(e,t);et.test(n)?e.setProperty(kt(r),n.replace(et,""),"important"):e[r]=n}}const tt=["Webkit","Moz","ms"],ke={};function An(e,t){const n=ke[t];if(n)return n;let r=un(t);if(r!=="filter"&&r in e)return ke[t]=r;r=ln(r);for(let s=0;s<tt.length;s++){const o=tt[s]+r;if(o in e)return ke[t]=o}return t}const nt="http://www.w3.org/1999/xlink";function On(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(nt,t.slice(6,t.length)):e.setAttributeNS(nt,t,n);else{const o=fn(t);n==null||o&&!Nt(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Tn(e,t,n,r,s,o,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,s,o),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let d=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Nt(n):n==null&&c==="string"?(n="",d=!0):c==="number"&&(n=0,d=!0)}try{e[t]=n}catch{}d&&e.removeAttribute(t)}function xn(e,t,n,r){e.addEventListener(t,n,r)}function Ln(e,t,n,r){e.removeEventListener(t,n,r)}function kn(e,t,n,r,s=null){const o=e._vei||(e._vei={}),a=o[t];if(r&&a)a.value=r;else{const[d,c]=Nn(t);if(r){const f=o[t]=$n(r,s);xn(e,d,f,c)}else a&&(Ln(e,d,a,c),o[t]=void 0)}}const rt=/(?:Once|Passive|Capture)$/;function Nn(e){let t;if(rt.test(e)){t={};let r;for(;r=e.match(rt);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):kt(e.slice(2)),t]}let Ne=0;const In=Promise.resolve(),Mn=()=>Ne||(In.then(()=>Ne=0),Ne=Date.now());function $n(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pn(Hn(r,n.value),t,5,[r])};return n.value=e,n.attached=Mn(),n}function Hn(e,t){if(Ce(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const st=/^on[a-z]/,jn=(e,t,n,r,s=!1,o,a,d,c)=>{t==="class"?wn(e,r,s):t==="style"?Pn(e,n,r):cn(t)?an(t)||kn(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bn(e,t,r,s))?Tn(e,t,r,o,a,d,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),On(e,t,r,s))};function Bn(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&st.test(t)&&Lt(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||st.test(t)&&Se(n)?!1:t in e}const W="transition",ue="animation",We=(e,{slots:t})=>G(xt,Kn(e),t);We.displayName="Transition";const Ht={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};We.props=qe({},xt.props,Ht);const J=(e,t=[])=>{Ce(e)?e.forEach(n=>n(...t)):e&&e(...t)},ot=e=>e?Ce(e)?e.some(t=>t.length>1):e.length>1:!1;function Kn(e){const t={};for(const v in e)v in Ht||(t[v]=e[v]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:d=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:f=a,appearToClass:i=d,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,E=Dn(s),T=E&&E[0],P=E&&E[1],{onBeforeEnter:S,onEnter:R,onEnterCancelled:L,onLeave:j,onLeaveCancelled:x,onBeforeAppear:M=S,onAppear:_=R,onAppearCancelled:A=L}=t,B=(v,$,H)=>{ee(v,$?i:d),ee(v,$?f:a),H&&H()},z=(v,$)=>{v._isLeaving=!1,ee(v,u),ee(v,h),ee(v,p),$&&$()},F=v=>($,H)=>{const I=v?_:R,Z=()=>B($,v,H);J(I,[$,Z]),it(()=>{ee($,v?c:o),V($,v?i:d),ot(I)||ct($,r,T,Z)})};return qe(t,{onBeforeEnter(v){J(S,[v]),V(v,o),V(v,a)},onBeforeAppear(v){J(M,[v]),V(v,c),V(v,f)},onEnter:F(!1),onAppear:F(!0),onLeave(v,$){v._isLeaving=!0;const H=()=>z(v,$);V(v,u),qn(),V(v,p),it(()=>{v._isLeaving&&(ee(v,u),V(v,h),ot(j)||ct(v,r,P,H))}),J(j,[v,H])},onEnterCancelled(v){B(v,!1),J(L,[v])},onAppearCancelled(v){B(v,!0),J(A,[v])},onLeaveCancelled(v){z(v),J(x,[v])}})}function Dn(e){if(e==null)return null;if(nn(e))return[Ie(e.enter),Ie(e.leave)];{const t=Ie(e);return[t,t]}}function Ie(e){return rn(e)}function V(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function ee(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function it(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let zn=0;function ct(e,t,n,r){const s=e._endId=++zn,o=()=>{s===e._endId&&r()};if(n)return setTimeout(o,n);const{type:a,timeout:d,propCount:c}=Fn(e,t);if(!a)return r();const f=a+"end";let i=0;const u=()=>{e.removeEventListener(f,p),o()},p=h=>{h.target===e&&++i>=c&&u()};setTimeout(()=>{i<c&&u()},d+1),e.addEventListener(f,p)}function Fn(e,t){const n=window.getComputedStyle(e),r=E=>(n[E]||"").split(", "),s=r(`${W}Delay`),o=r(`${W}Duration`),a=at(s,o),d=r(`${ue}Delay`),c=r(`${ue}Duration`),f=at(d,c);let i=null,u=0,p=0;t===W?a>0&&(i=W,u=a,p=o.length):t===ue?f>0&&(i=ue,u=f,p=c.length):(u=Math.max(a,f),i=u>0?a>f?W:ue:null,p=i?i===W?o.length:c.length:0);const h=i===W&&/\b(transform|all)(,|$)/.test(r(`${W}Property`).toString());return{type:i,timeout:u,propCount:p,hasTransform:h}}function at(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ut(n)+ut(e[r])))}function ut(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function qn(){return document.body.offsetHeight}const Gn=["ctrl","shift","alt","meta"],Un={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Gn.some(n=>e[`${n}Key`]&&!t.includes(n))},hs=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const o=Un[t[s]];if(o&&o(n,t))return}return e(n,...r)},jt=qe({patchProp:jn},_n);let pe,lt=!1;function Wn(){return pe||(pe=sn(jt))}function Vn(){return pe=lt?pe:on(jt),lt=!0,pe}const ms=(...e)=>{const t=Wn().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Bt(r);if(!s)return;const o=t._component;!Lt(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t},gs=(...e)=>{const t=Vn().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Bt(r);if(s)return n(s,!0,s instanceof SVGElement)},t};function Bt(e){return Se(e)?document.querySelector(e):e}function vs(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,r]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s="$s"+n,o=Tt(),a=dn(o.payload.state,s);if(a.value===void 0&&r){const d=r();if(ge(d))return o.payload.state[s]=d,d;a.value=d}return a}const Qn=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Kt;const we=e=>Kt=e,Dt=Symbol();function Be(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var de;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(de||(de={}));function ys(){const e=It(!0),t=e.run(()=>Ge({}));let n=[],r=[];const s=be({install(o){we(s),s._a=o,o.provide(Dt,s),o.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(o){return!this._a&&!Qn?r.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const zt=()=>{};function ft(e,t,n,r=zt){e.push(t);const s=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),r())};return!n&&gn()&&vn(s),s}function re(e,...t){e.slice().forEach(n=>{n(...t)})}function Ke(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];Be(s)&&Be(r)&&e.hasOwnProperty(n)&&!ge(r)&&!$t(r)?e[n]=Ke(s,r):e[n]=r}return e}const Xn=Symbol();function Yn(e){return!Be(e)||!e.hasOwnProperty(Xn)}const{assign:X}=Object;function Zn(e){return!!(ge(e)&&e.effect)}function Jn(e,t,n,r){const{state:s,actions:o,getters:a}=t,d=n.state.value[e];let c;function f(){d||(n.state.value[e]=s?s():{});const i=yn(n.state.value[e]);return X(i,o,Object.keys(a||{}).reduce((u,p)=>(u[p]=be(D(()=>{we(n);const h=n._s.get(e);return a[p].call(h,h)})),u),{}))}return c=Ft(e,f,t,n,r,!0),c.$reset=function(){const u=s?s():{};this.$patch(p=>{X(p,u)})},c}function Ft(e,t,n={},r,s,o){let a;const d=X({actions:{}},n),c={deep:!0};let f,i,u=be([]),p=be([]),h;const E=r.state.value[e];!o&&!E&&(r.state.value[e]={}),Ge({});let T;function P(_){let A;f=i=!1,typeof _=="function"?(_(r.state.value[e]),A={type:de.patchFunction,storeId:e,events:h}):(Ke(r.state.value[e],_),A={type:de.patchObject,payload:_,storeId:e,events:h});const B=T=Symbol();Ue().then(()=>{T===B&&(f=!0)}),i=!0,re(u,A,r.state.value[e])}const S=zt;function R(){a.stop(),u=[],p=[],r._s.delete(e)}function L(_,A){return function(){we(r);const B=Array.from(arguments),z=[],F=[];function v(I){z.push(I)}function $(I){F.push(I)}re(p,{args:B,name:_,store:x,after:v,onError:$});let H;try{H=A.apply(this&&this.$id===e?this:x,B)}catch(I){throw re(F,I),I}return H instanceof Promise?H.then(I=>(re(z,I),I)).catch(I=>(re(F,I),Promise.reject(I))):(re(z,H),H)}}const j={_p:r,$id:e,$onAction:ft.bind(null,p),$patch:P,$reset:S,$subscribe(_,A={}){const B=ft(u,_,A.detached,()=>z()),z=a.run(()=>Mt(()=>r.state.value[e],F=>{(A.flush==="sync"?i:f)&&_({storeId:e,type:de.direct,events:h},F)},X({},c,A)));return B},$dispose:R},x=_e(j);r._s.set(e,x);const M=r._e.run(()=>(a=It(),a.run(()=>t())));for(const _ in M){const A=M[_];if(ge(A)&&!Zn(A)||$t(A))o||(E&&Yn(A)&&(ge(A)?A.value=E[_]:Ke(A,E[_])),r.state.value[e][_]=A);else if(typeof A=="function"){const B=L(_,A);M[_]=B,d.actions[_]=A}}return X(x,M),X(hn(x),M),Object.defineProperty(x,"$state",{get:()=>r.state.value[e],set:_=>{P(A=>{X(A,_)})}}),r._p.forEach(_=>{X(x,a.run(()=>_({store:x,app:r._a,pinia:r,options:d})))}),E&&o&&n.hydrate&&n.hydrate(x.$state,E),f=!0,i=!0,x}function Es(e,t,n){let r,s;const o=typeof t=="function";typeof e=="string"?(r=e,s=o?n:t):(s=e,r=e.id);function a(d,c){const f=mn();return d=d||f&&ne(Dt,null),d&&we(d),d=Kt,d._s.has(r)||(o?Ft(r,t,s,d):Jn(r,s,d)),d._s.get(r)}return a.$id=r,a}const Ss={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},bs=!1,pt=!1,er=!1,Rs="__nuxt";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const oe=typeof window<"u";function tr(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const w=Object.assign;function Me(e,t){const n={};for(const r in t){const s=t[r];n[r]=q(s)?s.map(e):e(s)}return n}const he=()=>{},q=Array.isArray,nr=/\/$/,rr=e=>e.replace(nr,"");function $e(e,t,n="/"){let r,s={},o="",a="";const d=t.indexOf("#");let c=t.indexOf("?");return d<c&&d>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,d>-1?d:t.length),s=e(o)),d>-1&&(r=r||t.slice(0,d),a=t.slice(d,t.length)),r=cr(r??t,n),{fullPath:r+(o&&"?")+o+a,path:r,query:s,hash:a}}function sr(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function dt(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function or(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ie(t.matched[r],n.matched[s])&&qt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ie(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ir(e[n],t[n]))return!1;return!0}function ir(e,t){return q(e)?ht(e,t):q(t)?ht(t,e):e===t}function ht(e,t){return q(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function cr(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ve;(function(e){e.pop="pop",e.push="push"})(ve||(ve={}));var me;(function(e){e.back="back",e.forward="forward",e.unknown=""})(me||(me={}));function ar(e){if(!e)if(oe){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),rr(e)}const ur=/^[^#]+#/;function lr(e,t){return e.replace(ur,"#")+t}function fr(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Pe=()=>({left:window.pageXOffset,top:window.pageYOffset});function pr(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=fr(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function mt(e,t){return(history.state?history.state.position-t:-1)+e}const De=new Map;function dr(e,t){De.set(e,t)}function hr(e){const t=De.get(e);return De.delete(e),t}let mr=()=>location.protocol+"//"+location.host;function Gt(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let d=s.includes(e.slice(o))?e.slice(o).length:1,c=s.slice(d);return c[0]!=="/"&&(c="/"+c),dt(c,"")}return dt(n,e)+r+s}function gr(e,t,n,r){let s=[],o=[],a=null;const d=({state:p})=>{const h=Gt(e,location),E=n.value,T=t.value;let P=0;if(p){if(n.value=h,t.value=p,a&&a===E){a=null;return}P=T?p.position-T.position:0}else r(h);s.forEach(S=>{S(n.value,E,{delta:P,type:ve.pop,direction:P?P>0?me.forward:me.back:me.unknown})})};function c(){a=n.value}function f(p){s.push(p);const h=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return o.push(h),h}function i(){const{history:p}=window;p.state&&p.replaceState(w({},p.state,{scroll:Pe()}),"")}function u(){for(const p of o)p();o=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",i)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",i),{pauseListeners:c,listen:f,destroy:u}}function gt(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Pe():null}}function vr(e){const{history:t,location:n}=window,r={value:Gt(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,f,i){const u=e.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+c:mr()+e+c;try{t[i?"replaceState":"pushState"](f,"",p),s.value=f}catch(h){console.error(h),n[i?"replace":"assign"](p)}}function a(c,f){const i=w({},t.state,gt(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});o(c,i,!0),r.value=c}function d(c,f){const i=w({},s.value,t.state,{forward:c,scroll:Pe()});o(i.current,i,!0);const u=w({},gt(r.value,c,null),{position:i.position+1},f);o(c,u,!1),r.value=c}return{location:r,state:s,push:d,replace:a}}function yr(e){e=ar(e);const t=vr(e),n=gr(e,t.state,t.location,t.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=w({location:"",base:e,go:r,createHref:lr.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Cs(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),yr(e)}function Er(e){return typeof e=="string"||e&&typeof e=="object"}function Ut(e){return typeof e=="string"||typeof e=="symbol"}const Q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wt=Symbol("");var vt;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(vt||(vt={}));function ce(e,t){return w(new Error,{type:e,[Wt]:!0},t)}function U(e,t){return e instanceof Error&&Wt in e&&(t==null||!!(e.type&t))}const yt="[^/]+?",Sr={sensitive:!1,strict:!1,start:!0,end:!0},br=/[.+*?^${}()[\]/\\]/g;function Rr(e,t){const n=w({},Sr,t),r=[];let s=n.start?"^":"";const o=[];for(const f of e){const i=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let u=0;u<f.length;u++){const p=f[u];let h=40+(n.sensitive?.25:0);if(p.type===0)u||(s+="/"),s+=p.value.replace(br,"\\$&"),h+=40;else if(p.type===1){const{value:E,repeatable:T,optional:P,regexp:S}=p;o.push({name:E,repeatable:T,optional:P});const R=S||yt;if(R!==yt){h+=10;try{new RegExp(`(${R})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${E}" (${R}): `+j.message)}}let L=T?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;u||(L=P&&f.length<2?`(?:/${L})`:"/"+L),P&&(L+="?"),s+=L,h+=20,P&&(h+=-8),T&&(h+=-20),R===".*"&&(h+=-50)}i.push(h)}r.push(i)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function d(f){const i=f.match(a),u={};if(!i)return null;for(let p=1;p<i.length;p++){const h=i[p]||"",E=o[p-1];u[E.name]=h&&E.repeatable?h.split("/"):h}return u}function c(f){let i="",u=!1;for(const p of e){(!u||!i.endsWith("/"))&&(i+="/"),u=!1;for(const h of p)if(h.type===0)i+=h.value;else if(h.type===1){const{value:E,repeatable:T,optional:P}=h,S=E in f?f[E]:"";if(q(S)&&!T)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const R=q(S)?S.join("/"):S;if(!R)if(P)p.length<2&&(i.endsWith("/")?i=i.slice(0,-1):u=!0);else throw new Error(`Missing required param "${E}"`);i+=R}}return i||"/"}return{re:a,score:r,keys:o,parse:d,stringify:c}}function Cr(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _r(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=Cr(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Et(r))return 1;if(Et(s))return-1}return s.length-r.length}function Et(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const wr={type:0,value:""},Pr=/[a-zA-Z0-9_]/;function Ar(e){if(!e)return[[]];if(e==="/")return[[wr]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${f}": ${h}`)}let n=0,r=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let d=0,c,f="",i="";function u(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:i,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=c}for(;d<e.length;){if(c=e[d++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&u(),a()):c===":"?(u(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Pr.test(c)?p():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&d--);break;case 2:c===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+c:n=3:i+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&d--,i="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),u(),a(),s}function Or(e,t,n){const r=Rr(Ar(e.path),n),s=w(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Tr(e,t){const n=[],r=new Map;t=Rt({strict:!1,end:!0,sensitive:!1},t);function s(i){return r.get(i)}function o(i,u,p){const h=!p,E=xr(i);E.aliasOf=p&&p.record;const T=Rt(t,i),P=[E];if("alias"in i){const L=typeof i.alias=="string"?[i.alias]:i.alias;for(const j of L)P.push(w({},E,{components:p?p.record.components:E.components,path:j,aliasOf:p?p.record:E}))}let S,R;for(const L of P){const{path:j}=L;if(u&&j[0]!=="/"){const x=u.record.path,M=x[x.length-1]==="/"?"":"/";L.path=u.record.path+(j&&M+j)}if(S=Or(L,u,T),p?p.alias.push(S):(R=R||S,R!==S&&R.alias.push(S),h&&i.name&&!bt(S)&&a(i.name)),E.children){const x=E.children;for(let M=0;M<x.length;M++)o(x[M],S,p&&p.children[M])}p=p||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return R?()=>{a(R)}:he}function a(i){if(Ut(i)){const u=r.get(i);u&&(r.delete(i),n.splice(n.indexOf(u),1),u.children.forEach(a),u.alias.forEach(a))}else{const u=n.indexOf(i);u>-1&&(n.splice(u,1),i.record.name&&r.delete(i.record.name),i.children.forEach(a),i.alias.forEach(a))}}function d(){return n}function c(i){let u=0;for(;u<n.length&&_r(i,n[u])>=0&&(i.record.path!==n[u].record.path||!Vt(i,n[u]));)u++;n.splice(u,0,i),i.record.name&&!bt(i)&&r.set(i.record.name,i)}function f(i,u){let p,h={},E,T;if("name"in i&&i.name){if(p=r.get(i.name),!p)throw ce(1,{location:i});T=p.record.name,h=w(St(u.params,p.keys.filter(R=>!R.optional).map(R=>R.name)),i.params&&St(i.params,p.keys.map(R=>R.name))),E=p.stringify(h)}else if("path"in i)E=i.path,p=n.find(R=>R.re.test(E)),p&&(h=p.parse(E),T=p.record.name);else{if(p=u.name?r.get(u.name):n.find(R=>R.re.test(u.path)),!p)throw ce(1,{location:i,currentLocation:u});T=p.record.name,h=w({},u.params,i.params),E=p.stringify(h)}const P=[];let S=p;for(;S;)P.unshift(S.record),S=S.parent;return{name:T,path:E,params:h,matched:P,meta:kr(P)}}return e.forEach(i=>o(i)),{addRoute:o,resolve:f,removeRoute:a,getRoutes:d,getRecordMatcher:s}}function St(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function xr(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Lr(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Lr(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function bt(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function kr(e){return e.reduce((t,n)=>w(t,n.meta),{})}function Rt(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Vt(e,t){return t.children.some(n=>n===e||Vt(e,n))}const Qt=/#/g,Nr=/&/g,Ir=/\//g,Mr=/=/g,$r=/\?/g,Xt=/\+/g,Hr=/%5B/g,jr=/%5D/g,Yt=/%5E/g,Br=/%60/g,Zt=/%7B/g,Kr=/%7C/g,Jt=/%7D/g,Dr=/%20/g;function Ve(e){return encodeURI(""+e).replace(Kr,"|").replace(Hr,"[").replace(jr,"]")}function zr(e){return Ve(e).replace(Zt,"{").replace(Jt,"}").replace(Yt,"^")}function ze(e){return Ve(e).replace(Xt,"%2B").replace(Dr,"+").replace(Qt,"%23").replace(Nr,"%26").replace(Br,"`").replace(Zt,"{").replace(Jt,"}").replace(Yt,"^")}function Fr(e){return ze(e).replace(Mr,"%3D")}function qr(e){return Ve(e).replace(Qt,"%23").replace($r,"%3F")}function Gr(e){return e==null?"":qr(e).replace(Ir,"%2F")}function Re(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ur(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Xt," "),a=o.indexOf("="),d=Re(a<0?o:o.slice(0,a)),c=a<0?null:Re(o.slice(a+1));if(d in t){let f=t[d];q(f)||(f=t[d]=[f]),f.push(c)}else t[d]=c}return t}function Ct(e){let t="";for(let n in e){const r=e[n];if(n=Fr(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(q(r)?r.map(o=>o&&ze(o)):[r&&ze(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Wr(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=q(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Vr=Symbol(""),_t=Symbol(""),Qe=Symbol(""),Xe=Symbol(""),Fe=Symbol("");function le(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Y(e,t,n,r,s){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,d)=>{const c=u=>{u===!1?d(ce(4,{from:n,to:t})):u instanceof Error?d(u):Er(u)?d(ce(2,{from:t,to:u})):(o&&r.enterCallbacks[s]===o&&typeof u=="function"&&o.push(u),a())},f=e.call(r&&r.instances[s],t,n,c);let i=Promise.resolve(f);e.length<3&&(i=i.then(c)),i.catch(u=>d(u))})}function He(e,t,n,r){const s=[];for(const o of e)for(const a in o.components){let d=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Qr(d)){const f=(d.__vccOpts||d)[t];f&&s.push(Y(f,n,r,o,a))}else{let c=d();s.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const i=tr(f)?f.default:f;o.components[a]=i;const p=(i.__vccOpts||i)[t];return p&&Y(p,n,r,o,a)()}))}}return s}function Qr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wt(e){const t=ne(Qe),n=ne(Xe),r=D(()=>t.resolve(fe(e.to))),s=D(()=>{const{matched:c}=r.value,{length:f}=c,i=c[f-1],u=n.matched;if(!i||!u.length)return-1;const p=u.findIndex(ie.bind(null,i));if(p>-1)return p;const h=Pt(c[f-2]);return f>1&&Pt(i)===h&&u[u.length-1].path!==h?u.findIndex(ie.bind(null,c[f-2])):p}),o=D(()=>s.value>-1&&Jr(n.params,r.value.params)),a=D(()=>s.value>-1&&s.value===n.matched.length-1&&qt(n.params,r.value.params));function d(c={}){return Zr(c)?t[fe(e.replace)?"replace":"push"](fe(e.to)).catch(he):Promise.resolve()}return{route:r,href:D(()=>r.value.href),isActive:o,isExactActive:a,navigate:d}}const Xr=ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wt,setup(e,{slots:t}){const n=_e(wt(e)),{options:r}=ne(Qe),s=D(()=>({[At(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[At(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:G("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Yr=Xr;function Zr(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Jr(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!q(s)||s.length!==r.length||r.some((o,a)=>o!==s[a]))return!1}return!0}function Pt(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const At=(e,t,n)=>e??t??n,es=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ne(Fe),s=D(()=>e.route||r.value),o=ne(_t,0),a=D(()=>{let f=fe(o);const{matched:i}=s.value;let u;for(;(u=i[f])&&!u.components;)f++;return f}),d=D(()=>s.value.matched[a.value]);Ee(_t,D(()=>a.value+1)),Ee(Vr,d),Ee(Fe,s);const c=Ge();return Mt(()=>[c.value,d.value,e.name],([f,i,u],[p,h,E])=>{i&&(i.instances[u]=f,h&&h!==i&&f&&f===p&&(i.leaveGuards.size||(i.leaveGuards=h.leaveGuards),i.updateGuards.size||(i.updateGuards=h.updateGuards))),f&&i&&(!h||!ie(i,h)||!p)&&(i.enterCallbacks[u]||[]).forEach(T=>T(f))},{flush:"post"}),()=>{const f=s.value,i=e.name,u=d.value,p=u&&u.components[i];if(!p)return Ot(n.default,{Component:p,route:f});const h=u.props[i],E=h?h===!0?f.params:typeof h=="function"?h(f):h:null,P=G(p,w({},E,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(u.instances[i]=null)},ref:c}));return Ot(n.default,{Component:P,route:f})||P}}});function Ot(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const en=es;function _s(e){const t=Tr(e.routes,e),n=e.parseQuery||Ur,r=e.stringifyQuery||Ct,s=e.history,o=le(),a=le(),d=le(),c=En(Q);let f=Q;oe&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=Me.bind(null,l=>""+l),u=Me.bind(null,Gr),p=Me.bind(null,Re);function h(l,g){let m,y;return Ut(l)?(m=t.getRecordMatcher(l),y=g):y=l,t.addRoute(y,m)}function E(l){const g=t.getRecordMatcher(l);g&&t.removeRoute(g)}function T(){return t.getRoutes().map(l=>l.record)}function P(l){return!!t.getRecordMatcher(l)}function S(l,g){if(g=w({},g||c.value),typeof l=="string"){const b=$e(n,l,g.path),N=t.resolve({path:b.path},g),ae=s.createHref(b.fullPath);return w(b,N,{params:p(N.params),hash:Re(b.hash),redirectedFrom:void 0,href:ae})}let m;if("path"in l)m=w({},l,{path:$e(n,l.path,g.path).path});else{const b=w({},l.params);for(const N in b)b[N]==null&&delete b[N];m=w({},l,{params:u(l.params)}),g.params=u(g.params)}const y=t.resolve(m,g),O=l.hash||"";y.params=i(p(y.params));const k=sr(r,w({},l,{hash:zr(O),path:y.path})),C=s.createHref(k);return w({fullPath:k,hash:O,query:r===Ct?Wr(l.query):l.query||{}},y,{redirectedFrom:void 0,href:C})}function R(l){return typeof l=="string"?$e(n,l,c.value.path):w({},l)}function L(l,g){if(f!==l)return ce(8,{from:g,to:l})}function j(l){return _(l)}function x(l){return j(w(R(l),{replace:!0}))}function M(l){const g=l.matched[l.matched.length-1];if(g&&g.redirect){const{redirect:m}=g;let y=typeof m=="function"?m(l):m;return typeof y=="string"&&(y=y.includes("?")||y.includes("#")?y=R(y):{path:y},y.params={}),w({query:l.query,hash:l.hash,params:"path"in y?{}:l.params},y)}}function _(l,g){const m=f=S(l),y=c.value,O=l.state,k=l.force,C=l.replace===!0,b=M(m);if(b)return _(w(R(b),{state:typeof b=="object"?w({},O,b.state):O,force:k,replace:C}),g||m);const N=m;N.redirectedFrom=g;let ae;return!k&&or(r,y,m)&&(ae=ce(16,{to:N,from:y}),Ye(y,y,!0,!1)),(ae?Promise.resolve(ae):B(N,y)).catch(K=>U(K)?U(K,2)?K:Oe(K):Ae(K,N,y)).then(K=>{if(K){if(U(K,2))return _(w({replace:C},R(K.to),{state:typeof K.to=="object"?w({},O,K.to.state):O,force:k}),g||N)}else K=F(N,y,!0,C,O);return z(N,y,K),K})}function A(l,g){const m=L(l,g);return m?Promise.reject(m):Promise.resolve()}function B(l,g){let m;const[y,O,k]=ts(l,g);m=He(y.reverse(),"beforeRouteLeave",l,g);for(const b of y)b.leaveGuards.forEach(N=>{m.push(Y(N,l,g))});const C=A.bind(null,l,g);return m.push(C),se(m).then(()=>{m=[];for(const b of o.list())m.push(Y(b,l,g));return m.push(C),se(m)}).then(()=>{m=He(O,"beforeRouteUpdate",l,g);for(const b of O)b.updateGuards.forEach(N=>{m.push(Y(N,l,g))});return m.push(C),se(m)}).then(()=>{m=[];for(const b of l.matched)if(b.beforeEnter&&!g.matched.includes(b))if(q(b.beforeEnter))for(const N of b.beforeEnter)m.push(Y(N,l,g));else m.push(Y(b.beforeEnter,l,g));return m.push(C),se(m)}).then(()=>(l.matched.forEach(b=>b.enterCallbacks={}),m=He(k,"beforeRouteEnter",l,g),m.push(C),se(m))).then(()=>{m=[];for(const b of a.list())m.push(Y(b,l,g));return m.push(C),se(m)}).catch(b=>U(b,8)?b:Promise.reject(b))}function z(l,g,m){for(const y of d.list())y(l,g,m)}function F(l,g,m,y,O){const k=L(l,g);if(k)return k;const C=g===Q,b=oe?history.state:{};m&&(y||C?s.replace(l.fullPath,w({scroll:C&&b&&b.scroll},O)):s.push(l.fullPath,O)),c.value=l,Ye(l,g,m,C),Oe()}let v;function $(){v||(v=s.listen((l,g,m)=>{if(!Ze.listening)return;const y=S(l),O=M(y);if(O){_(w(O,{replace:!0}),y).catch(he);return}f=y;const k=c.value;oe&&dr(mt(k.fullPath,m.delta),Pe()),B(y,k).catch(C=>U(C,12)?C:U(C,2)?(_(C.to,y).then(b=>{U(b,20)&&!m.delta&&m.type===ve.pop&&s.go(-1,!1)}).catch(he),Promise.reject()):(m.delta&&s.go(-m.delta,!1),Ae(C,y,k))).then(C=>{C=C||F(y,k,!1),C&&(m.delta&&!U(C,8)?s.go(-m.delta,!1):m.type===ve.pop&&U(C,20)&&s.go(-1,!1)),z(y,k,C)}).catch(he)}))}let H=le(),I=le(),Z;function Ae(l,g,m){Oe(l);const y=I.list();return y.length?y.forEach(O=>O(l,g,m)):console.error(l),Promise.reject(l)}function tn(){return Z&&c.value!==Q?Promise.resolve():new Promise((l,g)=>{H.add([l,g])})}function Oe(l){return Z||(Z=!l,$(),H.list().forEach(([g,m])=>l?m(l):g()),H.reset()),l}function Ye(l,g,m,y){const{scrollBehavior:O}=e;if(!oe||!O)return Promise.resolve();const k=!m&&hr(mt(l.fullPath,0))||(y||!m)&&history.state&&history.state.scroll||null;return Ue().then(()=>O(l,g,k)).then(C=>C&&pr(C)).catch(C=>Ae(C,l,g))}const Te=l=>s.go(l);let xe;const Le=new Set,Ze={currentRoute:c,listening:!0,addRoute:h,removeRoute:E,hasRoute:P,getRoutes:T,resolve:S,options:e,push:j,replace:x,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:I.add,isReady:tn,install(l){const g=this;l.component("RouterLink",Yr),l.component("RouterView",en),l.config.globalProperties.$router=g,Object.defineProperty(l.config.globalProperties,"$route",{enumerable:!0,get:()=>fe(c)}),oe&&!xe&&c.value===Q&&(xe=!0,j(s.location).catch(O=>{}));const m={};for(const O in Q)m[O]=D(()=>c.value[O]);l.provide(Qe,g),l.provide(Xe,_e(m)),l.provide(Fe,c);const y=l.unmount;Le.add(l),l.unmount=function(){Le.delete(l),Le.size<1&&(f=Q,v&&v(),v=null,c.value=Q,xe=!1,Z=!1),y()}}};return Ze}function se(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function ts(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){const d=t.matched[a];d&&(e.matched.find(f=>ie(f,d))?r.push(d):n.push(d));const c=e.matched[a];c&&(t.matched.find(f=>ie(f,c))||s.push(c))}return[n,r,s]}function ws(){return ne(Xe)}const Ps={};const ns=(e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""}),rs=(e,t)=>{const n=e.route.matched.find(s=>{var o;return((o=s.components)==null?void 0:o.default)===e.Component.type}),r=t??(n==null?void 0:n.meta.key)??(n&&ns(e.route,n));return typeof r=="function"?r(e.route):r},ss=(e,t)=>({default:()=>e?G(Sn,e===!0?{}:e,t):t}),os=ye({name:"FragmentWrapper",setup(e,{slots:t}){return()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),is=(e,t,n)=>({default:()=>t?G(e,t===!0?{}:t,n):G(os,{},n)}),cs=ye({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t}){const n=Tt();return()=>G(en,{name:e.name,route:e.route,...t},{default:r=>{if(!r.Component)return;const s=rs(r,e.pageKey),o=n.deferHydration(),a=!!(e.transition??r.route.meta.pageTransition??pt),d=a&&us([e.transition,r.route.meta.pageTransition,pt,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean));return is(We,a&&d,ss(e.keepalive??r.route.meta.keepalive??er,G(bn,{onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{Ue(()=>n.callHook("page:finish",r.Component).finally(o))}},{default:()=>G(ls,{key:s,routeProps:r,pageKey:s,hasTransition:a})}))).default()}})}});function as(e){return Array.isArray(e)?e:e?[e]:[]}function us(e){const t=e.map(n=>({...n,onAfterLeave:as(n.onAfterLeave)}));return Rn(...t)}const ls=ye({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const t=e.pageKey,n=e.routeProps.route,r={};for(const s in e.routeProps.route)r[s]=D(()=>t===e.pageKey?e.routeProps.route[s]:n[s]);return Ee("_route",_e(r)),()=>G(e.routeProps.Component)}}),As=Object.freeze(Object.defineProperty({__proto__:null,default:cs},Symbol.toStringTag,{value:"Module"}));export{We as T,cs as _,Ss as a,pt as b,ys as c,Cs as d,yr as e,_s as f,gs as g,ms as h,Rs as i,ws as j,bs as k,Ps as l,is as m,Es as n,As as p,we as s,vs as u,hs as w};