(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),r=a.n(c),i=(a(10),a(2)),o=a.p+"static/media/logo.3755f99c.svg",l=a(0);var p=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{className:"logo",src:o,alt:"logo of the webpage having text around the US"})})},u=a(5),d=new function e(t){var a=this;Object(u.a)(this,e),this._checkResponseStatus=function(e){return e.ok?e.json():Promise.reject("Error Code: ".concat(e.status," | Error Msg: ").concat(e.statusText))},this.getInitialCards=function(){return fetch("".concat(a._baseUrl,"/cards"),{headers:a._headers}).then(a._checkResponseStatus)},this.addNewCard=function(e,t){return fetch("".concat(a._baseUrl,"/cards"),{method:"POST",headers:a._headers,body:JSON.stringify({name:e,link:t})}).then(a._checkResponseStatus)},this.deleteCard=function(e){return fetch("".concat(a._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:a._headers}).then(a._checkResponseStatus)},this.likeCard=function(e){return fetch("".concat(a._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:a._headers}).then(a._checkResponseStatus)},this.unlikeCard=function(e){return fetch("".concat(a._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:a._headers}).then(a._checkResponseStatus)},this.getUserData=function(){return fetch("".concat(a._baseUrl,"/users/me"),{headers:a._headers}).then(a._checkResponseStatus)},this.updateUserData=function(e,t){return fetch("".concat(a._baseUrl,"/users/me"),{method:"PATCH",headers:a._headers,body:JSON.stringify({name:e,about:t})}).then(a._checkResponseStatus)},this.updateUserAvatar=function(e){return fetch("".concat(a._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a._headers,body:JSON.stringify({avatar:e})}).then(a._checkResponseStatus)},this._baseUrl=t.baseUrl,this._headers=t.headers}({baseUrl:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"9bc9c0f1-5a8a-40aa-b985-20e7b24d1389","Content-Type":"application/json"}});var b=function(e){var t=e.card,a=e.onCardClick;return Object(l.jsxs)("li",{className:"element",children:[Object(l.jsx)("img",{className:"element__img",src:t.link,alt:t.name,onClick:function(){return a(t)}}),Object(l.jsxs)("div",{className:"element__text",children:[Object(l.jsx)("h2",{className:"element__title",children:t.name}),Object(l.jsxs)("div",{className:"element__likes",children:[Object(l.jsx)("button",{className:"element__like-btn",type:"button","aria-label":"Like Image"}),Object(l.jsx)("p",{className:"element__like-count",children:t.likes.length})]})]}),Object(l.jsx)("button",{className:"element__delete-btn",type:"button","aria-label":"Delete Image"})]},t._id)};var j=function(e){var t=s.a.useState(""),a=Object(i.a)(t,2),n=a[0],c=a[1],r=s.a.useState(""),o=Object(i.a)(r,2),p=o[0],u=o[1],j=s.a.useState(""),h=Object(i.a)(j,2),m=h[0],_=h[1],O=s.a.useState([]),f=Object(i.a)(O,2),x=f[0],N=f[1],k=e.onEditProfileClick,g=e.onAddPlaceClick,v=e.onEditAvatarClick,C=e.onCardClick;return s.a.useEffect((function(){d.getUserData().then((function(e){c(e.name),u(e.about),_(e.avatar)})).catch((function(e){return console.log(e)}))}),[]),s.a.useEffect((function(){d.getInitialCards().then(N).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__avatar-container",children:[Object(l.jsx)("img",{className:"profile__avatar",src:m,alt:"profile avatar"}),Object(l.jsx)("button",{className:"profile__avatar-update-button",type:"button","aria-label":"Update Profile Picture",onClick:v})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__main-content",children:[Object(l.jsx)("h1",{className:"profile__title",children:n}),Object(l.jsx)("button",{className:"profile__edit-btn",type:"button","aria-label":"Edit Profile",onClick:k})]}),Object(l.jsx)("p",{className:"profile__subtitle",children:p})]}),Object(l.jsx)("button",{className:"profile__add-btn",type:"button","aria-label":"Add Image",onClick:g})]}),Object(l.jsx)("section",{children:Object(l.jsx)("ul",{className:"elements",children:x.map((function(e){return Object(l.jsx)(b,{card:e,onCardClick:C},e._id)}))})})]})};var h=function(e){var t=e.children,a=e.onClose,n=e.name,s=e.title,c=e.btnLabel,r=e.isOpen;return Object(l.jsx)("div",{className:"popup popup_rel_".concat(n," ").concat(r&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsxs)("form",{className:"popup__form",name:n,action:"#",noValidate:!0,children:[Object(l.jsx)("h2",{className:"popup__title",children:s}),t,Object(l.jsx)("button",{className:"popup__submit",type:"submit","aria-label":"".concat(c," ").concat(n),children:c})]}),Object(l.jsx)("button",{className:"popup__close-btn",type:"button","aria-label":"Close popup",onClick:a})]})})};var m=function(e){var t=e.card,a=e.onClose;return Object(l.jsx)("div",{className:"popup popup_rel_image ".concat(t&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container popup__container_rel_image",children:[Object(l.jsxs)("figure",{className:"popup__figure",children:[Object(l.jsx)("img",{className:"popup__img",src:"".concat(t&&t.link),alt:"".concat(t&&t.name)}),Object(l.jsx)("figcaption",{className:"popup__caption",children:"".concat(t&&t.name)})]}),Object(l.jsx)("button",{className:"popup__close-btn popup__close-btn_rel_image",type:"button",onClick:a,"aria-label":"Close popup"})]})})};var _=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__text",children:"\xa9 2021 Around The U.S."})})};var O=function(){var e=s.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=s.a.useState(!1),r=Object(i.a)(c,2),o=r[0],u=r[1],d=s.a.useState(!1),b=Object(i.a)(d,2),O=b[0],f=b[1],x=s.a.useState(null),N=Object(i.a)(x,2),k=N[0],g=N[1],v=function(){n(!1),u(!1),f(!1),g(null)};return Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"page__wrapper",children:[Object(l.jsx)(p,{}),Object(l.jsx)(j,{onEditProfileClick:function(){return n(!0)},onAddPlaceClick:function(){return u(!0)},onEditAvatarClick:function(){return f(!0)},onCardClick:function(e){return g(e)}}),Object(l.jsx)(_,{}),Object(l.jsxs)(h,{name:"avatar",title:"Change Profile Picture",btnLabel:"Save",isOpen:O,onClose:v,children:[Object(l.jsx)("input",{className:"popup__input",type:"url",id:"avatarlink-input",name:"avatarlink",placeholder:"Image link",required:!0}),Object(l.jsx)("span",{id:"avatarlink-input-error",className:"popup__error"})]}),Object(l.jsxs)(h,{name:"profile",title:"Edit profile",btnLabel:"Save",isOpen:a,onClose:v,children:[Object(l.jsx)("input",{className:"popup__input",type:"text",id:"name-input",name:"title",placeholder:"Name",minLength:"2",maxLength:"40",required:!0}),Object(l.jsx)("span",{id:"name-input-error",className:"popup__error"}),Object(l.jsx)("input",{className:"popup__input",type:"text",id:"about-input",name:"subtitle",placeholder:"About me",minLength:"2",maxLength:"200",required:!0}),Object(l.jsx)("span",{id:"about-input-error",className:"popup__error"})]}),Object(l.jsxs)(h,{name:"place",title:"New Place",btnLabel:"Create",isOpen:o,onClose:v,children:[Object(l.jsx)("input",{className:"popup__input",type:"text",id:"place-input",name:"name",placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),Object(l.jsx)("span",{id:"place-input-error",className:"popup__error"}),Object(l.jsx)("input",{className:"popup__input",type:"url",id:"link-input",name:"link",placeholder:"Image link",required:!0}),Object(l.jsx)("span",{id:"link-input-error",className:"popup__error"})]}),Object(l.jsx)(m,{card:k,onClose:v}),Object(l.jsx)(h,{name:"delete",title:"Are you sure?",btnLabel:"Yes",onClose:v})]})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.26c289a5.chunk.js.map