(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[143],{71336:function(e){e.exports={title:"vue-h5-template",baseUrl:"http://localhost:9018",baseApi:"/api",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://www.sunniejs.cn/static"}},6731:function(e){e.exports={title:"vue-h5-template",baseUrl:"https://www.xxx.com/",baseApi:"https://api.52vmy.cn/",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://www.sunniejs.cn/static"}},16663:function(e){e.exports={title:"vue-h5-template",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://www.sunniejs.cn/static"}},29956:function(e,t,n){const o="production",r=n(13371)("./env."+o);e.exports=r},89723:function(e,t,n){"use strict";var o={};n.r(o),n.d(o,{formatDate:function(){return k},hidePhone:function(){return $}});n(28594),n(35666);var r=n(20144),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],s={name:"App"},p=s,c=n(1001),u=(0,c.Z)(p,i,a,!1,null,null,null),l=u.exports,h=n(78345);const m=[{path:"/",component:()=>n.e(823).then(n.bind(n,2823)),redirect:"/home",meta:{title:"首页",keepAlive:!1},children:[{path:"/home",name:"Home",component:()=>n.e(603).then(n.bind(n,37603)),meta:{title:"首页",keepAlive:!0}},{path:"/about",name:"About",component:()=>n.e(245).then(n.bind(n,5245)),meta:{title:"关于我",keepAlive:!1}}]},{path:"/crazyThursday",name:"CrazyThursday",component:()=>Promise.all([n.e(922),n.e(154),n.e(45)]).then(n.bind(n,71045)),meta:{title:"疯狂星期四",keepAlive:!1}},{path:"/randomWord",name:"RandomWord",component:()=>Promise.all([n.e(922),n.e(154),n.e(193)]).then(n.bind(n,3193)),meta:{title:"随机一言",keepAlive:!1}},{path:"/dogLickingDiary",name:"DogLickingDiary",component:()=>Promise.all([n.e(922),n.e(154),n.e(191)]).then(n.bind(n,35191)),meta:{title:"舔狗日记",keepAlive:!1}},{path:"/fishDaily",name:"FishDaily",component:()=>n.e(967).then(n.bind(n,75967)),meta:{title:"摸鱼日报",keepAlive:!1}},{path:"/morningPaper",name:"morningPaper",component:()=>Promise.all([n.e(922),n.e(154),n.e(181)]).then(n.bind(n,62181)),meta:{title:"60秒早报",keepAlive:!1}}],d=h.ZP.prototype.push;h.ZP.prototype.push=function(e,t,n){return t||n?d.call(this,e,t,n):d.call(this,e).catch((e=>e))},r.ZP.use(h.ZP);const P=()=>new h.ZP({scrollBehavior:()=>({y:0}),routes:m}),v=P();var f=v,x=n(97156),Z=n(29956),g=(n(25440),n(31914)),b=(n(35002),n(62476)),w=(n(42176),n(76475)),A=(n(27902),n(30876)),E=(n(57660),n(73622)),y=(n(25038),n(35791));r.ZP.use(y.Z),r.ZP.use(E.Z),r.ZP.use(A.Z),r.ZP.use(g.Z).use(b.Z).use(w.Z);n(61335);function k(e,t){if(void 0===e)return;const n=new Date(e);/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));const o={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(const r in o)if(new RegExp(`(${r})`).test(t)){const e=o[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?e:D(e))}return t}function D(e){return("00"+e).substr(e.length)}function $(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}Object.keys(o).forEach((e=>r.ZP.filter(e,o[e]))),r.ZP.prototype.$formatDate=r.ZP.filter("formatDate"),r.ZP.prototype.$hidePhone=r.ZP.filter("hidePhone"),r.ZP.prototype.$cdn=Z.$cdn,r.ZP.config.productionTip=!1,new r.ZP({el:"#app",router:f,store:x.Z,render:e=>e(l)})},97156:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var o=n(20144),r=n(20629);const i={userName:e=>e.app.userName};var a=i;const s={userName:""},p={SET_USER_NAME(e,t){e.userName=t}},c={setUserName({commit:e},t){e("SET_USER_NAME",t)}};var u={state:s,mutations:p,actions:c};o.ZP.use(r.ZP);const l=new r.ZP.Store({modules:{app:u},getters:a});var h=l},13371:function(e,t,n){var o={"./env.development":71336,"./env.development.js":71336,"./env.production":6731,"./env.production.js":6731,"./env.staging":16663,"./env.staging.js":16663};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=13371}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[922,114],(function(){return t(89723)}));e.O()}]);