import React                from 'react';
import PopupWithForm        from './PopupWithForm';
import CurrentUserContext   from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const {isOpen, isDataLoading, onClose, onUpdateUser}        = props;
  const [name, setName]                                       = React.useState('');
  const [description, setDescription]                         = React.useState('');
  const [isNameValid, setIsNameValid]                         = React.useState(true);
  const [isDescriptionValid, setIsDescriptionValid]           = React.useState(true);
  const [nameErrorMessage, setNameErrorMessage]               = React.useState('');
  const [descriptionErrorMessage, setDescriptionErrorMessage] = React.useState('');
  const currentUser                                           = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  React.useEffect(() => {
    setIsNameValid(true);
    setIsDescriptionValid(true);
    setNameErrorMessage('');
    setDescriptionErrorMessage('');
  }, [isOpen]);

  const handleInputChange = e => {
    const {name, value, validity, validationMessage} = e.target;
    switch (name) {
      case 'title' : {
        setName(value);
        setIsNameValid(validity.valid);
        (!validity.valid) && setNameErrorMessage(validationMessage);
        break;
      }
      case 'subtitle': {
        setDescription(value);
        setIsDescriptionValid(validity.valid);
        (!validity.valid) && setDescriptionErrorMessage(validationMessage);
        break;
      }
      default: break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Edit profile"
      btnLabel={(isDataLoading) ? 'Saving': 'Save'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
      <input
        className={`popup__input ${(!isNameValid) && `popup__input_type_error`}`}
        type="text"
        id="name-input"
        name="title"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        onChange={handleInputChange}
        value={name}
        required />
      <span
        id="name-input-error"
        className={`popup__error ${(!isNameValid) && `popup__error_visible`}`}>
          {nameErrorMessage}
        </span>
      <input
        className={`popup__input ${(!isDescriptionValid) && `popup__input_type_error`}`}
        type="text"
        id="about-input"
        name="subtitle"
        placeholder="About me"
        minLength="2"
        maxLength="200"
        onChange={handleInputChange}
        value={description}
        required />
      <span
        id="about-input-error"
        className={`popup__error ${(!isDescriptionValid) && `popup__error_visible`}`}>
          {descriptionErrorMessage}
        </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;