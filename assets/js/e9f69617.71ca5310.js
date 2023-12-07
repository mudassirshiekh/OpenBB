"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26309],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),s=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(r),m=n,y=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return r?a.createElement(y,l(l({ref:e},u),{},{components:r})):a.createElement(y,l({ref:e},u))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[c]="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34188:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"tmc",description:"Learn about Treasury Constant Maturity and how to get data for it. Understand constant maturity calculation and the use of Treasury yield curve and Treasury securities. Explore parameters like start date, end date, maturity, and provider. Get a list of results, warnings, and metadata along with a chart depicting the Treasury Constant Maturity rate.",keywords:["Treasury Constant Maturity","data","U.S. Treasury","yield curve","Treasury securities","start date","end date","maturity","provider","results","warnings","chart","metadata","rate"]},l=void 0,o={unversionedId:"excel/reference/library/fixedincome/spreads/tmc",id:"excel/reference/library/fixedincome/spreads/tmc",title:"tmc",description:"Learn about Treasury Constant Maturity and how to get data for it. Understand constant maturity calculation and the use of Treasury yield curve and Treasury securities. Explore parameters like start date, end date, maturity, and provider. Get a list of results, warnings, and metadata along with a chart depicting the Treasury Constant Maturity rate.",source:"@site/content/excel/reference/library/fixedincome/spreads/tmc.md",sourceDirName:"excel/reference/library/fixedincome/spreads",slug:"/excel/reference/library/fixedincome/spreads/tmc",permalink:"/excel/reference/library/fixedincome/spreads/tmc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/fixedincome/spreads/tmc.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1701978080,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"tmc",description:"Learn about Treasury Constant Maturity and how to get data for it. Understand constant maturity calculation and the use of Treasury yield curve and Treasury securities. Explore parameters like start date, end date, maturity, and provider. Get a list of results, warnings, and metadata along with a chart depicting the Treasury Constant Maturity rate.",keywords:["Treasury Constant Maturity","data","U.S. Treasury","yield curve","Treasury securities","start date","end date","maturity","provider","results","warnings","chart","metadata","rate"]},sidebar:"tutorialSidebar",previous:{title:"spreads",permalink:"/excel/reference/library/fixedincome/spreads/"},next:{title:"tmc_effr",permalink:"/excel/reference/library/fixedincome/spreads/tmc_effr"}},d={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],u={toc:s},c="wrapper";function p(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Treasury Constant Maturity.  Get data for 10-Year Treasury Constant Maturity Minus Selected Treasury Constant Maturity. Constant maturity is the theoretical value of a U.S. Treasury that is based on recent values of auctioned U.S. Treasuries. The value is obtained by the U.S. Treasury on a daily basis through interpolation of the Treasury yield curve which, in turn, is based on closing bid-yields of actively-traded Treasury securities."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.FIXEDINCOME.SPREADS.TMC(required;[optional])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fred"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maturity"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"The maturity"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rate"),(0,n.kt)("td",{parentName:"tr",align:null},"TreasuryConstantMaturity Rate.")))))}p.isMDXComponent=!0}}]);