import {openPopup} from './utils.js'

class Card {
  constructor(name, link, template) {
    this._name = name;
    this._link = link;
    this._template = template;
  };

  _getTemplate() {
    const cardElement = document
    .querySelector(this._template)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  };

  _setEventListeners() {
    this._element.querySelector(".card__button").addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector(".card__delete-button").addEventListener("click", () => { // кнопка удаления карточки
      this._handleDeleteCard();
    });
    this._element.querySelector(".card__image").addEventListener('click', () => {
      this._handleOpenImage()
    })
  }

  _handleLikeClick() {
    this._element.querySelector(".card__button").classList.toggle("card__button_active")
  }

  _handleDeleteCard() {
    this._element.remove()
  }

  _handleOpenImage() {
    openPopup(document.querySelector(".popup-scale"))
    document.querySelector(".popup-scale__image").src = this._link
    document.querySelector(".popup-scale__caption").textContent = this._name
  }


  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();


    const elementImage = this._element.querySelector(".card__image");
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    return this._element
  }
  };

function render () {
  initCards.forEach(function (item) {
      const card = new Card(item.name, item.link, '.card-template');
      const cardElement = card.generateCard();
      const cardSection = document.querySelector(".cards");

      cardSection.append(cardElement);
    })
}
