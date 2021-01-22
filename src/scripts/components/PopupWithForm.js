import { Popup } from '../components/Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popup.querySelector('.popup__form')
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll('.popup__input');
    const obj = {};
    inputs.forEach(input => {
      obj[input.name] = input.value
    })
    return obj;
  }

  close() {
    this._form.reset();
    super.close();
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputsValues = this._getInputValues();
      this._formSubmitHandler(inputsValues);
    });
    super.setEventListeners();
  }
}

