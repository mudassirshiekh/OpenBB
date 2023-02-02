"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28789],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Importing and Exporting Data",sidebar_position:3,description:"The OpenBBUserData folder's default location is the home of the system user account. By default this will be the following paths. Within the folder you can find files that you have exported as well as files that you wish to import directly into the OpenBB Terminal. For example, this could be an orderbook which you can store in OpenBBUserData/portfolio/holdings.",keywords:["export","import","data","excel","xlsx","csv","json","png","pdf","jpg","openbbuserdata","where is data exported","market data","financial data","free","openbb terminal"]},l=void 0,i={unversionedId:"guides/advanced/data",id:"guides/advanced/data",title:"Importing and Exporting Data",description:"The OpenBBUserData folder's default location is the home of the system user account. By default this will be the following paths. Within the folder you can find files that you have exported as well as files that you wish to import directly into the OpenBB Terminal. For example, this could be an orderbook which you can store in OpenBBUserData/portfolio/holdings.",source:"@site/content/terminal/guides/advanced/data.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/data",permalink:"/terminal/guides/advanced/data",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/guides/advanced/data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Importing and Exporting Data",sidebar_position:3,description:"The OpenBBUserData folder's default location is the home of the system user account. By default this will be the following paths. Within the folder you can find files that you have exported as well as files that you wish to import directly into the OpenBB Terminal. For example, this could be an orderbook which you can store in OpenBBUserData/portfolio/holdings.",keywords:["export","import","data","excel","xlsx","csv","json","png","pdf","jpg","openbbuserdata","where is data exported","market data","financial data","free","openbb terminal"]},sidebar:"tutorialSidebar",previous:{title:"Changing Sources",permalink:"/terminal/guides/advanced/changing-sources"},next:{title:"Customizing the Terminal",permalink:"/terminal/guides/advanced/customizing-the-terminal"}},s={},p=[{value:"The OpenBBUserData Folder",id:"the-openbbuserdata-folder",level:2},{value:"Exporting Files",id:"exporting-files",level:2},{value:"Importing Data",id:"importing-data",level:2},{value:"Alternative Folder",id:"alternative-folder",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-openbbuserdata-folder"},"The OpenBBUserData Folder"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenBBUserData")," folder's default location is the home of the system user account. By default this will be the following paths:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"macOS: ",(0,o.kt)("inlineCode",{parentName:"li"},"Macintosh HD/Users/<YOUR_USERNAME>/OpenBBUserData")),(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("inlineCode",{parentName:"li"},"C:/Users/<YOUR_USERNAME>/OpenBBUserData"))),(0,o.kt)("p",null,"Within the folder you can find files that you have exported as well as files that you wish to import directly into the OpenBB Terminal. For example, this could be an orderbook which you can store in ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenBBUserData/portfolio/holdings"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/195742985-19f0e420-d8f7-4fea-a145-a0243b8f2ddc.png",alt:"OpenBBUserData Folder"})),(0,o.kt)("p",null,"This folder contains all things user-created. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Screener presets"),(0,o.kt)("li",{parentName:"ul"},"Portfolio files"),(0,o.kt)("li",{parentName:"ul"},"Exported files"),(0,o.kt)("li",{parentName:"ul"},"Files to be imported by various functions"),(0,o.kt)("li",{parentName:"ul"},"Styles and themes"),(0,o.kt)("li",{parentName:"ul"},"Preferred data sources")),(0,o.kt)("h2",{id:"exporting-files"},"Exporting Files"),(0,o.kt)("p",null,"Within many of the functionalities, we offer the capability to export to Excel (xlsx and csv) or JSON. This can be demonstrated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--export")," argument, e.g. if you wish to export to ",(0,o.kt)("inlineCode",{parentName:"p"},"xlsx")," you would add ",(0,o.kt)("inlineCode",{parentName:"p"},"--export xlsx"),". "),(0,o.kt)("p",null,"For example, if you wish to download market data you can do so from the stocks menu with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load AAPL -s 2010-01-01 --export xlsx\n")),(0,o.kt)("p",null,"This results in the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/214817681-fd5324c3-003c-45eb-adf4-96d5b41a3c02.png",alt:"Export Example"})),(0,o.kt)("p",null,"We also allow you to define a file name, for example for the same stock tickers, we can also add in the filename. This time, we export to ",(0,o.kt)("inlineCode",{parentName:"p"},"csv"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load AAPL -s 2010-01-01 --export apple.csv\n")),(0,o.kt)("p",null,"Which results in the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/214818131-597b3bd0-9c66-43f1-bf0e-2c0a703e2645.png",alt:"Filename Example"})),(0,o.kt)("p",null,"Lastly, when you select the ",(0,o.kt)("inlineCode",{parentName:"p"},"xlsx")," option, you can also specify the sheet name with ",(0,o.kt)("inlineCode",{parentName:"p"},"--sheet-name")," which allows multiple datasets to be send to the same Excel file. Using the same stock ticker, we can define the following. First, get market data from the ",(0,o.kt)("inlineCode",{parentName:"p"},"stocks")," menu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load AAPL -s 2010-01-01 --export apple.xlsx --sheet-name Market Data\n")),(0,o.kt)("p",null,"Then enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"fa")," (Fundamental Analysis) menu and type:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Income Statement:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"income --source FinancialModelingPrep -l 10 --export apple.xlsx --sheet-name Income Statement\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Balance Sheet:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"balance --source FinancialModelingPrep -l 10 --export apple.xlsx --sheet-name Balance Sheet\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cash Flow Statement:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cash --source FinancialModelingPrep -l 10 --export apple.xlsx --sheet-name Cash Flow Statement\n")),(0,o.kt)("p",null,"This generates a file for Apple with market data from 2010-01-01 until now and income, balance and cash flow statements over the last 10 years as seen in the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/214824561-6eaf3a88-746a-4abc-91e1-420c9036c00d.png",alt:"Sheet Name Example"})),(0,o.kt)("p",null,"Next to that, we also allow exporting to images, this can be PNG, JPG, PDF and SVG. For example, using our ",(0,o.kt)("inlineCode",{parentName:"p"},"portfolio")," menu we can export the charts to any type of format which again can be found within the ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenBBUserData")," folder."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/214819518-cec40468-9019-440c-8bfe-7bcabc207578.png",alt:"image"})),(0,o.kt)("h2",{id:"importing-data"},"Importing Data"),(0,o.kt)("p",null,"Menus, such as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/guides/intros/econometrics"},"Econometrics")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/guides/intros/portfolio"},"Portfolio"),", allow the user to import their own dataset. Files available to import will be included with the selections made available by auto-complete. In the Econometrics menu, this is activated after pressing the space bar, ",(0,o.kt)("inlineCode",{parentName:"p"},"load -f ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/204921760-38742f6c-ec78-4009-9c23-54dcb0504524.png",alt:"Importing Data"})),(0,o.kt)("p",null,"The Econometrics menu looks into the ",(0,o.kt)("inlineCode",{parentName:"p"},"exports")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_imports/econometrics")," folder. For the Portfolio functionalities the ",(0,o.kt)("inlineCode",{parentName:"p"},"portfolio")," menu looks into the ",(0,o.kt)("inlineCode",{parentName:"p"},"portfolio/holdings")," folder whereas the ",(0,o.kt)("inlineCode",{parentName:"p"},"portfolio/po")," menu looks into the ",(0,o.kt)("inlineCode",{parentName:"p"},"portfolio/allocation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"portfolio/optimization")," folder for the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," command respectively. Please make sure to read the relevant guides to understand how this works."),(0,o.kt)("h2",{id:"alternative-folder"},"Alternative Folder"),(0,o.kt)("p",null,"The location of this folder can be set by the user from the ",(0,o.kt)("inlineCode",{parentName:"p"},"/settings")," menu. There should be no need to update paths in this menu unless the folders have been moved manually. If the location of the OpenBBUserData folder must be changed, it is best to move the entire existing folder to the new path. The path is then changed under the settings menu with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"userdata --folder /path_to/OpenBBUserData\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/195736718-a1b821da-5977-437a-bd18-b44add2a29a2.png",alt:"The Settings Menu"})))}d.isMDXComponent=!0}}]);