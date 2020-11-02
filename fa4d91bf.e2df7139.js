(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";var a=n(0),o=n(99);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return f})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return j})),n.d(t,"default",(function(){return w}));var a=n(2),o=n(6),r=n(0),i=n.n(r),l=n(93),c=n(100),s=n(95),b=n(89),p=n.n(b),u=37,d=39;var m=function(e){var t=e.block,n=e.children,a=e.defaultValue,o=e.values,l=e.groupId,b=Object(c.a)(),m=b.tabGroupChoices,h=b.setTabGroupChoices,f=Object(r.useState)(a),O=f[0],j=f[1],y=Object(r.useState)(!1),w=y[0],v=y[1];if(null!=l){var g=m[l];null!=g&&g!==O&&o.some((function(e){return e.value===g}))&&j(g)}var N=function(e){j(e),null!=l&&h(l,e)},x=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},E=function(){v(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",E)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},o.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",p.a.tabItem,{"tabs__item--active":O===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),T(e)},onFocus:function(){return N(t)},onClick:function(){N(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))};var h=function(e){return i.a.createElement("div",null,e.children)},f={id:"installation",title:"Manual Installation",sidebar_label:"Manual Installation"},O={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Manual Installation",description:"1. Setup your terminal",source:"@site/docs/installation.mdx",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/installation.mdx",version:"current",sidebar_label:"Manual Installation",sidebar:"docs",previous:{title:"Upgrading",permalink:"/docs/upgrading"},next:{title:"Configuration",permalink:"/docs/configure"}},j=[{value:"1. Setup your terminal",id:"1-setup-your-terminal",children:[]},{value:"2. Download the latest binary",id:"2-download-the-latest-binary",children:[]},{value:"3. Download a theme",id:"3-download-a-theme",children:[]},{value:"4. Replace your existing prompt",id:"4-replace-your-existing-prompt",children:[]},{value:"5. Profit",id:"5-profit",children:[]}],y={rightToc:j};function w(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"1-setup-your-terminal"},"1. Setup your terminal"),Object(l.b)("p",null,"Oh my Posh uses ANSI color codes under the hood, these should work everywhere,\nbut you may have to set ",Object(l.b)("inlineCode",{parentName:"p"},"$TERM")," to ",Object(l.b)("inlineCode",{parentName:"p"},"xterm-256color")," for it to work."),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Font icons")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"For maximum enjoyment, make sure to ",Object(l.b)("strong",{parentName:"p"},"install")," and ",Object(l.b)("strong",{parentName:"p"},"configure")," your terminal to use a powerline enabled font.\nThe fonts we use are patched by ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nerdfonts.com/"}),"Nerd Fonts"),", which offer a maximum of icons you can use to configure your prompt.\nTo easily find the icon you want, have a look at their ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nerdfonts.com/cheat-sheet"}),"cheat sheet"),"."))),Object(l.b)("p",null,"Oh my Posh was designed using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Meslo.zip"}),"Meslo LGM NF"),", so if you happen to see missing icons either change to that font or replace the icons\nby changing the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/tree/main/themes"}),"theme")," to your liking."),Object(l.b)("h3",{id:"2-download-the-latest-binary"},"2. Download the latest binary"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If you're looking to use the prompt for PowerShell 6 and above, there's a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/powershell"}),"PowerShell package")," for your enjoyment that facilitates the whole process.\nBut, if you insist on doing it manually, or you use a pre-core version of PowerShell, here you go :-)"))),Object(l.b)(m,{defaultValue:"windows",values:[{label:"windows",value:"windows"},{label:"macos",value:"macos"},{label:"unix",value:"unix"}],mdxType:"Tabs"},Object(l.b)(h,{value:"windows",mdxType:"TabItem"},Object(l.b)("h4",{id:"scoop"},"Scoop"),Object(l.b)("p",null,"A ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/scoop"}),"Scoop")," package is available to assist installs on Windows."),Object(l.b)("h4",{id:"manual"},"Manual"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"mkdir C:\\tools\nInvoke-Webrequest https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/posh-windows-amd64.exe -OutFile C:\\tools\\oh-my-posh.exe\n"))),Object(l.b)(h,{value:"macos",mdxType:"TabItem"},Object(l.b)("h4",{id:"manual-1"},"Manual"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/posh-darwin-amd64 -O /usr/local/bin/oh-my-posh\nchmod +x /usr/local/bin/oh-my-posh\n"))),Object(l.b)(h,{value:"unix",mdxType:"TabItem"},Object(l.b)("h4",{id:"manual-2"},"Manual"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/posh-linux-amd64 -O /usr/local/bin/oh-my-posh\nchmod +x /usr/local/bin/oh-my-posh\n")))),Object(l.b)("h3",{id:"3-download-a-theme"},"3. Download a theme"),Object(l.b)("p",null,"Find a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/tree/main/themes"}),"theme")," you like, download it and store it somewhere you can find it again."),Object(l.b)("h3",{id:"4-replace-your-existing-prompt"},"4. Replace your existing prompt"),Object(l.b)(m,{defaultValue:"powershell",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"nix",value:"nix"},{label:"fish",value:"fish"}],mdxType:"Tabs"},Object(l.b)(h,{value:"powershell",mdxType:"TabItem"},Object(l.b)("p",null,"Edit ",Object(l.b)("inlineCode",{parentName:"p"},"$PROFILE")," in your preferred PowerShell version and add the following lines."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),'[ScriptBlock]$Prompt = {\n    $realLASTEXITCODE = $global:LASTEXITCODE\n    if ($realLASTEXITCODE -isnot [int]) {\n      $realLASTEXITCODE = 0\n    }\n    $startInfo = New-Object System.Diagnostics.ProcessStartInfo\n    $startInfo.FileName = "C:\\tools\\oh-my-posh.exe"\n    $cleanPWD = $PWD.ProviderPath.TrimEnd("\\")\n    $startInfo.Arguments = "-config=""C:\\Users\\User\\Downloads\\downloadedtheme.json"" -error=$realLASTEXITCODE -pwd=""$cleanPWD"""\n    $startInfo.Environment["TERM"] = "xterm-256color"\n    $startInfo.CreateNoWindow = $true\n    $startInfo.StandardOutputEncoding = [System.Text.Encoding]::UTF8\n    $startInfo.RedirectStandardOutput = $true\n    $startInfo.UseShellExecute = $false\n    if ($PWD.Provider.Name -eq \'FileSystem\') {\n      $startInfo.WorkingDirectory = $PWD.ProviderPath\n    }\n    $process = New-Object System.Diagnostics.Process\n    $process.StartInfo = $startInfo\n    $process.Start() | Out-Null\n    $standardOut = $process.StandardOutput.ReadToEnd()\n    $process.WaitForExit()\n    $standardOut\n    $global:LASTEXITCODE = $realLASTEXITCODE\n    Remove-Variable realLASTEXITCODE -Confirm:$false\n}\nSet-Item -Path Function:prompt -Value $Prompt -Force\n'))),Object(l.b)(h,{value:"zsh",mdxType:"TabItem"},Object(l.b)("p",null,"Add the following to ",Object(l.b)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'function powerline_precmd() {\n    PS1="$(oh-my-posh -config ~/downloadedtheme.json --error $?)"\n}\n\nfunction install_powerline_precmd() {\n  for s in "${precmd_functions[@]}"; do\n    if [ "$s" = "powerline_precmd" ]; then\n      return\n    fi\n  done\n  precmd_functions+=(powerline_precmd)\n}\n\nif [ "$TERM" != "linux" ]; then\n    install_powerline_precmd\nfi\n'))),Object(l.b)(h,{value:"bash",mdxType:"TabItem"},Object(l.b)("p",null,"Add the following to ",Object(l.b)("inlineCode",{parentName:"p"},"~/.bashrc")," (or ",Object(l.b)("inlineCode",{parentName:"p"},"~/.profile")," on MacOS):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'function _update_ps1() {\n    PS1="$(oh-my-posh -config ~/downloadedtheme.json -error $?)"\n}\n\nif [ "$TERM" != "linux" ] && [ -x "$(command -v oh-my-posh)" ]; then\n    PROMPT_COMMAND="_update_ps1; $PROMPT_COMMAND"\nfi\n'))),Object(l.b)(h,{value:"nix",mdxType:"TabItem"},Object(l.b)("p",null,"When using ",Object(l.b)("inlineCode",{parentName:"p"},"nix-shell --pure"),", ",Object(l.b)("inlineCode",{parentName:"p"},"oh-my-posh")," will not be accessible, and\nyour prompt will not appear."),Object(l.b)("p",null,"As a workaround you can add this snippet to ",Object(l.b)("inlineCode",{parentName:"p"},"~/.bashrc"),",\nwhich should re-enable the prompt in most cases:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# Workaround for nix-shell --pure\nif [ "$IN_NIX_SHELL" == "pure" ]; then\n    if [ -x oh-my-posh ]; then\n        alias powerline-go="oh-my-posh -config ~/downloadedtheme.json"\n    fi\nfi\n'))),Object(l.b)(h,{value:"fish",mdxType:"TabItem"},Object(l.b)("p",null,"Redefine ",Object(l.b)("inlineCode",{parentName:"p"},"fish_prompt")," in ",Object(l.b)("inlineCode",{parentName:"p"},"~/.config/fish/config.fish"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"function fish_prompt\n    eval oh-my-posh -config ~/downloadedtheme.json -error $status\nend\n")))),Object(l.b)("p",null,"Make sure ",Object(l.b)("inlineCode",{parentName:"p"},"~/downloadedtheme.json")," points to your downloaded or adjusted theme. If the theme would be invalid, the default Agnoster prompt is printed."),Object(l.b)("h3",{id:"5-profit"},"5. Profit"),Object(l.b)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89"))}w.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},99:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o}}]);