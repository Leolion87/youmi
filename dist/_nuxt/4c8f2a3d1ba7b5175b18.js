(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{235:function(e,t,n){var content=n(254);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("50324250",content,!0,{sourceMap:!1})},253:function(e,t,n){"use strict";var r=n(235);n.n(r).a},254:function(e,t,n){(e.exports=n(40)(!1)).push([e.i,"h1[data-v-5ca9f3f3],h2[data-v-5ca9f3f3]{font-weight:400}ul[data-v-5ca9f3f3]{list-style-type:none;padding:0}li[data-v-5ca9f3f3]{display:inline-block;margin:0 10px}a[data-v-5ca9f3f3]{color:#42b983}.login-box[data-v-5ca9f3f3]{height:400px}",""])},271:function(e,t,n){"use strict";n.r(t);n(42);var r={name:"login",data:function(){return{formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"Please fill in the user name",trigger:"blur"}],password:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$Message.success("Success!"):t.$Message.error("Fail!")})}}},l=(n(253),n(20)),component=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("Row",{staticClass:"login-box",attrs:{type:"flex",justify:"center"}},[n("Col",{staticStyle:{"max-width":"400px"},attrs:{span:"20"}},[n("Form",{ref:"formInline",staticStyle:{"min-height":"300px"},attrs:{model:e.formInline,rules:e.ruleInline}},[n("FormItem",{attrs:{prop:"user"}},[n("Input",{attrs:{type:"text",placeholder:"Username"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),e._v(" "),n("p",{staticStyle:{"text-align":"left","margin-left":"10px"}},[e._v("忘记密码?\n           "),n("a",{attrs:{href:""}},[e._v("找回")])]),e._v(" "),n("FormItem",{staticStyle:{"margin-top":"10px"}},[n("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v("登录")]),e._v(" "),n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v("注册")])],1)],1)],1)],1)],1)},[],!1,null,"5ca9f3f3",null);t.default=component.exports}}]);