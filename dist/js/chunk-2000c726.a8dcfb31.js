(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2000c726"],{"1dde":function(t,e,o){var n=o("d039"),i=o("b622"),r=o("2d00"),s=i("species");t.exports=function(t){return r>=51||!n((function(){var e=[],o=e.constructor={};return o[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"354e":function(t,e,o){"use strict";var n=o("e148"),i=o.n(n);i.a},"4de4":function(t,e,o){"use strict";var n=o("23e7"),i=o("b727").filter,r=o("1dde"),s=o("ae40"),d=r("filter"),a=s("filter");n({target:"Array",proto:!0,forced:!d||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,o){var n=o("861d"),i=o("e8b5"),r=o("b622"),s=r("species");t.exports=function(t,e){var o;return i(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!i(o.prototype)?n(o)&&(o=o[s],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},"78d8":function(t,e,o){},"7db0":function(t,e,o){"use strict";var n=o("23e7"),i=o("b727").find,r=o("44d2"),s=o("ae40"),d="find",a=!0,l=s(d);d in[]&&Array(1)[d]((function(){a=!1})),n({target:"Array",proto:!0,forced:a||!l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(d)},a227:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("div",{staticClass:"todo"},[o("v-content",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{xl:"10"}},[o("v-container",[o("create-to-do",{on:{addTodo:t.addTodo}}),o("to-do-list",{attrs:{todos:t.todos},on:{delTodo:t.delTodo,editTodo:t.editTodo,toogleState:t.toogleState}})],1)],1)],1)],1),t.isModalVisible?o("modal",{attrs:{oldText:t.activeTodo.text},on:{submitNewText:t.submitNewText}}):t._e()],1)])},i=[],r=(o("4de4"),o("7db0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition",{attrs:{name:"slide-fade"}},[t.todos.length?o("div",{staticClass:"list-wrapper"},[o("div",{staticClass:"list uncompletedList"},[o("h3",{staticClass:"mb-5 mt-5"},[t._v("Uncompleted ToDo's")]),this.uncompleted.length?o("v-list",{staticClass:"todo-list"},[o("transition-group",{attrs:{name:"slide-fade"}},t._l(t.uncompleted,(function(e){return o("to-do-item",{key:e.id,staticClass:"todo uncompletedTodo",attrs:{todo:e},on:{toogleState:t.toogleState,delTodo:t.delTodo,editTodo:t.editTodo}})})),1)],1):t._e()],1),o("div",{staticClass:"list completedList"},[o("h3",{staticClass:"mb-5 mt-5"},[t._v("Completed ToDo's")]),this.completed.length?o("v-list",{staticClass:"todo-list"},[o("transition-group",{attrs:{name:"slide-fade"}},t._l(t.completed,(function(e){return o("to-do-item",{key:e.id,staticClass:"todo completedTodo",attrs:{todo:e},on:{delTodo:t.delTodo,editTodo:t.editTodo,toogleState:t.toogleState}})})),1)],1):t._e()],1)]):t._e()])],1)}),s=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-list-item",{staticClass:"ml-3 list-item",attrs:{id:t.todo.id}},[o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-checkbox",{staticClass:"checkbox",model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),o("v-col",{staticClass:"text-left"},[o("p",{staticClass:"todo-text ma-0",class:{completed:t.todo.isCompleted}},[t._v(t._s(t.todo.text))])]),o("v-btn",{staticClass:"edit-btn",attrs:{icon:"",small:"",color:"primary"},on:{click:t.editHandler}},[o("v-icon",[t._v("mdi-pencil")])],1),o("v-btn",{staticClass:"del-btn",attrs:{icon:"",small:"",color:"primary"},on:{click:t.delHandler}},[o("v-icon",[t._v("mdi-delete")])],1)],1)],1),o("v-divider",{attrs:{dark:""}})],1)},a=[],l={name:"ToDoItem",props:{todo:{type:Object,require:!0}},computed:{checked:{get:function(){return this.todo.isCompleted},set:function(){this.$emit("toogleState",this.todo.id)}}},methods:{editHandler:function(){this.$emit("editTodo",this.todo.id)},delHandler:function(){this.$emit("delTodo",this.todo.id)}}},c=l,u=(o("354e"),o("2877")),f=Object(u["a"])(c,d,a,!1,null,null,null),p=f.exports,m={components:{ToDoItem:p},props:{todos:{type:Array,require:!0}},computed:{completed:function(){return this.todos.filter((function(t){return 1==t.isCompleted}))},uncompleted:function(){return this.todos.filter((function(t){return 0==t.isCompleted}))}},methods:{delTodo:function(t){this.$emit("delTodo",t)},editTodo:function(t){this.$emit("editTodo",t)},toogleState:function(t){this.$emit("toogleState",t)}}},v=m,h=(o("a7a4"),Object(u["a"])(v,r,s,!1,null,null,null)),b=h.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"todolist__input",attrs:{justify:"center",align:"center"}},[o("v-col",[o("v-text-field",{ref:"input",attrs:{label:"New task",rules:t.nameRules,clearable:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),o("v-col",{attrs:{cols:"auto"}},[o("v-btn",{attrs:{depressed:"",medium:"",color:"primary",disabled:!t.text},on:{click:t.addHandler}},[t._v("Add")])],1)],1)},x=[],g=o("ec26"),y={data:function(){return{text:"",nameRules:[function(t){return!!t||"Text is required!"}]}},methods:{addHandler:function(){this.$emit("addTodo",{id:Object(g["a"])(),text:this.text,isCompleted:!1}),this.$refs.input.resetValidation(),this.text=""}}},C=y,w=Object(u["a"])(C,T,x,!1,null,null,null),k=w.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("Enter new text")]),o("v-container",[o("v-text-field",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editHandler(e)}},model:{value:t.newText,callback:function(e){t.newText=e},expression:"newText"}})],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"modal-default-button",attrs:{color:"primary",dark:""},on:{click:t.editHandler}},[t._v("Change")])],1)],1)],1)},S=[],A={name:"Modal",props:{oldText:String},data:function(){return{newText:this.oldText,dialog:!0}},methods:{editHandler:function(){this.$emit("submitNewText",this.newText),this.dialog=!1}}},$=A,j=Object(u["a"])($,_,S,!1,null,null,null),O=j.exports,E={data:function(){return{todos:[],isModalVisible:!1,activeTodo:{}}},name:"App",components:{ToDoList:b,CreateToDo:k,Modal:O},methods:{addTodo:function(t){this.todos.push(t)},delTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))},toogleState:function(t){this.activeTodo=this.todos.find((function(e){return e.id===t})),this.activeTodo.isCompleted=!this.activeTodo.isCompleted},editTodo:function(t){this.isModalVisible=!0,this.activeTodo=this.todos.find((function(e){return e.id===t}))},submitNewText:function(t){this.activeTodo.text=t,this.isModalVisible=!1}},mounted:function(){var t=JSON.parse(localStorage.getItem("tasks"));t&&(this.todos=t)},watch:{todos:{deep:!0,handler:function(t){localStorage.setItem("tasks",JSON.stringify(t))}}}},V=E,H=Object(u["a"])(V,n,i,!1,null,null,null);e["default"]=H.exports},a7a4:function(t,e,o){"use strict";var n=o("78d8"),i=o.n(n);i.a},ae40:function(t,e,o){var n=o("83ab"),i=o("d039"),r=o("5135"),s=Object.defineProperty,d={},a=function(t){throw t};t.exports=function(t,e){if(r(d,t))return d[t];e||(e={});var o=[][t],l=!!r(e,"ACCESSORS")&&e.ACCESSORS,c=r(e,0)?e[0]:a,u=r(e,1)?e[1]:void 0;return d[t]=!!o&&!i((function(){if(l&&!n)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:a}):t[1]=1,o.call(t,c,u)}))}},b727:function(t,e,o){var n=o("0366"),i=o("44ad"),r=o("7b0b"),s=o("50c4"),d=o("65f0"),a=[].push,l=function(t){var e=1==t,o=2==t,l=3==t,c=4==t,u=6==t,f=5==t||u;return function(p,m,v,h){for(var b,T,x=r(p),g=i(x),y=n(m,v,3),C=s(g.length),w=0,k=h||d,_=e?k(p,C):o?k(p,0):void 0;C>w;w++)if((f||w in g)&&(b=g[w],T=y(b,w,x),t))if(e)_[w]=T;else if(T)switch(t){case 3:return!0;case 5:return b;case 6:return w;case 2:a.call(_,b)}else if(c)return!1;return u?-1:l||c?c:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e148:function(t,e,o){},e8b5:function(t,e,o){var n=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ec26:function(t,e,o){"use strict";var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),i=new Uint8Array(16);function r(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}for(var s=[],d=0;d<256;++d)s[d]=(d+256).toString(16).substr(1);function a(t,e){var o=e||0,n=s;return[n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]]].join("")}var l=a;function c(t,e,o){var n=e&&o||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null),t=t||{};var i=t.random||(t.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var s=0;s<16;++s)e[n+s]=i[s];return e||l(i)}e["a"]=c}}]);
//# sourceMappingURL=chunk-2000c726.a8dcfb31.js.map