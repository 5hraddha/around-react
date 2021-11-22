import React                from 'react';
import PopupWithForm        from './PopupWithForm';
import CurrentUserContext   from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const {isOpen, isDataLoading, onClose, onUpdateUser} = props;
  const [name, setName] = React.useState(' ');
  const [description, setDescription] = React.useState(' ');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  const handleInputChange = e => {
    const {name, value} = e.target;
    switch (name) {
      case 'title' : {
        setName(value);
        break;
      }
      case 'subtitle': {
        setDescription(value);
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
        className="popup__input"
        type="text"
        id="name-input"
        name="title"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        onChange={handleInputChange}
        value={name}
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
        onChange={handleInputChange}
        value={description}
        required />
      <span id="about-input-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;