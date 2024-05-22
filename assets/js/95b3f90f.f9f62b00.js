"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43933],{81536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=r(74848),i=r(28453),n=r(94331);const s={title:"profitfactor",description:"This page provides detailed information regarding the 'profitfactor' function in the openbb.portfolio.metric package. It includes a brief description, parameters details, returns types, and some examples of usage.",keywords:["openbb portfolio metric","profitfactor function","PortfolioEngine","code example","openbb.portfolio.load","trading portfolio","profit factor"]},a=void 0,l={id:"sdk/reference/portfolio/metric/profitfactor",title:"profitfactor",description:"This page provides detailed information regarding the 'profitfactor' function in the openbb.portfolio.metric package. It includes a brief description, parameters details, returns types, and some examples of usage.",source:"@site/content/sdk/reference/portfolio/metric/profitfactor.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/profitfactor",permalink:"/sdk/reference/portfolio/metric/profitfactor",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/profitfactor.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"profitfactor",description:"This page provides detailed information regarding the 'profitfactor' function in the openbb.portfolio.metric package. It includes a brief description, parameters details, returns types, and some examples of usage.",keywords:["openbb portfolio metric","profitfactor function","PortfolioEngine","code example","openbb.portfolio.load","trading portfolio","profit factor"]},sidebar:"tutorialSidebar",previous:{title:"payoff",permalink:"/sdk/reference/portfolio/metric/payoff"},next:{title:"rsquare",permalink:"/sdk/reference/portfolio/metric/rsquare"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{title:"portfolio.metric.profitfactor - Reference | OpenBB SDK Docs"}),"\n",(0,o.jsx)(t.p,{children:"Get profit factor"}),"\n",(0,o.jsxs)(t.p,{children:["Source Code: [",(0,o.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1612",children:"link"}),"]"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.metric.profitfactor(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Optional"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"portfolio_engine"}),(0,o.jsx)(t.td,{children:"PortfolioEngine"}),(0,o.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,o.jsx)("br",{}),"Use ",(0,o.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"False"})]})})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"pd.DataFrame"}),(0,o.jsx)(t.td,{children:"DataFrame of profit factor of the portfolio during different time periods"})]})})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.profitfactor(p)\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"During some time periods there were no losing trades. Thus some values could not be calculated.\n"})}),"\n",(0,o.jsx)(t.hr,{})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var o=r(5260),i=r(74848);function n(e){let{title:t}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var o=r(96540);const i={},n=o.createContext(i);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);