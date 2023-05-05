"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"React Dapp with Global State",description:"Create a simple React dapp that integrates MetaMask and utilize React Context Provider for global state.",toc_max_heading_level:4},i="Create a Simple React Dapp with Global State",s={unversionedId:"tutorials/react-dapp-global-state",id:"tutorials/react-dapp-global-state",title:"React Dapp with Global State",description:"Create a simple React dapp that integrates MetaMask and utilize React Context Provider for global state.",source:"@site/wallet/tutorials/react-dapp-global-state.md",sourceDirName:"tutorials",slug:"/tutorials/react-dapp-global-state",permalink:"/709-react-dapp-part-2/wallet/tutorials/react-dapp-global-state",draft:!1,tags:[],version:"current",frontMatter:{title:"React Dapp with Global State",description:"Create a simple React dapp that integrates MetaMask and utilize React Context Provider for global state.",toc_max_heading_level:4},sidebar:"walletSidebar",previous:{title:"React Dapp with Local State",permalink:"/709-react-dapp-part-2/wallet/tutorials/react-dapp-local-state"},next:{title:"Reference",permalink:"/709-react-dapp-part-2/wallet/category/reference"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Clone React Dapp Repository",id:"1-clone-react-dapp-repository",level:3},{value:"Styling Strategy",id:"styling-strategy",level:4},{value:"Project Structure",id:"project-structure",level:4},{value:"2. Building Our Context Provider",id:"2-building-our-context-provider",level:3},{value:"3. Wrap Components with Context Provider",id:"3-wrap-components-with-context-provider",level:3},{value:"4. Connect to MetaMask in Navigation",id:"4-connect-to-metamask-in-navigation",level:3},{value:"5. Display MetaMaskData in Display",id:"5-display-metamaskdata-in-display",level:3},{value:"5. Show and Hide Errors in MetaMaskError",id:"5-show-and-hide-errors-in-metamaskerror",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-simple-react-dapp-with-global-state"},"Create a Simple React Dapp with Global State"),(0,o.kt)("p",null,"This tutorial picks up where the ",(0,o.kt)("a",{parentName:"p",href:"/709-react-dapp-part-2/wallet/tutorials/react-dapp-local-state"},"previous tutorial")," left off. We will be starting our work from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial/tree/global-state-start"},"global-state-start")," branch of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial"},"react-dapp-tutorial")," source code repository."),(0,o.kt)("p",null,"We will also utilize TypeScript and a few best practices to ensure a clean code base as we now have multiple components and a slightly more complex file structure in our ",(0,o.kt)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide/"},"Vite")," + React project."),(0,o.kt)("admonition",{title:"The purpose of utilizing Global State?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Our previous tutorial approached connecting to MetaMask and keeping the changes of account, balance and chainId in sync with a single component. Sooner or later, you must respond to some state change in a different component. In this tutorial, we will move that state and its relevant functions into React Context and make it global so that other components and UI can be aware of changes in the wallet state.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 18+"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," version 9+"),(0,o.kt)("li",{parentName:"ul"},"A text editor (for example, ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/download"},"MetaMask extension")," installed"),(0,o.kt)("li",{parentName:"ul"},"Basic knowledge of TypeScript, React and React Hooks")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-clone-react-dapp-repository"},"1. Clone React Dapp Repository"),(0,o.kt)("p",null,"Our first step is to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial"},"react-dapp-tutorial")," source code repository on GitHub and check out the ",(0,o.kt)("inlineCode",{parentName:"p"},"global-state-start")," branch and install our node module dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/MetaMask/react-dapp-tutorial.git \\\n&& cd react-dapp-tutorial && git checkout local-state-start \\\n&& npm install\n")),(0,o.kt)("p",null,"We have a working React app at this point, but we have wiped out the code we wrote in our previous branches ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial/blob/local-state-final/src/App.tsx"},"App.tsx file"),"."),(0,o.kt)("p",null,"We will review this new structure. But first, let's run our App using ",(0,o.kt)("inlineCode",{parentName:"p"},"npx vite")," and make sure that our starting point looks like the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6254).Z,width:"1516",height:"1280"})),(0,o.kt)("p",null,'Here we have three components, each with static text consisting of a logo, navigation, main content "Display" area, and footer area that we will utilize to show MetaMask errors.'),(0,o.kt)("p",null,"Before we get started, let's comment or remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"border")," selector line of code in each style sheet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Display.module.css | MetaMaskError.module.css | Navigation.module.css"',title:'"Display.module.css',"|":!0,"MetaMaskError.module.css":!0,'Navigation.module.css"':!0},"// border: 1px solid rgb(...);\n")),(0,o.kt)("p",null,"This code was only there to show the three different components as a visual aid distinctly, and you can remove it from the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Display.module.css")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MetaMaskError.module.css")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Navigation.module.css"))),(0,o.kt)("h4",{id:"styling-strategy"},"Styling Strategy"),(0,o.kt)("p",null,"Not specific to MetaMask, but we wanted our new App to have a more structured and appealing layout and use some standard best practices around styling."),(0,o.kt)("p",null,"Vite's typical ",(0,o.kt)("inlineCode",{parentName:"p"},"App.css")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"index.css")," have been removed, and we are opting for a modular approach to CSS."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"/src")," directory, we have ",(0,o.kt)("inlineCode",{parentName:"p"},"App.global.css"),", who's styles are specific to the entire application (not related to a single component) or have styles we might want to reuse (like buttons)."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"/src")," directory, we have ",(0,o.kt)("inlineCode",{parentName:"p"},"App.module.css"),". Since our ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," is the container component for our application, ",(0,o.kt)("inlineCode",{parentName:"p"},"App.module.css")," relates to it and its ",(0,o.kt)("inlineCode",{parentName:"p"},"appContainer")," class which utilizes ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox"},"Flexbox")," to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"display")," type (",(0,o.kt)("inlineCode",{parentName:"p"},"flex"),") and the ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-direction")," (",(0,o.kt)("inlineCode",{parentName:"p"},"column"),"). Using Flexbox here ensures that any child ",(0,o.kt)("inlineCode",{parentName:"p"},"div"),"s are laid out in a single-column layout (vertically)."),(0,o.kt)("p",null,"Finally, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/components")," directory with a folder for ",(0,o.kt)("inlineCode",{parentName:"p"},"Display"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Navigation"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskError"),". Inside those folders are the component file and corresponding modular CSS files specific to that component. Each of these three components are ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology"},"flex-items")," within a ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties"},"flex-container"),", stacked in a vertical column with the top (",(0,o.kt)("inlineCode",{parentName:"p"},"Navigation"),") and Footer (",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskError"),") being of fixed height and the middle component (",(0,o.kt)("inlineCode",{parentName:"p"},"Display"),") taking up the remaining vertical space."),(0,o.kt)("h4",{id:"project-structure"},"Project Structure"),(0,o.kt)("p",null,"Below is a tree representation of our App ",(0,o.kt)("inlineCode",{parentName:"p"},"/src")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2514\u2500\u2500 Display\n\u2502   \u2502   |   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   |   \u2514\u2500\u2500 Display.module.css\n\u2502   \u2502   |   \u2514\u2500\u2500 Display.tsx\n\u2502   \u2502   \u251c\u2500\u2500 MetaMaskError\n\u2502   \u2502   |   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   |   \u2514\u2500\u2500 MetaMaskError.module.css\n\u2502   \u2502   |   \u2514\u2500\u2500 MetaMaskError.tsx\n\u2502   \u2502   \u251c\u2500\u2500\u2500 Navigation\n\u2502   \u2502   |   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   |   \u2514\u2500\u2500 Navigation.module.css\n\u2502   \u2502   |   \u2514\u2500\u2500 Navigation.tsx\n\u2502   \u251c\u2500\u2500 hooks\n\u2502   \u2502   \u251c\u2500\u2500 useMetaMask.tsx\n\u2502   \u251c\u2500\u2500 utils\n\u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u251c\u2500\u2500 App.global.css\n\u251c\u2500\u2500 App.module.css\n\u251c\u2500\u2500 App.tsx\n\u251c\u2500\u2500 main.tsx\n\u251c\u2500\u2500 vite-env.d.ts\n")),(0,o.kt)("p",null,"Rather than building our page with a single component, we have added the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/components")," directory and distributed our prior UI and functionality into multiple components. We also have a directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks")," where we will modify our state and make it available to the rest of the App using a Context Provider. This provider will sit in our ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file and wrap the three children components. "),(0,o.kt)("p",null,"Those child components will have access to the state and the functions that modify the global state, thereby ensuring that any change to our ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet")," (",(0,o.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"balance"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId"),"), ",(0,o.kt)("inlineCode",{parentName:"p"},"hasProvider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"errorMessage"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"isConnecting"),"  state and their modifiers. That state will get refreshed by rerendering those child components when any part of it changes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(662).Z,width:"1516",height:"1280"})),(0,o.kt)("p",null,"The graphic above demonstrates how this Context Provider wraps its child components, providing access to the state modifier functions and the actual state itself. Since React uses a one-way data flow, any change to the data gets rerendered in those components automatically."),(0,o.kt)("h3",{id:"2-building-our-context-provider"},"2. Building Our Context Provider"),(0,o.kt)("p",null,"We have provided a file ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/hooks/useMetaMask")," which we will create this Context and Provider component named ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskContextProvider"),". This provider component will utilize the same ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hooks with minimal change from our previous tutorial's single component. It will also have similar ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateWallet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectMetaMask"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"clearError")," functions, all of which do their part to connect to MetaMask or update our MetaMask state."),(0,o.kt)("admonition",{title:"Check the Comments",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useMetaMask")," file we have supplied does not have code yet, but we have added some comments (pseudo-code) that note the work we need to do in this file. Reading through those comments before pasting your code in will be beneficial.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskContext")," will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskContext.Provider"),", which takes a value of type ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskData"),", supplying that to its ",(0,o.kt)("inlineCode",{parentName:"p"},"{children}"),"."),(0,o.kt)("p",null,"Next, we will export a React Hook called ",(0,o.kt)("inlineCode",{parentName:"p"},"useMetaMask"),", which uses our ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskContext"),"."),(0,o.kt)("p",null,"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/hooks/useMetaMask.tsx")," file with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="useMetaMask.tsx"',title:'"useMetaMask.tsx"'},"import { useState, useEffect, createContext, PropsWithChildren, useContext } from 'react'\n\nimport detectEthereumProvider from '@metamask/detect-provider'\nimport { formatBalance } from '@/utils'\n\ninterface MetaMaskData {\n  wallet: typeof initialState\n  hasProvider: boolean | null\n  error: boolean\n  errorMessage: string\n  isConnecting: boolean\n  connectMetaMask: () => void\n  clearError: () => void\n}\n\nconst initialState = { accounts: [], balance: '', chainId: '' }\n\nconst MetaMaskContext = createContext<MetaMaskData>({} as MetaMaskData)\n\nexport const MetaMaskContextProvider = ({ children }: PropsWithChildren) => {\n  const [hasProvider, setHasProvider] = useState<boolean | null>(null)\n  const [wallet, setWallet] = useState(initialState)\n\n  const [isConnecting, setIsConnecting] = useState(false)\n  const [errorMessage, setErrorMessage] = useState('')\n\n  useEffect(() => {\n    const refreshAccounts = (accounts: any) => {\n      if (accounts.length > 0) {\n        updateWallet(accounts)\n      } else {\n        // if length 0, user is disconnected\n        setWallet(initialState)\n      }\n    }\n\n    const refreshChain = async (chainId: any) => {\n      const accounts = await window.ethereum.request(\n        { method: 'eth_accounts' }\n      )\n      refreshAccounts(accounts)\n      setWallet((wallet) => ({ ...wallet, chainId }))\n    }\n\n    const getProvider = async () => {\n      const provider = await detectEthereumProvider({ silent: true })\n      setHasProvider(Boolean(provider))\n\n      if (provider) {\n        const accounts = await window.ethereum.request(\n          { method: 'eth_accounts' }\n        )\n        refreshAccounts(accounts)\n        window.ethereum.on('accountsChanged', refreshAccounts)\n        window.ethereum.on('chainChanged', refreshChain)\n      }\n    }\n\n    getProvider()\n\n    return () => {\n      window.ethereum?.removeListener('accountsChanged', refreshAccounts)\n      window.ethereum?.removeListener('chainChanged', refreshChain)\n    }\n  }, [])\n\n  const updateWallet = async (accounts: any) => {\n    const balance = formatBalance(await window.ethereum!.request({\n      method: 'eth_getBalance',\n      params: [accounts[0], 'latest'],\n    }))\n    const chainId = await window.ethereum!.request({\n      method: 'eth_chainId',\n    })\n    setWallet({ accounts, balance, chainId })\n  }\n\n  const connectMetaMask = async () => {\n    setIsConnecting(true)\n    await window.ethereum.request({\n      method: 'eth_requestAccounts',\n    })\n      .then((accounts: []) => {\n        setErrorMessage('')\n        updateWallet(accounts)\n      })\n      .catch((err: any) => {\n        setErrorMessage(err.message)\n      })\n    setIsConnecting(false)\n  }\n\n  const clearError = () => setErrorMessage('')\n\n  return (\n    <MetaMaskContext.Provider\n      value={{\n        wallet,\n        hasProvider,\n        error: !!errorMessage,\n        errorMessage,\n        isConnecting,\n        connectMetaMask: connectMetaMask,\n        clearError\n      }}\n    >\n      {children}\n    </MetaMaskContext.Provider>\n  )\n}\n\nexport const useMetaMask = () => {\n  const context = useContext(MetaMaskContext)\n  if (context === undefined) {\n    throw new Error('useMetaMask must be used within a \"MetaMaskContextProvider\"')\n  }\n  return context\n}\n")),(0,o.kt)("admonition",{title:"Why we are using TS Config Paths",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"One configuration change we have made to this application is the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"vite-tsconfig-paths"),", which lets us load modules whose location is specified in the paths section of our project's ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),(0,o.kt)("p",{parentName:"admonition"},"We import ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfigPaths")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"vite-tsconfig-paths")," in our ",(0,o.kt)("inlineCode",{parentName:"p"},"vite.config.ts")," and add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," array. "),(0,o.kt)("p",{parentName:"admonition"},"We have also updated the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to add a path corresponding to the ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/*")," directory using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@/*")," symbol to represent it. Finally, we add a ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./tsconfig.node.json"),"."),(0,o.kt)("p",{parentName:"admonition"},"You can find additional information at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aleclarson/vite-tsconfig-paths"},"vite-tsconfig-paths"),".")),(0,o.kt)("p",null,"First, notice the use of our paths ",(0,o.kt)("inlineCode",{parentName:"p"},'"@/utils"')," to import our utility functions."),(0,o.kt)("p",null,"Nothing special outside of the creation of the Context Provider is happening in this file that we have not previously done is some form in our previous tutorial."),(0,o.kt)("p",null,"With this Context Provider in place, we can now update our ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/App.tsx")," file to include that provider and wrap it around those three components."),(0,o.kt)("h3",{id:"3-wrap-components-with-context-provider"},"3. Wrap Components with Context Provider"),(0,o.kt)("p",null,"Let's open the ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/App.tsx")," file, import our ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskContextProvider")," and wrap that component around the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"Display"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Navigation"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskError")," components."),(0,o.kt)("p",null,"Update the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/App.tsx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"import './App.global.css'\nimport styles from './App.module.css'\n\nimport { Navigation } from './components/Navigation'\nimport { Display } from './components/Display'\nimport { MetaMaskError } from './components/MetaMaskError'\nimport { MetaMaskContextProvider } from './hooks/useMetaMask'\n\nexport const App = () => {\n\n  return (\n    <MetaMaskContextProvider>\n      <div className={styles.appContainer}>\n        <Navigation />\n        <Display />\n        <MetaMaskError />\n      </div>\n    </MetaMaskContextProvider>\n  )\n}\n")),(0,o.kt)("p",null,"With our ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file updated, we can move on to updating our ",(0,o.kt)("inlineCode",{parentName:"p"},"Display"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Navigation"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskError")," components which will each in some form utilize our ",(0,o.kt)("inlineCode",{parentName:"p"},"useMetaMask")," hooks to invoke our functions that modify state or use the state itself."),(0,o.kt)("h3",{id:"4-connect-to-metamask-in-navigation"},"4. Connect to MetaMask in Navigation"),(0,o.kt)("p",null,"In our previous tutorial, we connected to MetaMask, displaying ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"balance"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," information in one component. But now, we want to split that up among our various components. "),(0,o.kt)("p",null,"Navigation will connect to MetaMask, use conditional rendering to show an ",(0,o.kt)("strong",{parentName:"p"},'"Install MetaMask"')," or ",(0,o.kt)("strong",{parentName:"p"},'"Connect MetaMask"')," button or, once connected, display our wallet address in a hypertext link that connects to ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io"},"Etherescan"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/components/Navigation/Navigation.tsx")," file, add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Navigation.tsx"',title:'"Navigation.tsx"'},'import { useMetaMask } from \'@/hooks/useMetaMask\'\nimport { formatAddress } from \'@/utils\'\nimport styles from \'./Navigation.module.css\'\n\nexport const Navigation = () => {\n\n  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask()\n\n  return (\n    <div className={styles.navigation}>\n      <div className={styles.flexContainer}>\n        <div className={styles.leftNav}>Vite + React & MetaMask</div>\n        <div className={styles.rightNav}>\n          {!hasProvider &&\n            <a href="https://metamask.io" target="_blank">\n              Install MetaMask\n            </a>\n          }\n          {window.ethereum?.isMetaMask && wallet.accounts.length < 1 &&\n            <button disabled={isConnecting} onClick={connectMetaMask}>\n              Connect MetaMask\n            </button>\n          }\n          {hasProvider && wallet.accounts.length > 0 &&\n            <a\n              className="text_link tooltip-bottom"\n              href={`https://etherscan.io/address/${wallet}`}\n              target="_blank"\n              data-tooltip= "Open in Block Explorer"\n            >\n              {formatAddress(wallet.accounts[0])}\n            </a>\n          }\n        </div>\n      </div>\n    </div>\n  )\n}\n')),(0,o.kt)("p",null,"Notice how we use ",(0,o.kt)("inlineCode",{parentName:"p"},"useMetaMask")," and destructure its return value to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskData")," state and functions we need."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask()\n")),(0,o.kt)("p",null,"Also, we are using a function to format our wallet address for display purposes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{formatAddress(wallet.accounts[0])}\n")),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"formatAddress")," function doesn't exist in that ",(0,o.kt)("inlineCode",{parentName:"p"},"@utils")," file yet, let's add it. "),(0,o.kt)("p",null,"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/utils/index.tsx")," with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="utils/index.tsx"',title:'"utils/index.tsx"'},"export const formatBalance = (rawBalance: string) => {\n  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)\n  return balance\n}\n\nexport const formatChainAsNum = (chainIdHex: string) => {\n  const chainIdNum = parseInt(chainIdHex)\n  return chainIdNum\n}\n\nexport const formatAddress = (addr: string) => {\n  return `${addr.substring(0, 8)}...`\n}\n")),(0,o.kt)("p",null,"That should address any build errors in our ",(0,o.kt)("inlineCode",{parentName:"p"},"Navigation")," component."),(0,o.kt)("p",null,"Other than using our new styling practice, the only thing we are doing differently from our previous tutorial is displaying the user's ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," formatted inside of a link once they are connected."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5702).Z,width:"1516",height:"1280"})),(0,o.kt)("h3",{id:"5-display-metamaskdata-in-display"},"5. Display MetaMaskData in Display"),(0,o.kt)("p",null,"In our ",(0,o.kt)("inlineCode",{parentName:"p"},"Display")," component, we will not call any functions that modify state; we will read from our ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaMaskData"),", which will be an effortless update."),(0,o.kt)("p",null,"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/components/Display/Display.tsx")," file with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Display.tsx"',title:'"Display.tsx"'},"import { useMetaMask } from '@/hooks/useMetaMask'\nimport styles from './Display.module.css'\nimport { formatChainAsNum } from '@/utils'\n\nexport const Display = () => {\n\n  const { wallet } = useMetaMask()\n\n  return (\n    <div className={styles.display}>\n      {wallet.accounts.length > 0 &&\n        <>\n          <div>Wallet Accounts: {wallet.accounts[0]}</div>\n          <div>Wallet Balance: {wallet.balance}</div>\n          <div>Hex ChainId: {wallet.chainId}</div>\n          <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>\n        </>\n      }\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,"Notice how we now use ",(0,o.kt)("inlineCode",{parentName:"p"},"useMetaMask")," and destructuring its return value to get only the ",(0,o.kt)("inlineCode",{parentName:"p"},"{ wallet }")," data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { wallet } = useMetaMask()\n")),(0,o.kt)("p",null,"At this point, we will be able to display ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"balance"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," in our ",(0,o.kt)("inlineCode",{parentName:"p"},"Display")," component:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7748).Z,width:"1516",height:"1280"})),(0,o.kt)("h3",{id:"5-show-and-hide-errors-in-metamaskerror"},"5. Show and Hide Errors in MetaMaskError"),(0,o.kt)("p",null,"We're rounding the bases and close to finalizing our demo, but we want to ensure that if MetaMask errors or the user rejects a connection, we have a component to display that error. "),(0,o.kt)("p",null,"If a user clicks on that error, we will dismiss the error, which will again hide that information, and we do this using the ",(0,o.kt)("inlineCode",{parentName:"p"},"clearError")," function that we set up in the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMetaMask")," hook."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/components/MetaMaskError/MetaMaskError.tsx")," file, add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="MetaMaskError.tsx"',title:'"MetaMaskError.tsx"'},"import { useMetaMask } from '@/hooks/useMetaMask'\nimport styles from './MetaMaskError.module.css'\n\nexport const MetaMaskError = () => {\n  const { error, errorMessage, clearError } = useMetaMask()\n  return (\n    <div className={styles.metaMaskError} style={\n      error ? { backgroundColor: 'brown'} : {}\n    }>\n      { error && (\n          <div onClick={clearError}>\n            <strong>Error:</strong> {errorMessage}\n          </div>\n        )\n      }\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,"Notice how we are now using ",(0,o.kt)("inlineCode",{parentName:"p"},"useMetaMask")," and destructuring its return value to get only the ",(0,o.kt)("inlineCode",{parentName:"p"},"{ error, errorMessage, clearError }")," data and a function that will modify the error state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { error, errorMessage, clearError } = useMetaMask()\n")),(0,o.kt)("p",null,"When we generate an error by cancelling the connection to MetaMask, this will show up in the footer component; it will temporarily make its background a dark red color:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3522).Z,width:"1516",height:"1280"})),(0,o.kt)("p",null,"Upon clicking on that red area, the error will be dismissed. In a real-world application, the best UI/UX for this would be a component that displays in a modal or overlay; for the sake of simplicity, we have just utilized our footer area for this, but the logic we have can be applied to any situation."),(0,o.kt)("p",null,"You can see the final state of our ",(0,o.kt)("inlineCode",{parentName:"p"},"global-state")," App by checking out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial/tree/global-state-final"},"global-state-final")," branch of the source code."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We've successfully converted an app using a simple local component state to one that utilizes React Context and Provider to have a global state that we can modify through functions and data that, when used anywhere in our application, will show up-to-date data associated with our MetaMask wallet. \ud83d\udc4a\ud83d\ude09\ud83d\udc4d"))}d.isMDXComponent=!0},6254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pt2-01-3c2f19aa1cdbeb15eab76717dc49ce0c.png"},662:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pt2-02-1cc67378fe36943534741cd4f8b131bd.png"},5702:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pt2-03-e8b080de2656acae1f64606002a6efa7.png"},7748:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pt2-04-5acbfcc3f3ba213bae6a9b341522eb9b.png"},3522:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pt2-05-d0ee9f90adc6b7d693bf11ff700196fe.png"}}]);