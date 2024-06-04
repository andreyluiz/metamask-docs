"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[78499],{58043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(74848),s=n(28453);n(11470),n(19365);const o={title:"Subscription methods"},a="Subscription methods",i={id:"network-apis/polygon-pos/json-rpc-methods/subscription-methods/index",title:"Subscription methods",description:"Subscription methods are available for WebSocket connections only, and allow you to wait for events instead of polling for them. For example, dapps can subscribe to logs and receive notifications when a specific event occurs.",source:"@site/services/network-apis/polygon-pos/json-rpc-methods/subscription-methods/index.md",sourceDirName:"network-apis/polygon-pos/json-rpc-methods/subscription-methods",slug:"/network-apis/polygon-pos/json-rpc-methods/subscription-methods/",permalink:"/test-integrate-infura/services/network-apis/polygon-pos/json-rpc-methods/subscription-methods/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/polygon-pos/json-rpc-methods/subscription-methods/index.md",tags:[],version:"current",frontMatter:{title:"Subscription methods"},sidebar:"servicesSidebar",previous:{title:"net_version",permalink:"/test-integrate-infura/services/network-apis/polygon-pos/json-rpc-methods/net_version"},next:{title:"eth_subscribe",permalink:"/test-integrate-infura/services/network-apis/polygon-pos/json-rpc-methods/subscription-methods/eth_subscribe"}},l={},u=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"subscription-methods",children:"Subscription methods"}),"\n",(0,r.jsxs)(t.p,{children:["Subscription methods are available for ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/learn/websockets",children:"WebSocket"})," connections only, and allow you to wait for events instead of polling for them. For example, dapps can subscribe to logs and receive notifications when a specific event occurs."]}),"\n",(0,r.jsx)(t.p,{children:"The following subscription methods are available:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/polygon-pos/json-rpc-methods/subscription-methods/eth_subscribe",children:(0,r.jsx)(t.code,{children:"eth_subscribe"})})," - Create a subscription to a particular event"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/polygon-pos/json-rpc-methods/subscription-methods/eth_unsubscribe",children:(0,r.jsx)(t.code,{children:"eth_unsubscribe"})})," - Cancel an active subscription"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"We recommend you use the WSS protocol to set up bidirectional stateful subscriptions. Stateless HTTP WebSockets are also\nsupported."})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),s=n(18215),o=n(23104),a=n(56347),i=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=b({queryString:n,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),v=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(u(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);