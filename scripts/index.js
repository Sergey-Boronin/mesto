let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let popupSaveButton = document.querySelector('.popup__save');
let popupForm = document.querySelector('.popup__form')

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





