"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66275],{18171:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=i(74848),t=i(28453),r=i(94331);const o={title:"Source",sidebar_position:3,description:"Comprehensive guide to install the OpenBB Terminal and SDK from source. The guide covers the installation process for Windows, macOS, and Linux systems and covers various software installations including Miniconda, Git, Microsoft C++ Build Tools, Rosetta2, LibOMP, VcXsrv, and GTK toolchains. Instructions for environment setup and package management through Conda and Poetry are also included, along with troubleshooting tips and community support.",keywords:["Installation","Miniconda","Git","Microsoft C++ Build Tools","Rosetta2","LibOMP","VcXsrv","GTK toolchains","Conda","Poetry","Environment setup","Python package management","Troubleshooting","Community support","Linux","MacOS","Windows"]},a=void 0,l={id:"terminal/installation/source",title:"Source",description:"Comprehensive guide to install the OpenBB Terminal and SDK from source. The guide covers the installation process for Windows, macOS, and Linux systems and covers various software installations including Miniconda, Git, Microsoft C++ Build Tools, Rosetta2, LibOMP, VcXsrv, and GTK toolchains. Instructions for environment setup and package management through Conda and Poetry are also included, along with troubleshooting tips and community support.",source:"@site/content/terminal/installation/source.md",sourceDirName:"terminal/installation",slug:"/terminal/installation/source",permalink:"/terminal/installation/source",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/installation/source.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,sidebarPosition:3,frontMatter:{title:"Source",sidebar_position:3,description:"Comprehensive guide to install the OpenBB Terminal and SDK from source. The guide covers the installation process for Windows, macOS, and Linux systems and covers various software installations including Miniconda, Git, Microsoft C++ Build Tools, Rosetta2, LibOMP, VcXsrv, and GTK toolchains. Instructions for environment setup and package management through Conda and Poetry are also included, along with troubleshooting tips and community support.",keywords:["Installation","Miniconda","Git","Microsoft C++ Build Tools","Rosetta2","LibOMP","VcXsrv","GTK toolchains","Conda","Poetry","Environment setup","Python package management","Troubleshooting","Community support","Linux","MacOS","Windows"]},sidebar:"tutorialSidebar",previous:{title:"MacOS",permalink:"/terminal/installation/macos"},next:{title:"Docker",permalink:"/terminal/installation/docker"}},c={},d=[{value:"Clone the Source Code",id:"clone-the-source-code",level:2},{value:"Create and Activate the Virtual Environment",id:"create-and-activate-the-virtual-environment",level:2},{value:"Install the OpenBB Terminal",id:"install-the-openbb-terminal",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"Source - Installation | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["The instructons on this page are for installing the OpenBB Terminal from the source code, which uses a legacy version of the Python SDK. If you do not wish to install the OpenBB Terminal application, please refer to the installation instructions ",(0,s.jsx)(n.a,{href:"/platform/installation",children:"here"})]})}),"\n",(0,s.jsxs)(n.p,{children:["This section provides steps to install the OpenBB Terminal and SDK from source. This installation type supports Windows, macOS and Linux systems. ",(0,s.jsx)(n.strong,{children:"Before starting the installation process, make sure the following pieces of software are installed."})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Miniconda"}),"\nMiniconda is a Python environment and package manager. It is required for installing certain dependencies."]}),(0,s.jsxs)(n.p,{children:["Go ",(0,s.jsx)(n.a,{href:"https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links",children:"here"})," to find the download for your operating system or use the links below:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Apple-Silicon Systems: ",(0,s.jsx)(n.a,{href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.pkg",children:"Miniconda for MacOS"})]}),"\n",(0,s.jsxs)(n.li,{children:["Intel-based Mac Systems: ",(0,s.jsx)(n.a,{href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh",children:"Miniconda for MacOS"})]}),"\n",(0,s.jsxs)(n.li,{children:["Linux and WSL Systems: ",(0,s.jsx)(n.a,{href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh",children:"Miniconda for Linux"})]}),"\n",(0,s.jsxs)(n.li,{children:["Raspberry PI Systems: ",(0,s.jsx)(n.a,{href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh",children:"Miniconda for Raspberry PI"})]}),"\n",(0,s.jsxs)(n.li,{children:["Windows Systems: ",(0,s.jsx)(n.a,{href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe",children:"Miniconda for Windows"})]}),"\n"]}),(0,s.jsx)(n.p,{children:"To verify if Miniconda is installed on the system, open the command line and run the following command:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"conda --version\n"})}),(0,s.jsx)(n.p,{children:"If Miniconda is installed, a version number will be displayed, for example:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"conda 23.1.0\n"})}),(0,s.jsx)(n.p,{children:"There is a good chance the version of Conda is not current. Update it with the command below:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"conda update -n base -c conda-forge conda\n"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Git"}),(0,s.jsx)(n.p,{children:"Check to verify if Git is installed by running the following command:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git --version\n"})}),(0,s.jsx)(n.p,{children:"Which will print something like this:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git version 2.31.1\n"})}),(0,s.jsxs)(n.p,{children:["If Git is not installed, install it now from ",(0,s.jsx)(n.code,{children:"conda"})," by running:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"conda install git\n"})}),(0,s.jsxs)(n.p,{children:["Or follow the instructions ",(0,s.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"here"})," to install it."]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Microsoft C++ Build Tools (Windows only)"}),(0,s.jsxs)(n.p,{children:["Use the instructions ",(0,s.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"here"})," to install or update Microsoft C++ Build Tools."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ceb57be0-6dae-42f2-aca6-bf62ce7d6135",alt:"image"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f8aef8fc-a080-4164-bd36-460714ec44f3",alt:"image"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Rosetta2 (Apple Silicon only)"}),(0,s.jsx)(n.p,{children:"Install Rosetta from the terminal with:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"softwareupdate --install-rosetta\n"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"LibOMP (Apple Silicon only)"}),(0,s.jsxs)(n.p,{children:["Apple Silicon does not ship ",(0,s.jsx)(n.code,{children:"libomp"})," by default. It will need to be installed manually for some features of the ML toolkit to work. The ",(0,s.jsx)(n.code,{children:"libomp"})," library can be installed from ",(0,s.jsx)(n.a,{href:"https://brew.sh/",children:"homebrew"}),"."]}),(0,s.jsx)(n.p,{children:"Check if Homebrew is installed by running the following command:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"brew --version\n"})}),(0,s.jsx)(n.p,{children:"If Homebrew is not installed, install it by running:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),(0,s.jsxs)(n.p,{children:["Or follow the instructions ",(0,s.jsx)(n.a,{href:"https://brew.sh/",children:"here"}),"."]}),(0,s.jsx)(n.p,{children:"To install LibOMP, run the following command:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"brew install libomp\n"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"VcXsrv (Windows Subsystem for Linux only)"}),(0,s.jsxs)(n.p,{children:["Since a WSL installation is headless by default (i.e., there is only access to a terminal running a Linux distribution) there are additional steps required to display visualizations. A more detailed tutorial is found, ",(0,s.jsx)(n.a,{href:"https://medium.com/@shaoyenyu/make-matplotlib-works-correctly-with-x-server-in-wsl2-9d9928b4e36a",children:"here"}),"."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dynamically export the DISPLAY environment variable in WSL2:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# add to the end of ~/.bashrc file\nexport DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0\n# source the file\nsource ~/.bashrc\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Download and install ",(0,s.jsx)(n.a,{href:"https://sourceforge.net/projects/vcxsrv/",children:"VcXsrv"})]}),"\n",(0,s.jsx)(n.li,{children:'When running the program is important to check "Disable access control"'}),"\n"]}),(0,s.jsxs)(n.p,{children:["After this, ",(0,s.jsx)(n.code,{children:"VcXsrv"})," should be running successfully, and the machine is ready to proceed with the terminal installation."]}),(0,s.jsxs)(n.p,{children:["Alternatives to ",(0,s.jsx)(n.code,{children:"VcXsrv"})," include:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://opticos.github.io/gwsl/",children:"GWSL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://xming.en.softonic.com/",children:"Xming"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://wayland.freedesktop.org/docs/html/",children:"Wayland"})}),"\n"]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"GTK toolchains (Linux only)"}),(0,s.jsxs)(n.p,{children:["GTK is a window extension that is used to display interactive charts and tables. The library responsible for interactive charts and tables (",(0,s.jsx)(n.code,{children:"pywry"}),") requires certain dependencies, based on the Linux distribution, to be installed first."]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Debian-based / Ubuntu / Mint"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt install libwebkit2gtk-4.0-dev\n"})})]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Arch Linux / Manjaro"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo pacman -S webkit2gtk\n"})})]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Fedora"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo dnf install gtk3-devel webkit2gtk3-devel\n"})})]})]}),"\n",(0,s.jsx)(n.p,{children:"Proceed to next steps once the requirements above have been met."}),"\n",(0,s.jsx)(n.h2,{id:"clone-the-source-code",children:"Clone the Source Code"}),"\n",(0,s.jsx)(n.p,{children:"Clone the OpenBB Terminal source code from GitHub. This will download the source code to the current working directory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"git clone https://github.com/OpenBB-finance/OpenBBTerminal.git\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enter the directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"cd OpenBBTerminal\n"})}),"\n",(0,s.jsx)(n.h2,{id:"create-and-activate-the-virtual-environment",children:"Create and Activate the Virtual Environment"}),"\n",(0,s.jsx)(n.p,{children:"Create the environment by copying the code below into the command line and agreeing to the prompts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"conda env create -n obb --file build/conda/conda-3-9-env.yaml\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Additional ",(0,s.jsx)(n.code,{children:"YAML"})," files provide support for Python versions 3.8 and 3.10. Substitute the ",(0,s.jsx)(n.code,{children:"9"}),", in the command above, with the desired version."]})}),"\n",(0,s.jsx)(n.p,{children:"After the obb environment is created, activate it by entering:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"conda activate obb\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"When the new environment is activated for the first time, it is required to clean up some artifacts in order for all dependencies to work nicely."}),(0,s.jsx)(n.p,{children:"On macOS and Linux do this by running this script (copy and paste the launch code):"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"build/conda/cleanup_artifacts.sh\n"})}),(0,s.jsx)(n.p,{children:"On Windows do this by running this script (copy and paste the launch code):"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"build\\conda\\cleanup_artifacts.bat\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"install-the-openbb-terminal",children:"Install the OpenBB Terminal"}),"\n",(0,s.jsx)(n.p,{children:"Make sure to have completed all previous steps. If followed, the current working directory will be the location where the OpenBB Terminal source code lives."}),"\n",(0,s.jsx)(n.p,{children:"Install the remaining dependencies and the terminal through Poetry, a package manager."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"poetry install -E all\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Read about Conda, Poetry and Python package management"}),(0,s.jsxs)(n.p,{children:["For the best user experience we advise using ",(0,s.jsx)(n.code,{children:"conda"})," and ",(0,s.jsx)(n.code,{children:"poetry"})," for environment setup and dependency management. Conda ships binaries for packages like ",(0,s.jsx)(n.code,{children:"numpy"})," so these dependencies are not built from source locally by ",(0,s.jsx)(n.code,{children:"pip"}),". Poetry solves the dependency tree in a way that the dependencies of dependencies of dependencies use versions that are compatible with each other."]}),(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"Conda"})," environments, the ",(0,s.jsx)(n.code,{children:"build/conda"})," folder contains multiple ",(0,s.jsx)(n.code,{children:".yaml"})," configuration files to choose from."]}),(0,s.jsxs)(n.p,{children:["When using other Python distributions we highly recommend a virtual environment like ",(0,s.jsx)(n.code,{children:"virtualenv"})," or ",(0,s.jsx)(n.code,{children:"pyenv"})," for installing the terminal dependency libraries."]}),(0,s.jsxs)(n.p,{children:['For people who prefer using "vanilla" ',(0,s.jsx)(n.code,{children:"pip"})," the requirements files are found in the project root:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"requirements.txt"})," list main dependencies"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"requirements-full.txt"})," list all the dependencies including Machine Learning and Portfolio Optimization libraries and dependencies for developers"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["They can be installed with ",(0,s.jsx)(n.code,{children:"pip"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pip install -r requirements.txt\n"})}),(0,s.jsx)(n.p,{children:"The dependency tree is solved by poetry."}),(0,s.jsx)(n.p,{children:"Note: The libraries specified in the requirements files have been tested and work for the purpose of this project, however, these may be older versions. Hence, it is recommended for the user to set up a Python virtual environment prior to installing them. This keeps dependencies required by different projects in separate places."}),(0,s.jsx)(n.p,{children:"After installing the requirements, install the terminal with:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pip install .\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"Once this installation process is completed, start the terminal by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"python terminal.py\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," When the OpenBB Terminal is opened next, the Python environment will need to be activated again. When using a code editor, make sure that the correct environment is selected. This should be easy to figure out if there is an error stating that there are missing packages. To launch the OpenBB Terminal application in a new terminal window, first navigate into the folder where the source code was cloned, and then use the following two commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"conda activate obb\npython terminal.py\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TROUBLESHOOTING:"})," Having difficulty getting through the installation, or encountering errors? Reach out to our ",(0,s.jsx)(n.a,{href:"https://discord.gg/Up2QGbMKHY",children:"Discord"})," community for help."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var s=i(5260),t=i(74848);function r(e){let{title:n}=e;return(0,t.jsx)(s.A,{children:(0,t.jsx)("title",{children:n})})}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);