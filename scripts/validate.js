const formEdit = document.querySelector('.popup-edit__form');
const editInputsList = formEdit.querySelectorAll('.popup__input');



editInputsList.forEach((input) => {
  input.addEventListener('input', () => {
    const error = formEdit.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;

    if(!input.validity.valid){
      input.classList.add('popup__input_state_invalid')
    } else {
      input.classList.remove('popup__input_state_invalid')
    }
  });
});



