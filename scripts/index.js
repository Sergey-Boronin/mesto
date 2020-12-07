import {openPopup, closePopup} from './utils.js';
import {initialCards} from './initialCards.js'

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



function createCard(name, link) {
  // собрать карточку
  const cardTemplate = document.querySelector(".card-template").content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  cardElementImage.src = link;
  cardElementImage.alt = link;
  cardElement.querySelector(".card__title").textContent = name;
  // добавить слушатели
  cardElement.querySelector(".card__button").addEventListener("click", (evt) => { //кнопка лайка
    evt.target.classList.toggle("card__button_active");
  });
  cardElement.querySelector(".card__delete-button").addEventListener("click", (evt) => { // кнопка удаления карточки
    evt.target.closest(".card").remove();
  });
  cardElementImage.addEventListener("click", (evt) => { // поймать клик на картинке
    openPopup(popupScale);
    document.querySelector(".popup-scale__image").src = evt.target.src;
    document.querySelector(".popup-scale__caption").textContent = evt.target.nextElementSibling.firstElementChild.textContent;
  });
  return cardElement;
}

//добавить карточку
function addCard(container, element) {
  container.prepend(element);
}

function render() {
  initialCards.reverse().forEach((card) => { //массив инвертирован, чтобы не писать вторую функцию с методом .append для добавления новой карточки
    addCard(cardSection, createCard(card.name, card.link));
  });
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
  addCard(cardSection, createCard(placeInput.value, urlInput.value));
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



