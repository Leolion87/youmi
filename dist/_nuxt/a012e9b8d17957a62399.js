(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{183:function(t,e,n){var content=n(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("927c07e4",content,!0,{sourceMap:!1})},184:function(t,e,n){"use strict";var o=n(183);n.n(o).a},185:function(t,e,n){e=t.exports=n(34)(!1);var o=n(102)(n(186));e.push([t.i,".footer[data-v-6e50b62a]{height:2.5rem;line-height:2.5rem;background:#2d8cf0;color:#fff;width:100%;position:absolute;z-index:200;bottom:0;text-align:center}.nav .active[data-v-6e50b62a]{background:#5cadff}.index-cates .ivu-poptip-body[data-v-6e50b62a]{padding:0}.index-cates .txt[data-v-6e50b62a]{color:#fff}.cate-item>li[data-v-6e50b62a]{padding:.3rem .4rem;cursor:pointer}.cate-item>li a[data-v-6e50b62a]{color:#333}.cate-item>li[data-v-6e50b62a]:hover{background:#eee}.cate-item>li.active[data-v-6e50b62a]{background:#5cadff}.cate-item>li.active a[data-v-6e50b62a]{color:#fff}.nav[data-v-6e50b62a]{display:flex}.nav div[data-v-6e50b62a]{flex:1}.nav a[data-v-6e50b62a]{color:#fff}.navs .home[data-v-6e50b62a]{display:inline-block;vertical-align:middle;text-align:center;position:relative}.navs .home span[data-v-6e50b62a]{display:block;vertical-align:middle}.navs .home .home-icon[data-v-6e50b62a]{width:1rem;height:1rem;background:url("+o+") no-repeat 1px 1px}.navs .home .home-txt[data-v-6e50b62a]{font-size:.22rem;color:#888;height:.3rem;line-height:.3rem}",""])},186:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAABM0lEQVQ4T9WTv0vUcRjHXy8SDhzSOTncGt2y/yCMA51uUWhoUsecHBqqLRFapEluchCJhANBUNyipSVocnCQ/oAgXCLe8jm+J8d1d3KCQ5/1eT+vz/N+fsiIl2QS2AEu1LfDpA4LJHkEHAOnwDxwDrxU//bnDIQkeQJ8Bl6rrSQ1YB94CCyqv3tB/0CSNIEPQFP90hUnKdot4DnwTP3Zjd1AKtG78hPQUC8HWU2yVioEFtTvRdOBVA08AP4Ay+rVLQ1fAnaBFfXYJHXgCKipj0cl98aSbADvgdUC+QG0gBfq3BiQ9WpqT7t2ZoH2HSB1dfN+IUkawCvgQWXxTH3TM/JiZ3QlScq0vgLfqsRDdXpcyCfgo3pSrcEvder/gJTmlYud6NuTspGdG0myB8z0xbfV9jVP665Hu82VDAAAAABJRU5ErkJggg=="},187:function(t,e,n){t.exports=n.p+"img/5e9847a.png"},188:function(t,e,n){"use strict";var o=n(9),r=n(19),c={data:function(){return{showCatesPopTip:!1,navActiveId:1,activeCateId:0,cates:[{id:1,name:"招聘",url:"http://bengbuxx.com/zhaopin"},{id:2,name:"求职",url:"http://bengbuxx.com/qiuzhi"},{id:3,name:"房屋买卖",url:"http://bengbuxx.com/buyhouse"},{id:4,name:"房屋租赁",url:"http://bengbuxx.com/zulin"},{id:5,name:"征婚交友",url:"http://bengbuxx.com/makefriends"},{id:6,name:"购物市场",url:"http://bengbuxx.com/shopping"},{id:7,name:"生活服务",url:"http://bengbuxx.com/lifeservice"},{id:8,name:"车辆市场",url:"http://bengbuxx.com/carMaket"},{id:9,name:"教育培训",url:"http://bengbuxx.com/education"},{id:10,name:"商务合作",url:"http://bengbuxx.com/zhaoshang"},{id:11,name:"公告祝福",url:"http://bengbuxx.com/gonggao"}]}},computed:Object(o.a)({},Object(r.d)(["userInfo"])),methods:{choose3:function(){console.log(1)},choose2:function(){console.log(2)},choose1:function(){console.log(3),this.$router.push("/list")},showCatesPopTipFunc:function(){console.log("232"),this.showCatesPopTip=!this.showCatesPopTip},chooseCate:function(t){this.activeCateId=t.id,this.showCatesPopTip=!1,window.location.href=t.url},toPersonInfo:function(){sessionStorage.getItem("userName")?this.$router.push("/info"):this.$router.push("/info/login")}},components:{}},l=(n(184),n(18)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("Row",{staticClass:"nav"},[n("div",{staticClass:"navs"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),n("div",{staticClass:"index"},[n("nuxt-link",{attrs:{to:"/status"}},[t._v("动态")])],1),t._v(" "),n("div",{staticClass:"index"},[n("nuxt-link",{attrs:{to:"/post"}},[t._v("发布")])],1),t._v(" "),n("div",{staticClass:"index"},[n("nuxt-link",{attrs:{to:"/msg"}},[t._v("消息")])],1),t._v(" "),n("div",{staticClass:"my",on:{click:t.toPersonInfo}},[n("span",[t._v("我的")])])])],1)},[],!1,null,"6e50b62a",null);e.a=component.exports},202:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("779199c4",content,!0,{sourceMap:!1})},203:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("0700fe0b",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var o=n(202);n.n(o).a},230:function(t,e,n){(t.exports=n(34)(!1)).push([t.i,"header[data-v-23a1a360]{width:100%;height:4rem;padding:.5rem;line-height:3rem;background:#2d8cf0;color:#fff;position:absolute;z-index:5;top:0}header .ym-avatar[data-v-23a1a360]{cursor:pointer}header .ym-avatar .avatar img[data-v-23a1a360]{width:40px;height:40px;line-height:40px;text-align:center;border-radius:100%;cursor:pointer}header .ym-logo[data-v-23a1a360]{text-align:center}header .ym-search[data-v-23a1a360]{text-align:right}",""])},231:function(t,e,n){"use strict";var o=n(203);n.n(o).a},232:function(t,e,n){(t.exports=n(34)(!1)).push([t.i,".info-top[data-v-63dccbeb]{width:100%;overflow:auto;top:4rem;position:absolute;z-index:10;bottom:2rem;background:#f5f5f5}.info-top .user-info[data-v-63dccbeb]{padding:8px 10px}.info-top .user-info .c-avatar img[data-v-63dccbeb]{width:50px;height:50px;border-radius:4px;line-height:50px;text-align:center;cursor:pointer}.info-top .user-info .edit-label[data-v-63dccbeb]{color:#808695;font-size:.8rem}.info-top .user-info .edit-level span[data-v-63dccbeb]{display:inline-block}.info-top .user-info .edit-level span.user-name[data-v-63dccbeb]{font-size:1rem}.info-top .user-info .edit-level span.level[data-v-63dccbeb]{margin-left:.8rem}.info-top .user-info .edit-level span.info-label[data-v-63dccbeb]{border-radius:.2rem;background:#46c1d3;padding:2px 3px;font-size:.4rem;color:#fff}.info-top .user-info .edit-data[data-v-63dccbeb]{text-align:center}.info-top .user-info .edit-data.user-data[data-v-63dccbeb]{font-size:1rem}.info-top .user-info .edit-data.mark[data-v-63dccbeb]{font-size:1rem;color:#e0482c}.info-top .score-box[data-v-63dccbeb]{padding:5px 10px}.info-top .daily-box[data-v-63dccbeb]{padding:5px 10px;background:#fcfcfc}.info-top .daily-box .title[data-v-63dccbeb]{padding-left:.7rem;position:relative}.info-top .daily-box .title .before[data-v-63dccbeb]{width:3px;height:100%;background:#46c1d3;position:absolute;top:0;left:1px}.info-top .daily-box .kind[data-v-63dccbeb]{font-size:0;padding-bottom:.28rem;height:135px}.info-top .daily-box .kind a[data-v-63dccbeb]{display:block;vertical-align:middle;color:#222;font-size:0;margin-top:.5rem;width:20%;text-align:center;line-height:1.22;cursor:pointer}.info-top .daily-box .kind a img[data-v-63dccbeb]{width:2rem;height:2rem;display:block;margin-left:auto;margin-right:auto;margin-bottom:.5rem}.info-top .daily-box .kind a span[data-v-63dccbeb]{color:#222;font-size:.22rem}",""])},262:function(t,e,n){"use strict";n.r(e);var o=n(9),r=n(19),footer=n(188),c={data:function(){return{}},methods:Object(o.a)({clickAvatar:function(){console.log("test"),this.$router.push("/info")},quitModal:function(){this.CHANGECURRENT_LOGIN(!0),this.QUITlOGIN_LOADING(!1)}},Object(r.c)(["CHANGECURRENT_LOGIN","QUITlOGIN_LOADING"])),components:{}},l=(n(229),n(18)),d=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("Row",{attrs:{type:"flex",justify:"space-between"}},[o("Col",{attrs:{span:"6","class-name":"ym-avatar"}},[o("div",{staticClass:"avatar",on:{click:t.clickAvatar}})]),t._v(" "),o("Col",{attrs:{span:"12","class-name":"ym-logo"}},[o("img",{staticStyle:{height:"3rem"},attrs:{src:n(187)}})]),t._v(" "),o("Col",{attrs:{span:"6","class-name":"ym-search"}},[o("Icon",{attrs:{type:"md-settings",size:"30"},on:{click:function(e){return e.stopPropagation(),t.quitModal(e)}}})],1)],1)],1)},[],!1,null,"23a1a360",null).exports,v={data:function(){return{defaultAvatar:"http://www.xinfangquan.cn/images/default_avatar.jpg",kinds:[{imageUrl:"http://pic.app.0550.com/_20180627152452_5b333bc476458.png",name:"新房"},{imageUrl:"http://pic.app.0550.com/_20180627152452_5b333bc476458.png",name:"求职招聘"},{imageUrl:"http://pic.app.0550.com/_20180627152452_5b333bc476458.png",name:"同城交友"},{imageUrl:"http://pic.app.0550.com/_20180627152452_5b333bc476458.png",name:"新房"},{imageUrl:"http://pic.app.0550.com/_20180627152452_5b333bc476458.png",name:"求职招聘"},{imageUrl:"http://pic.app.0550.com/_20180627152452_5b333bc476458.png",name:"同城交友"},{imageUrl:"http://pic.app.0550.com/_20180627152452_5b333bc476458.png",name:"新房"},{imageUrl:"http://pic.app.0550.com/_20180627152452_5b333bc476458.png",name:"求职招聘"},{imageUrl:"http://pic.app.0550.com/_20180627152452_5b333bc476458.png",name:"同城交友"}]}},computed:Object(o.a)({keepLogin:{get:function(){return this.$store.state.keepLogin},set:function(){}}},Object(r.d)(["userInfo","showLoginLoading"])),methods:Object(o.a)({editData:function(){this.$router.push("/info/edit")},quitModal:function(){this.CHANGECURRENT_LOGIN(!0)},cancelQuit:function(){this.CHANGECURRENT_LOGIN(!1)},sureQuit:function(){this.QUITlOGIN_LOADING(!0),this.CHANGECURRENT_LOGIN(!1),this.CAHNGEUSER_INFO({}),sessionStorage.clear(),this.$router.push("/")}},Object(r.c)(["CHANGECURRENT_LOGIN","QUITlOGIN_LOADING","CAHNGEUSER_INFO"])),components:{vFooter:footer.a,vHeader:d}},f=(n(231),Object(l.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("v-header"),t._v(" "),n("div",{staticClass:"info-top"},[n("Row",{attrs:{"class-name":"user-info"}},[n("Col",{attrs:{span:"4"}},[n("div",{staticClass:"c-avatar"},[(t.userInfo.avatar,n("img",{attrs:{src:t.defaultAvatar}}))])]),t._v(" "),n("Col",{attrs:{span:"18"}},[n("Col",{attrs:{span:"24","class-name":"edit-level"}},[n("span",{staticClass:"user-name"},[t._v(t._s(t.userInfo.user_name))]),t._v(" "),n("span",{staticClass:"info-label level"},[t._v("LV1")]),t._v(" "),n("span",{staticClass:"info-label tag"},[t._v("举人")])]),t._v(" "),n("Col",{staticClass:"margin-top5",attrs:{span:"24","class-name":"edit-label"}},[t._v("\n                还没有个性签名，快去编辑吧!\n             ")])],1),t._v(" "),n("Col",{staticClass:"margin-top10",attrs:{span:"24"}},[n("Col",{attrs:{span:"12"}},[n("div",{staticClass:"edit-data user-data",on:{click:function(e){return e.stopPropagation(),t.editData(e)}}},[n("Icon",{attrs:{type:"ios-create-outline",size:"16"}}),t._v("\n                     编辑资料\n                 ")],1)]),t._v(" "),n("Col",{attrs:{span:"12"}},[n("div",{staticClass:"edit-data mark"},[n("Icon",{attrs:{type:"ios-create-outline",size:"16"}}),t._v("\n                     每日签到\n                 ")],1)])],1)],1),t._v(" "),n("Row",{attrs:{"class-name":"score-box"}},[n("Card",{staticStyle:{height:"60px","text-align":"center"},attrs:{bordered:!1}},[n("Col",{attrs:{span:"6"}},[t._v("\n                 0.00"),n("br"),t._v("\n                 钱包\n             ")]),t._v(" "),n("Col",{attrs:{span:"6"}},[t._v("\n                 0.00"),n("br"),t._v("\n                 金币")]),t._v(" "),n("Col",{attrs:{span:"6"}},[t._v("\n                 0"),n("br"),t._v("\n                 礼物\n             ")]),t._v(" "),n("Col",{attrs:{span:"6"}},[t._v("\n                 LV1"),n("br"),t._v("\n                 等级\n             ")])],1)],1),t._v(" "),n("Row",{attrs:{"class-name":"daily-box"}},[n("h5",{staticClass:"title"},[t._v("\n             日常管理\n             "),n("span",{staticClass:"before"})]),t._v(" "),n("div",{staticClass:"kind clearfix"},t._l(t.kinds,function(e,o){return n("a",{key:o,staticClass:"left"},[n("img",{attrs:{src:e.imageUrl}}),t._v(" "),n("span",[t._v(t._s(e.name))])])}),0)]),t._v(" "),n("Row",{attrs:{"class-name":"daily-box margin-top10"}},[n("h5",{staticClass:"title"},[t._v("\n             分类信息\n             "),n("span",{staticClass:"before"})]),t._v(" "),n("div",{staticClass:"kind clearfix"},t._l(t.kinds,function(e,o){return n("a",{key:o,staticClass:"left"},[n("img",{attrs:{src:e.imageUrl}}),t._v(" "),n("span",[t._v(t._s(e.name))])])}),0)]),t._v(" "),n("Row",{attrs:{"class-name":"daily-box margin-top10"}},[n("h5",{staticClass:"title"},[t._v("\n             其他\n             "),n("span",{staticClass:"before"})]),t._v(" "),n("div",{staticClass:"kind clearfix"},t._l(t.kinds,function(e,o){return n("a",{key:o,staticClass:"left"},[n("img",{attrs:{src:e.imageUrl}}),t._v(" "),n("span",[t._v(t._s(e.name))])])}),0)])],1),t._v(" "),n("v-footer"),t._v(" "),n("Modal",{attrs:{width:"280"},on:{"on-cancel":t.cancelQuit},model:{value:t.keepLogin,callback:function(e){t.keepLogin=e},expression:"keepLogin"}},[n("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"ios-information-circle"}}),t._v(" "),n("span",[t._v("温馨提示：")])],1),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("p",[t._v("退出登录之后,个人信息查看和修改")]),t._v(" "),n("p",[t._v("是否需要退出?")])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"error",size:"large",long:"",loading:t.showLoginLoading},on:{click:function(e){return e.stopPropagation(),t.sureQuit(e)}}},[t._v("退出登录")])],1)])],1)},[],!1,null,"63dccbeb",null));e.default=f.exports}}]);