
export class Card {
  constructor(data, template, userId, {
    handleCardClick,
    handleDeleteClick,
    handleLike,
    handleUnike
  }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = userId;
    this._cardOwner = data;
    this._userId = userId;
    this._dataOwner = data.owner._id;
    this._id = data._id;
    this._handleLike = handleLike;
    this._handleUnike = handleUnike;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick
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
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLike(this._id, this._isLiked())
    })

    this._element.querySelector(".card__delete-button").addEventListener("click", this._handleDeleteClick);
    this._element.querySelector(".card__image").addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  _handleLikeClick() {
    this._element.querySelector(".card__like-button").classList.toggle("card__button_active")
  };

  _isLiked() {
    const isLiked = this._likes.find(like => {
      return like._id == this._userId
    });
    return Boolean(isLiked);
  }

  setLikes(updatedLikes) {
    this._likes = updatedLikes;
    this._toggleLikeState();
    this._updateLikeCounter();
  }

  _toggleLikeState() {
    this._cardLikeButton.classList.toggle('card__button_active');
  }

  _updateLikeCounter() {
    this._element.querySelector('.card__like-counter').textContent = this._likes.length;
  }

  _setDeleteButtonState() {
    const cardDeleteButton = this._element.querySelector('.card__delete-button')
    if (this._dataOwner === this._userId) {
      cardDeleteButton.classList.remove('card__delete-button_inactive')
    } else {
      cardDeleteButton.classList.add('card__delete-button_inactive')
    }
  }

  cardDelete() {
    this._element.remove();
    this._element = null;
  }

  getId() {
    return this._id;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const elementImage = this._element.querySelector(".card__image");
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    this._cardLikeButton = this._element.querySelector('.card__like-button');
    this._cardLikeCounter = this._element.querySelector('.card__like-counter');
    this._setDeleteButtonState();
    this._updateLikeCounter()
    if (this._isLiked()) {
      this._toggleLikeState();
    }
    return this._element;
  };
};

