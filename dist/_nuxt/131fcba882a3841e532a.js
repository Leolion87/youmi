(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{227:function(e,t,r){var content=r(233);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("62756c7f",content,!0,{sourceMap:!1})},232:function(e,t,r){"use strict";var l=r(227);r.n(l).a},233:function(e,t,r){(e.exports=r(40)(!1)).push([e.i,"h1[data-v-7f0ef735],h2[data-v-7f0ef735]{font-weight:400}ul[data-v-7f0ef735]{list-style-type:none;padding:0}li[data-v-7f0ef735]{display:inline-block;margin:0 10px}a[data-v-7f0ef735]{color:#42b983}.register[data-v-7f0ef735]{padding:8px}",""])},244:function(e,t,r){"use strict";r.r(t);r(42);var l={name:"register",data:function(){return{formValidate:{name:"",mail:"",password:"",repassword:"",interest:[],date:"",time:"",desc:""},ruleValidate:{name:[{required:!0,message:"用户名不能为空",trigger:"blur"}],mail:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式错误",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],repassword:[{required:!0,message:"密码不能为空",trigger:"blur"}],gender:[{required:!0,message:"Please select gender",trigger:"change"}],interest:[{required:!0,type:"array",min:1,message:"Choose at least one hobby",trigger:"change"},{type:"array",max:2,message:"Choose two hobbies at best",trigger:"change"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$Message.success("Success!"):t.$Message.error("Fail!")})},handleReset:function(e){this.$refs[e].resetFields()}}},o=(r(232),r(20)),component=Object(o.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("Row",{attrs:{type:"flex",justify:"center"}},[r("Col",{staticStyle:{"max-width":"400px"},attrs:{span:"20"}},[r("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[r("FormItem",{attrs:{label:"类型",prop:"gender"}},[r("RadioGroup",{model:{value:e.formValidate.gender,callback:function(t){e.$set(e.formValidate,"gender",t)},expression:"formValidate.gender"}},[r("Radio",{attrs:{label:"male"}},[e._v("普通会员")]),e._v(" "),r("Radio",{attrs:{label:"vip"}},[e._v("企业会员")])],1)],1),e._v(" "),r("FormItem",{attrs:{label:"用户名",prop:"name"}},[r("Input",{attrs:{placeholder:"请输入用户名"},model:{value:e.formValidate.name,callback:function(t){e.$set(e.formValidate,"name",t)},expression:"formValidate.name"}})],1),e._v(" "),r("FormItem",{attrs:{label:"密码",prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.formValidate.password,callback:function(t){e.$set(e.formValidate,"password",t)},expression:"formValidate.password"}})],1),e._v(" "),r("FormItem",{attrs:{label:"确认密码",prop:"repassword"}},[r("Input",{attrs:{placeholder:"请再次输入密码"},model:{value:e.formValidate.repassword,callback:function(t){e.$set(e.formValidate,"repassword",t)},expression:"formValidate.repassword"}})],1),e._v(" "),r("FormItem",{attrs:{label:"邮箱",prop:"mail"}},[r("Input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.formValidate.mail,callback:function(t){e.$set(e.formValidate,"mail",t)},expression:"formValidate.mail"}})],1),e._v(" "),r("FormItem",{attrs:{label:"爱好",prop:"desc"}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"个人描述"},model:{value:e.formValidate.desc,callback:function(t){e.$set(e.formValidate,"desc",t)},expression:"formValidate.desc"}})],1),e._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("注册")]),e._v(" "),r("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("取消")])],1)],1)],1)],1)],1)},[],!1,null,"7f0ef735",null);t.default=component.exports}}]);