"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),a=r(86010),o=r(67294),i=r(16550),d=r(48334);function s(e){let{title:t,url:r,description:s,command:c}=e;const{pathname:l}=(0,i.TH)(),m=l.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(d.Z,{className:"ml-auto mr-4"})),s?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},78321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),o=r(26515);const i={},d="qa",s={unversionedId:"sdk/reference/qa/index",id:"sdk/reference/qa/index",title:"qa",description:"Commands",source:"@site/content/sdk/reference/qa/index.mdx",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/",permalink:"/sdk/reference/qa/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/qa/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"yret",permalink:"/sdk/reference/portfolio/yret"},next:{title:"acf",permalink:"/sdk/reference/qa/acf"}},c={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qa"},"qa"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Acf",description:"Plots Auto and Partial Auto Correlation of returns and change in returns",url:"/sdk/reference/qa/acf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Bw",description:"Plots box and whisker plots",url:"/sdk/reference/qa/bw",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Calculate Adjusted Var",description:"Calculates VaR, which is adjusted for skew and kurtosis (Cornish-Fischer-Expansion)",url:"/sdk/reference/qa/calculate_adjusted_var",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cdf",description:"Plots Cumulative Distribution Function",url:"/sdk/reference/qa/cdf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cusum",description:"Plots Cumulative sum algorithm (CUSUM) to detect abrupt changes in data",url:"/sdk/reference/qa/cusum",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Decompose",description:"Perform seasonal decomposition",url:"/sdk/reference/qa/decompose",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Es",description:"Gets Expected Shortfall for specified stock dataframe.",url:"/sdk/reference/qa/es",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Hist",description:"Plots histogram of data",url:"/sdk/reference/qa/hist",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Kurtosis",description:"Kurtosis Indicator",url:"/sdk/reference/qa/kurtosis",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Line",description:"Display line plot of data",url:"/sdk/reference/qa/line",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Normality",description:"Look at the distribution of returns and generate statistics on the relation to the normal curve.",url:"/sdk/reference/qa/normality",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Omega",description:"Get the omega series",url:"/sdk/reference/qa/omega",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Qqplot",description:"Plots QQ plot for data against normal quantiles",url:"/sdk/reference/qa/qqplot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Quantile",description:"Overlay Median & Quantile",url:"/sdk/reference/qa/quantile",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rolling",description:"Return rolling mean and standard deviation",url:"/sdk/reference/qa/rolling",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sharpe",description:"Calculates the sharpe ratio",url:"/sdk/reference/qa/sharpe",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Skew",description:"Skewness Indicator",url:"/sdk/reference/qa/skew",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sortino",description:"Calculates the sortino ratio",url:"/sdk/reference/qa/sortino",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Spread",description:"Standard Deviation and Variance",url:"/sdk/reference/qa/spread",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Summary",description:"Print summary statistics",url:"/sdk/reference/qa/summary",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Unitroot",description:"Calculate test statistics for unit roots",url:"/sdk/reference/qa/unitroot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Var",description:"Gets value at risk for specified stock dataframe.",url:"/sdk/reference/qa/var",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);