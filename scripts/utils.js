function popupMousedownHandler(evt){
  if (evt.target.classList.contains('popup')){
    closePopup(evt.target);
  }
}

function popupKeydownHandler(evt) {
  if(evt.key === "Escape"){
    closePopup(document.querySelector('.popup_opened'));
  }
}

// открытие/закрытие всех попапов
function openPopup(popup){
  popup.classList.add("popup_opened");
  popup.addEventListener('mousedown', popupMousedownHandler);
  document.addEventListener('keydown', popupKeydownHandler);
}

function closePopup(popup){
  popup.classList.remove("popup_opened")
  popup.removeEventListener('mousedown', popupMousedownHandler);
  document.removeEventListener('keydown', popupKeydownHandler);
}

export {openPopup, closePopup};
