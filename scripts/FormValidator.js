export class FormValidator {
  constructor(form, config){
    this._form = form;
    this._config = config;
  }

  _showError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent = this._input.validationMessage;
    this._input.classList.add(this._config.inputInvalidClass)
  }

  _hideError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent = '';
    this._input.classList.remove(this._config.inputInvalidClass)
  }

  _checkInputValidity(input) {
  this._input = input;
    if(!this._input.validity.valid){
      this._showError()
    } else {
      this._hideError()
      console.log(this._input.validity.valid)
    }
  }

  _setButtonState (button, isActive) {
    this._button = button;
    this._isActive = isActive;
    if(this._isActive){
      this._button.classList.remove(this._config.buttonInvalidClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._config.buttonInvalidClass);
      this._button.disabled = true;
    }
  }

  _setEventListeners() {
    const inputsList = this._form.querySelectorAll(this._config.inputSelector);
    console.log(inputsList)
    const submitButton = this._form.querySelector(this._config.submitButtonSelector);
    inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._setButtonState(submitButton, this._form.checkValidity())
      });
    })
  }

  enableValidation() {
  this._setEventListeners();
    }

  resetValidation() {
    const inputs = this._form.querySelectorAll(this._config.inputSelector);
    inputs.forEach((input) => {
      input.classList.remove(this._config.inputInvalidClass);
    });
    const errors = this._form.querySelectorAll(this._config.formError);
    errors.forEach((error) => {
      error.textContent = '';
    })
    const button = this._form.querySelector(this._config.submitButtonSelector);
    this._setButtonState(button, false);
    }

  }

