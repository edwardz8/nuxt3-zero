import l from"./Markdown-a31b8439.mjs";import{_ as d,o as e,c as p,a as r,b as n,r as b,d as _,n as f,s as i}from"./entry-c0b28d5d.mjs";const y={__name:"InfoBox",props:["type"],setup(a,{expose:c}){c();const o={props:a,InformationCircleIcon:i.InformationCircleIcon,ExclamationIcon:i.ExclamationIcon,BanIcon:i.BanIcon};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},g={class:"details pt-2"};function u(a,c,t,o,m,x){const s=l;return e(),p("div",{class:f(["info-box not-prose",[t.type]])},[t.type=="warning"?(e(),r(o.ExclamationIcon,{key:0,class:"icon solid"})):t.type=="error"?(e(),r(o.BanIcon,{key:1,class:"icon solid"})):(e(),r(o.InformationCircleIcon,{key:2,class:"icon solid"})),n("details",null,[n("summary",null,[b(a.$slots,"default",{},void 0,!0)]),n("div",g,[_(s,{use:a.$slots.details,unwrap:"p"},null,8,["use"])])])],2)}var I=d(y,[["render",u],["__scopeId","data-v-9048ae04"]]);export{I as default};