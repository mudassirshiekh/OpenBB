"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),a=r(86010),o=r(67294),i=r(16550),s=r(48334);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:d}=(0,i.TH)(),u=d.replace(/\/v\d+/,""),p=!u.includes("/reference")&&!u.includes("/widgets-library/")&&!u.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":u.startsWith("/terminal")||u.startsWith("/pro")||u.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":u.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":u.startsWith("/sdk")||u.startsWith("/platform"),header_docs:!(u.startsWith("/terminal")||u.startsWith("/pro")||u.startsWith("/excel")||u.startsWith("/sdk")||u.startsWith("/platform")||u.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(s.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},34054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(26515),i=r(88828);const s={title:"Usage"},l=void 0,c={unversionedId:"bot/usage/index",id:"bot/usage/index",title:"Usage",description:"<NewReferenceCard",source:"@site/content/bot/usage/index.mdx",sourceDirName:"bot/usage",slug:"/bot/usage/",permalink:"/bot/usage/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/usage/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1701978080,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Telegram bot",permalink:"/bot/installation/telegram"},next:{title:"Discord",permalink:"/bot/usage/discord"}},d={},u=[],p={toc:u},m="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"Usage | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Discord",description:"Learn how to use the OpenBB Bot on Discord",url:"usage/discord",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"Telegram",description:"Learn how to use the OpenBB Bot on Telegram",url:"usage/telegram",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"Customizing",description:"Customize your OpenBB Bot experience through the OpenBB Hub",url:"usage/customizing",mdxType:"NewReferenceCard"})))}b.isMDXComponent=!0}}]);