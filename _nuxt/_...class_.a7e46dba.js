import x from"./LessonList.8430128e.js";import C from"./TheBreadcrumb.9bc2ba1c.js";import E from"./AuthorInfo.6d38b9ca.js";import k from"./ContentDoc.43960845.js";import{l as B}from"./nuxt-link.a31d843b.js";import{q as H,u as N}from"./ContentQuery.a76a6901.js";import"./app.config.5ff5ca90.js";import{u as T,f as b}from"./TheBreadcrumb.vue.86ac3f7e.js";import{_ as A}from"./_plugin-vue_export-helper.c27b6911.js";import{a9 as m,r as D,w as L,h as S,j as V,a7 as u,k as r,u as f}from"./runtime-core.esm-bundler.c9b12900.js";import"./page.95402132.js";import"./composables.a3c842a3.js";import"./ContentRenderer.9ee55803.js";import"./ContentRendererMarkdown.212decb3.js";import"./index.36486552.js";import"./_commonjsHelpers.0ee3bad0.js";import"./preload-helper.36518dfa.js";import"./cookie.fa176984.js";import"./query.c3f7607a.js";import"./utils.221d5e2c.js";const j={class:"wrapper"},q={class:"container"},I={__name:"[...class]",async setup($){let o,s;const{path:a}=B(),c=T(),e=a.split("/").slice(0,-1).join("/"),{navigation:h}=([o,s]=m(()=>H(e).findOne()),o=await o,s(),o),d={...h.author},{data:g}=([o,s]=m(()=>N("navigation",()=>b(e))),o=await o,s(),o);let p=g._rawValue.find(t=>t._path===e).children.filter(t=>t._path!==e);p.forEach(t=>{const n=!!c.history.get(t._path);t.seen=n});const v=t=>{const n=t.target.clientHeight,_=t.target.scrollHeight;t.target.scrollTop>=_-n-130&&(c.history.get(a)||c.setSeen(a,!0))},i=D(null);return L(()=>{i.value&&i.value.dispatchEvent(new Event("scroll"))}),(t,n)=>{const _=x,l=C,y=E,w=k;return S(),V("div",j,[u("main",{ref_key:"input",ref:i,class:"rich-content",onScroll:v},[r(_,{path:f(e),"lesson-list":f(p)},null,8,["path","lesson-list"]),u("div",q,[r(l),r(y,{author:d}),r(w)])],544)])}}},at=A(I,[["__scopeId","data-v-fbd344f7"]]);export{at as default};