import{H as b}from"./_GRf5a0S.js";import{_ as k}from"./D-qD7Ybk.js";import{m as w,f as v,q as $,c as e,b as o,w as l,a as t,i as q,o as n,F as c,r as p,t as r,e as H}from"./DZMpIS-X.js";import L from"./C6DMYRf9.js";import{u as N}from"./BHwc_sUM.js";import"./xG4fBFI0.js";import"./C932wzq6.js";import"./CTI_lqBi.js";import"./CY8yBxmn.js";import"./CekYOav8.js";const A={class:"page-section"},B={class:"article-list"},C={class:"wrapper"},S={class:"img-cont w-32 shrink-0"},j=["src","alt"],F={class:"text-2xl font-semibold"},V={class:"article-tags"},Q={__name:"index",setup(D){const{query:{tags:i}}=w(),_=v(i==null?void 0:i.split(","));return N({title:"All articles",meta:[{name:"description",content:"All articles"}]}),(E,a)=>{const m=$("Script"),u=b,d=k,f=H,h=L;return n(),e("main",null,[o(u,null,{default:l(()=>[o(m,{defer:"","data-domain":"rotorink.com",src:"https://plausible.io/js/plausible.js"})]),_:1}),a[1]||(a[1]=t("header",{class:"page-heading"},[t("div",{class:"wrapper"},[t("h1",{class:"text-5xl font-extrabold"},"All articles"),t("p",{class:"font-medium text-lg"},"List of all articles")])],-1)),t("section",A,[o(d),o(h,{path:"/blog",query:{only:["title","description","tags","_path","img"],where:{tags:{$contains:q(_)}},$sensitivity:"base"}},{default:l(({list:g})=>[t("ul",B,[(n(!0),e(c,null,p(g,s=>(n(),e("li",{key:s._path,class:"article-item"},[o(f,{to:s._path},{default:l(()=>[t("div",C,[t("div",S,[t("img",{src:`/${s.img}`,alt:s.title,class:"rounded-lg max-h-[8rem]"},null,8,j)]),t("header",null,[t("h1",F,r(s.title),1),t("p",null,r(s.description),1),t("ul",V,[(n(!0),e(c,null,p(s.tags,(x,y)=>(n(),e("li",{class:"tag !py-0.5",key:y},r(x),1))),128))])])])]),_:2},1032,["to"])]))),128))])]),"not-found":l(()=>a[0]||(a[0]=[t("p",null,"No articles found.",-1)])),_:1},8,["query"])])])}}};export{Q as default};