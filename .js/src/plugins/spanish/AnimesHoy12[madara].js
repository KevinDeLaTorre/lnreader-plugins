var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(a,i){function o(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,a,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),a=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=r(require("dayjs")),c=require("@libs/storage"),u=function(t,e){return new RegExp(e.join("|")).test(t)},l=new(function(){function r(t){var e,r;this.hideLocked=c.storage.get("hideLocked"),this.parseData=function(t){var e,r=(0,s.default)(),n=(null===(e=t.match(/\d+/))||void 0===e?void 0:e[0])||"",a=parseInt(n,10);if(!n)return t;if(u(t,["detik","segundo","second","วินาที"]))r=r.subtract(a,"second");else if(u(t,["menit","dakika","min","minute","minuto","นาที","دقائق"]))r=r.subtract(a,"minute");else if(u(t,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))r=r.subtract(a,"hours");else if(u(t,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))r=r.subtract(a,"days");else if(u(t,["week","semana"]))r=r.subtract(a,"week");else if(u(t,["month","mes"]))r=r.subtract(a,"month");else{if(!u(t,["year","año"]))return"Invalid Date"!==(0,s.default)(t).format("LL")?(0,s.default)(t).format("LL"):t;r=r.subtract(a,"year")}return r.format("LL")},this.id=t.id,this.name=t.sourceName,this.icon="multisrc/madara/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var n=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(7+n),this.options=t.options,this.filters=t.filters,(null===(r=this.options)||void 0===r?void 0:r.hasLocked)&&(this.pluginSettings={hideLocked:{value:"",label:"Hide locked chapters",type:"Switch"}})}return r.prototype.translateDragontea=function(t){var e;if("dragontea"!==this.id)return t;var r=(0,a.load)((null===(e=t.html())||void 0===e?void 0:e.replace("\n","").replace(/<br\s*\/?>/g,"\n"))||"");return t.html(r.html()),t.find("*").addBack().contents().filter((function(t,e){return 3===e.nodeType})).each((function(t,e){var n=r(e),a=n.text().normalize("NFD").split("").map((function(t){var e=t.normalize("NFC"),r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e);return r>=0?"zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA"[r]+t.slice(e.length):t})).join("");n.replaceWith(a.replace("\n","<br>"))})),t},r.prototype.getHostname=function(t){var e=(t=t.split("/")[2]).split(".");return e.pop(),e.join(".")},r.prototype.getCheerio=function(r,i){return t(this,void 0,void 0,(function(){var t,o,s,c;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(r)];case 1:if(!(t=e.sent()).ok&&1!=i)throw new Error("Could not reach site ("+t.status+") try to open in webview.");return s=a.load,[4,t.text()];case 2:if(o=s.apply(void 0,[e.sent()]),c=o("title").text().trim(),this.getHostname(r)!=this.getHostname(t.url)||"Bot Verification"==c||"You are being redirected..."==c||"Un instant..."==c||"Just a moment..."==c||"Redirecting..."==c)throw new Error("Captcha error, please open in webview");return[2,o]}}))}))},r.prototype.parseNovels=function(t){var e=[];return t(".manga-title-badges").remove(),t(".page-item-detail, .c-tabs-item__content").each((function(r,n){var a=t(n).find(".post-title").text().trim(),o=t(n).find(".post-title").find("a").attr("href")||"";if(a&&o){var s=t(n).find("img"),c={name:a,cover:s.attr("data-src")||s.attr("src")||s.attr("data-lazy-srcset")||i.defaultCover,path:o.replace(/https?:\/\/.*?\//,"/")};e.push(c)}})),e},r.prototype.popularNovels=function(r,n){return t(this,arguments,void 0,(function(t,r){var n,a,i,o,s,c,u=r.filters,l=r.showLatestNovels;return e(this,(function(e){switch(e.label){case 0:for(a in n=this.site+"/page/"+t+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),l&&(n+="&m_orderby=latest"),u)if("object"==typeof u[a].value)for(i=0,o=u[a].value;i<o.length;i++)s=o[i],n+="&".concat(a,"=").concat(s);else u[a].value&&(n+="&".concat(a,"=").concat(u[a].value));return[4,this.getCheerio(n,1!=t)];case 1:return c=e.sent(),[2,this.parseNovels(c)]}}))}))},r.prototype.parseNovel=function(r){return t(this,void 0,void 0,(function(){var t,c,u,l,h,p,d,m,f=this;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return(t=e.sent())(".manga-title-badges, #manga-title span").remove(),(c={path:r,name:t(".post-title h1").text().trim()||t("#manga-title h1").text().trim()}).cover=t(".summary_image > a > img").attr("data-lazy-src")||t(".summary_image > a > img").attr("data-src")||t(".summary_image > a > img").attr("src")||i.defaultCover,t(".post-content_item, .post-content").each((function(){var e=t(this).find("h5").text().trim(),r=t(this).find(".summary-content");switch(e){case"Genre(s)":case"Genre":case"Tags(s)":case"Tag(s)":case"Tags":case"Género(s)":case"التصنيفات":c.genres?c.genres+=", "+r.find("a").map((function(e,r){return t(r).text()})).get().join(", "):c.genres=r.find("a").map((function(e,r){return t(r).text()})).get().join(", ");break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":c.author=r.text().trim();break;case"Status":case"Novel":case"Estado":c.status=r.text().trim().includes("OnGoing")||r.text().trim().includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed;break;case"Artist(s)":c.artist=r.text().trim()}})),c.author||(c.author=t(".manga-authors").text().trim()),t("div.summary__content .code-block,script,noscript").remove(),c.summary=this.translateDragontea(t("div.summary__content")).text().trim()||t("#tab-manga-about").text().trim()||t('.post-content_item h5:contains("Summary")').next().find("span").map((function(e,r){return t(r).text()})).get().join("\n\n").trim()||t(".manga-summary p").map((function(e,r){return t(r).text()})).get().join("\n\n").trim()||t(".manga-excerpt p").map((function(e,r){return t(r).text()})).get().join("\n\n").trim(),u=[],l="",(null===(m=this.options)||void 0===m?void 0:m.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+r+"ajax/chapters/",{method:"POST",referrer:this.site+r}).then((function(t){return t.text()}))]:[3,3];case 2:return l=e.sent(),[3,5];case 3:return h=t(".rating-post-id").attr("value")||t("#manga-chapters-holder").attr("data-id")||"",(p=new FormData).append("action","manga_get_chapters"),p.append("manga",h),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:p}).then((function(t){return t.text()}))];case 4:l=e.sent(),e.label=5;case 5:return"0"!==l&&(t=(0,a.load)(l)),d=t(".wp-manga-chapter").length,t(".wp-manga-chapter").each((function(e,r){var n=t(r).find("a").text().trim(),a=r.attribs.class.includes("premium-block");a&&(n="🔒 "+n);var i=t(r).find("span.chapter-release-date").text().trim();i=i?f.parseData(i):(0,s.default)().format("LL");var o=t(r).find("a").attr("href")||"";!o||"#"==o||a&&f.hideLocked||u.push({name:n,path:o.replace(/https?:\/\/.*?\//,"/"),releaseTime:i||null,chapterNumber:d-e})})),c.chapters=u.reverse(),[2,c]}}))}))},r.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,n,a;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return t=e.sent(),n=t(".text-left")||t(".text-right")||t(".entry-content")||t(".c-blog-post > div > div:nth-child(2)"),null===(a=this.options)||void 0===a||a.customJs,[2,this.translateDragontea(n).html()||""]}}))}))},r.prototype.searchNovels=function(r,n){return t(this,void 0,void 0,(function(){var t,a;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"/page/"+n+"/?s="+encodeURIComponent(r)+"&post_type=wp-manga",[4,this.getCheerio(t,!0)];case 1:return a=e.sent(),[2,this.parseNovels(a)]}}))}))},r}())({id:"AnimesHoy12",sourceSite:"https://animeshoy12.com/",sourceName:"AnimesHoy12",options:{lang:"Spanish"}});exports.default=l;