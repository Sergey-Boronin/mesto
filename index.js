(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=o.handleCardClick,a=o.handleDeleteClick,u=o.handleLike,c=o.handleUnike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._userId=r,this._cardOwner=e,this._userId=r,this._dataOwner=e.owner._id,this._id=e._id,this._handleLike=u,this._handleUnike=c,this._template=n,this._handleCardClick=i,this._handleDeleteClick=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__like-button").addEventListener("click",(function(){e._handleLike(e._id,e._isLiked())})),this._element.querySelector(".card__delete-button").addEventListener("click",this._handleDeleteClick),this._element.querySelector(".card__image").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_handleLikeClick",value:function(){this._element.querySelector(".card__like-button").classList.toggle("card__button_active")}},{key:"_isLiked",value:function(){var e=this,t=this._likes.find((function(t){return t._id==e._userId}));return Boolean(t)}},{key:"setLikes",value:function(e){this._likes=e,this._toggleLikeState(),this._updateLikeCounter()}},{key:"_toggleLikeState",value:function(){this._cardLikeButton.classList.toggle("card__button_active")}},{key:"_updateLikeCounter",value:function(){this._element.querySelector(".card__like-counter").textContent=this._likes.length}},{key:"_setDeleteButtonState",value:function(){var e=this._element.querySelector(".card__delete-button");this._dataOwner===this._userId?e.classList.remove("card__delete-button_inactive"):e.classList.add("card__delete-button_inactive")}},{key:"cardDelete",value:function(){this._element.remove(),this._element=null}},{key:"getId",value:function(){return this._id}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".card__image");return e.src=this._link,e.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._cardLikeButton=this._element.querySelector(".card__like-button"),this._cardLikeCounter=this._element.querySelector(".card__like-counter"),this._setDeleteButtonState(),this._updateLikeCounter(),this._isLiked()&&this._toggleLikeState(),this._element}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._config=n,this._inputsList=t.querySelectorAll(this._config.inputSelector),this._submitButton=t.querySelector(this._config.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showError",value:function(){this._form.querySelector("#".concat(this._input.id,"-error")).textContent=this._input.validationMessage,this._input.classList.add(this._config.inputInvalidClass)}},{key:"_hideError",value:function(){this._form.querySelector("#".concat(this._input.id,"-error")).textContent="",this._input.classList.remove(this._config.inputInvalidClass)}},{key:"_checkInputValidity",value:function(e){this._input=e,this._input.validity.valid?this._hideError():this._showError()}},{key:"_setButtonState",value:function(e,t){this._button=e,this._isActive=t,this._isActive?(this._button.classList.remove(this._config.buttonInvalidClass),this._button.disabled=!1):(this._button.classList.add(this._config.buttonInvalidClass),this._button.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this,t=this._form.querySelectorAll(this._config.inputSelector);this._form.querySelector(this._config.submitButtonSelector),t.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._setButtonState(e._submitButton,e._form.checkValidity())}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._inputsList.forEach((function(t){e._input=t,e._hideError()})),this._setButtonState(this._submitButton,!1)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupMousedownHandler=this._popupMousedownHandler.bind(this),this._popupKeydownHandler=this._popupKeydownHandler.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._popupKeydownHandler)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._popupKeydownHandler)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",this._popupMousedownHandler)}},{key:"_popupMousedownHandler",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"_popupKeydownHandler",value:function(e){"Escape"===e.key&&this.close()}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._img=t._popup.querySelector(".popup-scale__image"),t._name=t._popup.querySelector(".popup-scale__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._img.src=e,this._name.textContent=t,l(h(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),a}(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formSubmitHandler=t,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this._form.querySelectorAll(".popup__input"),t={};return e.forEach((function(e){t[e.name]=e.value})),t}},{key:"close",value:function(){this._form.reset(),v(k(a.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._formSubmitHandler(n)})),v(k(a.prototype),"setEventListeners",this).call(this)}}])&&y(t.prototype,n),a}(u);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"close",value:function(){E(C(a.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){console.log(t.target),t.preventDefault(),e._handleSubmit()})),E(C(a.prototype),"setEventListeners",this).call(this)}},{key:"setSubmitAction",value:function(e){this._handleSubmit=e}}])&&w(t.prototype,n),a}(u);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r),this._avatarSelector=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._nameElement.textContent=t,this._jobElement.textContent=n}},{key:"setUserAvatar",value:function(e){this._avatarSelector.src=e}}])&&q(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"updateUserData",value:function(e,t){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._getResponseData)}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"like",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"unlike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}}])&&R(t.prototype,n),e}(),U={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",buttonInvalidClass:"popup__button_invalid",inputInvalidClass:"popup__input_state_invalid",formError:".popup__input-error"},I=document.querySelector(".popup-edit"),T=document.querySelector(".profile__edit-button"),x=I.querySelector(".popup__input_type_name"),A=I.querySelector(".popup__input_type_job"),B=document.querySelector(".popup-avatar"),H=document.querySelector(".profile__avatar-edit-button"),V=B.querySelector("#avatar-input"),N=document.querySelector(".profile__add-button"),K=document.querySelector(".cards");function M(e,t){t.textContent=e?"Сохранение...":"Сохранить"}var J="",z=new r(document.querySelector(".popup-edit__form"),U);z.enableValidation();var F=new r(document.querySelector(".popup-add__form"),U);F.enableValidation();var G=new r(document.querySelector(".popup-avatar__form"),U);G.enableValidation();var Q=new P({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelector:".profile__avatar"}),W=new g(".popup-edit",(function(){var e=document.querySelector("#edit-submit-button");M(!0,e),ee.updateUserData(x.value,A.value).then((function(e){Q.setUserInfo(e),W.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){M(!1,e)}))}));W.setEventListeners();var X=new g(".popup-add",(function(e){var t=document.querySelector("#add-submit-button");M(!0,t),ee.addNewCard(e).then((function(e){ne(e),X.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){M(!1,t)}))}));X.setEventListeners();var Y=new g(".popup-avatar",(function(){var e=document.querySelector("#avatar-submit-button");M(!0,e),ee.updateUserAvatar(V.value).then((function(e){Q.setUserAvatar(e.avatar),Y.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){M(!1,e)}))}));Y.setEventListeners();var Z=new j(".popup-delete");Z.setEventListeners();var $=new _(".popup-scale");$.setEventListeners();var ee=new D({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19/",headers:{authorization:"6bac334c-d144-4b45-9ca7-72887d27cd10","Content-Type":"application/json"}});function te(e,t){$.open(t,e)}function ne(e){var n=new t(e,".card-template",J,{handleCardClick:te,handleDeleteClick:function(){Z.open(),Z.setSubmitAction((function(){ee.removeCard(n.getId()).then((function(){n.cardDelete(),Z.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},handleLike:function(e,t){t?ee.unlike(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))})):ee.like(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}}),r=n.generateCard();re.addItem(r)}var re=new i({renderer:function(e){ne(e)}},K);Promise.all([ee.getUserData(),ee.getInitialCards()]).then((function(e){Q.setUserInfo(e[0]),J=e[0]._id,Q.setUserAvatar(e[0].avatar),re.renderItems(e[1])})).catch((function(e){console.log("Ошибка: ".concat(e))})),T.addEventListener("click",(function(){W.open(),z.resetValidation();var e=Q.getUserInfo();x.value=e.name,A.value=e.job})),N.addEventListener("click",(function(){F.resetValidation(),X.open()})),H.addEventListener("click",(function(){G.resetValidation(),Y.open();var e=document.querySelector(".profile__avatar");V.value=e.src}))})();