"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92165],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),h=r,k=m["".concat(d,".").concat(h)]||m[h]||g[h]||i;return a?n.createElement(k,l(l({ref:e},s),{},{components:a})):n.createElement(k,l({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(35742);function i(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},77170:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const l={title:"Financial Statements",sidebar_position:6,description:"This page provides an introduction to financial statement data available in the OpenBB Platform.  This includes quarterly and annual reports, along with metrics and ratios by company. This guide provides examples for using the variety of sources.",keywords:["stocks","companies","earnings","dividends","expectations","dividend yield","analyst consensus","EPS","assets","total assets","financial statements","cash flow statement","income statement","balance sheet","ratios","quick ratio","dividends","market cap"]},o=void 0,d={unversionedId:"platform/usage/financial_statements",id:"platform/usage/financial_statements",title:"Financial Statements",description:"This page provides an introduction to financial statement data available in the OpenBB Platform.  This includes quarterly and annual reports, along with metrics and ratios by company. This guide provides examples for using the variety of sources.",source:"@site/content/platform/usage/financial_statements.md",sourceDirName:"platform/usage",slug:"/platform/usage/financial_statements",permalink:"/platform/usage/financial_statements",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/usage/financial_statements.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1710940729,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:6,frontMatter:{title:"Financial Statements",sidebar_position:6,description:"This page provides an introduction to financial statement data available in the OpenBB Platform.  This includes quarterly and annual reports, along with metrics and ratios by company. This guide provides examples for using the variety of sources.",keywords:["stocks","companies","earnings","dividends","expectations","dividend yield","analyst consensus","EPS","assets","total assets","financial statements","cash flow statement","income statement","balance sheet","ratios","quick ratio","dividends","market cap"]},sidebar:"tutorialSidebar",previous:{title:"Market Calendars",permalink:"/platform/usage/market_calendars"},next:{title:"Commitment of Traders",permalink:"/platform/usage/commitment_of_traders"}},p={},s=[{value:"Financial Statements",id:"financial-statements",level:2},{value:"Field Names",id:"field-names",level:3},{value:"Weighted Average Shares Outstanding",id:"weighted-average-shares-outstanding",level:3},{value:"Dividends Paid",id:"dividends-paid",level:3},{value:"Financial Attributes",id:"financial-attributes",level:3},{value:"Search Financial Attributes",id:"search-financial-attributes",level:4},{value:"Ratios and Other Metrics",id:"ratios-and-other-metrics",level:2},{value:"Quick Ratio",id:"quick-ratio",level:3},{value:"Free Cash Flow Yield",id:"free-cash-flow-yield",level:3}],m={toc:s},g="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Financial Statements - Usage | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"OpenBB Platform data extensions provide access to financial statements as quarterly or annual. There are also endpoints for ratios and other common non-GAAP metrics. Most data providers require a subscription to access all data, refer to the website of a specific provider for details on entitlements and coverage."),(0,r.kt)("p",null,"Financial statement functions are grouped under the ",(0,r.kt)("inlineCode",{parentName:"p"},"obb.equity.fundamental")," module."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To begin, import the OpenBB Platform into a Python session:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\n"))),(0,r.kt)("h2",{id:"financial-statements"},"Financial Statements"),(0,r.kt)("p",null,"The typical financial statements consist of three endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Balance Sheet: ",(0,r.kt)("inlineCode",{parentName:"li"},"obb.equity.fundamental.balance()")),(0,r.kt)("li",{parentName:"ul"},"Income Statement: ",(0,r.kt)("inlineCode",{parentName:"li"},"obb.equity.fundamental.income()")),(0,r.kt)("li",{parentName:"ul"},"Cash Flow Statement: ",(0,r.kt)("inlineCode",{parentName:"li"},"obb.equity.fundamental.cash()"))),(0,r.kt)("p",null,"The main parameters are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symbol"),": The company's ticker symbol."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"period"),": 'annual' or 'quarter'. Default is 'annual'."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"limit"),": Limit the number of results returned, from the latest. Default is 5. For perspective, 150 will go back to 1985. The amount of historical records varies by provider.")),(0,r.kt)("h3",{id:"field-names"},"Field Names"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Every data provider has their own way of parsing and organizing the three financial statements."),(0,r.kt)("li",{parentName:"ul"},"Items within each statement will vary by source and by the type of company reporting."),(0,r.kt)("li",{parentName:"ul"},"Names of line items will vary by source."),(0,r.kt)("li",{parentName:"ul"},'"Date" values may differ because they are from the period starting/ending or date of reporting.'))),(0,r.kt)("p",null,"This example highlights how different providers will have different labels for compnay facts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\n\ndf = pd.DataFrame()\n\ndf["yfinance"] = (\n  obb.equity.fundamental.balance("TGT", provider="yfinance", limit=4)\n  .to_df()["TotalAssets"].reset_index(drop=True)\n)\n\ndf["fmp"] = (\n  obb.equity.fundamental.balance("TGT", provider="fmp", limit=4)\n  .to_df()["assets"].convert_dtypes().reset_index(drop=True)\n)\n\ndf["intrinio"] = (\n  obb.equity.fundamental.balance("TGT", provider="intrinio", limit=4)\n  .to_df()["total assets"].convert_dtypes().reset_index(drop=True)\n)\n\ndf["polygon"] = (\n  obb.equity.fundamental.balance("TGT", provider="polygon", limit=4)\n  .to_df()["total_assets"].convert_dtypes().reset_index(drop=True)\n)\n\ndf\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"right"},"yfinance"),(0,r.kt)("th",{parentName:"tr",align:"right"},"fmp"),(0,r.kt)("th",{parentName:"tr",align:"right"},"intrinio"),(0,r.kt)("th",{parentName:"tr",align:"right"},"polygon"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"42779000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"42779000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"42779000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"42779000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"51248000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"51248000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"51248000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"51248000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"53811000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"53811000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"53811000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"53811000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3"),(0,r.kt)("td",{parentName:"tr",align:"right"},"53335000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"53335000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"53335000000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"53335000000")))),(0,r.kt)("h3",{id:"weighted-average-shares-outstanding"},"Weighted Average Shares Outstanding"),(0,r.kt)("p",null,"This key metric will be found under the income statement. It might also be called, 'basic', and the numbers do not include authorized but unissued shares. A declining count over time is a sign that the company is returning capital to shareholders in the form of buy backs. Under ideal circumstances, it is more capital-efficient, for both company and shareholders, because distributions are double-taxed. The company pays income tax on dividends paid, and the beneficiary pays income tax again on receipt."),(0,r.kt)("p",null,"A company will disclose how many shares are outstanding at the end of the period  as a weighted average over the reporting period - three months."),(0,r.kt)("p",null,"Let's take a look at Target.  To make the numbers easier to read, we'll divide the entire column by one million."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'data = (\n  obb.equity.fundamental.income("TGT", provider=\'fmp\', limit=150, period="quarter")\n  .to_df()\n)\n\nshares = data["weighted_average_shares_outstanding"]/1000000\n')),(0,r.kt)("p",null,"Where this data starts,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"shares.head(1)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"weighted_average_shares_outstanding"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1986-07-31"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1168.82")))),(0,r.kt)("p",null,"versus currently,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"shares.tail(1)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"weighted_average_shares_outstanding"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-10-31"),(0,r.kt)("td",{parentName:"tr",align:"right"},"461.6")))),(0,r.kt)("p",null,"Thirty-seven years later, the share count is approaching a two-thirds reduction.  12.2% over the past five years."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"shares.pct_change(20).iloc[-1]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"-0.12\n")),(0,r.kt)("p",null,"In four reporting periods, 1.3 million shares have been taken out of the float."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"shares.iloc[-4] - shares.iloc[-1]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"-1.3\n")),(0,r.kt)("p",null,"With an average closing price of $144.27, that represents approximately $190M in buy backs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'price = (\n  obb.equity.price.historical("TGT", start_date="2022-10-01", provider="fmp")\n  .to_df()\n)\n\nround((price["close"].mean()*1300000)/1000000, 2)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"187.55\n")),(0,r.kt)("h3",{id:"dividends-paid"},"Dividends Paid"),(0,r.kt)("p",null,"Dividends paid is in the cash flow statement. We can calculate the amount-per-share with the reported data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'dividends = (\n  obb.equity.fundamental.cash("TGT", provider=\'fmp\', limit=150, period="quarter")\n  .to_df()[["dividends_paid"]]\n)\n\ndividends["shares"] = data[["weighted_average_shares_outstanding"]]\ndividends["div_per_share"] = dividends["dividends_paid"]/dividends["shares"]\n\ndividends["div_per_share"].tail(4)\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"div_per_share"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-01-28"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.07973")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-04-29"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.07833")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-07-29"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.08102")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-10-31"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.09835")))),(0,r.kt)("p",null,"This can be compared against the real amounts paid to common share holders, as announced."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'The dates immediately above represent the report date, dividends paid are attributed to the quarter they were paid in. The value from "2023-01-28" equates to the fourth quarter of 2022.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'(\n  obb.equity.fundamental.dividends("TGT", provider="fmp")\n  .to_df()["dividend"]\n  .loc["2022-11-15":"2023-08-15"]\n)\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"dividend"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-15"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-02-14"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-05-16"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-08-15"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.1")))),(0,r.kt)("p",null,"The numbers check out, and the $2B paid to investors over four quarters is more than ten times the $190M returned through share buy backs."),(0,r.kt)("h3",{id:"financial-attributes"},"Financial Attributes"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-intrinio")," data extension has an endpoint for extracting a single fact from financial statements. There is a helper function for looking up the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"tag"),"."),(0,r.kt)("h4",{id:"search-financial-attributes"},"Search Financial Attributes"),(0,r.kt)("p",null,"Search attributes by keyword."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.fundamental.search_attributes("marketcap").head(1)\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"id"),(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"tag"),(0,r.kt)("th",{parentName:"tr",align:"left"},"statement_code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"statement_type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"parent_name"),(0,r.kt)("th",{parentName:"tr",align:"right"},"sequence"),(0,r.kt)("th",{parentName:"tr",align:"left"},"factor"),(0,r.kt)("th",{parentName:"tr",align:"left"},"transaction"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"tag_BgkbWy"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Market Capitalization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"marketcap"),(0,r.kt)("td",{parentName:"tr",align:"left"},"calculations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"industrial"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"valuation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"usd")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," is what we need, in this case it is what we searched for."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'marketcap = (\n  obb.equity.fundamental.historical_attributes(symbol="TGT", tag = "marketcap", frequency="quarterly")\n  .to_df()\n)\n\nmarketcap.tail(5)\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-31"),(0,r.kt)("td",{parentName:"tr",align:"right"},"66929627287")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-03-31"),(0,r.kt)("td",{parentName:"tr",align:"right"},"75023699391")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-06-30"),(0,r.kt)("td",{parentName:"tr",align:"right"},"59916953938")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-09-30"),(0,r.kt)("td",{parentName:"tr",align:"right"},"50614370690")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-11-22"),(0,r.kt)("td",{parentName:"tr",align:"right"},"60495000000")))),(0,r.kt)("p",null,"Doing some quick math, and ignoring the most recent value, we can see that the market cap of Target was down nearly a quarter over the last four reporting periods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'(\n    (marketcap.loc["2023-09-30"] - marketcap.loc["2022-12-31"])/marketcap.loc["2022-12-31"]\n).value\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"-0.24\n")),(0,r.kt)("h2",{id:"ratios-and-other-metrics"},"Ratios and Other Metrics"),(0,r.kt)("p",null,"Other valuation functions are derivatives of the financial statements, but the data provider does the math. Values are typically ratios between line items, on a per-share basis, or as a percent growth."),(0,r.kt)("p",null,"This data set is where you can find EPS, FCF, P/B, EBIT, quick ratio, etc."),(0,r.kt)("h3",{id:"quick-ratio"},"Quick Ratio"),(0,r.kt)("p",null,"Target's quick ratio could be one reason why its share price is losing traction against the market. Its ability to pay current obligations is not optimistically reflected in a 0.27 score, approximately 50% below the historical median."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ratios = (\n  obb.equity.fundamental.ratios("TGT", limit=50, provider="fmp")\n  .to_df()\n)\n\ndisplay(f"Current Quick Ratio: {ratios[\'quick_ratio\'].iloc[-1]}")\ndisplay(f"Median Quick Ratio: {ratios[\'quick_ratio\'].median()}")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Current Quick Ratio: 0.27\nMedian Quick Ratio: 0.58\n")),(0,r.kt)("h3",{id:"free-cash-flow-yield"},"Free Cash Flow Yield"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics")," endpoint, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-fmp")," data extension, has a field for free cash flow yield. It is calculated by taking the free cash flow per share divided by the current share price. We could arrive at this answer by writing some code, but these types of endpoints do the work so we don't have to. This is part of the value-add that API data distributors provide, they allow you to get straight to work with data."),(0,r.kt)("p",null,"We'll use this endpoint to extract the data, and compare with some of Target's competition over the last ten years."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# List of other retail chains\ntickers = ["COST", "BJ", "DLTR", "DG", "WMT", "BIG", "M", "KSS", "TJX"]\n# Create a dictionary of tickers and company names.\nnames = {\n    ticker: obb.equity.fundamental.overview(ticker, provider="fmp").results.company_name\n    for ticker in tickers\n}\n# Create a column for each.\nfcf_yield = pd.DataFrame()\nfor ticker in tickers:\n    fcf_yield[names[ticker]] = (\n        obb.equity.fundamental.metrics(ticker, provider="fmp", period="annual", limit=10)\n        .to_df()\n        .reset_index()\n        .set_index("calendar_year")\n        .sort_index(ascending=False)\n        ["free_cash_flow_yield"]\n    )\nfcf_yield.transpose()\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"},"2023"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2022"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2021"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2020"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2019"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2018"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2017"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2016"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2015"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Costco Wholesale Corporation"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0279218"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0148596"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0265818"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0393512"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0259061"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0274379"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0608836"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00894059"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0307414"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0374833")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BJ's Wholesale Club Holdings, Inc."),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0447092"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0672128"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.113551"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0566305"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0911069"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0261863"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0658713"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0169474"),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Dollar Tree, Inc."),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.010756"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.013957"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.075627"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.040338"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0412519"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0340694"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0634655"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0166025"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0410471")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Dollar General Corporation"),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00825589"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0375074"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0589731"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0369217"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0461971"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0426088"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0507761"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0395241"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0460518")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Walmart Inc."),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0312425"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.028372"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0654622"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0445913"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.062023"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0572749"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.101038"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0735059"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0597117"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0415436")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Big Lots, Inc."),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.550469"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0252616"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.115757"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0694642"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.111853"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.037219"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.100721"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.110443"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.089253")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Macy's, Inc."),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0504726"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.27098"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0391114"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0913008"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.101426"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.155761"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.098993"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0656336"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.072322")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Kohl's Corporation"),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.143961"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.189677"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.147968"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.119492"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.139799"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0961367"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.19879"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0816518"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.110697")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"The TJX Companies, Inc."),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0271588"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0234975"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0517687"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0401668"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0488266"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0399352"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0536965"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0433279"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0464416"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0406432")))),(0,r.kt)("p",null,"Explore the rest of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fundamental")," module under the ",(0,r.kt)("a",{parentName:"p",href:"/platform/reference/equity/fundamental"},"Reference")," section."))}h.isMDXComponent=!0}}]);