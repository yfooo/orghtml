!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function n(t,e){Array.isArray(t)&&0!==t.length&&t.forEach(function(t){return n(t.children,c(t.self,e))})}var t,o,r=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e(document.createElement(t.tag||"div"),t)},c=function(t){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body).appendChild(r(t))},a=new Proxy(new URLSearchParams(window.location.search),{get:function(t,e){return t.get(e)}}),i=(i=window.navigator.userAgent,d=window.navigator.platform,-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(d)?L="MacOS":-1!==["iPhone","iPad","iPod"].indexOf(d)?L="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(d)?L="Windows":/Android/.test(i)?L="Android":!L&&/Linux/.test(d)&&(L="Linux"),L&&L.toLowerCase());function l(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function s(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var e,n;e=o,n=r[t=t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}var d=document.querySelector("table#list");if(d&&window.source){for(var f,u,g,h=a.tag,p=window.source,w=p.length,b={},m=(h&&(b[h]=0),"<thead><tr><th>文档</th><th>描述</th><th>标签</th></tr></thead>"),y=0;y<w;y++){if(u=!h,f=p[y],g='<tbody><tr><td><a href="/'.concat(f.file,'">').concat(f.file,"</a></td><td>").concat(f.title,"</td><td>"),f.keywords)for(var v,O=(v=f.keywords.split(",")).length,P=0;P<O;P++)g+='<a class="tag" href="/?tag='.concat(v[P],'">').concat(v[P],"</a>"),h?h===v[P]&&(u=!0,b[h]++):b[v[P]]?b[v[P]]++:b[v[P]]=1;g+="</td></tr></tbody>",u&&(m+=g)}L={className:"tags"};var j,L=(a=document.querySelector("h1.title")).parentNode.insertBefore(r(L),a.nextSibling),S='<a class="tag" href="/">所有文档('.concat(w,")</a>");for(j in b)S+='<a class="tag" href="/?tag='.concat(j,'">').concat(j,"(").concat(b[j],")</a>");L.innerHTML=S,d.innerHTML=m}(a=document.querySelector("#content"))&&(a=c({className:"footer"},a),t={src:"".concat(d="https://cdn.jsdelivr.net/gh/yfooo/orghtml@v2.1","/images/empty.png"),width:128,height:128,tag:"img",loading:"lazy"},i="macos"===i||"ios"===i?"https://emacsformacosx.com/":"https://www.gnu.org/software/emacs/",i=[{children:[{self:s(s({},t),{},{src:"".concat(d,"/images/jsab-boss.png"),width:512,height:320})}]},{children:[{self:{tag:"a",href:i,target:"_blank"},children:[{self:s(s({},t),{},{src:"".concat(d,"/images/emacs.png")})}]},{self:t},{self:t},{self:{tag:"a",href:"https://www.vim.org/",target:"_blank"},children:[{self:s(s({},t),{},{src:"".concat(d,"/images/vim.png")})}]}]},{children:[{self:{tag:"b",innerHTML:"记得一定要幸福！"}}]},{children:[{self:{tag:"code",innerHTML:"Happy Hacking & Have a nice day!"}}]}],n(i,a)),t=c({id:"global-btns"}),c({tag:"button",className:"iconfont icon-folder home-btn",title:"所有文档"},t).addEventListener("click",function(){window.location.href="/"}),o=c({tag:"button",className:"iconfont icon-top to-top-btn",title:"回到顶部"},document.querySelector("#global-btns")),d=function(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:100,c=null;return function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];c=c||setTimeout(function(){o.apply(void 0,e),c=null},r)}}(function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;o.style.display=150<=t?"block":"none"},100),o.addEventListener("click",function(){return window.scrollTo({top:0,behavior:"instant"})}),window.addEventListener("scroll",d,!1)});