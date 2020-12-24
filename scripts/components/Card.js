export class Card {
  constructor(name, link, template, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = template;
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick(this._name, this._link);
    });
  };

  _handleLikeClick() {
    this._element.querySelector(".card__button").classList.toggle("card__button_active")
  };

  _handleDeleteCard() {
    this._element.remove()
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const elementImage = this._element.querySelector(".card__image");
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    return this._element;
  };
};

