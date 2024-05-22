"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82215],{20350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(74848),i=t(28453),s=t(94331);const r={title:"load",description:"This documentation page includes detailed instructions on how to load a stock ticker into the option menu using a specific command. It outlines each step and provides multiple examples for better understanding.",keywords:["load command","stock ticker","options","stock trading","stock options","command line interface","trading tool","trading instructions","TSLA"]},a=void 0,c={id:"terminal/reference/stocks/options/load",title:"load",description:"This documentation page includes detailed instructions on how to load a stock ticker into the option menu using a specific command. It outlines each step and provides multiple examples for better understanding.",source:"@site/content/terminal/reference/stocks/options/load.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/load",permalink:"/terminal/reference/stocks/options/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/load.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"load",description:"This documentation page includes detailed instructions on how to load a stock ticker into the option menu using a specific command. It outlines each step and provides multiple examples for better understanding.",keywords:["load command","stock ticker","options","stock trading","stock options","command line interface","trading tool","trading instructions","TSLA"]},sidebar:"tutorialSidebar",previous:{title:"info",permalink:"/terminal/reference/stocks/options/info"},next:{title:"oi",permalink:"/terminal/reference/stocks/options/oi"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{title:"stocks/options/load - Reference | OpenBB Terminal Docs"}),"\n",(0,o.jsx)(n.p,{children:"Load a ticker into option menu"}),"\n",(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"load -t TICKER\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Optional"}),(0,o.jsx)(n.th,{children:"Choices"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ticker"}),(0,o.jsx)(n.td,{children:"Stock ticker"}),(0,o.jsx)(n.td,{children:"None"}),(0,o.jsx)(n.td,{children:"False"}),(0,o.jsx)(n.td,{children:"None"})]})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"2022 Feb 16, 09:13 (\ud83e\udd8b) /stocks/options/ $ load TSLA\n\n2022 Feb 16, 09:13 (\ud83e\udd8b) /stocks/options/ $ ?\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Stocks - Options \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502     unu           show unusual options activity [Fdscanner.com]                                                                                                                                                                                                              \u2502\n\u2502     calc          basic call/put PnL calculator                                                                                                                                                                                                                              \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502     load          load new ticker                                                                                                                                                                                                                                            \u2502\n\u2502     exp           see and set expiration dates                                                                                                                                                                                                                               \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502 Ticker: TSLA                                                                                                                                                                                                                                                                 \u2502\n\u2502 Expiry: None                                                                                                                                                                                                                                                                 \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502     pcr           display put call ratio for ticker [AlphaQuery.com]                                                                                                                                                                                                         \u2502\n\u2502     info          display option information (volatility, IV rank etc) [Barchart.com]                                                                                                                                                                                        \u2502\n\u2502     chains        display option chains with greeks [Tradier]                                                                                                                                                                                                                \u2502\n\u2502     oi            plot open interest [Tradier/YFinance]                                                                                                                                                                                                                      \u2502\n\u2502     vol           plot volume [Tradier/YFinance]                                                                                                                                                                                                                             \u2502\n\u2502     voi           plot volume and open interest [Tradier/YFinance]                                                                                                                                                                                                           \u2502\n\u2502     hist          plot option history [Tradier]                                                                                                                                                                                                                              \u2502\n\u2502     vsurf         show 3D volatility surface [Yfinance]                                                                                                                                                                                                                      \u2502\n\u2502     grhist        plot option greek history [Syncretism.io]                                                                                                                                                                                                                  \u2502\n\u2502     plot          plot variables provided by the user [Yfinance]                                                                                                                                                                                                             \u2502\n\u2502     parity        shows whether options are above or below expected price [Yfinance]                                                                                                                                                                                         \u2502\n\u2502     binom         shows the value of an option using binomial options pricing [Yfinance]                                                                                                                                                                                     \u2502\n\u2502     greeks        shows the greeks for a given option [Yfinance]                                                                                                                                                                                                             \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2502    screen        screens tickers based on preset [Syncretism.io]                                                                                                                                                                                                            \u2502\n\u2502    payoff        shows payoff diagram for a selection of options [Yfinance]                                                                                                                                                                                                 \u2502\n\u2502    pricing       shows options pricing and risk neutral valuation [Yfinance]                                                                                                                                                                                                \u2502\n\u2502                                                                                                                                                                                                                                                                              \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 OpenBB Terminal \u2500\u256f\n"})}),"\n",(0,o.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var o=t(5260),i=t(74848);function s(e){let{title:n}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);