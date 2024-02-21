"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>N});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),c=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,N=u["".concat(m,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(N,l(l({ref:t},s),{},{components:r})):n.createElement(N,l({ref:t},s))}));function N(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},73452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"macro",description:"Learn how to retrieve and manipulate a variety of macro data from numerous countries using various parameters and transformations. The page provides examples and details of the functionalities.",keywords:["macro data","Gross Domestic Product","Treasury Yields","Employment figures","Government components","Consumer and Producer Indices","EconDB","macro parameters","data transformation","macro programming","currency conversion"]},i=void 0,m={unversionedId:"terminal/reference/economy/macro",id:"terminal/reference/economy/macro",title:"macro",description:"Learn how to retrieve and manipulate a variety of macro data from numerous countries using various parameters and transformations. The page provides examples and details of the functionalities.",source:"@site/content/terminal/reference/economy/macro.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/macro",permalink:"/terminal/reference/economy/macro",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/macro.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708506338,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"macro",description:"Learn how to retrieve and manipulate a variety of macro data from numerous countries using various parameters and transformations. The page provides examples and details of the functionalities.",keywords:["macro data","Gross Domestic Product","Treasury Yields","Employment figures","Government components","Consumer and Producer Indices","EconDB","macro parameters","data transformation","macro programming","currency conversion"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/terminal/reference/economy/index_cmd"},next:{title:"map",permalink:"/terminal/reference/economy/map"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"economy /macro - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get a broad selection of macro data from one or multiple countries. This includes Gross Domestic Product (RGDP & GDP) and the underlying components, Treasury Yields (Y10YD & M3YD), Employment figures (URATE, EMP, AC0I0 and EMRATIO), Government components (e.g. GBAL & GREV), Consumer and Producer Indices (CPI & PPI) and a variety of other indicators. ","[Source: EconDB]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"macro [-p PARAMETERS] [-c COUNTRIES] [-t {,TPOP,TOYA,TUSD,TPGP,TNOR}] [--show {parameters,countries,transform}] [-s START_DATE] [-e END_DATE] [--convert {ALL,ARS,AUD,EUR,AZN,BDT,BYR,EUR,BTN,BAM,BWP,BRL,BGN,KHR,XAF,CAD,CLP,CNY,COP,HRK,EUR,CZK,DKK,DOP,EGP,EUR,EUR,EUR,EUR,EUR,EUR,HNL,HKD,HUF,INR,IDR,IRR,EUR,ILS,EUR,JPY,KZT,LAK,EUR,LBP,EUR,EUR,MKD,MYR,EUR,MXN,MNT,EUR,NZD,NGN,NOK,OMR,PKR,PAB,PYG,PEN,PHP,PLN,EUR,QAR,RON,RUB,SAR,RSD,SGD,EUR,EUR,ZAR,KRW,EUR,SEK,CHF,TWD,THB,TND,TRY,UAH,AED,GBP,USD,UZS,VEF,VND}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parameters"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --parameters"),(0,a.kt)("td",{parentName:"tr",align:null},"Abbreviation(s) of the Macro Economic data"),(0,a.kt)("td",{parentName:"tr",align:null},"CPI"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"countries"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --countries"),(0,a.kt)("td",{parentName:"tr",align:null},"The country or countries you wish to show data for"),(0,a.kt)("td",{parentName:"tr",align:null},"united_states"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transform"),(0,a.kt)("td",{parentName:"tr",align:null},"-t  --transform"),(0,a.kt)("td",{parentName:"tr",align:null},"The transformation to apply to the data"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},", TPOP, TOYA, TUSD, TPGP, TNOR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"--show"),(0,a.kt)("td",{parentName:"tr",align:null},"Show parameters and what they represent using 'parameters' or countries and their currencies using 'countries'"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"parameters, countries, transform")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_date"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,a.kt)("td",{parentName:"tr",align:null},"The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31)"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end_date"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,a.kt)("td",{parentName:"tr",align:null},"The end date of the data (format: YEAR-MONTH-DAY, i.e. 2021-06-20)"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currency"),(0,a.kt)("td",{parentName:"tr",align:null},"--convert"),(0,a.kt)("td",{parentName:"tr",align:null},"Convert the currency of the chosen country to a specified currency. To find the currency symbols use '--show countries'"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"dict_values(","['ALL', 'ARS', 'AUD', 'EUR', 'AZN', 'BDT', 'BYR', 'EUR', 'BTN', 'BAM', 'BWP', 'BRL', 'BGN', 'KHR', 'XAF', 'CAD', 'CLP', 'CNY', 'COP', 'HRK', 'EUR', 'CZK', 'DKK', 'DOP', 'EGP', 'EUR', 'EUR', 'EUR', 'EUR', 'EUR', 'EUR', 'HNL', 'HKD', 'HUF', 'INR', 'IDR', 'IRR', 'EUR', 'ILS', 'EUR', 'JPY', 'KZT', 'LAK', 'EUR', 'LBP', 'EUR', 'EUR', 'MKD', 'MYR', 'EUR', 'MXN', 'MNT', 'EUR', 'NZD', 'NGN', 'NOK', 'OMR', 'PKR', 'PAB', 'PYG', 'PEN', 'PHP', 'PLN', 'EUR', 'QAR', 'RON', 'RUB', 'SAR', 'RSD', 'SGD', 'EUR', 'EUR', 'ZAR', 'KRW', 'EUR', 'SEK', 'CHF', 'TWD', 'THB', 'TND', 'TRY', 'UAH', 'AED', 'GBP', 'USD', 'UZS', 'VEF', 'VND']",")")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Mar 15, 07:20 (\ud83e\udd8b) /economy/ $ macro -p CONF -c netherlands,germany,france -s 2005-01-01 -e 2022-01-01\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/159249787-a030cd2c-0b29-4522-a1a9-db0245d55d9f.png",alt:"macro conf netherlands germany france"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/159251277-9381cc0a-7efe-41ce-af93-41d832103a1e.png",alt:"oil production macro"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/159253210-c7135b12-b04a-49e4-8896-d03e4c25f520.png",alt:"argentina gross domestic product in dollars"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);