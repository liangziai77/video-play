(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4chd":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download",function(){return t("ndSh")}])},SYHN:function(e,n){e.exports=async function*(e,n,t){const r=new Set;async function a(){const[e,n]=await Promise.race(r);return r.delete(e),n}for(const o of n){const c=(async()=>await t(o,n))().then(e=>[c,e]);r.add(c),r.size>=e&&(yield await a())}for(;r.size;)yield await a()}},dRp5:function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),o=t("YFqc"),c=t.n(o),i=a.a.createElement;n.a=function(){return i("div",{className:"header"},i("h1",{className:"title"},i("a",{href:"/"},"Twitter \u89c6\u9891\u4e0b\u8f7d")),i("div",{className:"options-wrapper"},i("div",{className:"options"},i(c.a,{href:"/"},i("a",null,"\u4e0b\u8f7d\u89c6\u9891"))),i("div",{className:"options"},i("span",{className:"options-dot"}),)))}},ndSh:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o,c,i=[],u=!0,s=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(i.push(r.value),i.length!==n);u=!0);}catch(l){s=!0,a=l}finally{try{if(!u&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(s)throw a}}return i}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(n),t.d(n,"__N_SSP",(function(){return x}));var o=t("o0o1"),c=t.n(o),i=t("HaE+");function u(e){var n,t,r,a=2;for("undefined"!=typeof Symbol&&(t=Symbol.asyncIterator,r=Symbol.iterator);a--;){if(t&&null!=(n=e[t]))return n.call(e);if(r&&null!=(n=e[r]))return new s(n.call(e));t="@@asyncIterator",r="@@iterator"}throw new TypeError("Object is not async iterable")}function s(e){function n(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var n=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:n}}))}return(s=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return n(this.n.apply(this.s,arguments))},return:function(e){var t=this.s.return;return void 0===t?Promise.resolve({value:e,done:!0}):n(t.apply(this.s,arguments))},throw:function(e){var t=this.s.return;return void 0===t?Promise.reject(e):n(t.apply(this.s,arguments))}},new s(e)}var l=t("q1tI"),f=t.n(l),p=t("SYHN"),d=t.n(p),v=t("dRp5"),h=f.a.createElement,y=function(){var e=Object(i.a)(c.a.mark((function e(n){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(n.BaseURL).concat(n.EXT_X_MAP_URL)).then((function(e){return e.arrayBuffer()}));case 2:t=e.sent,n.EXT_X_MAP_DATA=t;case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(e,n){var t=e.byteLength,r=new Uint8Array(t+n.byteLength);return r.set(new Uint8Array(e),0),r.set(new Uint8Array(n),t),r},w=function(){var e=Object(i.a)(c.a.mark((function e(n,t,r){var o,s,l,f,p,v,h,y,w,b,_,x,A,g,T;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=n.BaseURL,s=n.EXT_X_MAP_DATA,l=[],f=function(){var e=Object(i.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t[n],e.next=3,fetch("".concat(o).concat(r.uri)).then((function(e){return e.arrayBuffer()}));case 3:return a=e.sent,e.abrupt("return",[a,n]);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=0,v=!0,h=!1,e.prev=6,w=u(d()(32,Array.from({length:t.length},(function(e,n){return n})),f));case 8:return e.next=10,w.next();case 10:return b=e.sent,v=b.done,e.next=14,b.value;case 14:if(_=e.sent,v){e.next=24;break}x=a(_,2),A=x[0],g=x[1],l[g]=0===g&&s?m(s,A):A,p++,T=(p/t.length*100).toFixed(2),null===r||void 0===r||r(T);case 21:v=!0,e.next=8;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(6),h=!0,y=e.t0;case 30:if(e.prev=30,e.prev=31,v||null==w.return){e.next=35;break}return e.next=35,w.return();case 35:if(e.prev=35,!h){e.next=38;break}throw y;case 38:return e.finish(35);case 39:return e.finish(30);case 40:return e.abrupt("return",l);case 41:case"end":return e.stop()}}),e,null,[[6,26,30,40],[31,,35,39]])})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(e){var n="Twitter_".concat((new Date).getTime(),".mp4"),t=new Blob(e,{type:"video/MP2T"}),r=document.createElement("a");r.download=n;var a=URL.createObjectURL(t);r.href=a,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(a)},_=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r,a,o,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.BaseURL,r=n.segments,a={BaseURL:"",EXT_X_MAP_URL:"",EXT_X_MAP_DATA:null},e.prev=2,console.log(r),a.BaseURL=t,a.EXT_X_MAP_URL=null===(o=r[0])||void 0===o?void 0:null===(i=o.map)||void 0===i?void 0:i.uri,!a.EXT_X_MAP_URL){e.next=9;break}return e.next=9,y(a);case 9:return e.next=11,w(a,r,(function(e){var n="<p>".concat(e,"%<p/>");"100.00"===e&&(n+="<p>\u4e0b\u8f7d\u5b8c\u6210</p>"),document.querySelector("#progress").innerHTML=n}));case 11:u=e.sent,b(u),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),console.log("\u4e0b\u8f7d\u5931\u8d25");case 19:return e.prev=19,e.finish(19);case 21:case"end":return e.stop()}}),e,null,[[2,15,19,21]])})));return function(n){return e.apply(this,arguments)}}(),x=!0;n.default=function(e){var n=e.BaseURL,t=e.segments;return n&&0!==t.length?h("div",null,h(v.a,null),h("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},h("button",{className:"submit-btn",onClick:function(){return _(e)}},"\u81ea\u52a8\u4e0b\u8f7d\u4e2d\u00b7\u00b7\u00b7\u0028\u70b9\u51fb\u91cd\u8bd5\u0029"),h("div",{id:"progress",className:"progress-container"}))):h("div",{style:{display:"flex",flexDirection:"column"}},h("p",{style:{margin:"30px"}},"\u672a\u627e\u5230\u6709\u6548\u7684\u94fe\u63a5\uff0c\u8be5\u89c6\u9891\u53ef\u80fd\u5df2\u88ab\u5220\u9664\uff0c\u6362\u4e00\u4e2a\u8bd5\u8bd5\u5427"),h("a",{href:"/"},"\u70b9\u6b64\u56de\u9996\u9875"))}}},[["4chd",0,1,2,3]]]);