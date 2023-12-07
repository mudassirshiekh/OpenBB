"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59194],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=d(t),p=o,u=f["".concat(c,".").concat(p)]||f[p]||m[p]||a;return t?n.createElement(u,i(i({ref:r},l),{},{components:t})):n.createElement(u,i({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),o=t(86010),a=t(67294),i=t(16550),s=t(48334);function c(e){let{title:r,url:t,description:c,command:d}=e;const{pathname:l}=(0,i.TH)(),f=l.replace(/\/v\d+/,""),m=!f.includes("/reference")&&!f.includes("/widgets-library/")&&!f.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":f.startsWith("/terminal")||f.startsWith("/pro")||f.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":f.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":f.startsWith("/sdk")||f.startsWith("/platform"),header_docs:!(f.startsWith("/terminal")||f.startsWith("/pro")||f.startsWith("/excel")||f.startsWith("/sdk")||f.startsWith("/platform")||f.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&a.createElement(s.Z,{className:"ml-auto mr-4"})),c?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},98889:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const i={},s="forex",c={unversionedId:"sdk/reference/forex/index",id:"sdk/reference/forex/index",title:"forex",description:"Menus",source:"@site/content/sdk/reference/forex/index.mdx",sourceDirName:"sdk/reference/forex",slug:"/sdk/reference/forex/",permalink:"/sdk/reference/forex/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forex/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"weights",permalink:"/sdk/reference/etf/weights"},next:{title:"oanda",permalink:"/sdk/reference/forex/oanda/"}},d={},l=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],f={toc:l},m="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forex"},"forex"),(0,o.kt)("h3",{id:"menus"},"Menus"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Oanda",description:"candles, close, calendar, price, positionbook, openpositions, orderbook, listorders, cancel, summary, pending,...",url:"/sdk/reference/forex/oanda",mdxType:"ReferenceCard"})),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Candle",description:"Show candle plot for fx data.",url:"/sdk/reference/forex/candle",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Fwd",description:"Gets forward rates from fxempire",url:"/sdk/reference/forex/fwd",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Get Currency List",description:"Load AV currency codes from a local file.",url:"/sdk/reference/forex/get_currency_list",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Load",description:"Load forex for two given symbols.",url:"/sdk/reference/forex/load",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Quote",description:"Get forex quote.",url:"/sdk/reference/forex/quote",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);