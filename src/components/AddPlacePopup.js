import React          from 'react';
import PopupWithForm  from './PopupWithForm';

function AddPlacePopup(props){
  const {isOpen, isDataLoading, onClose, onAddPlace}              = props;
  const [cardName, setCardName]                                   = React.useState('');
  const [cardImageLink, setCardImageLink]                         = React.useState('');
  const [isCardNameValid, setIsCardNameValid]                     = React.useState(true);
  const [isCardImageLinkValid, setIsCardImageLinkValid]           = React.useState(true);
  const [cardNameErrorMessage, setCardNameErrorMessage]           = React.useState('');
  const [cardImageLinkErrorMessage, setCardImageLinkErrorMessage] = React.useState('');

  React.useEffect(() => {
    setCardName('');
    setCardImageLink('');
    setIsCardNameValid(true);
    setIsCardImageLinkValid(true);
    setCardNameErrorMessage('');
    setCardImageLinkErrorMessage('');
  }, [isOpen]);

  const handleInputChange = e => {
    const {name, value, validity, validationMessage} = e.target;
    switch (name) {
      case 'name' : {
        setCardName(value);
        setIsCardNameValid(validity.valid);
        (!validity.valid) && setCardNameErrorMessage(validationMessage);
        break;
      }
      case 'link': {
        setCardImageLink(value);
        setIsCardImageLinkValid(validity.valid);
        (!validity.valid) && setCardImageLinkErrorMessage(validationMessage);
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
      btnLabel={(isDataLoading) ? 'Creating': 'Create'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className={`popup__input ${(!isCardNameValid) && `popup__input_type_error`}`}
        type="text"
        id="place-input"
        name="name"
        placeholder="Title"
        minLength="1"
        maxLength="30"
        value={cardName}
        onChange={handleInputChange}
        required />
      <span
        id="place-input-error"
        className={`popup__error ${(!isCardNameValid) && `popup__error_visible`}`}>
          {cardNameErrorMessage}
        </span>
      <input
        className={`popup__input ${(!isCardImageLinkValid) && `popup__input_type_error`}`}
        type="url"
        id="link-input"
        name="link"
        placeholder="Image link"
        value={cardImageLink}
        onChange={handleInputChange}
        required />
      <span
        id="link-input-error"
        className={`popup__error ${(!isCardImageLinkValid) && `popup__error_visible`}`}>
          {cardImageLinkErrorMessage}
        </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;