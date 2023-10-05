var U=Object.defineProperty,Z=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var S=(a,r,e)=>r in a?U(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e,x=(a,r)=>{for(var e in r||(r={}))F.call(r,e)&&S(a,e,r[e]);if(L)for(var e of L(r))H.call(r,e)&&S(a,e,r[e]);return a},j=(a,r)=>Z(a,z(r));import{_ as w,o as p,c as f,b as s,Q as b,d as g,bK as R,e as $,f as v,b3 as M,bs as V,aa as D,bB as T,bL as J,B as I,bC as K,b2 as B,aJ as N,V as Q,aI as q,bM as k,a as G,bE as W}from"./entry-f2a1025b.mjs";import{m as A}from"./methods-6d63886e.mjs";import{g as X,a as Y,r as ee}from"./useLike-d45674e5.mjs";const te={__name:"OffCanvas",props:["player"],setup(a,{expose:r}){r();const t={props:a,PolarAreaChart:R,matchPlayerImage:A};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},se={id:"player-sidebar",class:"hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full w-full z-[60] bg-white border-r bg-white border-gray-600 hidden",tabindex:"-1"},re={class:"flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"},ae={class:"font-bold text-gray-800"},ne=s("button",{type:"button",class:"inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800","data-hs-overlay":"#player-sidebar"},[s("span",{class:"sr-only"},"Close modal"),s("svg",{class:"w-3.5 h-3.5",width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z",fill:"currentColor"})])],-1),oe={class:"p-4"},le=["src"],ie={key:0},de={key:1,class:"h-96 flex items-center justify-center"},ce=s("div",{class:"animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full",role:"status","aria-label":"loading"},[s("span",{class:"sr-only"},"Loading...")],-1),ue=[ce];function pe(a,r,e,t,y,_){var n;return p(),f("div",null,[s("div",se,[s("div",re,[s("h3",ae,b(e.player?e.player.fullName:"Loading..."),1),ne]),s("div",oe,[s("img",{class:"w-full h-auto rounded-t-xl",src:t.matchPlayerImage((n=e.player)==null?void 0:n.fullName),alt:"Player Profile"},null,8,le),e.player?(p(),f("div",ie,[g(t.PolarAreaChart,{stats:e.player.stats.stat},null,8,["stats"])])):(p(),f("div",de,ue))])])])}var _e=w(te,[["render",pe]]);const fe=$({__name:"PlayerCard",props:{player:Object,likes:{type:Array,default:[]},userId:{type:Number,default:void 0}},emits:["show-player","like-player","unlike-player"],setup(a,{expose:r,emit:e}){r();const t=a,y=v(()=>t.likes.length),_=v(()=>t.likes.find(i=>i.userId===t.userId)),n=v(()=>t.userId?t.likes.findIndex(m=>m.userId===t.userId)>-1:!1);function c(i){e("show-player",i)}function l(i){e("like-player",i)}function h(i,m){e("unlike-player",{id:i,playerId:m})}const u={props:t,emit:e,likesCount:y,userLike:_,isLiked:n,showSidebar:c,likePlayer:l,unlikePlayer:h,matchPlayerImage:A};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),ye={class:"flex relative flex-col bg-white border shadow-md rounded-xl dark:bg-gray-700 dark:border-gray-700 dark:shadow-slate-700/[.7]"},he=s("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M12 21C8.38661 17.7733 2 13.7597 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.74441 12 5C13.09 3.74441 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 13.751 15.6214 17.7907 12 21Z",fill:"#2F80ED"})],-1),me=s("svg",{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 2C9.66042 1.60884 9.26455 1.26729 8.82781 0.982401C7.86267 0.352837 6.69792 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 6.46861 0.255742 7.48801 0.693829 8.45784C2.0526 11.4686 5.16576 14.0093 7.8455 16.1963C8.61699 16.8259 9.35256 17.4262 10 18C10.6474 17.4262 11.383 16.8259 12.1545 16.1963C14.8342 14.0093 17.9473 11.4687 19.3061 8.458C19.7442 7.48813 20 6.46866 20 5.3951C20 2.37384 17.58 0 14.5 0C13.3021 0 12.1373 0.352837 11.1722 0.982401C10.7354 1.26729 10.3396 1.60884 10 2ZM10 15.3699C10.3228 15.1024 10.6527 14.8326 10.9822 14.5633C11.2612 14.3351 11.5399 14.1073 11.8136 13.8813C12.9091 12.9769 13.9814 12.058 14.9309 11.095C16.106 9.90333 16.9793 8.75632 17.4879 7.62419C17.8233 6.8767 18 6.13633 18 5.3951C18 3.51455 16.5119 2 14.5 2C13.3116 2 12.2025 2.51373 11.5103 3.31111L10 5.05084L8.48971 3.31111C7.79748 2.51373 6.68843 2 5.5 2C3.48808 2 2 3.51455 2 5.3951C2 6.13633 2.17674 6.8767 2.51214 7.62419C3.02069 8.75633 3.89402 9.90333 5.06909 11.095C6.01864 12.058 7.09095 12.9769 8.18643 13.8813C8.46009 14.1073 8.73877 14.3351 9.01783 14.5633C9.34727 14.8326 9.67722 15.1024 10 15.3699Z",fill:"#222B45"})],-1),ge=["src"],xe={class:"p-4 md:p-5"},be={class:"text-lg font-bold text-gray-800 dark:text-white"},Ce=s("p",{class:"mt-1 text-white text-gray-400"},null,-1),ve={class:"flex inline-flex justify-center items-center gap-4"},ke=D(" View Player "),we=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"}),s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"})],-1),Pe=[we];function Le(a,r,e,t,y,_){const n=T;return p(),f("div",ye,[t.isLiked?(p(),f("button",{key:0,onClick:r[0]||(r[0]=c=>t.unlikePlayer(t.userLike.id,e.player.person.id)),class:"text-sm mt-1 py-2 px-2 inline-flex justify-center items-center gap-2 font-semibold text-blue-500 hover:text-gray-300"},[he,s("span",null,b(t.likesCount)+" Likes",1)])):(p(),f("button",{key:1,type:"button",onClick:r[1]||(r[1]=c=>t.likePlayer(e.player.person.id)),class:"text-sm mt-1 py-2 px-2 inline-flex justify-center items-center gap-2 font-semibold text-gray-400 hover:text-gray-300"},[me,s("span",null,b(t.likesCount)+" Likes",1)])),s("img",{class:"w-full h-auto rounded-t-xl",src:t.matchPlayerImage(e.player.person.fullName),alt:"Player Profile"},null,8,ge),s("div",xe,[s("h3",be,b(e.player.person.fullName),1),Ce,s("div",ve,[g(n,{class:"mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800",to:`/teams/${V().params.id}/player/`+e.player.person.id},{default:M(()=>[ke]),_:1},8,["to"]),s("button",{class:"top-2 rounded-md mt-4 py-2 px-2 cursor-pointer flex bg-red-500 hover:text-gray-900 text-white hover:bg-gray-100 focus:outline-none","data-hs-overlay":"#player-sidebar",onClick:r[2]||(r[2]=c=>t.showSidebar(e.player.person.id))},Pe)])])])}var Se=w(fe,[["render",Le]]);const je=$({__name:"index",async setup(a,{expose:r}){r();let e,t;const y=V(),_=J("user"),n=I(null),c=K(),l=I(null),{data:h}=([e,t]=B(()=>k(`https://statsapi.web.nhl.com/api/v1/teams/${y.params.id}/roster`)),e=await e,t(),e),u=[...h.value.roster].map(o=>o.person.id);l.value=([e,t]=B(()=>X(u.toString())),e=await e,t(),e);async function i(o){if(!_.value)return W().push("/login");try{const d=await Y({playerId:o,userId:_.value.id});l.value[o]?l.value[o].push(x({},d)):l.value[o]=[x({},d)]}catch(d){console.log(d)}}async function m({id:o,playerId:d}){try{await ee(o);const C=l.value[d].findIndex(E=>E.id===o);l.value[d].splice(C,1)}catch(C){console.log(C)}}async function O(o){n.value=null;const d=await Promise.all([k(`https://statsapi.web.nhl.com/api/v1/people/${o}`),k(`https://statsapi.web.nhl.com/api/v1/people/${o}/stats/?stats=statsSingleSeason&season=${c.public.SEASON}`)]);n.value=j(x({},d[0].data.value.people[0]),{stats:d[1].data.value.stats[0].splits[0]})}const P={route:y,user:_,player:n,config:c,playerLikes:l,data:h,playerIds:u,likePlayer:i,unlikePlayer:m,showPlayer:O};return Object.defineProperty(P,"__isScriptSetup",{enumerable:!1,value:!0}),P}}),Ie=s("h2",{class:"text-2xl mt-3 mb-4 text-center"},"Team Page",-1),Be=s("p",{class:"text-md mb-4 text-center"},"Select Player to View Stats",-1),Ne=s("p",{class:"text-md mb-4 text-center"},"Sign in or register to like and comment on your favorite plays",-1),$e={class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"};function Me(a,r,e,t,y,_){const n=N("Script"),c=N("Head"),l=_e,h=Se;return p(),f("main",null,[g(c,null,{default:M(()=>[g(n,{defer:"","data-domain":"rotorink.com",src:"https://plausible.io/js/plausible.js"})]),_:1}),s("section",null,[Ie,Be,Ne,g(l,{player:t.player},null,8,["player"]),s("div",$e,[(p(!0),f(Q,null,q(t.data.roster,u=>(p(),G(h,{"user-id":t.user?t.user.id:void 0,player:u,likes:t.playerLikes[u.person.id],key:u.person.id,onShowPlayer:t.showPlayer,onLikePlayer:t.likePlayer,onUnlikePlayer:t.unlikePlayer},null,8,["user-id","player","likes"]))),128))])])])}var Ue=w(je,[["render",Me]]);export{Ue as default};
