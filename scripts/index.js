//переменные попапа для редактирования профиля
let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let popupSaveButton = document.querySelector('.popup__save');
let popupForm = document.querySelector('.popup__form')

//массив для первичного заполнения карточек
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

//создание всех карточек из массива
function render() {
  initialCards.forEach(renderCard);
}
//создание карточки
function renderCard(item) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardSection = document.querySelector('.cards');
    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__image').alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    cardSection.append(cardElement);
}

render(); //заполнили карточки при открытии страницы

function popupToggle() {
  popup.classList.toggle("popup_opened");
  if (popup.classList.contains("popup_opened")) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  } else {
    nameInput.value = "";
    jobInput.value = "";
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value
  popupToggle()
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popupForm.addEventListener('submit', formSubmitHandler);





