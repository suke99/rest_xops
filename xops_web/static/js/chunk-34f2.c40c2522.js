(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-34f2"],{"6pS9":function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"d",function(){return n}),o.d(e,"b",function(){return a}),o.d(e,"c",function(){return i});var r=o("t3Un");function s(t){return Object(r.a)({url:"api/connections/",method:"post",data:t})}function n(t){return Object(r.a)({url:"api/connections/"+t+"/",method:"get"})}function a(t){return Object(r.a)({url:"api/connections/"+t+"/",method:"delete"})}function i(t,e){return Object(r.a)({url:"api/connections/"+t+"/",method:"put",data:e})}},GCmw:function(t,e,o){},RdnZ:function(t,e,o){"use strict";o.r(e);var r=o("6pS9"),s={props:{service_types:{type:Array,default:null}},data:function(){return{is_add:!0,loading:!1,dialog:!1,form:{id:"",hostname:"",auth_type:null,username:"",password:"",port:"",desc:""},rules:{auth_type:[{required:!0,message:"请选择服务类型",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,t.is_add?t.doAdd():t.doEdit()})},doAdd:function(){var t=this;this.form.hostname=this.$parent.host,Object(r.a)(this.form).then(function(e){t.resetForm(),t.$message({showClose:!0,type:"success",message:"添加成功!",duration:2500}),t.loading=!1,t.$parent.init()}).catch(function(e){t.loading=!1,console.log(e)})},doEdit:function(){var t=this;Object(r.c)(this.form.id,this.form).then(function(e){t.resetForm(),t.$message({showClose:!0,type:"success",message:"修改成功!",duration:2500}),t.loading=!1,t.$parent.init()}).catch(function(e){t.loading=!1,console.log(e)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={hostname:"",auth_type:null,username:"",password:"",port:"",desc:""}}}},n=(o("ttZV"),o("KHd+")),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{"append-to-body":!0,visible:t.dialog,title:t.is_add?"新增密码":"编辑密码",width:"550px"},on:{"update:visible":function(e){t.dialog=e}}},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"100px"}},[o("el-form-item",{attrs:{label:"服务类型",prop:"auth_type"}},[o("el-select",{staticStyle:{width:"370px"},attrs:{placeholder:"请选择认证类型"},model:{value:t.form.auth_type,callback:function(e){t.$set(t.form,"auth_type",e)},expression:"form.auth_type"}},t._l(t.service_types,function(t){return o("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"用户名",prop:"username"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"密码/KEY",prop:"password"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"端口",prop:"port"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.port,callback:function(e){t.$set(t.form,"port",e)},expression:"form.port"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"备注"}},[o("el-input",{staticStyle:{width:"370px"},attrs:{rows:"4",type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)},[],!1,null,"0dd07df6",null);a.options.__file="form.vue";e.default=a.exports},ttZV:function(t,e,o){"use strict";var r=o("GCmw");o.n(r).a}}]);