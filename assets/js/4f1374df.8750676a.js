"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12634],{74459:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var s=l(74848),n=l(28453),i=l(94331);const r={title:"Alternative",description:"This documentation page explains the functionalities provided by the Alternative module of the OpenBB SDK, offering programmatic access to commands within the OpenBB Terminal. It covers functions related to open source software (OSS) and Covid data, and provides examples of usage using the Python language.",keywords:["OpenBB SDK","Alternative module","open source software","Covid data","programmatic access","GitHub API key","repositories statistics","global deaths","cases slope"]},d=void 0,c={id:"sdk/data-available/alternative",title:"Alternative",description:"This documentation page explains the functionalities provided by the Alternative module of the OpenBB SDK, offering programmatic access to commands within the OpenBB Terminal. It covers functions related to open source software (OSS) and Covid data, and provides examples of usage using the Python language.",source:"@site/content/sdk/data-available/alternative.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/alternative",permalink:"/sdk/data-available/alternative",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/alternative.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"Alternative",description:"This documentation page explains the functionalities provided by the Alternative module of the OpenBB SDK, offering programmatic access to commands within the OpenBB Terminal. It covers functions related to open source software (OSS) and Covid data, and provides examples of usage using the Python language.",keywords:["OpenBB SDK","Alternative module","open source software","Covid data","programmatic access","GitHub API key","repositories statistics","global deaths","cases slope"]},sidebar:"tutorialSidebar",previous:{title:"Portfolio Optimization",permalink:"/sdk/data-available/portfolio/po"},next:{title:"Econometrics",permalink:"/sdk/data-available/econometrics"}},h={},x=[{value:"How to Use",id:"how-to-use",level:2},{value:"OSS",id:"oss",level:3},{value:"Covid",id:"covid",level:3},{value:"Examples - OSS",id:"examples---oss",level:2},{value:"alt.oss.top",id:"altosstop",level:3},{value:"alt.oss.summary",id:"altosssummary",level:3},{value:"Examples - Covid",id:"examples---covid",level:2},{value:"alt.covid.global_deaths",id:"altcovidglobal_deaths",level:3},{value:"alt.covid.slopes",id:"altcovidslopes",level:3}];function a(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"Alternative - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,s.jsxs)(e.p,{children:["The Alternative module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,s.jsx)(e.code,{children:"."}),", after, ",(0,s.jsx)(e.code,{children:"openbb.alt"})]}),"\n",(0,s.jsx)(e.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsx)(e.p,{children:"\u200b\nThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nimport pandas as pd\n"})}),"\n",(0,s.jsx)(e.p,{children:"A brief description below highlights the main Functions and Modules available in the Alternative SDK"}),"\n",(0,s.jsx)(e.h3,{id:"oss",children:"OSS"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Path"}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.oss.top"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Get top repositories"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.oss.search"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Search repositories"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.oss.history"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Display a repo star history"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.oss.ross"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Startups from ross index"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.oss.github_data"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Get repository stats"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.oss.summary"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Get repository summary"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"covid",children:"Covid"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Path"}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.covid.global_deaths"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"historical deaths for given country"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.covid.slopes"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Load cases and find slope over period"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.covid.stat"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Show historical cases and deaths by country"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.covid.global_cases"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"historical cases for given country"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.alt.covid.ov"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"overview historical cases and deaths by country"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"Alternatively you can print the contents of the Alternative SDK with:\n\u200b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"help(openbb.alt.covid)\nhelp(openbb.alt.oss)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples---oss",children:"Examples - OSS"}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["To use some of the OSS SDK commands you will need a GitHub API key - you can get one ",(0,s.jsx)(e.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",children:"here"})]})}),"\n",(0,s.jsx)(e.h3,{id:"altosstop",children:"alt.oss.top"}),"\n",(0,s.jsxs)(e.p,{children:["\u200b\nThe alt.oss.top SDK command lets you display top repositories - You can pass different parameters like ",(0,s.jsx)(e.code,{children:"sortby"})," ",(0,s.jsx)(e.code,{children:"categories"})," and ",(0,s.jsx)(e.code,{children:"limit"})," to enhance the output.\n\u200b"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"summary = pd.DataFrame.from_dict(openbb.alt.oss.top(sortby='stars', categories='finance', limit=10))\nprint(summary[['full_name', 'open_issues', 'stargazers_count']])\n"})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"full_name"}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"open_issues"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"stargazers_count"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"vnpy/vnpy"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"8"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"19487"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"OpenBB-finance/OpenBBTerminal"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"149"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"17645"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"plotly/dash"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"707"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"17645"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"waditu/tushare"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"556"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"11829"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"wilsonfreitas/awesome-quant"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"9"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"10874"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"microsoft/qlib"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"232"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"9926"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"firefly-iii/firefly-iii"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"103"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"9228"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ranaroussi/yfinance"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"441"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"7938"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"mrjbq7/ta-lib"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"181"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"7157"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QuantConnect/Lean"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"417"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"6773"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"altosssummary",children:"alt.oss.summary"}),"\n",(0,s.jsx)(e.p,{children:"The alt.oss.summary SDK command gets you some info on a reposity - You just pass the repo path and can see all kinds of interesting information."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'summary = pd.DataFrame.from_dict(openbb.alt.oss.summary(repo="openbb-finance/openbbterminal"))\nprint(summary)\n'})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Metric"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"Value"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"OpenBBTerminal"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Owner"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"OpenBB-finance"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Creation Date"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"2020-12-20"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Last Update"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"2022-11-17"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Topics"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"artificial-intelligence, crypto, cryptocurrenc..."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Stars"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"17643"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Forks"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"1849"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Open Issues"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"152"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Language"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Python"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"License"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"MIT License"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Releases"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"10"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Last Release Downloads"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"10201"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u200b"}),(0,s.jsx)(e.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"examples---covid",children:"Examples - Covid"}),"\n",(0,s.jsx)(e.h3,{id:"altcovidglobal_deaths",children:"alt.covid.global_deaths"}),"\n",(0,s.jsxs)(e.p,{children:["The global_deaths command lets you check quickly the global deaths for any ",(0,s.jsx)(e.code,{children:"country"}),"\n\u200b"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'global_deaths = pd.DataFrame.from_dict(openbb.alt.covid.global_deaths(country="US"))\nprint(global_deaths)\n'})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"US"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-23"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0.0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-24"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0.0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-25"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0.0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-26"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0.0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-27"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0.0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"..."}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"..."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-12"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-40.0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-13"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"1.0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-14"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"216.0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-15"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"387.0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-16"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"825.0"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"altcovidslopes",children:"alt.covid.slopes"}),"\n",(0,s.jsx)(e.p,{children:"The slopes command lets you check the slopes per country"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"covid_slopes = pd.DataFrame.from_dict(openbb.alt.covid.slopes())\nprint(covid_slopes)\n"})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Country"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"Slope"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Japan"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"52199.941713"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Korea, South"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"42252.945717"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Germany"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"40376.811123"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"US"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"38365.586207"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Taiwan*"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"28677.574861"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"France"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"24898.053393"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Italy"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"20608.297664"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Greece"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"7841.223359"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Australia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"6222.661846"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Russia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"5837.264739"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Chile"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"5792.311457"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Brazil"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"5605.621802"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"United Kingdom"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"4755.022692"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Singapore"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"3867.323471"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Switzerland"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"3393.054950"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Malaysia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"3154.148387"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"..."}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"..."})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["You can pass ",(0,s.jsx)(e.code,{children:"days_back"})," ",(0,s.jsx)(e.code,{children:"limit"})," and ",(0,s.jsx)(e.code,{children:"ascend"})," to further drill down in your data."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"covid_slopes_params = pd.DataFrame.from_dict(\n    openbb.alt.covid.slopes(days_back=30, limit=10, ascend=True)\n)\nprint(covid_slopes_params)\n"})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Country"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"Slope"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Colombia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-9917.200222"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Iran"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-4000.273415"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Slovakia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-3553.934372"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Poland"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-563.439600"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Lebanon"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-364.833815"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Bangladesh"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-175.475640"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Albania"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-96.862736"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Bulgaria"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-39.990656"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Turkey"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-31.636263"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Belarus"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-21.939043"})]})]})]})]})}function o(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(a,{...t})}):a(t)}},94331:(t,e,l)=>{l.d(e,{A:()=>i});l(96540);var s=l(5260),n=l(74848);function i(t){let{title:e}=t;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:e})})}},28453:(t,e,l)=>{l.d(e,{R:()=>r,x:()=>d});var s=l(96540);const n={},i=s.createContext(n);function r(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);