"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13162],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,u=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(u,s(s({ref:r},m),{},{components:t})):n.createElement(u,s({ref:r},m))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),o=t(86010),a=t(67294),s=t(16550),i=t(48334);function c(e){let{title:r,url:t,description:c,command:l}=e;const{pathname:m}=(0,s.TH)(),d=m.replace(/\/v\d+/,""),p=!d.includes("/reference")&&!d.includes("/widgets-library/")&&!d.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":d.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":d.startsWith("/sdk")||d.startsWith("/platform"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(i.Z,{className:"ml-auto mr-4"})),c?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},44634:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const s={},i="sec",c={unversionedId:"platform/reference/regulators/sec/index",id:"platform/reference/regulators/sec/index",title:"sec",description:"Commands",source:"@site/content/platform/reference/regulators/sec/index.mdx",sourceDirName:"platform/reference/regulators/sec",slug:"/platform/reference/regulators/sec/",permalink:"/platform/reference/regulators/sec/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/regulators/sec/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"regulators",permalink:"/platform/reference/regulators/"},next:{title:"cik_map",permalink:"/platform/reference/regulators/sec/cik_map"}},l={},m=[{value:"Commands",id:"commands",level:3}],d={toc:m},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sec"},"sec"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Cik Map",description:"Get the CIK number corresponding to a ticker symbol",url:"/platform/reference/regulators/sec/cik_map",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Institutions Search",description:"Look up institutions regulated by the SEC",url:"/platform/reference/regulators/sec/institutions_search",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Rss Litigation",description:"The RSS feed provides links to litigation releases concerning civil lawsuits brought by the Commission in federal",url:"/platform/reference/regulators/sec/rss_litigation",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Schema Files",description:"Get lists of SEC XML schema files by year",url:"/platform/reference/regulators/sec/schema_files",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Sic Search",description:"Search for Industry Titles, Reporting Office, and SIC Codes",url:"/platform/reference/regulators/sec/sic_search",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Symbol Map",description:"Get the ticker symbol corresponding to a company's CIK",url:"/platform/reference/regulators/sec/symbol_map",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);