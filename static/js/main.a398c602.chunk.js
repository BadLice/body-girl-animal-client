(this["webpackJsonpbody-girl-animal-client"]=this["webpackJsonpbody-girl-animal-client"]||[]).push([[0],{124:function(e,t){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),l=(a(95),a(42)),u=a(8),i=(a(66),a(83)),m=a.n(i),o=a(147),d=a(87),f=a(145),E=a(142),b=a(136),g=a(85),h=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),c=function(e,t){e.preventDefault(),e.stopPropagation(),t&&t()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"bg-light justify-content-between",bg:"dark",variant:"dark"},r.a.createElement(E.a,{inline:!0,onSubmit:function(a){return c(a,(function(){return e.saveUsername(t.current.value.trim())}))}},r.a.createElement(b.a,{className:"mr-sm-2",onChange:function(){return e.setUsernameSaved(""===t.current.value.trim())}},r.a.createElement(b.a.Prepend,null,r.a.createElement(b.a.Text,{id:"basic-addon1"},r.a.createElement("span",{role:"img","aria-label":"user-avatar-icon"},"\ud83d\udc64"))),r.a.createElement(g.a,{ref:t,placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",defaultValue:e.username})),r.a.createElement(d.a,{onClick:function(){return e.saveUsername(t.current.value.trim())},disabled:e.usernameSaved},"Save")),r.a.createElement(E.a,{inline:!0,onSubmit:function(t){return c(t,(function(){return e.setSeatchText(a.current.value.trim())}))}},r.a.createElement(d.a,{variant:"success",className:" mr-sm-2",onClick:function(){return e.createGame()}},"Create game"),r.a.createElement(g.a,{ref:a,type:"text",placeholder:"Type ID or name...",className:" mr-sm-2"}),r.a.createElement(d.a,{onClick:function(){return e.setSeatchText(a.current.value.trim())}},"Search"))))},v=a(22),p=a(141),j=a(86),O=a(146),S=function(e){var t=function(){e.connection.emit("reqQuitGame"),e.setShow(!1)},a=function(){return{value:"",ref:Object(n.createRef)()}},c=Object(n.useState)([a()]),s=Object(u.a)(c,2),l=s[0],i=s[1],m=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{show:e.show,onHide:t},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Create a game")),r.a.createElement(p.a.Body,null,r.a.createElement(j.a,{className:"font-weight-bold"},"ID"),r.a.createElement(j.a,{className:"font-weight-bold text-danger",variant:"danger"},e.newGameId)),r.a.createElement(p.a.Body,null,r.a.createElement(j.a,{className:"font-weight-bold"},"Name"),r.a.createElement(g.a,{type:"text",placeholder:"Game name...",ref:m})),r.a.createElement(p.a.Body,null,r.a.createElement(j.a,{className:"font-weight-bold"},"Fields"),l.map((function(e,t){return r.a.createElement(E.a,{key:t,inline:!0,className:" mt-1",onSubmit:function(e){return function(e,t){e.preventDefault(),e.stopPropagation(),t&&t()}(e)}},r.a.createElement(E.a.Control,{ref:l[t].ref,type:"text",placeholder:"Istert field...",style:{width:"80%"},className:" mr-sm-1",onChange:function(){return function(e,t){var a=Object(v.a)(l);a[e].value=a[e].ref.current.value.trim(),i(a)}(t)},value:l[t].value}),l.length>1?r.a.createElement(d.a,{variant:"danger",className:" mr-sm-1",onClick:function(){return function(e){var t=Object(v.a)(l);t.splice(e,1),i(t)}(t)}},"-"):"",t===l.length-1?r.a.createElement(d.a,{variant:"success",className:" mr-sm-1",onClick:function(){i(Object(v.a)(l).concat(a()))}},"+"):"")}))),r.a.createElement(p.a.Body,null,r.a.createElement(j.a,{className:"font-weight-bold"},"Users connected"),r.a.createElement(O.a,null,e.users.map((function(e,t){return r.a.createElement(O.a.Item,{key:t},e.name)})))),r.a.createElement(p.a.Footer,null,r.a.createElement(d.a,{variant:"secondary",onClick:t},"Close"),r.a.createElement(d.a,{variant:"primary",onClick:function(){e.connection.emit("startGame",{gameId:e.newGameId,name:m.current.value.trim(),columns:l.map((function(e){return e.value}))}),e.history.push("/game?id="+e.newGameId),e.setShow(!1)}},"Start game"))))},I=function(e){var t=y(e.connection),a=Object(n.useState)(""),c=Object(u.a)(a,2),s=c[0],l=c[1],i=Object(n.useState)(!1),m=Object(u.a)(i,2),f=m[0],E=m[1],b=Object(n.useState)(null),g=Object(u.a)(b,2),v=g[0],p=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{createGame:function(){e.connection.emit("reqCreateGame"),e.connection.on("getCreateGame",(function(e){p(e),E(!0)}))},setSeatchText:l,saveUsername:e.saveUsername,setUsernameSaved:e.setUsernameSaved,username:e.username,usernameSaved:e.usernameSaved}),r.a.createElement(S,{show:f,newGameId:v,setShow:E,connection:e.connection,history:e.history,users:e.users}),t.filter((function(e){return e.id.includes(s)||e.name.includes(s)})).map((function(t){return r.a.createElement(o.a,{key:t.id,border:"primary",className:"m-2 game-card"},r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,t.name),r.a.createElement(o.a.Text,null,r.a.createElement("br",null),r.a.createElement("span",{className:"border border-dark p-3 mt-3"},t.users.map((function(e,a){return r.a.createElement("span",{key:a},e.name,a!==t.users.length-1?r.a.createElement(r.a.Fragment,null,", "):"")}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"ID:",r.a.createElement("span",{className:"text-primary m-1"},t.id))),r.a.createElement(d.a,{variant:"primary",onClick:function(){return a=t.id,void e.history.push("/game?id="+a);var a}},"Join")))})))},y=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){if(e)return e.emit("reqGames"),e.on("getGames",(function(e){return c(e)})),function(){return e.off("getGames")}}),[e]),r},k=a(144),w=a(138),N=a(140),x=a(137),C=a(55),G=function(e){var t="";switch(e.toggle){case 0:t="danger";break;case 5:t="primary";break;case 10:t="success";break;default:t="danger"}return"confirmed"!==e.handState?r.a.createElement(b.a.Prepend,null,r.a.createElement(b.a.Text,{className:t},e.toggle)):r.a.createElement(x.a,{disabled:e.disabled,onSelect:function(t){return e.setInputScore(t,e.handId,e.inputIndex)},as:b.a.Prepend,variant:t,title:e.toggle},r.a.createElement(C.a.Item,{eventKey:0},"0"),r.a.createElement(C.a.Item,{eventKey:5},"5"),r.a.createElement(C.a.Item,{eventKey:10},"10"))},H=function(e){var t=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"align-middle"},r.a.createElement(b.a,{size:"sm",className:"mb-3"},"playing"!==e.state?r.a.createElement(G,{handId:e.handId,inputIndex:e.index,toggle:e.input.score,handState:e.handState,setInputScore:e.setInputScore}):"",r.a.createElement(g.a,{ref:t,"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",disabled:"playing"!==e.handState,defaultValue:e.input.value,onBlur:function(){return e.setInputValue(t.current.value,e.handId,e.index)}}))))},U=function(e){var t;switch(e.hand.state){case"playing":t=r.a.createElement(d.a,{variant:"success",onClick:function(){return e.confirmHand(e.hand.id)}},"Confirm");break;case"waiting":t=r.a.createElement(d.a,{variant:"success",onClick:function(){return e.confirmHand(e.hand.id)},disabled:!0},"Confirmed");break;case"confirmed":t=r.a.createElement(d.a,{variant:"primary",onClick:function(){return e.submitHand(e.hand.id)}},"Submit");break;default:t=r.a.createElement("h6",null,"Submitted")}return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"align-middle"},t))},T=function(e){var t=e.hand.inputs.reduce((function(e,t){return e+t.score}),0);return console.log(e.hand.state),r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"align-middle"},e.hand.character),e.hand.inputs.map((function(t,a){return r.a.createElement(H,{key:a,index:a,handId:e.hand.id,input:t,handState:e.hand.state,setInputScore:e.setInputScore,setInputValue:e.setInputValue,state:e.hand.state})})),r.a.createElement(U,{hand:e.hand,confirmHand:e.confirmHand,submitHand:e.submitHand}),r.a.createElement("td",{className:"align-middle"},t))},q=function(e){return r.a.createElement(r.a.Fragment,null,e.hands.map((function(t,a){return r.a.createElement("tr",{key:a,className:"text-center align-middle"},r.a.createElement(T,{hand:t,setInputScore:e.setInputScore,setInputValue:e.setInputValue,confirmHand:e.confirmHand,submitHand:e.submitHand}))})))},F=function(e){var t=e.hands.reduce((function(e,t){return e+t.inputs.reduce((function(e,t){return e+t.score}),0)}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"w-100 p-1 bg-dark text-white fixed-bottom"},r.a.createElement(w.a,{variant:"primary",className:"float-right m-0"},t),r.a.createElement(w.a,{variant:"none",className:"float-right m-0"},"TOTAL")))},B=a(148),R=a(143),V=function(e){var t=r.a.createElement(B.a,{id:"scoreBoard"},r.a.createElement(B.a.Title,{as:"h3"},"Scoreboard"),r.a.createElement(B.a.Content,null,r.a.createElement(O.a,{variant:"flush"},e.users.sort((function(e,t){return e.score>t.score})).map((function(e,t){var a="";switch(t){case 0:a="text-success";break;case 2:a="text-danger";break;case 1:a="text-warning"}return r.a.createElement(O.a.Item,{key:t},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6 mr-2 "},t+1),r.a.createElement("div",{className:"col-xs-6 mr-2 "+a},e.score),r.a.createElement("div",{className:"col-xs-6 "},e.name)))})))));return console.log(e.timer),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"justify-content-between",bg:"dark",variant:"dark"},r.a.createElement(E.a,{inline:!0},r.a.createElement(b.a,{className:"mr-sm-2"},r.a.createElement(b.a.Prepend,null,r.a.createElement(b.a.Text,{id:"basic-addon1"},r.a.createElement("span",{role:"img","aria-label":"user-avatar-icon"},"\ud83d\udc64"))),r.a.createElement(g.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",defaultValue:e.username,disabled:!0})),r.a.createElement(R.a,{trigger:"click",placement:"bottom",overlay:t},r.a.createElement(d.a,{variant:"info"},"\u2630"))),r.a.createElement(E.a,{inline:!0},r.a.createElement(E.a.Label,{className:"mr-sm-2 text-warning h4"},e.timer),r.a.createElement(d.a,{variant:"danger",onClick:function(){return e.quitGame()}},"Quit game"))))},P=a(139),J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"info",className:"m-3"},r.a.createElement(w.a.Heading,null,"Game is starting ...",r.a.createElement(P.a,{animation:"grow",variant:"danger",className:"float-right"})),r.a.createElement("hr",null),r.a.createElement("p",null,"Connected users"),r.a.createElement(O.a,null,e.users.map((function(e,t){return r.a.createElement(O.a.Item,{key:t},e.name)})))))},D=function(e){var t=A(e.connection);Object(n.useEffect)((function(){if(e.connection&&e.gameId)return e.connection.emit("reqJoinGame",e.gameId),e.connection.on("getJoinGame",(function(t){t&&e.connection.emit("reqGameStarted",e.gameId)})),function(){return e.connection.off("getJoinGame")}}),[e.connection,e.gameId]);var a=function(){e.connection.emit("reqQuitGame"),e.connection.on("getQuitGame",(function(){return e.history.push("/")}))};return e.gameExists?r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{username:e.username,quitGame:a,users:e.users,timer:t}),e.gameStarted?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.columns.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,r.a.createElement(q,{hands:e.hands,setInputScore:function(t,a,n){var r=e.hands.findIndex((function(e){return e.id===a})),c=Object(v.a)(e.hands);c[r].inputs[n].score=Number(t),e.setHands(c)},setInputValue:function(t,a,n){var r=e.hands.findIndex((function(e){return e.id===a})),c=Object(v.a)(e.hands);c[r].inputs[n].value=t,e.setHands(c)},confirmHand:function(t){var a=e.hands.findIndex((function(e){return e.id===t})),n=Object(v.a)(e.hands);n[a].state="waiting",e.setHands(n)},submitHand:function(t){var a=e.hands.findIndex((function(e){return e.id===t})),n=Object(v.a)(e.hands);n[a].state="submitted",e.setHands(n)}}))),r.a.createElement(F,{columns:e.columns,hands:e.hands})):r.a.createElement(J,{users:e.users})):r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{username:e.username,quitGame:a,users:e.users,timer:t}),r.a.createElement(w.a,{variant:"danger",className:"m-3"},r.a.createElement(w.a.Heading,null,"ERROR 404"),r.a.createElement("p",null,"Not found"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"This game does not exists!")))},A=function(e){var t=Object(n.useState)("sync..."),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){if(e)return e.on("syncTimer",(function(e){return c(e)})),function(){return e.off("syncTimer")}}),[e]),r},Q=a(28),K=function(e,t){var a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){if(t&&e)return t.emit("reqGameExists",e),t.on("getGameExists",(function(e){return s(e)})),function(){return t.off("getGameExists")}}),[t,e]),[c,s]},L=function(e,t,a,r){var c=Object(n.useState)([]),s=Object(u.a)(c,2),l=s[0],i=s[1];return Object(n.useEffect)((function(){if(t&&e&&a&&r)return t.emit("reqColumns",e),t.on("getColumns",(function(e){return i(["Character"].concat(e.concat(["Actions","Total"])))})),function(){return t.off("getColumns")}}),[e,t,a,r]),[l,i]},z=function(e,t,a,r,c){var s=Object(n.useState)([]),l=Object(u.a)(s,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){if(t&&e&&r&&c)return t.emit("reqHands",{gameId:e,userId:a}),t.on("getHands",(function(e){return m(e)})),function(){t.off("giveHands"),t.off("getHands")}}),[e,t,a,r,c]),[i,m]},W=function(e,t,a,r,c){var s=Object(n.useState)(null),l=Object(u.a)(s,2),i=l[0],o=l[1];return Object(n.useEffect)((function(){var n=m()(e,{"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]});return!t||0===Object.keys(t).length&&t.constructor===Object?n.emit("reqUserId"):n.emit("reqUsername",t),n.on("getUsername",(function(e){r(e),c(!0)})),n.on("getUserId",(function(e){return a("userId",e.id,{maxAge:28800})&&r(e.name)})),o(n),function(){n.off("getUsername"),n.off("getUserId")}}),[e,t,a,r,c]),i},$=function(e,t,a,r){var c=Object(n.useState)(!1),s=Object(u.a)(c,2),l=s[0],i=s[1];return Object(n.useEffect)((function(){if(r&&t&&e&&a)return r.emit("reqGameStarted",t),r.on("getGameStarted",(function(e){return i(e)})),function(){return r.off("getGameStarted")}}),[e,t,a,r]),[l,i]},M=function(){return new URLSearchParams(Object(Q.g)().search)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(63);s.a.render(r.a.createElement(X.a,null,r.a.createElement((function(){var e,t=Object(Q.f)(),a=Object(k.a)(["body-girl-animal-userId"]),c=Object(u.a)(a,3),s=c[0].userId,i=c[1],m=(c[2],Object(n.useState)(!1)),o=Object(u.a)(m,2),d=o[0],f=o[1],E=Object(n.useState)(""),b=Object(u.a)(E,2),g=b[0],h=b[1],v=W("http://192.168.1.69:15519",s,i,h,f),p=M().get("id"),j=K(p,v),O=Object(u.a)(j,2),S=O[0],y=(O[1],$(S,p,s,v)),w=Object(u.a)(y,2),N=w[0],x=(w[1],L(p,v,S,N)),C=Object(u.a)(x,2),G=C[0],H=C[1],U=z(p,v,s,S,N),T=Object(u.a)(U,2),q=T[0],F=T[1],B=Object(n.useState)([]),R=Object(u.a)(B,2),V=R[0],P=R[1];Object(n.useEffect)((function(){v&&s&&p&&q&&v.on("giveHands",(function(){console.log("sending..."),console.log(q),v.emit("hereHands",{hands:q,userId:s,gameId:p})}))}),[v&&s&&p&&q]),Object(n.useEffect)((function(){if(v)return v.on("getUsersConnected",(function(e){return P(e)})),function(){return v.off("getUsersConnected")}}),[v]);var J=function(e){v.emit("reqSaveUsername",{id:s,name:e}),v.on("getSaveUsername",(function(t){return t&&f(!0)&&h(e)}))};return r.a.createElement(Q.c,null,r.a.createElement(Q.a,{path:"/game"},r.a.createElement(D,(e={connection:v,setColumns:H,setHands:F,saveUsername:J,usernameSaved:d,setUsernameSaved:f,username:g,columns:G,hands:q,gameId:p,history:t},Object(l.a)(e,"gameId",p),Object(l.a)(e,"gameExists",S),Object(l.a)(e,"users",V),Object(l.a)(e,"gameStarted",N),e))),r.a.createElement(Q.a,{path:"/"},r.a.createElement(I,{connection:v,setColumns:H,setHands:F,saveUsername:J,usernameSaved:d,setUsernameSaved:f,username:g,gameId:p,history:t,users:V,gameStarted:N})))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(133)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.a398c602.chunk.js.map