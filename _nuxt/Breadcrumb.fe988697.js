import{i as C,l as S,_ as V}from"./nuxt-link.dcabb169.js";import"./app.config.5ff5ca90.js";import{q as f}from"./ContentQuery.c283f3ff.js";import"./Footer.vue.7c60c1f7.js";import{_ as b}from"./_plugin-vue_export-helper.c27b6911.js";import{a9 as m,h,j as u,a7 as a,k as g,q as v,u as e,F as B,ac as w,ad as y,ae as L,af as N,a0 as R}from"./runtime-core.esm-bundler.11abf9b2.js";import"./preload-helper.18a6abf8.js";import"./cookie.4747350e.js";import"./index.36486552.js";import"./query.c3f7607a.js";import"./utils.4a7cdbeb.js";import"./page.b3072438.js";const r=o=>(L("data-v-fe4097d6"),o=o(),N(),o),I={class:"breadcrumb"},j=R('<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#fff" data-v-fe4097d6><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-fe4097d6></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-fe4097d6></g><g id="SVGRepo_iconCarrier" data-v-fe4097d6><defs data-v-fe4097d6></defs><g data-name="arrow left" id="arrow_left" data-v-fe4097d6><path class="cls-1" d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z" data-v-fe4097d6></path></g></g></svg>',1),q=[j],A=r(()=>a("span",{class:"title"}," ... ",-1)),D=r(()=>a("span",{class:"dash"},"/",-1)),G={class:"title"},P=r(()=>a("span",{class:"dash"},"/",-1)),F={class:"title current-title"},O={__name:"Breadcrumb",async setup(o){let t,s;const k=C(),x=()=>{k.back()},{path:i}=S(),c=([t,s]=m(()=>f(i).findOne()),t=await t,s(),t);let n=null;const d=i.split("/").slice(0,-1).join("/");return d.length>0&&(n=([t,s]=m(()=>f(d).findOne()),t=await t,s(),t)),(E,M)=>{var p,l;const _=V;return h(),u("header",I,[a("span",{class:"back-icon",onClick:x},q),g(_,{to:"/"},{default:v(()=>[A]),_:1}),e(n)?(h(),u(B,{key:0},[D,g(_,{to:e(n)._path},{default:v(()=>[a("span",G,w(e(n).navigation.title),1)]),_:1},8,["to"])],64)):y("",!0),P,a("span",F,w(((l=(p=e(c))==null?void 0:p.navigation)==null?void 0:l.title)||e(c).title),1)])}}},tt=b(O,[["__scopeId","data-v-fe4097d6"]]);export{tt as default};