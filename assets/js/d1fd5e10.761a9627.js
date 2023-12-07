"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99332],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),p=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(r),s=a,k=u["".concat(o,".").concat(s)]||u[s]||c[s]||l;return r?n.createElement(k,i(i({ref:e},m),{},{components:r})):n.createElement(k,i({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[u]="string"==typeof t?t:a,i[1]=d;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},21033:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"filings",description:"Learn how to retrieve company filings data such as date, type of document, and link. Understand the available parameters to filter the data, including symbol, limit, provider, type, and page. Explore the different fields in the data, such as ticker symbol, accepted date, and final link.",keywords:["company filings","data entries","symbol","limit","provider","type","page","cik","date","link","ticker symbol","accepted date","final link","report date","act","items","primary doc description","primary doc","accession number","file number","film number","is inline xbrl","is xbrl","size","complete submission url","filing detail url","xml"]},i=void 0,d={unversionedId:"excel/reference/library/equity/fundamental/filings",id:"excel/reference/library/equity/fundamental/filings",title:"filings",description:"Learn how to retrieve company filings data such as date, type of document, and link. Understand the available parameters to filter the data, including symbol, limit, provider, type, and page. Explore the different fields in the data, such as ticker symbol, accepted date, and final link.",source:"@site/content/excel/reference/library/equity/fundamental/filings.md",sourceDirName:"excel/reference/library/equity/fundamental",slug:"/excel/reference/library/equity/fundamental/filings",permalink:"/excel/reference/library/equity/fundamental/filings",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/equity/fundamental/filings.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1701978080,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"filings",description:"Learn how to retrieve company filings data such as date, type of document, and link. Understand the available parameters to filter the data, including symbol, limit, provider, type, and page. Explore the different fields in the data, such as ticker symbol, accepted date, and final link.",keywords:["company filings","data entries","symbol","limit","provider","type","page","cik","date","link","ticker symbol","accepted date","final link","report date","act","items","primary doc description","primary doc","accession number","file number","film number","is inline xbrl","is xbrl","size","complete submission url","filing detail url","xml"]},sidebar:"tutorialSidebar",previous:{title:"employee_count",permalink:"/excel/reference/library/equity/fundamental/employee_count"},next:{title:"historical_attributes",permalink:"/excel/reference/library/equity/fundamental/historical_attributes"}},o={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:p},u="wrapper";function c(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Company Filings. Company filings data."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.FILINGS(required;[optional])\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, sec"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"form_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the SEC filing form. (provider: sec)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"thea_enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Return filings that have been read by Intrinio's Thea NLP. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cik"),(0,a.kt)("td",{parentName:"tr",align:null},"Any"),(0,a.kt)("td",{parentName:"tr",align:null},"Lookup filings by Central Index Key (CIK) instead of by symbol. (provider: sec)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"use_cache"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to use cache.  If True, cache will store for one day. (provider: sec)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return-data"},"Return Data"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cik"),(0,a.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Filing date of the SEC report.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accepted_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Accepted date of the SEC report.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"report_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the SEC report.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_url"),(0,a.kt)("td",{parentName:"tr",align:null},"URL to the filing page on the SEC site.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"report_url"),(0,a.kt)("td",{parentName:"tr",align:null},"URL to the actual report on the SEC site.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"Intrinio ID of the filing. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period_end_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Ending date of the fiscal period for the filing. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sec_unique_id"),(0,a.kt)("td",{parentName:"tr",align:null},"SEC unique ID of the filing. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"instance_url"),(0,a.kt)("td",{parentName:"tr",align:null},"URL for the XBRL filing for the report. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"industry_group"),(0,a.kt)("td",{parentName:"tr",align:null},"Industry group of the company. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"industry_category"),(0,a.kt)("td",{parentName:"tr",align:null},"Industry category of the company. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"report_date"),(0,a.kt)("td",{parentName:"tr",align:null},"The date of the filing. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"act"),(0,a.kt)("td",{parentName:"tr",align:null},"The SEC Act number. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"items"),(0,a.kt)("td",{parentName:"tr",align:null},"The SEC Item numbers. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"primary_doc_description"),(0,a.kt)("td",{parentName:"tr",align:null},"The description of the primary document. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"primary_doc"),(0,a.kt)("td",{parentName:"tr",align:null},"The filename of the primary document. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accession_number"),(0,a.kt)("td",{parentName:"tr",align:null},"The accession number. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"file_number"),(0,a.kt)("td",{parentName:"tr",align:null},"The file number. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"film_number"),(0,a.kt)("td",{parentName:"tr",align:null},"The film number. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"is_inline_xbrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the filing is an inline XBRL filing. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"is_xbrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the filing is an XBRL filing. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},"The size of the filing. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"complete_submission_url"),(0,a.kt)("td",{parentName:"tr",align:null},"The URL to the complete filing submission. (provider: sec)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"xml"),(0,a.kt)("td",{parentName:"tr",align:null},"The URL to the primary XML document. (provider: sec)")))))}c.isMDXComponent=!0}}]);