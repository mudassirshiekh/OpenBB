"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(35742);function i(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},14949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const o={title:"metric",description:"This page provides detailed instructions on how to display a chosen metric for different periods. It discusses parameters such as volatility, sharpe, sortino, etc. and how to set the risk-free rate for calculations.",keywords:["metric","risk free rate","volatility","sharpe ratio","sortino ratio","max drawdown","R square","skew","kurtosis","gain to pain","tracker","information ratio","tail ratio","common sense ratio","jensens alpha","calmar ratio","kelly criterion","payoff ratio","profit factor"]},l=void 0,s={unversionedId:"terminal/reference/portfolio/metric",id:"terminal/reference/portfolio/metric",title:"metric",description:"This page provides detailed instructions on how to display a chosen metric for different periods. It discusses parameters such as volatility, sharpe, sortino, etc. and how to set the risk-free rate for calculations.",source:"@site/content/terminal/reference/portfolio/metric.md",sourceDirName:"terminal/reference/portfolio",slug:"/terminal/reference/portfolio/metric",permalink:"/terminal/reference/portfolio/metric",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/metric.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1701978080,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"metric",description:"This page provides detailed instructions on how to display a chosen metric for different periods. It discusses parameters such as volatility, sharpe, sortino, etc. and how to set the risk-free rate for calculations.",keywords:["metric","risk free rate","volatility","sharpe ratio","sortino ratio","max drawdown","R square","skew","kurtosis","gain to pain","tracker","information ratio","tail ratio","common sense ratio","jensens alpha","calmar ratio","kelly criterion","payoff ratio","profit factor"]},sidebar:"tutorialSidebar",previous:{title:"maxdd",permalink:"/terminal/reference/portfolio/maxdd"},next:{title:"mret",permalink:"/terminal/reference/portfolio/mret"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"portfolio /metric - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Display metric of choice for different periods"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"metric [-m METRIC] [-r RISK_FREE_RATE]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metric"),(0,n.kt)("td",{parentName:"tr",align:null},"-m  --metric"),(0,n.kt)("td",{parentName:"tr",align:null},"Set metric of choice"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"volatility, sharpe, sortino, maxdrawdown, rsquare, skew, kurtosis, gaintopain, trackerr, information, tail, commonsense, jensens, calmar, kelly, payoff, profitfactor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,n.kt)("td",{parentName:"tr",align:null},"-r  --rfr"),(0,n.kt)("td",{parentName:"tr",align:null},"Set risk free rate for calculations."),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}f.isMDXComponent=!0}}]);