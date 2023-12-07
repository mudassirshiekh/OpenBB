"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43476],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,u=m["".concat(d,".").concat(f)]||m[f]||p[f]||a;return t?n.createElement(u,i(i({ref:r},l),{},{components:t})):n.createElement(u,i({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(39960),o=t(86010),a=t(67294),i=t(16550),c=t(48334);function d(e){let{title:r,url:t,description:d,command:s}=e;const{pathname:l}=(0,i.TH)(),m=l.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(c.Z,{className:"ml-auto mr-4"})),d?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},d):null)}},71386:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const i={},c="Due Diligence",d={unversionedId:"terminal/reference/crypto/dd/index",id:"terminal/reference/crypto/dd/index",title:"Due Diligence",description:"Commands",source:"@site/content/terminal/reference/crypto/dd/index.mdx",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/",permalink:"/terminal/reference/crypto/dd/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"unitroot",permalink:"/terminal/reference/crypto/qa/unitroot"},next:{title:"active",permalink:"/terminal/reference/crypto/dd/active"}},s={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"due-diligence"},"Due Diligence"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Active",description:"Display active blockchain addresses over time [Source: https://glassnode.org]",url:"/terminal/reference/crypto/dd/active",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ath",description:"All time high data for loaded coin",url:"/terminal/reference/crypto/dd/ath",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Atl",description:"All time low data for loaded coin",url:"/terminal/reference/crypto/dd/atl",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Balance",description:"Display balance",url:"/terminal/reference/crypto/dd/balance",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Basic",description:"Get basic information for coin. Like: name, symbol, rank, type, description, platform, proof_type, contract,...",url:"/terminal/reference/crypto/dd/basic",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Bc",description:"Blockchain explorers URLs for loaded coin. Those are sites like etherescan.io or polkascan.io in which you can...",url:"/terminal/reference/crypto/dd/bc",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Change",description:"Display active blockchain addresses over time [Source: https://glassnode.org] Note that free api keys only allow...",url:"/terminal/reference/crypto/dd/change",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Desc",description:"Display project description [Source: Token Terminal]",url:"/terminal/reference/crypto/dd/desc",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Dev",description:"Developers data for loaded coin. If the development data is available you can see how the code development of...",url:"/terminal/reference/crypto/dd/dev",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Eb",description:"Display active blockchain addresses over time [Source: https://glassnode.org] Note that free api keys only allow...",url:"/terminal/reference/crypto/dd/eb",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Events",description:"Show information about most important coins events. Most of coins doesn't have any events. You can display only...",url:"/terminal/reference/crypto/dd/events",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ex",description:"Get all exchanges found for given coin. You can display only top N number of exchanges with --top parameter. You...",url:"/terminal/reference/crypto/dd/ex",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Fr",description:"Display asset's fundraising details [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/fr",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Fundrate",description:"Displays funding rate by exchange for a certain asset [Source: https://coinglass.github.io/API-Reference/]",url:"/terminal/reference/crypto/dd/fundrate",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Funot",description:"Display fundamental metric over time [Source: Token Terminal]",url:"/terminal/reference/crypto/dd/funot",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Gh",description:"Display github activity over time for a given coin. Github activity includes the following actions: creating a...",url:"/terminal/reference/crypto/dd/gh",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Gov",description:"Display asset's governance [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/gov",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Info",description:"Shows basic information about loaded coin like: Name, Symbol, Description, Market Cap, Public Interest, Supply,...",url:"/terminal/reference/crypto/dd/info",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Inv",description:"Display asset's investors [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/inv",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Links",description:"Display asset's links [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/links",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Liquidations",description:"Displays liquidations data for the loaded crypto asset [Source: https://coinglass.github.io/API-...",url:"/terminal/reference/crypto/dd/liquidations",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Load",description:"Load crypto currency to perform analysis on. Yahoo Finance is used as default source. Other sources can be used...",url:"/terminal/reference/crypto/dd/load",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Market",description:"Market data for loaded coin. There you find metrics like: Market Cap, Supply, Circulating Supply, Price, Volume...",url:"/terminal/reference/crypto/dd/market",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Mcapdom",description:"Display asset's percentage share of total crypto circulating market cap [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/mcapdom",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Mkt",description:"Get all markets found for given coin. You can display only N number of markets with --limt parameter. You can...",url:"/terminal/reference/crypto/dd/mkt",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Mt",description:"Display messari timeseries [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/mt",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"News",description:"Display most recent news on the given coin from CryptoPanic aggregator platform. [Source: https://cryptopanic.com/]",url:"/terminal/reference/crypto/dd/news",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Nonzero",description:"Display addresses with nonzero assets in a certain blockchain [Source: https://glassnode.org] Note that free api...",url:"/terminal/reference/crypto/dd/nonzero",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ob",description:"Get the order book for selected coin",url:"/terminal/reference/crypto/dd/ob",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Oi",description:"Displays open interest by exchange for a certain asset [Source: https://coinglass.github.io/API-Reference/]",url:"/terminal/reference/crypto/dd/oi",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Pi",description:"Display asset's project info [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/pi",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ps",description:"Get price and supply related metrics for given coin.",url:"/terminal/reference/crypto/dd/ps",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Rm",description:"Display asset's roadmap [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/rm",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Score",description:"In this view you can find different kind of scores for loaded coin. Those scores represents different rankings,...",url:"/terminal/reference/crypto/dd/score",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Social",description:"Shows social media corresponding to loaded coin. You can find there name of telegram channel, urls to twitter,...",url:"/terminal/reference/crypto/dd/social",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Stats",description:"Display coin stats",url:"/terminal/reference/crypto/dd/stats",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Team",description:"Display asset's team [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/team",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Tk",description:"Display asset's tokenomics [Source: https://messari.io]",url:"/terminal/reference/crypto/dd/tk",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Trades",description:"Get the latest trades for selected coin",url:"/terminal/reference/crypto/dd/trades",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Twitter",description:"Show last 10 tweets for given coin. You can display only N number of tweets with --limit parameter. You can sort...",url:"/terminal/reference/crypto/dd/twitter",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Web",description:"Websites found for given Coin. You can find there urls to homepage, forum, announcement site and others.",url:"/terminal/reference/crypto/dd/web",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);