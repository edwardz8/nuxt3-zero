import{_ as h}from"./BXmIimlL.js";import{A as k,x as V,f as l,o as i,c as m,a as e,i as s,F as z,r as C,t as U,l as F,g as v,h as p,v as f,j as g,n as c,d as M,b as j,C as q}from"./9xzIvSUX.js";const B=k("/img/baseball-phone.png"),E={class:"h-screen"},N={class:"flex items-center justify-center px-4 sm:px-6 lg:px-8"},S={class:"max-w-md w-full"},R={key:0,class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",role:"alert"},T={class:"block sm:inline"},_={class:"rounded-md shadow-sm -space-y-px mb-1"},A={class:"rounded-md shadow-sm -space-y-px mb-1"},D={class:"rounded-md shadow-sm -space-y-px mb-1"},W=V({__name:"register",setup(H){const t=l(null),n=l(null),d=l(null),u=l(null),a=l(new Map);let y=l({hasErrors:!1});async function x(){y.value=await q(d.value,u.value,t.value,n.value),a.value=y.value.errors}return(L,r)=>{const b=h;return i(),m("div",E,[e("div",N,[e("div",S,[r[13]||(r[13]=e("div",{class:"flex"},[e("img",{class:"mx-auto h-24 w-auto",src:B,alt:"rotorink logo"})],-1)),r[14]||(r[14]=e("div",null,[e("h2",{class:"text-center text-3xl font-extrabold mt-5 text-gray-900"},"Sign Up")],-1)),s(y).hasErrors&&s(a)?(i(),m("div",R,[r[5]||(r[5]=e("strong",{class:"font-bold"},"Oops, try again! ",-1)),e("ul",T,[(i(!0),m(z,null,C(s(a),([o,w])=>(i(),m("li",null,U(w.check.errorMessage),1))),256))])])):F("",!0),e("form",{onSubmit:r[4]||(r[4]=v(()=>{},["prevent"])),class:"mt-8 space-y-6",action:"#",method:"POST"},[r[10]||(r[10]=e("input",{type:"hidden",name:"remember",value:"true"},null,-1)),e("div",_,[e("div",null,[r[6]||(r[6]=e("label",{for:"name",class:"sr-only"},"name",-1)),p(e("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>g(u)?u.value=o:null),id:"name",name:"name",required:"",class:c(["appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm",s(a).has("name")?" border-red-500":""]),placeholder:"name"},null,2),[[f,s(u)]])])]),e("div",A,[e("div",null,[r[7]||(r[7]=e("label",{for:"email-address",class:"sr-only"},"username",-1)),p(e("input",{type:"email","onUpdate:modelValue":r[1]||(r[1]=o=>g(d)?d.value=o:null),id:"username",name:"username",required:"",class:c(["appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm",s(a).has("username")?" border-red-500":""]),placeholder:"username"},null,2),[[f,s(d)]])])]),e("div",D,[e("div",null,[r[8]||(r[8]=e("label",{for:"email-address",class:"sr-only"},"email",-1)),p(e("input",{"onUpdate:modelValue":r[2]||(r[2]=o=>g(t)?t.value=o:null),id:"email-address",name:"email",type:"email",autocomplete:"email",required:"",class:c(["appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm",s(a).has("email")?" border-red-500":""]),placeholder:"email address"},null,2),[[f,s(t)]])])]),e("div",null,[r[9]||(r[9]=e("label",{for:"password",class:"sr-only"},"password",-1)),p(e("input",{"onUpdate:modelValue":r[3]||(r[3]=o=>g(n)?n.value=o:null),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:c(["appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm",s(a).has("password")?" border-red-500":""]),placeholder:"password"},null,2),[[f,s(n)]])]),r[11]||(r[11]=e("div",{class:"flex items-center justify-between"},[e("div",{class:"text-sm"},[e("a",{href:"#",class:"font-medium text-gray-600 hover:text-gray-500"}," Forgot your password? ")])],-1))],32),e("button",{onClick:v(x,["prevent"]),class:"mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},r[12]||(r[12]=[e("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[e("svg",{class:"h-5 w-5 text-gray-500 group-hover:text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])],-1),M(" register ")]))])]),j(b)])}}});export{W as default};
