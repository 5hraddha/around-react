import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  const {
    onEditProfileClick,
    onAddPlaceClick,
    onEditAvatarClick
  } = props;

  React.useEffect(() => {
    api.getUserData()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then(setCards);
  }, []);

  return (
    <main className="content">
      {/* section containing user info, functionality to edit it and to add new images */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="profile picture" />
          <button
                  className="profile__avatar-update-button"
                  type="button"
                  aria-label="Update Profile Picture"
                  onClick={onEditAvatarClick}>
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__main-content">
            <h1 className="profile__title">{userName}</h1>
            <button
                    className="profile__edit-btn"
                    type="button"
                    aria-label="Edit Profile"
                    onClick={onEditProfileClick}>
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
        <ul className="elements">
          {cards.map(card => <Card key={card._id} card={card} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;