let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let popupSaveButton = document.querySelector('.popup__save');
let popupForm = document.querySelector('.popup__form')

function popupToggle () {
  popup.classList.toggle('popup_opened')
}

popupOpenButton.addEventListener('click', popupToggle);
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
popupCloseButton.addEventListener('click', popupToggle);

function formSubmitHandler (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value
  popupToggle()
}

popupForm.addEventListener('submit', formSubmitHandler);





