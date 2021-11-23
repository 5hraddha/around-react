import React                from 'react';
import Header               from './Header';
import Main                 from './Main';
import ImagePopup           from './ImagePopup';
import EditProfilePopup     from './EditProfilePopup';
import EditAvatarPopup      from './EditAvatarPopup';
import AddPlacePopup        from './AddPlacePopup';
import DeletePlacePopup     from './DeletePlacePopup';
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
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]     = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]         = React.useState(false);
  const [isPreviewPlacePopupOpen, setIsPreviewPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen]   = React.useState(false);
  const [isDataLoading, setIsDataLoading]                     = React.useState(false);
  const [selectedCard, setSelectedCard]                       = React.useState(null);
  const [selectedToDeleteCard, setSelectedToDeleteCard]       = React.useState(null);
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

  React.useEffect(() => {
    const handleClickClose = e => {
      if(e.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }

    const handleEscClose = e => {
      if(e.key === "Escape"){
        closeAllPopups();
      }
    }

    if(isEditProfilePopupOpen
      || isEditAvatarPopupOpen
      || isAddPlacePopupOpen
      || isPreviewPlacePopupOpen
      || isDeletePlacePopupOpen){
        document.addEventListener("click", handleClickClose);
        document.addEventListener("keydown", handleEscClose);
      }

    return () => {
      document.removeEventListener("click", handleClickClose);
      document.removeEventListener("keydown", handleEscClose);
    }
  }, [isEditProfilePopupOpen,
    isEditAvatarPopupOpen,
    isAddPlacePopupOpen,
    isPreviewPlacePopupOpen,
    isDeletePlacePopupOpen] );

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPreviewPlacePopupOpen(false);
    setIsDeletePlacePopupOpen(false);
    setSelectedCard(null);
    setSelectedToDeleteCard(null);
  }

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  const handleCardClick = card => {
    setSelectedCard(card);
    setIsPreviewPlacePopupOpen(true);
  };

  const handleCardDeleteClick = card => {
    setSelectedToDeleteCard(card);
    setIsDeletePlacePopupOpen(true);
  };

  const handleCardLike = card => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
        .then(newCard =>
          setCards(state => state.map(c => c._id === card._id ? newCard : c)))
        .catch(err => console.log(err));
  }

  const handleCardDeleteSubmit = card => {
    setIsDataLoading(true);
    api
      .deleteCard(card._id)
        .then(() => {
          setCards(state => state.filter(c => c._id !== card._id));
          closeAllPopups();
        })
        .catch(err => console.log(err))
        .finally(() => setIsDataLoading(false));
  }

  const handleUpdateUser = userData => {
    setIsDataLoading(true);
    api
      .updateUserData(userData)
      .then(updatedUserData => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsDataLoading(false));
  }

  const handleUpdateAvatar = newAvatarUrl => {
    setIsDataLoading(true);
    api
      .updateUserAvatar(newAvatarUrl)
      .then(updatedUserData => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsDataLoading(false));
  }

  const handleAddPlaceSubmit = (cardName, cardImageLink) => {
    setIsDataLoading(true);
    api
      .addNewCard(cardName, cardImageLink)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsDataLoading(false));
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
            onCardDeleteClick={handleCardDeleteClick}
            onCardLike={handleCardLike}
            cards={cards}
          />

          {/* page footer */}
          <Footer />

          {/* update avatar popup box */}
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            isDataLoading={isDataLoading}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />

          {/* edit profile popup box */}
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            isDataLoading={isDataLoading}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} />

          {/* add place popup box */}
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            isDataLoading={isDataLoading}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit} />

          {/* view image popup box */}
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          {/* confirm delete image card popup box */}
          <DeletePlacePopup
            card={selectedToDeleteCard}
            isOpen={isDeletePlacePopupOpen}
            isDataLoading={isDataLoading}
            onClose={closeAllPopups}
            onCardDelete={handleCardDeleteSubmit} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;