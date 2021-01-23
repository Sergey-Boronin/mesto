export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupMousedownHandler = this._popupMousedownHandler.bind(this);
    this._popupKeydownHandler = this._popupKeydownHandler.bind(this);
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._popupKeydownHandler);
  }
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._popupKeydownHandler);
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close");
    closeButton.addEventListener('click', () => {
    this.close()
    });
    this._popup.addEventListener('mousedown', this._popupMousedownHandler);
  }

  _popupMousedownHandler(evt){
    if (evt.target.classList.contains('popup')){
      this.close();
    }
  }

  _popupKeydownHandler(evt) {
    if(evt.key === "Escape"){
      this.close();
    }
  }
}


