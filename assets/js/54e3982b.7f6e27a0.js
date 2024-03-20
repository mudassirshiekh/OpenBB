"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},34073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const i={title:"bpag",description:"The page provides information on how to use the 'bpag' command to conduct the Breusch-Pagan heteroscedasticity test in econometrics. It requires running OLS with dependent and independent variables and shows whether there is heteroscedasticity in the data.",keywords:["Breusch-Pagan test","heteroscedasticity test","OLS","econometrics","bpag command","data analysis"]},s=void 0,c={unversionedId:"terminal/reference/econometrics/bpag",id:"terminal/reference/econometrics/bpag",title:"bpag",description:"The page provides information on how to use the 'bpag' command to conduct the Breusch-Pagan heteroscedasticity test in econometrics. It requires running OLS with dependent and independent variables and shows whether there is heteroscedasticity in the data.",source:"@site/content/terminal/reference/econometrics/bpag.md",sourceDirName:"terminal/reference/econometrics",slug:"/terminal/reference/econometrics/bpag",permalink:"/terminal/reference/econometrics/bpag",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/econometrics/bpag.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1710940729,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"bpag",description:"The page provides information on how to use the 'bpag' command to conduct the Breusch-Pagan heteroscedasticity test in econometrics. It requires running OLS with dependent and independent variables and shows whether there is heteroscedasticity in the data.",keywords:["Breusch-Pagan test","heteroscedasticity test","OLS","econometrics","bpag command","data analysis"]},sidebar:"tutorialSidebar",previous:{title:"bgod",permalink:"/terminal/reference/econometrics/bgod"},next:{title:"clean",permalink:"/terminal/reference/econometrics/clean"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"econometrics /bpag - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Show Breusch-Pagan heteroscedasticity test results. Needs OLS to be run in advance with independent and dependent variables"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"bpag\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Jun 01, 06:29 (\ud83e\udd8b) /econometrics/ $ load longley -a ll\n\n2022 Jun 01, 06:29 (\ud83e\udd8b) /econometrics/ $ ols -d ll.totemp -i ll.gnpdefl,ll.gnp,ll.unemp,ll.armed,ll.pop,ll.year\n                                 OLS Regression Results                                \n=======================================================================================\nDep. Variable:              ll.totemp   R-squared (uncentered):                   1.000\nModel:                            OLS   Adj. R-squared (uncentered):              1.000\nMethod:                 Least Squares   F-statistic:                          5.052e+04\nDate:                Wed, 01 Jun 2022   Prob (F-statistic):                    8.20e-22\nTime:                        12:29:44   Log-Likelihood:                         -117.56\nNo. Observations:                  16   AIC:                                      247.1\nDf Residuals:                      10   BIC:                                      251.8\nDf Model:                           6                                                  \nCovariance Type:            nonrobust                                                  \n==============================================================================\n                 coef    std err          t      P|t|      [0.025      0.975]\n------------------------------------------------------------------------------\nll.gnpdefl   -52.9936    129.545     -0.409      0.691    -341.638     235.650\nll.gnp         0.0711      0.030      2.356      0.040       0.004       0.138\nll.unemp      -0.4235      0.418     -1.014      0.335      -1.354       0.507\nll.armed      -0.5726      0.279     -2.052      0.067      -1.194       0.049\nll.pop        -0.4142      0.321     -1.289      0.226      -1.130       0.302\nll.year       48.4179     17.689      2.737      0.021       9.003      87.832\n==============================================================================\nOmnibus:                        1.443   Durbin-Watson:                   1.277\nProb(Omnibus):                  0.486   Jarque-Bera (JB):                0.605\nSkew:                           0.476   Prob(JB):                        0.739\nKurtosis:                       3.031   Cond. No.                     4.56e+05\n==============================================================================\n\nNotes:\n[1] R\xb2 is computed without centering (uncentered) since the model does not contain a constant.\n[2] Standard Errors assume that the covariance matrix of the errors is correctly specified.\n[3] The condition number is large, 4.56e+05. This might indicate that there are\nstrong multicollinearity or other numerical problems.\n\nWarnings:\nkurtosistest only valid for n=20 ... continuing anyway, n=16\n\n2022 Jun 01, 06:30 (\ud83e\udd8b) /econometrics/ $ bpag\n\nBreusch-Pagan heteroscedasticity test\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503          \u2503 Breusch-Pagan \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 lm-stat  \u2502 7.90          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 p-value  \u2502 0.16          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 f-stat   \u2502 1.63          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 fp-value \u2502 0.24          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nThe result 0.16 indicates the existence of heteroscedasticity. Consider taking the log or a rate for the dependent variable.\n")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);