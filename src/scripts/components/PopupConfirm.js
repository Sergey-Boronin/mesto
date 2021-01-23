import { Popup } from './Popup.js';

export class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._form = this._popup.querySelector('.popup__form')
  }

  close() {
    super.close()
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      console.log(evt.target)
      evt.preventDefault();
      this._handleSubmit();
    });

    super.setEventListeners()
  }

  setSubmitAction(submitAction) {

    this._handleSubmit = submitAction;
  }
}
