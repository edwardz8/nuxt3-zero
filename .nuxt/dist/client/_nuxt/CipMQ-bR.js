import{H as T}from"./Osafxy8G.js";import{u as E,m as Z}from"./2NEO5uWL.js";import{g as R,a as U,r as D}from"./BCuC9enD.js";import{A as q,m as M,f as b,M as G,p as B,L as w,o as u,c as m,a as e,h as O,v as K,i as t,j as z,F as P,d as v,g as J,r as Q,t as s,l as k,u as j,K as W,B as X,q as Y,b as $,w as ee}from"./9xzIvSUX.js";const te=q("/img/footballguy2.jpg");async function se(p){return await $fetch("/api/comment/getComments?playerId="+p,{method:"GET"})}async function oe(p){return await $fetch("/api/comment/addComment",{method:"POST",body:{userId:p.userId,playerId:p.playerId,comment:p.comment}})}async function ae(p){return await $fetch("/api/comment/deleteComment?commentId="+p,{method:"GET"})}const re={class:"p-4 bg-white border-t rounded-none rounded-md dark:bg-gray-800 dark:border-gray-700",role:"alert"},ne={class:"ml-auto block w-20 mt-2 py-2 px-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:bg-gray-200 hover:border-gray-800 focus:outline-none transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"},le={key:0,class:"animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full",role:"status","aria-label":"loading"},de={class:"flex flex-col pt-3"},ie={class:"flex gap-3 items-center"},ue={class:"text-base m-0 leading-3"},me={class:"text-xs leading-3"},ce=["onClick"],pe={class:"text-base mt-2 text-gray-700 dark:text-gray-400 ml-12"},fe={__name:"Comments",async setup(p){let i,x;const y=M(),r=b([]),g=b(""),_=b(!1),d=G("user");r.value=([i,x]=B(()=>se(y.params.player)),i=await i,x(),i);const h=w(()=>d.value?r.value.findIndex(n=>n.userId===d.value.id)>-1:!1);async function C(){if(!d.value)return j().push("/login");_.value=!0;try{const c=await oe({userId:d.value.id,playerId:+y.params.player,comment:g.value});r.value.unshift({...c,user:d.value}),g.value=""}catch(c){console.log(c)}finally{_.value=!1}}async function S(c,n){await ae(c),r.value.splice(n,1)}return(c,n)=>(u(),m("div",re,[n[4]||(n[4]=e("h3",{class:"ml-3 font-bold mb-3 text-white"},"Comments",-1)),e("form",{class:"w-full d-flex flex-col",onSubmit:J(C,["prevent"])},[O(e("input",{"onUpdate:modelValue":n[0]||(n[0]=f=>z(g)?g.value=f:null),required:"",type:"text",placeholder:"Enter Comment",class:"py-3 px-4 block w-full border focus:outline-none border-gray-200 rounded-md text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"},null,512),[[K,t(g)]]),e("button",ne,[t(_)?(u(),m("div",le,n[1]||(n[1]=[e("span",{class:"sr-only"},"Loading...",-1)]))):(u(),m(P,{key:1},[v(" Submit ")],64))])],32),e("div",de,[(u(!0),m(P,null,Q(t(r),(f,H)=>(u(),m("div",{class:"ml-3 mb-2 py-2 border-t border-gray-200",key:f.id},[e("div",ie,[n[3]||(n[3]=e("img",{src:te,class:"rounded-full w-10 h-10",alt:"avatar"},null,-1)),e("div",null,[e("h4",ue,s(f.user.name),1),e("span",me,"@"+s(f.user.username),1)]),t(h)?(u(),m("button",{key:0,class:"p-2 ml-auto",onClick:V=>S(f.id,H)},n[2]||(n[2]=[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M15 2H9C7.897 2 7 2.897 7 4V5H3V7H5V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V7H21V5H17V4C17 2.897 16.103 2 15 2ZM9 4H15V5H9V4ZM17 20H7V7H17V20Z",fill:"#192038"})],-1)]),8,ce)):k("",!0)]),e("p",pe,s(f.comment),1)]))),128))])]))}},ye={key:0,class:"md:w-1/2 md:mx-auto mt-4 mx-4 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"},ge={class:"p-4 md:p-5"},he={class:"text-2xl font-bold text-gray-800 dark:text-white text-center"},be=["src"],xe={class:"text-md font-bold text-gray-800 dark:text-white text-center"},_e={class:"mt-4 flex justify-center space-between"},ve={class:"mr-2"},we={class:"mb-4 text-gray-800 dark:text-gray-400"},ke={class:"mt-4 mb-4 font-bold text-white"},Ce={class:"text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md"},Se={class:"mt-4 mb-4 font-bold text-white"},He={class:"text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md"},Ie={class:"mt-4 mb-4 font-bold text-white"},$e={class:"mt-4 mb-4 text-white font-bold"},Pe={class:"mt-4 mb-4 font-bold text-white"},Ve={class:"text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md"},Le={class:"font-bold text-white"},Ae={key:0,class:"ml-2"},Ne={class:"mb-4 text-gray-800 dark:text-gray-400"},Me={class:"font-bold mt-4 mb-4 text-white"},Ge={class:"font-bold mt-4 mb-4 text-white"},Be={class:"text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md"},je={class:"font-bold mt-4 mb-4 text-white"},Fe={class:"mt-4 mb-4 text-white font-bold"},Te={class:"text-white font-bold"},qe={__name:"[player]",async setup(p){let i,x;const y=M(),r=b(null),g=b(null),_=b(!1),d=b([]),h=G("user"),{fetchPlayer:C}=E(),S=W();X(async()=>{try{const o=await C(y.params.player);console.log(o),r.value=o}catch(o){console.error("Failed to fetch teams:",o),g.value="Failed to fetch teams."}finally{_.value=!1}});const c=([i,x]=B(()=>R(y.params.player)),i=await i,x(),i);d.value=c[+y.params.player]?c[+y.params.player]:[];const n=w(()=>h.value?!!d.value.find(o=>o.userId==h.value.id):!1),f=w(()=>d.value.find(o=>o.userId==h.value.id));async function H(){if(!h.value)return j().push("/login");try{const o=await U({playerId:r.value.id,userId:h.value.id});console.log("like",o),d.value.push({...o})}catch{}}async function V(o){try{await D(o);const a=d.value.find(I=>I.id===o);d.value.splice(a,1)}catch{}}const l=w(()=>{var o;return(o=r.value)==null?void 0:o.seasonTotals.find(a=>a.season===+S.$config.public.SEASON)});return(o,a)=>{var L,A,N;const I=Y("Script"),F=T;return u(),m("main",null,[$(F,null,{default:ee(()=>[$(I,{defer:"","data-domain":"rotorink.com",src:"https://plausible.io/js/plausible.js"})]),_:1}),e("section",null,[t(r)?(u(),m("div",ye,[e("div",ge,[e("h2",he,s(t(r).firstName.default+" "+t(r).lastName.default),1),e("img",{class:"mx-auto rounded-t-xl w-32",src:t(r).headshot||t(Z)(t(r).firstName.default+" "+t(r).lastName.default),alt:"Player Profile"},null,8,be),e("h5",xe,s((A=(L=t(r))==null?void 0:L.fullTeamName)==null?void 0:A.default),1),e("div",_e,[e("div",ve,[e("p",we," Height: "+s((N=t(r))==null?void 0:N.heightInCentimeters)+" cm ",1),t(l)?(u(),m(P,{key:0},[e("p",ke,[a[1]||(a[1]=v(" SPG: ")),e("span",Ce,s((t(l).shots/t(l).gamesPlayed).toFixed(2)),1)]),e("p",Se,[a[2]||(a[2]=v(" Goals Against: ")),e("span",He,s(t(l).goalsAgainst),1)]),e("p",Ie," Saves: "+s(t(l).saves),1),e("p",$e," Games: "+s(t(l).gamesPlayed),1),e("p",Pe,[a[3]||(a[3]=v(" GPG: ")),e("span",Ve,s((t(l).goals/t(l).gamesPlayed).toFixed(2)),1)]),e("p",Le," Assists: "+s(t(l).assists),1)],64)):k("",!0)]),t(l)?(u(),m("div",Ae,[e("p",Ne," Season: "+s(t(l).season),1),e("p",Me,[e("span",null," Shots: "+s(t(l).shots),1)]),e("p",Ge,[a[4]||(a[4]=v(" Games Started: ")),e("span",Be,s(t(l).gamesStarted),1)]),e("p",je," Shots Against: "+s(t(l).shotsAgainst),1),e("p",Fe," Hits: "+s(t(l).hits),1),e("p",Te,"Goals: "+s(t(l).goals),1)])):k("",!0)]),t(n)?(u(),m("button",{key:0,onClick:a[0]||(a[0]=Ee=>V(t(f).id)),class:"mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-500 font-semibold text-blue-500 focus:outline-none transition-all text-sm"},[a[5]||(a[5]=e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M12 21C8.38661 17.7733 2 13.7597 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.74441 12 5C13.09 3.74441 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 13.751 15.6214 17.7907 12 21Z",fill:"#2F80ED"})],-1)),e("span",null,s(t(d).length)+" Likes",1)])):(u(),m("button",{key:1,type:"button",onClick:H,class:"mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:bg-gray-200 hover:border-gray-800 focus:outline-none transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"},[a[6]||(a[6]=e("svg",{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 2C9.66042 1.60884 9.26455 1.26729 8.82781 0.982401C7.86267 0.352837 6.69792 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 6.46861 0.255742 7.48801 0.693829 8.45784C2.0526 11.4686 5.16576 14.0093 7.8455 16.1963C8.61699 16.8259 9.35256 17.4262 10 18C10.6474 17.4262 11.383 16.8259 12.1545 16.1963C14.8342 14.0093 17.9473 11.4687 19.3061 8.458C19.7442 7.48813 20 6.46866 20 5.3951C20 2.37384 17.58 0 14.5 0C13.3021 0 12.1373 0.352837 11.1722 0.982401C10.7354 1.26729 10.3396 1.60884 10 2ZM10 15.3699C10.3228 15.1024 10.6527 14.8326 10.9822 14.5633C11.2612 14.3351 11.5399 14.1073 11.8136 13.8813C12.9091 12.9769 13.9814 12.058 14.9309 11.095C16.106 9.90333 16.9793 8.75632 17.4879 7.62419C17.8233 6.8767 18 6.13633 18 5.3951C18 3.51455 16.5119 2 14.5 2C13.3116 2 12.2025 2.51373 11.5103 3.31111L10 5.05084L8.48971 3.31111C7.79748 2.51373 6.68843 2 5.5 2C3.48808 2 2 3.51455 2 5.3951C2 6.13633 2.17674 6.8767 2.51214 7.62419C3.02069 8.75633 3.89402 9.90333 5.06909 11.095C6.01864 12.058 7.09095 12.9769 8.18643 13.8813C8.46009 14.1073 8.73877 14.3351 9.01783 14.5633C9.34727 14.8326 9.67722 15.1024 10 15.3699Z",fill:"#222B45"})],-1)),e("span",null,s(t(d).length)+" Likes",1)]))]),$(fe)])):k("",!0)])])}}};export{qe as default};
