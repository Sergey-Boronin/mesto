const formEdit = document.querySelector('.popup-edit__form');
const editNameInput = formEdit.querySelector('.popup__input_type_name');


editNameInput.addEventListener('input', (evt) => {
  const input = editNameInput;
  const error = formEdit.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;

  if(!input.validity.valid){
    input.classList.add('popup__input_state_invalid')
  } else {
    input.classList.remove('popup__input_state_invalid')
  }
})

