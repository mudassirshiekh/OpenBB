"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33116],{11246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453),s=n(94331);const a={title:"quote",description:"Documentation on how to get forex quotes using the OpenBB Terminal. It covers the different parameters that can be used, return types and also gives example usage.",keywords:["OpenBB Terminal Documentation","Forex Quotes","Python SDK","OpenBB forex.quote function","Forex Quote Parameter Instructions","YahooFinance Forex API","AlphaVantage Forex API"]},i=void 0,c={id:"sdk/reference/forex/quote",title:"quote",description:"Documentation on how to get forex quotes using the OpenBB Terminal. It covers the different parameters that can be used, return types and also gives example usage.",source:"@site/content/sdk/reference/forex/quote.md",sourceDirName:"sdk/reference/forex",slug:"/sdk/reference/forex/quote",permalink:"/sdk/reference/forex/quote",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forex/quote.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"quote",description:"Documentation on how to get forex quotes using the OpenBB Terminal. It covers the different parameters that can be used, return types and also gives example usage.",keywords:["OpenBB Terminal Documentation","Forex Quotes","Python SDK","OpenBB forex.quote function","Forex Quote Parameter Instructions","YahooFinance Forex API","AlphaVantage Forex API"]},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/sdk/reference/forex/oanda/summary"},next:{title:"curve",permalink:"/sdk/reference/futures/curve"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"forex.quote - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get forex quote."}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/sdk_helpers.py#L9",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.forex.quote(symbol: str, source: str = "YahooFinance")\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Forex symbol to get quote for."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"source"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'Source to get quote from, by default "YahooFinance"'}),(0,r.jsx)(t.td,{children:"YahooFinance"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"DataFrame of quote data."})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nEUR_USD_quote = openbb.forex.quote("EURUSD")\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"This also supports AlphaVantage and will handle different conventions\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'EUR_USD= openbb.forex.quote("EUR/USD", source="AlphaVantage")\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),o=n(74848);function s(e){let{title:t}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);