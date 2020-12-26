import {Popup} from '../components/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super (popupSelector);
    this._img = this._popup.querySelector(".popup-scale__image");
    this._name = this._popup.querySelector(".popup-scale__caption");
  }

  open(link, name) {
    this._img.src = link;
    this._name.textContent = name;
    super.open()
  }

}
