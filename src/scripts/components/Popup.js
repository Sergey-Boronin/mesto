export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  open() {
    this._popup.classList.add("popup_opened");
    this._popup.addEventListener('mousedown', this._popupMousedownHandler.bind(this))
    document.addEventListener('keydown', this._popupKeydownHandler.bind(this));
  }
  close() {
    this._popup.classList.remove("popup_opened");
    this._popup.removeEventListener('mousedown', this._popupMousedownHandler);
    document.removeEventListener('keydown', this._popupKeydownHandler);
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close");
    closeButton.addEventListener('click', () => {
    this.close()
    })
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


