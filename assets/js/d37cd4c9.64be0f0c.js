"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5900],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,N=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5517:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),i=["components"],o={},p=void 0,d={unversionedId:"COMPONENTS/DATA-INPUT/tree-select",id:"COMPONENTS/DATA-INPUT/tree-select",title:"tree-select",description:"It is a selector which displays options in a tree.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/DATA-INPUT/tree-select.md",sourceDirName:"COMPONENTS/DATA-INPUT",slug:"/COMPONENTS/DATA-INPUT/tree-select",permalink:"/docs/COMPONENTS/DATA-INPUT/tree-select",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Switch",permalink:"/docs/COMPONENTS/DATA-INPUT/switch"},next:{title:"upload",permalink:"/docs/COMPONENTS/DATA-INPUT/upload"}},u={},m=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"TreeSelect Basic Properties",id:"treeselect-basic-properties",level:3},{value:"Steps Events",id:"steps-events",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3}],c={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"treeselect"},"TreeSelect"),(0,l.kt)("p",null,"It is a selector which displays options in a tree."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/treeselect\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { TreeSelect } from "@illa-dedign/treeselect"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"treeselect-basic-properties"},"TreeSelect Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"multiple"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to allow selecting multiple treeNodes"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Set defalut value in input"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," string[] ","|"," { label: ReactNode; value: string; disabled?: boolean } ","|"," { label: ReactNode; value: string; disabled?: boolean }[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"Set value"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," string[] ","|"," { label: ReactNode; value: string; disabled?: boolean } ","|"," { label: ReactNode; value: string; disabled?: boolean }[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeData"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate tree structure by structured data"),(0,l.kt)("td",{parentName:"tr",align:null},"TreeSelectDataType[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelInValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Set value's format"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeCheckable"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to add a Checkbox before the treeNodes"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeCheckStrictly"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether associate parent treeNode and children treeNode when they are checkable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Set tree's properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Partial<TreeProps>")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"triggerProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Set trigger's properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Partial<TriggerProps>")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notFoundContent"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the content when treeData is empty"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"Set placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showSearch"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether allow search"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean ","|"," { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"Set selector's size"),(0,l.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",' "large"'),(0,l.kt)("td",{parentName:"tr",align:null},'"medium"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the selector is disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the selector is error"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the selector is loading status"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowClear"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether allow clear values"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowCreate"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether allow create new values"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxTagCount"),(0,l.kt)("td",{parentName:"tr",align:null},"Set maxmium number of tags which is selected"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"steps-events"},"Steps Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filterTreeNode"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Filter data based on entered value"),(0,l.kt)("td",{parentName:"tr",align:null},"(inputText, treeNode: any) => boolean ","|"," void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when value is changed"),(0,l.kt)("td",{parentName:"tr",align:null},"(value: any) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadMore"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when dynamic load tree node"),(0,l.kt)("td",{parentName:"tr",align:null},"(treeNode: NodeProps, dataRef) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onSearch"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when search value is changed"),(0,l.kt)("td",{parentName:"tr",align:null},"(inputValue: string) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClear"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when clicked clear"),(0,l.kt)("td",{parentName:"tr",align:null},"(visible: boolean) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onVisibleChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when the visibility of the popup is changed"),(0,l.kt)("td",{parentName:"tr",align:null},"(visible: boolean) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClick"),(0,l.kt)("td",{parentName:"tr",align:"center"},"clicks on the drop-down box"),(0,l.kt)("td",{parentName:"tr",align:null},"(e) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const TreeData = [\n  {\n    title: 'Trunk 0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Leaf',\n        key: '0-0-1',\n      },\n      {\n        title: 'Branch 0-0-2',\n        key: '0-0-2',\n        disableCheckbox: true,\n        children: [\n          {\n            title: 'Leaf',\n            key: '0-0-2-1'\n          }\n        ]\n      },\n    ],\n  },\n  {\n    title: 'Trunk 0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Branch 0-1-1',\n        key: '0-1-1',\n        checkable: false,\n        children: [\n          {\n            title: 'Leaf',\n            key: '0-1-1-1',\n          },\n          {\n            title: 'Leaf',\n            key: '0-1-1-2',\n          },\n        ]\n      },\n      {\n        title: 'Leaf',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\n<TreeSelect\n  multiple\n  showSearch\n  allowClear\n  treeData={TreeData}\n/>\n")))}k.isMDXComponent=!0}}]);