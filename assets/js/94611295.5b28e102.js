"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,s),hidden:r},t)}},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},31792:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(87462),a=r(67294),l=r(86010),s=r(12466),i=r(16550),o=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=f({queryString:r,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),b=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var b=r(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function k(e){let{className:t,block:r,selectedValue:o,selectValue:u,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),{pathname:m}=(0,i.TH)(),f=e=>{const t=e.currentTarget,r=d.indexOf(t),n=c[r].value;n!==o&&(p(t),u(n))},h=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:f},s,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,s?.className,{"border-b-2 pointer-events-none":o===t,"border-b-2 text-[#669dcb] border-[#669dcb]":o===t&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":o!==t&&m.startsWith("/terminal")})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},12008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(88828),s=r(31792),i=r(85162);const o={title:"skewness",description:"Learn how to calculate skewness using the 'Get Skewness' function. This Python function is used to calculate the skewness of time series data. Understand the parameters such as data, target column, and window size, and the return type of the function. Perform data analysis with this powerful function.",keywords:["skewness","get skewness","time series data","target column","window size","function parameters","return type","Python","data analysis"]},u=void 0,c={unversionedId:"platform/reference/quantitative/skewness",id:"platform/reference/quantitative/skewness",title:"skewness",description:"Learn how to calculate skewness using the 'Get Skewness' function. This Python function is used to calculate the skewness of time series data. Understand the parameters such as data, target column, and window size, and the return type of the function. Perform data analysis with this powerful function.",source:"@site/content/platform/reference/quantitative/skewness.md",sourceDirName:"platform/reference/quantitative",slug:"/platform/reference/quantitative/skewness",permalink:"/platform/reference/quantitative/skewness",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/skewness.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708506338,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"skewness",description:"Learn how to calculate skewness using the 'Get Skewness' function. This Python function is used to calculate the skewness of time series data. Understand the parameters such as data, target column, and window size, and the return type of the function. Perform data analysis with this powerful function.",keywords:["skewness","get skewness","time series data","target column","window size","function parameters","return type","Python","data analysis"]},sidebar:"tutorialSidebar",previous:{title:"sharpe_ratio",permalink:"/platform/reference/quantitative/sharpe_ratio"},next:{title:"sortino_ratio",permalink:"/platform/reference/quantitative/sortino_ratio"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],m={toc:p},f="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"quantitative /skewness - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get Rolling Skewness."),(0,a.kt)("p",null,"Skewness is a statistical measure that reveals the degree of asymmetry of a distribution around its mean.\nPositive skewness indicates a distribution with an extended tail to the right, while negative skewness shows a tail\nthat stretches left. Understanding skewness can provide insights into potential biases in data and help anticipate\nthe nature of future data points. It's particularly useful for identifying the likelihood of extreme outcomes in\nfinancial returns, enabling more informed decision-making based on the distribution's shape over a specified period."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"obb.quantitative.skewness(data: Union[list, dict, pd.DataFrame, List[pd.DataFrame], pd.Series, List[pd.Series], numpy.ndarray, Data, List[Data]], target: str, window: int = 21, index: str = date)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"List","[Data]"),(0,a.kt)("td",{parentName:"tr",align:null},"Time series data."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"target"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Target column name."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"window"),(0,a.kt)("td",{parentName:"tr",align:null},"PositiveInt"),(0,a.kt)("td",{parentName:"tr",align:null},"Window size."),(0,a.kt)("td",{parentName:"tr",align:null},"21"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"index"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'Index column name, by default "date"'),(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"Skewness.\n")),(0,a.kt)("hr",null))}h.isMDXComponent=!0}}]);