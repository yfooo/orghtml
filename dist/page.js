!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";var e;new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}});if(o=document.querySelector('meta[name="keywords"]')){for(var t=o.getAttribute("content").split(","),n=t.length,o=document.createElement("div"),a=(o.className="tags",""),r=0;r<n;r++)a+='<a class="tag" href="/?tag='.concat(t[r],'">').concat(t[r],"</a>");o.innerHTML=a,o=o,(h=document.querySelector("h1.title")).parentNode.insertBefore(o,h.nextSibling)}o=document.querySelector("#table-of-contents"),h="fixed-table-of-contents",o&&(o.innerHTML='<div id="'.concat(h,'">').concat(o.innerHTML,"</div>"));var c=document.querySelector("#text-table-of-contents");if(c){var i,s,l=c.querySelectorAll("a"),d=l.length,m=[],f=[],u=/^(\d+\.\d+)(\.)(\ )/,p=-1,g=document.createElement("div");g.className="arrow-of-contents",g.innerHTML="»",c.appendChild(g);for(var v=0;v<d;v++)i=l[v],s=document.querySelector(i.getAttribute("href")),m.push(i.offsetTop),f.push(s.offsetTop),i.innerHTML=i.innerHTML.replace(u,function(e,t,n,o){return"".concat(t).concat(o)});var h=function(o){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:100,r=null;return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];r=r||setTimeout(function(){o.apply(void 0,t),r=null},a)}}(function(){var e,t,n,o=function(e){for(var t=0;t<d;t++)if(e<f[t]-30-5)return 0===t?0:t-1;return d-1}(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop);o!==p&&(0<=p&&(l[p].parentNode.classList.remove("active"),document.querySelector(l[p].getAttribute("href")).classList.remove("active")),l[o].parentNode.classList.add("active"),document.querySelector(l[o].getAttribute("href")).classList.add("active"),e=m[e=o],t=m[0],n=c.offsetHeight/2,c.scrollTop=e-n+22,g.style.top="".concat(e-t,"px"),p=o)},100);window.addEventListener("scroll",h,!1),c.addEventListener("click",function(e){e.preventDefault();for(var t,n=e.target;"a"!==n.tagName.toLowerCase()&&n!==c;){n.parentNode,o=void 0;var o="t";throw new TypeError('"'+o+'" is read-only')}n&&"a"===n.tagName.toLowerCase()&&(e=n.getAttribute("href"),(t=document.querySelector(e))&&(t.addEventListener("animationend",function e(){t.classList.remove("twinkling"),t.removeEventListener("animationend",e,!1)},!1),t.classList.add("twinkling"),window.scrollTo({top:t.offsetTop-30,behavior:"instant"})))},!1),h()}for(var y,L,w,N=document.querySelectorAll("pre"),T=N.length,b=["example"],S=0;S<T;S++)w=(L=(y=N[S]).className).indexOf("-"),L=L.substr(w+1).toLowerCase(),-1<b.indexOf(L)||((w=document.createElement("span")).className="src-type",w.innerHTML=L,y.append(w));var q=document.querySelector("#postamble");if(q){for(var H=[{className:"footimg",imgs:["/images/jsab-boss.png"]},{className:"footimg",imgs:["/images/emacs.png","/images/empty.png","/images/empty.png","/images/vim.png"]},{className:"footpre",code:"记得一定要幸福！"},{className:"footpre",code:"Happy Hacking & Have a nice day!"}],E=H.length,x=0;x<E;x++){var A=H[x],M=document.createElement("div");if(M.className=A.className,A.imgs)for(var C=0;C<A.imgs.length;C++){var k=new Image;k.src="".concat("https://cdn.jsdelivr.net/gh/yfooo/orghtml@v2.1").concat(A.imgs[C]),M.appendChild(k)}A.code&&(M.innerHTML="<code>"+A.code+"</code>"),q.appendChild(M)}q.style.display="block"}(o=document.querySelector("h1.title"))&&((e=document.createElement("a")).className="iconfont icon-folder",e.href="/",o.appendChild(e))});