import React from 'react';

function Main(props) {
  const {
    onEditProfileClick,
    onAddPlaceClick,
    onEditAvatarClick
  } = props;
  return (
    <main className="content">
      {/* section containing user info, functionality to edit it and to add new images */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="profile picture" />
          <button
                  className="profile__avatar-update-button"
                  type="button"
                  aria-label="Update Profile Picture"
                  onClick={onEditAvatarClick}>
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__main-content">
            <h1 className="profile__title"></h1>
            <button
                    className="profile__edit-btn"
                    type="button"
                    aria-label="Edit Profile"
                    onClick={onEditProfileClick}>
            </button>
          </div>
          <p className="profile__subtitle"></p>
        </div>
        <button
                className="profile__add-btn"
                type="button"
                aria-label="Add Image"
                onClick={onAddPlaceClick}>
        </button>
      </section>

      {/* section containing all the cards having images and functionality to like/unlike */}
      <section>
        <ul className="elements"></ul>
      </section>
    </main>
  );
}

export default Main;