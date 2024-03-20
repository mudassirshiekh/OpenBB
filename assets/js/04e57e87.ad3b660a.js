"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(67294),i=n(35742);function r(e){let{title:t}=e;return o.createElement(i.Z,null,o.createElement("title",null,t))}},48068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(87462),i=(n(67294),n(3905)),r=n(88828);const a={title:"Write Code and Commit",sidebar_position:6,description:"This guide provides detailed instructions on how to write code and commit changes for the OpenBB Platform. It covers the process of creating a PR, branch naming conventions, and important guidelines to follow when committing changes.",keywords:["OpenBB code writing","Commit changes","PR creation","Branch naming conventions","Commit guidelines","GitHub"]},l=void 0,p={unversionedId:"platform/development/contributor-guidelines/write_code_commit",id:"platform/development/contributor-guidelines/write_code_commit",title:"Write Code and Commit",description:"This guide provides detailed instructions on how to write code and commit changes for the OpenBB Platform. It covers the process of creating a PR, branch naming conventions, and important guidelines to follow when committing changes.",source:"@site/content/platform/development/contributor-guidelines/write_code_commit.md",sourceDirName:"platform/development/contributor-guidelines",slug:"/platform/development/contributor-guidelines/write_code_commit",permalink:"/platform/development/contributor-guidelines/write_code_commit",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributor-guidelines/write_code_commit.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1710940729,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:6,frontMatter:{title:"Write Code and Commit",sidebar_position:6,description:"This guide provides detailed instructions on how to write code and commit changes for the OpenBB Platform. It covers the process of creating a PR, branch naming conventions, and important guidelines to follow when committing changes.",keywords:["OpenBB code writing","Commit changes","PR creation","Branch naming conventions","Commit guidelines","GitHub"]},sidebar:"tutorialSidebar",previous:{title:"Deprecating Endpoints",permalink:"/platform/development/contributor-guidelines/deprecating_endpoints"},next:{title:"FAQs",permalink:"/platform/faqs/"}},s={},c=[{value:"Folder Structure Overview",id:"folder-structure-overview",level:2},{value:"<code>extensions</code>",id:"extensions",level:3},{value:"<code>providers</code>",id:"providers",level:3},{value:"<code>openbb</code>",id:"openbb",level:3},{value:"<code>platform</code>",id:"platform",level:3},{value:"Root Directory Files",id:"root-directory-files",level:3},{value:"How to create a PR?",id:"how-to-create-a-pr",level:2},{value:"Branch Naming Conventions",id:"branch-naming-conventions",level:3}],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{title:"Write Code and Commit - Contributor Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,i.kt)("h2",{id:"folder-structure-overview"},"Folder Structure Overview"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"OpenBB Platform file tree"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 extensions\n\u2502\xa0\xa0 \u251c\u2500\u2500 charting\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 integration\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 openbb_charting\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pyproject.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\u2502\xa0\xa0 \u251c\u2500\u2500 crypto\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 integration\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 openbb_crypto\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 poetry.lock\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pyproject.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\u2502\xa0\xa0 \u251c\u2500\u2500 currency\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 integration\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 openbb_currency\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 poetry.lock\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pyproject.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\n ...\n\n\u251c\u2500\u2500 providers\n\u2502\xa0\xa0 \u251c\u2500\u2500 alpha_vantage\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 openbb_alpha_vantage\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 poetry.lock\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pyproject.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\u2502\xa0\xa0 \u251c\u2500\u2500 benzinga\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 openbb_benzinga\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 poetry.lock\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pyproject.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\n ...\n\n\u251c\u2500\u2500 openbb\n\u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u251c\u2500\u2500 package\n\n\u251c\u2500\u2500 platform\n\u2502\xa0\xa0 \u251c\u2500\u2500 core\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 integration\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 openbb_core\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 app\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 poetry.lock\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pyproject.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\u2502\xa0\xa0 \u2502\xa0\xa0\n\u2502\xa0\xa0 \u2514\u2500\u2500 provider\n\u2502\xa0\xa0     \u251c\u2500\u2500 openbb_provider\n\u2502\xa0\xa0     \u251c\u2500\u2500 poetry.lock\n\u2502\xa0\xa0     \u251c\u2500\u2500 pyproject.toml\n\u2502\xa0\xa0     \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0     \u2514\u2500\u2500 tests\n\n\u251c\u2500\u2500 EXTENSIONS.md\n\u251c\u2500\u2500 integration\n\u251c\u2500\u2500 PROVIDERS.md\n\u251c\u2500\u2500 pyproject.toml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tests\n\n"))),(0,i.kt)("p",null,"The OpenBB Platform is organized into several key directories, each serving a specific purpose in the architecture of the system. Below is an overview of the main directories and their roles:"),(0,i.kt)("h3",{id:"extensions"},(0,i.kt)("inlineCode",{parentName:"h3"},"extensions")),(0,i.kt)("p",null,"This directory houses the various extensions available in the OpenBB Platform. Each extension has its own folder, containing the necessary files for its operation."),(0,i.kt)("p",null,"Each extension typically includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"integration"),": Integration tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"openbb_[extension_name]"),": Main codebase for the extension."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"poetry.lock")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"pyproject.toml"),": Dependency management files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"README.md"),": Documentation specific to the extension."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tests"),": Unit tests for the extension.")),(0,i.kt)("h3",{id:"providers"},(0,i.kt)("inlineCode",{parentName:"h3"},"providers")),(0,i.kt)("p",null,"This directory contains the data providers integrated with the OpenBB Platform. Each provider has its own subdirectory."),(0,i.kt)("p",null,"Common files in each provider include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"openbb_[provider_name]"),": Core code for the provider's integration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"poetry.lock")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"pyproject.toml"),": Files for managing dependencies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"README.md"),": Documentation for the provider."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tests"),": Unit tests for the provider.")),(0,i.kt)("h3",{id:"openbb"},(0,i.kt)("inlineCode",{parentName:"h3"},"openbb")),(0,i.kt)("p",null,"This is the main directory for the OpenBB package, containing the core functionalities and modules of the OpenBB Platform."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package"),": Contains the main package files and modules, i.e., the static auto generated files that serve the Python interface.")),(0,i.kt)("h3",{id:"platform"},(0,i.kt)("inlineCode",{parentName:"h3"},"platform")),(0,i.kt)("p",null,"This directory hosts the core platform functionalities (",(0,i.kt)("inlineCode",{parentName:"p"},"core"),") which is the central part of the OpenBB Platform application."),(0,i.kt)("h3",{id:"root-directory-files"},"Root Directory Files"),(0,i.kt)("p",null,"In the root directory, several important files are present:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EXTENSIONS.md"),": List of available OpenBB extensions and its maintainers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PROVIDERS.md"),": List of available OpenBB providers and its maintainers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pyproject.toml"),": The main file for managing the platform dependencies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"README.md"),": The primary entry point for the OpenBB Platform documentation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tests"),": Contains tests that are relevant to the overall platform.")),(0,i.kt)("p",null,"This structure allows for modular development and easy integration of new features, extensions, and providers, making the OpenBB Platform highly scalable and adaptable."),(0,i.kt)("h2",{id:"how-to-create-a-pr"},"How to create a PR?"),(0,i.kt)("p",null,"To create a PR to the OpenBB Platform, you'll need to fork the repository and create a new branch."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create your Feature Branch, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"git checkout -b feature/AmazingFeature")),(0,i.kt)("li",{parentName:"ol"},"Check the files you have touched using ",(0,i.kt)("inlineCode",{parentName:"li"},"git status")),(0,i.kt)("li",{parentName:"ol"},"Stage the files you want to commit, e.g.\n",(0,i.kt)("inlineCode",{parentName:"li"},"git add openbb_platform/platform/core/openbb_core/app/constants.py"),".\nNote: ",(0,i.kt)("strong",{parentName:"li"},"DON'T")," add any files with personal information."),(0,i.kt)("li",{parentName:"ol"},"Write a concise commit message under 50 characters, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'git commit -m "meaningful commit message"'),". If your PR\nsolves an issue raised by a user, you may specify such issue by adding #ISSUE_NUMBER to the commit message, so that\nthese get linked. Note: If you installed pre-commit hooks and one of the formatters re-formats your code, you'll need\nto go back to step 3 to add these.")),(0,i.kt)("h3",{id:"branch-naming-conventions"},"Branch Naming Conventions"),(0,i.kt)("p",null,"The accepted branch naming conventions are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feature/feature-name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hotfix/hotfix-name"))),(0,i.kt)("p",null,"These branches can only have PRs pointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch."))}u.isMDXComponent=!0}}]);