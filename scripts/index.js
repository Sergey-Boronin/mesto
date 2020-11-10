//переменные попапа для редактирования профиля
const popupEdit = document.querySelector(".popup-edit");
const popupEditOpenButton = document.querySelector(".profile__edit-button");
const popupEditCloseButton = popupEdit.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_job");
const popupEditSaveButton = popupEdit.querySelector(".popup__save");
const popupEditForm = popupEdit.querySelector(".popup__form");
//переменные попапа для добавления места
const popupAdd = document.querySelector(".popup-add");
const popupAddOpenButton = document.querySelector(".profile__add-button");
const popupAddCloseButton = popupAdd.querySelector(".popup__close");
const placeInput = popupAdd.querySelector(".popup__input_type_place");
const urlInput = popupAdd.querySelector(".popup__input_type_url");
const popupAddCreateButton = popupAdd.querySelector(".popup-create");
const popupAddForm = popupAdd.querySelector(".popup-add__form");
//переменные попапа для больших картинок
const popupScale = document.querySelector(".popup-scale");
const popupScaleCloseButton = popupScale.querySelector(".popup__close");
// переменные для добавления карточек
const cardSection = document.querySelector(".cards");
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

// открытие/закрытие всех попапов
function openEditPopup() {  //открыть форму редактирования
  popupEdit.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  //повесить слушатель зарытия
  popupEditCloseButton.addEventListener("click", closeEditPopup)
}

function closeEditPopup() {  //закрыть форму редактирования
  popupEdit.classList.remove("popup_opened");
}

function popupAddToggle() {  //открытие-закрытие попапа добавления места
  popupAdd.classList.toggle("popup_opened");
}

function openScalePopup(evt) { //  открыть попап картинки
  popupScale.classList.add('popup_opened');
  document.querySelector(".popup-scale__image").src = evt.target.src;
  document.querySelector(".popup-scale__caption").textContent = evt.target.nextElementSibling.firstElementChild.textContent;
  //повесить слушатель зарытия
  popupScaleCloseButton.addEventListener('click', () => {
    closeScalePopup();
  })
}

function closeScalePopup() {  //закрыть попап картинки
  popupScale.classList.remove('popup_opened')
}

function createCard(name, link) {
  // собрать карточку
  const cardTemplate = document.querySelector(".card-template").content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").alt = link;
  cardElement.querySelector(".card__title").textContent = name;
  // добавить слушатели
  cardElement.querySelector(".card__button").addEventListener("click", (evt) => { //кнопка лайка
    evt.target.classList.toggle("card__button_active");
  });
  cardElement.querySelector(".card__delete-button").addEventListener("click", (evt) => { // кнопка удаления карточки
    evt.target.closest(".card").remove();
  });
  cardElement.querySelector(".card__image").addEventListener("click", (evt) => { // кнопка закрытия окна с картинкой
    openScalePopup(evt)
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
  //очистить инпуты перед закрытием
  nameInput.value = "";
  jobInput.value = "";
  closeEditPopup();
}

//добавление нового места
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  addCard(cardSection, createCard(placeInput.value, urlInput.value));
  //очистить импуты перед закрытиием
  urlInput.value = "";
  placeInput.value = "";
  popupAddToggle();
}

// остальные слушатели
popupEditOpenButton.addEventListener("click", openEditPopup);
popupAddOpenButton.addEventListener("click", popupAddToggle);
popupAddCloseButton.addEventListener("click", popupAddToggle);
popupEditForm.addEventListener("submit", formEditSubmitHandler);
popupAddForm.addEventListener("submit", formAddSubmitHandler);
