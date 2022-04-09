!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function e(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];a=a||setTimeout(function(){o.apply(void 0,t),a=null},r)}}function n(e,t){Array.isArray(e)&&0!==e.length&&e.forEach(function(e){return n(e.children,a(e.self,t))})}var r=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t(document.createElement(e.tag||"div"),e)},a=function(e){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body).appendChild(r(e))},o=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3e3,n=document.querySelector("#global-toasts"),o=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body;return t.insertBefore(r(e),t.firstChild)}({innerHTML:e,className:"toast"},n=n||a({id:"global-toasts"}));setTimeout(function(){return n.removeChild(o)},t)};new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}});i=window.navigator.userAgent,h=window.navigator.platform,-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(h)?w="MacOS":-1!==["iPhone","iPad","iPod"].indexOf(h)?w="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(h)?w="Windows":/Android/.test(i)?w="Android":!w&&/Linux/.test(h)&&(w="Linux");var i=w&&w.toLowerCase(),c=/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&window.safari.pushNotification).toString();function s(e,t){return t=c?new RegExp("(\n|\\s+|^)(".concat(t.join("|"),")\\b"),"g"):new RegExp("(?<!<[^\\/]*)(".concat(t.join("|"),")\\b"),"g"),c?e.replace(t,function(e,t,n){return"".concat(t,'<span class="org-constant">').concat(n,"</span>")}):e.replace(t,function(e,t){return'<span class="org-constant">'.concat(t,"</span>")})}function l(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function d(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach(function(e){var t,n;t=o,n=r[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}var u,f,g,m,p,h=a({id:"global-btns",className:"global-btns"}),v=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.body,t=a({style:"visibility:hidden;overflow:scroll;-ms-overflow-style:scrollbar;"},e),n=a({},t),n=t.offsetWidth-n.offsetWidth;return e.removeChild(t),n}();document.querySelectorAll(".outline-2 a").forEach(function(e){var t;1===e.childNodes.length&&3===e.childNodes[0].nodeType&&(t=function(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:60,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",o=0,r="",a=0,i=e.length;a<i;a++){if(t<(o+=e.charCodeAt(a)<256?1:2))return"".concat(r).concat(n);r+=e[a]}return r}(e.innerHTML,60,"..."),e.innerHTML!==t&&(e.innerHTML=t))});for(var y=(w=document.querySelector('meta[name="keywords"]'))?w.getAttribute("content").split(","):[],W=y.length,w=(w={className:"tags"},(C=document.querySelector("h1.title")).parentNode.insertBefore(r(w),C.nextSibling)),b='<a class="tag" href="/">所有文档</a>',L=0;L<W;L++)b+='<a class="tag" href="/?tag='.concat(y[L],'">').concat(y[L],"</a>");w.innerHTML=b,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;if(t){var n,o=e.tag||"div",r=(delete e.tag,"");for(n in e)r+="".concat("className"===n?"class":n,'="').concat(e[n],'"');t.innerHTML="<".concat(o," ").concat(r,">").concat(t.innerHTML,"</").concat(o,">"),t.firstChild}}({id:"fixed-table-of-contents"},document.querySelector("#table-of-contents"));var T=document.querySelector("#text-table-of-contents");if(T){for(var O,H,M=T.querySelectorAll("a"),S=M.length,N=[],x=[],R=/^(\d+\.\d+)[.](\s+)/,E=-1,$=a({className:"arrow-of-contents"},T),j=0;j<S;j++)O=M[j],H=document.querySelector(O.getAttribute("href")),N.push(O.offsetTop),x.push(H.offsetTop),O.innerHTML=O.innerHTML.replace(R,"$1$2");var C=e(function(){var e,t,n,o=function(e){for(var t=0;t<S;t++)if(e<x[t]-30-5)return 0===t?0:t-1;return S-1}(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop);o!==E&&(0<=E&&(M[E].parentNode.classList.remove("active"),document.querySelector(M[E].getAttribute("href")).classList.remove("title-active")),M[o].parentNode.classList.add("active"),document.querySelector(M[o].getAttribute("href")).classList.add("title-active"),e=N[e=o],t=N[0],n=T.offsetHeight/2,T.scrollTop=e-n+22,$.style.top="".concat(e-t,"px"),E=o)},100);window.addEventListener("scroll",C,!1),T.addEventListener("click",function(e){e.preventDefault();for(var t,n=e.target;"a"!==n.tagName.toLowerCase()&&n!==T;)n=n.parentNode;n&&"a"===n.tagName.toLowerCase()&&(e=n.getAttribute("href"),(t=document.querySelector(e))&&(t.addEventListener("animationend",function e(){t.classList.remove("twinkling"),t.removeEventListener("animationend",e,!1)},!1),t.classList.add("twinkling"),window.scrollTo({top:t.offsetTop-30,behavior:"instant"})))},!1),C()}for(var q=document.querySelectorAll(".org-src-container"),D=q.length,A=0;A<D;A++)!function(e){var e=q[e],t=e.querySelector("pre"),n=t.className,o=n.indexOf("-"),n=n.substr(o+1).toLowerCase(),o=(-1<["shell","sh","bash","fish","zsh"].indexOf(n)&&(t.innerHTML=s(t.innerHTML.replace(/(\n\s*|^)([$%])/g,function(e,t,n){return"".concat(t,'<span class="org-builtin">').concat(n,"</span>")}),["echo","cd","pwd","mkdir","touch","cat","chmod","chown","ls","vim","emacs","node","npm","npx","svn","git"])),-1<["js","javascript"].indexOf(n)&&(t.innerHTML=s(t.innerHTML,["console","Function","window","Symbol","BigInt","string"])),a({tag:"span",className:"org-src-type",innerHTML:n},e),a({tag:"span",className:"org-src-copy",innerHTML:"点击复制"},e),a({className:"org-src-linenrs"},e)),r=t.innerHTML.split("\n"),n=r.length-1;o.innerHTML=Array.from(Array(n),function(e,t){return'<span class="'.concat(-1<r[t].indexOf("---")?"del":-1<r[t].indexOf("+++")?"add":"",'">').concat(((t+1)%100+"").padStart(2,"0"),"</span>")}).join(""),t.innerHTML=t.innerHTML.replace(/(\n|^)(.*)\s(<span.*>)?(---)(<\/span>)?/g,'$1<span class="org-src-del">$2</span>'),t.innerHTML=t.innerHTML.replace(/(\n|^)(.*)\s(<span.*>)?(\+\+\+)(<\/span>)?/g,'$1<span class="org-src-add">$2</span>')}(A);for(var P=document.querySelectorAll("pre.example"),z=P.length,k=0;k<z;k++){var B=function(e,t){if(t)return e=r(e),e.appendChild(t.parentNode.replaceChild(e,t)),e}({style:"position:relative;"},P[k]);a({tag:"span",className:"org-src-copy",innerHTML:"点击复制"},B)}document.addEventListener("click",function(e){return e.target.classList.contains("org-src-copy")&&function(e){if(!document.execCommand)return o("当前浏览器不支持复制操作");var t=document.createElement("textarea");t.readOnly="readonly",t.style.position="absolute",t.style.left="-9999px",t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),o("代码复制成功"),document.body.removeChild(t)}(e.target.parentNode.querySelector("pre").innerText)}),(C=document.querySelector("#content"))&&(C=a({className:"footer"},C),g={src:"".concat(u="https://cdn.jsdelivr.net/gh/yfooo/orghtml@v2.1","/images/empty.png"),width:128,height:128,tag:"img",loading:"lazy"},i="macos"===i||"ios"===i?"https://emacsformacosx.com/":"https://www.gnu.org/software/emacs/",i=[{children:[{self:d(d({},g),{},{src:"".concat(u,"/images/jsab-boss.png"),width:512,height:320})}]},{children:[{self:{tag:"a",href:i,target:"_blank"},children:[{self:d(d({},g),{},{src:"".concat(u,"/images/emacs.png")})}]},{self:g},{self:g},{self:{tag:"a",href:"https://www.vim.org/",target:"_blank"},children:[{self:d(d({},g),{},{src:"".concat(u,"/images/vim.png")})}]}]},{children:[{self:{tag:"b",innerHTML:"记得一定要幸福！"}}]},{children:[{self:{tag:"code",innerHTML:"Happy Hacking & Have a nice day!"}}]}],n(i,C)),a({tag:"button",className:"iconfont icon-folder home-btn",title:"所有文档"},h).addEventListener("click",function(){window.location.href="/"}),f=a({tag:"button",className:"iconfont icon-top to-top-btn",title:"回到顶部"},h),g=e(function(){var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;f.style.display=150<=e?"block":"none"},100),f.addEventListener("click",function(){return window.scrollTo({top:0,behavior:"instant"})}),window.addEventListener("scroll",g,!1),p="#".concat(m="global-viewer"),document.addEventListener("click",function(e){var t,n,o,r,e=e.target;"img"===e.tagName.toLowerCase()&&e.classList.contains("zoom-in")&&((t=document.querySelector(p))||(t=a({id:m})).addEventListener("click",function(e){e=e.target;if("img"===e.tagName.toLowerCase()&&e.classList.contains("big-img"))return e.classList.toggle("limit"),e.wide&&t.classList.toggle("wide"),e.long&&t.classList.toggle("long"),void t.classList.toggle("auto");t.classList.remove("show","auto","wide","long","loaded"),setTimeout(function(){document.body.style.marginRight="0px",document.body.classList.remove("no-scroll")},300)}),n=e.naturalWidth>document.documentElement.clientWidth,o=e.naturalHeight>document.documentElement.clientHeight,r=n||o?"big-img limit":"",t.innerHTML='<span class="iconfont icon-loading rotating"></span>',(e=a({tag:"img",src:e.src,className:r},t)).onload=function(){t.querySelector("span.icon-loading").style.display="none",t.classList.add("loaded")},e.wide=n,e.long=o,t.classList.add("show"),document.body.classList.add("no-scroll"),document.body.style.marginRight="".concat(v,"px"))})});