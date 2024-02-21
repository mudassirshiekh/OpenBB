"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(15569);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,i]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(a.Toggle,{isOn:o,handleChange:()=>i(!o)}))),o&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},51271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(88828),i=n(20630);const d={title:"Single widget",sidebar_position:1,description:"Learn how to use the Single Widget of OpenBB Terminal Pro for seamless integration with your API Endpoints, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Single Widget","Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},s=void 0,l={unversionedId:"pro/main-menu/data-connectors/single-widget",id:"pro/main-menu/data-connectors/single-widget",title:"Single widget",description:"Learn how to use the Single Widget of OpenBB Terminal Pro for seamless integration with your API Endpoints, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",source:"@site/content/pro/main-menu/data-connectors/single-widget.md",sourceDirName:"pro/main-menu/data-connectors",slug:"/pro/main-menu/data-connectors/single-widget",permalink:"/pro/main-menu/data-connectors/single-widget",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/main-menu/data-connectors/single-widget.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708506338,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:1,frontMatter:{title:"Single widget",sidebar_position:1,description:"Learn how to use the Single Widget of OpenBB Terminal Pro for seamless integration with your API Endpoints, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Single Widget","Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pro/main-menu/data-connectors/"},next:{title:"Integrate your own backend",permalink:"/pro/main-menu/data-connectors/integrate-your-own-backend"}},c={},u=[],p={toc:u},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"Single Widget | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,a.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/gX63rYzqpL0?si=74No_7LgG2gYwnDg",videoLegend:"Short introduction to adding a single widget",mdxType:"TutorialVideo"}),(0,a.kt)("p",null,"The single widget is the most straightforward method to integrate your custom data into OpenBB Terminal Pro. Simply paste your API endpoint into the data connectors tab, and voila! Your data is fetched and displayed in a user-friendly table format."),(0,a.kt)("p",null,"To use this feature, input your API endpoint and any necessary connection information. The widget will then dynamically load and present your data within the Terminal Pro interface."),(0,a.kt)("p",null,"If your endpoint requires additional headers, don't worry. You can easily add them using the '+ Add Additional Headers' button."),(0,a.kt)("p",null,'In addition, if your API endpoint doesn\'t return a a simple JSON but a nested architecture, you will be prompted with a "Data Key" parameter which you can use to grab the data of interest.'),(0,a.kt)("p",null,"If you want to do something more custom, you should look into creating ",(0,a.kt)("a",{parentName:"p",href:"/pro/main-menu/data-connectors/integrate-your-own-backend"},"your own backend"),", or reach out to OpenBB for support."))}f.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,a=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return a.createElement("label",{"data-testid":"Toggle-label",className:"switch"},a.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),a.createElement("span",{className:"slider round"}))}}}]);