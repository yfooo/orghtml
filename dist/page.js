!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function e(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];a=a||setTimeout(function(){o.apply(void 0,t),a=null},r)}}function n(e,t){Array.isArray(e)&&0!==e.length&&e.forEach(function(e){return n(e.children,a(e.self,t))})}var r=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t(document.createElement(e.tag||"div"),e)},a=function(e){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body).appendChild(r(e))},o=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3e3,n=document.querySelector("#global-toasts"),o=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body;return t.insertBefore(r(e),t.firstChild)}({innerHTML:e,className:"toast"},n=n||a({id:"global-toasts"}));setTimeout(function(){return n.removeChild(o)},t)};new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}});c=window.navigator.userAgent,v=window.navigator.platform,-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(v)?p="MacOS":-1!==["iPhone","iPad","iPod"].indexOf(v)?p="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(v)?p="Windows":/Android/.test(c)?p="Android":!p&&/Linux/.test(v)&&(p="Linux");var c=p&&p.toLowerCase();function i(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function s(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){var t,n;t=o,n=r[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}var l,d,u,g,f;document.querySelectorAll(".outline-2 a").forEach(function(e){var t;1===e.childNodes.length&3===e.childNodes[0].nodeType&&(t=function(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:60,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",o=0,r="",a=0,c=e.length;a<c;a++){if(t<(o+=e.charCodeAt(a)<256?1:2))return"".concat(r).concat(n);r+=e[a]}return r}(e.innerHTML,60,"..."),e.innerHTML!==t&&(e.innerHTML=t))});for(var p,m=(v=document.querySelector('meta[name="keywords"]'))?v.getAttribute("content").split(","):[],h=m.length,v=(v={className:"tags"},(p=document.querySelector("h1.title")).parentNode.insertBefore(r(v),p.nextSibling)),y='<a class="tag" href="/">所有文档</a>',b=0;b<h;b++)y+='<a class="tag" href="/?tag='.concat(m[b],'">').concat(m[b],"</a>");v.innerHTML=y,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;if(t){var n,o=e.tag||"div",r=(delete e.tag,"");for(n in e)r+="".concat("className"===n?"class":n,'="').concat(e[n],'"');t.innerHTML="<".concat(o," ").concat(r,">").concat(t.innerHTML,"</").concat(o,">"),t.firstChild}}({id:"fixed-table-of-contents"},document.querySelector("#table-of-contents"));var w=document.querySelector("#text-table-of-contents");if(w){for(var L,T,O=w.querySelectorAll("a"),H=O.length,M=[],S=[],x=/^(\d+\.\d+)[.](\s+)/,N=-1,E=a({className:"arrow-of-contents"},w),j=0;j<H;j++)L=O[j],T=document.querySelector(L.getAttribute("href")),M.push(L.offsetTop),S.push(T.offsetTop),L.innerHTML=L.innerHTML.replace(x,"$1$2");var v=e(function(){var e,t,n,o=function(e){for(var t=0;t<H;t++)if(e<S[t]-30-5)return 0===t?0:t-1;return H-1}(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop);o!==N&&(0<=N&&(O[N].parentNode.classList.remove("active"),document.querySelector(O[N].getAttribute("href")).classList.remove("title-active")),O[o].parentNode.classList.add("active"),document.querySelector(O[o].getAttribute("href")).classList.add("title-active"),e=M[e=o],t=M[0],n=w.offsetHeight/2,w.scrollTop=e-n+22,E.style.top="".concat(e-t,"px"),N=o)},100);window.addEventListener("scroll",v,!1),w.addEventListener("click",function(e){e.preventDefault();for(var t,n=e.target;"a"!==n.tagName.toLowerCase()&&n!==w;)n=n.parentNode;n&&"a"===n.tagName.toLowerCase()&&(e=n.getAttribute("href"),(t=document.querySelector(e))&&(t.addEventListener("animationend",function e(){t.classList.remove("twinkling"),t.removeEventListener("animationend",e,!1)},!1),t.classList.add("twinkling"),window.scrollTo({top:t.offsetTop-30,behavior:"instant"})))},!1),v()}for(var q=document.querySelectorAll(".org-src-container"),C=q.length,A=0;A<C;A++)!function(e){var e=q[e],t=e.querySelector("pre"),n=t.className,o=n.indexOf("-"),n=n.substr(o+1).toLowerCase(),o=new RegExp("(?<!<[^\\/]*)(".concat(["echo","cd","pwd","mkdir","touch","cat","chmod","chown","ls","vim","emacs","node","npm","npx","svn","git"].join("|"),")\\b"),"g"),o=(-1<["shell","sh","bash","fish","zsh"].indexOf(n)&&(t.innerHTML=t.innerHTML.replace(/(\n\s*|^)([$%])/g,function(e,t,n){return"".concat(t,'<span class="org-builtin">').concat(n,"</span>")}),t.innerHTML=t.innerHTML.replace(o,function(e,t){return'<span class="org-constant">'.concat(t,"</span>")})),new RegExp("(?<!<[^\\/]*)(".concat(["console","Function","window","Symbol","BigInt","string"].join("|"),")\\b"),"g")),o=(-1<["js","javascript"].indexOf(n)&&(t.innerHTML=t.innerHTML.replace(o,function(e,t){return'<span class="org-constant">'.concat(t,"</span>")})),a({tag:"span",className:"org-src-type",innerHTML:n},e),a({tag:"span",className:"org-src-copy",innerHTML:"点击复制"},e),a({className:"org-src-linenrs"},e)),r=t.innerHTML.split("\n"),n=r.length-1;o.innerHTML=Array.from(Array(n),function(e,t){return'<span class="'.concat(-1<r[t].indexOf("---")?"del":-1<r[t].indexOf("+++")?"add":"",'">').concat(((t+1)%100+"").padStart(2,"0"),"</span>")}).join(""),t.innerHTML=t.innerHTML.replace(/(\n|^)(.*)\s(<span.*>)?(---)(<\/span>)?/g,'$1<span class="org-src-del">$2</span>'),t.innerHTML=t.innerHTML.replace(/(\n|^)(.*)\s(<span.*>)?(\+\+\+)(<\/span>)?/g,'$1<span class="org-src-add">$2</span>')}(A);for(var P=document.querySelectorAll("pre.example"),W=P.length,k=0;k<W;k++){var $=function(e,t){if(t)return e=r(e),e.appendChild(t.parentNode.replaceChild(e,t)),e}({style:"position:relative;"},P[k]);a({tag:"span",className:"org-src-copy",innerHTML:"点击复制"},$)}document.addEventListener("click",function(e){return e.target.classList.contains("org-src-copy")&&function(e){if(!document.execCommand)return o("当前浏览器不支持复制操作");var t=document.createElement("textarea");t.readOnly="readonly",t.style.position="absolute",t.style.left="-9999px",t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),o("代码复制成功"),document.body.removeChild(t)}(e.target.parentNode.querySelector("pre").innerText)}),(v=document.querySelector("#content"))&&(v=a({className:"footer"},v),l={src:"".concat(u="https://cdn.jsdelivr.net/gh/yfooo/orghtml@v2.1","/images/empty.png"),width:128,height:128,tag:"img",loading:"lazy"},c="macos"===c||"ios"===c?"https://emacsformacosx.com/":"https://www.gnu.org/software/emacs/",c=[{children:[{self:s(s({},l),{},{src:"".concat(u,"/images/jsab-boss.png"),width:512,height:320})}]},{children:[{self:{tag:"a",href:c,target:"_blank"},children:[{self:s(s({},l),{},{src:"".concat(u,"/images/emacs.png")})}]},{self:l},{self:l},{self:{tag:"a",href:"https://www.vim.org/",target:"_blank"},children:[{self:s(s({},l),{},{src:"".concat(u,"/images/vim.png")})}]}]},{children:[{self:{tag:"b",innerHTML:"记得一定要幸福！"}}]},{children:[{self:{tag:"code",innerHTML:"Happy Hacking & Have a nice day!"}}]}],n(c,v)),l=a({id:"global-btns"}),a({tag:"button",className:"iconfont icon-folder home-btn",title:"所有文档"},l).addEventListener("click",function(){window.location.href="/"}),d=a({tag:"button",className:"iconfont icon-top to-top-btn",title:"回到顶部"},document.querySelector("#global-btns")),u=e(function(){var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;d.style.display=150<=e?"block":"none"},100),d.addEventListener("click",function(){return window.scrollTo({top:0,behavior:"instant"})}),window.addEventListener("scroll",u,!1),f="#".concat(g="global-viewer"),document.addEventListener("click",function(e){var t,n,o,r,e=e.target;"img"===e.tagName.toLowerCase()&&e.classList.contains("zoom-in")&&((t=document.querySelector(f))||(t=a({id:g})).addEventListener("click",function(e){e=e.target;if("img"===e.tagName.toLowerCase()&&e.classList.contains("big-img"))return e.classList.toggle("limit"),e.wide&&t.classList.toggle("wide"),e.long&&t.classList.toggle("long"),void t.classList.toggle("auto");t.classList.remove("show","auto","wide","long","loaded"),setTimeout(function(){document.body.classList.remove("no-scroll")},300)}),n=e.naturalWidth>document.documentElement.clientWidth,o=e.naturalHeight>document.documentElement.clientHeight,r=n||o?"big-img limit":"",t.innerHTML='<span class="iconfont icon-loading rotating"></span>',(e=a({tag:"img",src:e.src,className:r},t)).onload=function(){t.querySelector("span.icon-loading").style.display="none",t.classList.add("loaded")},e.wide=n,e.long=o,t.classList.add("show"),document.body.classList.add("no-scroll"))})});