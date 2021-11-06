import React            from 'react';
import Header           from './Header';
import Main             from './Main';
import PopupWithForm    from './PopupWithForm';
import ImagePopup       from './ImagePopup';
import Footer           from './Footer';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]   = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]         = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]     = React.useState(false);
  const [selectedCard, setSelectedCard]                       = React.useState(null);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleCardClick = card => setSelectedCard(card);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
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
        <PopupWithForm
          name="avatar"
          title="Change Profile Picture"
          btnLabel="Save"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
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
        <PopupWithForm
          name="profile"
          title="Edit profile"
          btnLabel="Save"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
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
        <PopupWithForm name="delete" title="Are you sure?" btnLabel="Yes" />
      </div>
    </div>
  );
}

export default App;