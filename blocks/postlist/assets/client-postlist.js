"use strict";function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function _next(a){asyncGeneratorStep(f,d,e,_next,_throw,"next",a)}function _throw(a){asyncGeneratorStep(f,d,e,_next,_throw,"throw",a)}var f=a.apply(b,c);_next(void 0)})}}function ufrSetUpPostLists(){return _ufrSetUpPostLists.apply(this,arguments)}function _ufrSetUpPostLists(){return _ufrSetUpPostLists=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;return regeneratorRuntime.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return q=function _blackOrWhite(a){var d="#"===a.charAt(0)?a.substring(1,7):a,e=parseInt(d.substring(0,2),16),f=parseInt(d.substring(2,4),16),g=parseInt(d.substring(4,6),16),b=[e/255,f/255,g/255].map(function(a){var b=Math.pow;return .03928>=a?a/12.92:b((a+.055)/1.055,2.4)}),c=.2126*b[0]+.7152*b[1]+.0722*b[2];return .179<c?"#000":"#fff"},p=function _strip(a){var b=new DOMParser().parseFromString(a,"text/html");return b.body.textContent.replaceAll("\n"," ")||""},o=function _getPosts3(){return o=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(a,b,c,d){var e;return regeneratorRuntime.wrap(function _callee$(f){for(;;)switch(f.prev=f.next){case 0:e=ufrGlobals.siteUrl+"/wp-json/wp/v2/posts?_embed=&_locale=user&per_page=".concat(d),f.t0=a,f.next="most-recent"===f.t0?4:"most-seen"===f.t0?7:"category"===f.t0?10:"tag"===f.t0?13:16;break;case 4:return f.next=6,fetch(e);case 6:return f.abrupt("return",f.sent.json());case 7:return f.next=9,fetch(ufrGlobals.siteUrl+"/wp-json/ufr/most-seen-posts?quantity=".concat(d));case 9:return f.abrupt("return",f.sent.json());case 10:return f.next=12,fetch(e+"&categories=".concat(b));case 12:return f.abrupt("return",f.sent.json());case 13:return f.next=15,fetch(e+"&tags=".concat(c));case 15:return f.abrupt("return",f.sent.json());case 16:case"end":return f.stop();}},_callee)})),o.apply(this,arguments)},n=function _getPosts2(){return o.apply(this,arguments)},b=a.showThumbnail,c=a.postType,d=a.postCategory,e=a.listID,f=a.postsQuantity,g=a.postTag,h=a.useContainer,i=a.containerColor,j=a.useBorder,k=a.showExcerpt,l=a.margin,m=a.useCard,r=document.getElementById(e),t.next=8,n(c,d,g,f);case 8:if(s=t.sent,s&&0!==s.length){t.next=12;break}return r.innerHTML="<div class=\"not-found\">Nenhum post encontrado.</div>",t.abrupt("return");case 12:s.forEach(function(a){var d,e,f=a.link,g=a.title,n=a._embedded,o=a.thumbnail,s=a.excerpt,t=ufrGlobals.themeUrl+"/assets/img/logo/ufr-bg.png",u=n?null===(d=n["wp:featuredmedia"])||void 0===d||null===(e=d[0])||void 0===e?void 0:e.source_url:void 0;u&&(t=u),o&&(t=o),"most-seen"===c||(g=g.rendered,s=s.rendered);var v=k?"\n\t\t\t<div class=\"col-12 excerpt\">\n\t\t\t\t<span>".concat(p(s),"</span>\n\t\t\t</div>"):"",w=b?"\n\t\t\t<div class=\"col-2 thumbnail\"\n\t\t\t\t style=\"background-image: url('".concat(t,"');\"\n\t\t\t></div>"):"",x="\n\t\t\t\tpadding: ".concat((h||j)&&!b&&!k?"10px 10px 25px":"10px",";\n\t\t\t\tborder-radius: ").concat(m?"":"5px",";\n\t\t\t\tbackground-color: ").concat(h?i:"",";\n\t\t\t\tborder: ").concat(j?"1px solid #1351B4;":"",";\n\t\t\t\tcolor: ").concat(h?q(i):"#000000",";\n\t\t\t\tmargin: ").concat(l," 0;\n\t\t\t\t").concat(m?"":"box-shadow: none;","\n\t\t"),y={facebook:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(f)),twitter:"https://twitter.com/intent/tweet?url=".concat(encodeURI(f),"&text=").concat(encodeURI("Veja este interessante artigo: "+g)),whatsapp:"https://api.whatsapp.com/send?text=".concat(encodeURI(g+"\n"+f))};r.innerHTML+="\n\t\t\t\t<div class=\"col-12 box\"\n\t\t\t\t\t style=\"".concat(x.replace("\n",""),"\"\n\t\t\t\t\t title=\"Clique para ler mais\"\n\t\t\t\t\t onclick=\"window.open('").concat(f,"', '_self')\"\n\t\t\t\t\t onauxclick=\"window.open('").concat(f,"', '_blank')\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t").concat(w,"\n\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-12 title\">\n\t\t\t\t\t\t\t\t\t<span class=\"title\" style=\"").concat(!k&&b&&"line-height: 80px;","\">\n\t\t\t\t\t\t\t\t\t\t").concat(g,"\n\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t<div class=\"btn_wrap\">\n        \t\t\t\t\t\t\t\t<span>Compartilhar</span>\n        \t\t\t\t\t\t\t\t<div class=\"container\">\n            \t\t\t\t\t\t\t\t<i class=\"fab fa-facebook-f\"\n            \t\t\t\t\t\t\t\t   onclick=\"window.open('").concat(y.facebook,"', '_blank')\"\n            \t\t\t\t\t\t\t\t></i>\n\n            \t\t\t\t\t\t\t\t<i class=\"fab fa-twitter\"\n            \t\t\t\t\t\t\t\t   onclick=\"window.open('").concat(y.twitter,"', '_blank')\"\n            \t\t\t\t\t\t\t\t></i>\n\n            \t\t\t\t\t\t\t\t<i class=\"fab fa-whatsapp\"\n            \t\t\t\t\t\t\t\t   onclick=\"window.open('").concat(y.whatsapp,"', '_blank')\"\n            \t\t\t\t\t\t\t\t></i>\n        \t\t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t\t\t<!-- credits: dribbble.com/YancyMin -->\n    \t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t").concat(v,"\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t")});case 13:case"end":return t.stop();}},_callee2)})),_ufrSetUpPostLists.apply(this,arguments)}
