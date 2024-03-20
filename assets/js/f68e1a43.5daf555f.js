"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8871],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return t?n.createElement(u,i(i({ref:r},d),{},{components:t})):n.createElement(u,i({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),c=t(48334);function l(e){let{title:r,url:t,description:l,command:s}=e;const{pathname:d}=(0,i.TH)(),p=d.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":p.startsWith("/excel"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&o.createElement(c.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},34473:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},c="Reference",l={unversionedId:"platform/reference/index",id:"platform/reference/index",title:"Reference",description:"<ReferenceCard",source:"@site/content/platform/reference/index.mdx",sourceDirName:"platform/reference",slug:"/platform/reference/",permalink:"/platform/reference/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/index.mdx",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1710940729,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Commitment of Traders",permalink:"/platform/usage/commitment_of_traders"},next:{title:"Currency",permalink:"/platform/reference/currency/"}},s={},d=[],p={toc:d},m="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference"},"Reference"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Crypto",description:"search, historical",url:"/platform/reference/crypto",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Currency",description:"search, snapshots, historical",url:"/platform/reference/currency",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Derivatives",description:"historical, curve, chains, unusual",url:"/platform/reference/derivatives",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Economy",description:"fred_regional, fred_search, long_term_interest_rate, fred_series, cpi, composite_leading_indicator, unemployment, money_measures,...",url:"/platform/reference/economy",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Equity",description:"search, market_snapshots, screener, profile, historical, quote, performance, nbbo,...",url:"/platform/reference/equity",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Etf",description:"holdings_performance, search, holdings, price_performance, historical, holdings_date, sectors, equity_exposure,...",url:"/platform/reference/etf",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Fixedincome",description:"sofr, moody, spot_rates, commercial_paper, hqm, ice_bofa, tcm_effr, treasury_effr,...",url:"/platform/reference/fixedincome",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Index",description:"available, market, constituents, historical",url:"/platform/reference/index",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"News",description:"world, company",url:"/platform/reference/news",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Regulators",description:"symbol_map, sic_search, cik_map, institutions_search, schema_files, rss_litigation",url:"/platform/reference/regulators",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);