import {openPopup, closePopup} from './utils.js';
import {initialCards} from './initialCards.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {validationConfig} from './constants.js';
import {Section} from './Section.js';

const editFormValidator = new FormValidator(document.querySelector('.popup-edit__form'), validationConfig);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(document.querySelector('.popup-add__form'), validationConfig);
addFormValidator.enableValidation();

//переменные попапа для редактирования профиля
const popupEdit = document.querySelector(".popup-edit");
const popupEditOpenButton = document.querySelector(".profile__edit-button");
const popupEditCloseButton = popupEdit.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_job");
const popupEditForm = popupEdit.querySelector(".popup-edit__form");
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

const cardList = new Section ({
  items: initialCards,
  renderer: (item) => { // становится пареметром конструктора Section - renderedItems
  const card = new Card(item.name, item.link, '.card-template');
  const cardElement = card.generateCard();

  cardList.addItem(cardElement)
},
},
cardSection
);

cardList.renderItems();

//сохранение имени и профессии
function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}


function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const card = new Card(placeInput.value, urlInput.value, '.card-template');
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  //очистить форму перед закрытиием
  popupAddForm.reset();
  closePopup(popupAdd);
}


// остальные слушатели
popupEditOpenButton.addEventListener("click", () => {
  openPopup(popupEdit);
  editFormValidator.resetValidation()
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
});
popupAddOpenButton.addEventListener("click", () => {
  openPopup(popupAdd);
  addFormValidator.resetValidation();
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



