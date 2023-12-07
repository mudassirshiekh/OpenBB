"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(39960),n=r(86010),o=r(67294),l=r(16550),s=r(48334);function i(e){let{title:t,url:r,description:i,command:c}=e;const{pathname:d}=(0,l.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(a.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(s.Z,{className:"ml-auto mr-4"})),i?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},i):null)}},92394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(26515);const l={},s="Realestate",i={unversionedId:"terminal/reference/alt/realestate/index",id:"terminal/reference/alt/realestate/index",title:"Realestate",description:"Commands",source:"@site/content/terminal/reference/alt/realestate/index.mdx",sourceDirName:"terminal/reference/alt/realestate",slug:"/terminal/reference/alt/realestate/",permalink:"/terminal/reference/alt/realestate/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/alt/realestate/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"slopes",permalink:"/terminal/reference/alt/covid/slopes"},next:{title:"regionstats",permalink:"/terminal/reference/alt/realestate/regionstats"}},c={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"realestate"},"Realestate"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(o.Z,{title:"Regionstats",description:"Select the region and date range you want see stats for. [Source: UK Land Registry]",url:"/terminal/reference/alt/realestate/regionstats",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Sales",description:"Select the postcode you want to see sold house price data for. [Source: UK Land Registry]",url:"/terminal/reference/alt/realestate/sales",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Townsales",description:"Select the town and date range you want to see sold house price data for. [Source: UK Land Registry]",url:"/terminal/reference/alt/realestate/townsales",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);