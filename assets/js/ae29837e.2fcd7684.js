"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=n,f=s["".concat(o,".").concat(d)]||s[d]||p[d]||l;return r?a.createElement(f,u(u({ref:t},m),{},{components:r})):a.createElement(f,u({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,u=new Array(l);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:n,u[1]=i;for(var c=2;c<l;c++)u[c]=r[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},4001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>o,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const u={title:"cusum",description:"Learn about the Cumulative Sum Algorithm (CUSUM) used to detect abrupt changes in data. Understand its usage, parameters, and visualize how it works.",keywords:["cusum","cumulative sum algorithm","data change detection","usage of cusum","parameters of cusum","threshold","drift"]},i=void 0,o={unversionedId:"terminal/reference/crypto/qa/cusum",id:"terminal/reference/crypto/qa/cusum",title:"cusum",description:"Learn about the Cumulative Sum Algorithm (CUSUM) used to detect abrupt changes in data. Understand its usage, parameters, and visualize how it works.",source:"@site/content/terminal/reference/crypto/qa/cusum.md",sourceDirName:"terminal/reference/crypto/qa",slug:"/terminal/reference/crypto/qa/cusum",permalink:"/terminal/reference/crypto/qa/cusum",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/qa/cusum.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708506338,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"cusum",description:"Learn about the Cumulative Sum Algorithm (CUSUM) used to detect abrupt changes in data. Understand its usage, parameters, and visualize how it works.",keywords:["cusum","cumulative sum algorithm","data change detection","usage of cusum","parameters of cusum","threshold","drift"]},sidebar:"tutorialSidebar",previous:{title:"cdf",permalink:"/terminal/reference/crypto/qa/cdf"},next:{title:"decompose",permalink:"/terminal/reference/crypto/qa/decompose"}},c={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:m},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"crypto /qa/cusum - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Cumulative sum algorithm (CUSUM) to detect abrupt changes in data"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"cusum [-t THRESHOLD] [-d DRIFT]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"-t  --threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"802.440771484375"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"drift"),(0,n.kt)("td",{parentName:"tr",align:null},"-d  --drift"),(0,n.kt)("td",{parentName:"tr",align:null},"drift"),(0,n.kt)("td",{parentName:"tr",align:null},"401.2203857421875"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154306207-d68f53f4-2f9a-4c1a-8e0e-b83d49938759.png",alt:"cusum"})),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);