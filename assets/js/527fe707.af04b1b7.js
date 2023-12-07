"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48466],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(t),f=a,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return t?n.createElement(u,c(c({ref:r},s),{},{components:t})):n.createElement(u,c({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),o=t(67294),c=t(16550),i=t(48334);function l(e){let{title:r,url:t,description:l,command:d}=e;const{pathname:s}=(0,c.TH)(),p=s.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&o.createElement(i.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},194:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const c={},i="OnChain",l={unversionedId:"terminal/reference/crypto/onchain/index",id:"terminal/reference/crypto/onchain/index",title:"OnChain",description:"Commands",source:"@site/content/terminal/reference/crypto/onchain/index.mdx",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/",permalink:"/terminal/reference/crypto/onchain/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stats",permalink:"/terminal/reference/crypto/nft/stats"},next:{title:"address",permalink:"/terminal/reference/crypto/onchain/address"}},d={},s=[{value:"Commands",id:"commands",level:3}],p={toc:s},m="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onchain"},"OnChain"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Address",description:"Load address for further analysis. You can analyze account address, token address or transaction hash. [Source:...",url:"/terminal/reference/crypto/onchain/address",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Baas",description:"Display average bid, ask prices, spread for given crypto pair for chosen time period [Source:...",url:"/terminal/reference/crypto/onchain/baas",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Balance",description:"Display info about tokens on given ethereum blockchain balance. [Source: Ethplorer]",url:"/terminal/reference/crypto/onchain/balance",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Btcblockdata",description:"Display block data from Blockchain.com, [Source: https://api.blockchain.info/]",url:"/terminal/reference/crypto/onchain/btcblockdata",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Btccp",description:"Display BTC circulating supply [Source: https://api.blockchain.info/]",url:"/terminal/reference/crypto/onchain/btccp",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Btcct",description:"Display BTC confirmed transactions [Source: https://api.blockchain.info/]",url:"/terminal/reference/crypto/onchain/btcct",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Dvcp",description:"Display daily volume for given crypto pair [Source: https://graphql.bitquery.io/]",url:"/terminal/reference/crypto/onchain/dvcp",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Gwei",description:"Display ETH gas fees [Source: https://ethgasstation.info]",url:"/terminal/reference/crypto/onchain/gwei",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Hist",description:"Display history for given ethereum blockchain balance. e.g. 0x3cD751E6b0078Be393132286c442345e5DC49699 [Source:...",url:"/terminal/reference/crypto/onchain/hist",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Holders",description:"Display top ERC20 token holders: e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 [Source: Ethplorer]",url:"/terminal/reference/crypto/onchain/holders",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Hr",description:"Display mean hashrate for a certain blockchain (ETH or BTC) [Source: https://glassnode.org]",url:"/terminal/reference/crypto/onchain/hr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Info",description:"Display info about ERC20 token. e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 [Source: Ethplorer]",url:"/terminal/reference/crypto/onchain/info",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Lt",description:"Display Trades on Decentralized Exchanges aggregated by DEX or Month [Source: https://graphql.bitquery.io/]",url:"/terminal/reference/crypto/onchain/lt",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Prices",description:"Display token historical prices. e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 [Source: Ethplorer]",url:"/terminal/reference/crypto/onchain/prices",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Th",description:"Displays info about token history. e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 [Source: Ethplorer]",url:"/terminal/reference/crypto/onchain/th",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Top",description:"Display top ERC20 tokens. [Source: Ethplorer]",url:"/terminal/reference/crypto/onchain/top",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Topledger",description:"Display on-chain data from topledger. [Source: Topledger]",url:"/terminal/reference/crypto/onchain/topledger",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ttcp",description:"Display most traded crypto pairs on given decentralized exchange in chosen time period. [Source:...",url:"/terminal/reference/crypto/onchain/ttcp",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Tv",description:"Display token volume on different Decentralized Exchanges. [Source: https://graphql.bitquery.io/]",url:"/terminal/reference/crypto/onchain/tv",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Tx",description:"Display info ERC20 token transaction on ethereum blockchain. e.g....",url:"/terminal/reference/crypto/onchain/tx",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ueat",description:"Display number of unique ethereum addresses which made a transaction in given time interval, [Source:...",url:"/terminal/reference/crypto/onchain/ueat",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Whales",description:"Display crypto whales transactions. [Source: https://docs.whale-alert.io/]",url:"/terminal/reference/crypto/onchain/whales",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);