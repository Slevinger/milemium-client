(this["webpackJsonpmilenium-client"]=this["webpackJsonpmilenium-client"]||[]).push([[0],{30:function(e,n,t){e.exports=t(54)},53:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(25),o=t.n(i),c=t(5),l=t.n(c),u=t(8),s=t(9),p=t(1),f=t(6),d=t(26),b=t.n(d).a.create({baseURL:"https://milenium-server.herokuapp.com"}),m=t(13),x=function(e,n,t){var i=a.a.createContext();return{Context:i,Provider:function(o){var c=o.children,l=Object(r.useReducer)(e,t),u=Object(f.a)(l,2),d=u[0],b=u[1],m=Object.keys(n).reduce((function(e,t){return Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},t,n[t](b)))}),{});return a.a.createElement(i.Provider,{value:Object(p.a)({state:d},m)},c)}}}((function(e,n){var t=n.type,r=n.payload;switch(t){case"ADD_PROFILE":var a=r.profiles;return Object(p.a)(Object(p.a)({},e),{},{profiles:[].concat(Object(m.a)(e.profiles),Object(m.a)(a))});case"REMOVE_PROFILE":var i=r.profile;return Object(p.a)(Object(p.a)({},e),{},{profiles:e.filter((function(e){return e._id!==i._id}))});case"UPDATE_PROFILE":var o=r.profile,c=Array.from(e.profiles);return c.splice(c.findIndex((function(e){var n=e._id;return o._id===n})),1,o),Object(p.a)(Object(p.a)({},e),{},{profiles:c});case"SET_CURRENT_PROFILE":return Object(p.a)(Object(p.a)({},e),{},{currentProfile:e.profiles.find((function(e){return e._id===r}))});default:return e}}),{fetchProfiles:function(e){return function(){var n=Object(u.a)(l.a.mark((function n(t){var r,a,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.get("/profiles");case 2:if(r=n.sent,a=r.data,!(i=r.error)){n.next=7;break}return n.abrupt("return",console.log(i));case 7:e({type:"ADD_PROFILE",payload:{profiles:a}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},addProfile:function(e){return function(){var n=Object(u.a)(l.a.mark((function n(t){var r,a,i,o,c,u;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.name,a=t.bio,i=t.fb_id,n.next=3,b.post("/profiles",{name:r,bio:a,fb_id:i});case 3:if(o=n.sent,c=o.data,!(u=o.error)){n.next=8;break}return n.abrupt("return",console.log(u));case 8:e({type:"ADD_PROFILE",payload:{profiles:[c]}});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},removeProfile:function(e){return function(){var n=Object(u.a)(l.a.mark((function n(t){var r,a,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.delete("/profiles/".concat(t));case 2:if(r=n.sent,a=r.data._id,!(i=r.error)){n.next=7;break}return n.abrupt("return",console.log(i));case 7:e({type:"REMOVE_PROFILE",payload:{profile:a}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},updateProfile:function(e){return function(){var n=Object(u.a)(l.a.mark((function n(t){var r,a,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.put("/profiles",t,{"Content-Type":"application/json"});case 2:if(r=n.sent,a=r.data,!(i=r.error)){n.next=7;break}return n.abrupt("return",console.log(i));case 7:e({type:"UPDATE_PROFILE",payload:{profile:a}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentProfile:function(e){return function(n){e({type:"SET_CURRENT_PROFILE",payload:n})}}},{profiles:[],currentUser:null}),v=x.Provider,h=x.Context,E=t(2),g={name:"",fb_id:"",bio:""},y=function(e,n){var t=n.type,r=n.payload;switch(t){case"set_name":return Object(p.a)(Object(p.a)({},e),{},{name:r});case"set_fb_id":return Object(p.a)(Object(p.a)({},e),{},{fb_id:r});case"set_bio":return Object(p.a)(Object(p.a)({},e),{},{bio:r});case"reset":return g;default:return e}},O=t(3);function j(){var e=Object(E.a)(["\n  height: 30px;\n  background-color: ",";\n  border: solid thin;\n  color: white;\n  margin: 5px 2px;\n\n  margin-right: 25px;\n  padding: 5px 20px;\n  display: inline-flex;\n  align-items: center;\n  border: none;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 7px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return j=function(){return e},e}var _=O.a.div(j(),(function(e){return e.color||"#2f78b9"}));function w(){var e=Object(E.a)(["\n  background-color: black;\n  display: flex;\n  height: 50px;\n  flex-direction: row;\n  align-items: center;\n\n  input {\n    margin: 5px 2px;\n    line-height: 20px;\n    font-size: 20px;\n    height: 30px;\n    border-radius: 5px;\n    border-width: 2px;\n  }\n"]);return w=function(){return e},e}var C=O.a.div(w()),P=function(){var e=Object(r.useContext)(h).addProfile,n=Object(r.useReducer)(y,g),t=Object(f.a)(n,2),i=t[0],o=i.name,c=i.bio,l=i.fb_id,u=t[1];return a.a.createElement(C,null,a.a.createElement("input",{onChange:function(e){u({type:"set_name",payload:e.target.value})},value:o,name:"name",placeholder:"Name",type:"text"}),a.a.createElement("input",{onChange:function(e){u({type:"set_bio",payload:e.target.value})},value:c,name:"bio",placeholder:"Bio",type:"text"}),a.a.createElement("input",{onChange:function(e){u({type:"set_fb_id",payload:e.target.value})},value:l,name:"fb_id",placeholder:"FaceBook Id",type:"text"}),a.a.createElement(_,{color:"#58b957",onClick:function(){e({name:o,bio:c,fb_id:l}),u({type:"reset"})}},"Create"))};function k(){var e=Object(E.a)(["\n  border-radius: 5px;\n\n  width: 30%;\n\n  display: flex;\n  flex-direction: row;\n  background-color: rgba(220, 220, 220, 0.5);\n  font-size: 20px;\n  height: 60px;\n  margin: 5px;\n  align-items: center;\n  .profile-name-tile {\n    flex: 1;\n    margin-left: 24px;\n  }\n  @media (max-width: 480px) {\n    width: 100%;\n    /* big landscape tablets, laptops, and desktops */\n  }\n"]);return k=function(){return e},e}var R=O.a.div(k()),I=function(e){var n=e._id,t=e.name,i=Object(r.useContext)(h).setCurrentProfile;return a.a.createElement(R,null,a.a.createElement("div",{className:"profile-name-tile"},t),a.a.createElement(_,{onClick:function(){i(n)}},"Edit"))};function N(){var e=Object(E.a)(["\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n"]);return N=function(){return e},e}var F=O.a.div(N()),L=function(e){var n=e.children,t=e.hide;return a.a.createElement(F,{onClick:t},n)};function D(){var e=Object(E.a)(["\n  z-index: 2;\n  background-color: white;\n  width: 50%;\n\n  border-radius: 5px;\n  box-shadow: 4px 4px 10px;\n  display: flex;\n  flex-direction: column;\n  .row {\n    padding: 10px;\n    display: flex;\n    flex-direction: row;\n\n    input {\n      border-radius: 5px;\n      width: 100%;\n      padding: 5px;\n      font-size: 16px;\n      border-width: 1px;\n    }\n    &:first-child {\n      border-bottom: 1px solid lightgrey;\n    }\n  }\n  .profile-name {\n    flex: 1;\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    padding-left: 30px;\n    font-size: 18px;\n    font-weight: 500;\n  }\n  .image-container {\n    border-radius: 50px;\n    overflow: hidden;\n    img {\n      width: 80px;\n      border-radios: 40px;\n    }\n  }\n"]);return D=function(){return e},e}var z=O.a.div(D()),T=function(){var e=Object(r.useContext)(h),n=e.state.currentProfile,t=e.updateProfile,i=e.setCurrentProfile,o=n._id,c=Object(r.useReducer)(y,n),l=Object(f.a)(c,2),u=l[0],s=u.name,p=u.bio,d=u.fb_id,b=l[1];return a.a.createElement(z,{className:"dialog-content"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:"http://graph.facebook.com/".concat(n.fb_id,"/picture?type=square")})),a.a.createElement("div",{className:"profile-name"},"Edit ",n.name)),a.a.createElement("div",{style:{flex:1}},a.a.createElement("div",{className:"row"},a.a.createElement("input",{onChange:function(e){b({type:"set_name",payload:e.target.value})},value:s,name:"name",placeholder:"Name",type:"text"})),a.a.createElement("div",{className:"row"},a.a.createElement("input",{onChange:function(e){b({type:"set_bio",payload:e.target.value})},value:p,name:"bio",placeholder:"Bio",type:"text"})),a.a.createElement("div",{className:"row"},a.a.createElement("input",{onChange:function(e){b({type:"set_fb_id",payload:e.target.value})},value:d,name:"fb_id",placeholder:"FaceBook Id",type:"text"}))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{style:{flex:1}}),a.a.createElement(_,{onClick:function(){i(null)}},"Close"),a.a.createElement(_,{onClick:function(){t({_id:o,name:s,bio:p,fb_id:d}),i(null)}},"Save Changes")))},A=function(){var e=Object(r.useContext)(h),n=e.state.currentProfile,t=e.setCurrentProfile;return n?a.a.createElement(L,{hide:function(e){!e.target.closest(".dialog-content")&&t(null)}},a.a.createElement(T,null)):null};function U(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n"]);return U=function(){return e},e}var B=O.a.div(U()),S=function(){var e=Object(r.useContext)(h),n=e.state.profiles,t=e.fetchProfiles;return Object(r.useEffect)((function(){t()}),[]),a.a.createElement(B,null,a.a.createElement(A,null),n.map((function(e){return a.a.createElement(I,e)})))};function M(){var e=Object(E.a)(["\n  @media (max-width: 480px) {\n    width: 100%;\n    position: absolute;\n  }\n  top: 0;\n  bottom: 0;\n  left: 0;\n"]);return M=function(){return e},e}var J=O.a.div(M()),V=function(){return a.a.createElement(J,null,a.a.createElement(P,null),a.a.createElement(S,null))};var q=function(){return a.a.createElement(v,null,a.a.createElement(V,null))};t(53);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(q,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.670ec7ab.chunk.js.map