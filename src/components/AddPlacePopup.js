import React          from 'react';
import PopupWithForm  from './PopupWithForm';

function AddPlacePopup(props){
  const {isOpen, onClose, onAddPlace} = props;
  const [cardName, setCardName] = React.useState('');
  const [cardImageLink, setCardImageLink] = React.useState('');

  const handleInputChange = e => {
    const {name, value} = e.target;
    switch (name) {
      case 'name' : {
        setCardName(value);
        break;
      }
      case 'link': {
        setCardImageLink(value);
        break;
      }
      default: break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    onAddPlace(cardName, cardImageLink);
  }

  return (
    <PopupWithForm
    name="place"
    title="New Place"
    btnLabel="Create"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}>
    <input
      className="popup__input"
      type="text"
      id="place-input"
      name="name"
      placeholder="Title"
      minLength="1"
      maxLength="30"
      value={cardName}
      onChange={handleInputChange}
      required />
    <span id="place-input-error" className="popup__error"></span>
    <input
      className="popup__input"
      type="url"
      id="link-input"
      name="link"
      placeholder="Image link"
      value={cardImageLink}
      onChange={handleInputChange}
      required />
    <span id="link-input-error" className="popup__error"></span>
  </PopupWithForm>
  );
}

export default AddPlacePopup;