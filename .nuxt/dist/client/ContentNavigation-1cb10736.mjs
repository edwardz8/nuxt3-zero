var y=Object.defineProperty;var u=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(a,e,t)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,s=(a,e)=>{for(var t in e||(e={}))d.call(e,t)&&p(a,t,e[t]);if(u)for(var t of u(e))h.call(e,t)&&p(a,t,e[t]);return a};import{p as l,q as m,w as g,s as f,e as q,t as w,f as C,v as N,u as $,h as T}from"./entry-895c49b3.mjs";const j=a=>{let e=a;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const t=g(e?`/navigation/${f(e)}`:"/navigation");return $fetch(t,{method:"GET",responseType:"json",params:{_params:l(e||{}),previewToken:m("previewToken").value}})};var B=q({props:{query:{type:Object,required:!1,default:void 0}},async setup(a){const{query:e}=w(a),t=C(()=>{var r;return typeof((r=e.value)==null?void 0:r.params)=="function"?e.value.params():e.value}),{data:n,refresh:o}=await N(`content-navigation-${f(t.value)}`,()=>j(t.value));return{data:n,refresh:o}},render(a){var i;const e=$(),{query:t,data:n,refresh:o}=a,r=(v,c)=>T("pre",null,JSON.stringify({message:"You should use slots with <ContentNavigation>",slot:v,data:c},null,2));return(e==null?void 0:e.empty)&&(!n||!(n!=null&&n.length))?((i=e==null?void 0:e.empty)==null?void 0:i.call(e,s({query:t},this.$attrs)))||r("empty",{query:t,data:n}):e!=null&&e.default?e.default(s({navigation:n,refresh:o},this.$attrs)):r("default",n)}});export{B as default};
