"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(r),h=i,u=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(u,o(o({ref:t},c),{},{components:r})):n.createElement(u,o({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),i=r(35742);function a(e){let{title:t}=e;return n.createElement(i.Z,null,n.createElement("title",null,t))}},92043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905)),a=r(88828);const o={title:"highiv",description:"The /highiv command in trading pulls the 15 highest IV30 equity stocks by 30 day Implied Volatility and is perfect for traders aiming to take advantage of high-potential-return investments and capitalize on market movements.",keywords:["high IV30 equity stocks","30 day Implied Volatility","expected volatility","high potential return investments","/highiv command","capitalize on market movements","stock trading","trading command","investment strategies"]},l=void 0,s={unversionedId:"bot/reference/telegram/options/highiv",id:"bot/reference/telegram/options/highiv",title:"highiv",description:"The /highiv command in trading pulls the 15 highest IV30 equity stocks by 30 day Implied Volatility and is perfect for traders aiming to take advantage of high-potential-return investments and capitalize on market movements.",source:"@site/content/bot/reference/telegram/options/highiv.md",sourceDirName:"bot/reference/telegram/options",slug:"/bot/reference/telegram/options/highiv",permalink:"/bot/reference/telegram/options/highiv",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/options/highiv.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1710940729,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"highiv",description:"The /highiv command in trading pulls the 15 highest IV30 equity stocks by 30 day Implied Volatility and is perfect for traders aiming to take advantage of high-potential-return investments and capitalize on market movements.",keywords:["high IV30 equity stocks","30 day Implied Volatility","expected volatility","high potential return investments","/highiv command","capitalize on market movements","stock trading","trading command","investment strategies"]},sidebar:"tutorialSidebar",previous:{title:"gamma",permalink:"/bot/reference/telegram/options/gamma"},next:{title:"hist",permalink:"/bot/reference/telegram/options/hist"}},m={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{title:"options: highiv - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"This command retrieves the 15 highest IV30 equity stocks by 30 day Implied Volatility. The IV30 metric is a measure of the expected volatility of a stock over the next 30 days. This command is ideal for users looking to make investments with high potential return and is useful for traders looking to capitalize on market movements."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/highiv\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"This command has no parameters"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/highiv\n")),(0,i.kt)("hr",null))}h.isMDXComponent=!0}}]);