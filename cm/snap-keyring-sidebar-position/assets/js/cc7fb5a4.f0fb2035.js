"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_label:"Other web frameworks",sidebar_position:3},o="Use MetaMask SDK with other web frameworks",i={unversionedId:"how-to/connect/set-up-sdk/javascript/other-web-frameworks",id:"how-to/connect/set-up-sdk/javascript/other-web-frameworks",title:"Use MetaMask SDK with other web frameworks",description:"You can import MetaMask SDK into your web dapp to enable your users to",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/other-web-frameworks",permalink:"/cm/snap-keyring-sidebar-position/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Other web frameworks",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Pure JavaScript",permalink:"/cm/snap-keyring-sidebar-position/wallet/how-to/connect/set-up-sdk/javascript/pure-js"},next:{title:"React Native",permalink:"/cm/snap-keyring-sidebar-position/wallet/how-to/connect/set-up-sdk/javascript/react-native"}},p={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3}],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-other-web-frameworks"},"Use MetaMask SDK with other web frameworks"),(0,n.kt)("p",null,"You can import ",(0,n.kt)("a",{parentName:"p",href:"/cm/snap-keyring-sidebar-position/wallet/concepts/sdk"},"MetaMask SDK")," into your web dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for other web frameworks has the ",(0,n.kt)("a",{parentName:"p",href:"/cm/snap-keyring-sidebar-position/wallet/#prerequisites"},"same prerequisites")," as for\nstandard JavaScript."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,n.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n")),(0,n.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,n.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MetaMaskSDK } from '@metamask/sdk';\n")),(0,n.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,n.kt)("p",null,"Instantiate the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/cm/snap-keyring-sidebar-position/wallet/reference/sdk-js-options"},"options"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const MMSDK = new MetaMaskSDK(options);\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n")),(0,n.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,n.kt)("p",null,"Use the SDK by calling any ",(0,n.kt)("a",{parentName:"p",href:"/cm/snap-keyring-sidebar-position/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/cm/snap-keyring-sidebar-position/wallet/reference/rpc-api#eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/cm/snap-keyring-sidebar-position/wallet/reference/provider-api#ethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.request({ method: 'eth_requestAccounts', params: [] });\n")))}m.isMDXComponent=!0}}]);