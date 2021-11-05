import React from 'react';

function Main() {
  const handleEditAvatarClick = () => {
    const editAvatarPopup = document.querySelector('.popup_rel_avatar');
    editAvatarPopup.classList.add('popup_opened');
  }

  const handleEditProfileClick = () => {
    const editProfilePopup = document.querySelector('.popup_rel_profile');
    editProfilePopup.classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => {
    const addPlacePopup = document.querySelector('.popup_rel_place');
    addPlacePopup.classList.add('popup_opened');
  }

  return (
    <main className="content">
      {/* section containing user info, functionality to edit it and to add new images */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="profile picture" />
          <button className="profile__avatar-update-button" type="button" aria-label="Update Profile Picture" onClick={handleEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__main-content">
            <h1 className="profile__title"></h1>
            <button className="profile__edit-btn" type="button" aria-label="Edit Profile" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__subtitle"></p>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Add Image" onClick={handleAddPlaceClick}></button>
      </section>

      {/* section containing all the cards having images and functionality to like/unlike */}
      <section>
        <ul className="elements"></ul>
      </section>
    </main>
  );
}

export default Main;