(this["webpackJsonpreact-meetups5"]=this["webpackJsonpreact-meetups5"]||[]).push([[0],{11:function(e,t,n){e.exports={mobileMenu:"NavLinks_mobileMenu__Ab3wo",badge:"NavLinks_badge__1hyiu",active:"NavLinks_active__1f7Uc"}},12:function(e,t,n){e.exports={control:"NewMeetupForm_control__xuwh5",actions:"NewMeetupForm_actions__tMvWn"}},16:function(e,t,n){e.exports={image:"MeetupItem_image__1NY8N",content:"MeetupItem_content__3JjUt",actions:"MeetupItem_actions__i7I9f"}},24:function(e,t,n){e.exports={menuButton:"MenuButton_menuButton__3f1eC"}},26:function(e,t,n){e.exports={logo:"MainNavigation_logo__3mTft"}},27:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},28:function(e,t,n){e.exports={card:"Card_card__3_jzl"}},29:function(e,t,n){e.exports={list:"MeetupsList_list__3UjZh"}},34:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(23),s=n.n(r),a=(n(34),n(3)),o=n(9),j=n(19),l=n(20),u=n(24),d=n.n(u),b=n(0);var h=function(e){return Object(b.jsx)("div",{className:d.a.menuButton,children:e.open?Object(b.jsx)(j.a,{icon:l.b,size:"lg",color:"white",onClick:e.handleClick}):Object(b.jsx)(j.a,{icon:l.a,size:"lg",color:"white",onClick:e.handleClick})})},O=Object(c.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},isFavorite:function(e){}});function v(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),i=n[0],r=n[1];var s={favorites:i,totalFavorites:i.length,addFavorite:function(e){r((function(t){return t.concat(e)}))},removeFavorite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},isFavorite:function(e){return i.some((function(t){return t.id===e}))}};return Object(b.jsx)(O.Provider,{value:s,children:e.children})}var x=O,m=n(8),f=n(11),p=n.n(f);var _=function(e){var t=Object(c.useContext)(x);return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:e.open?p.a.mobileMenu:"",children:[Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/",exact:!0,activeClassName:p.a.active,children:"All meetups"})},1),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/new-meetup",activeClassName:p.a.active,children:"New meetup"})},2),Object(b.jsx)("li",{children:Object(b.jsxs)(m.b,{to:"/favorites",activeClassName:p.a.active,children:["Favorites",Object(b.jsx)("span",{className:p.a.badge,children:t.totalFavorites})]})},3)]})})},g=n(26),F=n.n(g);var N=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),i=n[0],r=n[1];return Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:F.a.logo,children:"Meetups"}),Object(b.jsx)(h,{handleClick:function(){r(!i)},open:i}),Object(b.jsx)(_,{open:i})]})},C=n(27),M=n.n(C);var w=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{}),Object(b.jsx)("main",{className:M.a.main,children:e.children})]})},S=n(15),k=n(28),y=n.n(k);var L=function(e){return Object(b.jsx)("div",{className:y.a.card,children:e.children})},I=n(16),T=n.n(I);var B=function(e){var t=Object(c.useContext)(x),n=t.isFavorite(e.id);return Object(b.jsx)(L,{children:Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:T.a.image,children:Object(b.jsx)("img",{src:e.image,alt:e.title})}),Object(b.jsxs)("div",{className:T.a.content,children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("address",{children:e.address}),Object(b.jsx)("p",{children:e.description})]}),Object(b.jsx)("div",{className:T.a.actions,children:Object(b.jsx)("button",{onClick:function(){n?t.removeFavorite(e.id):t.addFavorite(Object(S.a)({},e))},children:n?"Remove from favorites":"To favorites"})})]})})},R=n(29),q=n.n(R);var A=function(e){return Object(b.jsx)("ul",{className:q.a.list,children:e.meetups.map((function(e){return Object(b.jsx)(B,{id:e.id,title:e.title,image:e.image,address:e.address,description:e.description},e.id)}))})};var J=function(e){var t=Object(c.useState)(!0),n=Object(o.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)([]),a=Object(o.a)(s,2),j=a[0],l=a[1];return Object(c.useEffect)((function(){r(!0),fetch("https://react-course-859cd-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){l(function(e){var t=[];for(var n in e){var c=Object(S.a)({id:n},e[n]);t.push(c)}return t}(e)),r(!1)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"All meetups"}),i?Object(b.jsx)("p",{children:"Loading..."}):Object(b.jsx)(A,{meetups:j})]})};var P=function(e){var t,n=Object(c.useContext)(x);return t=0===n.totalFavorites?Object(b.jsx)("p",{children:"You have no favorites yet. Start adding some?"}):Object(b.jsx)(A,{meetups:n.favorites}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Favorites"}),t]})},U=n(12),z=n.n(U);var D=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useRef)(),r=Object(c.useRef)();return Object(b.jsx)(L,{children:Object(b.jsxs)("form",{onSubmit:function(c){c.preventDefault();var s={title:t.current.value,image:n.current.value,address:i.current.value,description:r.current.value};e.onSubmit(s)},children:[Object(b.jsxs)("div",{className:z.a.control,children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title"}),Object(b.jsx)("input",{type:"text",id:"title",required:!0,ref:t})]}),Object(b.jsxs)("div",{className:z.a.control,children:[Object(b.jsx)("label",{htmlFor:"image",children:"Image URL"}),Object(b.jsx)("input",{type:"url",id:"image",required:!0,ref:n})]}),Object(b.jsxs)("div",{className:z.a.control,children:[Object(b.jsx)("label",{htmlFor:"address",children:"Address"}),Object(b.jsx)("input",{type:"text",id:"address",required:!0,ref:i})]}),Object(b.jsxs)("div",{className:z.a.control,children:[Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:r})]}),Object(b.jsx)("div",{className:z.a.actions,children:Object(b.jsx)("button",{children:"Save"})})]})})};var E=function(e){var t=Object(a.f)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"New Meetup"}),Object(b.jsx)(D,{onSubmit:function(e){fetch("https://react-course-859cd-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(){t.replace("/")}))}})]})};var Y=function(){return Object(b.jsx)(w,{children:Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{path:"/new-meetup",children:Object(b.jsx)(E,{})}),Object(b.jsx)(a.a,{path:"/favorites",children:Object(b.jsx)(P,{})}),Object(b.jsx)(a.a,{path:"/",children:Object(b.jsx)(J,{})})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(Y,{})})})}),document.getElementById("root")),W()}},[[46,1,2]]]);
//# sourceMappingURL=main.79836ee9.chunk.js.map