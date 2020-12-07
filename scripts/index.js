import {openPopup, closePopup} from './utils.js';
import {initialCards} from './initialCards.js'
import { Card } from './Card.js';

//переменные попапа для редактирования профиля
const popupEdit = document.querySelector(".popup-edit");
const popupEditOpenButton = document.querySelector(".profile__edit-button");
const popupEditCloseButton = popupEdit.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_job");
const popupEditForm = popupEdit.querySelector(".popup-edit__form");
const editSubmitButton = popupEdit.querySelector('.popup__button')
//переменные попапа для добавления места
const popupAdd = document.querySelector(".popup-add");
const popupAddOpenButton = document.querySelector(".profile__add-button");
const popupAddCloseButton = popupAdd.querySelector(".popup__close");
const placeInput = popupAdd.querySelector(".popup__input_type_place");
const urlInput = popupAdd.querySelector(".popup__input_type_url");
const popupAddForm = popupAdd.querySelector(".popup-add__form");
//переменные попапа для больших картинок
const popupScale = document.querySelector(".popup-scale");
const popupScaleCloseButton = popupScale.querySelector(".popup__close");
// переменные для добавления карточек
const cardSection = document.querySelector(".cards");
// переменные для форм

//добавить карточку
function addCard(container, element) {
  container.prepend(element);
}

function render () {
  initialCards.forEach(function (item) {
      const card = new Card(item.name, item.link, '.card-template');
      const cardElement = card.generateCard();
      // const cardSection = document.querySelector(".cards");
      addCard(cardSection, cardElement)
    })
}

render();  //заполнить карточки из массива при открытии страницы

//сохранение имени и профессии
function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

//добавление нового места
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const card = new Card(placeInput.value, urlInput.value, '.card-template');
  const cardElement = card.generateCard();
  addCard(cardSection, cardElement);
  //очистить форму перед закрытиием
  popupAddForm.reset();
  closePopup(popupAdd);
}

// остальные слушатели
popupEditOpenButton.addEventListener("click", () => {
  openPopup(popupEdit);
  resetValidation(popupEditForm, validationConfig);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
});
popupAddOpenButton.addEventListener("click", () => {
  openPopup(popupAdd);
  resetValidation(popupAddForm, validationConfig);
  placeInput.value = '';
  urlInput.value = '';
});
popupAddCloseButton.addEventListener("click", () => {
  closePopup(popupAdd);
});
popupScaleCloseButton.addEventListener('click', () => {closePopup(popupScale)
});
popupEditForm.addEventListener("submit", formEditSubmitHandler);
popupAddForm.addEventListener("submit", formAddSubmitHandler);



