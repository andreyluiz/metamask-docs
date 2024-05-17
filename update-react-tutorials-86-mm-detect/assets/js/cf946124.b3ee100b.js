"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5246],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={description:"Create a single component React dapp with local state using EIP-6963.",sidebar_position:1},i="Create a React dapp with local state",s={unversionedId:"tutorials/react-dapp-local-state",id:"tutorials/react-dapp-local-state",title:"Create a React dapp with local state",description:"Create a single component React dapp with local state using EIP-6963.",source:"@site/wallet/tutorials/react-dapp-local-state.md",sourceDirName:"tutorials",slug:"/tutorials/react-dapp-local-state",permalink:"/update-react-tutorials-86-mm-detect/wallet/tutorials/react-dapp-local-state",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/tutorials/react-dapp-local-state.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Create a single component React dapp with local state using EIP-6963.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Tutorials",permalink:"/update-react-tutorials-86-mm-detect/wallet/tutorials"},next:{title:"Create a React dapp with global state",permalink:"/update-react-tutorials-86-mm-detect/wallet/tutorials/react-dapp-global-state"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Import EIP-6963 interfaces",id:"2-import-eip-6963-interfaces",level:3},{value:"3. Create store file",id:"3-create-store-file",level:3},{value:"4. Sync provider state with React component",id:"4-sync-provider-state-with-react-component",level:3},{value:"5. Create connect buttons",id:"5-create-connect-buttons",level:3},{value:"6. Show connected wallet address",id:"6-show-connected-wallet-address",level:3},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Doesn&#39;t look right?",id:"doesnt-look-right",level:4},{value:"Doesn&#39;t function properly?",id:"doesnt-function-properly",level:4},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,r.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"create-a-react-dapp-with-local-state"},"Create a React dapp with local state"),(0,a.yg)("p",null,"This tutorial walks you through integrating a simple React dapp with MetaMask.\nThe dapp has a single JSX component, which is used for managing local state.\nYou'll use the ",(0,a.yg)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide"},"Vite")," build tool with React and TypeScript to create\nthe dapp."),(0,a.yg)("admonition",{title:"Why React?",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"React is familiar to most web developers and is standard in web3.\nIt makes it easy to work with state management, build components that use a one-way data flow, and\nre-render those components upon state changes.")),(0,a.yg)("admonition",{title:"Project source code",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"You can view the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-local-tutorial"},"dapp source code on GitHub"),".")),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 18+"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," version 9+"),(0,a.yg)("li",{parentName:"ul"},"A text editor (for example, ",(0,a.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("a",{parentName:"li",href:"https://metamask.io/download"},"MetaMask extension")," installed"),(0,a.yg)("li",{parentName:"ul"},"Basic knowledge of JavaScript and React")),(0,a.yg)("h2",{id:"steps"},"Steps"),(0,a.yg)("h3",{id:"1-set-up-the-project"},"1. Set up the project"),(0,a.yg)("p",null,"Set up a new project using Vite, React, and TypeScript by running the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest mm-dapp-react -- --template react-ts\n")),(0,a.yg)("p",null,"Install the node module dependencies:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd mm-dapp-react && npm install\n")),(0,a.yg)("p",null,"Launch the development server:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,a.yg)("p",null,"This displays a ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost")," URL in your terminal, where you can view the dapp in your browser."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If the development server has been stopped, you can re-run your project using the ",(0,a.yg)("inlineCode",{parentName:"p"},"npx vite")," or\n",(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev")," command.")),(0,a.yg)("p",null,"Open the project in your editor.\nTo start with a blank slate, replace the code in ",(0,a.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," with the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import "./App.css"\n\nconst App = () => {\n  return (\n    <div className="App">\n      <h2>Wallets Detected:</h2>\n    </div>\n  )\n}\n\nexport default App\n')),(0,a.yg)("h3",{id:"2-import-eip-6963-interfaces"},"2. Import EIP-6963 interfaces"),(0,a.yg)("p",null,"Your dapp will connect to MetaMask using the mechanism introduced by\n",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),"."),(0,a.yg)("admonition",{title:"Why EIP-6963?",type:"info"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963")," introduces an alternative wallet detection\nmechanism to the ",(0,a.yg)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support\n",(0,a.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/wallet/concepts/wallet-interoperability"},"wallet interoperability")," by discovering multiple injected\nwallet providers in a user's browser.")),(0,a.yg)("p",null,"Update the Vite environment variable file, ",(0,a.yg)("inlineCode",{parentName:"p"},"src/vite-env.d.ts"),", with the types and interfaces\nneeded for ",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963")," and\n",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="vite-env.d.ts"',title:'"vite-env.d.ts"'},'/// <reference types="vite/client" />\n\n// Describes metadata related to a provider according to EIP-6963.\ninterface EIP6963ProviderInfo {\n  walletId: string\n  uuid: string\n  name: string\n  icon: string\n}\n\n// Represents the structure of an Ethereum provider based on the EIP-1193 standard.\ninterface EIP1193Provider {\n  isStatus?: boolean\n  host?: string\n  path?: string\n  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n\n// Combines the provider\'s metadata with an actual provider object, creating a complete picture of a\n// wallet provider at a glance.\ninterface EIP6963ProviderDetail {\n  info: EIP6963ProviderInfo\n  provider: EIP1193Provider\n}\n\n// Represents the structure of an event dispatched by a wallet to announce its presence based on EIP-6963.\ntype EIP6963AnnounceProviderEvent = {\n  detail:{\n    info: EIP6963ProviderInfo\n    provider: EIP1193Provider\n  }\n}\n\n// An error object with optional properties, commonly encountered when handling eth_requestAccounts errors.\ninterface MMError {\n  code?: string\n  message?: string\n}\n')),(0,a.yg)("h3",{id:"3-create-store-file"},"3. Create store file"),(0,a.yg)("p",null,"Create a store file to manage the state of the detected wallet providers.\nThis file provides a centralized place to store and synchronize the detected wallet providers,\nensuring that your dapp always has access to the latest provider information."),(0,a.yg)("p",null,"Create a ",(0,a.yg)("inlineCode",{parentName:"p"},"src/hooks")," directory, and create a file ",(0,a.yg)("inlineCode",{parentName:"p"},"store.ts")," in that directory with the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="store.ts"',title:'"store.ts"'},'// Extends WindowEventMap interface, including a custom event eip6963:announceProvider.\ndeclare global{\n  interface WindowEventMap {\n    "eip6963:announceProvider": CustomEvent\n  }\n}\n\n// Array that stores detected wallet providers and their details.\nlet providers: EIP6963ProviderDetail[] = []\n\n// Object containing two methods. The store holds the state of detected Ethereum wallet providers.\n// It\'s implemented as an external store, making it available for subscription and synchronization\n// across the dapp.\nexport const store = {\n  // Returns the current state of providers.\n  value: ()=> providers,\n  // Subscribes to provider announcements and updates the store accordingly.\n  // Takes a callback function to be invoked on each store update, returning a function to\n  // unsubscribe from the event.\n  subscribe: (callback: ()=> void) => {\n    function onAnnouncement(event: EIP6963AnnounceProviderEvent){\n      if(providers.map(p => p.info.uuid).includes(event.detail.info.uuid)) return\n      providers = [...providers, event.detail]\n      callback()\n    }\n    window.addEventListener("eip6963:announceProvider", onAnnouncement);\n    window.dispatchEvent(new Event("eip6963:requestProvider"));\n\n    return () => window.removeEventListener("eip6963:announceProvider", onAnnouncement)\n  }\n}\n')),(0,a.yg)("h3",{id:"4-sync-provider-state-with-react-component"},"4. Sync provider state with React component"),(0,a.yg)("p",null,"With the store in place, create a custom hook that synchronizes the provider state with the React component.\nUse the ",(0,a.yg)("a",{parentName:"p",href:"https://react.dev/reference/react/useSyncExternalStore"},(0,a.yg)("inlineCode",{parentName:"a"},"useSyncExternalStore"))," React hook\nto subscribe to changes in the provider store, and to ensure the component re-renders whenever\nthe store updates."),(0,a.yg)("p",null,"Create a file ",(0,a.yg)("inlineCode",{parentName:"p"},"useSyncProviders.ts")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"hooks")," directory with the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="useSyncProviders.ts"',title:'"useSyncProviders.ts"'},'import { useSyncExternalStore } from "react";\nimport { store } from "./store";\n\nexport const useSyncProviders = ()=> useSyncExternalStore(store.subscribe, store.value, store.value)\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useSyncExternalStore")," takes three arguments:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A subscription function to listen for changes in the external store (",(0,a.yg)("inlineCode",{parentName:"li"},"store.subscribe"),")."),(0,a.yg)("li",{parentName:"ul"},"A function to get the current value of the store (",(0,a.yg)("inlineCode",{parentName:"li"},"store.value"),")."),(0,a.yg)("li",{parentName:"ul"},"An initial value for the store (",(0,a.yg)("inlineCode",{parentName:"li"},"store.value"),").")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"As an alternative to ",(0,a.yg)("inlineCode",{parentName:"p"},"useSyncExternalStore"),", you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"useState")," React hook to manage the\nprovider state, and the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," React hook to subscribe to changes in the store.\nWhen the React component mounts, you can subscribe to changes in the store, set the initial state\nusing the current value from the store, and return a cleanup function to unsubscribe from the store\nwhen the component unmounts.")),(0,a.yg)("h3",{id:"5-create-connect-buttons"},"5. Create connect buttons"),(0,a.yg)("p",null,"Create an array of buttons that the user can select to connect to the EIP-6963 wallet providers that\nyou detect.  "),(0,a.yg)("p",null,"Update ",(0,a.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," to the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { useSyncProviders } from "./hooks/useSyncProviders"\nimport "./App.css"\n\nconst App = () => {\n  const providers = useSyncProviders()\n\n  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {\n    try {\n      const accounts = await providerWithInfo.provider.request({\n        method: "eth_requestAccounts"\n      }) as string[]\n\n    } catch (error) {\n      console.error(error);\n    }\n  }\n\n  return (\n    <div className="App">\n      <h2>Wallets Detected:</h2>\n      <div className="providers">\n        {\n          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (\n            <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >\n              <img src={provider.info.icon} alt={provider.info.name} />\n              <div>{provider.info.name}</div>\n            </button>\n          )) :\n            <div>\n              No Announced Wallet Providers\n            </div>\n        }\n      </div>\n    </div>\n  )\n}\n\nexport default App\n')),(0,a.yg)("p",null,"To style the buttons, update ",(0,a.yg)("inlineCode",{parentName:"p"},"src/App.css")," to the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-css",metastring:'title="App.css"',title:'"App.css"'},".App {\n  min-width: 100vw;\n  min-height: 100vh;\n  text-align: center;\n}\n\n.metaMaskError {\n  height: 36px;\n  padding: 16px;\n  color: #EFEFEF;\n  background-color: transparent;\n}\n\n.providers {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center;\n  gap: 1em;\n\n  padding: 0.6em 1.2em;\n}\n\n.providers button {\n  width: 12em;\n}\n\n.providers button img {\n  width: 2em;\n}\n")),(0,a.yg)("p",null,"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev")," to test the dapp.\nMake sure you're signed in to MetaMask and that it's not currently connected to your dapp.\nIf you have multiple EIP-6963 wallets installed in your browser, something like the following should display:"),(0,a.yg)("p",{align:"center"},(0,a.yg)("p",null,(0,a.yg)("img",{alt:"View of Dapp - Wallets Detected",src:n(83743).A,width:"1910",height:"1142"}))),(0,a.yg)("h3",{id:"6-show-connected-wallet-address"},"6. Show connected wallet address"),(0,a.yg)("p",null,"Indicate when a wallet has been connected to by displaying the user's address on the page."),(0,a.yg)("p",null,"Update everything above the ",(0,a.yg)("inlineCode",{parentName:"p"},"return")," statement in ",(0,a.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," to the following, which\nadds code to format and display user addresses, and handle errors:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { useState } from "react"\nimport { useSyncProviders } from "./hooks/useSyncProviders"\nimport "./App.css"\n\nconst App = () => {\n  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()\n  const [userAccount, setUserAccount] = useState<string>("")\n  const providers = useSyncProviders()\n\n  const [errorMessage, setErrorMessage] = useState("")\n  const clearError = () => setErrorMessage("")\n  const setError = (error: string) => setErrorMessage(error)\n  const isError = !!errorMessage\n\n  // Display a readable user address.\n  const formatAddress = (addr: string) => {\n    const upperAfterLastTwo = addr.slice(0, 2) + addr.slice(2)\n    return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`\n  }\n\n  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {\n    try {\n      const accounts = await providerWithInfo.provider.request({\n        method: "eth_requestAccounts"\n      }) as string[]\n\n      setSelectedWallet(providerWithInfo)\n      setUserAccount(accounts?.[0])\n    } catch (error) {\n      console.error(error)\n      const mmError: MMError = error as MMError\n      setError(`Code: ${mmError.code} \\nError Message: ${mmError.message}`)\n    }\n  }\n  ...\n')),(0,a.yg)("p",null,"Below the ",(0,a.yg)("inlineCode",{parentName:"p"},"return")," statement in ",(0,a.yg)("inlineCode",{parentName:"p"},"src/App.tsx"),", update the ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," with the class of ",(0,a.yg)("inlineCode",{parentName:"p"},".App")," to the\nfollowing:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'  ...\n  return (\n    <div className="App">\n      <h2>Wallets Detected:</h2>\n      <div className="providers">\n        {\n          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (\n            <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >\n              <img src={provider.info.icon} alt={provider.info.name} />\n              <div>{provider.info.name}</div>\n            </button>\n          )) :\n            <div>\n              No Announced Wallet Providers\n            </div>\n        }\n      </div>\n      <hr />\n      <h2>{userAccount ? "" : "No"} Wallet Selected</h2>\n      {userAccount &&\n        <div className="selectedWallet">\n          <img src={selectedWallet?.info.icon} alt={selectedWallet?.info.name} />\n          <div>{selectedWallet?.info.name}</div>\n          <div>({formatAddress(userAccount)})</div>\n        </div>\n      }\n      <div className="mmError" style={isError ? { backgroundColor: \'brown\' } : {}}>\n        {isError &&\n          <div onClick={clearError}>\n            <strong>Error:</strong> {errorMessage}\n          </div>\n        }\n      </div>\n    </div>\n  )\n')),(0,a.yg)("p",null,"Your dapp should look similar to the following:"),(0,a.yg)("p",{align:"center"},(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Final View of Dapp",src:n(83743).A,width:"1910",height:"1142"}))),(0,a.yg)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,a.yg)("h4",{id:"doesnt-look-right"},"Doesn't look right?"),(0,a.yg)("p",null,"This tutorial creates ",(0,a.yg)("inlineCode",{parentName:"p"},"className"),"s for each section's parent ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," in the JSX (HTML).\nIf your dapp does not look the same but functions properly, check the naming of your classes and\ntheir corresponding CSS."),(0,a.yg)("h4",{id:"doesnt-function-properly"},"Doesn't function properly?"),(0,a.yg)("p",null,"Try the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Check the code examples against your own."),(0,a.yg)("li",{parentName:"ul"},"Place ",(0,a.yg)("inlineCode",{parentName:"li"},"console")," statements in key areas such as ",(0,a.yg)("inlineCode",{parentName:"li"},"handleConnect")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"store"),"."),(0,a.yg)("li",{parentName:"ul"},"Clone the\n",(0,a.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/vite-react-local-tutorial"},"GitHub repository containing the project source code"),"\nand run it.")),(0,a.yg)("p",null,"If you find inconsistencies or erroneous code, feel free to create an issue on the repository."),(0,a.yg)("h2",{id:"next-steps"},"Next steps"),(0,a.yg)("p",null,"This tutorial walked you through creating a single component dapp using Vite, detecting wallet\nproviders using EIP-6963, and managing the state in React locally.\nYou can view the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-local-tutorial"},"project source code on GitHub"),"."),(0,a.yg)("p",null,"As a next step, you can ",(0,a.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/wallet/tutorials/react-dapp-global-state"},"create a React dapp with global state"),".\nThis follow-up tutorial walks you through adding more than one component and working with global state.\nYou'll use ",(0,a.yg)("a",{parentName:"p",href:"https://react.dev/reference/react/useContext"},"React's Context API")," to manage the state\nglobally and ensure that any component in your dapp can be aware and conditionally render or display\ninformation about your MetaMask wallet."))}u.isMDXComponent=!0},83743:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/react-tutorial-01-final-0719e52bb4965f83e147340db7ef86c1.png"}}]);