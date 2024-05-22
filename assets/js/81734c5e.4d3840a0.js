"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44057],{83486:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=i(74848),n=i(28453),r=i(94331);const a={title:"decompose",description:"Learn how to decompose time series using the additive or multiplicative model. Understand the usage, parameters, and get examples to simplify your analysis.",keywords:["time series decomposition","additive time series","multiplicative time series","cyclic trend","residual","seasonality","decompose function","data analysis","stock analysis"]},o=void 0,d={id:"terminal/reference/forex/qa/decompose",title:"decompose",description:"Learn how to decompose time series using the additive or multiplicative model. Understand the usage, parameters, and get examples to simplify your analysis.",source:"@site/content/terminal/reference/forex/qa/decompose.md",sourceDirName:"terminal/reference/forex/qa",slug:"/terminal/reference/forex/qa/decompose",permalink:"/terminal/reference/forex/qa/decompose",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/qa/decompose.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"decompose",description:"Learn how to decompose time series using the additive or multiplicative model. Understand the usage, parameters, and get examples to simplify your analysis.",keywords:["time series decomposition","additive time series","multiplicative time series","cyclic trend","residual","seasonality","decompose function","data analysis","stock analysis"]},sidebar:"tutorialSidebar",previous:{title:"cusum",permalink:"/terminal/reference/forex/qa/cusum"},next:{title:"hist",permalink:"/terminal/reference/forex/qa/hist"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function m(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"forex/qa/decompose - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Decompose time series as: - Additive Time Series = Level + CyclicTrend + Residual + Seasonality - Multiplicative Time Series = Level * CyclicTrend * Residual * Seasonality"}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"decompose [-m]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"multiplicative"}),(0,s.jsx)(t.td,{children:"decompose using multiplicative model instead of additive"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 11:06 (\ud83e\udd8b) /stocks/qa/ $ decompose\n\nTime-Series Level is 2660.84\nStrength of Trend: 0.0000\nStrength of Seasonality: 0.0032\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154306626-1c5ad11e-a2e9-4107-9aec-5cf18da5358e.png",alt:"decompose"})}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var s=i(5260),n=i(74848);function r(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var s=i(96540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);