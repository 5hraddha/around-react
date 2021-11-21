import React            from 'react';
import PopupWithForm    from './PopupWithForm';

function EditAvatarPopup(props) {
  const {isOpen, onClose, onUpdateAvatar} = props;
  const imageLinkInputRef = React.useRef();

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateAvatar(imageLinkInputRef.current.value);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Change Profile Picture"
      btnLabel="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
      <input
        className="popup__input"
        type="url"
        id="avatarlink-input"
        name="avatarlink"
        placeholder="Image link"
        ref={imageLinkInputRef}
        required />
      <span id="avatarlink-input-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;