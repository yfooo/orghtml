!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";var e=new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}});var t=document.querySelector("table#list");if(t&&window.source){for(var a,o,n,c=e.tag,r=source.length,i={},s=(c&&(i[c]=0),"<thead><tr><th>文档地址</th><th>描述</th><th>标签</th></tr></thead>"),d=0;d<r;d++){if(o=!c,a=source[d],n='<tbody><tr><td><a href="'.concat(a.file,'">').concat(a.file,"</a></td><td>").concat(a.title,"</td><td>"),a.keywords)for(var l,m=(l=a.keywords.split(",")).length,g=0;g<m;g++)n+='<a href="/?tag='.concat(l[g],'"><code>').concat(l[g],"</code></a>"),c?c===l[g]&&(o=!0,i[c]++):i[l[g]]?i[l[g]]++:i[l[g]]=1;n+="</td></tr></tbody>",o&&(s+=n)}var f,h,e=document.createElement("div"),p=(e.className="tags","<span>标签：</span>");for(f in i)p+='<a href="/?tag='.concat(f,'"><code>').concat(f,"(").concat(i[f],")</code></a>");e.innerHTML=p,e=e,(h=document.querySelector("h1.title")).parentNode.insertBefore(e,h.nextSibling),t.innerHTML=s}var u=document.querySelector("#postamble");if(u){for(var v=[{className:"footimg",imgs:["/images/jsab-boss.png"]},{className:"footimg",imgs:["/images/emacs.png","/images/empty.png","/images/empty.png","/images/vim.png"]},{className:"footpre",code:"记得一定要幸福！"},{className:"footpre",code:"Happy Hacking & Have a nice day!"}],y=v.length,w=0;w<y;w++){var b=v[w],N=document.createElement("div");if(N.className=b.className,b.imgs)for(var H=0;H<b.imgs.length;H++){var S=new Image;S.src="".concat("https://cdn.jsdelivr.net/gh/yfooo/orghtml@v2.1").concat(b.imgs[H]),N.appendChild(S)}b.code&&(N.innerHTML="<code>"+b.code+"</code>"),u.appendChild(N)}u.style.display="block"}(e=document.querySelector("h1.title"))&&((h=new Image).src="".concat("https://cdn.jsdelivr.net/gh/yfooo/orghtml@v2.1","/images/folder.png"),e.appendChild(h),h.addEventListener("click",function(){window.location.href="/"},!1))});