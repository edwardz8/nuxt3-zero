const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./yTILvn4G.js","./DZMpIS-X.js","./entry.DnabVwWt.css","./CTI_lqBi.js","./CY8yBxmn.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{N as f,c3 as c,c4 as v,x as g,bz as d,K as l,L as h,s as _,bL as y,I as r,e as C}from"./DZMpIS-X.js";import{q as w,w as m,e as N,s as P,j as $,u as j}from"./CTI_lqBi.js";import{u as T}from"./CY8yBxmn.js";const b=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${N(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./yTILvn4G.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},x=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await _(`content-navigation-${c(a.value)}`,()=>b(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),O=x;export{O as default};