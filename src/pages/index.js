import './index.css';
import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupConfirm } from '../scripts/components/PopupConfirm';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { Api } from '../scripts/components/Api.js';
import {
  validationConfig,
  popupEditOpenButton,
  nameInput,
  jobInput,
  popupAddOpenButton,
  cardSection,
  avatarEditButton,
  avatarInput,

} from '../scripts/utils/constants.js';

let userId = ''

const editFormValidator = new FormValidator(document.querySelector('.popup-edit__form'), validationConfig);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(document.querySelector('.popup-add__form'), validationConfig);
addFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(document.querySelector('.popup-avatar__form'), validationConfig);
avatarFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job',
  avatarSelector: '.profile__avatar'
});


const popupWithEditForm = new PopupWithForm('.popup-edit', formEditSubmitHandler)
popupWithEditForm.setEventListeners();

const popupWithAddForm = new PopupWithForm('.popup-add', formAddSubmitHandler);
popupWithAddForm.setEventListeners();

const popupWithAvatarForm = new PopupWithForm('.popup-avatar', formAvatarSubmitHandler)
popupWithAvatarForm.setEventListeners();

const popupConfirm = new PopupConfirm('.popup-delete');
popupConfirm.setEventListeners()

const popupWithImage = new PopupWithImage('.popup-scale');
popupWithImage.setEventListeners();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19/',
  headers: {
    authorization: '6bac334c-d144-4b45-9ca7-72887d27cd10',
    'Content-Type': 'application/json'
  }
})

function formEditSubmitHandler() {
  const profileSubmitButton = document.querySelector('#edit-submit-button');
  profileSubmitButton.textContent = 'Сохранение...'

  api.updateUserData(nameInput.value, jobInput.value)
    .then((result) => {
      userInfo.setUserInfo(result)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      profileSubmitButton.textContent = 'Сохранить'
    })

  popupWithEditForm.close();
};

function formAvatarSubmitHandler() {
  const avatarSubmitButton = document.querySelector('#avatar-submit-button')
  avatarSubmitButton.textContent = 'Соранение...'

  api.updateUserAvatar(avatarInput.value)
    .then((result) => {
      userInfo.setUserAvatar(result.avatar)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      avatarSubmitButton.textContent = 'Сохранить'
    })

  popupWithAvatarForm.close();
}

function formAddSubmitHandler(data) {
  const addSubmitButton = document.querySelector('#add-submit-button')
  addSubmitButton.textContent = 'Сохранение...'

  api.addNewCard(data)
    .then((result) => {
      createCard(result)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      addSubmitButton.textContent = 'Сохранить'
    })


  popupWithAddForm.close();
};

function handleCardClick(name, link) {
  popupWithImage.open(link, name)
};

function createCard(data) {

  const card = new Card(data,
    '.card-template',
    userId, {
    handleCardClick,
    handleDeleteClick: () => {
      popupConfirm.open();
      popupConfirm.setSubmitAction(() => {
        api.removeCard(card.getId())
          .then(() => {
            card.cardDelete()
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`)
          });
      })
    },
    handleLike: (id, isLiked) => {
      if (isLiked) {
        api.unlike(id)
          .then(result => {
            card.setLikes(result.likes);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`)
          });
      } else {
        api.like(id)
          .then(result => {
            card.setLikes(result.likes);

          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`)
          });
      }
    }
  },

  );
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

const cardList = new Section({
  renderer: (data) => {
    createCard(data)
  },
},
  cardSection
);

Promise.all([
  api.getUserData(),
  api.getInitialCards(),
])
  .then((result) => {
    userInfo.setUserInfo(result[0]);
    userId = result[0]._id;
    userInfo.setUserAvatar(result[0].avatar);
    cardList.renderItems(result[1]);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })

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

avatarEditButton.addEventListener('click', () => {
  avatarFormValidator.resetValidation();
  popupWithAvatarForm.open();
  const userAvatar = document.querySelector('.profile__avatar');
  avatarInput.value = userAvatar.src;
});




