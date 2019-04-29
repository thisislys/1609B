(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19c73986"],{2017:function(e,n,t){"use strict";var s=t("3b76"),o=t.n(s);o.a},"3b76":function(e,n,t){},"9ed6":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("login.title"))+"\n      ")]),e._v(" "),t("lang-select",{staticClass:"set-language"})],1),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{ref:"username",attrs:{placeholder:e.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),e._v(" "),t("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(n){e.capsTooltip=n},expression:"capsTooltip"}},[t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleLogin(n)}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),e._v(" "),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v("\n      "+e._s(e.$t("login.logIn"))+"\n    ")])],1),e._v(" "),t("el-dialog",{attrs:{title:e.$t("login.thirdparty"),visible:e.showDialog},on:{"update:visible":function(n){e.showDialog=n}}},[e._v("\n    "+e._s(e.$t("login.thirdpartyTips"))+"\n    "),t("br"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("social-sign")],1)],1)},o=[],a=(t("96cf"),t("3b8d")),i=t("cebc"),r=(t("61f7"),t("1131")),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"social-signup-container"},[t("div",{staticClass:"sign-btn",on:{click:function(n){return e.wechatHandleClick("wechat")}}},[t("span",{staticClass:"wx-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),e._v(" 微信\n  ")]),e._v(" "),t("div",{staticClass:"sign-btn",on:{click:function(n){return e.tencentHandleClick("tencent")}}},[t("span",{staticClass:"qq-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),e._v(" QQ\n  ")])])},c=[],u={name:"SocialSignin",methods:{wechatHandleClick:function(e){alert("ok")},tencentHandleClick:function(e){alert("ok")}}},p=u,d=(t("fa51"),t("2877")),g=Object(d["a"])(p,l,c,!1,null,"867673f8",null),m=g.exports,f=t("2f62"),v={name:"Login",components:{LangSelect:r["a"],SocialSign:m},data:function(){var e=function(e,n,t){n?t():t(new Error("Please enter the correct user name"))},n=function(e,n,t){n.length<6?t(new Error("The password can not be less than 6 digits")):t()};return{loginForm:{username:"chenmanjie",password:"Chenmanjie123!"},loginRules:{username:[{required:!0,trigger:"blur"},{trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:n}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:Object(i["a"])({},Object(f["b"])({login:"user/login"}),{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},handleLogin:function(){var e=this;console.log("登陆按钮点击..."),_hmt.push(["_trackEvent","考试管理平台","tap","登陆按钮点击"]),this.$refs.loginForm.validate(function(){var n=Object(a["a"])(regeneratorRuntime.mark(function n(t){var s;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!t){n.next=11;break}return console.log(e.loginForm),e.loading=!0,n.next=5,e.login(e.loginForm);case 5:s=n.sent,console.log("login res...",s),1==s.code&&e.$router.push({path:e.redirect||"/"}),e.loading=!1,n.next=13;break;case 11:return console.log("error submit!!"),n.abrupt("return",!1);case 13:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}())}})},h=v,w=(t("2017"),t("dc79"),Object(d["a"])(h,s,o,!1,null,"1b1de112",null));n["default"]=w.exports},ad1e:function(e,n,t){},dc79:function(e,n,t){"use strict";var s=t("ad1e"),o=t.n(s);o.a},ea38:function(e,n,t){},fa51:function(e,n,t){"use strict";var s=t("ea38"),o=t.n(s);o.a}}]);