"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57420],{54023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(74848),s=n(28453),r=n(94331);const o={title:"chains",description:"This documentation page is about the /chains command, which helps users retrieve Options Chain by Expiry. This crucial tool provides an overview of the bid, ask, and open interest of options contracts for a specific stock.",keywords:["chains command","Options Chain by Expiry","bid","ask","open interest","stock options contracts","stock ticker","expiration date","calls or puts","strike price"]},c=void 0,a={id:"bot/reference/telegram/options/chains",title:"chains",description:"This documentation page is about the /chains command, which helps users retrieve Options Chain by Expiry. This crucial tool provides an overview of the bid, ask, and open interest of options contracts for a specific stock.",source:"@site/content/bot/reference/telegram/options/chains.md",sourceDirName:"bot/reference/telegram/options",slug:"/bot/reference/telegram/options/chains",permalink:"/bot/reference/telegram/options/chains",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/options/chains.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"chains",description:"This documentation page is about the /chains command, which helps users retrieve Options Chain by Expiry. This crucial tool provides an overview of the bid, ask, and open interest of options contracts for a specific stock.",keywords:["chains command","Options Chain by Expiry","bid","ask","open interest","stock options contracts","stock ticker","expiration date","calls or puts","strike price"]},sidebar:"tutorialSidebar",previous:{title:"options",permalink:"/bot/reference/telegram/options/"},next:{title:"equitypc",permalink:"/bot/reference/telegram/options/equitypc"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"options: chains - Telegram Reference | OpenBB Bot Docs"}),"\n",(0,i.jsx)(t.p,{children:"This command allows users to retrieve Options Chain by Expiry, which gives an overview of the bid, ask, and open interest of options contracts for a specific stock."}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/chains ticker expiry opt_type [min_sp] [max_sp]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"Stock Ticker"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiry"}),(0,i.jsx)(t.td,{children:"Expiration Date (YYYY-MM-DD)"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"opt_type"}),(0,i.jsx)(t.td,{children:"Calls or Puts (C or P)"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"calls, puts, C, P"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"min_sp"}),(0,i.jsx)(t.td,{children:"Minimum Strike Price"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"max_sp"}),(0,i.jsx)(t.td,{children:"Maximum Strike Price"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/chains AMD 2022-07-29 Calls\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/chains AMD 2022-07-29 Calls 10 100\n"})}),"\n",(0,i.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(5260),s=n(74848);function r(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);