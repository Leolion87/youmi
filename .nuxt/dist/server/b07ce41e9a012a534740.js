exports.ids=[13],exports.modules={123:function(e,t,o){"use strict";o.r(t);var r=o(89),n=o.n(r);for(var l in r)"default"!==l&&function(e){o.d(t,e,function(){return r[e]})}(l);t.default=n.a},124:function(e,t,o){(e.exports=o(3)(!1)).push([e.i,"h1[data-v-6e4530e8],h2[data-v-6e4530e8]{font-weight:400}ul[data-v-6e4530e8]{list-style-type:none;padding:0}li[data-v-6e4530e8]{display:inline-block;margin:0 10px}a[data-v-6e4530e8]{color:#42b983}.login-box[data-v-6e4530e8]{height:400px;margin-top:2rem}.login .top[data-v-6e4530e8]{text-align:center;padding:1rem .5rem;background:#2d8cf0}",""])},134:function(e,t,o){"use strict";o.r(t);var r=o(86),n=o(2),l={name:"login",data:()=>({formInline:{phone:"",userName:"",password:""},ruleInline:{phone:[{required:!0,message:"请填写手机号",trigger:"blur"}],userName:[{required:!0,message:"请填写用户名",trigger:"blur"}],password:[{required:!0,message:"请填写密码.",trigger:"blur"},{type:"string",min:6,max:8,message:"密码长度6-8位,且以两个英文字母开头。",trigger:"blur"}]},showPhoneItem:!0,verify_code:""}),methods:{login(e){this.$refs[e].validate(e=>{if(e){let e={name:this.formInline.userName,pwd:this.formInline.password};r.a.userLogin(e).then(e=>{200==e.code?(console.log(e.data),this.$Message.success(e.msg),this.$router.push("/"),sessionStorage.setItem("userName",e.data.user_name),sessionStorage.setItem("userPwd",e.data.user_pwd),this.CAHNGEUSER_INFO(e.data)):this.$Message.error(e.msg)},e=>{console.log(e)})}else this.$Message.error("请输入有效的用户名和密码！")})},toRegister(){this.$router.push("/info/register")},findPassWord(){this.$router.push("/info/findPassword")},useNameLogin(){this.showPhoneItem=!1},usePhoneLogin(){this.showPhoneItem=!0},...Object(n.mapMutations)(["CAHNGEUSER_INFO"]),...Object(n.mapActions)(["userLogin"])}},c=o(1);var component=Object(c.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[e._ssrNode('<div class="top" data-v-6e4530e8><img'+e._ssrAttr("src",o(67))+' style="height:2rem;" data-v-6e4530e8></div> '),r("Row",{staticClass:"login-box",attrs:{type:"flex",justify:"center"}},[r("Col",{staticStyle:{"max-width":"400px"},attrs:{span:"20"}},[r("Form",{ref:"formInline",staticStyle:{"min-height":"300px"},attrs:{model:e.formInline,rules:e.ruleInline}},[0==e.showPhoneItem?r("FormItem",{attrs:{prop:"userName"}},[r("Input",{attrs:{type:"text",placeholder:"用户名"},model:{value:e.formInline.userName,callback:function(t){e.$set(e.formInline,"userName",t)},expression:"formInline.userName"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1):e._e(),e._v(" "),0==e.showPhoneItem?r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1):e._e(),e._v(" "),1==e.showPhoneItem?r("FormItem",{attrs:{prop:"phone"}},[r("Row",{attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"18"}},[r("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"手机号"},model:{value:e.formInline.phone,callback:function(t){e.$set(e.formInline,"phone",t)},expression:"formInline.phone"}})],1),e._v(" "),r("Col",{attrs:{span:"4"}},[r("Button",{attrs:{type:"primary"}},[e._v("发送验证码")])],1)],1),e._v(" "),r("Row",{attrs:{type:"flex",justify:"center","class-name":"margin-top10"}},[r("Col",{attrs:{span:"18"}},[r("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"手机验证码"},model:{value:e.verify_code,callback:function(t){e.verify_code=t},expression:"verify_code"}})],1),e._v(" "),r("Col",{attrs:{span:"4"}},[r("Button",{attrs:{type:"primary"}},[e._v("登录")])],1)],1)],1):e._e(),e._v(" "),r("Row",[r("Col",{attrs:{span:"8"}},[r("p",{staticStyle:{"text-align":"left","margin-left":"10px"}},[e._v("忘记密码?\n                    "),r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return t.stopPropagation(),e.findPassWord(t)}}},[e._v("找回")])])]),e._v(" "),r("Col",{attrs:{span:"12",offset:"4"}},[r("p",{staticStyle:{"text-align":"left","margin-left":"10px"}},[e._v("\n                    其他方式登录:  \n                    "),1==e.showPhoneItem?r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return t.stopPropagation(),e.useNameLogin(t)}}},[e._v("用户名登录")]):r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return t.stopPropagation(),e.usePhoneLogin(t)}}},[e._v("手机号登录")])])])],1),e._v(" "),0==e.showPhoneItem?r("FormItem",{staticStyle:{"margin-top":"10px"}},[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.login("formInline")}}},[e._v("登  录")]),e._v(" "),r("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return t.stopPropagation(),e.toRegister(t)}}},[e._v("注册")])],1):e._e()],1)],1)],1)],2)},[],!1,function(e){var t=o(123);t.__inject__&&t.__inject__(e)},"6e4530e8","e5904942");t.default=component.exports},67:function(e,t,o){e.exports=o.p+"img/5e9847a.png"},86:function(e,t,o){"use strict";var r=o(16),n=o.n(r);o(62);function l(e,t){return new Promise((o,r)=>{n.a.post(e,t).then(e=>{o(e.data)}).catch(e=>{r(e)})})}n.a.defaults.timeout=5e4,n.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",n.a.defaults.baseURL="http://127.0.0.1:80/",t.a={userLogin:e=>l("/wapApi/index.php/user/login/login",e),uploadAvatar:e=>l("/wapApi/index.php/user/login/upload",e)}},89:function(e,t,o){var content=o(124);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=o(4).default;e.exports.__inject__=function(e){r("2c6b7673",content,!0,e)}}};
//# sourceMappingURL=b07ce41e9a012a534740.js.map