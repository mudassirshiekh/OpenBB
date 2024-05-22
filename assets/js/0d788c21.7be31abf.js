"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83570],{88701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=r(74848),i=r(28453),s=r(94331),a=r(18228),l=r(19365);const d={title:"unusual",description:"Learn how to get the complete options chain for a ticker with the equity  options unusual API. Explore the available parameters such as symbol and provider.  Retrieve valuable data like the underlying symbol, contract symbol, trade type,  sentiment, total value, total size, average price, ask/bid prices at execution,  underlying price at execution, and timestamp.",keywords:["complete options chain","ticker options","equity options unusual","symbol","provider","intrinio","source","data","underlying symbol","contract symbol","trade type","sentiment","total value","total size","average price","ask at execution","bid at execution","underlying price at execution","timestamp"]},o=void 0,c={id:"platform/reference/derivatives/options/unusual",title:"unusual",description:"Learn how to get the complete options chain for a ticker with the equity  options unusual API. Explore the available parameters such as symbol and provider.  Retrieve valuable data like the underlying symbol, contract symbol, trade type,  sentiment, total value, total size, average price, ask/bid prices at execution,  underlying price at execution, and timestamp.",source:"@site/content/platform/reference/derivatives/options/unusual.md",sourceDirName:"platform/reference/derivatives/options",slug:"/platform/reference/derivatives/options/unusual",permalink:"/platform/reference/derivatives/options/unusual",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/derivatives/options/unusual.md",tags:[],version:"current",frontMatter:{title:"unusual",description:"Learn how to get the complete options chain for a ticker with the equity  options unusual API. Explore the available parameters such as symbol and provider.  Retrieve valuable data like the underlying symbol, contract symbol, trade type,  sentiment, total value, total size, average price, ask/bid prices at execution,  underlying price at execution, and timestamp.",keywords:["complete options chain","ticker options","equity options unusual","symbol","provider","intrinio","source","data","underlying symbol","contract symbol","trade type","sentiment","total value","total size","average price","ask at execution","bid at execution","underlying price at execution","timestamp"]},sidebar:"tutorialSidebar",previous:{title:"chains",permalink:"/platform/reference/derivatives/options/chains"},next:{title:"Commodity",permalink:"/platform/reference/commodity/"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"derivatives/options/unusual - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get the complete options chain for a ticker."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.derivatives.options.unusual(symbol='TSLA', provider='intrinio')\n# Use the 'symbol' parameter to get the most recent activity for a specific symbol.\nobb.derivatives.options.unusual(symbol='TSLA', provider='intrinio')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. (the underlying symbol)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['intrinio']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'intrinio' if there is no default."}),(0,n.jsx)(t.td,{children:"intrinio"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. (the underlying symbol)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['intrinio']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'intrinio' if there is no default."}),(0,n.jsx)(t.td,{children:"intrinio"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format. If no symbol is supplied, requests are only allowed for a single date. Use the start_date for the target date. Intrinio appears to have data beginning Feb/2022, but is unclear when it actually began."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format. If a symbol is not supplied, do not include an end date."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trade_type"}),(0,n.jsx)(t.td,{children:"Literal['block', 'sweep', 'large']"}),(0,n.jsx)(t.td,{children:"The type of unusual activity to query for."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sentiment"}),(0,n.jsx)(t.td,{children:"Literal['bullish', 'bearish', 'neutral']"}),(0,n.jsx)(t.td,{children:"The sentiment type to query for."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"min_value"}),(0,n.jsx)(t.td,{children:"Union[int, float]"}),(0,n.jsx)(t.td,{children:"The inclusive minimum total value for the unusual activity."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_value"}),(0,n.jsx)(t.td,{children:"Union[int, float]"}),(0,n.jsx)(t.td,{children:"The inclusive maximum total value for the unusual activity."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return. A typical day for all symbols will yield 50-80K records. The API will paginate at 1000 records. The high default limit (100K) is to be able to reliably capture the most days. The high absolute limit (1.25M) is to allow for outlier days. Queries at the absolute limit will take a long time, and might be unreliable. Apply filters to improve performance."}),(0,n.jsx)(t.td,{children:"100000"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"Literal['delayed', 'realtime']"}),(0,n.jsx)(t.td,{children:"The source of the data. Either realtime or delayed."}),(0,n.jsx)(t.td,{children:"delayed"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[OptionsUnusual]\n        Serializable results.\n\n    provider : Optional[Literal['intrinio']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underlying_symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data. (the underlying symbol)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"contract_symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Contract symbol for the option."})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underlying_symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data. (the underlying symbol)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"contract_symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Contract symbol for the option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trade_timestamp"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The datetime of order placement."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trade_type"}),(0,n.jsx)(t.td,{children:"Literal['block', 'sweep', 'large']"}),(0,n.jsx)(t.td,{children:"The type of unusual trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sentiment"}),(0,n.jsx)(t.td,{children:"Literal['bullish', 'bearish', 'neutral']"}),(0,n.jsx)(t.td,{children:"Bullish, Bearish, or Neutral Sentiment is estimated based on whether the trade was executed at the bid, ask, or mark price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bid_at_execution"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Bid price at execution."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ask_at_execution"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Ask price at execution."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"average_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average premium paid per option contract."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underlying_price_at_execution"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Price of the underlying security at execution of trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_size"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The total number of contracts involved in a single transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_value"}),(0,n.jsx)(t.td,{children:"Union[int, float]"}),(0,n.jsx)(t.td,{children:"The aggregated value of all option contract premiums included in the trade."})]})]})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),i=r(74848);function s(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),i=r(34164),s=r(23104),a=r(56347),l=r(205),d=r(57485),o=r(31682),c=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=h(e),[a,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,u]=p({queryString:r,groupId:i}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),b=(()=>{const e=o??m;return x({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&d(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:u}=(0,a.zy)(),h=e=>{const t=e.currentTarget,r=o.indexOf(t),i=d[r].value;i!==n&&(c(t),l(i))},x=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:x,onClick:h,...s,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function g(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,f.jsx)(y,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function T(e){const t=(0,j.A)();return(0,f.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);