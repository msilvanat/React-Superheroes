(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{47:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(21),s=r.n(c),n=r(11),i=Object(t.createContext)(),o=r(4),l="[auth] login",h="[auth] logout",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l:return Object(o.a)(Object(o.a)({},a.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},j=r(9),u=r(2),b=r(13),m=r(8),p=r.n(m),O=r(0),v=function(e){var a=e.isAuthenticated,r=e.component,t=Object(b.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",t.location.pathname),Object(O.jsx)(u.b,Object(o.a)(Object(o.a)({},t),{},{component:function(e){return a?Object(O.jsx)(r,Object(o.a)({},e)):Object(O.jsx)(u.a,{to:"/login"})}}))};v.protoType={isAuthenticated:p.a.bool.isRequired,component:p.a.func.isRequired};var x=function(e){var a=e.isAuthenticated,r=e.component,t=Object(b.a)(e,["isAuthenticated","component"]);return Object(O.jsx)(u.b,Object(o.a)(Object(o.a)({},t),{},{component:function(e){return a?Object(O.jsx)(u.a,{to:"/"}):Object(O.jsx)(r,Object(o.a)({},e))}}))};x.protoType={isAuthenticated:p.a.bool.isRequired,component:p.a.func.isRequired};var f=function(e){var a=e.history,r=Object(t.useContext)(i).dispatch;return Object(O.jsxs)("div",{className:"container mt-5",children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsx)("hr",{}),Object(O.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:l,payload:{name:"Silvana"}}),a.replace(e)},children:"Login"})]})},g=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],C=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance,s=e.characters;return Object(O.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(O.jsxs)("div",{className:"row no-gutters",children:[Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img",alt:r})}),Object(O.jsx)("div",{className:"col-md-8",children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("h5",{className:"card-title",children:[" ",r," "]}),Object(O.jsxs)("p",{className:"card-text",children:[" ",t," "]}),t!==s&&Object(O.jsxs)("p",{className:"card-text",children:[" ",s," "]}),Object(O.jsx)("p",{className:"card-text",children:Object(O.jsxs)("small",{className:"text-muted",children:[" ",c," "]})}),Object(O.jsx)(j.b,{to:"./hero/".concat(a),children:"More..."})]})})]})})},_=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" It is wrong'));return g.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(O.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:r.map((function(e){return Object(O.jsx)(C,Object(o.a)({},e),e.id)}))})},N=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"DC Sreen"}),Object(O.jsx)("hr",{}),Object(O.jsx)(_,{publisher:"DC Comics"})]})},y=function(e){var a=e.history,r=Object(u.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,g.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(O.jsx)(u.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,o=c.first_appearance,l=c.characters;return Object(O.jsxs)("div",{className:"row mt-5",children:[Object(O.jsx)("div",{className:"col-4",children:Object(O.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(O.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(O.jsxs)("h3",{children:[" ",s," "]}),Object(O.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(O.jsxs)("li",{className:"list-group-item",children:[" ",Object(O.jsx)("b",{children:" Alter ego: "})," ",i," "]}),Object(O.jsxs)("li",{className:"list-group-item",children:[" ",Object(O.jsx)("b",{children:" Publisher: "})," ",n," "]}),Object(O.jsxs)("li",{className:"list-group-item",children:[" ",Object(O.jsx)("b",{children:" First appearance: "})," ",o," "]})]}),Object(O.jsx)("h5",{children:" Characters "}),Object(O.jsxs)("p",{children:[" ",l," "]}),Object(O.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack(),a.goBack()},children:"Return"})]})]})},k=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Marvel Screen"}),Object(O.jsx)("hr",{}),Object(O.jsx)(_,{publisher:"Marvel Comics"})]})},S=function(){var e=Object(t.useContext)(i),a=e.user.name,r=e.dispatch,c=Object(u.g)();return Object(O.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger",children:[Object(O.jsx)(j.b,{className:"navbar-brand text-dark",to:"/",children:"Asociaciones"}),Object(O.jsx)("div",{className:"navbar-collapse",children:Object(O.jsxs)("div",{className:"navbar-nav",children:[Object(O.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link text-dark",exact:!0,to:"/marvel",children:"Marvel"}),Object(O.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link text-dark",exact:!0,to:"/dc",children:"DC"}),Object(O.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link text-dark",exact:!0,to:"/search",children:"Search"})]})}),Object(O.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(O.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(O.jsx)("span",{className:"nav-item nav-link text-dark",children:a}),Object(O.jsx)("button",{className:"nav-item nav-link text-dark btn",onClick:function(){c.replace("/login"),r({type:h})},children:"Logout"})]})})]})},M=r(23),D=r.n(M),w=r(12),A=function(e){var a=e.history,r=Object(u.h)(),c=D.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(o.a)(Object(o.a)({},c),{},Object(w.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:s}),l=Object(n.a)(i,2),h=l[0],d=l[1],j=h.searchText,b=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),g.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" Search Screen"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-5",children:[Object(O.jsx)("h4",{children:" Search Form "}),Object(O.jsx)("hr",{}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(j))},children:[Object(O.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",autoComplete:"off",value:j,onChange:d}),Object(O.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search..."})]})]}),Object(O.jsxs)("div",{className:"col-7",children:[Object(O.jsx)("h4",{children:" Results "}),Object(O.jsx)("hr",{}),""===s&&Object(O.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==s&&0===b.length&&Object(O.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",s]}),b.map((function(e){return Object(O.jsx)(C,Object(o.a)({},e),e.id)}))]})]})]})},B=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{}),Object(O.jsx)("div",{className:"container mt-2",children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{exact:!0,path:"/marvel",component:k}),Object(O.jsx)(u.b,{exact:!0,path:"/hero/:heroeId",component:y}),Object(O.jsx)(u.b,{exact:!0,path:"/dc",component:N}),Object(O.jsx)(u.b,{exact:!0,path:"/search",component:A}),Object(O.jsx)(u.a,{to:"/marvel"})]})})]})},T=function(){var e=Object(t.useContext)(i).user;return Object(O.jsx)(j.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(x,{exact:!0,path:"/login",component:f,isAuthenticated:e.logged}),Object(O.jsx)(v,{path:"/",component:B,isAuthenticated:e.logged})]})})})},J=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(t.useReducer)(d,{},J),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(O.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(O.jsx)(T,{})})};s.a.render(Object(O.jsx)(I,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0c58295c.chunk.js.map