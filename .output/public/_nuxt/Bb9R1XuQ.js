import{i as d,E as w,m as y,aX as D,b$ as g,x as b,bK as H,c0 as x,I as u}from"./9xzIvSUX.js";import S from"./COoh5sQP.js";import _ from"./kq4oAFOD.js";import{u as $}from"./C5Z4WBPb.js";import"./CkwWKO8T.js";import"./C-v3KzvZ.js";import"./BmlbPuZL.js";import"./BDpf_RL0.js";import"./EeP68ASt.js";const a=(p,s=y())=>{const e=d(p),m=g();w(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),D(()=>$(t))},{immediate:!0})},q=b({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=H(),{tag:m,excerpt:f,path:n,query:t,head:r}=p,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||x(y().path),find:"one"},C=(o,i)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return u(_,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:v})=>{var h;return c&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:v,excerpt:f,...this.$attrs})}:({data:o})=>(c&&a(o),u(S,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):C("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||u("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||u("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),J=q;export{J as default};
