"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(39960),a=r(86010),o=r(67294),c=r(16550),s=r(48334);function i(e){let{title:t,url:r,description:i,command:l}=e;const{pathname:d}=(0,c.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(s.Z,{className:"ml-auto mr-4"})),i?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},i):null)}},2215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(26515);const c={},s="Trading Hours",i={unversionedId:"terminal/reference/stocks/th/index",id:"terminal/reference/stocks/th/index",title:"Trading Hours",description:"Commands",source:"@site/content/terminal/reference/stocks/th/index.mdx",sourceDirName:"terminal/reference/stocks/th",slug:"/terminal/reference/stocks/th/",permalink:"/terminal/reference/stocks/th/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/th/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"warnings",permalink:"/terminal/reference/stocks/fa/warnings"},next:{title:"all",permalink:"/terminal/reference/stocks/th/all"}},l={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trading-hours"},"Trading Hours"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"All",description:"Show all exchanges",url:"/terminal/reference/stocks/th/all",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Closed",description:"Show currently closed exchanges",url:"/terminal/reference/stocks/th/closed",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Exchange",description:"Select the exchange you want see open hours for",url:"/terminal/reference/stocks/th/exchange",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Holidays",description:"Select the exchange and year you want see holidays for",url:"/terminal/reference/stocks/th/holidays",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Open",description:"Show currently open exchanges",url:"/terminal/reference/stocks/th/open",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Symbol",description:"Select the symbol you wish to trade",url:"/terminal/reference/stocks/th/symbol",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);