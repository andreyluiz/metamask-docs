"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={description:"Detect the MetaMask Ethereum provider object.",sidebar_position:1},i="Detect MetaMask",s={unversionedId:"how-to/connect/detect-metamask",id:"how-to/connect/detect-metamask",title:"Detect MetaMask",description:"Detect the MetaMask Ethereum provider object.",source:"@site/wallet/how-to/connect/detect-metamask.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/detect-metamask",permalink:"/1197-improve-eip-6963/wallet/how-to/connect/detect-metamask",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/detect-metamask.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Detect the MetaMask Ethereum provider object.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Connect to MetaMask",permalink:"/1197-improve-eip-6963/wallet/how-to/connect/"},next:{title:"Access a user's accounts",permalink:"/1197-improve-eip-6963/wallet/how-to/connect/access-accounts"}},c={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Install <code>@metamask/detect-provider</code>",id:"1-install-metamaskdetect-provider",level:3},{value:"2. Detect the provider",id:"2-detect-the-provider",level:3}],l={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detect-metamask"},"Detect MetaMask"),(0,a.kt)("admonition",{title:"Important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"MetaMask supports ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative wallet detection mechanism to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,a.kt)("a",{parentName:"p",href:"/1197-improve-eip-6963/wallet/concepts/wallet-interoperabilty"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser."),(0,a.kt)("p",{parentName:"admonition"},"This page describes the legacy method of connecting to MetaMask using ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum"),".\nWe recommend ",(0,a.kt)("a",{parentName:"p",href:"/1197-improve-eip-6963/wallet/how-to/connect/"},"connecting to MetaMask using EIP-6963")," instead.")),(0,a.kt)("p",null,"The presence of the MetaMask Ethereum provider object, ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum"),", in a user's browser\nindicates an Ethereum user."),(0,a.kt)("p",null,"To demonstrate this, verify whether your browser is running MetaMask by copying and pasting the following\ncode snippet into your browser's developer console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'if (typeof window.ethereum !== "undefined") {\n    console.log("MetaMask is installed!");\n}\n')),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," module to\ndetect the MetaMask Ethereum provider."),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"1-install-metamaskdetect-provider"},"1. Install ",(0,a.kt)("inlineCode",{parentName:"h3"},"@metamask/detect-provider")),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," to install\n",(0,a.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider")," in your project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/detect-provider\n")),(0,a.kt)("h3",{id:"2-detect-the-provider"},"2. Detect the provider"),(0,a.kt)("p",null,"For example, the following code detects the provider using ",(0,a.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// This function detects most providers injected at window.ethereum.\nimport detectEthereumProvider from "@metamask/detect-provider";\n\n// This returns the provider, or null if it wasn\'t detected.\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n    // From now on, this should always be true:\n    // provider === window.ethereum\n    startApp(provider); // Initialize your dapp.\n} else {\n    console.log("Please install MetaMask!");\n}\n\nfunction startApp(provider) {\n    // If the provider returned by detectEthereumProvider isn\'t the same as window.ethereum, something\n    // is overwriting it \u2013 perhaps another wallet. See the "Connect to MetaMask" guide for detecting\n    // and connecting to multiple wallets.\n    if (provider !== window.ethereum) {\n        console.error("Do you have multiple wallets installed?");\n    }\n    // Access the decentralized web!\n}\n')))}m.isMDXComponent=!0}}]);