"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},37062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const o={title:"revenue",description:"Governments collect revenues mainly for two purposes to finance the goods and services they provide to citizens and businesses, and to fulfil their redistributive role",keywords:["economy","revenue"]},i=void 0,u={unversionedId:"terminal/reference/economy/revenue",id:"terminal/reference/economy/revenue",title:"revenue",description:"Governments collect revenues mainly for two purposes to finance the goods and services they provide to citizens and businesses, and to fulfil their redistributive role",source:"@site/content/terminal/reference/economy/revenue.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/revenue",permalink:"/terminal/reference/economy/revenue",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/revenue.md",tags:[],version:"current",frontMatter:{title:"revenue",description:"Governments collect revenues mainly for two purposes to finance the goods and services they provide to citizens and businesses, and to fulfil their redistributive role",keywords:["economy","revenue"]},sidebar:"tutorialSidebar",previous:{title:"plot",permalink:"/terminal/reference/economy/plot"},next:{title:"rgdp",permalink:"/terminal/reference/economy/rgdp"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"economy /revenue - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Governments collect revenues mainly for two purposes: to finance the goods and services they provide to citizens and businesses, and to fulfil their redistributive role. Comparing levels of government revenues across countries provides an indication of the importance of the government sector in the economy in terms of available financial resources."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"revenue [-c COUNTRIES] [-u {PC_GDP,THND_USD_CAP}] [-s START_DATE] [-e END_DATE]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"countries"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --countries"),(0,a.kt)("td",{parentName:"tr",align:null},"Countries to get data for"),(0,a.kt)("td",{parentName:"tr",align:null},"united_states"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"units"),(0,a.kt)("td",{parentName:"tr",align:null},"-u  --units"),(0,a.kt)("td",{parentName:"tr",align:null},"Use either THND_USD_CAP (thousands of USD per capity) or PC_GDP (percentage of GDP)"),(0,a.kt)("td",{parentName:"tr",align:null},"PC_GDP"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"PC_GDP, THND_USD_CAP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_date"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,a.kt)("td",{parentName:"tr",align:null},"Start date of data, in YYYY-MM-DD format"),(0,a.kt)("td",{parentName:"tr",align:null},"1994-02-21"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end_date"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,a.kt)("td",{parentName:"tr",align:null},"End date of data, in YYYY-MM-DD format"),(0,a.kt)("td",{parentName:"tr",align:null},"2024-02-21"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);