import{_ as $}from"./Tags-a7e4740d.mjs";import{_ as w,bs as B,B as S,bv as H,aJ as p,o,c as n,d as a,b3 as l,b as t,bH as L,V as d,aI as u,Q as r,bB as N}from"./entry-d54c7e8e.mjs";import"./index-6f13d458.mjs";import"./_commonjsHelpers-6067da81.mjs";const j={__name:"index",setup(m,{expose:_}){_();const{query:{tags:s}}=B(),i=S(s==null?void 0:s.split(","));H({title:"All articles",meta:[{name:"description",content:"All articles"}]});const c={tags:s,filter:i};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},q=t("header",{class:"page-heading"},[t("div",{class:"wrapper"},[t("h1",{class:"text-5xl font-extrabold"},"All articles"),t("p",{class:"font-medium text-lg"},"List of all articles")])],-1),A={class:"page-section"},C={class:"article-list"},V={class:"wrapper"},D={class:"img-cont w-32 shrink-0"},E=["src","alt"],F={class:"text-2xl font-semibold"},I={class:"article-tags"},J=t("p",null,"No articles found.",-1);function O(m,_,s,i,c,P){const h=p("Script"),f=p("Head"),g=$,x=N,b=L;return o(),n("main",null,[a(f,null,{default:l(()=>[a(h,{defer:"","data-domain":"rotorink.com",src:"https://plausible.io/js/plausible.js"})]),_:1}),q,t("section",A,[a(g),a(b,{path:"/blog",query:{only:["title","description","tags","_path","img"],where:{tags:{$contains:i.filter}},$sensitivity:"base"}},{default:l(({list:y})=>[t("ul",C,[(o(!0),n(d,null,u(y,e=>(o(),n("li",{key:e._path,class:"article-item"},[a(x,{to:e._path},{default:l(()=>[t("div",V,[t("div",D,[t("img",{src:`/${e.img}`,alt:e.title,class:"rounded-lg max-h-[8rem]"},null,8,E)]),t("header",null,[t("h1",F,r(e.title),1),t("p",null,r(e.description),1),t("ul",I,[(o(!0),n(d,null,u(e.tags,(v,k)=>(o(),n("li",{class:"tag !py-0.5",key:k},r(v),1))),128))])])])]),_:2},1032,["to"])]))),128))])]),"not-found":l(()=>[J]),_:1},8,["query"])])])}var G=w(j,[["render",O]]);export{G as default};