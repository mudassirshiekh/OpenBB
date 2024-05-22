"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52873],{70357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=n(74848),l=n(28453),i=n(94331);const r={title:"Fixed Income",description:"This guide introduces the Fixed Income menu, in the OpenBB Terminal, and provides examples for use. Features in this menu cover reference rates and government bonds, as well as corporate bond indices.",keywords:["Fixed Income","Financial Terminal","Rates and Indices","Plotting Data","Central Bank Rates","Government Bonds","Corporate Bonds","Spreads","API Key","User Guide"]},d=void 0,a={id:"terminal/menus/fixedincome",title:"Fixed Income",description:"This guide introduces the Fixed Income menu, in the OpenBB Terminal, and provides examples for use. Features in this menu cover reference rates and government bonds, as well as corporate bond indices.",source:"@site/content/terminal/menus/fixedincome.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/fixedincome",permalink:"/terminal/menus/fixedincome",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/fixedincome.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"Fixed Income",description:"This guide introduces the Fixed Income menu, in the OpenBB Terminal, and provides examples for use. Features in this menu cover reference rates and government bonds, as well as corporate bond indices.",keywords:["Fixed Income","Financial Terminal","Rates and Indices","Plotting Data","Central Bank Rates","Government Bonds","Corporate Bonds","Spreads","API Key","User Guide"]},sidebar:"tutorialSidebar",previous:{title:"ETF",permalink:"/terminal/menus/etf"},next:{title:"Forecast",permalink:"/terminal/menus/forecast"}},c={},o=[{value:"Usage",id:"usage",level:2},{value:"SOFR",id:"sofr",level:3},{value:"USRates",id:"usrates",level:3},{value:"ICESpread",id:"icespread",level:3},{value:"Treasury",id:"treasury",level:3},{value:"YCRV",id:"ycrv",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"Fixed Income - Menus | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"The Fixed Income menu functions for reference rates (ESTER, SOFR, SONIA and Ameribor), central bank rates (FRED, FOMC projections and ECB key interest rates), government bonds (treasury rates for any country, us-specific rates, yield curves), corporate bonds (ICE BofA Corporate Indices, Moody's AAA and BAA Corporate Indices, Commercial Paper, Spot Rates and HQM Corporate Yield Curve) and spreads (ICE BofA spreads, constant maturity spreads, and federal funds rate)."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The menu relies on FRED for data requests, please refer to the ",(0,s.jsx)(t.a,{href:"/terminal/usage/data/api-keys",children:"API keys guide"})," for information on how to obtain and set a key for FRED."]})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Enter the Fixed Income menu by typing ",(0,s.jsx)(t.code,{children:"fixedincome"})," into the Terminal from the Main menu, or use the absolute path:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/fixedincome\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f1f00a5e-e55b-48b5-9298-01886ecc3c3f",alt:"Screenshot 2023-11-03 at 10 00 27\u202fAM"})}),"\n",(0,s.jsx)(t.p,{children:"The menu has groups of commands related to the type of data:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Reference Rates"}),"\n",(0,s.jsx)(t.li,{children:"Central Bank Rates"}),"\n",(0,s.jsx)(t.li,{children:"Government Bonds"}),"\n",(0,s.jsx)(t.li,{children:"Corporate Bonds"}),"\n",(0,s.jsx)(t.li,{children:"Spreads"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Most commands are a time series, and they will have ",(0,s.jsx)(t.code,{children:"--start"})," and ",(0,s.jsx)(t.code,{children:"--end"})," arguments.  The specific series can be selected in functions where a ",(0,s.jsx)(t.code,{children:"--parameter"})," argument is supplied."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/69a146fd-4849-499b-8c59-5f55b31ddae0",alt:"Screenshot 2023-11-03 at 10 45 28\u202fAM"})}),"\n",(0,s.jsx)(t.h3,{id:"sofr",children:"SOFR"}),"\n",(0,s.jsxs)(t.p,{children:["Enter, ",(0,s.jsx)(t.code,{children:"sofr"}),", to get the Secured Overnight Financing Rate as a chart."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/fixedincome/sofr\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/5c769dd2-226e-44d5-bebf-baca2cb1b5bf",alt:"Screenshot 2023-11-03 at 10 48 07\u202fAM"})}),"\n",(0,s.jsx)(t.h3,{id:"usrates",children:"USRates"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"usrates"})," command is parameterized for:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"TIPS (tips)"}),"\n",(0,s.jsx)(t.li,{children:"Bills (tbill)"}),"\n",(0,s.jsx)(t.li,{children:"Constant Maturity (cmn)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The lengths of duration will differ between the three.  To see the available combinations, use the ",(0,s.jsx)(t.code,{children:"--options"})," flag."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/fixedincome/usrates --options\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"tbill"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"cmn"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"tips"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"4_week"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DTB4WK"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1_month"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS1MO"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3_month"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"TB3MS"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS3MO"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6_month"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DTB6"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS6MO"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1_year"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DTB1YR"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2_year"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS2"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3_year"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS3"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5_year"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS5"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DFII5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"7_year"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS7"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DFII7"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"10_year"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS10"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DFII10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"20_year"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS20"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DFII20"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"30_year"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DGS30"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DFII30"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Make the selection with a syntax like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"/fixedincome/usrates -p tbill -m 1_year --start 2009-01-01\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b84d4713-c7da-4fe2-a8a6-3ae15834d8fc",alt:"Screenshot 2023-11-03 at 11 03 11\u202fAM"})}),"\n",(0,s.jsx)(t.h3,{id:"icespread",children:"ICESpread"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"icespread"})," command are the Option-Adjusted Spreads from the ICE BofA Corporate Bond Index series."]}),"\n",(0,s.jsxs)(t.p,{children:["Adding, ",(0,s.jsx)(t.code,{children:"--category duration"}),", will place all of the US indices on the same chart."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"icespread --category duration\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/18c77008-4bf1-44e7-a3e6-0fbb37a5e3bd",alt:"Screenshot 2023-11-03 at 11 11 04\u202fAM"})}),"\n",(0,s.jsx)(t.h3,{id:"treasury",children:"Treasury"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"treasury"})," command allows the comparison between multiple countries at the short or long ends of rates."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"treasury --forecast --short united_kingdom,united_states,germany --start 2014-01-01\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/9122ae5b-4a58-4aaa-87c1-adedb5ddf4c0",alt:"Screenshot 2023-11-03 at 11 21 14\u202fAM"})}),"\n",(0,s.jsx)(t.h3,{id:"ycrv",children:"YCRV"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ycrv"})," command displays the yield curve on a specific date.  The default state is the most recent.  To view a historical date, add the ",(0,s.jsx)(t.code,{children:"--date"})," argument."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"ycrv --date 2008-11-03\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/14f9ff75-d2ed-4e29-af94-2598c7fae95e",alt:"Screenshot 2023-11-03 at 11 25 18\u202fAM"})})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(5260),l=n(74848);function i(e){let{title:t}=e;return(0,l.jsx)(s.A,{children:(0,l.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(96540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);