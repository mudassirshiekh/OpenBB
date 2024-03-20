"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(35742);function o(e){let{title:t}=e;return a.createElement(i.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(15569);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,r]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(i.Toggle,{isOn:o,handleChange:()=>r(!o)}))),o&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},3283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),o=n(88828),r=n(20630);const s={title:"Introduction to Routines",sidebar_position:2,description:"The page provides a detailed introduction to OpenBB Routines, which allow users to automate processes and repetitive tasks in financial analysis and data collection. It explains basic scripts, routine execution, and guides users on getting started with an example.",keywords:["OpenBB Routines","automated processes","repetitive tasks","data collection","basic script","routine execution","tutorial video"]},l=void 0,p={unversionedId:"terminal/usage/routines/introduction-to-routines",id:"terminal/usage/routines/introduction-to-routines",title:"Introduction to Routines",description:"The page provides a detailed introduction to OpenBB Routines, which allow users to automate processes and repetitive tasks in financial analysis and data collection. It explains basic scripts, routine execution, and guides users on getting started with an example.",source:"@site/content/terminal/usage/routines/introduction-to-routines.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/introduction-to-routines",permalink:"/terminal/usage/routines/introduction-to-routines",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/routines/introduction-to-routines.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1710940729,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:2,frontMatter:{title:"Introduction to Routines",sidebar_position:2,description:"The page provides a detailed introduction to OpenBB Routines, which allow users to automate processes and repetitive tasks in financial analysis and data collection. It explains basic scripts, routine execution, and guides users on getting started with an example.",keywords:["OpenBB Routines","automated processes","repetitive tasks","data collection","basic script","routine execution","tutorial video"]},sidebar:"tutorialSidebar",previous:{title:"The Pipeline of Commands",permalink:"/terminal/usage/routines/pipeline-of-commands"},next:{title:"Overlay Financial Data",permalink:"/terminal/usage/routines/overlay-financial-data"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Routine execution",id:"routine-execution",level:2},{value:"Basic Script",id:"basic-script",level:2},{value:"Getting started",id:"getting-started",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{title:"Introduction to Routines - Routines - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,i.kt)(r.Z,{youtubeLink:"https://www.youtube.com/embed/p1pY6Zujvnc?si=HWStqbVnkU_Lw_P-",videoLegend:"Show short introduction to OpenBB routines",mdxType:"TutorialVideo"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"OpenBB Routines allows users to capture and write simple scripts for automating processes and repetitive tasks. In essence, these are text plain-text files that can be created or modified in any basic text editor with the only difference being the ",(0,i.kt)("inlineCode",{parentName:"p"},".openbb")," extension."),(0,i.kt)("p",null,"Other software like STATA, SPSS, and R-Studio share similar functionality in the area of Econometrics and the OpenBB routine scripts venture into the area of financial analysis and data collection to speed up the process."),(0,i.kt)("p",null,"Routines make it easy to automate a series of processes, and this includes mining and dumping large amounts of data to organized spreadsheets.  Making use of ",(0,i.kt)("inlineCode",{parentName:"p"},"--export")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--sheet-name"),", data collection is more efficient and reliable, with results that are easily replicable."),(0,i.kt)("p",null,"A pipeline of commands is difficult to share, so to encourage users to share ideas and processes, we created ",(0,i.kt)("a",{parentName:"p",href:"/terminal/usage/routines/community-routines"},"Community Routines")," for the ",(0,i.kt)("a",{parentName:"p",href:"https://my.openbb.co/"},"OpenBB Hub"),".  Routines can be created, stored, and shared - executable in any Terminal installation, by URL."),(0,i.kt)("h2",{id:"routine-execution"},"Routine execution"),(0,i.kt)("p",null,"Run a routine file from the main menu, with the ",(0,i.kt)("inlineCode",{parentName:"p"},"exe")," command. A great start would be to use ",(0,i.kt)("inlineCode",{parentName:"p"},"exe --example")," to get a sense of what this functionality does. Below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," dialogue is displayed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/exe -h\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"usage: exe [--file FILE [FILE ...]] [-i ROUTINE_ARGS] [-e] [--url URL] [-h]\n\nExecute automated routine script. For an example, please use `exe --example` and for documentation and to learn how create your own script type `about exe`.\n\noptional arguments:\n  --file FILE [FILE ...], -f FILE [FILE ...]\n                        The path or .openbb file to run. (default: None)\n  -i ROUTINE_ARGS, --input ROUTINE_ARGS\n                        Select multiple inputs to be replaced in the routine and separated by commas. E.g. GME,AMC,BTC-USD (default: None)\n  -e, --example         Run an example script to understand how routines can be used. (default: False)\n  --url URL             URL to run openbb script from. (default: None)\n  -h, --help            show this help message (default: False)\n\nFor more information and examples, use 'about exe' to access the related guide.\n")),(0,i.kt)("h2",{id:"basic-script"},"Basic Script"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/eaeb3511-d544-4579-8d76-f7a4fd7bb1d3",alt:"image"})),(0,i.kt)("p",null,"The most basic script style contains 2 main elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Comments"),": any text after a hashtag (",(0,i.kt)("inlineCode",{parentName:"li"},"#"),") is referred to as a comment. This is used to explain what is happening within the line below and is ignored when the file is executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Commands"),": any text ",(0,i.kt)("em",{parentName:"li"},"without")," a hashtag is being run inside the OpenBB Terminal as if the user had prompted that line in the terminal. Note that this means that you are able to create a pipeline of commands in a single line, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"stocks/load AAPL/candle --ma 20")," is a valid line for the script.")),(0,i.kt)("p",null,"For instance, the text below corresponds to the example file that OpenBB provides."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"# Go into the stocks context\nstocks\n\n# Load a company ticker, e.g. Apple\nload AAPL\n\n# Show a candle chart with a 20 day Moving Average\ncandle --ma 20\n\n# Switch over to the Fundamental Analysis menu\nfa\n\n# Show Earnings per Share (EPS) estimates\nepsfc\n\n# Show price targets charts\npt\n\n# Show future estimations\nest\n\n# Return to home\nhome\n")),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"As a starting point, let's use the example above."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new text file with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"routines_template.openbb")," and copy and paste the routine above.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Move the file inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"routines")," folder within the ",(0,i.kt)("a",{parentName:"p",href:"/terminal/usage/data/custom-data"},"OpenBBUserData")," folder and, optionally, adjust the name to your liking.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open up the OpenBB Terminal, and type ",(0,i.kt)("inlineCode",{parentName:"p"},"exe --file routines_template"),".  If you changed the name of the file, then replace, ",(0,i.kt)("inlineCode",{parentName:"p"},"routines_template"),", with that.  As long as the file remains in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/OpenBBUserData/routines")," folder, OpenBB Terminal's auto-completer will provide it as a choice."))),(0,i.kt)("p",null,"When this routine is run, a candle chart with a moving average of 20 days, expectations and price targets from analysts and estimated future performance should pop up before returning to the home window."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/223207167-dfab3a74-d34d-47d4-bf6e-44944e8fbfa2.png",alt:"OpenBB Routine Script Execution"})))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,i=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return i.createElement("label",{"data-testid":"Toggle-label",className:"switch"},i.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),i.createElement("span",{className:"slider round"}))}}}]);