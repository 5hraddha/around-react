import React            from 'react';
import PopupWithForm    from './PopupWithForm';

function EditAvatarPopup(props) {
  const {isOpen, isDataLoading, onClose, onUpdateAvatar}  = props;
  const [isImageLinkValid, setIsImageLinkValid]           = React.useState(true);
  const [imageLinkErrorMessage, setImageLinkErrorMessage] = React.useState('');
  const imageLinkInputRef                                 = React.useRef();

  React.useEffect(() => {
    imageLinkInputRef.current.value = '';
    setIsImageLinkValid(true);
  }, [isOpen]);

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateAvatar(imageLinkInputRef.current.value);
  }

  const handleCheckValidity = e => {
    setIsImageLinkValid(e.target.validity.valid);
    setImageLinkErrorMessage(imageLinkInputRef.current.validationMessage);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Change Profile Picture"
      btnLabel={(isDataLoading) ? 'Saving': 'Save'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
      <input
        className={`popup__input ${(!isImageLinkValid) && `popup__input_type_error`}`}
        type="url"
        id="avatarlink-input"
        name="avatarlink"
        placeholder="Image link"
        ref={imageLinkInputRef}
        onChange={handleCheckValidity}
        required />
      <span
        id="avatarlink-input-error"
        className={`popup__error ${(!isImageLinkValid) && `popup__error_visible`}`}>
          {imageLinkErrorMessage}
        </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;