"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51849],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,u=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(u,o(o({ref:r},m),{},{components:t})):n.createElement(u,o({ref:r},m))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),a=t(86010),i=t(67294),o=t(16550),c=t(48334);function s(e){let{title:r,url:t,description:s,command:l}=e;const{pathname:m}=(0,o.TH)(),d=m.replace(/\/v\d+/,""),p=!d.includes("/reference")&&!d.includes("/widgets-library/")&&!d.includes("/data_models");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":d.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":d.startsWith("/sdk")||d.startsWith("/platform"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&i.createElement(c.Z,{className:"ml-auto mr-4"})),s?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},27349:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=t(87462),a=(t(67294),t(3905)),i=t(26515);const o={},c="Screener",s={unversionedId:"terminal/reference/stocks/screener/index",id:"terminal/reference/stocks/screener/index",title:"Screener",description:"Commands",source:"@site/content/terminal/reference/stocks/screener/index.mdx",sourceDirName:"terminal/reference/stocks/screener",slug:"/terminal/reference/stocks/screener/",permalink:"/terminal/reference/stocks/screener/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/screener/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"zlma",permalink:"/terminal/reference/stocks/ta/zlma"},next:{title:"financial",permalink:"/terminal/reference/stocks/screener/financial"}},l={},m=[{value:"Commands",id:"commands",level:3}],d={toc:m},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"screener"},"Screener"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Financial",description:"Prints financial data of the companies that meet the pre-set filtering.",url:"/terminal/reference/stocks/screener/financial",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Overview",description:"Prints overview data of the companies that meet the pre-set filtering.",url:"/terminal/reference/stocks/screener/overview",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Ownership",description:"Prints ownership data of the companies that meet the pre-set filtering.",url:"/terminal/reference/stocks/screener/ownership",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Performance",description:"Prints performance data of the companies that meet the pre-set filtering.",url:"/terminal/reference/stocks/screener/performance",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Set",description:"Set preset from custom and default ones.",url:"/terminal/reference/stocks/screener/set",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Technical",description:"Prints technical data of the companies that meet the pre-set filtering.",url:"/terminal/reference/stocks/screener/technical",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Valuation",description:"Prints valuation data of the companies that meet the pre-set filtering.",url:"/terminal/reference/stocks/screener/valuation",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"View",description:"View available presets under presets folder.",url:"/terminal/reference/stocks/screener/view",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);