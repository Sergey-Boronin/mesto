const formEdit = document.querySelector('.popup-edit__form');
const editInputsList = formEdit.querySelectorAll('.popup__input');
const editSubmitButton = formEdit.querySelector('.popup__button');



function showError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add('popup__input_state_invalid')
}
function hideError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove('popup__input_state_invalid')
}

function checkInputValidity(form, input) {
  if(!input.validity.valid){
    showError(form, input)
  } else {
    hideError(form, input)
  }
}


function setButtonState (button, isActive) {
  if(isActive){
    button.classList.remove('popup__button_invalid');
    button.disabled = false;
  } else {
    button.classList.add('popup__button_invalid');
    button.disabled = true    ;
  }
}

editInputsList.forEach((input) => {
  input.addEventListener('input', () => {
    checkInputValidity(formEdit, input);
    setButtonState (editSubmitButton, formEdit.checkValidity())
  });
});



