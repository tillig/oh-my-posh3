(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(2),r=n(6),a=(n(0),n(93)),i={id:"configure",title:"Configuration",sidebar_label:"Configuration"},l={unversionedId:"configure",id:"configure",isDocsHomePage:!1,title:"Configuration",description:"Oh my Posh renders your prompt based on the definition of blocks (like Lego) which contain or more segments.",source:"@site/docs/configuration.md",slug:"/configure",permalink:"/docs/configure",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/configuration.md",version:"current",sidebar_label:"Configuration",sidebar:"docs",previous:{title:"Manual Installation",permalink:"/docs/installation"},next:{title:"PowerShell",permalink:"/docs/powershell"}},c=[{value:"General Settings",id:"general-settings",children:[]},{value:"Block",id:"block",children:[{value:"Type",id:"type",children:[]},{value:"Alignment",id:"alignment",children:[]},{value:"Vertical offset",id:"vertical-offset",children:[]},{value:"Horizontal offset",id:"horizontal-offset",children:[]},{value:"Segments",id:"segments",children:[]}]},{value:"Segment",id:"segment",children:[{value:"Type",id:"type-1",children:[]},{value:"Style",id:"style",children:[]},{value:"Powerline symbol",id:"powerline-symbol",children:[]},{value:"Invert Powerline",id:"invert-powerline",children:[]},{value:"Leading diamond",id:"leading-diamond",children:[]},{value:"Trailing diamond",id:"trailing-diamond",children:[]},{value:"Foreground",id:"foreground",children:[]},{value:"Background",id:"background",children:[]},{value:"Properties",id:"properties",children:[]}]},{value:"Full Sample",id:"full-sample",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Oh my Posh renders your prompt based on the definition of ",Object(a.b)("em",{parentName:"p"},"blocks")," (like Lego) which contain or more ",Object(a.b)("em",{parentName:"p"},"segments"),".\nA really simple configuration could look like this."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "final_space": true,\n  "blocks": [\n    {\n      "type": "prompt",\n      "alignment": "left",\n      "segments": [\n        {\n          "type": "path",\n          "style": "powerline",\n          "powerline_symbol": "\\uE0B0",\n          "foreground": "#ffffff",\n          "background": "#61AFEF",\n          "properties": {\n            "prefix": " \\uE5FF ",\n            "style": "folder"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(a.b)("p",null,"With this configuration, a single powerline segment is rendered that shows the name of the folder you're currently in.\nTo set this configuration in combination with a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest"}),"Oh my Posh executable"),", make use of the ",Object(a.b)("inlineCode",{parentName:"p"},"-config")," flag to\nset a path to a json file containing the above code."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"./oh-my-posh -config sample.json\n")),Object(a.b)("p",null,"If all goes according to plan, you should see the prompt being printed out on the line below. This could bring us to\nthe ",Object(a.b)("em",{parentName:"p"},"first attention point"),", you need to have a powerline enabled font installed on your machine and set as the font\nin your terminal to make use of, or see the symbols being used. All the themes were created with ",Object(a.b)("strong",{parentName:"p"},"Meslo Nerd Font"),",\nwhich you can find ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nerdfonts.com/"}),"here"),"."),Object(a.b)("h2",{id:"general-settings"},"General Settings"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"final_space: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - when true adds a space at the end of the prompt"),Object(a.b)("li",{parentName:"ul"},"console_title: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - when true sets the current location as the console title")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"I Like The Way You Speak Words" - Gary Goodspeed')),Object(a.b)("h2",{id:"block"},"Block"),Object(a.b)("p",null,"Let's take a closer look at what defines a block."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"type: ",Object(a.b)("inlineCode",{parentName:"li"},"prompt")," | ",Object(a.b)("inlineCode",{parentName:"li"},"newline")),Object(a.b)("li",{parentName:"ul"},"alignment: ",Object(a.b)("inlineCode",{parentName:"li"},"left")," | ",Object(a.b)("inlineCode",{parentName:"li"},"right")),Object(a.b)("li",{parentName:"ul"},"vertical_offset: ",Object(a.b)("inlineCode",{parentName:"li"},"int")),Object(a.b)("li",{parentName:"ul"},"horizontal_offset: ",Object(a.b)("inlineCode",{parentName:"li"},"int")),Object(a.b)("li",{parentName:"ul"},"segments: ",Object(a.b)("inlineCode",{parentName:"li"},"array")," of one or more ",Object(a.b)("inlineCode",{parentName:"li"},"segments"))),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("p",null,"Tells the engine what to do with the block. There are two options, either it renders one or more segments,\nor it inserts a newline to start the next block on a new line. New line blocks require no additional\nconfiguration other than the ",Object(a.b)("inlineCode",{parentName:"p"},"type"),"."),Object(a.b)("h3",{id:"alignment"},"Alignment"),Object(a.b)("p",null,"Tell the engine if the block should be left or right aligned."),Object(a.b)("h3",{id:"vertical-offset"},"Vertical offset"),Object(a.b)("p",null,"Move the block up or down x lines. For example ",Object(a.b)("inlineCode",{parentName:"p"},"vertical_offset: 1")," moves the prompt down one line, ",Object(a.b)("inlineCode",{parentName:"p"},"vertical_offset: -1"),"\nmoves it up one line."),Object(a.b)("h3",{id:"horizontal-offset"},"Horizontal offset"),Object(a.b)("p",null,"Moves the segment to the left or the right to have it exactly where you want it to be. Works like ",Object(a.b)("inlineCode",{parentName:"p"},"vertical_offset"),"\nbut on a horizontal level where a negative number moves the block left and a positive number right."),Object(a.b)("h3",{id:"segments"},"Segments"),Object(a.b)("p",null,"Array of one or more segments."),Object(a.b)("h2",{id:"segment"},"Segment"),Object(a.b)("p",null,"A segments is a part of the prompt with a certain context. There are different types available out of the box, if you're\nlooking for what's included, feel free to skip this part and browse through the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/battery"}),"segments"),". Keep reading to\nunderstand how to configure a segment."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"type: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," any of the included ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/battery"}),"segments")),Object(a.b)("li",{parentName:"ul"},"style: ",Object(a.b)("inlineCode",{parentName:"li"},"powerline")," | ",Object(a.b)("inlineCode",{parentName:"li"},"plain")," | ",Object(a.b)("inlineCode",{parentName:"li"},"diamond")),Object(a.b)("li",{parentName:"ul"},"powerline_symbol: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"invert_powerline: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")),Object(a.b)("li",{parentName:"ul"},"leading_diamond: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"trailing_diamond: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"foreground: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")),Object(a.b)("li",{parentName:"ul"},"background: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")),Object(a.b)("li",{parentName:"ul"},"properties: ",Object(a.b)("inlineCode",{parentName:"li"},"array")," of ",Object(a.b)("inlineCode",{parentName:"li"},"Property"),": ",Object(a.b)("inlineCode",{parentName:"li"},"string"))),Object(a.b)("h3",{id:"type-1"},"Type"),Object(a.b)("p",null,"Takes the ",Object(a.b)("inlineCode",{parentName:"p"},"string")," value referencing which segment logic it needs to run (see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/battery"}),"segments")," for possible values)."),Object(a.b)("h3",{id:"style"},"Style"),Object(a.b)("p",null,"Oh Hi! You made it to a really interesting part, great! Style defines how a prompt is rendered. Looking at most prompt\nthemes out there, we identified 3 types. All of these require a different configuration and depending on the look\nyou want to achieve you might need to understand/use them all."),Object(a.b)("h4",{id:"powerline"},"Powerline"),Object(a.b)("p",null,"What started it all for us. Makes use of a single symbol (",Object(a.b)("inlineCode",{parentName:"p"},"powerline_symbol"),") to separate the segments. It takes the\nbackground color of the previous segment (or transparent if none) and the foreground of the current one (or transparent\nif we're at the last segment). Expects segments to have a colored background, else there little use for this one."),Object(a.b)("h4",{id:"plain"},"Plain"),Object(a.b)("p",null,"Simple. Colored text on a transparent background. Make sure to set ",Object(a.b)("inlineCode",{parentName:"p"},"foreground")," for maximum enjoyment."),Object(a.b)("h4",{id:"diamond"},"Diamond"),Object(a.b)("p",null,"While Powerline works great with as single symbol, sometimes you want a segment to have a different start and end symbol.\nJust like a diamond: ",Object(a.b)("inlineCode",{parentName:"p"},"< my segment text >"),". The difference between this and plain is that the diamond symbols take the\nsegment background as their foreground color."),Object(a.b)("h3",{id:"powerline-symbol"},"Powerline symbol"),Object(a.b)("p",null,"Text character to use when ",Object(a.b)("inlineCode",{parentName:"p"},'"style": "powerline"'),"."),Object(a.b)("h3",{id:"invert-powerline"},"Invert Powerline"),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"true")," this swaps the foreground and background colors. Can be useful when the character you want does not exist\nin the perfectly mirrored variant for example."),Object(a.b)("h3",{id:"leading-diamond"},"Leading diamond"),Object(a.b)("p",null,"Text character to use at the start of the segment. Will take the background color of the segment as\nits foreground color."),Object(a.b)("h3",{id:"trailing-diamond"},"Trailing diamond"),Object(a.b)("p",null,"Text character to use at the end of the segment. Will take the background color of the segment as its foreground color."),Object(a.b)("h3",{id:"foreground"},"Foreground"),Object(a.b)("p",null,"Hex ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"color")," to use as the segment text foreground color. Also supports transparency using the ",Object(a.b)("inlineCode",{parentName:"p"},"transparent")," keyword."),Object(a.b)("h3",{id:"background"},"Background"),Object(a.b)("p",null,"Hex ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"color")," to use as the segment text background color. Also supports transparency using the ",Object(a.b)("inlineCode",{parentName:"p"},"transparent")," keyword."),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("p",null,"An array of ",Object(a.b)("strong",{parentName:"p"},"Properties")," with a value. This is used inside of the segment logic to tweak what the output of the segment\nwill be. Segments have the ability to define their own Properties, but there are some general ones being used by the\nengine which allow you to customize the output even more."),Object(a.b)("h4",{id:"general-purpose-properties"},"General purpose properties"),Object(a.b)("p",null,"You can use these on any segment, the engine is responsible for adding them correctly."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"prefix: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"postfix: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"ignore_folders: ",Object(a.b)("inlineCode",{parentName:"li"},"[]string"))),Object(a.b)("h5",{id:"prefix"},"Prefix"),Object(a.b)("p",null,"The string content will be put in front of the segment's output text. Useful for symbols, text or other customizations."),Object(a.b)("h5",{id:"postfix"},"Postfix"),Object(a.b)("p",null,"The string content will be put after the segment's output text. Useful for symbols, text or other customizations."),Object(a.b)("h5",{id:"ignore-folders"},"Ignore Folders"),Object(a.b)("p",null,"Sometimes you want might want to not have a segment rendered at a certain location. If so, adding the path to the\nsegment's configuration will not render it when in that location. The engine will simply skip it."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"ignore_folders": [\n  "/super/secret/project"\n]\n')),Object(a.b)("h4",{id:"colors"},"Colors"),Object(a.b)("p",null,"You have the ability to override the foreground color for text in any property that accepts it. The syntax is custom but\nshould be rather straighforward: ",Object(a.b)("inlineCode",{parentName:"p"},"<#ffffff>this is white</> <#FF479C>but this is pink</>"),". Anything between the color start\n",Object(a.b)("inlineCode",{parentName:"p"},"<#FF479C>")," and end ",Object(a.b)("inlineCode",{parentName:"p"},"</>")," will be colored accordingly."),Object(a.b)("p",null,"For example, if you want ",Object(a.b)("inlineCode",{parentName:"p"},"prefix")," to print a colored bracket which isn't the same as the segment's ",Object(a.b)("inlineCode",{parentName:"p"},"foreground"),", you can\ndo so like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"prefix": "<#CB4B16>\u250f[</>",\n')),Object(a.b)("p",null,"Oh my Posh offers support for hex ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"colors")," as well as the ",Object(a.b)("inlineCode",{parentName:"p"},"transparent")," keyword to create either a transparent foreground\noverride or transparent background color using the segement's ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/configure#foreground"}),"foreground")," property."),Object(a.b)("h2",{id:"full-sample"},"Full Sample"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "final_space": true,\n  "blocks": [\n    {\n      "type": "prompt",\n      "alignment": "right",\n      "vertical_offset": -1,\n      "segments": [\n        {\n          "type": "time",\n          "style": "plain",\n          "foreground": "#007ACC",\n          "properties": {\n            "time_format": "15:04:05"\n          }\n        }\n      ]\n    },\n    {\n      "type": "newline"\n    },\n    {\n      "type": "prompt",\n      "alignment": "left",\n      "segments": [\n        {\n          "type": "session",\n          "style": "diamond",\n          "foreground": "#ffffff",\n          "background": "#ffb300",\n          "leading_diamond": "\\uE0B6",\n          "trailing_diamond": "\\uE0B0",\n          "properties": {\n            "postfix": " "\n          }\n        },\n        {\n          "type": "path",\n          "style": "powerline",\n          "powerline_symbol": "\\uE0B0",\n          "foreground": "#ffffff",\n          "background": "#61AFEF",\n          "properties": {\n            "prefix": " \\uE5FF ",\n            "style": "folder",\n            "ignore_folders": [\n              "/super/secret/project"\n            ]\n          }\n        },\n        {\n          "type": "git",\n          "style": "powerline",\n          "powerline_symbol": "\\uE0B0",\n          "foreground": "#193549",\n          "background": "#ffeb3b"\n        },\n        {\n          "type": "exit",\n          "style": "diamond",\n          "foreground": "#ffffff",\n          "background": "#00897b",\n          "leading_diamond": "",\n          "trailing_diamond": "\\uE0B4",\n          "properties": {\n            "display_exit_code": false,\n            "always_enabled": true,\n            "error_color": "#e91e63",\n            "color_background": true,\n            "prefix": "<#193549>\\uE0B0 \\uE23A</>"\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}b.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);