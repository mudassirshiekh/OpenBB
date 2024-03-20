"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Basics",sidebar_position:1,description:"This page provides a detailed overview of using the OpenBB SDK - a tool that brings programmatic access to nearly all Terminal commands. Topics covered include installation, essential terminal command usage, working with Python environments, using Jupyter and various code editors, managing API keys, functionality, and navigation of the SDK. There are also specifics on using function inputs and responses, as well as dealing with plot themes and changing data sources. Support is offered via the support page, GitHub, and Discord.",keywords:["OpenBB SDK","Terminal commands","Installation","Python environment","Jupyter","Code Editors","API Keys","Programming","Conda","Pandas DataFrame","Python packages","Stocks","Screener preset","OpenBB Hub","VS Code"]},i=void 0,s={unversionedId:"sdk/usage/basics",id:"sdk/usage/basics",title:"Basics",description:"This page provides a detailed overview of using the OpenBB SDK - a tool that brings programmatic access to nearly all Terminal commands. Topics covered include installation, essential terminal command usage, working with Python environments, using Jupyter and various code editors, managing API keys, functionality, and navigation of the SDK. There are also specifics on using function inputs and responses, as well as dealing with plot themes and changing data sources. Support is offered via the support page, GitHub, and Discord.",source:"@site/content/sdk/usage/basics.md",sourceDirName:"sdk/usage",slug:"/sdk/usage/basics",permalink:"/sdk/usage/basics",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/usage/basics.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1710940729,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:1,frontMatter:{title:"Basics",sidebar_position:1,description:"This page provides a detailed overview of using the OpenBB SDK - a tool that brings programmatic access to nearly all Terminal commands. Topics covered include installation, essential terminal command usage, working with Python environments, using Jupyter and various code editors, managing API keys, functionality, and navigation of the SDK. There are also specifics on using function inputs and responses, as well as dealing with plot themes and changing data sources. Support is offered via the support page, GitHub, and Discord.",keywords:["OpenBB SDK","Terminal commands","Installation","Python environment","Jupyter","Code Editors","API Keys","Programming","Conda","Pandas DataFrame","Python packages","Stocks","Screener preset","OpenBB Hub","VS Code"]},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/sdk/usage/"},next:{title:"Setting API Keys",permalink:"/sdk/usage/api-keys"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Importing the OpenBB SDK",id:"importing-the-openbb-sdk",level:2},{value:"Terminal Command Line",id:"terminal-command-line",level:3},{value:"Jupyter",id:"jupyter",level:3},{value:"Code Editors and IDEs",id:"code-editors-and-ides",level:3},{value:"Helpful VS Code Extensions",id:"helpful-vs-code-extensions",level:4},{value:"Navigation",id:"navigation",level:2},{value:"Docstrings",id:"docstrings",level:2},{value:"API Keys",id:"api-keys",level:2},{value:"Authorize With the OpenBB Hub",id:"authorize-with-the-openbb-hub",level:3},{value:"How to Use the SDK",id:"how-to-use-the-sdk",level:2},{value:"Function Inputs",id:"function-inputs",level:3},{value:"Function Responses",id:"function-responses",level:3},{value:"Passing Data Through",id:"passing-data-through",level:3},{value:"OpenBB Figure Objects",id:"openbb-figure-objects",level:3},{value:"Chart Themes",id:"chart-themes",level:3},{value:"Chart Cheat Sheet",id:"chart-cheat-sheet",level:3},{value:"Changing Data Sources",id:"changing-data-sources",level:3},{value:"Support, Bug Reports &amp; Feedback",id:"support-bug-reports--feedback",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The OpenBB SDK provides programmatic access to nearly all Terminal commands, allowing custom scripts and functions to power creations built on top of the core platform.  It is easy to use and as flexible as one's imagination.  The sections below will outline how to get started using it.  If it isn't already installed, follow the instructions to install via ",(0,o.kt)("a",{parentName:"p",href:"/terminal/installation/pypi"},"PyPi (pip)")," or from the ",(0,o.kt)("a",{parentName:"p",href:"/terminal/installation/source"},"source code"),"."),(0,o.kt)("h2",{id:"importing-the-openbb-sdk"},"Importing the OpenBB SDK"),(0,o.kt)("p",null,"No additional software is required to use the OpenBB SDK, it can be consumed directly from the command line Terminal within the virtual environment created during the installation process."),(0,o.kt)("h3",{id:"terminal-command-line"},"Terminal Command Line"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"obb")," virtual environment has both ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ipython")," as methods for starting a new session from scratch."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step 1: Activate the ",(0,o.kt)("inlineCode",{parentName:"li"},"obb")," virtual environment.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conda activate obb"))))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If this doesn't work, there may be an obvious reason why."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The installation was not completed."),(0,o.kt)("li",{parentName:"ul"},"The terminal being used is different from the one which was used for installation.  For example, Miniconda was installed using ",(0,o.kt)("inlineCode",{parentName:"li"},"CMD.exe")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Anaconda Prompt"),", but the current terminal is PowerShell.")),(0,o.kt)("p",{parentName:"admonition"},"Open the same terminal used for installation and activate the ",(0,o.kt)("inlineCode",{parentName:"p"},"obb")," environment, then enter:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"conda init --all --system\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Exit")," and re-open.  Conda should now be callable from all terminal shell profiles.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step 2: Start a new Python or iPython session.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ipython"))))),(0,o.kt)("p",null,"This will display a similar message to the one below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'(obb) Steves-MacBook-Pro:OpenBBTerminal steve$ python\nPython 3.10.8 | packaged by conda-forge | (main, Nov 22 2022, 08:25:13) [Clang 14.0.6 ] on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>> from openbb_terminal.sdk import openbb\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ipython")," will look slightly different."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"(obb) Steves-MacBook-Pro:OpenBBTerminal steve$ ipython\nPython 3.10.8 | packaged by conda-forge | (main, Nov 22 2022, 08:25:13) [Clang 14.0.6 ]\nType 'copyright', 'credits' or 'license' for more information\nIPython 8.11.0 -- An enhanced Interactive Python. Type '?' for help.\n\nIn [1]: from openbb_terminal.sdk import openbb\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ipython")," is a good choice for exploring and working on scripts without saving them as a new file, while the plain command line version, ",(0,o.kt)("inlineCode",{parentName:"p"},"python"),", is what a scripted ",(0,o.kt)("inlineCode",{parentName:"p"},".py")," file would use to run."),(0,o.kt)("h3",{id:"jupyter"},"Jupyter"),(0,o.kt)("p",null,"Jupyter is a code editor and IDE that runs in a web browser, served over localhost.  No additional installation steps are required to use it, in two flavours, ",(0,o.kt)("inlineCode",{parentName:"p"},"notebook")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lab"),".  Both are launched from the terminal command line, after activating the ",(0,o.kt)("inlineCode",{parentName:"p"},"obb")," virtual Python environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"conda activate obb\njupyter lab\n")),(0,o.kt)("p",null,"Or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"conda activate obb\njupyter notebook\n")),(0,o.kt)("p",null,"This will launch the Jupyter server and open a browser window with the application."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/4a289ef0-11af-4909-af7a-66fe97e9ffea",alt:"Jupyter Lab"})),(0,o.kt)("p",null,"There will be only one choice for the kernel, ",(0,o.kt)("inlineCode",{parentName:"p"},"Python3 (ipykernel)"),".  Click on, ",(0,o.kt)("inlineCode",{parentName:"p"},"Select"),"."),(0,o.kt)("p",null,"In the console window (or a new Notebook file) the OpenBB SDK is imported by entering:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"from openbb_terminal.sdk import openbb\n")),(0,o.kt)("p",null,"Docstrings can be viewed in a pop-up with the key command, ",(0,o.kt)("inlineCode",{parentName:"p"},"shift+tab"),".  The contents of each module (similar to the menus in the OpenBB Terminal) can be browsed by hitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"tab")," key."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/7cc04e49-57fe-4bbf-bb5e-4cfbdab62eaf",alt:"Jupyter Lab Import"})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Contextual Help")," window displays more details, and also previews DataFrames after they are assigned.  These tools are an excellent way to understand the structure of the SDK along with the syntax for each command and argument."),(0,o.kt)("h3",{id:"code-editors-and-ides"},"Code Editors and IDEs"),(0,o.kt)("p",null,"Regardless of the code editor of choice, the program must know that the ",(0,o.kt)("inlineCode",{parentName:"p"},"obb")," virtual Python environment exists.  The steps for setting it up will vary by platform, consult the manual for the specific editor.  VS Code is a recommended choice because it is free, flexible, and has integrations with GitHub and Jupyter, and has a plugin marketplace that can enhance a workspace with tools like GitHub Co-Pilot.  Some code editing and IDE suites will charge a subscription for Jupyter integrations, which make them less ideal."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Spyder is not recommended for installing or operating the OpenBB SDK.")),(0,o.kt)("h4",{id:"helpful-vs-code-extensions"},"Helpful VS Code Extensions"),(0,o.kt)("p",null,"Installing a few extensions in VS Code will improve the user experience and provide enhanced functionality."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python Extension Pack (Don Jayamanne)"),(0,o.kt)("li",{parentName:"ul"},"Jupyter PowerToys (Microsoft)"),(0,o.kt)("li",{parentName:"ul"},"Jupyter Notebook Renderers"),(0,o.kt)("li",{parentName:"ul"},"Codeium")),(0,o.kt)("p",null,"Icons on the sidebar for Jupyter and Python provide quick access to the virtual environments, and a new notebook or interactive window are created with a mouse click."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/bf04c707-a591-47c8-a5e9-c4c0e60e302a",alt:"VS Code"})),(0,o.kt)("p",null,"When opening a Notebook file, or a new interactive window, ensure that the correct environment is being used.  If the selected environment is not the one created during installation, the OpenBB SDK will not import."),(0,o.kt)("p",null,"Click on the item in the top-right of the window to select or change the environment."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/0e4904cf-4ff7-4130-b965-30b3de140392",alt:"VS Code environment"})),(0,o.kt)("p",null,"The OpenBB SDK is imported with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,o.kt)("h2",{id:"navigation"},"Navigation"),(0,o.kt)("p",null,"The layout of the OpenBB SDK is similar to the menus in the OpenBB Terminal, with each one represented as a module.  Instead of a ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," in the path, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"."),".  For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"openbb.stocks.gov")," is the Government submodule of ",(0,o.kt)("inlineCode",{parentName:"p"},"stocks"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ad3617fe-b84c-4bbd-9139-2563702849ba",alt:"Navigation"})),(0,o.kt)("p",null,"The attributes for each module - and docstrings for a function - can also be printed directly to the screen, insert a question mark at the end of the string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jupyterpython"},"openbb.stocks.gov.contracts?\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": For a regular ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," session, the syntax is: ",(0,o.kt)("inlineCode",{parentName:"p"},"help(openbb.stocks.gov.contracts)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Signature:      openbb.stocks.gov.contracts(symbol: str, past_transaction_days: int = 10) -> pandas.core.frame.DataFrame\nCall signature: openbb.stocks.gov.contracts(*args: Any, **kwargs: Any) -> Any\nType:           get_contracts\nString form:    <openbb_terminal.stocks.government.quiverquant_model.Operation object at 0x2b57d0700>\nFile:           ~/GitHub/OpenBBTerminal/openbb_terminal/stocks/government/quiverquant_model.py\nDocstring:\nGet government contracts for ticker [Source: quiverquant.com]\n\nParameters\n----------\nsymbol: str\n    Ticker to get congress trading data from\npast_transaction_days: int\n    Number of days to get transactions for\n\nReturns\n-------\npd.DataFrame\n    Most recent transactions by members of U.S. Congress\n")),(0,o.kt)("h2",{id:"docstrings"},"Docstrings"),(0,o.kt)("p",null,"Docstrings are the SDK equivalent to the Terminal's ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," argument.  They contain information on the functions, its input parameters, and the type of data being returned.  The Contextual Help window, in Jupyter, is a very convenient way to keep this information on hand.  Referencing the docstrings will greatly reduce the need to consult the online documentation pages."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ffbfcdec-c16e-41e7-8828-b099325910a5",alt:"Docstrings"})),(0,o.kt)("h2",{id:"api-keys"},"API Keys"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"keys")," module provides methods for managing access credentials to data sources.  If the API keys have already been set in a locally installed OpenBB Terminal application, no further action is required.  A new installation can be authorized using the OpenBB Hub, or they can be entered manually in the SDK.  For instructions on obtaining and authorizing each individual source, see the guide ",(0,o.kt)("a",{parentName:"p",href:"/sdk/usage//api-keys"},"here"),".  A key can be stored permanently, or only for the active session.  Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"persist")," boolean argument to remember or forget it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'openbb.keys.fred(key= "REPLACE_WITH_YOUR_KEY", persist=True)\n')),(0,o.kt)("h3",{id:"authorize-with-the-openbb-hub"},"Authorize With the OpenBB Hub"),(0,o.kt)("p",null,"API keys can be imported to the session by logging in to an ",(0,o.kt)("a",{parentName:"p",href:"https://my.openbb.co/app/sdk/api-keys"},"OpenBB Hub account"),".  The session can persist, if desired, otherwise they will be valid only for the current session.  We recommend connecting to Hub by generating a Personal Access Token.  Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://my.openbb.co/app/sdk/api-keys"},"link"),', scroll to the bottom of the page, and click the "Generate" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/8c3988b4-cba9-4008-b8f3-04eef72878be",alt:"OpenBB Personal Access Token"})),(0,o.kt)("p",null,"Copy the generated token and enter as the value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," parameter, ignoring the email and password fields.  By default, the credentials will be forgotten when the SDK session is terminated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jupyterpython"},"openbb.login?\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Signature:\nopenbb.login(\n    email: str = '',\n    password: str = '',\n    token: str = '',\n    keep_session: bool = False,\n    silent: bool = False,\n)\nDocstring:\nLogin and load user info.\nIf there is a saved session it will be used (this can be achieved by `keep_session=True`).\nIf there's not a local session,\nthe user can use either email and password or the OpenBB Personal Access Token.\n\nParameters\n----------\nemail : str\n    The email.\npassword : str\n    The password.\ntoken : str\n    The OpenBB Personal Access Token.\nkeep_session : bool\n    Keep the session, i.e., next time the user logs in,\n    there is no need to enter the email and password or the token.\nsilent : bool\n    If True, the console print will be silent.\n\nExamples\n--------\n>>> from openbb_terminal.sdk import openbb\n>>> openbb.login(email=\"<your email>\", password=\"<your password>\")\nFile:      ~/GitHub/OpenBBTerminal/openbb_terminal/core/session/sdk_session.py\nType:      function\n")),(0,o.kt)("p",null,"Login with an access token with the syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'openbb.login(token = "REPLACE_WITH_THE_PERSONAL_ACCESS_TOKEN")\n')),(0,o.kt)("p",null,"The token can be revoked from the OpenBB Hub API Keys page, by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Regenerate")," button, which will invalidate the current one."),(0,o.kt)("h2",{id:"how-to-use-the-sdk"},"How to Use the SDK"),(0,o.kt)("p",null,"The syntax examples provided assume that the SDK has already been imported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,o.kt)("h3",{id:"function-inputs"},"Function Inputs"),(0,o.kt)("p",null,"The majority of parameters accept a string as the input.  The docstrings will describe the expected inputs, but most will follow these general guidelines, unless otherwise stated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"String values are surrounded by quotation marks, or a single apostrophe.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"the string"'),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"'the string to enter'")))),(0,o.kt)("li",{parentName:"ul"},"Some commands expect a list for the main input, and are contained within square brackets, with each item separated by a comma.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'["the first string", "the second string"]')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'openbb.stocks.quote(["SPY", "QQQ", "IWM", "AAPL", "MSFT", "TSLA", "GOOG", "META", "AMZN"])')))),(0,o.kt)("li",{parentName:"ul"},'Dates are entered as a string, and follow the format: "YYYY-MM-DD".',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'openbb.stocks.load("SPY", start_date="1994-01-01")')))),(0,o.kt)("li",{parentName:"ul"},"When the expected input of a parameter is an integer or float value, they are entered without quotes.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"limit = 10")))),(0,o.kt)("li",{parentName:"ul"},"Boolean arguments are always capitalized.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"True"),(0,o.kt)("li",{parentName:"ul"},"False")))),(0,o.kt)("h3",{id:"function-responses"},"Function Responses"),(0,o.kt)("p",null,"Most data objects returned by functions are Pandas DataFrames, and the results will be printed without first assigning it to a variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.quote("SPY")\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/cb932ee1-3a87-4744-81a5-840c452eac51",alt:"Data Response"})),(0,o.kt)("p",null,"The presentation of the responses will vary by platform, the sample above is from Jupyter Lab.  When the same function in the Terminal outputs a chart, the response is separated into the model and view components.  The SDK map will show two functions for the same command where the second has ",(0,o.kt)("inlineCode",{parentName:"p"},"_chart")," added on.  Using this second command will display the chart while the former returns the raw Pandas DataFrame."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/08bccaae-13f3-4fcd-857c-13cd30250492",alt:"Model and View"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'data = openbb.stocks.load("SPY", weekly = True)\nopenbb.ta.atr_chart(data, symbol = "SPY")\n')),(0,o.kt)("p",null,"If the SDK session is from the command line (",(0,o.kt)("inlineCode",{parentName:"p"},"python")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ipython"),"), a window will open to display the chart.  Within an IDE, or Jupyter Notebook, they will be displayed inline and will not have the same toolbars."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b668556b-27a5-49cc-989b-8d7de1e420e2",alt:"openbb.ta.atr_chart"})),(0,o.kt)("h3",{id:"passing-data-through"},"Passing Data Through"),(0,o.kt)("p",null,"Using the output of one function to feed another input will be a common workflow.  Basic operations do not require importing any Python packages.  The example below adds a new column, with the 20-day simple moving average, to the existing DataFrame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'data = openbb.stocks.load(\'VOO\', start_date = "2022-05-15")\ndata["SMA"] = openbb.ta.sma(data = data["Close"], length = 20)\n')),(0,o.kt)("p",null,"The code block below takes the top ten results from the ",(0,o.kt)("inlineCode",{parentName:"p"},"unusual_volume")," ",(0,o.kt)("a",{parentName:"p",href:"/sdk/menus/stocks/screener"},"screener preset"),", gets a single DataFrame with the daily returns for each ticker YTD, then identifies the date of the best performing day.  These operations will require importing the Pandas library to the session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\n\nresults = openbb.stocks.screener.screener_data(\'unusual_volume\')\ntickers = results.sort_values(by = "Volume", ascending = False).head(10)["Ticker"].to_list()\nopenbb.stocks.quote(tickers)\nytd_returns = openbb.stocks.ca.hist(tickers, start_date = \'2023-01-01\', candle_type = \'r\')\ndate = ytd_returns.idxmax()\nreturns = ytd_returns.max()\nmax_returns = pd.concat([date,returns], axis = 1)\nmax_returns.columns = ["Date", "Returns"]\n\nmax_returns\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"}),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"right"},"Returns"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GSIT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-05-12 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"2.10366")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"WISA"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-03-27 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.894737")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"LMFA"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-05-15 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.399731")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"OKE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-05-05 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.0300176")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GETR"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-05-12 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.450151")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"MMP"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-05-15 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.12994")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ORMP"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-05-15 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.106007")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"MGOL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-03-28 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.322957")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"TIVC"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-01-12 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.19")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"REAL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-05-08 00:00:00"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.191304")))),(0,o.kt)("h3",{id:"openbb-figure-objects"},"OpenBB Figure Objects"),(0,o.kt)("p",null,"Functions returning a chart will have a boolean argument labeled, ",(0,o.kt)("inlineCode",{parentName:"p"},"external_axes"),".  When this is set as ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", and the function's output is assigned to a variable, a Plotly figure object is returned,  which can be manipulated accordingly.  Copy the block below to see all the parameters that can be set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jupyterpython"},'data = openbb.stocks.candle("SPY", external_axes = True)\ndata?\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/71f272f4-49eb-42c7-bd93-bd06f364ce32",alt:"OpenBB Figure"})),(0,o.kt)("p",null,"Charts called from a command line session, will open a new window and appear the same as they are in the OpenBB Terminal application."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233247951-e011fe2c-23a6-4518-bd17-3f43a9c2011a.png",alt:"OpenBB Terminal Charts"})),(0,o.kt)("p",null,"See the page ",(0,o.kt)("a",{parentName:"p",href:"/terminal/usage/basics#charts"},"here")," for a detailed explanation of the toolbar."),(0,o.kt)("p",null,"To create an empty figure object, import the ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenBBFigure")," class directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.core.plots import OpenBBFigure\nfig = OpenBBFigure()\n")),(0,o.kt)("h3",{id:"chart-themes"},"Chart Themes"),(0,o.kt)("p",null,"Themes used by the charting and tables libraries are accessible in the SDK through a separate import statement."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal import theme\n")),(0,o.kt)("p",null,"Print the path to the location of the style files with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"theme.plt_styles_available\n")),(0,o.kt)("p",null,"Set the charts theme as light or dark:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"theme.apply_style('light')\n")),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://plotly.com/python/templates/"},"Plotly documentation")," for details on customizing style sheets."),(0,o.kt)("h3",{id:"chart-cheat-sheet"},"Chart Cheat Sheet"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234313541-3d725e1c-ce48-4413-9267-b03571e0eccd.png",alt:"OpenBB Chart Cheat Sheet"})),(0,o.kt)("h3",{id:"changing-data-sources"},"Changing Data Sources"),(0,o.kt)("p",null,"The source of the data can be specified - where more than one is available - by including the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," argument in the syntax."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'polygon = openbb.stocks.load("SPY", source = "Polygon")\neodhd = openbb.stocks.load("SPY", source = "EODHD")\nav = openbb.stocks.load("SPY", source = "AlphaVantage")\nintrinio = openbb.stocks.load("SPY", source = "Intrinio")\ndatabento = openbb.stocks.load("SPY", source = "DataBento")\n')),(0,o.kt)("h2",{id:"support-bug-reports--feedback"},"Support, Bug Reports & Feedback"),(0,o.kt)("p",null,"Issues can be raised through the ",(0,o.kt)("a",{parentName:"p",href:"https://my.openbb.co/app/sdk/support"},"support page")," or on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new/choose"},"GitHub"),".  You can also chat with the community on ",(0,o.kt)("a",{parentName:"p",href:"https://openbb.co/discord"},"Discord")," to find help or inspiration.  Feedback is always welcome."))}m.isMDXComponent=!0}}]);