"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46035],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=n,u=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?o.createElement(u,i(i({ref:r},m),{},{components:t})):o.createElement(u,i({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var o=t(39960),n=t(86010),a=t(67294),i=t(16550),l=t(48334);function s(e){let{title:r,url:t,description:s,command:c}=e;const{pathname:m}=(0,i.TH)(),p=m.replace(/\/v\d+/,""),d=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return a.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),d&&a.createElement(l.Z,{className:"ml-auto mr-4"})),s?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},36338:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=t(87462),n=(t(67294),t(3905)),a=t(26515);const i={},l="Parameters",s={unversionedId:"terminal/reference/portfolio/po/parameters/index",id:"terminal/reference/portfolio/po/parameters/index",title:"Parameters",description:"Commands",source:"@site/content/terminal/reference/portfolio/po/parameters/index.mdx",sourceDirName:"terminal/reference/portfolio/po/parameters",slug:"/terminal/reference/portfolio/po/parameters/",permalink:"/terminal/reference/portfolio/po/parameters/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/parameters/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Portfolio Optimization",permalink:"/terminal/reference/portfolio/po/"},next:{title:"arg",permalink:"/terminal/reference/portfolio/po/parameters/arg"}},c={},m=[{value:"Commands",id:"commands",level:3}],p={toc:m},d="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parameters"},"Parameters"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"Arg",description:"Set a different value for one of the available arguments.",url:"/terminal/reference/portfolio/po/parameters/arg",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Load",description:"Select parameter file to use (ini or xlsx). The OpenBB Parameters Template can be found inside the Portfolio...",url:"/terminal/reference/portfolio/po/parameters/load",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Save",description:"Save portfolio risk parameters (ini or xlsx)",url:"/terminal/reference/portfolio/po/parameters/save",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Set",description:"Select one of the portfolio optimization models",url:"/terminal/reference/portfolio/po/parameters/set",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);