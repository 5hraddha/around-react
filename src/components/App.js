import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';

function App() {
  return (
  <div className="page">
    <div className="page__wrapper">

      {/* page header */}
      <Header />

      {/* main content of the page */}
      <Main />

      {/* page footer */}
      <Footer />

      {/* update avatar popup box */}
      <PopupWithForm name="avatar" title="Change Profile Picture" btnLabel="Save">
        <input
              className="popup__input"
              type="url"
              id="avatarlink-input"
              name="avatarlink"
              placeholder="Image link"
              required />
        <span id="avatarlink-input-error" className="popup__error"></span>
      </PopupWithForm>

      {/* edit profile popup box */}
      <PopupWithForm name="profile" title="Edit profile" btnLabel="Save">
        <input
              className="popup__input"
              type="text"
              id="name-input"
              name="title"
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required />
        <span id="name-input-error" className="popup__error"></span>
        <input
              className="popup__input"
              type="text"
              id="about-input"
              name="subtitle"
              placeholder="About me"
              minLength="2"
              maxLength="200"
              required />
        <span id="about-input-error" className="popup__error"></span>
      </PopupWithForm>

      {/* add place popup box */}
      <PopupWithForm name="place" title="New Place" btnLabel="Create">
        <input
              className="popup__input"
              type="text"
              id="place-input"
              name="name"
              placeholder="Title"
              minLength="1"
              maxLength="30"
              required />
        <span id="place-input-error" className="popup__error"></span>
        <input
              className="popup__input"
              type="url"
              id="link-input"
              name="link"
              placeholder="Image link"
              required />
        <span id="link-input-error" className="popup__error"></span>
      </PopupWithForm>

      {/* view image popup box */}
      <div className="popup popup_rel_image">
        <div className="popup__container popup__container_rel_image">
          <figure className="popup__figure">
            <img className="popup__img" src="#" alt="#" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
          <button className="popup__close-btn popup__close-btn_rel_image" type="button" aria-label="Close Popup"></button>
        </div>
      </div>

    </div>

    {/* confirm delete image card popup box */}
    <PopupWithForm name="delete" title="Are you sure?" btnLabel="Yes" />

    {/* Element Template */}
    <template id="element-template">
      <li className="element">
        <img className="element__img" src="#" alt="#" />
        <div className="element__text">
          <h2 className="element__title"></h2>
          <div className="element__likes">
            <button className="element__like-btn" type="button" aria-label="Like Image"></button>
            <p className="element__like-count">0</p>
          </div>
        </div>
        <button className="element__delete-btn" type="button" aria-label="Delete Image"></button>
      </li>
    </template>

  </div>
  );
}

export default App;