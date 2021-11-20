import React                from 'react';
import PropTypes            from 'prop-types';
import api                  from '../utils/api';
import Card                 from './Card';
import CurrentUserContext   from '../contexts/CurrentUserContext';

/**
 * The **Main** component representing the main content of the webpage.
 *
 * @version 0.0.1
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Main(props) {
  const [cards, setCards] = React.useState([]);

  const {
    onEditProfileClick,
    onAddPlaceClick,
    onEditAvatarClick,
    onCardClick
  } = props;

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getInitialCards()
        .then(setCards)
        .catch(err => console.log(err));
  }, []);

  const handleCardLike = card => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
        .then(newCard =>
          setCards(state => state.map(c => c._id === card._id ? newCard : c)))
        .catch(err => console.log(err));
  }

  const handleCardDelete = card => {
    api
      .deleteCard(card._id)
        .then(() =>
          setCards(state => state.filter(c => c._id !== card._id)))
        .catch(err => console.log(err));
  }

  return (
    <main className="content">
      {/* section containing user info, functionality to edit it and to add new images */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="profile avatar" />
          <button
                  className="profile__avatar-update-button"
                  type="button"
                  aria-label="Update Profile Picture"
                  onClick={onEditAvatarClick}>
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__main-content">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
                    className="profile__edit-btn"
                    type="button"
                    aria-label="Edit Profile"
                    onClick={onEditProfileClick}>
            </button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
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
          {cards.map(card =>
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete} />)}
        </ul>
      </section>
    </main>
  );
}

Main.propTypes = {
  /** A *callback function* that handles click on edit profile button */
  onEditProfileClick: PropTypes.func.isRequired,
  /** A *callback function* that handles click on add new place button */
  onAddPlaceClick   : PropTypes.func.isRequired,
  /** A *callback function* that handles click on edit avatar button */
  onEditAvatarClick : PropTypes.func.isRequired,
  /** A *callback function* that handles click on image card */
  onCardClick       : PropTypes.func.isRequired,
}

export default Main;