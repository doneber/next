import{_}from"./preload-helper.36518dfa.js";import{q as p,h as o,e as m,j as c}from"./ContentQuery.a76a6901.js";import{b as f}from"./nuxt-link.a31d843b.js";import{u as h}from"./cookie.fa176984.js";import"./app.config.5ff5ca90.js";import{w as s,s as v}from"./utils.221d5e2c.js";import{n as g}from"./page.95402132.js";const $=async t=>{const{content:e}=f().public;typeof(t==null?void 0:t.params)!="function"&&(t=p(t));const n=t.params(),i=e.experimental.stripQueryParameters?s(`/navigation/${`${o(n)}.${e.integrity}`}/${m(n)}.json`):s(`/navigation/${o(n)}.${e.integrity}.json`);if(v())return(await _(()=>import("./client-db.55c1fd94.js"),["./client-db.55c1fd94.js","./index.36486552.js","./nuxt-link.a31d843b.js","./runtime-core.esm-bundler.c9b12900.js","./cookie.fa176984.js","./app.config.5ff5ca90.js","./query.c3f7607a.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(r=>r.generateNavigation))(n);const a=await $fetch(i,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:c(n),previewToken:h("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const x=g("seens",{state:()=>({history:new Map}),actions:{setSeen(t,e){this.history.set(t,e)}}});export{$ as f,x as u};