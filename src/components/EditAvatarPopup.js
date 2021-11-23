import React            from 'react';
import PropTypes        from 'prop-types';
import PopupWithForm    from './PopupWithForm';

/**
 * The **EditAvatarPopup** component representing a popup with a form to edit user avatar
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
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

EditAvatarPopup.propTypes = {
  /** A boolean indicating if the popup is open or closed */
  isOpen          : PropTypes.bool.isRequired,
  /** A boolean indicating if the data is getting processed and loaded */
  isDataLoading   : PropTypes.bool.isRequired,
  /** A *callback function* that handles closing of the popup */
  onClose         : PropTypes.func.isRequired,
  /** A *callback function* that submits the `PATCH` request to the API for updating the current user's avatar  */
  onUpdateAvatar  : PropTypes.func.isRequired,
}

export default EditAvatarPopup;