(this["webpackJsonpbody-girl-animal-client"]=this["webpackJsonpbody-girl-animal-client"]||[]).push([[0],{124:function(e,t){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),i=(a(95),a(7)),u=(a(66),a(83)),s=a.n(u),m=a(147),o=a(87),d=a(145),f=a(142),E=a(136),b=a(85),g=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),c=function(e,t){e.preventDefault(),e.stopPropagation(),t&&t()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"bg-light justify-content-between",bg:"dark",variant:"dark"},r.a.createElement(f.a,{inline:!0,onSubmit:function(a){return c(a,(function(){return e.saveUsername(t.current.value.trim())}))}},r.a.createElement(E.a,{className:"mr-sm-2",onChange:function(){return e.setUsernameSaved(""===t.current.value.trim())}},r.a.createElement(E.a.Prepend,null,r.a.createElement(E.a.Text,{id:"basic-addon1"},r.a.createElement("span",{role:"img","aria-label":"user-avatar-icon"},"\ud83d\udc64"))),r.a.createElement(b.a,{ref:t,placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",defaultValue:e.username})),r.a.createElement(o.a,{onClick:function(){return e.saveUsername(t.current.value.trim())},disabled:e.usernameSaved},"Save")),r.a.createElement(f.a,{inline:!0,onSubmit:function(t){return c(t,(function(){return e.setSeatchText(a.current.value.trim())}))}},r.a.createElement(o.a,{variant:"success",className:" mr-sm-2",onClick:function(){return e.createGame()}},"Create game"),r.a.createElement(b.a,{ref:a,type:"text",placeholder:"Type ID or name...",className:" mr-sm-2"}),r.a.createElement(o.a,{onClick:function(){return e.setSeatchText(a.current.value.trim())}},"Search"))))},h=a(56),v=a(23),p=a(141),j=a(86),O=a(146),S=function(e){var t=function(){e.connection.emit("reqQuitGame"),e.setShow(!1)},a=function(){return{value:"",ref:Object(n.createRef)()}},c=Object(n.useState)([a()]),l=Object(i.a)(c,2),u=l[0],s=l[1],m=Object(n.useRef)(),d=Object(n.useState)({valid:!0,value:60,ref:Object(n.createRef)()}),E=Object(i.a)(d,2),g=E[0],S=E[1],I=function(){s(Object(v.a)(u).map((function(e){return Object(h.a)({},e,{valid:""!==e.value.trim()})})));var e=!isNaN(g.ref.current.value.trim()),t=Object(h.a)({},g);t.valid=e,e&&(t.value=0===g.ref.current.value.trim().length?60:Number(g.ref.current.value.trim())),S(Object(h.a)({},g,{valid:t.valid,value:t.value}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{show:e.show,onHide:t},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Create a game")),r.a.createElement(p.a.Body,null,r.a.createElement(j.a,{className:"font-weight-bold"},"ID"),r.a.createElement(j.a,{className:"font-weight-bold text-danger",variant:"danger"},e.newGameId)),r.a.createElement(p.a.Body,null,r.a.createElement(j.a,{className:"font-weight-bold"},"Name"),r.a.createElement(b.a,{type:"text",placeholder:"Game name...",ref:m})),r.a.createElement(p.a.Body,null,r.a.createElement(j.a,{className:"font-weight-bold"},"Timer"),r.a.createElement(b.a,{type:"text",placeholder:"60",ref:g.ref,isInvalid:!g.valid,onBlur:I})),r.a.createElement(p.a.Body,null,r.a.createElement(j.a,{className:"font-weight-bold"},"Fields"),u.map((function(e,t){return r.a.createElement(f.a,{key:t,inline:!0,className:" mt-1",onSubmit:function(e){return function(e,t){e.preventDefault(),e.stopPropagation(),t&&t()}(e)}},r.a.createElement(f.a.Control,{isInvalid:!e.valid,ref:e.ref,type:"text",placeholder:"Istert field...",style:{width:"80%"},className:" mr-sm-1",onChange:function(){return function(e,t){var a=Object(v.a)(u);a[e].value=a[e].ref.current.value.trim(),s(a)}(t)},value:e.value,onBlur:I}),u.length>1?r.a.createElement(o.a,{variant:"danger",className:" mr-sm-1",onClick:function(){return function(e){var t=Object(v.a)(u);t.splice(e,1),s(t)}(t)}},"-"):"",t===u.length-1?r.a.createElement(o.a,{variant:"success",className:" mr-sm-1",onClick:function(){s(Object(v.a)(u).concat(a()))}},"+"):"")}))),r.a.createElement(p.a.Body,null,r.a.createElement(j.a,{className:"font-weight-bold"},"Users connected"),r.a.createElement(O.a,null,e.users.map((function(e,t){return r.a.createElement(O.a.Item,{key:t},e.name)})))),r.a.createElement(p.a.Footer,null,r.a.createElement(o.a,{variant:"secondary",onClick:t},"Close"),r.a.createElement(o.a,{variant:"primary",onClick:function(){var t=!0;u.forEach((function(e){return t&=e.valid})),(t&=g.valid)&&(e.connection.emit("startGame",{defaultTimer:g.value,gameId:e.newGameId,name:m.current.value.trim(),columns:u.map((function(e){return e.value.trim()}))}),e.history.push("/game/"+e.newGameId),e.setShow(!1))}},"Start game"))))},I=function(e){var t=y(e.connection),a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],u=c[1],s=Object(n.useState)(!1),d=Object(i.a)(s,2),f=d[0],E=d[1],b=Object(n.useState)(null),h=Object(i.a)(b,2),v=h[0],p=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{createGame:function(){e.connection.emit("reqCreateGame"),e.connection.off("getCreateGame"),e.connection.on("getCreateGame",(function(e){p(e),E(!0)}))},setSeatchText:u,saveUsername:e.saveUsername,setUsernameSaved:e.setUsernameSaved,username:e.username,usernameSaved:e.usernameSaved}),r.a.createElement(S,{setGameId:e.setGameId,show:f,newGameId:v,setShow:E,connection:e.connection,history:e.history,users:e.users}),t.filter((function(e){return e.id.includes(l)||e.name.includes(l)})).map((function(t){return r.a.createElement(m.a,{key:t.id,border:"primary",className:"m-2 game-card"},r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Title,null,t.name),r.a.createElement(m.a.Text,null,r.a.createElement("br",null),r.a.createElement("span",{className:"border border-dark p-3 mt-3"},t.users.map((function(e,a){return r.a.createElement("span",{key:a},e.name,a!==t.users.length-1?r.a.createElement(r.a.Fragment,null,", "):"")}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"ID:",r.a.createElement("span",{className:"text-primary m-1"},t.id))),r.a.createElement(o.a,{variant:"primary",onClick:function(){return a=t.id,void e.history.push("/game/"+a);var a}},"Join")))})))},y=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){if(e)return e.emit("reqGames"),e.on("getGames",(function(e){return c(e)})),function(){e.off("getCreateGame"),e.off("getGames")}}),[e]),r},N=a(144),w=a(139),C=a(140),k=a(137),x=a(55),G=function(e){var t="";switch(e.toggle){case 0:t="danger";break;case 5:t="primary";break;case 10:t="success";break;default:t="danger"}return"confirmed"!==e.handState?r.a.createElement(E.a.Prepend,null,r.a.createElement(E.a.Text,{className:t},e.toggle)):r.a.createElement(k.a,{disabled:e.disabled,onSelect:function(t){return e.setInputScore(t,e.handId,e.inputIndex)},as:E.a.Prepend,variant:t,title:e.toggle},r.a.createElement(x.a.Item,{eventKey:0},"0"),e.inputValid?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a.Item,{eventKey:5},"5"),r.a.createElement(x.a.Item,{eventKey:10},"10")):"")},U=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!0),c=Object(i.a)(a,2),l=c[0],u=c[1],s=function(t){e.setInputValue(t,e.handId,e.index,e.character),function(t){var a=t.trim().toUpperCase().charAt(0)===e.character.toUpperCase().charAt(0)||0===t.length;u(a)}(t)};return Object(n.useEffect)((function(){if("playing"!==e.handState){var a=t.current.value.trim().toUpperCase().charAt(0)===e.character.toUpperCase().charAt(0);u(a),l||(t.current.value="",e.setInputScore(0,e.handId,e.index))}}),[e.handState,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"align-middle"},r.a.createElement(E.a,{size:"sm",className:"mb-3"},"playing"!==e.state?r.a.createElement(G,{handId:e.handId,inputIndex:e.index,toggle:e.input.score,handState:e.handState,setInputScore:e.setInputScore,inputValid:l}):"",r.a.createElement(b.a,{isInvalid:!l,ref:t,"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",disabled:"playing"!==e.handState,defaultValue:e.input.value,onChange:function(){return s(t.current.value.trim())}}))))},H=function(e){var t;switch(e.hand.state){case"playing":t=r.a.createElement(o.a,{variant:"success",onClick:function(){return e.confirmHand(e.hand.id)}},"Confirm");break;case"waiting":t=r.a.createElement(o.a,{variant:"success",onClick:function(){return e.confirmHand(e.hand.id)},disabled:!0},"Confirmed");break;case"confirmed":t=r.a.createElement(o.a,{variant:"primary",onClick:function(){return e.submitHand(e.hand.id)}},"Submit");break;default:t=r.a.createElement("h6",null,"Submitted")}return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"align-middle"},t))},T=a(138),F=function(e){var t=e.hand.inputs.reduce((function(e,t){return e+t.score}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"align-middle"},e.showSpinner&&r.a.createElement(T.a,{animation:"grow",variant:"success",className:"float-left"}),e.hand.character),e.hand.inputs.map((function(t,a){return r.a.createElement(U,{key:a,index:a,handId:e.hand.id,character:e.hand.character,input:t,handState:e.hand.state,setInputScore:e.setInputScore,setInputValue:e.setInputValue,state:e.hand.state})})),r.a.createElement(H,{hand:e.hand,confirmHand:e.confirmHand,submitHand:e.submitHand}),r.a.createElement("td",{className:"align-middle"},t))},q=function(e){return r.a.createElement(r.a.Fragment,null,e.hands.map((function(t,a){return r.a.createElement("tr",{key:a,className:"text-center align-middle"},r.a.createElement(F,{showSpinner:a===e.hands.length-1,hand:t,setInputScore:e.setInputScore,setInputValue:e.setInputValue,confirmHand:e.confirmHand,submitHand:e.submitHand}))})))},B=function(e){var t=e.hands.reduce((function(e,t){return e+t.inputs.reduce((function(e,t){return e+t.score}),0)}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"w-100 p-1 bg-dark text-white fixed-bottom"},r.a.createElement(w.a,{variant:"primary",className:"float-right m-0"},t),r.a.createElement(w.a,{variant:"none",className:"float-right m-0"},"TOTAL")))},V=a(148),A=a(143),R=function(e){var t=r.a.createElement(V.a,{id:"scoreBoard"},r.a.createElement(V.a.Title,{as:"h3"},"Scoreboard"),r.a.createElement(V.a.Content,null,r.a.createElement(O.a,{variant:"flush"},e.users.sort((function(e,t){return e.score>t.score})).map((function(e,t){var a="";switch(t){case 0:a="text-success";break;case 2:a="text-danger";break;case 1:default:a="text-warning"}return r.a.createElement(O.a.Item,{key:t},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6 mr-2 "},r.a.createElement("span",{role:"img","aria-label":"King",style:{visibility:0===t?"visible":"hidden"}},"\ud83d\udc51")),r.a.createElement("div",{className:"col-xs-6 mr-2 "+a},e.score),r.a.createElement("div",{className:"col-xs-6 "},e.name)))})))));return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"justify-content-between",bg:"dark",variant:"dark"},r.a.createElement(f.a,{inline:!0},r.a.createElement(E.a,{className:"mr-sm-2"},r.a.createElement(E.a.Prepend,null,r.a.createElement(E.a.Text,{id:"basic-addon1"},r.a.createElement("span",{role:"img","aria-label":"user-avatar-icon"},"\ud83d\udc64"))),r.a.createElement(b.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",defaultValue:e.username,disabled:!0})),r.a.createElement(A.a,{trigger:"click",placement:"bottom",overlay:t},r.a.createElement(o.a,{variant:"info"},"\u2630"))),r.a.createElement(f.a,{inline:!0},r.a.createElement(f.a.Label,{className:"mr-sm-2 text-warning h4"},e.timer),r.a.createElement(o.a,{variant:"danger",onClick:function(){return e.quitGame()}},"Quit game"))))},J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"info",className:"m-3"},r.a.createElement(w.a.Heading,null,"Game is starting ...",r.a.createElement(T.a,{animation:"grow",variant:"danger",className:"float-right"})),r.a.createElement("hr",null),r.a.createElement("p",null,"Connected users"),r.a.createElement(O.a,null,e.users.map((function(e,t){return r.a.createElement(O.a.Item,{key:t},e.name)})))))},P=a(28),D=function(e){var t=Q(e.connection),a=Object(P.g)().gameId;Object(n.useEffect)((function(){a&&e.setGameId(a)}),[a]),Object(n.useEffect)((function(){if(e.connection&&e.gameId)return e.connection.emit("reqJoinGame",e.gameId),e.connection.off("getJoinGame"),e.connection.on("getJoinGame",(function(t){t&&e.connection.emit("reqGameStarted",e.gameId)})),function(){return e.connection.off("getJoinGame")}}),[e.connection,e.gameId]);var c=function(){e.connection.emit("reqQuitGame"),e.connection.off("getQuitGame"),e.connection.on("getQuitGame",(function(){return e.history.push("")}))};return e.gameExists?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{username:e.username,quitGame:c,users:e.users,timer:t}),e.gameStarted?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.columns.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,r.a.createElement(q,{hands:e.hands,setInputScore:function(t,a,n){var r=e.hands.findIndex((function(e){return e.id===a})),c=Object(v.a)(e.hands);c[r].inputs[n].score=Number(t),e.setHands(c)},setInputValue:function(t,a,n,r){if(t.trim().toUpperCase().charAt(0)===r.toUpperCase().charAt(0)){var c=e.hands.findIndex((function(e){return e.id===a})),l=Object(v.a)(e.hands);l[c].inputs[n].value=t,e.setHands(l)}},confirmHand:function(t){var a=e.hands.findIndex((function(e){return e.id===t})),n=Object(v.a)(e.hands);n[a].state="waiting",e.setHands(n)},submitHand:function(t){var a=e.hands.findIndex((function(e){return e.id===t})),n=Object(v.a)(e.hands);n[a].state="submitted",e.setHands(n)}}))),r.a.createElement(B,{columns:e.columns,hands:e.hands})):r.a.createElement(J,{users:e.users})):r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{username:e.username,quitGame:c,users:e.users,timer:t}),r.a.createElement(w.a,{variant:"danger",className:"m-3"},r.a.createElement(w.a.Heading,null,"ERROR 404"),r.a.createElement("p",null,"Not found"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"This game does not exists!")))},Q=function(e){var t=Object(n.useState)("sync..."),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){if(e)return e.off("syncTimer"),e.on("syncTimer",(function(e){return c(e)})),function(){return e.off("syncTimer")}}),[e]),r},K=function(e,t){var a=Object(n.useState)(!1),r=Object(i.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){if(t&&e)return t.emit("reqGameExists",e),t.on("getGameExists",(function(e){return l(e)})),function(){return t.off("getGameExists")}}),[t,e]),[c,l]},z=function(e,t,a,r){var c=Object(n.useState)([]),l=Object(i.a)(c,2),u=l[0],s=l[1];return Object(n.useEffect)((function(){if(t&&e&&a&&r)return t.emit("reqColumns",e),t.off("getColumns"),t.on("getColumns",(function(e){return s(["Character"].concat(e.concat(["Actions","Total"])))})),function(){return t.off("getColumns")}}),[e,t,a,r]),[u,s]},L=function(e,t,a,r,c){var l=Object(n.useState)([]),u=Object(i.a)(l,2),s=u[0],m=u[1];return Object(n.useEffect)((function(){if(t&&e&&r&&c)return t.emit("reqHands",{gameId:e,userId:a}),t.off("getHands"),t.on("getHands",(function(e){return m(e)})),function(){t.off("handTimeout"),t.off("getHands")}}),[e,t,a,r,c]),[s,m]},W=function(e,t,a,r,c){var l=Object(n.useState)(null),u=Object(i.a)(l,2),m=u[0],o=u[1];return Object(n.useEffect)((function(){var n=s()(e,{"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]});return!t||0===Object.keys(t).length&&t.constructor===Object?n.emit("reqUserId"):n.emit("reqUsername",t),n.off("getUsername"),n.on("getUsername",(function(e){r(e),c(!0)})),n.off("getUserId"),n.on("getUserId",(function(e){return a("userId",e.id,{maxAge:28800})&&r(e.name)})),o(n),function(){n.off("getUsername"),n.off("getUserId")}}),[e,t,a,r,c]),m},$=function(e,t,a,r){var c=Object(n.useState)(!1),l=Object(i.a)(c,2),u=l[0],s=l[1];return Object(n.useEffect)((function(){if(r&&t&&e&&a)return r.emit("reqGameStarted",t),r.off("getGameStarted"),r.on("getGameStarted",(function(e){return s(e)})),function(){return r.off("getGameStarted")}}),[e,t,a,r]),[u,s]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(45);l.a.render(r.a.createElement(M.a,null,r.a.createElement((function(){var e=Object(P.f)(),t=Object(N.a)(["body-girl-animal-userId"]),a=Object(i.a)(t,2),c=a[0].userId,l=a[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],o=s[1],d=Object(n.useState)(null),f=Object(i.a)(d,2),E=f[0],b=f[1],g=W("http://worddd.cloudno.de",c,l,b,o),h=Object(n.useState)(""),v=Object(i.a)(h,2),p=v[0],j=v[1],O=K(p,g),S=Object(i.a)(O,1)[0],y=$(S,p,c,g),w=Object(i.a)(y,1)[0],C=z(p,g,S,w),k=Object(i.a)(C,2),x=k[0],G=k[1],U=L(p,g,c,S,w),H=Object(i.a)(U,2),T=H[0],F=H[1],q=Object(n.useState)([]),B=Object(i.a)(q,2),V=B[0],A=B[1];Object(n.useEffect)((function(){g&&c&&p&&T&&(g.off("handTimeout"),g.on("handTimeout",(function(){console.log("handTimeout"),g.emit("handTimeoutClientResponse",{hands:T,userId:c,gameId:p})})))}),[g,c,p,T]),Object(n.useEffect)((function(){if(g)return g.off("getUsersConnected"),g.on("getUsersConnected",(function(e){return A(e)})),function(){return g.off("getUsersConnected")}}),[g]);var R=function(e){g.emit("reqSaveUsername",{id:c,name:e}),g.off("getSaveUsername"),g.on("getSaveUsername",(function(t){return t&&o(!0)&&b(e)}))};return r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/body-girl-animal-client/game/:gameId"},r.a.createElement(D,{connection:g,setColumns:G,setHands:F,saveUsername:R,usernameSaved:m,setUsernameSaved:o,username:E,columns:x,hands:T,gameId:p,history:e,gameExists:S,users:V,gameStarted:w,setGameId:j})),r.a.createElement(P.a,null,r.a.createElement(I,{connection:g,setColumns:G,setHands:F,saveUsername:R,usernameSaved:m,setUsernameSaved:o,username:E,gameId:p,history:e,users:V,gameStarted:w,setGameId:j})))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(133)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.4c8d01b2.chunk.js.map