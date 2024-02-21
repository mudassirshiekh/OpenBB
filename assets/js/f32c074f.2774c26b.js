"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4343],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),d=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=d(t.components);return r.createElement(m.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),k=d(a),o=n,f=k["".concat(m,".").concat(o)]||k[o]||N[o]||l;return a?r.createElement(f,i(i({ref:e},g),{},{components:a})):r.createElement(f,i({ref:e},g))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[k]="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},9226:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>o,frontMatter:()=>i,metadata:()=>m,toc:()=>g});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const i={title:"ETF",description:"This guide introduces the ETF menu, in the OpenBB Terminal. The features provide methods for searching and comparing funds across the ETF universe.",keywords:["ETF","overview","holdings","weights","news","compare companies","discovery","technical indicators","forecasting","export to Excel","exchange traded funds","stock market","financial tool","portfolio","stock chart","Vanguard Total Stock Market Index Fund","VTI","load ETF","ETF chart","trendlines"]},p=void 0,m={unversionedId:"terminal/menus/etf",id:"terminal/menus/etf",title:"ETF",description:"This guide introduces the ETF menu, in the OpenBB Terminal. The features provide methods for searching and comparing funds across the ETF universe.",source:"@site/content/terminal/menus/etf.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/etf",permalink:"/terminal/menus/etf",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/etf.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708506338,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"ETF",description:"This guide introduces the ETF menu, in the OpenBB Terminal. The features provide methods for searching and comparing funds across the ETF universe.",keywords:["ETF","overview","holdings","weights","news","compare companies","discovery","technical indicators","forecasting","export to Excel","exchange traded funds","stock market","financial tool","portfolio","stock chart","Vanguard Total Stock Market Index Fund","VTI","load ETF","ETF chart","trendlines"]},sidebar:"tutorialSidebar",previous:{title:"Economy",permalink:"/terminal/menus/economy"},next:{title:"Fixed Income",permalink:"/terminal/menus/fixedincome"}},d={},g=[{value:"Usage",id:"usage",level:2},{value:"Search",id:"search",level:3},{value:"Load",id:"load",level:3},{value:"Overview",id:"overview",level:3},{value:"Holdings",id:"holdings",level:3},{value:"Compare",id:"compare",level:3},{value:"Disc",id:"disc",level:3}],k={toc:g},N="wrapper";function o(t){let{components:e,...a}=t;return(0,n.kt)(N,(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"ETF - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The ETF menu features provide methods for searching and comparing funds across the ETF universe."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Enter by typing ",(0,n.kt)("inlineCode",{parentName:"p"},"etf")," from the main menu of the Terminal, or with the absolute path:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/etf\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f50269a8-8ebc-4ef9-bd37-4c9e15774005",alt:"Screenshot 2023-11-02 at 5 43 12\u202fPM"})),(0,n.kt)("h3",{id:"search"},"Search"),(0,n.kt)("p",null,"Find ETFs by fuzzy query using the ",(0,n.kt)("inlineCode",{parentName:"p"},"search")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/etf search --name SPDR S&P\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/984e0cbb-bced-4610-8a55-3262fdf8ea2a",alt:"Screenshot 2023-11-02 at 5 50 19\u202fPM"})),(0,n.kt)("h3",{id:"load"},"Load"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," command to place a symbol into memory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/etf/load xhb\n")),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"overview")," shows a table of general statistics."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/etf/load xhb/overview\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"XHB"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Assets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$1.21B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Expense Ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.35%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PE Ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11.24")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Shares Out"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dividend (ttm)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$0.74")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dividend Yield"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.99%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ex-Dividend Date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 18, 2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8,880,265")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Open"),(0,n.kt)("td",{parentName:"tr",align:"left"},"75.04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Previous Close"),(0,n.kt)("td",{parentName:"tr",align:"left"},"73.82")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"52-Week Low"),(0,n.kt)("td",{parentName:"tr",align:"left"},"54.10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"52-Week High"),(0,n.kt)("td",{parentName:"tr",align:"left"},"85.13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Beta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Holdings"),(0,n.kt)("td",{parentName:"tr",align:"left"},"37")))),(0,n.kt)("h3",{id:"holdings"},"Holdings"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"holdings")," command provides a current view of the loaded ETF."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/etf/load xhb/holdings\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"% Of Etf"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Shares"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WSM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Williams-Sonoma, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.50%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"321673")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CSL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Carlisle Companies Incorporated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.35%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"183841")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LII"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Lennox International Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.12%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"119330")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MAS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Masco Corporation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.99%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"821783")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trane Technologies plc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.98%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"224389")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PHM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PulteGroup, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.92%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"572445")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ALLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allegion plc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.92%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"427461")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LEN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Lennar Corporation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.87%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"389388")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DHI"),(0,n.kt)("td",{parentName:"tr",align:"left"},"D.R. Horton, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.83%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"393696")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Floor & Decor Holdings, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.78%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"493049")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TOL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Toll Brothers, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.76%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"571043")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Home Depot, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.72%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"140504")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NVR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NVR, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.70%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7339")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"JCI"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Johnson Controls International plc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.68%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"805731")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LOW"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Lowe's Companies, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.55%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"199799")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TPX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tempur Sealy International, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.51%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"942711")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WMS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Advanced Drainage Systems, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.50%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"351760")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CARR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Carrier Global Corporation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.50%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"787745")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Owens Corning"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.41%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"323306")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BLDR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Builders FirstSource, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.34%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"330150")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AOS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A. O. Smith Corporation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.33%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"511883")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FBIN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fortune Brands Innovations, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.17%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"609787")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TREX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trex Company, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.79%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"532594")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BLD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TopBuild Corp."),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.64%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"123797")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TMHC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Taylor Morrison Home Corporation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.07%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"580878")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TPH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tri Pointe Homes, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.39%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"596693")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MHO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"M/I Homes, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.39%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"181673")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MDC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"M.D.C. Holdings, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.26%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"356746")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IBP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Installed Building Products, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.21%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"116492")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GRBK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Green Brick Partners, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.03%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"285076")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LGIH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LGI Homes, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.02%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"116166")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SKY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Skyline Champion Corporation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.01%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"185257")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CVCO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cavco Industries, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.76%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32610")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CCS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Century Communities, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.67%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"117325")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DFH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Dream Finders Homes, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.27%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"146550")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STATE STREET INSTITUTIONAL LIQ"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.09%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"922512")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"US DOLLAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-2.36%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-25351025")))),(0,n.kt)("h3",{id:"compare"},"Compare"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"compare")," command accepts a comma-separated list of symbols for comparing overview metrics."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"compare -e xhb,pkb,rez,homz\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"XHB"),(0,n.kt)("th",{parentName:"tr",align:"left"},"PKB"),(0,n.kt)("th",{parentName:"tr",align:"left"},"REZ"),(0,n.kt)("th",{parentName:"tr",align:"left"},"HOMZ"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Assets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$1.21B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$208.81M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$590.71M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$33.85M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Expense Ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.35%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.60%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.48%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.30%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PE Ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"21.51"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Shares Out"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dividend (ttm)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$0.74"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$0.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$2.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"$0.80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dividend Yield"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.99%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.45%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.43%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.30%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ex-Dividend Date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 18, 2023"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 18, 2023"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 26, 2023"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oct 17, 2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8,880,265"),(0,n.kt)("td",{parentName:"tr",align:"left"},"13,224"),(0,n.kt)("td",{parentName:"tr",align:"left"},"48,825"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3,926")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Open"),(0,n.kt)("td",{parentName:"tr",align:"left"},"75.04"),(0,n.kt)("td",{parentName:"tr",align:"left"},"50.59"),(0,n.kt)("td",{parentName:"tr",align:"left"},"63.05"),(0,n.kt)("td",{parentName:"tr",align:"left"},"33.90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Previous Close"),(0,n.kt)("td",{parentName:"tr",align:"left"},"73.82"),(0,n.kt)("td",{parentName:"tr",align:"left"},"49.83"),(0,n.kt)("td",{parentName:"tr",align:"left"},"62.31"),(0,n.kt)("td",{parentName:"tr",align:"left"},"33.47")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"52-Week Low"),(0,n.kt)("td",{parentName:"tr",align:"left"},"54.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"37.54"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60.64"),(0,n.kt)("td",{parentName:"tr",align:"left"},"29.89")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"52-Week High"),(0,n.kt)("td",{parentName:"tr",align:"left"},"85.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"57.25"),(0,n.kt)("td",{parentName:"tr",align:"left"},"78.33"),(0,n.kt)("td",{parentName:"tr",align:"left"},"40.68")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Beta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Holdings"),(0,n.kt)("td",{parentName:"tr",align:"left"},"37"),(0,n.kt)("td",{parentName:"tr",align:"left"},"32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"43"),(0,n.kt)("td",{parentName:"tr",align:"left"},"102")))),(0,n.kt)("h3",{id:"disc"},"Disc"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"disc")," sub-menu has the movers of the day."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"gainers"),(0,n.kt)("li",{parentName:"ul"},"decliners"),(0,n.kt)("li",{parentName:"ul"},"active")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/etf/disc/gainers\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Chg"),(0,n.kt)("th",{parentName:"tr",align:"right"},"%Chg"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Vol"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Regional Banks Bull 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"53.11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.74"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17.06"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.4M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AXS 2X Innovation ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.91"),(0,n.kt)("td",{parentName:"tr",align:"left"},"165.0K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"T-Rex 2X Long Tesla Daily Target ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.29"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.08"),(0,n.kt)("td",{parentName:"tr",align:"left"},"177.6K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GraniteShares 1.5x Long Coinbase Daily ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.07"),(0,n.kt)("td",{parentName:"tr",align:"left"},"244.7K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MicroSectors U.S. Big Banks Index 3X Leveraged ETN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.46"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.4M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdvisorShares MSOS 2x Daily ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.72"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"371.6K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Homebuilders & Supplies Bull 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"53.53"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.35"),(0,n.kt)("td",{parentName:"tr",align:"left"},"716.9K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GraniteShares 1.75x Long TSLA Daily ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.99"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.31"),(0,n.kt)("td",{parentName:"tr",align:"left"},"78.2K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily South Korea Bull 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.69"),(0,n.kt)("td",{parentName:"tr",align:"left"},"447.4K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily TSLA Bull 1.5X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.41"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.34"),(0,n.kt)("td",{parentName:"tr",align:"left"},"14.7M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Valkyrie Bitcoin Miners ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.59"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.29"),(0,n.kt)("td",{parentName:"tr",align:"left"},"232.1K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily S&P 500 High Beta Bull 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.96"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.91"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.07"),(0,n.kt)("td",{parentName:"tr",align:"left"},"332.5K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MicroSectors Oil & Gas Exp. & Prod. 3x Leveraged ETN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"41.87"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.405"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.85"),(0,n.kt)("td",{parentName:"tr",align:"left"},"209.5K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Real Estate Bull 3x Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.78"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.55"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.83"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.9M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Retail Bull 3x Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.53"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.64"),(0,n.kt)("td",{parentName:"tr",align:"left"},"607.1K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ARK Innovation ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"38.28"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.41"),(0,n.kt)("td",{parentName:"tr",align:"left"},"28.6M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Small Cap Bull 3x Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.86"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.06"),(0,n.kt)("td",{parentName:"tr",align:"left"},"22.6M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GraniteShares 1.25x Long Tesla Daily ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.1015"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.89"),(0,n.kt)("td",{parentName:"tr",align:"left"},"66.9K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ProShares UltraPro Russell2000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"29.24"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.74"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Consumer Discretionary Bull 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.73"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.69"),(0,n.kt)("td",{parentName:"tr",align:"left"},"58.6K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VanEck Digital Transformation ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.43"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.54"),(0,n.kt)("td",{parentName:"tr",align:"left"},"263.3K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ARK Next Generation Internet ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"55.72"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.26"),(0,n.kt)("td",{parentName:"tr",align:"left"},"410.6K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Financial Bull 3x Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"58.32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.86"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.09"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Semiconductor Bull 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17.08"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.08"),(0,n.kt)("td",{parentName:"tr",align:"left"},"90.0M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ark Fintech Innovation ETF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.43"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.88"),(0,n.kt)("td",{parentName:"tr",align:"left"},"561.6K")))))}o.isMDXComponent=!0}}]);