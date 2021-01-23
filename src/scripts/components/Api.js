export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Ошибка: ${response.status}`));
  }

  getUserData() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers
    })
      .then(this._getResponseData)
  }

  updateUserData(name, about) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(this._getResponseData)
  }

  updateUserAvatar(avatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      })
    })
      .then(this._getResponseData)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers
    })
      .then(this._getResponseData)
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
      .then(this._getResponseData)
  }

  removeCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._getResponseData)
  }

  like(id) {
    return fetch(`${this._baseUrl}cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._getResponseData)
  }

  unlike(id) {
    return fetch(`${this._baseUrl}cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._getResponseData)
  }
}
