!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];a=a||setTimeout(function(){o.apply(void 0,t),a=null},r)}}function r(e){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body).appendChild(a(e))}var t,n,a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.tag,n=e.cls,n=void 0===n?"":n,o=e.id,o=void 0===o?"":o,e=e.html,e=void 0===e?"":e,t=document.createElement(void 0===t?"div":t);return t.className=n,t.id=o,t.innerHTML=e,t},o=(new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}}),function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3e3,n=document.querySelector("#global-toasts"),o=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body;return t.insertBefore(a(e),t.firstChild)}({html:e,cls:"toast"},n=n||r({id:"global-toasts"}));setTimeout(function(){return n.removeChild(o)},t)});if(l=document.querySelector('meta[name="keywords"]')){for(var c=l.getAttribute("content").split(","),i=c.length,l=(l={cls:"tags"},(m=document.querySelector("h1.title")).parentNode.insertBefore(a(l),m.nextSibling)),s="",d=0;d<i;d++)s+='<a class="tag" href="/?tag='.concat(c[d],'">').concat(c[d],"</a>");l.innerHTML=s}m=document.querySelector("#table-of-contents"),l="fixed-table-of-contents",m&&(m.innerHTML='<div id="'.concat(l,'">').concat(m.innerHTML,"</div>"));var m,u=document.querySelector("#text-table-of-contents");if(u){var f,p,v=u.querySelectorAll("a"),g=v.length,y=[],h=[],L=/^(\d+\.\d+)(\.)(\ )/,w=-1,T=document.createElement("div");T.className="arrow-of-contents",T.innerHTML="»",u.appendChild(T);for(var b=0;b<g;b++)f=v[b],p=document.querySelector(f.getAttribute("href")),y.push(f.offsetTop),h.push(p.offsetTop),f.innerHTML=f.innerHTML.replace(L,function(e,t,n,o){return"".concat(t).concat(o)});var l=e(function(){var e,t,n,o=function(e){for(var t=0;t<g;t++)if(e<h[t]-30-5)return 0===t?0:t-1;return g-1}(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop);o!==w&&(0<=w&&(v[w].parentNode.classList.remove("active"),document.querySelector(v[w].getAttribute("href")).classList.remove("active")),v[o].parentNode.classList.add("active"),document.querySelector(v[o].getAttribute("href")).classList.add("active"),e=y[e=o],t=y[0],n=u.offsetHeight/2,u.scrollTop=e-n+22,T.style.top="".concat(e-t,"px"),w=o)},100);window.addEventListener("scroll",l,!1),u.addEventListener("click",function(e){e.preventDefault();for(var t,n=e.target;"a"!==n.tagName.toLowerCase()&&n!==u;){n.parentNode,o=void 0;var o="t";throw new TypeError('"'+o+'" is read-only')}n&&"a"===n.tagName.toLowerCase()&&(e=n.getAttribute("href"),(t=document.querySelector(e))&&(t.addEventListener("animationend",function e(){t.classList.remove("twinkling"),t.removeEventListener("animationend",e,!1)},!1),t.classList.add("twinkling"),window.scrollTo({top:t.offsetTop-30,behavior:"instant"})))},!1),l()}for(var N,S,E,H=document.querySelectorAll(".org-src-container"),P=H.length,q=0;q<P;q++){S=(E=(C=(N=H[q]).querySelector("pre")).className).indexOf("-"),E=E.substr(S+1).toLowerCase(),(S=document.createElement("span")).className="src-type",S.innerHTML=E,(E=document.createElement("div")).className="src-linenrs",C=C.innerHTML.split("\n").length-1,E.innerHTML=Array.from(Array(C),function(e,t){return"<span>".concat(((t+1)%100+"").padStart(2,"0"),"</span>")}).join("");var C=document.createElement("span");C.className="src-copy",C.innerHTML="点击复制",C.addEventListener("click",function(e){e=e.target.parentNode.querySelector("pre").innerText;if(!document.execCommand)return o("当前浏览器不支持复制操作");var t=document.createElement("textarea");t.readOnly="readonly",t.style.position="absolute",t.style.left="-9999px",t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),o("代码复制成功"),document.body.removeChild(t)}),N.append(S),N.append(E),N.append(C)}var M=document.querySelector("#postamble");if(M){for(var x=[{className:"footimg",imgs:["/images/jsab-boss.png"]},{className:"footimg",imgs:["/images/emacs.png","/images/empty.png","/images/empty.png","/images/vim.png"]},{className:"footpre",code:"记得一定要幸福！"},{className:"footpre",code:"Happy Hacking & Have a nice day!"}],R=x.length,A=0;A<R;A++){var k=x[A],O=document.createElement("div");if(O.className=k.className,k.imgs)for(var j=0;j<k.imgs.length;j++){var B=new Image;B.src="".concat("https://cdn.jsdelivr.net/gh/yfooo/orghtml@v2.1").concat(k.imgs[j]),O.appendChild(B)}k.code&&(O.innerHTML="<code>"+k.code+"</code>"),M.appendChild(O)}M.style.display="block"}(l=document.querySelector("h1.title"))&&((t=document.createElement("a")).className="iconfont icon-folder",t.href="/",l.appendChild(t)),n=r({id:"to-top",cls:"iconfont icon-top"}),l=e(function(){var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;n.style.opacity=150<=e?1:0},100),n.addEventListener("click",function(){return window.scrollTo({top:0,behavior:"instant"})}),window.addEventListener("scroll",l,!1)});