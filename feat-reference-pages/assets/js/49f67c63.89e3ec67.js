"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9477],{30451:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(74848),n=t(28453);const r={sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with Node.js",o={id:"how-to/use-sdk/javascript/nodejs",title:"Use MetaMask SDK with Node.js",description:"Set up the SDK in your Node.js dapp.",source:"@site/wallet/how-to/use-sdk/javascript/nodejs.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/nodejs",permalink:"/feat-reference-pages/wallet/how-to/use-sdk/javascript/nodejs",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/nodejs.md",tags:[{label:"JavaScript SDK",permalink:"/feat-reference-pages/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React Native and Expo",permalink:"/feat-reference-pages/wallet/how-to/use-sdk/javascript/react-native"},next:{title:"Electron",permalink:"/feat-reference-pages/wallet/how-to/use-sdk/javascript/electron"}},d={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"use-metamask-sdk-with-nodejs",children:"Use MetaMask SDK with Node.js"}),"\n",(0,a.jsxs)(s.p,{children:["Import ",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your Node.js dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for Node.js has the ",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/how-to/use-sdk/javascript/#prerequisites",children:"same prerequisites"})," as for standard JavaScript."]}),"\n",(0,a.jsx)(s.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(s.h3,{id:"1-install-the-sdk",children:"1. Install the SDK"}),"\n",(0,a.jsx)(s.p,{children:"In your project directory, install the SDK using Yarn or npm:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add @metamask/sdk\n"})}),"\n",(0,a.jsx)(s.p,{children:"or"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm i @metamask/sdk\n"})}),"\n",(0,a.jsx)(s.h3,{id:"2-import-the-sdk",children:"2. Import the SDK"}),"\n",(0,a.jsx)(s.p,{children:"In your project script, add the following to import the SDK:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { MetaMaskSDK } from "@metamask/sdk";\n'})}),"\n",(0,a.jsx)(s.h3,{id:"3-instantiate-the-sdk",children:"3. Instantiate the SDK"}),"\n",(0,a.jsxs)(s.p,{children:["Instantiate the SDK using any ",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/reference/sdk-js-options",children:"options"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",metastring:'title="index.js"',children:'const MMSDK = new MetaMaskSDK({\n  dappMetadata: {\n    name: "Example Node.js Dapp",\n    url: window.location.href,\n  },\n  infuraAPIKey: process.env.INFURA_API_KEY,\n  // Other options.\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n'})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Use ",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/reference/sdk-js-options#dappmetadata",children:(0,a.jsx)(s.code,{children:"dappMetadata"})})," to display information\nabout your dapp in the MetaMask connection modal."]}),"\n",(0,a.jsxs)(s.li,{children:["Use ",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/reference/sdk-js-options#infuraapikey",children:(0,a.jsx)(s.code,{children:"infuraAPIKey"})})," to\n",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only RPC requests"})," from your dapp."]}),"\n",(0,a.jsxs)(s.li,{children:["Use ",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/reference/sdk-js-options#modals",children:(0,a.jsx)(s.code,{children:"modals"})})," to ",(0,a.jsx)(s.a,{href:"display-custom-modals.md",children:"customize the logic and UI of\nthe displayed modals"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"4-use-the-sdk",children:"4. Use the SDK"}),"\n",(0,a.jsxs)(s.p,{children:["Use the SDK by calling any ",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/reference/provider-api",children:"provider API methods"}),".\nAlways call ",(0,a.jsx)(s.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,a.jsx)(s.code,{children:"eth_requestAccounts"})})," using\n",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/reference/provider-api#request",children:(0,a.jsx)(s.code,{children:"request()"})})," first, since it\nprompts the installation or connection popup to appear."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:'ethereum.request({ method: "eth_requestAccounts", params: [] });\n'})}),"\n",(0,a.jsxs)(s.p,{children:["You can also call the SDK's ",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/how-to/use-sdk/javascript/connect-and-sign",children:(0,a.jsx)(s.code,{children:"connectAndSign"})})," method, and\n",(0,a.jsx)(s.a,{href:"/feat-reference-pages/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests",children:"batch multiple JSON-RPC requests"})," using the ",(0,a.jsx)(s.code,{children:"metamask_batch"})," method."]}),"\n",(0,a.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(s.p,{children:"You can copy the full Node.js example to get started:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { MetaMaskSDK } from "@metamask/sdk";\n\nconst MMSDK = new MetaMaskSDK({\n  dappMetadata: {\n    name: "Example Node.js Dapp",\n    url: window.location.href,\n  },\n  infuraAPIKey: process.env.INFURA_API_KEY,\n  // Other options.\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n\nethereum.request({ method: "eth_requestAccounts", params: [] });\n'})}),"\n",(0,a.jsxs)(s.p,{children:["See the ",(0,a.jsx)(s.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs",children:"example Node.js dapp"}),"\nin the JavaScript SDK GitHub repository for advanced use cases."]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var a=t(96540);const n={},r=a.createContext(n);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);