"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49841],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(t),p=a,h=m["".concat(l,".").concat(p)]||m[p]||f[p]||i;return t?n.createElement(h,o(o({ref:r},d),{},{components:t})):n.createElement(h,o({ref:r},d))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),i=t(67294),o=t(16550),c=t(48334);function l(e){let{title:r,url:t,description:l,command:s}=e;const{pathname:d}=(0,o.TH)(),m=d.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&i.createElement(c.Z,{className:"ml-auto mr-4"})),l?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},40077:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),i=t(26515);const o={},c="Technical Analysis",l={unversionedId:"terminal/reference/forex/ta/index",id:"terminal/reference/forex/ta/index",title:"Technical Analysis",description:"Commands",source:"@site/content/terminal/reference/forex/ta/index.mdx",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/",permalink:"/terminal/reference/forex/ta/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/ta/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trades",permalink:"/terminal/reference/forex/oanda/trades"},next:{title:"ad",permalink:"/terminal/reference/forex/ta/ad"}},s={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},f="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"technical-analysis"},"Technical Analysis"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Ad",description:"The Accumulation/Distribution Line is similar to the On Balance Volume (OBV), which sums the volume times +1/-1...",url:"/terminal/reference/forex/ta/ad",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Adx",description:"The ADX is a Welles Wilder style moving average of the Directional Movement Index (DX). The values range from 0...",url:"/terminal/reference/forex/ta/adx",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Aroon",description:"The word aroon is Sanskrit for 'dawn's early light.' The Aroon indicator attempts to show when a new trend is...",url:"/terminal/reference/forex/ta/aroon",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Bbands",description:"Bollinger Bands consist of three lines. The middle band is a simple moving average (generally 20 periods) of the...",url:"/terminal/reference/forex/ta/bbands",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cci",description:"The CCI is designed to detect beginning and ending market trends. The range of 100 to -100 is the normal trading...",url:"/terminal/reference/forex/ta/cci",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cg",description:"The Center of Gravity indicator, in short, is used to anticipate future price movements and to trade on price...",url:"/terminal/reference/forex/ta/cg",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Donchian",description:"Donchian Channels are three lines generated by moving average calculations that comprise an indicator formed by...",url:"/terminal/reference/forex/ta/donchian",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Ema",description:"The Exponential Moving Average is a staple of technical analysis and is used in countless technical indicators....",url:"/terminal/reference/forex/ta/ema",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Fib",description:"Calculates the fibonacci retracement levels",url:"/terminal/reference/forex/ta/fib",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Fisher",description:"The Fisher Transform is a technical indicator created by John F. Ehlers that converts prices into a Gaussian...",url:"/terminal/reference/forex/ta/fisher",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Load",description:"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using...",url:"/terminal/reference/forex/ta/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Macd",description:"The Moving Average Convergence Divergence (MACD) is the difference between two Exponential Moving Averages. The...",url:"/terminal/reference/forex/ta/macd",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Obv",description:"The On Balance Volume (OBV) is a cumulative total of the up and down volume. When the close is higher than the...",url:"/terminal/reference/forex/ta/obv",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Rsi",description:"The Relative Strength Index (RSI) calculates a ratio of the recent upward price movements to the absolute price...",url:"/terminal/reference/forex/ta/rsi",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Sma",description:"Moving Averages are used to smooth the data in an array to help eliminate noise and identify trends. The Simple...",url:"/terminal/reference/forex/ta/sma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Stoch",description:"The Stochastic Oscillator measures where the close is in relation to the recent trading range. The values range...",url:"/terminal/reference/forex/ta/stoch",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Zlma",description:"The zero lag exponential moving average (ZLEMA) indicator was created by John Ehlers and Ric Way. The idea is do...",url:"/terminal/reference/forex/ta/zlma",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);