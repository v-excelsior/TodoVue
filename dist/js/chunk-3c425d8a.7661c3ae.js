(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c425d8a"],{"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),c=n("9112");for(var a in i){var s=r[a],u=s&&s.prototype;if(u&&u.forEach!==o)try{c(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=n("ae40"),c=i("forEach"),a=o("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),c=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("5135"),c=Object.defineProperty,a={},s=function(t){throw t};t.exports=function(t,e){if(o(a,t))return a[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,f=o(e,0)?e[0]:s,l=o(e,1)?e[1]:void 0;return a[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,f,l)}))}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,c=o.toString,a=/^\s*function ([^ (]*)/,s="name";r&&!(s in o)&&i(o,s,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),c=n("50c4"),a=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(h,p,v,m){for(var L,b,y=o(h),S=i(y),g=r(p,v,3),C=c(S.length),E=0,x=m||a,w=e?x(h,C):n?x(h,0):void 0;C>E;E++)if((d||E in S)&&(L=S[E],b=g(L,E,y),t))if(e)w[E]=b;else if(b)switch(t){case 3:return!0;case 5:return L;case 6:return E;case 2:s.call(w,L)}else if(f)return!1;return l?-1:u||f?f:w}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ed81:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-content",[n("h2",{staticClass:"text-center mt-7"},[t._v("There is our users")]),n("v-list",{staticClass:"d-flex flex-wrap justify-space-between pa-10"},t._l(t.userList,(function(e){return n("v-card",{key:e.id,staticClass:"text-center mb-7",attrs:{width:"30%"},on:{click:t.dummyMethod}},[n("p",{staticClass:"font-weight-bold"},[t._v("Id: "+t._s(e.id))]),n("p",[t._v("Name: "+t._s(e.name))]),n("p",[t._v("Company: "+t._s(e.company))])])})),1)],1)],1)},i=[],o=(n("4160"),n("b0c0"),n("d3b7"),n("159b"),{data:function(){return{userList:[]}},methods:{dummyMethod:function(t){console.log(t.target)}},mounted:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){return e.forEach((function(e){return t.userList.push({id:e.id,name:e.name,company:e.company.name})}))}))}}),c=o,a=n("2877"),s=Object(a["a"])(c,r,i,!1,null,"20843af6",null);e["default"]=s.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3c425d8a.7661c3ae.js.map