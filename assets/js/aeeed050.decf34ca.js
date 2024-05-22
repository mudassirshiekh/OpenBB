"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2444],{82434:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var r=i(74848),n=i(28453),s=i(94331);const o={title:"Portfolio Optimization",description:"This page provides comprehensive instructions on Portfolio Optimization, ranging from mean-variance optimization to risk parity models and hierarchical clustering models. Detailed Python script examples are provided to guide the user through the optimization process using methods like Risk Parity, applying Hierarchical Risk Parity, and calculating portfolio returns and drawdowns.",keywords:["Portfolio Optimization","mean-variance optimization","risk parity models","hierarchical clustering models","Python scripting","Risk Parity","CVaR","Hierarchical Risk Parity","portfolio returns histogram","portfolio drawdowns"]},l=void 0,a={id:"sdk/data-available/portfolio/po",title:"Portfolio Optimization",description:"This page provides comprehensive instructions on Portfolio Optimization, ranging from mean-variance optimization to risk parity models and hierarchical clustering models. Detailed Python script examples are provided to guide the user through the optimization process using methods like Risk Parity, applying Hierarchical Risk Parity, and calculating portfolio returns and drawdowns.",source:"@site/content/sdk/data-available/portfolio/po.md",sourceDirName:"sdk/data-available/portfolio",slug:"/sdk/data-available/portfolio/po",permalink:"/sdk/data-available/portfolio/po",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/portfolio/po.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"Portfolio Optimization",description:"This page provides comprehensive instructions on Portfolio Optimization, ranging from mean-variance optimization to risk parity models and hierarchical clustering models. Detailed Python script examples are provided to guide the user through the optimization process using methods like Risk Parity, applying Hierarchical Risk Parity, and calculating portfolio returns and drawdowns.",keywords:["Portfolio Optimization","mean-variance optimization","risk parity models","hierarchical clustering models","Python scripting","Risk Parity","CVaR","Hierarchical Risk Parity","portfolio returns histogram","portfolio drawdowns"]},sidebar:"tutorialSidebar",previous:{title:"Portfolio",permalink:"/sdk/data-available/portfolio/"},next:{title:"Alternative",permalink:"/sdk/data-available/alternative"}},d={},h=[{value:"How to use",id:"how-to-use",level:2},{value:"OpenBB Parameters Template",id:"openbb-parameters-template",level:3},{value:"OpenBB Portfolio Template",id:"openbb-portfolio-template",level:3},{value:"Performing optimization",id:"performing-optimization",level:3},{value:"Examples",id:"examples",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"Portfolio Optimization - Portfolio - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,r.jsxs)(t.p,{children:["The Portfolio Optimization menu allows the user to apply advanced optimization techniques to a portfolio of any type and of any size. It does so by introducing a multitude of optimization techniques ranging from ",(0,r.jsx)("a",{href:"https://www.investopedia.com/terms/m/meanvariance-analysis.asp",target:"_blank",rel:"noreferrer noopener",children:"mean-variance optimization"})," to ",(0,r.jsx)("a",{href:"https://www.investopedia.com/terms/r/risk-parity.asp",target:"_blank",rel:"noreferrer noopener",children:"risk parity models"})," and ",(0,r.jsx)("a",{href:"https://www.investopedia.com/terms/c/cluster_analysis.asp",target:"_blank",rel:"noreferrer noopener",children:"hierarchical clustering models"}),". By providing Excel templates, the user can make sense of the vast array of parameters that each command has. E.g. think of the historic period you wish to use or which of the more than 10 risk measures and covariance methods should be used? These are questions the templates make easier to answer."]}),"\n",(0,r.jsxs)(t.p,{children:["The capabilities of the ",(0,r.jsx)(t.a,{href:"/terminal/reference/portfolio/po/load",children:"Portfolio Optiminzation menu"})," from the OpenBB Terminal are wrapped into a powerful SDK, enabling users to work with the data in a flexible environment that can be fully customized to meet the needs of any user. These functionalities allow the user to apply advanced optimization techniques to a portfolio of any type and of any size. It does so by introducing a multitude of optimization techniques ranging from ",(0,r.jsx)("a",{href:"https://www.investopedia.com/terms/m/meanvariance-analysis.asp",target:"_blank",rel:"noreferrer noopener",children:"mean-variance optimization"})," to ",(0,r.jsx)("a",{href:"https://www.investopedia.com/terms/r/risk-parity.asp",target:"_blank",rel:"noreferrer noopener",children:"risk parity models"})," and ",(0,r.jsx)("a",{href:"https://www.investopedia.com/terms/c/cluster_analysis.asp",target:"_blank",rel:"noreferrer noopener",children:"hierarchical clustering models"}),". By providing Excel templates, the user can make sense of the vast array of parameters that each command has. E.g. think of the historic period you wish to use or which of the more than 10 risk measures and covariance methods should be used? These are questions the templates make easier to answer."]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsx)(t.p,{children:"Start a Python script or Notebook file by importing the module:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\n"})}),"\n",(0,r.jsx)(t.p,{children:"This menu requires the usage of the Excel templates to work properly. As there is a lot of complexity involved around these techniques, these templates allow the user to understand what values for each parameter are actually used and allow for an easy way to define the allocation."}),"\n",(0,r.jsx)(t.admonition,{title:"If you wish to load in your own Excel allocation file, please follow the following steps:",type:"note",children:(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Download the Excel file that can be used as a template ",(0,r.jsx)(t.a,{href:"https://www.dropbox.com/s/wp1lcq86exyngjy/allocation_example.xlsx?dl=0",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Move the file inside the ",(0,r.jsx)(t.code,{children:"portfolio/allocation"})," folder within the ",(0,r.jsx)(t.a,{href:"/terminal/usage/data/custom-data",children:"OpenBBUserData"})," folder and, optionally, adjust the name to your liking."]}),"\n",(0,r.jsxs)(t.li,{children:["Open the Excel file and remove, edit or add to the values as you desire (e.g. your own allocation). This is the default template that is also loaded in with ",(0,r.jsx)(t.code,{children:"load --example"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"The file can now be used by following the guide."}),"\n"]})}),"\n",(0,r.jsx)(t.p,{children:"Furthermore, given the amount of options you can choose from in each command and giving the complexity of the topic, we also provide a parameter file (both .xlsx and .ini to adjust parameters in a user-friendly way)."}),"\n",(0,r.jsx)(t.admonition,{title:"If you wish to load in your own Excel or ini parameter file, please follow the following steps:",type:"note",children:(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Download the file that can be used as a template: ",(0,r.jsx)(t.a,{href:"https://www.dropbox.com/s/qfhd7ntj7mlwsuc/parameters_template.xlsx?dl=0",children:"xlsx"})," (recommended) or ",(0,r.jsx)(t.a,{href:"https://www.dropbox.com/s/3ehwg3hiwm89hgo/parameters_template.ini?dl=0",children:"ini"})," (advanced)."]}),"\n",(0,r.jsxs)(t.li,{children:["Move the file inside the ",(0,r.jsx)(t.code,{children:"portfolio/optimization"})," folder within the ",(0,r.jsx)(t.a,{href:"/terminal/usage/data/custom-data",children:"OpenBBUserData"})," folder and, optionally, adjust the name to your liking."]}),"\n",(0,r.jsx)(t.li,{children:"Open the file and set parameters as you wish."}),"\n",(0,r.jsxs)(t.li,{children:["Open up the OpenBB Terminal, go to ",(0,r.jsx)(t.code,{children:"portfolio/po"})," and type ",(0,r.jsx)(t.code,{children:"file --file"}),". The file should then be one of the options."]}),"\n"]})}),"\n",(0,r.jsx)(t.h3,{id:"openbb-parameters-template",children:"OpenBB Parameters Template"}),"\n",(0,r.jsxs)(t.p,{children:["This template provides the user with the ability to set define values for each parameter based on the optimization technique that is deployed. E.g. if you select ",(0,r.jsx)(t.code,{children:"riskparity"})," for the ",(0,r.jsx)(t.code,{children:"technique"})," parameter, you will notice that some parameters turn ",(0,r.jsx)("span",{style:{color:"#BEBEBE"},children:"grey"}),". This means that the parameter is irrelevant for the selected method."]}),"\n",(0,r.jsxs)(t.p,{children:["The OpenBB Terminal does, however, allow the user to run any model despite the ",(0,r.jsx)(t.code,{children:"technique"})," you selected. Therefore, if you are interested in running multiple models, consider removing the value for ",(0,r.jsx)(t.code,{children:"technique"}),". Do note that this makes it more difficult to understand which values are used for which model."]}),"\n",(0,r.jsx)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171144692-dd812efd-1e95-4a71-a93f-7ae8a480fe5d.png",children:(0,r.jsx)("img",{alt:"OpenBB Parameters Template",src:"https://user-images.githubusercontent.com/46355364/171144692-dd812efd-1e95-4a71-a93f-7ae8a480fe5d.png"})}),"\n",(0,r.jsx)(t.h3,{id:"openbb-portfolio-template",children:"OpenBB Portfolio Template"}),"\n",(0,r.jsx)(t.p,{children:"This template hands the user a format to work with it to define the portfolio. Here, categorization is applied based on asset class, sector, industry, country and currency. By using the dropdown menus within this Excel, you are able to apply the proper categorization. This is based on the same methodology as found in other areas of the terminal."}),"\n",(0,r.jsx)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171145061-cd618153-801c-4771-ba57-7ee0ab8c57e8.png",children:(0,r.jsx)("img",{alt:"OpenBB Portfolio Template",src:"https://user-images.githubusercontent.com/46355364/171145061-cd618153-801c-4771-ba57-7ee0ab8c57e8.png"})}),"\n",(0,r.jsx)(t.p,{children:"You can load in the portfolio template with the following code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import pandas as pd\n\n# Define your own orderbook path here, current value won't work\norder_book_path = \"allocation_example.xlsx\"\n\n# Read in the file\norder_book = pd.read_excel(order_book_path)\n\n# Adjust the columns accordingly\norder_book_cols = ['Ticker', 'Asset Class', 'Sector', 'Industry', 'Country',\n       'Current Invested Amount', 'Currency']\n\norder_book = order_book[order_book_cols]\n\n# Load in the portfolio\np = openbb.portfolio.po.load(symbols_file_path=order_book_path)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"performing-optimization",children:"Performing optimization"}),"\n",(0,r.jsxs)(t.p,{children:["Based on the parameters and allocation the user has set, the optimization process begins. What optimization technique is ideal depends entirely on the user's risk profile and objectives. As an illustration, ",(0,r.jsx)("a",{href:"https://www.investopedia.com/terms/r/risk-parity.asp",target:"_blank",rel:"noreferrer noopener",children:"Risk Parity"})," is presented below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# Perform calculations\nweights_riskparity, data_returns_riskparity = openbb.portfolio.po.riskparity(p)\n\nweights_riskparity\n"})}),"\n",(0,r.jsx)(t.p,{children:"Which returns:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"}}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Risk Parity"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AAPL"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.0462"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AMZN"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.04545"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"APTV"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.03177"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ASML"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.03328"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"BABA"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.04192"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"GOOGL"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.04758"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"HYG"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.13093"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"NKE"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.04909"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TIP"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.30826"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TLT"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.21927"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TSM"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.04626"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["It is possible to use the commands without loading in the parameters template or by using the parameters template but changing some arguments directly into the terminal. For example, using the same method as described above, the risk measure is changed to ",(0,r.jsx)("a",{href:"https://www.investopedia.com/terms/c/conditional_value_at_risk.asp",target:"_blank",rel:"noreferrer noopener",children:"Conditional Value at Risk (CVaR)"})," and the used historic period is increased to 10 years (keeping all other parameters unchanged):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# Perform calculations\nweights_riskparity, data_returns_riskparity = openbb.portfolio.po.riskparity(p, interval="5y", risk_measure="CVaR")\n\nweights_riskparity\n'})}),"\n",(0,r.jsx)(t.p,{children:"Which returns:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"}}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Risk Parity"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AAPL"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.04843"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AMZN"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.04302"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"APTV"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.03907"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ASML"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.03717"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"GOOGL"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.04877"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"HYG"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.14643"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"NKE"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.05275"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TIP"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.33264"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TLT"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.20371"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TSM"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.04802"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Starting by loading in the same dataset again with the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import pandas as pd\n\n# Define your own orderbook path here, current value won't work\norder_book_path = \"allocation_example.xlsx\"\n\n# Read in the file\norder_book = pd.read_excel(order_book_path)\n\n# Adjust the columns accordingly\norder_book_cols = ['Ticker', 'Asset Class', 'Sector', 'Industry', 'Country',\n       'Current Invested Amount', 'Currency']\n\norder_book = order_book[order_book_cols]\n\n# Load in the portfolio\nP = openbb.portfolio.po.load(symbols_file_path=order_book_path)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then, the ",(0,r.jsx)("a",{href:"https://jpm.pm-research.com/content/42/4/59.short",target:"_blank",rel:"noreferrer noopener",children:"Hierarchical Risk Parity"})," technique is applied by using the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"riskparity, data_returns_riskparity = openbb.portfolio.po.hrp(p, interval=\"5y\",\n    risk_measure='SLPM',\n    risk_aversion=0.8)\n\nprint(riskparity)\nprint(data_returns_riskparity)\n"})}),"\n",(0,r.jsx)(t.p,{children:"This results in a similar result as the following:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"}}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Hierarchical Risk Parity"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"A"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.00199"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AAL"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.00104"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AAP"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.00185"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AAPL"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.00184"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ABBV"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.0028"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"..."}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"..."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"NOC"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.00228"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"XOM"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.00167"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ZBRA"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.00156"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ZION"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.0014"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ZTS"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0.00225"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["It is possible to delve further into these findings with the ",(0,r.jsx)(t.code,{children:"plot"})," functionality for example done by looking at the portfolio's returns ",(0,r.jsx)("a",{href:"https://www.investopedia.com/terms/h/histogram.asp",target:"_blank",rel:"noreferrer noopener",children:"histogram"})," which also includes a variety of risk measures as well as the portfolio's drawdowns."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"openbb.portfolio.po.plot(p, category='SECTOR', chart_type=\"hist\")\n"})}),"\n",(0,r.jsx)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171145848-5a3f5333-6b7f-4d7a-a96e-0859adb1ce78.png",children:(0,r.jsx)("img",{alt:"Portfokio Returns Histogram",src:"https://user-images.githubusercontent.com/46355364/171145848-5a3f5333-6b7f-4d7a-a96e-0859adb1ce78.png"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"openbb.portfolio.po.plot(p, category='SECTOR', chart_type=\"dd\")\n"})}),"\n",(0,r.jsx)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171145983-2d2c1c2e-67d2-4839-b43a-51bd22332de8.png",children:(0,r.jsx)("img",{alt:"Portfolio Drawdowns",src:"https://user-images.githubusercontent.com/46355364/171145983-2d2c1c2e-67d2-4839-b43a-51bd22332de8.png"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var r=i(5260),n=i(74848);function s(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var r=i(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);