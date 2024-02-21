"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9186],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),l=t(48334);function c(e){let{title:r,url:t,description:c,command:s}=e;const{pathname:d}=(0,i.TH)(),p=d.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":p.startsWith("/excel"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&o.createElement(l.Z,{className:"ml-auto mr-4"})),c?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},77139:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},l="equity",c={unversionedId:"platform/reference/equity/index",id:"platform/reference/equity/index",title:"equity",description:"Menus",source:"@site/content/platform/reference/equity/index.mdx",sourceDirName:"platform/reference/equity",slug:"/platform/reference/equity/",permalink:"/platform/reference/equity/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708506338,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"unit_root",permalink:"/platform/reference/econometrics/unit_root"},next:{title:"calendar",permalink:"/platform/reference/equity/calendar/"}},s={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],p={toc:d},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"equity"},"equity"),(0,a.kt)("h3",{id:"menus"},"Menus"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Calendar",description:"splits, dividend, earnings, ipo",url:"/platform/reference/equity/calendar",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Discovery",description:"losers, top_retail, filings, undervalued_large_caps, upcoming_release_days, gainers, active, undervalued_growth,...",url:"/platform/reference/equity/discovery",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ownership",description:"share_statistics, insider_trading, major_holders, institutional",url:"/platform/reference/equity/ownership",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Shorts",description:"short_interest, short_volume, fails_to_deliver",url:"/platform/reference/equity/shorts",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Estimates",description:"historical, analyst_search, price_target, consensus",url:"/platform/reference/equity/estimates",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Price",description:"historical, quote, nbbo, performance",url:"/platform/reference/equity/price",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Compare",description:"groups, peers",url:"/platform/reference/equity/compare",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Fundamental",description:"revenue_per_segment, management, income_growth, dividends, trailing_dividend_yield, overview,...",url:"/platform/reference/equity/fundamental",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Darkpool",description:"otc",url:"/platform/reference/equity/darkpool",mdxType:"ReferenceCard"})),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Market Snapshots",description:"Get a current, complete, market snapshot",url:"/platform/reference/equity/market_snapshots",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Profile",description:"Equity Info",url:"/platform/reference/equity/profile",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Screener",description:"Equity Screen",url:"/platform/reference/equity/screener",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Search",description:"Equity Search",url:"/platform/reference/equity/search",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);