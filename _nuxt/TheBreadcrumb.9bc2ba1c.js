import{l as v,_ as C}from"./nuxt-link.a31d843b.js";import"./app.config.5ff5ca90.js";import{q as u}from"./ContentQuery.a76a6901.js";import"./TheBreadcrumb.vue.86ac3f7e.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";import{a9 as f,h as g,j as w,k as c,q as _,u as e,F as B,a7 as t,ad as k,ae as V,af as b,ag as y}from"./runtime-core.esm-bundler.c9b12900.js";import"./preload-helper.36518dfa.js";import"./cookie.fa176984.js";import"./index.36486552.js";import"./query.c3f7607a.js";import"./utils.221d5e2c.js";import"./page.95402132.js";const p=o=>(b("data-v-ae3e461d"),o=o(),y(),o),L={class:"breadcrumb"},I=p(()=>t("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"#fff"},[t("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),t("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),t("g",{id:"SVGRepo_iconCarrier"},[t("defs"),t("g",{id:"arrow_left","data-name":"arrow left"},[t("path",{class:"cls-1",d:"M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z"})])])],-1)),N=p(()=>t("span",{class:"dash"},"/",-1)),R={class:"title"},j=p(()=>t("span",{class:"dash"},"/",-1)),q={class:"title current-title"},A={__name:"TheBreadcrumb",async setup(o){let a,s;const{path:d}=v(),l=([a,s]=f(()=>u(d).findOne()),a=await a,s(),a);let r=null;const n=d.split("/").slice(0,-1).join("/");n.length>0&&(r=([a,s]=f(()=>u(n).findOne()),a=await a,s(),a));const x=n||"/";return(D,G)=>{var m,h;const i=C;return g(),w("header",L,[c(i,{class:"back-icon",to:e(x)},{default:_(()=>[I]),_:1},8,["to"]),c(i,{to:"/"},{default:_(()=>[N]),_:1}),e(r)?(g(),w(B,{key:0},[c(i,{to:e(r)._path},{default:_(()=>[t("span",R,k(e(r).navigation.title),1)]),_:1},8,["to"]),j],64)):V("",!0),t("span",q,k(((h=(m=e(l))==null?void 0:m.navigation)==null?void 0:h.title)||e(l).title),1)])}}},Q=S(A,[["__scopeId","data-v-ae3e461d"]]);export{Q as default};
