import s from"./Markdown-532861c8.mjs";import{_ as l,o as r,c as p,a as e,b as c,r as b,d as _,n as f,s as n}from"./entry-73967300.mjs";const y={__name:"InfoBox",props:["type"],setup(a,{expose:d}){d();const o={props:a,InformationCircleIcon:n.InformationCircleIcon,ExclamationIcon:n.ExclamationIcon,BanIcon:n.BanIcon};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},g={class:"details pt-2"};function u(a,d,t,o,m,x){const i=s;return r(),p("div",{class:f(["info-box not-prose",[t.type]])},[t.type=="warning"?(r(),e(o.ExclamationIcon,{key:0,class:"icon solid"})):t.type=="error"?(r(),e(o.BanIcon,{key:1,class:"icon solid"})):(r(),e(o.InformationCircleIcon,{key:2,class:"icon solid"})),c("details",null,[c("summary",null,[b(a.$slots,"default",{},void 0,!0)]),c("div",g,[_(i,{use:a.$slots.details,unwrap:"p"},null,8,["use"])])])],2)}var I=l(y,[["render",u],["__scopeId","data-v-ad57dd5c"]]);export{I as default};
