"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88784],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(f,s(s({ref:t},p),{},{components:o})):r.createElement(f,s({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},88828:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(67294),n=o(35742);function a(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},89:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=o(87462),n=(o(67294),o(3905)),a=o(88828);const s={title:"list",description:"Learn about the 'autopost list' command which allows you to view all webhook feeds associated with a channel set up for automatic posting. Find out how and when it can be used, with examples provided.",keywords:["autopost list","webhooks","automatic posting","channel"]},i=void 0,l={unversionedId:"bot/reference/discord/autopost/list",id:"bot/reference/discord/autopost/list",title:"list",description:"Learn about the 'autopost list' command which allows you to view all webhook feeds associated with a channel set up for automatic posting. Find out how and when it can be used, with examples provided.",source:"@site/content/bot/reference/discord/autopost/list.md",sourceDirName:"bot/reference/discord/autopost",slug:"/bot/reference/discord/autopost/list",permalink:"/bot/reference/discord/autopost/list",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/autopost/list.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1701978080,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"list",description:"Learn about the 'autopost list' command which allows you to view all webhook feeds associated with a channel set up for automatic posting. Find out how and when it can be used, with examples provided.",keywords:["autopost list","webhooks","automatic posting","channel"]},sidebar:"tutorialSidebar",previous:{title:"commands add",permalink:"/bot/reference/discord/autopost/add"},next:{title:"commands manage",permalink:"/bot/reference/discord/autopost/remove"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{title:"autopost: list - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows users to view all webhook feeds associated with a particular channel that have been set up for automatic posting. It produces a list of all webhooks that have been configured to post content to the channel automatically, as well as information such as when they are scheduled."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/autopost list\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This command has no parameters"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/autopost list\n")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);