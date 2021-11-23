import React                from 'react';
import PropTypes            from 'prop-types';
import PopupWithForm        from './PopupWithForm';
import CurrentUserContext   from '../contexts/CurrentUserContext';

/**
 * The **EditProfilePopup** component representing a popup with a form to update the current user data
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
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
    setIsNameValid(true);
    setIsDescriptionValid(true);
    setNameErrorMessage('');
    setDescriptionErrorMessage('');
  }, [currentUser, isOpen]);

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

EditProfilePopup.propTypes = {
  /** A boolean indicating if the popup is open or closed */
  isOpen          : PropTypes.bool.isRequired,
  /** A boolean indicating if the data is getting processed and loaded */
  isDataLoading   : PropTypes.bool.isRequired,
  /** A *callback function* that handles closing of the popup */
  onClose         : PropTypes.func.isRequired,
  /** A *callback function* that submits the `PATCH` request to the API for updating the current user data  */
  onUpdateUser    : PropTypes.func.isRequired,
}

export default EditProfilePopup;