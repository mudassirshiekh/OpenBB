"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13585],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},31439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const l={title:"Introduction",sidebar_position:1,description:"This is a documentation page for the Stocks menu used in public equity. It contains functions for searching and loading company market data, displaying candle charts, and providing quotes and company specifics. The menu also offers a wide range of sub-menus that segment functions based on the type of data they return.",keywords:["public equity","company market data","candle charts","stock quotes","company specifics","stock search","data groups","metadata","technical analysis","trading hours","equity options","quantitative analysis","research websites","stocks screener"]},i=void 0,s={unversionedId:"terminal/menus/stocks/index",id:"terminal/menus/stocks/index",title:"Introduction",description:"This is a documentation page for the Stocks menu used in public equity. It contains functions for searching and loading company market data, displaying candle charts, and providing quotes and company specifics. The menu also offers a wide range of sub-menus that segment functions based on the type of data they return.",source:"@site/content/terminal/menus/stocks/index.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/",permalink:"/terminal/menus/stocks/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/index.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708506338,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,description:"This is a documentation page for the Stocks menu used in public equity. It contains functions for searching and loading company market data, displaying candle charts, and providing quotes and company specifics. The menu also offers a wide range of sub-menus that segment functions based on the type of data they return.",keywords:["public equity","company market data","candle charts","stock quotes","company specifics","stock search","data groups","metadata","technical analysis","trading hours","equity options","quantitative analysis","research websites","stocks screener"]},sidebar:"tutorialSidebar",previous:{title:"Data Available",permalink:"/terminal/menus/"},next:{title:"Behavioural Analysis",permalink:"/terminal/menus/stocks/ba"}},d={},c=[{value:"Menu Contents",id:"menu-contents",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Load",id:"load",level:3},{value:"Candle",id:"candle",level:3},{value:"News",id:"news",level:3},{value:"TOB",id:"tob",level:3},{value:"Quote",id:"quote",level:3},{value:"Codes",id:"codes",level:3},{value:"Search",id:"search",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The Stocks menu is the high-level menu for the Public Equity asset class. It contains functions for searching and loading company market data, showing candle charts, quotes and company specifics via a large selection of sub-menus. The sub-menus break the functions down into groups based on the type of data they return. The items in the stocks menu are listed below with a short description. Refer to each sub-menu's introductory guide for a more detailed explanation of the functions within."),(0,r.kt)("h2",{id:"menu-contents"},"Menu Contents"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ba"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Behavioural Analysis"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Social Media, Sentiment, Trends")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bt"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Strategy Backtester"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Simple EMA, EMA Crossover & RSI Strategies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ca"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Comparison Analysis"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Compare Historical Prices, Correlations, Financials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"candle"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Candle"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Candlestick Chart of the Loaded Data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"codes"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Codes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Cross-Reference FIGI, CIK, and SIC Numbers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disc"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Discovery"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Upcoming Earnings and Dividends Calendar, Heatmaps, Trending News")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dps"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Dark Pool and Short Data"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Short Interest, Borrow Rates, Off-Exchange Short Volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fa"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Fundamental Analysis"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Financial Statements, Company Overviews, Analyst Coverage, Price Targets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"forecast"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Forecasting and ML"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Enter the Forecast Menu With the Loaded Ticker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gov"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Government"),(0,r.kt)("td",{parentName:"tr",align:"right"},"House and Senate Trading Disclosures, Lobbying Efforts, US Treasury Spending")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ins"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Insider Trading"),(0,r.kt)("td",{parentName:"tr",align:"right"},"SEC Form 4 Disclosures & Screener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"load"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Load"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Load a Ticker Symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"news"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"News"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Ticker-Specific News Headlines")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Equity Options"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Options Analysis, Quotes, Historical Prices, Greeks & Screener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"qa"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Quantitative Analysis"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Mathematical Analysis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"quote"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Quote"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Current Price and Performance Data for the Ticker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"res"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Research Websites"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Shortcuts to Online Resources for the Loaded Ticker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"scr"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Stocks Screener"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Custom Stocks Screener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"search"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Stocks Search"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Find a company and ticker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ta"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Technical Analysis"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Technical Indicators and Charts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"th"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-Menu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Trading Hours"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Lists of World Markets and Current Status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tob"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Top of Book"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Top of Book Bid/Ask from CBOE (US-only when markets are open)")))),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("p",null,"Navigate to the menu by entering, ",(0,r.kt)("inlineCode",{parentName:"p"},"stocks"),", from the Main Menu. From another menu, ",(0,r.kt)("inlineCode",{parentName:"p"},"/stocks"),", will jump directly there."),(0,r.kt)("p",null,"The current screen can always be re-printed with any of: ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"help"),". The help dialogue, containing all parameters for each function, is printed when ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," is attached to any command. The help dialogue will also provide the list of sources available to each command, the ",(0,r.kt)("inlineCode",{parentName:"p"},"news")," function is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"news -h\n")),(0,r.kt)("p",null,"Which prints the reference information on the screen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"usage: news [-t TICKER] [-d N_START_DATE] [-o] [-s SOURCES] [-h] [--export EXPORT] [--sheet-name SHEET_NAME [SHEET_NAME ...]] [-l LIMIT] [--source {Feedparser,NewsApi,Ultima}]\n\nlatest news of the company\n\noptions:\n  -t TICKER, --ticker TICKER\n                        Ticker to get data for\n  -d N_START_DATE, --date N_START_DATE\n                        The starting date (format YYYY-MM-DD) to search articles from\n  -o, --oldest          Show oldest articles first\n  -s SOURCES, --sources SOURCES\n                        Show news only from the sources specified (e.g bloomberg,reuters)\n  -h, --help            show this help message\n  --export EXPORT       Export raw data into csv, json, xlsx\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files.\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data.\n  --source {Feedparser,NewsApi,Ultima}\n                        Data source to select from\n\nFor more information and examples, use 'about news' to access the related guide.\n")),(0,r.kt)("p",null,"Attaching the source argument to a command selects a source other than the default, which can also be set permanently from the ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/data/data-sources"},(0,r.kt)("inlineCode",{parentName:"a"},"/sources")," menu"),". To select the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Ultima"),", use the syntax below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"news -t WMT --source Ultima\n\n------------------------\n> 2023-04-10 15:44:56 - The Federal Trade Commission and Justice Department should stop the acquisition of Albertsons by Kroger. The usual false claims are being made such as...\n\nRelevancy score: 4.87/5 Stars\n\nCompetition Risk (Walmart Inc. faces competition risk due to the presence of other large retailers in the market, as well as physical, eCommerce and omni-channel retailers, social commerce platforms, wholesale club operators and retail intermediaries.\nThese competitors have the ability to leverage their economies of scale to offer lower prices than Walmart, which can put pressure on Walmart\u2019s margins.\nAdditionally, these competitors have the ability to quickly respond to changes in the market, which can put Walmart at a disadvantage.\nFurthermore, Walmart is subject to laws and regulations related to competition and antitrust matters, which could require extensive system and operational changes, increase operating costs, and require significant capital expenditures.)\n\nRead more: https://www.cincinnati.com/story/opinion/letters/2023/04/10/letters-kroger-acquiring-albertsons-will-reduce-competition-not-prices/70080423007/\n")),(0,r.kt)("p",null,"The first step in many workflows will be to load a stock symbol with historical data. The amount, granularity, and market coverage will vary by source. Users can elect to subscribe to any of the data sources accordingly. While no API keys are required to get started using the Terminal, acquiring these credentials at the free level significantly enhances the user experience with additional functionality and available data. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/data/api-keys"},"API keys guide")," for links to obtain each."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"load"},"Load"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," function is a starting point for most functions, and parameters can be adjusted for intraday and resolution. It has many optional arguments which can be displayed for reference by attaching, ",(0,r.kt)("inlineCode",{parentName:"p"},"-h"),", or, ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),", to any function. Entering:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load -h\n")),(0,r.kt)("p",null,"Reveals the choices:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"usage: load [-t TICKER] [-s START] [-e END] [-i {1,5,15,30,60}] [-p] [-f FILEPATH] [-m] [-w] [--exchange] [--performance] [-h] [--export EXPORT]\n            [--sheet-name SHEET_NAME [SHEET_NAME ...]] [--source {YahooFinance,AlphaVantage,Polygon,EODHD,Intrinio}]\n\noptional arguments:\n  -t TICKER, --ticker TICKER\n                        Stock ticker (default: None)\n  -s START, --start START\n                        The starting date (format YYYY-MM-DD) of the stock (default: 2020-02-11)\n  -e END, --end END     The ending date (format YYYY-MM-DD) of the stock (default: 2023-02-15)\n  -i {1,5,15,30,60}, --interval {1,5,15,30,60}\n                        Intraday stock minutes (default: 1440)\n  -p, --prepost         Pre/After market hours. Only reflected in intraday data. (default: False)\n  -f FILEPATH, --file FILEPATH\n                        Path to load custom file. (default: None)\n  -m, --monthly         Load monthly data (default: False)\n  -w, --weekly          Load weekly data (default: False)\n  --exchange            Show exchange information. (default: False)\n  --performance         Show performance information. (default: False)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx (default: )\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files. (default: None)\n  --source {YahooFinance,AlphaVantage,Polygon,EODHD,Intrinio,DataBento}\n                        Data source to select from (default: YahooFinance)\n\n\n")),(0,r.kt)("p",null,"By default, a daily period of OHLC+V data over three years, from YahooFinance, is loaded to memory. Use the default settings like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load MSFT\n")),(0,r.kt)("p",null,"A message will print indicating the starting date from which the data begins."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Loading Daily data for MSFT with starting period 2019-11-27.\n")),(0,r.kt)("p",null,"A simple way to get the entire history available from a source is to use an arbitrary starting date from a long time ago, like ",(0,r.kt)("inlineCode",{parentName:"p"},"1900-01-01"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load MSFT -s 1990-01-01\n")),(0,r.kt)("p",null,"The console print indicates the first date of history, provided by this source, is January 29, 1993."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Loading Daily data for MSFT with starting period 1993-01-29.\n")),(0,r.kt)("p",null,"A range-bound window can also be loaded; for example, the dot-com era:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load MSFT -s 1997-01-01 -e 2003-01-01\n")),(0,r.kt)("p",null,"The interval of the data can also be set as weekly or monthly; ",(0,r.kt)("inlineCode",{parentName:"p"},"-w")," for weekly, and ",(0,r.kt)("inlineCode",{parentName:"p"},"-m")," for monthly candles. The data will now start on a Monday or at the beginning of a month."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load MSFT -s 1997-01-01 -e 2003-01-01 -w\n")),(0,r.kt)("p",null,"Intraday data is also requested this way, only using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-i")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--interval")," argument. One-minute data can be loaded like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load MSFT -i 1\n")),(0,r.kt)("p",null,"From YahooFinance, five days of one-minute data is available.  The amount of historical price data will vary by source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Loading Intraday 1min data for MSFT with starting period 2022-11-25.\n")),(0,r.kt)("p",null,"This can be augmented further by adding pre/post market price candles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load MSFT -i 1 -p\n")),(0,r.kt)("p",null,"Data can also be exported, as a CSV, JSON, or XLSX file, directly from the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," function. The file is created in the OpenBBUserData folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load MSFT -s 1990-01-01 -m --export msft_monthly.csv\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Loading Daily data for MSFT with starting period 1993-02-01.\n\nSaved file: /Users/{username}/OpenBBUserData/exports/msft_monthly.csv\n")),(0,r.kt)("p",null,"Exported files can also be loaded by declaring the ",(0,r.kt)("inlineCode",{parentName:"p"},"--file")," argument. Place the file to import in the folder: ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBBUserData/custom_imports/stocks")),(0,r.kt)("h3",{id:"candle"},"Candle"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"candle")," command displays a chart of the loaded symbol. It needs no arguments to display, but modifiers can enhance the content of the chart. Commands can also be sequenced together with a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," separating each individual command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load MSFT\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Loading Daily data for MSFT with starting period 2020-04-08.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"candle\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/231903835-a0157626-1329-4d5a-80a1-8d21b71adcb1.png",alt:"stocks/candle"})),(0,r.kt)("p",null,"The help dialogue for the ",(0,r.kt)("inlineCode",{parentName:"p"},"candle")," command shows how this chart can be supplemented with additional data; specifically, ",(0,r.kt)("inlineCode",{parentName:"p"},"-t")," for trend, ",(0,r.kt)("inlineCode",{parentName:"p"},"--ma")," for moving averages, ",(0,r.kt)("inlineCode",{parentName:"p"},"--log")," for a log scale, and ",(0,r.kt)("inlineCode",{parentName:"p"},"--ha")," to convert the candles to a Heikin Ashi pattern."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"candle -h\n")),(0,r.kt)("p",null,"Which prints to screen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"usage: candle [-t TICKER] [-p] [--sort {open,high,low,close,adjclose,volume,dividends,stock_splits}] [-r] [--raw] [--trend] [--ma MOV_AVG] [--ha] [--log] [-h] [--export EXPORT]\n              [--sheet-name SHEET_NAME [SHEET_NAME ...]] [-l LIMIT]\n\nShows historic price and volume for the asset.\n\noptions:\n  -t TICKER, --ticker TICKER\n                        Ticker to analyze. (default: None)\n  -p, --prepost         Pre/After market hours. Only works for intraday data. (default: False)\n  --sort {open,high,low,close,adjclose,volume,dividends,stock_splits}\n                        Choose a column to sort by. Only works when raw data is displayed. (default: )\n  -r, --reverse         Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. (default: False)\n  --raw                 Shows raw data instead of a chart. (default: False)\n  --trend               Flag to add high and low trends to candle. (default: False)\n  --ma MOV_AVG          Add moving average in number of days to plot and separate by a comma. Value for ma (moving average) keyword needs to be greater than 1. (default: None)\n  --ha                  Flag to show Heikin Ashi candles. (default: False)\n  --log                 Plot with y axis on log scale (default: False)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files. (default: None)\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data. (default: 20)\n\nFor more information and examples, use 'about candle' to access the related guide.\n")),(0,r.kt)("p",null,"Be sure to adjust the values for moving averages to correspond with the interval of the data loaded. Below adds movings averages for three and twelve month periods (because data loaded is monthly), and changes the y-axis to a log-scale."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load msft --start 1980-01-01 --monthly\ncandle --ma 3,12 --log\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/231904022-7da40eae-2389-4dfa-a619-f950fa8f2929.png",alt:"candle moving average log"})),(0,r.kt)("h3",{id:"news"},"News"),(0,r.kt)("p",null,"Get ticker-related news headlines by entering ",(0,r.kt)("inlineCode",{parentName:"p"},"news")," after loading a ticker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"news --source NewsApi\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/231904057-235b93e2-12e6-45db-a4eb-f6c7c93e02ff.png",alt:"stocks/news"})),(0,r.kt)("h3",{id:"tob"},"TOB"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tob"),' function is the "Top of Book", and it returns data during market hours.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tob\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/231904101-0df25e0e-631c-4a58-a449-e851df6fd4d8.png",alt:"stocks/tob"})),(0,r.kt)("h3",{id:"quote"},"Quote"),(0,r.kt)("p",null,"Get the current market price and general performance metrics of the loaded ticker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"quote\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/231904179-1908801d-ac8d-4bc2-aa08-e93507df1630.png",alt:"stocks/quote"})),(0,r.kt)("h3",{id:"codes"},"Codes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"codes")," prints the CIK, Composite FIGI, Share Class FIGI, and SIC codes - when available - for a US-listed stock. This function requires a free API key from Polygon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"codes\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/231904217-b477d719-389c-4678-ac04-266641ec7652.png",alt:"stocks/codes"})),(0,r.kt)("h3",{id:"search"},"Search"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," function provides a way to find stocks by name, region, sector, industry and exchange location. The results can be exported as a CSV, JSON, or XLSX file from the command line or within the table."),(0,r.kt)("p",null,"Return all Canadian banks with US listings with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"search --country canada --industrygroup banks\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/231904274-cc3ba608-280a-47f7-834a-98ba2f3de6c3.png",alt:"stocks/search"})))}u.isMDXComponent=!0}}]);