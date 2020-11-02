(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(93)),i={id:"exit",title:"Exit code",sidebar_label:"Exit code"},c={unversionedId:"exit",id:"exit",isDocsHomePage:!1,title:"Exit code",description:"What",source:"@site/docs/segment-exit.md",slug:"/exit",permalink:"/docs/exit",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/segment-exit.md",version:"current",sidebar_label:"Exit code",sidebar:"docs",previous:{title:"Environment Variable",permalink:"/docs/environment"},next:{title:"Git",permalink:"/docs/git"}},l=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],u={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what"},"What"),Object(a.b)("p",null,"Displays the last exit code or that the last command failed based on the configuration."),Object(a.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "exit",\n  "style": "diamond",\n  "foreground": "#ffffff",\n  "background": "#00897b",\n  "leading_diamond": "",\n  "trailing_diamond": "\\uE0B4",\n  "properties": {\n    "display_exit_code": false,\n    "always_enabled": true,\n    "error_color": "#e91e63",\n    "color_background": true,\n    "prefix": "<#193549>\\uE0B0</> \\uE23A"\n  }\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"display_exit_code: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - show or hide the exit code - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"always_enabled: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - always show the status - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"color_background: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - color the background or foreground when an error occurs - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"error_color: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - color to use when an error occured")))}d.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||s[b]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);