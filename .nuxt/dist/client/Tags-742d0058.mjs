import{o as i,c as w,a as p,_ as y,L as b,I,v as S,J as T,b as v,d as l,F as B,B as C,x as k,N,D as E,n as h,E as V,G as z,y as A}from"./entry-895c49b3.mjs";function D(a,r){return i(),w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[p("path",{"fill-rule":"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})])}const L={__name:"Tags",async setup(a,{expose:r}){r();let t,e;const n=b(!1),o=(g,f)=>{console.log(g);let x=g.map(d=>{let m=d;return d[f]&&(m=o(d[f])),m}).flat(1);return console.log({_tags:x}),x},_=()=>{n.value=!n.value},{data:s}=([t,e]=I(()=>S("tags",()=>T("blog").only(["tags"]).find())),t=await t,e(),t),c=[...new Set(o(s.value,"tags"))];console.log({articleTags:c});const u={expanded:n,flatten:o,toggleExpand:_,data:s,articleTags:c,TagIcon:D};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}},F=a=>(V("data-v-ca42e06e"),a=a(),z(),a),M=F(()=>l("span",null,"Tags",-1));function j(a,r,t,e,n,o){const _=A;return i(),v("div",{class:h(["tag-list",{active:e.expanded}])},[l("button",{onClick:e.toggleExpand,class:"cta w-icon"},[p(e.TagIcon,{class:"icon solid"}),M]),l("ul",{class:h(["article-tags",{expanded:e.expanded}])},[(i(),v(B,null,C(e.articleTags,(s,c)=>l("li",{key:c,class:"tag"},[p(_,{to:`/blog/tags/${s}`,class:"font-semibold"},{default:k(()=>[N(E(s),1)]),_:2},1032,["to"])])),64))],2)],2)}var J=y(L,[["render",j],["__scopeId","data-v-ca42e06e"]]);export{J as _};
