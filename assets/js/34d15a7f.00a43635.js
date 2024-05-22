"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52862],{91160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(74848),s=n(28453),i=n(94331);const o={title:"news",description:"The page provides information on how to print the latest news about ETF using parameters such as limit, starting date, order of articles, and news sources. This information is sourced from the News API.",keywords:["ETF","News API","latest news","articles","bbc","yahoo.com","docusaurus"]},d=void 0,a={id:"terminal/reference/etf/news",title:"news",description:"The page provides information on how to print the latest news about ETF using parameters such as limit, starting date, order of articles, and news sources. This information is sourced from the News API.",source:"@site/content/terminal/reference/etf/news.md",sourceDirName:"terminal/reference/etf",slug:"/terminal/reference/etf/news",permalink:"/terminal/reference/etf/news",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/news.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"news",description:"The page provides information on how to print the latest news about ETF using parameters such as limit, starting date, order of articles, and news sources. This information is sourced from the News API.",keywords:["ETF","News API","latest news","articles","bbc","yahoo.com","docusaurus"]},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/terminal/reference/etf/load"},next:{title:"overview",permalink:"/terminal/reference/etf/overview"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"etf /news - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Prints latest news about ETF, including date, title and web link. [Source: News API]"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"news [-l LIMIT] [-d N_START_DATE] [-o] [-s SOURCES]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Limit of latest news being printed."}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_start_date"}),(0,r.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) to search articles from"}),(0,r.jsx)(t.td,{children:"datetime.now() - timedelta(days=365)"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_oldest"}),(0,r.jsx)(t.td,{children:"Show oldest articles first"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sources"}),(0,r.jsx)(t.td,{children:"Show news only from the sources specified (e.g bbc yahoo.com)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);