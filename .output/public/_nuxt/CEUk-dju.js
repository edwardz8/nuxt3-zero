import{x as n,K as o,c6 as c,c0 as h,N as l,c7 as p,o as u,k as d,i as r,bl as m}from"./Dn9gF6Wa.js";const g="img",S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(a){const t=a,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=c(h(l().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return p(e,t.src)}return t.src});return(s,e)=>(u(),d(m(r(g)),{src:r(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
