"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69189],{45465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var n=r(74848),s=r(28453),i=r(94331);const d={title:"news",description:"The News Page aggregates the latest crypto news from the CryptoPanic platform, allowing extensive filter and sort options to customize your feed. The page is interactive and easy-to-use for those who want to stay updated with the cryptocurrency market news.",keywords:["news","cryptopanic","cryptocurrency","aggregator platform","coin","filter options","crypto news","crypto media","parameters"]},o=void 0,a={id:"terminal/reference/crypto/dd/news",title:"news",description:"The News Page aggregates the latest crypto news from the CryptoPanic platform, allowing extensive filter and sort options to customize your feed. The page is interactive and easy-to-use for those who want to stay updated with the cryptocurrency market news.",source:"@site/content/terminal/reference/crypto/dd/news.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/news",permalink:"/terminal/reference/crypto/dd/news",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/news.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"news",description:"The News Page aggregates the latest crypto news from the CryptoPanic platform, allowing extensive filter and sort options to customize your feed. The page is interactive and easy-to-use for those who want to stay updated with the cryptocurrency market news.",keywords:["news","cryptopanic","cryptocurrency","aggregator platform","coin","filter options","crypto news","crypto media","parameters"]},sidebar:"tutorialSidebar",previous:{title:"mt",permalink:"/terminal/reference/crypto/dd/mt"},next:{title:"nonzero",permalink:"/terminal/reference/crypto/dd/nonzero"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"crypto/dd/news - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(t.p,{children:["Display most recent news on the given coin from CryptoPanic aggregator platform. [Source: ",(0,n.jsx)(t.a,{href:"https://cryptopanic.com/",children:"https://cryptopanic.com/"}),"]"]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"news [-l LIMIT] [-k {news,media}] [--filter {rising,hot,bullish,bearish,important,saved,lol}] [-r {en,de,es,fr,nl,it,pt,ru}] [-s {published_at,domain,title,negative_votes,positive_votes}] [--reverse] [-u]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"display N number records"}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"kind"}),(0,n.jsx)(t.td,{children:"Filter by category of news. Available values: news or media."}),(0,n.jsx)(t.td,{children:"news"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"news, media"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filter"}),(0,n.jsx)(t.td,{children:"Filter by kind of news. From: rising"}),(0,n.jsx)(t.td,{children:"hot"}),(0,n.jsx)(t.td,{children:"bullish"}),(0,n.jsx)(t.td,{children:"bearish"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"region"}),(0,n.jsx)(t.td,{children:"Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch), es (Espa\xf1ol), fr (Fran\xe7ais), it (Italiano), pt (Portugu\xeas), ru (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)"}),(0,n.jsx)(t.td,{children:"en"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"en, de, es, fr, nl, it, pt, ru"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sortby"}),(0,n.jsx)(t.td,{children:"Sort by given column. Default: published_at"}),(0,n.jsx)(t.td,{children:"published_at"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"published_at, domain, title, negative_votes, positive_votes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reverse"}),(0,n.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"urls"}),(0,n.jsx)(t.td,{children:"Flag to disable urls. Hides column with URL."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"2022 Apr 25, 09:49 (\ud83e\udd8b) /crypto/dd/ $ news\n                                             Most Recent News\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2503 published_at \u2503 title                                       \u2503 link                                       \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-04-24   \u2502 Major German Bank Applies For Crypto        \u2502 https://cryptopanic.com/news/15005355/Maj\u2026 \u2502\n\u2502              \u2502 Custody License                             \u2502                                            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-04-24   \u2502 These Two Companies Will Let You Buy a      \u2502 https://cryptopanic.com/news/15005488/The\u2026 \u2502\n\u2502              \u2502 House with Crypto                           \u2502                                            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);