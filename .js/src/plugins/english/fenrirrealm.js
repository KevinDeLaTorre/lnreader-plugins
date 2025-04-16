var e=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,l){function i(e){try{u(r.next(e))}catch(e){l(e)}}function o(e){try{u(r.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}u((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,r,n,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=o(0),i.throw=o(1),i.return=o(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(u){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(l=0)),l;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@libs/fetch"),r=require("cheerio"),n=require("@libs/filterInputs"),l=require("@libs/storage"),i=function(){function i(){var e=this;this.id="fenrir",this.name="Fenrir Realm",this.icon="src/en/fenrirrealm/icon.png",this.site="https://fenrirealm.com",this.version="1.0.8",this.imageRequestInit=void 0,this.hideLocked=l.storage.get("hideLocked"),this.pluginSettings={hideLocked:{value:"",label:"Hide locked chapters",type:"Switch"}},this.resolveUrl=function(t,a){return e.site+"/series/"+t},this.filters={status:{type:n.FilterTypes.Picker,label:"Status",value:"any",options:[{label:"All",value:"any"},{label:"Ongoing",value:"ongoing"},{label:"Completed",value:"completed"}]},sort:{type:n.FilterTypes.Picker,label:"Sort",value:"popular",options:[{label:"Popular",value:"popular"},{label:"Latest",value:"latest"},{label:"Updated",value:"updated"}]},genres:{type:n.FilterTypes.CheckboxGroup,label:"Genres",value:[],options:[{label:"Action",value:"1"},{label:"Adult",value:"2"},{label:"Adventure",value:"3"},{label:"Comedy",value:"4"},{label:"Drama",value:"5"},{label:"Ecchi",value:"6"},{label:"Fantasy",value:"7"},{label:"Gender Bender",value:"8"},{label:"Harem",value:"9"},{label:"Historical",value:"10"},{label:"Horror",value:"11"},{label:"Josei",value:"12"},{label:"Martial Arts",value:"13"},{label:"Mature",value:"14"},{label:"Mecha",value:"15"},{label:"Mystery",value:"16"},{label:"Psychological",value:"17"},{label:"Romance",value:"18"},{label:"School Life",value:"19"},{label:"Sci-fi",value:"20"},{label:"Seinen",value:"21"},{label:"Shoujo",value:"22"},{label:"Shoujo Ai",value:"23"},{label:"Shounen",value:"24"},{label:"Shounen Ai",value:"25"},{label:"Slice of Life",value:"26"},{label:"Smut",value:"27"},{label:"Sports",value:"28"},{label:"Supernatural",value:"29"},{label:"Tragedy",value:"30"},{label:"Wuxia",value:"31"},{label:"Xianxia",value:"32"},{label:"Xuanhuan",value:"33"},{label:"Yaoi",value:"34"},{label:"Yuri",value:"35"}]}}}return i.prototype.popularNovels=function(r,n){return e(this,arguments,void 0,(function(e,r){var n,l,i=this,o=r.showLatestNovels,u=r.filters;return t(this,(function(t){switch(t.label){case 0:return n=u.sort.value,o&&(n="latest"),l=u.genres.value.map((function(e){return"&genres%5B%5D="+e})).join(""),[4,(0,a.fetchApi)("".concat(this.site,"/api/novels/filter?page=").concat(e,"&per_page=20&status=").concat(u.status.value,"&order=").concat(n).concat(l)).then((function(e){return e.json()}))];case 1:return[2,t.sent().data.map((function(e){return i.parseNovelFromApi(e)}))]}}))}))},i.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var e,l,i,o;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)("".concat(this.site,"/series/").concat(n),{headers:{"User-Agent":""}}).then((function(e){return e.text()}))];case 1:return e=t.sent(),(l=(0,r.load)(e))("div.overflow-hidden.transition-all.max-h-\\[108px\\] > br").replaceWith("%%NEWLINE%%"),(i={path:n,name:l("h1.my-2").text(),summary:l("div.overflow-hidden.transition-all.max-h-\\[108px\\]").text().replaceAll("%%NEWLINE%%","\n")}).author=l("div.flex-1 > div.mb-3 > a.inline-flex").text(),i.cover=this.site+"/storage/"+e.match(/,cover:"storage\/(.+?)",cover_data_url/)[1],i.genres=l("div.flex-1 > div.flex:not(.mb-3, .mt-5) > a").map((function(e,t){return(0,r.load)(t).text()})).toArray().join(","),i.status=l("div.flex-1 > div.mb-3 > span.rounded-md").first().text(),[4,(0,a.fetchApi)(this.site+"/api/novels/chapter-list/"+n).then((function(e){return e.json()}))];case 2:return o=t.sent(),this.hideLocked&&(o=o.filter((function(e){var t;return!(null===(t=e.locked)||void 0===t?void 0:t.price)}))),i.chapters=o.map((function(e){var t;return{name:((null===(t=e.locked)||void 0===t?void 0:t.price)?"🔒 ":"")+"Chapter "+e.number+(e.title&&e.title.trim()!="Chapter "+e.number?" - "+e.title:""),path:n+"/chapter-"+e.number,releaseTime:e.created_at,chapterNumber:e.number}})).sort((function(e,t){return e.chapterNumber-t.chapterNumber})),[2,i]}}))}))},i.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.site+"/series/"+n,{headers:{"User-Agent":""}}).then((function(e){return e.text()}))];case 1:return e=t.sent(),[2,(0,r.load)(e)("#reader-area").html()]}}))}))},i.prototype.searchNovels=function(r,n){return e(this,void 0,void 0,(function(){var e=this;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)("".concat(this.site,"/api/novels/filter?page=").concat(n,"&per_page=20&search=").concat(encodeURIComponent(r))).then((function(e){return e.json()})).then((function(t){return t.data.map((function(t){return e.parseNovelFromApi(t)}))}))];case 1:return[2,t.sent()]}}))}))},i.prototype.parseNovelFromApi=function(e){return{name:e.title,path:e.slug,cover:this.site+"/"+e.cover,summary:e.description,status:e.status,genres:e.genres.map((function(e){return e.name})).join(",")}},i}();exports.default=new i;