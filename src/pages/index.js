import './index.css';
import { initialCards } from '../scripts/utils/initialCards.js';
import { Card } from '../scripts/components/Card.js'
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import {
  validationConfig,
  popupEditOpenButton,
  nameInput,
  jobInput,
  popupAddOpenButton,
  cardSection
} from '../scripts/utils/constants.js'

const editFormValidator = new FormValidator(document.querySelector('.popup-edit__form'), validationConfig);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(document.querySelector('.popup-add__form'), validationConfig);
addFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
});

const popupWithEditForm = new PopupWithForm('.popup-edit', formEditSubmitHandler)
popupWithEditForm.setEventListeners();

const popupWithAddForm = new PopupWithForm('.popup-add', formAddSubmitHandler);
popupWithAddForm.setEventListeners();


const popupWithImage = new PopupWithImage('.popup-scale');
popupWithImage.setEventListeners();

function formEditSubmitHandler(data) {
  userInfo.setUserInfo(data);
  popupWithEditForm.close();
};

function handleCardClick(name, link) {
  popupWithImage.open(link, name)
};

function createCard(data) {
  const card = new Card(data, '.card-template', handleCardClick);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

function formAddSubmitHandler(data) {
  createCard({
    name: data.place,
    link: data.url
  })
  popupWithAddForm.close();
};

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    createCard(item)
  },
},
  cardSection
);

cardList.renderItems();

popupEditOpenButton.addEventListener("click", () => {
  popupWithEditForm.open();
  editFormValidator.resetValidation();
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
});

popupAddOpenButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  popupWithAddForm.open();
});
