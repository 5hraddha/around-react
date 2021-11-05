import React from 'react';
import pageLogo from '../images/logo.svg';

function App() {
  return (
  <div className="page">
    <div className="page__wrapper">

      {/* page header */}
      <header className="header">
        <img className="logo" src={pageLogo} alt="logo of the webpage having text around the US" />
      </header>

      {/* main content of the page */}
      <main className="content">
        {/* section containing user info, functionality to edit it and to add new images */}
        <section className="profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" alt="profile picture" />
            <button className="profile__avatar-update-button" type="button" aria-label="Update Profile Picture"></button>
          </div>
          <div className="profile__info">
            <div className="profile__main-content">
              <h1 className="profile__title"></h1>
              <button className="profile__edit-btn" type="button" aria-label="Edit Profile"></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
          <button className="profile__add-btn" type="button" aria-label="Add Image"></button>
        </section>

        {/* section containing all the cards having images and functionality to like/unlike */}
        <section>
          <ul className="elements"></ul>
        </section>
      </main>

      {/* page footer */}
      <footer className="footer">
        <p className="footer__text">© 2021 Around The U.S.</p>
      </footer>

      {/* update avatar popup box */}
      <div className="popup popup_rel_avatar">
        <div className="popup__container">
          <form className="popup__form" name="avatar-update" action="#" noValidate>
            <h2 className="popup__title">Change Profile Picture</h2>
            <input 
              className="popup__input" 
              type="url" 
              id="avatarlink-input" 
              name="avatarlink" 
              placeholder="Image link" 
              required />
            <span id="avatarlink-input-error" className="popup__error"></span>
            <button className="popup__submit" type="submit" aria-label="Save Avatar">Save</button>
          </form>
          <button className="popup__close-btn" type="button" aria-label="Close Popup"></button>
        </div>
      </div>

      {/* edit profile popup box */}
      <div className="popup popup_rel_profile">
        <div className="popup__container">
          <form className="popup__form" name="profile-edit" action="#" noValidate>
            <h2 className="popup__title">Edit profile</h2>
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
            <button className="popup__submit" type="submit" aria-label="Save Profile">Save</button>
          </form>
          <button className="popup__close-btn" type="button" aria-label="Close Popup"></button>
        </div>
      </div>

      {/* add place popup box */}
      <div className="popup popup_rel_place">
        <div className="popup__container">
          <form className="popup__form" name="place-add" action="#" noValidate>
            <h2 className="popup__title">New Place</h2>
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
            <button className="popup__submit" type="submit" aria-label="Create Place">Create</button>
          </form>
          <button className="popup__close-btn" type="button" aria-label="Close Popup"></button>
        </div>
      </div>

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
    <div className="popup popup_rel_delete">
      <div className="popup__container">
        <form className="popup__form" name="place-delete" action="#" noValidate>
          <h2 className="popup__title popup__title_rel_delete">Are you sure?</h2>
          <button className="popup__submit popup__submit_rel_delete" type="submit" aria-label="Confirm Delete">Yes</button>
        </form>
        <button className="popup__close-btn" type="button" aria-label="Close Popup"></button>
      </div>
    </div>

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