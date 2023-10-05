import{_ as x,e as y,B as r,o as l,c as n,b as e,Q as b,a4 as h,br as m,b5 as u,bo as p,a9 as g,bI as v,aa as _}from"./entry-f2a1025b.mjs";const w=y({__name:"login",setup(f,{expose:o}){o();const a=r(null),s=r(null),d=r(null),i=r(null),c={email:a,password:s,hasError:d,errorMessage:i,postLoginForm:async function(){await v(a.value,s.value)}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),k={class:"h-screen bg-gradient-to-b from-white to-blue-200"},S={class:"flex items-center justify-center px-4 sm:px-6 lg:px-8"},V={class:"max-w-md w-full space-y-8"},B=g('<div><div class="h-25 w-25"></div><div class="flex"><img class="mx-auto h-24 w-auto" src="/img/hockeyphone.png" alt="rotorink logo"><h1 class="py-9 text-center text-3xl font-extrabold text-gray-900"> rotorink </h1></div><h2 class="mt-6 py-9 text-center text-3xl font-extrabold text-gray-900"> Sign in </h2></div>',1),C={key:0,class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},E=e("strong",{class:"font-bold"},"Oops, try again! ",-1),M={class:"block sm:inline"},z=e("span",{class:"absolute top-0 bottom-0 right-0 px-4 py-3"},[e("svg",{class:"fill-current h-6 w-6 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("title",null,"Close"),e("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})])],-1),L=e("input",{type:"hidden",name:"remember",value:"true"},null,-1),j={class:"rounded-md shadow-sm -space-y-px mb-1"},F=e("label",{for:"email-address",class:"sr-only"},"Email address",-1),N=e("label",{for:"password",class:"sr-only"},"Password",-1),P=g('<div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"><label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label></div><div class="text-sm"><a href="#" class="font-medium text-gray-600 hover:text-gray-500"> Forgot your password? </a></div></div>',1),O=["onClick"],T=e("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[e("svg",{class:"h-5 w-5 text-gray-500 group-hover:text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])],-1),q=_(" Sign in "),D=[T,q];function H(f,o,a,s,d,i){return l(),n("div",k,[e("div",S,[e("div",V,[B,s.hasError?(l(),n("div",C,[E,e("span",M,b(s.errorMessage),1),z])):h("",!0),(l(),n("form",{key:1,onSubmit:o[2]||(o[2]=m(()=>{},["prevent"])),class:"mt-8 space-y-6",action:"#",method:"POST"},[L,e("div",j,[e("div",null,[F,u(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s.email=t),id:"email-address",name:"email",type:"email",autocomplete:"email",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm",placeholder:"Email address"},null,512),[[p,s.email]])])]),e("div",null,[N,u(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>s.password=t),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm",placeholder:"Password"},null,512),[[p,s.password]])]),P,e("div",null,[e("button",{onClick:m(s.postLoginForm,["prevent"]),class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},D,8,O)])],32))])])])}var I=x(w,[["render",H]]);export{I as default};