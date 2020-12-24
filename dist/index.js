(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._link=n,this._template=r,this._handleCardClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__button").addEventListener("click",(function(){e._handleLikeClick()})),this._element.querySelector(".card__delete-button").addEventListener("click",(function(){e._handleDeleteCard()})),this._element.querySelector(".card__image").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_handleLikeClick",value:function(){this._element.querySelector(".card__button").classList.toggle("card__button_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove()}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".card__image");return e.src=this._link,e.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._element}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._config=n}var t,r;return t=e,(r=[{key:"_showError",value:function(){this._form.querySelector("#".concat(this._input.id,"-error")).textContent=this._input.validationMessage,this._input.classList.add(this._config.inputInvalidClass)}},{key:"_hideError",value:function(){this._form.querySelector("#".concat(this._input.id,"-error")).textContent="",this._input.classList.remove(this._config.inputInvalidClass)}},{key:"_checkInputValidity",value:function(e){this._input=e,this._input.validity.valid?this._hideError():this._showError()}},{key:"_setButtonState",value:function(e,t){this._button=e,this._isActive=t,this._isActive?(this._button.classList.remove(this._config.buttonInvalidClass),this._button.disabled=!1):(this._button.classList.add(this._config.buttonInvalidClass),this._button.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this,t=this._form.querySelectorAll(this._config.inputSelector),n=this._form.querySelector(this._config.submitButtonSelector);t.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._setButtonState(n,e._form.checkValidity())}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._form.querySelectorAll(this._config.inputSelector).forEach((function(t){t.classList.remove(e._config.inputInvalidClass)})),this._form.querySelectorAll(this._config.formError).forEach((function(e){e.textContent=""}));var t=this._form.querySelector(this._config.submitButtonSelector);this._setButtonState(t,!1)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.reverse().forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this._popup.addEventListener("mousedown",this._popupMousedownHandler.bind(this)),document.addEventListener("keydown",this._popupKeydownHandler.bind(this))}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._popup.removeEventListener("mousedown",this._popupMousedownHandler),document.removeEventListener("keydown",this._popupKeydownHandler)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()}))}},{key:"_popupMousedownHandler",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"_popupKeydownHandler",value:function(e){"Escape"===e.key&&this.close()}}])&&u(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._img=t._popup.querySelector(".popup-scale__image"),t._name=t._popup.querySelector(".popup-scale__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._img.src=e,this._name.textContent=t,l(_(u.prototype),"open",this).call(this)}}])&&s(t.prototype,n),u}(c);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._formSubmitHandler=t,n._form=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this._form.querySelectorAll(".popup__input"),t={};return e.forEach((function(e){t[e.name]=e.value})),t}},{key:"close",value:function(){this._form.reset(),v(g(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._formSubmitHandler(n),e.close()})),v(g(u.prototype),"setEventListeners",this).call(this)}}])&&h(t.prototype,n),u}(c);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._nameElement.textContent=t,this._jobElement.textContent=n}}])&&S(t.prototype,n),e}(),E={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",buttonInvalidClass:"popup__button_invalid",inputInvalidClass:"popup__input_state_invalid",formError:".popup__input-error"},j=document.querySelector(".popup-edit"),q=document.querySelector(".profile__edit-button"),C=j.querySelector(".popup__input_type_name"),L=j.querySelector(".popup__input_type_job"),O=document.querySelector(".popup-add"),I=document.querySelector(".profile__add-button"),P=O.querySelector(".popup__input_type_place"),x=O.querySelector(".popup__input_type_url"),R=document.querySelector(".cards"),T=new r(document.querySelector(".popup-edit__form"),E);T.enableValidation();var V=new r(document.querySelector(".popup-add__form"),E);V.enableValidation();var D=new w({nameSelector:".profile__name",jobSelector:".profile__job"}),H=new k(".popup-edit",(function(e){D.setUserInfo(e)}));H.setEventListeners();var A=new k(".popup-add",(function(){var e=new t(P.value,x.value,".card-template",M).generateCard();U.addItem(e)}));A.setEventListeners();var B=new d(".popup-scale");function M(e,t){B.open(t,e)}B.setEventListeners();var U=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var n=new t(e.name,e.link,".card-template",M).generateCard();U.addItem(n)}},R);U.renderItems(),q.addEventListener("click",(function(){H.open(),T.resetValidation();var e=D.getUserInfo();C.value=e.name,L.value=e.job})),I.addEventListener("click",(function(){V.resetValidation(),A.open()}))})();