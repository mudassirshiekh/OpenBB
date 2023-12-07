"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24206],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=d(a),c=n,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||l;return a?r.createElement(h,o(o({ref:e},m),{},{components:a})):r.createElement(h,o({ref:e},m))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28112:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"balance_growth",description:"Learn about balance sheet statement growth, equity data for a company, parameters like symbol, limit, and provider, and explore the returned results, warnings, charts, and metadata. Retrieve detailed data on various balance sheet growth metrics like cash and cash equivalents, short-term investments, inventory, total assets, total liabilities, and more.",keywords:["balance sheet statement growth","company balance sheet growth","equity data","symbol","limit parameter","provider parameter","results","balance sheet growth","warnings","chart","metadata","data","cash and cash equivalents","short-term investments","net receivables","inventory","current assets","property, plant, and equipment","goodwill","intangible assets","long-term investments","tax assets","other non-current assets","total non-current assets","other assets","total assets","accounts payable","short-term debt","total current liabilities","long-term debt","non-current deferred revenue","non-current deferred tax liabilities","total non-current liabilities","common stock","retained earnings","accumulated other comprehensive income/loss","total stockholders' equity","total liabilities and stockholders' equity","total investments","total debt","net debt"]},o=void 0,i={unversionedId:"excel/reference/library/equity/fundamental/balance_growth",id:"excel/reference/library/equity/fundamental/balance_growth",title:"balance_growth",description:"Learn about balance sheet statement growth, equity data for a company, parameters like symbol, limit, and provider, and explore the returned results, warnings, charts, and metadata. Retrieve detailed data on various balance sheet growth metrics like cash and cash equivalents, short-term investments, inventory, total assets, total liabilities, and more.",source:"@site/content/excel/reference/library/equity/fundamental/balance_growth.md",sourceDirName:"excel/reference/library/equity/fundamental",slug:"/excel/reference/library/equity/fundamental/balance_growth",permalink:"/excel/reference/library/equity/fundamental/balance_growth",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/equity/fundamental/balance_growth.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1701978080,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"balance_growth",description:"Learn about balance sheet statement growth, equity data for a company, parameters like symbol, limit, and provider, and explore the returned results, warnings, charts, and metadata. Retrieve detailed data on various balance sheet growth metrics like cash and cash equivalents, short-term investments, inventory, total assets, total liabilities, and more.",keywords:["balance sheet statement growth","company balance sheet growth","equity data","symbol","limit parameter","provider parameter","results","balance sheet growth","warnings","chart","metadata","data","cash and cash equivalents","short-term investments","net receivables","inventory","current assets","property, plant, and equipment","goodwill","intangible assets","long-term investments","tax assets","other non-current assets","total non-current assets","other assets","total assets","accounts payable","short-term debt","total current liabilities","long-term debt","non-current deferred revenue","non-current deferred tax liabilities","total non-current liabilities","common stock","retained earnings","accumulated other comprehensive income/loss","total stockholders' equity","total liabilities and stockholders' equity","total investments","total debt","net debt"]},sidebar:"tutorialSidebar",previous:{title:"balance",permalink:"/excel/reference/library/equity/fundamental/balance"},next:{title:"cash",permalink:"/excel/reference/library/equity/fundamental/cash"}},s={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:d},u="wrapper";function p(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Balance Sheet Statement Growth. Information about the growth of the company balance sheet."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.BALANCE_GROWTH(required;[optional])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"Reporting period.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_cash_and_cash_equivalents"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of cash and cash equivalents.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_short_term_investments"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of short-term investments.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_cash_and_short_term_investments"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of cash and short-term investments.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_net_receivables"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of net receivables.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_inventory"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of inventory.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_other_current_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of other current assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_current_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total current assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_property_plant_equipment_net"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of net property, plant, and equipment.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_goodwill"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of goodwill.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_intangible_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of intangible assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_goodwill_and_intangible_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of goodwill and intangible assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_long_term_investments"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of long-term investments.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_tax_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of tax assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_other_non_current_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of other non-current assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_non_current_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total non-current assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_other_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of other assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_account_payables"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of accounts payable.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_short_term_debt"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of short-term debt.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_tax_payables"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of tax payables.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_deferred_revenue"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of deferred revenue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_other_current_liabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of other current liabilities.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_current_liabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total current liabilities.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_long_term_debt"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of long-term debt.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_deferred_revenue_non_current"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of non-current deferred revenue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_deferrred_tax_liabilities_non_current"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of non-current deferred tax liabilities.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_other_non_current_liabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of other non-current liabilities.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_non_current_liabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total non-current liabilities.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_other_liabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of other liabilities.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_liabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total liabilities.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_common_stock"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of common stock.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_retained_earnings"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of retained earnings.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_accumulated_other_comprehensive_income_loss"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of accumulated other comprehensive income/loss.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_othertotal_stockholders_equity"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of other total stockholders' equity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_stockholders_equity"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total stockholders' equity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_liabilities_and_stockholders_equity"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total liabilities and stockholders' equity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_investments"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total investments.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_total_debt"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of total debt.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"growth_net_debt"),(0,n.kt)("td",{parentName:"tr",align:null},"Growth rate of net debt.")))))}p.isMDXComponent=!0}}]);