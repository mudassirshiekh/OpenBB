"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3078],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(t),f=o,u=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return t?n.createElement(u,c(c({ref:r},l),{},{components:t})):n.createElement(u,c({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),o=t(86010),a=t(67294),c=t(16550),i=t(48334);function s(e){let{title:r,url:t,description:s,command:d}=e;const{pathname:l}=(0,c.TH)(),p=l.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&a.createElement(i.Z,{className:"ml-auto mr-4"})),s?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},32654:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const c={},i="crypto",s={unversionedId:"sdk/reference/crypto/index",id:"sdk/reference/crypto/index",title:"crypto",description:"Menus",source:"@site/content/sdk/reference/crypto/index.mdx",sourceDirName:"sdk/reference/crypto",slug:"/sdk/reference/crypto/",permalink:"/sdk/reference/crypto/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ycrv",permalink:"/sdk/reference/fixedincome/ycrv"},next:{title:"tools",permalink:"/sdk/reference/crypto/tools/"}},d={},l=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],p={toc:l},m="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crypto"},"crypto"),(0,o.kt)("h3",{id:"menus"},"Menus"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Tools",description:"apy, il",url:"/sdk/reference/crypto/tools",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Dd",description:"oi, trading_pair_info, close, mcapdom, coin_market_chart, gov, social, stats, twitter, atl, ob, fr,...",url:"/sdk/reference/crypto/dd",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ov",description:"stables, crypto_hack, crypto_hacks, categories, altindex, indexes, exrates, exchanges, exmarkets, cbpairs, wf,...",url:"/sdk/reference/crypto/ov",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Defi",description:"sreturn, newsletters, stvl, validators, gdapps, aterra, vaults, ayr, gacc, sratio, dtvl, anchor_data,...",url:"/sdk/reference/crypto/defi",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Nft",description:"stats, fp, collections",url:"/sdk/reference/crypto/nft",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Onchain",description:"baas, tx, holders, hist, dvcp, token_decimals, top, dex_trades_monthly, th, tv, btc_transac, gwei, query_graph,...",url:"/sdk/reference/crypto/onchain",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Disc",description:"nft_mktp, coins, categories_keys, trending, dapp_chains, dapp_categories, dapp_metrics, fees, top_coins, gainers,...",url:"/sdk/reference/crypto/disc",mdxType:"ReferenceCard"})),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Candle",description:"Plot candle chart from dataframe. [Source: Binance]",url:"/sdk/reference/crypto/candle",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Chart",description:"Load data for Technical Analysis",url:"/sdk/reference/crypto/chart",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Find",description:"Find similar coin by coin name,symbol or id.",url:"/sdk/reference/crypto/find",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Load",description:"Load crypto currency to get data for",url:"/sdk/reference/crypto/load",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Price",description:"Displays live price from pyth live feed [Source: https://pyth.network/]",url:"/sdk/reference/crypto/price",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);