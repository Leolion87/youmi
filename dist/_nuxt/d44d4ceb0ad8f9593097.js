(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(e,t,n){var content=n(281);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("2a3c57b7",content,!0,{sourceMap:!1})},280:function(e,t,n){"use strict";var o=n(249);n.n(o).a},281:function(e,t,n){(e.exports=n(40)(!1)).push([e.i,".auth[data-v-97d9cd5e]{height:100%}.auth .auth-top[data-v-97d9cd5e]{height:3.5rem;width:100%;background:#2d8cf0;font-size:1rem;text-align:center;line-height:3.5rem;color:#fff}.auth .auth-content[data-v-97d9cd5e]{padding:5px 8px;font-size:1rem}.demo-upload-list[data-v-97d9cd5e]{display:inline-block;width:60px;height:60px;text-align:center;line-height:60px;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:4px}.demo-upload-list img[data-v-97d9cd5e]{width:100%;height:100%}.demo-upload-list-cover[data-v-97d9cd5e]{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.demo-upload-list:hover .demo-upload-list-cover[data-v-97d9cd5e]{display:block}.demo-upload-list-cover i[data-v-97d9cd5e]{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}.auth-content .item-title[data-v-97d9cd5e]{line-height:32px;text-align:right}",""])},304:function(e,t,n){"use strict";n.r(t);n(42);var o={data:function(){return{province:"",city:"",county:"",cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}],companyName:"",defaultList:[{name:"a42bdcc1178e62b4694c830f028db5c0",url:"https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"},{name:"bc7521e033abdd1e92222d733590f104",url:"https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar"}],imgName:"",visible:!1,uploadList:[],companyHuman:"",companyHumanNumber:[{value:"1",label:"10人以下"},{value:"2",label:"10-20人"}]}},mounted:function(){},methods:{show:function(){this.$refs.picker.show()},select:function(){this.text=arguments,console.log("select",arguments)},handleView:function(e){this.imgName=e,this.visible=!0},handleRemove:function(e){var t=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(t.indexOf(e),1)},handleSuccess:function(e,t){t.url="https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar",t.name="7eb99afb9d5f317c912f08b5212fd69a"},handleFormatError:function(e){this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+e.name+" is incorrect, please select jpg or png."})},handleMaxSize:function(e){this.$Notice.warning({title:"Exceeding file size limit",desc:"File  "+e.name+" is too large, no more than 2M."})},handleBeforeUpload:function(){var e=this.uploadList.length<5;return e||this.$Notice.warning({title:"Up to five pictures can be uploaded."}),e}},components:{}},l=(n(280),n(20)),component=Object(l.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth"},[n("header",{staticClass:"auth-top"},[e._v("\n        认证中心\n    ")]),e._v(" "),n("section",{staticClass:"auth-content"},[n("Row",{attrs:{"class-name":"margin-top15"}},[n("Col",{attrs:{span:"5","class-name":"item-title"}},[e._v("\n              地址:\n              \n            ")]),e._v(" "),n("Col",{attrs:{span:"18",offset:"1"}},[n("Col",{attrs:{span:"6"}},[n("Select",{model:{value:e.province,callback:function(t){e.province=t},expression:"province"}},e._l(e.cityList,function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),e._v(" "),n("Col",{attrs:{span:"6",offset:"2"}},[n("Select",{model:{value:e.province,callback:function(t){e.province=t},expression:"province"}},e._l(e.cityList,function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),e._v(" "),n("Col",{attrs:{span:"6",offset:"2"}},[n("Select",{model:{value:e.province,callback:function(t){e.province=t},expression:"province"}},e._l(e.cityList,function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1)],1)],1),e._v(" "),n("Row",{attrs:{"class-name":"margin-top15"}},[n("Col",{attrs:{span:"5","class-name":"item-title"}},[e._v("\n              公司:\n            ")]),e._v(" "),n("Col",{attrs:{span:"18",offset:"1"}},[n("Input",{attrs:{placeholder:"公司名称"},model:{value:e.companyName,callback:function(t){e.companyName=t},expression:"companyName"}})],1)],1),e._v(" "),n("Row",{attrs:{"class-name":"margin-top15"}},[n("Col",{attrs:{span:"5","class-name":"item-title"}},[e._v("\n              身份证:\n            ")]),e._v(" "),n("Col",{attrs:{span:"18",offset:"1"}},[e._l(e.uploadList,function(t,o){return n("div",{key:o,staticClass:"demo-upload-list"},["finished"===t.status?[n("img",{attrs:{src:t.url}}),e._v(" "),n("div",{staticClass:"demo-upload-list-cover"},[n("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(n){return e.handleView(t.name)}}}),e._v(" "),n("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(n){return e.handleRemove(t)}}})],1)]:[t.showProgress?n("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)}),e._v(" "),n("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,multiple:"",type:"drag",action:"//jsonplaceholder.typicode.com/posts/"}},[n("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[n("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),e._v(" "),n("Modal",{attrs:{title:"View Image"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?n("img",{staticStyle:{width:"100%"},attrs:{src:"https://o5wwk8baw.qnssl.com/"+e.imgName+"/large"}}):e._e()])],2)],1),e._v(" "),n("Row",{attrs:{"class-name":"margin-top15"}},[n("Col",{attrs:{span:"5","class-name":"item-title"}},[e._v("\n            电话:\n            ")]),e._v(" "),n("Col",{attrs:{span:"18",offset:"1"}},[n("Input",{attrs:{placeholder:"公司电话"},model:{value:e.companyName,callback:function(t){e.companyName=t},expression:"companyName"}})],1)],1),e._v(" "),n("Row",{attrs:{"class-name":"margin-top15"}},[n("Col",{attrs:{span:"5","class-name":"item-title"}},[e._v("\n                公司规模:\n            ")]),e._v(" "),n("Col",{attrs:{span:"18",offset:"1"}},[n("Select",{staticStyle:{width:"200px"},model:{value:e.companyHuman,callback:function(t){e.companyHuman=t},expression:"companyHuman"}},e._l(e.companyHumanNumber,function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v("\n                         "+e._s(t.label)+"\n                    ")])}),1)],1)],1),e._v(" "),n("Row",{attrs:{"class-name":"margin-top15"}},[n("Col",{attrs:{span:"5","class-name":"item-title"}},[e._v("\n               详情展示:\n            ")]),e._v(" "),n("Col",{attrs:{span:"18",offset:"1"}},[e._v("\n                234234243\n            ")])],1),e._v(" "),n("Row",{attrs:{"class-name":"margin-top15"}},[n("Col",{attrs:{span:"5","class-name":"item-title"}},[e._v("\n               公司简介:\n            ")]),e._v(" "),n("Col",{attrs:{span:"18",offset:"1"}},[e._v("\n                234234243\n            ")])],1),e._v(" "),n("Row",{attrs:{"class-name":"margin-top15"}},[n("Col",{attrs:{span:"5","class-name":"item-title"}},[e._v("\n               团队照片:\n            ")]),e._v(" "),n("Col",{attrs:{span:"18",offset:"1"}},[e._v("\n                234234243\n            ")])],1)],1)])},[],!1,null,"97d9cd5e",null);t.default=component.exports}}]);