function showError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputInvalidClass)
}
function hideError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove(config.inputInvalidClass)
}

function checkInputValidity(form, input, config) {
  if(!input.validity.valid){
    showError(form, input, config)
  } else {
    hideError(form, input, config)
  }
}

function setButtonState (button, isActive, config) {
  if(isActive){
    button.classList.remove(config.buttonInvalidClass);
    button.disabled = false;
  } else {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  }
}

function setEventListeners(form, config) {
  const inputsList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputsList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, config);
      setButtonState (submitButton, form.checkValidity(), config)
    });
  })
}

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, config);
  })
}

function resetValidation(form, config) {
  const inputs = form.querySelectorAll(config.inputSelector);
  inputs.forEach((input) => {
    input.classList.remove(config.inputInvalidClass);
  });
  const errors = form.querySelectorAll(config.formError);
  errors.forEach((error) => {
    error.textContent = '';
  })
  const button = form.querySelector(config.submitButtonSelector);
  setButtonState(button, false, config);
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  buttonInvalidClass: 'popup__button_invalid',
  inputInvalidClass: 'popup__input_state_invalid',
  formError: '.popup__input-error',
};

enableValidation(validationConfig);




