"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),k=n,f=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},45306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1},l="Set up MetaMask SDK",i={unversionedId:"how-to/connect/set-up-sdk/index",id:"how-to/connect/set-up-sdk/index",title:"Set up MetaMask SDK",description:"MetaMask SDK is a library that provides a reliable, secure, and seamless",source:"@site/wallet/how-to/connect/set-up-sdk/index.md",sourceDirName:"how-to/connect/set-up-sdk",slug:"/how-to/connect/set-up-sdk/",permalink:"/zs/flask-only-ui/wallet/how-to/connect/set-up-sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Connect to MetaMask",permalink:"/zs/flask-only-ui/wallet/how-to/connect"},next:{title:"JavaScript",permalink:"/zs/flask-only-ui/wallet/how-to/connect/set-up-sdk/javascript/"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"set-up-metamask-sdk"},"Set up MetaMask SDK"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/zs/flask-only-ui/wallet/concepts/sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\nconnection from your dapp to the MetaMask browser extension and MetaMask Mobile.\nIt supports the following dapp platforms:"),(0,n.kt)("div",{class:"cards"},(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\ud83d\udcbb ",(0,n.kt)("a",{href:"javascript"},"JavaScript"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react"},"React")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/pure-js"},"Pure JavaScript")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/other-web-frameworks"},"Other web frameworks")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react-native"},"React Native")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/nodejs"},"Node.js")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/electron"},"Electron"))))),(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\ud83d\udcf1 ",(0,n.kt)("a",{href:"mobile"},"Mobile"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react-native"},"React Native")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"mobile/ios"},"iOS")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"mobile/android"},"Android"))))),(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\ud83c\udfae ",(0,n.kt)("a",{href:"gaming"},"Gaming"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"gaming/unity"},"Unity")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"gaming/unreal-engine"},"Unreal Engine")," (coming soon)"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"MetaMask SDK uses the ",(0,n.kt)("a",{parentName:"p",href:"/zs/flask-only-ui/wallet/reference/provider-api"},"Ethereum provider")," that developers are\nalready used to, so existing dapps work out of the box with the SDK.")))}d.isMDXComponent=!0}}]);