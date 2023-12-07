"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),s=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(m,".").concat(d)]||p[d]||c[d]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},7334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const i={title:"atr",description:"This page provides comprehensive information about the Average True Range (ATR) including its usage, implementation, and parameters. It serves as a key resource for understanding ATR, a widely used tool for measuring volatility in market prices.",keywords:["average true range","volatility measure","ATR usage","ATR parameters","ema","sma","wma","hma","zlma","n_length","s_mamode","n_offset"]},o=void 0,m={unversionedId:"terminal/reference/etf/ta/atr",id:"terminal/reference/etf/ta/atr",title:"atr",description:"This page provides comprehensive information about the Average True Range (ATR) including its usage, implementation, and parameters. It serves as a key resource for understanding ATR, a widely used tool for measuring volatility in market prices.",source:"@site/content/terminal/reference/etf/ta/atr.md",sourceDirName:"terminal/reference/etf/ta",slug:"/terminal/reference/etf/ta/atr",permalink:"/terminal/reference/etf/ta/atr",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/ta/atr.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1701978080,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"atr",description:"This page provides comprehensive information about the Average True Range (ATR) including its usage, implementation, and parameters. It serves as a key resource for understanding ATR, a widely used tool for measuring volatility in market prices.",keywords:["average true range","volatility measure","ATR usage","ATR parameters","ema","sma","wma","hma","zlma","n_length","s_mamode","n_offset"]},sidebar:"tutorialSidebar",previous:{title:"aroon",permalink:"/terminal/reference/etf/ta/aroon"},next:{title:"bbands",permalink:"/terminal/reference/etf/ta/bbands"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"etf /ta/atr - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Averge True Range is used to measure volatility, especially volatility caused by gaps or limit moves."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"atr [-l N_LENGTH] [-m {ema,sma,wma,hma,zlma}] [-o N_OFFSET]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"n_length"),(0,n.kt)("td",{parentName:"tr",align:null},"-l  --length"),(0,n.kt)("td",{parentName:"tr",align:null},"Window length"),(0,n.kt)("td",{parentName:"tr",align:null},"14"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"s_mamode"),(0,n.kt)("td",{parentName:"tr",align:null},"-m  --mamode"),(0,n.kt)("td",{parentName:"tr",align:null},"mamode"),(0,n.kt)("td",{parentName:"tr",align:null},"ema"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"ema, sma, wma, hma, zlma")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"n_offset"),(0,n.kt)("td",{parentName:"tr",align:null},"-o  --offset"),(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);