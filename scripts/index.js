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
// переменные для форм
const editForm = document.querySelector('.popup-edit__form');
const addForm = document.querySelector('.popup-add__form');


//массив для первичного заполнения карточек
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function popupMousedownHandler(evt){
  if (evt.target.classList.contains('popup')){
    closePopup(evt.target);
  }
};

function popupKeydownHandler(evt) {
  if(evt.key === "Escape"){
    closePopup(document.querySelector('.popup_opened'));
  }
};

// открытие/закрытие всех попапов
function openPopup(popup){
  popup.classList.add("popup_opened");
  popup.addEventListener('mousedown', popupMousedownHandler);
  document.addEventListener('keydown', popupKeydownHandler);
};


function resetValidation (form, config) {
  const inputs = form.querySelectorAll('.popup__input')
  const errors = form.querySelectorAll('.popup__input-error')
  inputs.forEach((input) => {
    input.classList.remove(config.inputInvalidClass);
  })
  errors.forEach((error) => {
    error.textContent = '';
  })
}

function closePopup(popup){
  popup.classList.remove("popup_opened")
  popup.removeEventListener('mousedown', popupMousedownHandler);
  document.removeEventListener('keydown', popupKeydownHandler);
  resetValidation(editForm, validationConfig)
};

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
};

//добавить карточку
function addCard(container, element) {
  container.prepend(element);
};

function render() {
  initialCards.reverse().forEach((card) => { //массив инвертирован, чтобы не писать вторую функцию с методом .append для добавления новой карточки
    addCard(cardSection, createCard(card.name, card.link));
  });
};

render();  //заполнить карточки из массива при открытии страницы

//сохранение имени и профессии
function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};

//добавление нового места
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  addCard(cardSection, createCard(placeInput.value, urlInput.value));
  //очистить форму перед закрытиием
  popupAddForm.reset();
  closePopup(popupAdd);
};

//отключить кнопку при повторном открытии окна добавления места
function resetSubmitButtonState(popup, config) {
  const addSubmitButton = popup.querySelector(config.submitButtonSelector);
  addSubmitButton.disabled = true;
  addSubmitButton.classList.add(config.buttonInvalidClass);
}

// остальные слушатели
popupEditOpenButton.addEventListener("click", () => {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
popupEditCloseButton.addEventListener("click", () => {closePopup(popupEdit)
});
popupAddOpenButton.addEventListener("click", () => {
  openPopup(popupAdd);
  resetSubmitButtonState(popupAdd, validationConfig);
});
popupAddCloseButton.addEventListener("click", () => {closePopup(popupAdd)
});
popupScaleCloseButton.addEventListener('click', () => {closePopup(popupScale)
});
popupEditForm.addEventListener("submit", formEditSubmitHandler);
popupAddForm.addEventListener("submit", formAddSubmitHandler);



