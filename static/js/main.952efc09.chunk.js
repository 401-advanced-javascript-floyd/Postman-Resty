(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(12),c=a.n(l),r=(a(24),a(25),function(){return o.a.createElement("p",{className:"header"},"RESTy")}),i=a(2),s=a(13),u=a(14),h=a(16),d=a(15),m=a(17),p=function(e){return o.a.createElement("ul",{className:"methods"},o.a.createElement("li",{onClick:function(){return e.onMethod("GET")},id:"get"},"Get"),o.a.createElement("li",{onClick:function(){return e.onMethod("POST")},id:"post"},"POST"),o.a.createElement("li",Object(i.a)({onClick:function(){return e.onMethod("PUT")},id:"put"},"id","put"),"PUT"),o.a.createElement("li",{onClick:function(){return e.onMethod("DELETE")},id:"delete"},"DELETE"),o.a.createElement("li",null,o.a.createElement("button",{type:"submit"},"go")))},f=function(e){var t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("textarea",{className:"text-box",name:"textarea",onChange:e.handler,placehoder:" id: 1, title: 'foo', body: 'bar', userId: 1'"}),o.a.createElement("div",{className:"button-box"},o.a.createElement("button",{className:"left",onClick:e.handleauth},"Headers"),e.basicauth,o.a.createElement("br",null),o.a.createElement("input",(t={type:"text",placeholder:"username",name:"username"},Object(i.a)(t,"placeholder","floyd"),Object(i.a)(t,"onChange",e.authhandle),t)),o.a.createElement("input",{type:"text",placeholder:"4321",onChange:e.authhandle,name:"password"}),o.a.createElement("br",null),e.bearertoken,o.a.createElement("input",{type:"text",className:"left"})))},E=function(e){return o.a.createElement("div",{disabled:!0,type:"text",className:"width",name:"textarea",placeholder:"text"},JSON.stringify(e.data))},b=a(26),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).handleMethod=function(t){console.log(t),e.setState({method:t,url:""})},e.go=function(t){t.preventDefault();var a=t.target.url.value;"GET"===e.state.method?b.get(a).then(function(t){e.setState({data:t})}).catch(function(e){console.log(e)}):"POST"===e.state.method?b.post(a,e.state.textbox).then(function(t){e.setState({data:t})}).catch(function(e){console.log(e)}).finally(function(){}):"DELETE"===e.state.method?b.delete("".concat(a,"/").concat(e.state.textbox),e.state.textbox).then(function(t){e.setState({data:t})}).catch(function(e){console.log(e)}).finally(function(){}):"PUT"===e.state.method&&b.post(a,e.state.textbox).then(function(t){e.setState({data:t})}).catch(function(e){console.log(e)}).finally(function(){})},e.auth=function(){b.post("https://videogame-marketplace.herokuapp.com/api/#/Authentication/post_signin",{username:e.state.username,password:e.state.password,role:"admin"}).then(function(t){e.setState({data:t})}).catch(function(e){console.log(e)}).finally(function(){})},e.handleChange=function(t){e.setState({textbox:t.target.value})},e.handleChangeAuth=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.state={method:"GET",url:"",data:{},textbox:"",username:"",password:""},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.go,className:"main"},o.a.createElement("div",{className:"sectionLeft"},o.a.createElement("p",{className:"text"},"History")),o.a.createElement("div",{className:"sectionRight"},o.a.createElement("input",{type:"text",className:"input-right",placeholder:'(get) https://swapi.co/api/people ,(post send object("id: 1, title: foo, body: bar, userId: 1),delete type 1) https://jsonplaceholder.typicode.com/posts',name:"url"}),o.a.createElement(p,{onMethod:this.handleMethod}),o.a.createElement(f,{basicauth:"Basic Authorization",bearertoken:"Bearer Token",name:"textbox",value:this.state.textbox,handler:this.handleChange,authhandle:this.handleChangeAuth,handleauth:this.auth}),o.a.createElement("br",null),o.a.createElement(E,{basicauth:"Basic Authorization",data:this.state.data})))}}]),t}(o.a.Component);var x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r,null),o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.952efc09.chunk.js.map