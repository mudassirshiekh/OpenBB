"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81088],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},95397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const s={title:"fisher",description:"The page provides a comprehensive guide to the Fisher Transform, a technical indicator by John F. Ehlers. It helps in highlighting extreme prices based on recent values, identifying turning points, showing the trend and isolating price waves. The functions, usage and parameters of the Fisher Transform are elaborately discussed.",keywords:["Fisher Transform","technical indicator","John F. Ehlers","Gaussian normal distribution","extreme prices","turning points","price of an asset","trend indication","price waves","Fisher usage","Fisher parameters"]},o=void 0,l={unversionedId:"terminal/reference/stocks/ta/fisher",id:"terminal/reference/stocks/ta/fisher",title:"fisher",description:"The page provides a comprehensive guide to the Fisher Transform, a technical indicator by John F. Ehlers. It helps in highlighting extreme prices based on recent values, identifying turning points, showing the trend and isolating price waves. The functions, usage and parameters of the Fisher Transform are elaborately discussed.",source:"@site/content/terminal/reference/stocks/ta/fisher.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/fisher",permalink:"/terminal/reference/stocks/ta/fisher",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ta/fisher.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708506338,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"fisher",description:"The page provides a comprehensive guide to the Fisher Transform, a technical indicator by John F. Ehlers. It helps in highlighting extreme prices based on recent values, identifying turning points, showing the trend and isolating price waves. The functions, usage and parameters of the Fisher Transform are elaborately discussed.",keywords:["Fisher Transform","technical indicator","John F. Ehlers","Gaussian normal distribution","extreme prices","turning points","price of an asset","trend indication","price waves","Fisher usage","Fisher parameters"]},sidebar:"tutorialSidebar",previous:{title:"fib",permalink:"/terminal/reference/stocks/ta/fib"},next:{title:"hma",permalink:"/terminal/reference/stocks/ta/hma"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],h={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"stocks /ta/fisher - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The Fisher Transform is a technical indicator created by John F. Ehlers that converts prices into a Gaussian normal distribution.1 The indicator highlights when prices have moved to an extreme, based on recent prices. This may help in spotting turning points in the price of an asset. It also helps show the trend and isolate the price waves within a trend."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"fisher [-l N_LENGTH]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_length"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --length"),(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"14"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154310853-0abf6cea-71ca-4f07-b009-282c58ab9cfc.png",alt:"fisher"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);