(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-parse/components/uv-parse/node/node"],{2573:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={name:"node",options:{virtualHost:!0},data:function(){return{ctrl:{},isiOS:t.getSystemInfoSync().system.includes("iOS")}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:function(){Promise.resolve().then(function(){return resolve(e("3713"))}.bind(null,e)).catch(e.oe)}},mounted:function(){var t=this;this.$nextTick((function(){for(t.root=t.$parent;"mp-html"!==t.root.$options.name;t.root=t.root.$parent);}))},beforeDestroy:function(){},methods:{toJSON:function(){return this},play:function(i){if(this.root.$emit("play"),this.root.pauseVideo){for(var e=!1,o=i.target.id,n=this.root._videos.length;n--;)this.root._videos[n].id===o?e=!0:this.root._videos[n].pause();if(!e){var r=t.createVideoContext(o,this);r.id=o,this.root.playbackRate&&r.playbackRate(this.root.playbackRate),this.root._videos.push(r)}}},imgTap:function(i){var e=this.childs[i.currentTarget.dataset.i];e.a?this.linkTap(e.a):e.attrs.ignore||(this.root.$emit("imgtap",e.attrs),this.root.previewImg&&t.previewImage({showmenu:this.root.showImgMenu,current:parseInt(e.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var i=t.currentTarget.dataset.i;this.childs[i].w?(this.opts[1]&&!this.ctrl[i]||-1===this.ctrl[i])&&this.$set(this.ctrl,i,1):this.$set(this.ctrl,i,t.detail.width),this.checkReady()},checkReady:function(){var t=this;this.root&&!this.root.lazyLoad&&(this.root._unloadimgs-=1,this.root._unloadimgs||setTimeout((function(){t.root.getRect().then((function(i){t.root.$emit("ready",i)})).catch((function(){t.root.$emit("ready",{})}))}),350))},linkTap:function(i){var e=i.currentTarget?this.childs[i.currentTarget.dataset.i]:{},o=e.attrs||i,n=o.href;this.root.$emit("linktap",Object.assign({innerText:this.root.getText(e.children||[])},o)),n&&("#"===n[0]?this.root.navigateTo(n.substring(1)).catch((function(){})):n.split("?")[0].includes("://")?this.root.copyLink&&t.setClipboardData({data:n,success:function(){return t.showToast({title:"链接已复制"})}}):t.navigateTo({url:n,fail:function(){t.switchTab({url:n,fail:function(){}})}}))},mediaError:function(t){var i=t.currentTarget.dataset.i,e=this.childs[i];if("video"===e.name||"audio"===e.name){var o=(this.ctrl[i]||0)+1;if(o>e.src.length&&(o=0),o<e.src.length)return void this.$set(this.ctrl,i,o)}else"img"===e.name&&(this.opts[2]&&this.$set(this.ctrl,i,-1),this.checkReady());this.root&&this.root.$emit("error",{source:e.name,attrs:e.attrs,errMsg:t.detail.errMsg})}}};i.default=o}).call(this,e("543d")["default"])},"306b":function(t,i,e){},3713:function(t,i,e){"use strict";e.r(i);var o=e("c232"),n=e("d399");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("e86b");var s=e("f0c5"),a=e("9b4a"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);"function"===typeof a["a"]&&Object(a["a"])(c),i["default"]=c.exports},"9b4a":function(t,i,e){"use strict";i["a"]=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])}},c232:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},n=[]},d399:function(t,i,e){"use strict";e.r(i);var o=e("2573"),n=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(r);i["default"]=n.a},e86b:function(t,i,e){"use strict";var o=e("306b"),n=e.n(o);n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-parse/components/uv-parse/node/node-create-component',
    {
        'uni_modules/uv-parse/components/uv-parse/node/node-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3713"))
        })
    },
    [['uni_modules/uv-parse/components/uv-parse/node/node-create-component']]
]);
