const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  buttonInvalidClass: 'popup__button_invalid',
  inputInvalidClass: 'popup__input_state_invalid',
  formError: '.popup__input-error',
};


//переменные попапа для редактирования профиля
const popupEdit = document.querySelector(".popup-edit");
const popupEditOpenButton = document.querySelector(".profile__edit-button");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_job");
const popupAvatar = document.querySelector('.popup-avatar');
const avatarEditButton = document.querySelector('.profile__avatar-edit-button');
const avatarInput = popupAvatar.querySelector('#avatar-input')
//переменные попапа для добавления места
const popupAddOpenButton = document.querySelector(".profile__add-button");

// переменные для добавления карточек
const cardSection = document.querySelector(".cards");

export {
  validationConfig,
  popupEditOpenButton,
  popupAvatar,
  avatarInput,
  nameInput,
  jobInput,
  popupAddOpenButton,
  cardSection,
  avatarEditButton,
};
