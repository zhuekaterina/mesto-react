(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(4),o=a.n(r),i=(a(12),a(2)),u=a.p+"static/media/logo.a307e1c4.svg";var l=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{className:"header__logo",src:u,alt:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 - Mesto."})})};var p=function(e){var t=e.card,a=e.onCardClick,s=e.onDeteteCardClick;return Object(n.jsxs)("div",{className:"element",children:[Object(n.jsx)("button",{type:"button",className:"element__delete-button",name:"delete-button",onClick:s}),Object(n.jsx)("img",{className:"element__picture",alt:t.name,src:t.link,onClick:function(){a(t)}}),Object(n.jsxs)("div",{className:"element__caption",children:[Object(n.jsx)("h2",{className:"element__name",children:t.name}),Object(n.jsxs)("div",{className:"element__likes",children:[Object(n.jsx)("button",{type:"button",className:"element__like-button",name:"like-button"}),Object(n.jsx)("p",{className:"element__likes-number",children:t.likes.length})]})]})]})};var d=function(e){var t=e.onEditProfile,a=e.onAddPlace,s=e.onEditAvatar,c=e.userName,r=e.userDescription,o=e.userAvatar,i=e.cards,u=e.onCardClick,l=e.onDeteteCardClick;return Object(n.jsxs)("main",{className:"main",children:[Object(n.jsxs)("section",{className:"profile main__profile",children:[Object(n.jsxs)("div",{className:"profile__avatar-container",children:[Object(n.jsx)("img",{className:"profile__avatar",src:o,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."}),Object(n.jsx)("div",{className:"profile__avatar-cover",children:Object(n.jsx)("button",{type:"button",name:"avatar-edit-button",className:"profile__avatar-edit",onClick:s})})]}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("h1",{className:"profile__name",children:c}),Object(n.jsx)("button",{type:"button",name:"edit-button",className:"profile__edit-button",onClick:t}),Object(n.jsx)("p",{className:"profile__job",children:r})]}),Object(n.jsx)("button",{type:"button",name:"add-button",className:"profile__add-button",onClick:a})]}),Object(n.jsx)("section",{className:"elements",children:i.map((function(e){return Object(n.jsx)(p,{card:e,onCardClick:u,onDeteteCardClick:l},e._id)}))})]})};var m=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var b=function(e){var t=e.name,a=e.isOpen,s=e.title,c=e.children,r=e.onClose,o=e.buttonText;return Object(n.jsxs)("div",{className:"popup popup-".concat(t," ").concat(a&&"popup_opened"),children:[Object(n.jsx)("button",{type:"button",name:"close-button",className:"popup__close-button popup-".concat(t,"__close-button"),onClick:r}),Object(n.jsxs)("form",{className:"popup__form popup-".concat(t,"__form"),noValidate:!0,children:[Object(n.jsx)("h3",{className:"popup-".concat(t,"__title"),children:s}),c,Object(n.jsx)("button",{type:"submit",className:"popup-".concat(t,"__save-button popup__button"),name:"save-button",onClick:r,children:o})]})]})};var h=function(e){var t=e.isOpen,a=e.onClose,s=e.name,c=e.link;return Object(n.jsx)("div",{className:"popup popup-zoom ".concat(t&&"popup_opened"),children:Object(n.jsxs)("figure",{className:"popup-zoom__figure",children:[Object(n.jsx)("button",{type:"button",name:"image-close-button",className:"popup__close-button popup-zoom__close-button",onClick:a}),Object(n.jsx)("img",{className:"popup-zoom__image",alt:s,src:c}),Object(n.jsx)("h4",{className:"popup-zoom__name",children:s})]})})},j=a(5),_=a(6),f=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(j.a)(this,e),this._baseUrl=a,this._headers=n}return Object(_.a)(e,[{key:"getResStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e.getResStatus(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e.getResStatus(t)}))}},{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"editUserInfo",value:function(e){var t=this,a=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(a),about:"".concat(n)})}).then((function(e){return t.getResStatus(e)}))}},{key:"addNewCard",value:function(e){var t=this,a=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({link:"".concat(n),name:"".concat(a)})}).then((function(e){return t.getResStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t.getResStatus(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t.getResStatus(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t.getResStatus(e)}))}},{key:"editAvatar",value:function(e){var t=this,a=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(a)})}).then((function(e){return t.getResStatus(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"9e2464ed-9bf4-456d-960e-bc935e02e4f4","Content-Type":"application/json"}});var O=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],r=c.a.useState(!1),o=Object(i.a)(r,2),u=o[0],p=o[1],j=c.a.useState(!1),_=Object(i.a)(j,2),O=_[0],v=_[1],x=c.a.useState({}),N=Object(i.a)(x,2),k=N[0],g=N[1],C=c.a.useState([]),y=Object(i.a)(C,2),S=y[0],U=y[1],T=c.a.useState({}),E=Object(i.a)(T,2),L=E[0],P=E[1],A=c.a.useState(!1),I=Object(i.a)(A,2),R=I[0],D=I[1],z=c.a.useState(!1),q=Object(i.a)(z,2),J=q[0],w=q[1],F=k.name,M=k.about,B=k.avatar;function H(){s(!1),v(!1),p(!1),D(!1)}return c.a.useEffect((function(){f.getUserInfo().then((function(e){g(e)})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){f.getInitialCards().then((function(e){U(e)})).catch((function(e){console.log(e)}))}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"page",children:[Object(n.jsx)(l,{}),Object(n.jsx)(d,{onEditProfile:function(){s(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){v(!0)},userName:F,userDescription:M,userAvatar:B,cards:S,onCardClick:function(e){D(!0),P(e)},onDeteteCardClick:function(){w(!0)}}),Object(n.jsx)(m,{}),Object(n.jsxs)(b,{name:"user",isOpen:a,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClose:H,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(n.jsx)("input",{placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"name",id:"user-name",className:"popup__input popup-user__field",type:"text",required:!0,minLength:"2",maxLength:"40"}),Object(n.jsx)("span",{className:"popup__error",id:"user-name-error"}),Object(n.jsx)("input",{placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",name:"about",id:"user-job",className:"popup__input popup-user__field",type:"text",required:!0,minLength:"2",maxLength:"200"}),Object(n.jsx)("span",{className:"popup__error",id:"user-job-error"})]}),Object(n.jsxs)(b,{name:"card",isOpen:u,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onClose:H,buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(n.jsx)("input",{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",id:"card-name",className:"popup__input popup-card__field",type:"text",required:!0,minLength:"1",maxLength:"30"}),Object(n.jsx)("span",{className:"popup__error",id:"card-name-error"}),Object(n.jsx)("input",{placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",id:"card-link",className:"popup__input popup-card__field",required:!0,type:"url"}),Object(n.jsx)("span",{className:"popup__error",id:"card-link-error"})]}),Object(n.jsxs)(b,{name:"avatar",isOpen:O,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClose:H,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(n.jsx)("input",{placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",id:"avatar-link",className:"popup__input popup-avatar__field",required:!0,type:"url"}),Object(n.jsx)("span",{className:"popup__error",id:"avatar-link-error"})]}),Object(n.jsx)(b,{name:"removal",isOpen:J,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onClose:H,buttonText:"\u0414\u0430"}),Object(n.jsx)(h,{isOpen:R,onClose:H,name:L.name,link:L.link})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.a6b29cf8.chunk.js.map