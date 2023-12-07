"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55601],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(35742);function l(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},25117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const o={title:"season",description:"Meta description for the 'season' function in Docusaurus. This function helps to display and understand the seasonality for a given column in a dataset, providing options for customization such as time lag, maximal lag order, and confidence interval.",keywords:["docusaurus","season","dataset","seasonality","time lag","maximal lag order","confidence interval","data visualization"]},i=void 0,s={unversionedId:"terminal/reference/forecast/season",id:"terminal/reference/forecast/season",title:"season",description:"Meta description for the 'season' function in Docusaurus. This function helps to display and understand the seasonality for a given column in a dataset, providing options for customization such as time lag, maximal lag order, and confidence interval.",source:"@site/content/terminal/reference/forecast/season.md",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/season",permalink:"/terminal/reference/forecast/season",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forecast/season.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1701978080,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"season",description:"Meta description for the 'season' function in Docusaurus. This function helps to display and understand the seasonality for a given column in a dataset, providing options for customization such as time lag, maximal lag order, and confidence interval.",keywords:["docusaurus","season","dataset","seasonality","time lag","maximal lag order","confidence interval","data visualization"]},sidebar:"tutorialSidebar",previous:{title:"rwd",permalink:"/terminal/reference/forecast/rwd"},next:{title:"seasonalnaive",permalink:"/terminal/reference/forecast/seasonalnaive"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"forecast /season - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The seasonality for a given column"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"season [-d {AAPL.date,AAPL.open,AAPL.high,AAPL.low,AAPL.close,AAPL.adj_close,AAPL.volume,AAPL.dividends,AAPL.stock_splits,AAPL.returns,AAPL.logret,AAPL.logprice}] [-m M] [--max_lag MAX_LAG] [-a ALPHA]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"values"),(0,r.kt)("td",{parentName:"tr",align:null},"-d  --dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset.column values to be displayed in a plot"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"AAPL.date, AAPL.open, AAPL.high, AAPL.low, AAPL.close, AAPL.adj_close, AAPL.volume, AAPL.dividends, AAPL.stock_splits, AAPL.returns, AAPL.logret, AAPL.logprice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m"),(0,r.kt)("td",{parentName:"tr",align:null},"-m"),(0,r.kt)("td",{parentName:"tr",align:null},"A time lag to highlight on the plot"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_lag"),(0,r.kt)("td",{parentName:"tr",align:null},"--max_lag"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximal lag order to consider"),(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"-a  --alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"The confidence interval to display"),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"(\ud83e\udd8b) /forecast/ $ load TSLA.csv\n\n(\ud83e\udd8b) /forecast/ $ season TSLA.volume\nTODO: screen shot\n")),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);