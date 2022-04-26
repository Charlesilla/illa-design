"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2830],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return N}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=m(n),N=a,k=c["".concat(d,".").concat(N)]||c[N]||o[N]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return o}});var r=n(3117),a=n(102),l=(n(7378),n(3905)),i=["components"],u={},d="\u9762\u5305\u5c51",m={unversionedId:"COMPONENTS/NAVIGATION/breadcrumb",id:"COMPONENTS/NAVIGATION/breadcrumb",title:"\u9762\u5305\u5c51",description:"\u9762\u5305\u5c51\u4e3b\u8981\u88ab\u7528\u4e8e\u5c55\u793a\u5f53\u524d\u9875\u9762\u5728\u7cfb\u7edf\u4e2d\u7684\u4f4d\u7f6e\uff0c\u5e76\u4e14\u63d0\u4f9b\u5feb\u901f\u5bfc\u822a\u7684\u529f\u80fd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/COMPONENTS/NAVIGATION/breadcrumb.md",sourceDirName:"COMPONENTS/NAVIGATION",slug:"/COMPONENTS/NAVIGATION/breadcrumb",permalink:"/zh-cn/docs/COMPONENTS/NAVIGATION/breadcrumb",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u95f4\u8ddd Space",permalink:"/zh-cn/docs/COMPONENTS/LAYOUT/space"},next:{title:"\u4e0b\u62c9\u83dc\u5355 Dropdown",permalink:"/zh-cn/docs/COMPONENTS/NAVIGATION/dropdown"}},p={},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u7528\u7ec4\u4ef6",id:"\u5f15\u7528\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u63a5\u53e3(API)",id:"\u7ec4\u4ef6\u63a5\u53e3api",level:2},{value:"Breadcrumb \u57fa\u7840\u5c5e\u6027",id:"breadcrumb-\u57fa\u7840\u5c5e\u6027",level:3},{value:"BreadcrumbItem \u57fa\u7840\u5c5e\u6027",id:"breadcrumbitem-\u57fa\u7840\u5c5e\u6027",level:3},{value:"RouteProps \u57fa\u7840\u5c5e\u6027",id:"routeprops-\u57fa\u7840\u5c5e\u6027",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\u548c\u5927\u5c0f",id:"\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\u548c\u5927\u5c0f",level:3},{value:"\u8bbe\u7f6e\u6700\u5927\u6e32\u67d3\u7684\u9762\u5305\u5c51\u6570\u91cf",id:"\u8bbe\u7f6e\u6700\u5927\u6e32\u67d3\u7684\u9762\u5305\u5c51\u6570\u91cf",level:3}],c={toc:o};function N(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9762\u5305\u5c51"},"\u9762\u5305\u5c51"),(0,l.kt)("p",null,"\u9762\u5305\u5c51\u4e3b\u8981\u88ab\u7528\u4e8e\u5c55\u793a\u5f53\u524d\u9875\u9762\u5728\u7cfb\u7edf\u4e2d\u7684\u4f4d\u7f6e\uff0c\u5e76\u4e14\u63d0\u4f9b\u5feb\u901f\u5bfc\u822a\u7684\u529f\u80fd"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/breadcrumb\n")),(0,l.kt)("h2",{id:"\u5f15\u7528\u7ec4\u4ef6"},"\u5f15\u7528\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Breadcrumb, BreadcrumbItem } from "@illa-design/breadcrumb"\n')),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u63a5\u53e3api"},"\u7ec4\u4ef6\u63a5\u53e3(API)"),(0,l.kt)("h3",{id:"breadcrumb-\u57fa\u7840\u5c5e\u6027"},"Breadcrumb \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"separator"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u5206\u5272\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"routes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u8bbe\u7f6e\u4e0b\u62c9\u83dc\u5355\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RouteProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6700\u591a\u6e32\u67d3\u7684\u9762\u5305\u5c51\u6570\u91cf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"breadcrumbitem-\u57fa\u7840\u5c5e\u6027"},"BreadcrumbItem \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"droplist"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e0b\u62c9\u83dc\u5355\u7684\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Menu \\| ()=>Menu")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropdownProps"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e0b\u62c9\u83dc\u5355\u7684\u5c5e\u6027"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DropdownProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"routeprops-\u57fa\u7840\u5c5e\u6027"},"RouteProps \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u5f53\u524d\u9875\u9762\u4e0b\u7684\u8def\u7531\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"breadcrumbName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u8282\u70b9\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u8282\u70b9\u4e0b\u62c9\u83dc\u5355\u4e2d\u5b50\u9879"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<{path: string;breadcrumbName: string;}>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const routes = [\n  {\n    path: "/",\n    breadcrumbName: "Home",\n  },\n  {\n    path: "/Channel",\n    breadcrumbName: "Channel",\n    children: [\n      {\n        path: "/users",\n        breadcrumbName: "Users",\n      },\n      {\n        path: "/permission",\n        breadcrumbName: "Permission",\n      },\n    ],\n  },\n  {\n    path: "/news",\n    breadcrumbName: "News",\n  },\n]\n<Breadcrumb routes={routes} />\n')),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\u548c\u5927\u5c0f"},"\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\u548c\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Breadcrumb routes={routes} separator={<RightIcon />} style={{ fontSize: 12 }}/>\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u6700\u5927\u6e32\u67d3\u7684\u9762\u5305\u5c51\u6570\u91cf"},"\u8bbe\u7f6e\u6700\u5927\u6e32\u67d3\u7684\u9762\u5305\u5c51\u6570\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Breadcrumb maxCount={2}>\n  <BreadcrumbItem>Home</BreadcrumbItem>\n  <BreadcrumbItem>Sub Home</BreadcrumbItem>\n  <BreadcrumbItem>All Channel</BreadcrumbItem>\n  <BreadcrumbItem>Channel</BreadcrumbItem>\n  <BreadcrumbItem>News</BreadcrumbItem>\n</Breadcrumb>\n")),(0,l.kt)("h3",{id:""}))}N.isMDXComponent=!0}}]);