"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=d(r),u=i,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:i,c[1]=a;for(var d=2;d<o;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),i=r(86010),o=r(67294),c=r(16550),a=r(48334);function s(e){let{title:t,url:r,description:s,command:d}=e;const{pathname:l}=(0,c.TH)(),m=l.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,i.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(a.Z,{className:"ml-auto mr-4"})),s?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},99126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905)),o=r(26515);const c={},a="Discovery",s={unversionedId:"terminal/reference/stocks/disc/index",id:"terminal/reference/stocks/disc/index",title:"Discovery",description:"Commands",source:"@site/content/terminal/reference/stocks/disc/index.mdx",sourceDirName:"terminal/reference/stocks/disc",slug:"/terminal/reference/stocks/disc/",permalink:"/terminal/reference/stocks/disc/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/disc/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"spos",permalink:"/terminal/reference/stocks/dps/spos"},next:{title:"active",permalink:"/terminal/reference/stocks/disc/active"}},d={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"discovery"},"Discovery"),(0,i.kt)("h3",{id:"commands"},"Commands"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(o.Z,{title:"Active",description:"Print up to 25 top most actively traded intraday tickers. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/disc/active",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Arkord",description:"Orders by ARK Investment Management LLC - https://ark-funds.com/. [Source: https://cathiesark.com]",url:"/terminal/reference/stocks/disc/arkord",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Asc",description:"Print up to 25 small cap stocks with earnings growth rates better than 25%. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/disc/asc",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Divcal",description:"Get dividend calendar for selected date",url:"/terminal/reference/stocks/disc/divcal",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Filings",description:"The most-recent filings submitted to the SEC",url:"/terminal/reference/stocks/disc/filings",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Fipo",description:"Future IPOs dates. [Source: https://finnhub.io]",url:"/terminal/reference/stocks/disc/fipo",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Gainers",description:"Print up to 25 top gainers. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/disc/gainers",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Gtech",description:"Print up to 25 top tech stocks with revenue and earnings growth in excess of 25%. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/disc/gtech",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Heatmap",description:"Get the SP 500 heatmap from finviz and display in interactive treemap",url:"/terminal/reference/stocks/disc/heatmap",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Hotpenny",description:"Provides top penny stocks from various websites. [Source: Yfinance]",url:"/terminal/reference/stocks/disc/hotpenny",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Losers",description:"Print up to 25 top losers. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/disc/losers",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Lowfloat",description:"Print top stocks with lowest float. LowFloat.com provides a convenient sorted database of stocks which have a...",url:"/terminal/reference/stocks/disc/lowfloat",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Pipo",description:"Past IPOs dates. [Source: https://finnhub.io]",url:"/terminal/reference/stocks/disc/pipo",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Rtat",description:"Tracking over $30B USD/day of individual investors trades, RTAT gives a daily view into retail activity and...",url:"/terminal/reference/stocks/disc/rtat",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Trending",description:"Trending news articles. [Source: Seeking Alpha]",url:"/terminal/reference/stocks/disc/trending",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Ugs",description:"Print up to 25 undervalued stocks with revenue and earnings growth in excess of 25%. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/disc/ugs",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Ulc",description:"Print up to 25 potentially undervalued large cap stocks. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/disc/ulc",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Upcoming",description:"Upcoming earnings release dates. [Source: Seeking Alpha]",url:"/terminal/reference/stocks/disc/upcoming",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);