(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(6),o=a.n(r),i=(a(13),a(8)),s=a(2),l=a.p+"static/media/logo.3755f99c.svg",u=a(0);var p=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{className:"logo",src:l,alt:"logo of the webpage having text around the US"})})},d=c.a.createContext();var h=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDeleteClick,o=c.a.useContext(d),i=t.owner._id===o._id,s="element__delete-btn ".concat(i?"element__delete-btn_visible":"element__delete-btn_hidden"),l=t.likes.some((function(e){return e._id===o._id})),p="element__like-btn ".concat(l&&"element__like-btn_active");return Object(u.jsxs)("li",{className:"element",children:[Object(u.jsx)("img",{className:"element__img",src:t.link,alt:t.name,onClick:function(){return a(t)}}),Object(u.jsxs)("div",{className:"element__text",children:[Object(u.jsx)("h2",{className:"element__title",children:t.name}),Object(u.jsxs)("div",{className:"element__likes",children:[Object(u.jsx)("button",{className:p,type:"button","aria-label":"Like Image",onClick:function(){return n(t)}}),Object(u.jsx)("p",{className:"element__like-count",children:t.likes.length})]})]}),Object(u.jsx)("button",{className:s,type:"button","aria-label":"Delete Image",onClick:function(){return r(t)}})]},t._id)};var b=function(e){var t=e.cards,a=e.onEditProfileClick,n=e.onAddPlaceClick,r=e.onEditAvatarClick,o=e.onCardClick,i=e.onCardDeleteClick,s=e.onCardLike,l=c.a.useContext(d);return Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__avatar-container",children:[Object(u.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:"profile avatar"}),Object(u.jsx)("button",{className:"profile__avatar-update-button",type:"button","aria-label":"Update Profile Picture",onClick:r})]}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__main-content",children:[Object(u.jsx)("h1",{className:"profile__title",children:l.name}),Object(u.jsx)("button",{className:"profile__edit-btn",type:"button","aria-label":"Edit Profile",onClick:a})]}),Object(u.jsx)("p",{className:"profile__subtitle",children:l.about})]}),Object(u.jsx)("button",{className:"profile__add-btn",type:"button","aria-label":"Add Image",onClick:n})]}),Object(u.jsx)("section",{children:Object(u.jsx)("ul",{className:"elements",children:t.map((function(e){return Object(u.jsx)(h,{card:e,onCardClick:o,onCardLike:s,onCardDeleteClick:i},e._id)}))})})]})};var _=function(e){var t=e.card,a=e.onClose;return Object(u.jsx)("div",{className:"popup popup_rel_image ".concat(t&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__container popup__container_rel_image",children:[Object(u.jsxs)("figure",{className:"popup__figure",children:[Object(u.jsx)("img",{className:"popup__img",src:"".concat(t&&t.link),alt:"".concat(t&&t.name)}),Object(u.jsx)("figcaption",{className:"popup__caption",children:"".concat(t&&t.name)})]}),Object(u.jsx)("button",{className:"popup__close-btn popup__close-btn_rel_image",type:"button",onClick:a,"aria-label":"Close popup"})]})})};var j=function(e){var t=e.children,a=e.onClose,n=e.onSubmit,r=e.name,o=e.title,i=e.btnLabel,l=e.isOpen,p=c.a.createRef(),d=c.a.useState(!1),h=Object(s.a)(d,2),b=h[0],_=h[1];return c.a.useEffect((function(){_(p.current.checkValidity())}),[l,p]),Object(u.jsx)("div",{className:"popup popup_rel_".concat(r," ").concat(l&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsxs)("form",{className:"popup__form",name:r,action:"#",ref:p,onSubmit:n,onChange:function(){_(p.current.checkValidity())},noValidate:!0,children:[Object(u.jsx)("h2",{className:"popup__title popup__title_rel_".concat(r),children:o}),t,Object(u.jsx)("button",{className:"popup__submit popup__submit_rel_".concat(r," ").concat(!b&&"popup__submit_disabled"),type:"submit","aria-label":"".concat(i," ").concat(r),children:i})]}),Object(u.jsx)("button",{className:"popup__close-btn",type:"button","aria-label":"Close popup",onClick:a})]})})};var f=function(e){var t=e.isOpen,a=e.isDataLoading,n=e.onClose,r=e.onUpdateUser,o=c.a.useState(""),i=Object(s.a)(o,2),l=i[0],p=i[1],h=c.a.useState(""),b=Object(s.a)(h,2),_=b[0],f=b[1],m=c.a.useState(!0),v=Object(s.a)(m,2),O=v[0],g=v[1],x=c.a.useState(!0),C=Object(s.a)(x,2),k=C[0],N=C[1],S=c.a.useState(""),y=Object(s.a)(S,2),E=y[0],L=y[1],U=c.a.useState(""),D=Object(s.a)(U,2),w=D[0],P=D[1],A=c.a.useContext(d);c.a.useEffect((function(){p(A.name||""),f(A.about||""),g(!0),N(!0),L(""),P("")}),[A,t]);var R=function(e){var t=e.target,a=t.name,n=t.value,c=t.validity,r=t.validationMessage;switch(a){case"title":p(n),g(c.valid),!c.valid&&L(r);break;case"subtitle":f(n),N(c.valid),!c.valid&&P(r)}};return Object(u.jsxs)(j,{name:"profile",title:"Edit profile",btnLabel:a?"Saving":"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r({name:l,about:_})},children:[Object(u.jsx)("input",{className:"popup__input ".concat(!O&&"popup__input_type_error"),type:"text",id:"name-input",name:"title",placeholder:"Name",minLength:"2",maxLength:"40",onChange:R,value:l,required:!0}),Object(u.jsx)("span",{id:"name-input-error",className:"popup__error ".concat(!O&&"popup__error_visible"),children:E}),Object(u.jsx)("input",{className:"popup__input ".concat(!k&&"popup__input_type_error"),type:"text",id:"about-input",name:"subtitle",placeholder:"About me",minLength:"2",maxLength:"200",onChange:R,value:_,required:!0}),Object(u.jsx)("span",{id:"about-input-error",className:"popup__error ".concat(!k&&"popup__error_visible"),children:w})]})};var m=function(e){var t=e.isOpen,a=e.isDataLoading,n=e.onClose,r=e.onUpdateAvatar,o=c.a.useState(!0),i=Object(s.a)(o,2),l=i[0],p=i[1],d=c.a.useState(""),h=Object(s.a)(d,2),b=h[0],_=h[1],f=c.a.useRef();return c.a.useEffect((function(){f.current.value="",p(!0)}),[t]),Object(u.jsxs)(j,{name:"avatar",title:"Change Profile Picture",btnLabel:a?"Saving":"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r(f.current.value)},children:[Object(u.jsx)("input",{className:"popup__input ".concat(!l&&"popup__input_type_error"),type:"url",id:"avatarlink-input",name:"avatarlink",placeholder:"Image link",ref:f,onChange:function(e){p(e.target.validity.valid),_(f.current.validationMessage)},required:!0}),Object(u.jsx)("span",{id:"avatarlink-input-error",className:"popup__error ".concat(!l&&"popup__error_visible"),children:b})]})};var v=function(e){var t=e.isOpen,a=e.isDataLoading,n=e.onClose,r=e.onAddPlace,o=c.a.useState(""),i=Object(s.a)(o,2),l=i[0],p=i[1],d=c.a.useState(""),h=Object(s.a)(d,2),b=h[0],_=h[1],f=c.a.useState(!0),m=Object(s.a)(f,2),v=m[0],O=m[1],g=c.a.useState(!0),x=Object(s.a)(g,2),C=x[0],k=x[1],N=c.a.useState(""),S=Object(s.a)(N,2),y=S[0],E=S[1],L=c.a.useState(""),U=Object(s.a)(L,2),D=U[0],w=U[1];c.a.useEffect((function(){p(""),_(""),O(!0),k(!0),E(""),w("")}),[t]);var P=function(e){var t=e.target,a=t.name,n=t.value,c=t.validity,r=t.validationMessage;switch(a){case"name":p(n),O(c.valid),!c.valid&&E(r);break;case"link":_(n),k(c.valid),!c.valid&&w(r)}};return Object(u.jsxs)(j,{name:"place",title:"New Place",btnLabel:a?"Creating":"Create",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r(l,b)},children:[Object(u.jsx)("input",{className:"popup__input ".concat(!v&&"popup__input_type_error"),type:"text",id:"place-input",name:"name",placeholder:"Title",minLength:"1",maxLength:"30",value:l,onChange:P,required:!0}),Object(u.jsx)("span",{id:"place-input-error",className:"popup__error ".concat(!v&&"popup__error_visible"),children:y}),Object(u.jsx)("input",{className:"popup__input ".concat(!C&&"popup__input_type_error"),type:"url",id:"link-input",name:"link",placeholder:"Image link",value:b,onChange:P,required:!0}),Object(u.jsx)("span",{id:"link-input-error",className:"popup__error ".concat(!C&&"popup__error_visible"),children:D})]})};var O=function(e){var t=e.card,a=e.isOpen,n=e.isDataLoading,c=e.onClose,r=e.onCardDelete;return Object(u.jsx)(j,{name:"delete",title:"Are you sure?",btnLabel:n?"Deleting":"Yes",isOpen:a,onClose:c,onSubmit:function(e){e.preventDefault(),r(t)}})};var g=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__text",children:"\xa9 2021 Around The U.S."})})},x=a(7),C=new function e(t){var a=this;Object(x.a)(this,e),this._checkResponseStatus=function(e){return e.ok?e.json():Promise.reject("Error Code: ".concat(e.status," | Error Message: ").concat(e.statusText))},this.getInitialCards=function(){return fetch("".concat(a._baseUrl,"/cards"),{headers:a._headers}).then(a._checkResponseStatus)},this.addNewCard=function(e,t){return fetch("".concat(a._baseUrl,"/cards"),{method:"POST",headers:a._headers,body:JSON.stringify({name:e,link:t})}).then(a._checkResponseStatus)},this.deleteCard=function(e){return fetch("".concat(a._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:a._headers}).then(a._checkResponseStatus)},this.changeLikeCardStatus=function(e,t){var n=t?"DELETE":"PUT";return fetch("".concat(a._baseUrl,"/cards/likes/").concat(e),{method:n,headers:a._headers}).then(a._checkResponseStatus)},this.getUserData=function(){return fetch("".concat(a._baseUrl,"/users/me"),{headers:a._headers}).then(a._checkResponseStatus)},this.updateUserData=function(e){var t=e.name,n=e.about;return fetch("".concat(a._baseUrl,"/users/me"),{method:"PATCH",headers:a._headers,body:JSON.stringify({name:t,about:n})}).then(a._checkResponseStatus)},this.updateUserAvatar=function(e){return fetch("".concat(a._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a._headers,body:JSON.stringify({avatar:e})}).then(a._checkResponseStatus)},this._baseUrl=t.baseUrl,this._headers=t.headers}({baseUrl:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"9bc9c0f1-5a8a-40aa-b985-20e7b24d1389","Content-Type":"application/json"}});var k=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!1),o=Object(s.a)(r,2),l=o[0],h=o[1],j=c.a.useState(!1),x=Object(s.a)(j,2),k=x[0],N=x[1],S=c.a.useState(!1),y=Object(s.a)(S,2),E=y[0],L=y[1],U=c.a.useState(!1),D=Object(s.a)(U,2),w=D[0],P=D[1],A=c.a.useState(!1),R=Object(s.a)(A,2),T=R[0],I=R[1],q=c.a.useState(null),J=Object(s.a)(q,2),M=J[0],V=J[1],H=c.a.useState(null),z=Object(s.a)(H,2),B=z[0],Y=z[1],F=c.a.useState({}),G=Object(s.a)(F,2),K=G[0],Q=G[1],W=c.a.useState([]),X=Object(s.a)(W,2),Z=X[0],$=X[1];c.a.useEffect((function(){C.getInitialCards().then($).catch((function(e){console.log("Uh-oh! Error occured while fetching the existing cards from the server."),console.log(e)}))}),[]),c.a.useEffect((function(){C.getUserData().then((function(e){return Q(e)})).catch((function(e){console.log("Uh-oh! Error occured while fetching the current user data from the server."),console.log(e)}))}),[]),c.a.useEffect((function(){var e=function(e){e.target.classList.contains("popup_opened")&&ee()},t=function(e){"Escape"===e.key&&ee()};return(a||l||k||E||w)&&(document.addEventListener("click",e),document.addEventListener("keydown",t)),function(){document.removeEventListener("click",e),document.removeEventListener("keydown",t)}}),[a,l,k,E,w]);var ee=function(){n(!1),h(!1),N(!1),L(!1),P(!1),V(null),Y(null)};return Object(u.jsx)(d.Provider,{value:K,children:Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)("div",{className:"page__wrapper",children:[Object(u.jsx)(p,{}),Object(u.jsx)(b,{onEditProfileClick:function(){return n(!0)},onAddPlaceClick:function(){return N(!0)},onEditAvatarClick:function(){return h(!0)},onCardClick:function(e){V(e),L(!0)},onCardDeleteClick:function(e){Y(e),P(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===K._id}));C.changeLikeCardStatus(e._id,t).then((function(t){return $((function(a){return a.map((function(a){return a._id===e._id?t:a}))}))})).catch((function(e){console.log("Uh-oh! Error occured while changing the like status of the card."),console.log(e)}))},cards:Z}),Object(u.jsx)(g,{}),Object(u.jsx)(m,{isOpen:l,isDataLoading:T,onClose:ee,onUpdateAvatar:function(e){I(!0),C.updateUserAvatar(e).then((function(e){Q(e),ee()})).catch((function(e){console.log("Uh-oh! Error occured while updating the user avatar to the server."),console.log(e)})).finally((function(){return I(!1)}))}}),Object(u.jsx)(f,{isOpen:a,isDataLoading:T,onClose:ee,onUpdateUser:function(e){I(!0),C.updateUserData(e).then((function(e){Q(e),ee()})).catch((function(e){console.log("Uh-oh! Error occured while updating the user data to the server."),console.log(e)})).finally((function(){return I(!1)}))}}),Object(u.jsx)(v,{isOpen:k,isDataLoading:T,onClose:ee,onAddPlace:function(e,t){I(!0),C.addNewCard(e,t).then((function(e){$([e].concat(Object(i.a)(Z))),ee()})).catch((function(e){console.log("Uh-oh! Error occured while adding a new card to the server."),console.log(e)})).finally((function(){return I(!1)}))}}),Object(u.jsx)(_,{card:M,onClose:ee}),Object(u.jsx)(O,{card:B,isOpen:w,isDataLoading:T,onClose:ee,onCardDelete:function(e){I(!0),C.deleteCard(e._id).then((function(){$((function(t){return t.filter((function(t){return t._id!==e._id}))})),ee()})).catch((function(e){console.log("Uh-oh! Error occured while deleting the selected card from the server."),console.log(e)})).finally((function(){return I(!1)}))}})]})})})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f462e596.chunk.js.map