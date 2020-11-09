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

function openScalePopup(evt){
  popupScale.classList.add('popup_opened')
  document.querySelector(".popup-scale__image").src = evt.target.src;
  document.querySelector(".popup-scale__caption").textContent = evt.target.nextElementSibling.firstElementChild.textContent;
  popupScaleCloseButton.addEventListener('click', function(){
    closeScalePopup();
  })
};

function closeScalePopup(){
  popupScale.classList.remove('popup_opened')
};

function createCard(name, link){
  // собрать карточку
  const cardTemplate = document.querySelector(".card-template").content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").alt = link;
  cardElement.querySelector(".card__title").textContent = name;
  // добавить слушатели
  cardElement.querySelector(".card__button").addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__button_active");
  });
  cardElement.querySelector(".card__delete-button").addEventListener("click", function (evt) {
    evt.target.closest(".card").remove();
  });
  cardElement.querySelector(".card__image").addEventListener("click", function (evt) {
    openScalePopup(evt)
  });
  return cardElement;
}

function addCard (container, element) {
  container.append(element)
}

function render() {
  initialCards.forEach(function(card){
    addCard(cardSection, createCard(card.name, card.link))
  })
}

render();

// //создание карточки
// function renderCard(item) {
//   // сборка элемента
//   const cardTemplate = document.querySelector(".card-template").content;
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardSection = document.querySelector(".cards");
//   const cardImage = cardElement.querySelector(".card__image");
//   cardImage.src = item.link;
//   cardImage.alt = item.name;
//   cardElement.querySelector(".card__title").textContent = item.name;

//   cardImage.addEventListener("click", function (evt) {
//     openPopup(popupScale, evt);
//       document.querySelector(".popup-scale__image").src = evt.target.src;
//   document.querySelector(".popup-scale__caption").textContent = evt.target.nextElementSibling.firstElementChild.textContent;
//   });
//   cardElement.querySelector(".card__button").addEventListener("click", function (evt) {
//     evt.target.classList.toggle("card__button_active");
//   });
//   cardElement.querySelector(".card__delete-button").addEventListener("click", function (evt) {
//     evt.target.closest(".card").remove();
//   });
//   cardSection.append(cardElement);
// }

//render(); //заполнили карточки при открытии страницы


// //открытие-закрытие попапа профиля
// function popupEditToggle() {
//   popupEdit.classList.toggle("popup_opened");
//   if (popupEdit.classList.contains("popup_opened")) {
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileJob.textContent;
//   } else {
//     nameInput.value = "";
//     jobInput.value = "";
//   }
// }
// //открытие-закрытие попапа добавления места
// function popupAddToggle() {
//   popupAdd.classList.toggle("popup_opened");
// }

// //закрыть попап c картинкой
// // function popupScaleClose() {
// //   popupScale.classList.remove("popup_opened");
// // }

// //сохранение имени и профессии
// function formEditSubmitHandler(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   popupEditToggle();
// }

// //добавление нового места
// function formAddSubmitHandler(evt) {
//   evt.preventDefault();
//   const cardTemplate = document.querySelector(".card-template").content;
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardSection = document.querySelector(".cards");
//   const cardImage = cardElement.querySelector(".card__image");
//   cardImage.src = urlInput.value;
//   cardImage.alt = placeInput.value;
//   cardImage.addEventListener("click", function (evt) {
//     openPopup(popupScale);
//
//   });
//   cardElement.querySelector(".card__title").textContent = placeInput.value;
//   cardElement.querySelector(".card__button").addEventListener("click", function (evt) {
//     evt.target.classList.toggle("card__button_active");
//   });
//   cardElement.querySelector(".card__delete-button").addEventListener("click", function (evt) {
//     evt.target.closest(".card").remove();
//   });
//   cardSection.prepend(cardElement);
//   urlInput.value = "";
//   placeInput.value = "";
//   popupAddToggle();
// }



// popupEditOpenButton.addEventListener("click", popupEditToggle);
// popupEditCloseButton.addEventListener("click", popupEditToggle);
// popupEditForm.addEventListener("submit", formEditSubmitHandler);
// popupAddOpenButton.addEventListener("click", popupAddToggle);
// popupAddCloseButton.addEventListener("click", popupAddToggle);
// popupAddForm.addEventListener("submit", formAddSubmitHandler);
// popupScaleCloseButton.addEventListener("click", () => {closePopup(popupScale)});
