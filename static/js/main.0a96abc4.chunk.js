(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(4),l=n.n(s),c=(n(13),n.p,n(14),n(0));var o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,l=e.getTTFB;n(t),a(t),i(t),s(t),l(t)}))},r=(n(16),n(5)),h=n(6),u=n(2),b=n(8),d=n(7),m={width:350,fontSize:12,fontFamily:"cursive"},j={display:"block",fontFamily:"cursive",fontSize:12,margin:2},p={width:350,fontFamily:"monospace",fontWeight:700},f={fontSize:13,fontFamily:"cursive"},y=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleSubmit=function(){var t=a.state.input.split(",");return""===a.state.input?alert("Enter what do you want to do!"):a.setState({input:"",toDoList:t})},a.state={input:"",toDoList:[]},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleReset=a.handleReset.bind(Object(u.a)(a)),a.handleClear=a.handleClear.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(t){this.setState({input:t.target.value})}},{key:"handleClear",value:function(){this.setState({toDoList:[]})}},{key:"handleReset",value:function(t){this.setState({input:""})}},{key:"listItem",value:function(){var t=this.state.toDoList.map((function(t){return Object(c.jsx)("li",{children:t})}));return 0===this.state.toDoList.length?null:Object(c.jsx)("ol",{style:j,className:"list-group-item active m-2",children:t})}},{key:"render",value:function(){return Object(c.jsx)("body",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{style:p,className:"navbar navbar-expand-lg navbar-light bg-white ml-2",children:"My-To-Do-List"}),Object(c.jsx)("hr",{className:"mt-5"}),Object(c.jsx)("textarea",{style:m,className:"md-textarea form-control form-control z-depth-1 m-2",value:this.state.input,onChange:this.handleChange,placeholder:"separate with comma"}),Object(c.jsx)("button",{style:f,className:"btn btn-secondary m-2",onClick:this.handleSubmit,children:"Submit"}),Object(c.jsx)("button",{style:f,className:"btn btn-primary",onClick:this.handleReset,children:"Reset"}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{className:"mt-5"}),0===this.state.toDoList.length&&Object(c.jsx)("h3",{style:{fontWeight:700},className:"m-2",children:"What will you like to do?"}),this.listItem(),Object(c.jsx)("button",{style:f,className:"btn btn-primary m-2",onClick:this.handleClear,children:"Clear"})]})})}}]),n}(i.a.Component);l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),o()}},[[17,1,2]]]);
//# sourceMappingURL=main.0a96abc4.chunk.js.map