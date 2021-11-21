import React                from 'react';
import Header               from './Header';
import Main                 from './Main';
import PopupWithForm        from './PopupWithForm';
import ImagePopup           from './ImagePopup';
import EditProfilePopup     from './EditProfilePopup';
import EditAvatarPopup      from './EditAvatarPopup';
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
          <PopupWithForm
            name="place"
            title="New Place"
            btnLabel="Create"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}>
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
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          {/* confirm delete image card popup box */}
          <PopupWithForm name="delete" title="Are you sure?" btnLabel="Yes" onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;