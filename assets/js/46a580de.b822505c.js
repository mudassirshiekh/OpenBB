"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95726],{2903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var r=n(74848),s=n(28453),a=n(94331);const d={title:"load",description:"This documentation page provides useful information on how to load stock tickers for market analysis, including specifications for intraday stocks, market hours, and options for custom, weekly, and monthly data loading.",keywords:["Stock market analysis","Intraday stock","Market hours","Load stock ticker","Stock data","Pre/post market","Stock ticker","Custom data load","Monthly data load","Weekly data load"]},o=void 0,i={id:"terminal/reference/stocks/ba/load",title:"load",description:"This documentation page provides useful information on how to load stock tickers for market analysis, including specifications for intraday stocks, market hours, and options for custom, weekly, and monthly data loading.",source:"@site/content/terminal/reference/stocks/ba/load.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/load",permalink:"/terminal/reference/stocks/ba/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/load.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"load",description:"This documentation page provides useful information on how to load stock tickers for market analysis, including specifications for intraday stocks, market hours, and options for custom, weekly, and monthly data loading.",keywords:["Stock market analysis","Intraday stock","Market hours","Load stock ticker","Stock data","Pre/post market","Stock ticker","Custom data load","Monthly data load","Weekly data load"]},sidebar:"tutorialSidebar",previous:{title:"jctr",permalink:"/terminal/reference/stocks/ba/jctr"},next:{title:"mentions",permalink:"/terminal/reference/stocks/ba/mentions"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"stocks/ba/load - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsxs)(t.p,{children:["Load stock ticker to perform analysis on. When the data source is syf', an Indian ticker can be loaded by using '.NS' at the end, e.g. 'SBIN.NS'. See available market in ",(0,r.jsx)(t.a,{href:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html",children:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"load -t TICKER [-s START] [-e END] [-i {1,5,15,30,60}] [-p] [-f FILEPATH] [-m] [-w] [-r {ytd,1y,2y,5y,6m}]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"Stock ticker"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start"}),(0,r.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) of the stock"}),(0,r.jsx)(t.td,{children:"2019-11-21"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end"}),(0,r.jsx)(t.td,{children:"The ending date (format YYYY-MM-DD) of the stock"}),(0,r.jsx)(t.td,{children:"2022-11-25"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"Intraday stock minutes"}),(0,r.jsx)(t.td,{children:"1440"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"1, 5, 15, 30, 60"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prepost"}),(0,r.jsx)(t.td,{children:"Pre/After market hours. Only works for 'yf' source, and intraday data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filepath"}),(0,r.jsx)(t.td,{children:"Path to load custom file."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"monthly"}),(0,r.jsx)(t.td,{children:"Load monthly data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"weekly"}),(0,r.jsx)(t.td,{children:"Load weekly data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(5260),s=n(74848);function a(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function d(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);