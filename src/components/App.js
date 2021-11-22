import React                from 'react';
import Header               from './Header';
import Main                 from './Main';
import PopupWithForm        from './PopupWithForm';
import ImagePopup           from './ImagePopup';
import EditProfilePopup     from './EditProfilePopup';
import EditAvatarPopup      from './EditAvatarPopup';
import AddPlacePopup        from './AddPlacePopup';
import Footer               from './Footer';
import api                  from '../utils/api';
import CurrentUserContext   from '../contexts/CurrentUserContext';

/**
 * The main React **App** component.
 *
 * @version 0.0.1
 * @author [Shraddha](https://github.com/5hraddha)
 */
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]   = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]         = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]     = React.useState(false);
  const [selectedCard, setSelectedCard]                       = React.useState(null);
  const [currentUser, setCurrentUser]                         = React.useState({});
  const [cards, setCards]                                     = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
        .then(setCards)
        .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getUserData()
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err));
  }, []);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleCardClick = card => setSelectedCard(card);

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

  const handleUpdateUser = userData => {
    api
      .updateUserData(userData)
      .then(updatedUserData => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  const handleUpdateAvatar = newAvatarUrl => {
    api
      .updateUserAvatar(newAvatarUrl)
      .then(updatedUserData => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  const handleAddPlaceSubmit = (cardName, cardImageLink) => {
    api
      .addNewCard(cardName, cardImageLink)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          {/* page header */}
          <Header />

          {/* main content of the page */}
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />

          {/* page footer */}
          <Footer />

          {/* update avatar popup box */}
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />

          {/* edit profile popup box */}
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} />

          {/* add place popup box */}
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit} />

          {/* view image popup box */}
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          {/* confirm delete image card popup box */}
          <PopupWithForm name="delete" title="Are you sure?" btnLabel="Yes" onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;