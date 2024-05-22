"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50776],{7522:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var o=r(74848),t=r(28453),s=r(94331),a=r(18228),c=r(19365);const i={title:"Docker",sidebar_position:5,description:"Instructions for installing OpenBB Terminal via Docker on different operating systems (Windows, MacOS, Linux). The page includes specific guidelines for Docker Desktop installation, displaying charts in Docker, and how to pull and run OpenBB Terminal Docker image.",keywords:["Docker","Installation","Windows","MacOS","Linux","VcXsrv","XQuartz","docker-compose.yaml","docker-compose.x11.yaml","Docker Desktop","Run OpenBB Terminal Docker image"]},l=void 0,d={id:"terminal/installation/docker",title:"Docker",description:"Instructions for installing OpenBB Terminal via Docker on different operating systems (Windows, MacOS, Linux). The page includes specific guidelines for Docker Desktop installation, displaying charts in Docker, and how to pull and run OpenBB Terminal Docker image.",source:"@site/content/terminal/installation/docker.md",sourceDirName:"terminal/installation",slug:"/terminal/installation/docker",permalink:"/terminal/installation/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/installation/docker.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,sidebarPosition:5,frontMatter:{title:"Docker",sidebar_position:5,description:"Instructions for installing OpenBB Terminal via Docker on different operating systems (Windows, MacOS, Linux). The page includes specific guidelines for Docker Desktop installation, displaying charts in Docker, and how to pull and run OpenBB Terminal Docker image.",keywords:["Docker","Installation","Windows","MacOS","Linux","VcXsrv","XQuartz","docker-compose.yaml","docker-compose.x11.yaml","Docker Desktop","Run OpenBB Terminal Docker image"]},sidebar:"tutorialSidebar",previous:{title:"Source",permalink:"/terminal/installation/source"},next:{title:"Usage",permalink:"/terminal/usage/"}},u={},h=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{title:"Docker - Installation | OpenBB Terminal Docs"}),"\n","\n",(0,o.jsxs)(n.p,{children:["Installing the OpenBB Terminal via Docker supports both Windows and Unix systems (Linux + MacOS). Installation differs a bit between operating system (Windows, macOS and Linux). Please select the section matching to your OS.",(0,o.jsx)("p",{})]}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsxs)(c.A,{value:"Windows",label:"Windows",default:!0,children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Install Docker Desktop"})}),(0,o.jsxs)(n.p,{children:["You can find ",(0,o.jsx)(n.code,{children:"Docker Desktop"})," for Windows here: ",(0,o.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Download Docker Desktop"})]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Start Docker"})}),(0,o.jsx)(n.p,{children:"Execute the following command:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker info\n"})}),(0,o.jsx)(n.p,{children:"If you have something like this, it means you haven't started Docker:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker info\nServer:\nERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock.\nIs the docker daemon running?\n"})}),(0,o.jsx)(n.p,{children:"Start Docker, this is how the right output looks like:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker info\nClient:\nContext:    default\nDebug Mode: false\n\nServer:\nContainers: 14\nRunning: 2\nPaused: 1\nStopped: 10\n"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Install VcXsrv"})}),(0,o.jsx)(n.p,{children:"To display charts with your container, you need: VcXsrv."}),(0,o.jsxs)(n.p,{children:["You can download VcXsrv here: ",(0,o.jsx)(n.a,{href:"https://sourceforge.net/projects/vcxsrv",children:"Download VcXsrv"})]}),(0,o.jsx)(n.p,{children:"Once downloaded you will open the program and accept all the defaults expect the below settings:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["CHECK the option: ",(0,o.jsx)(n.code,{children:"Disable access control"})," and UNCHECK the ",(0,o.jsx)(n.code,{children:"Native opengl"})," command"]}),"\n"]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Pull and run the container"})}),(0,o.jsx)(n.p,{children:"Execute these commands:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.yaml\n\ndocker compose run openbb\n"})}),(0,o.jsxs)(n.p,{children:["This will download and run the file: ",(0,o.jsx)(n.code,{children:"docker-compose.yaml"})]}),(0,o.jsx)(n.p,{children:"This file contents the settings to pull and run OpenBB Terminal Docker image."})]}),(0,o.jsxs)(c.A,{value:"MacOS",label:"MacOS",children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Install Docker Desktop"})}),(0,o.jsxs)(n.p,{children:["You can find ",(0,o.jsx)(n.code,{children:"Docker Desktop"})," for MacOS here: ",(0,o.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Download Docker Desktop"})]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Start Docker"})}),(0,o.jsx)(n.p,{children:"Execute the following command:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker info\n"})}),(0,o.jsx)(n.p,{children:"If you have something like this, it means you haven't started Docker:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker info\nServer:\nERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock.\nIs the docker daemon running?\n"})}),(0,o.jsx)(n.p,{children:"Start Docker, this is how the right output looks like:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker info\nClient:\nContext:    default\nDebug Mode: false\n\nServer:\nContainers: 14\nRunning: 2\nPaused: 1\nStopped: 10\n"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Install XQuartz"})}),(0,o.jsxs)(n.p,{children:["You can download XQuartz here: ",(0,o.jsx)(n.a,{href:"https://www.xquartz.org",children:"Download XQuartz"})]}),(0,o.jsx)(n.p,{children:"Open X Quartz."}),(0,o.jsxs)(n.p,{children:["Then on ",(0,o.jsx)(n.code,{children:"Preferences > Security"}),"."]}),(0,o.jsx)(n.p,{children:"Make sure both of these options are enabled:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Authenticate connections"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Allow connections from network clients"})}),"\n"]}),(0,o.jsxs)(n.p,{children:["It should look like this:\n",(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/18151143/132548605-235d774b-9aa6-4a45-afcf-58fb775d376a.png",alt:"Screen Shot 2021-09-08 at 12 21 48 PM"})]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Get Docker IP"})}),(0,o.jsx)(n.p,{children:"To get Docker IP you can use this command:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'IP=$(ifconfig | grep inet | grep -v "127.0.0.1" | awk \'$1=="inet" {print $2}\')\n'})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Pull and run the container"})}),(0,o.jsx)(n.p,{children:"Execute these commands:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.yaml\n\nxhost +$IP\ndocker compose run -e DISPLAY=$IP:0 openbb\n"})}),(0,o.jsxs)(n.p,{children:["This will download and run the file: ",(0,o.jsx)(n.code,{children:"docker-compose.yaml"})]}),(0,o.jsx)(n.p,{children:"This file contents the settings to pull and run OpenBB Terminal Docker image."}),(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"xhost +$IP"})," and ",(0,o.jsx)(n.code,{children:"DISPLAY=$IP:0"})," parts are there to allow charts display."]})]}),(0,o.jsxs)(c.A,{value:"Linux",label:"Linux",children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Install Docker Desktop"})}),(0,o.jsxs)(n.p,{children:["You can find ",(0,o.jsx)(n.code,{children:"Docker Desktop"})," for Linux here: ",(0,o.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Download Docker Desktop"})]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Start Docker"})}),(0,o.jsx)(n.p,{children:"Execute the following command:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker info\n"})}),(0,o.jsx)(n.p,{children:"If you have something like this, it means you haven't started Docker:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker info\nServer:\nERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock.\nIs the docker daemon running?\n"})}),(0,o.jsx)(n.p,{children:"Start Docker, this is how the right output looks like:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker info\nClient:\n Context:    desktop-linux\n Debug Mode: false\n\nServer:\n Containers: 14\n Running: 2\n Paused: 1\n Stopped: 10\n"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Pull and run the container"})}),(0,o.jsx)(n.p,{children:"Execute these commands:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.yaml\ncurl -o docker-compose.x11.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.x11.yaml\n\ndocker compose -f docker-compose.yaml -f docker-compose.x11.yaml run openbb\n"})}),(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"If you are experiencing issues with charts - launch the container with the following command:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"docker compose -f docker-compose.yaml -f docker-compose.x11.yaml run -e WEBKIT_DISABLE_COMPOSITING_MODE=1 openbb\n"})})]}),(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you're using remote docker host, you can connect with ",(0,o.jsx)(n.code,{children:"ssh -X <FQDN/IP>"}),"."]})})]})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var o=r(34164);const t={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,a),hidden:r,children:n})}},94331:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var o=r(5260),t=r(74848);function s(e){let{title:n}=e;return(0,t.jsx)(o.A,{children:(0,t.jsx)("title",{children:n})})}},18228:(e,n,r)=>{r.d(n,{A:()=>w});var o=r(96540),t=r(34164),s=r(23104),a=r(56347),c=r(205),i=r(57485),l=r(31682),d=r(89466);function u(e){return function(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:r,attributes:o,default:t}}=e;return{value:n,label:r,attributes:o,default:t}}))}function h(e){const{values:n,children:r}=e;return(0,o.useMemo)((()=>{const e=n??u(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=h(e),[a,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[l,u]=m({queryString:r,groupId:t}),[x,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Dv)(r);return[t,(0,o.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),k=(()=>{const e=l??x;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{k&&i(k)}),[k]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=r(92303);const k={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=r(74848);function j(e){let{className:n,block:r,selectedValue:o,selectValue:c,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),{pathname:u}=(0,a.zy)(),h=e=>{const n=e.currentTarget,r=l.indexOf(n),t=i[r].value;t!==o&&(d(n),c(t))},p=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:p,onClick:h,...s,className:(0,t.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",k.tabItem,s?.className,{"border-b-2 pointer-events-none":o===n,"border-b-2 text-[#669dcb] border-[#669dcb]":o===n&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===n&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==n&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===n&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==n&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":o!==n&&u.startsWith("/terminal")}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:t}=e;if(r=Array.isArray(r)?r:[r],n){const e=r.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",k.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,g.jsx)(v,{...e},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var o=r(96540);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);