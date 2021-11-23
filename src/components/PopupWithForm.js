import React      from 'react';
import PropTypes  from 'prop-types';

/**
 * The **PopupWithForm** component representing a popup with a form in it
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function PopupWithForm(props) {
  const { children }                        = props;
  const { onClose, onSubmit }               = props;
  const { name, title, btnLabel, isOpen }   = props;
  const formRef                             = React.createRef();
  const [isFormValid, setIsFormValid]       = React.useState(false);

  React.useEffect(() => {
    setIsFormValid(formRef.current.checkValidity());
  }, [isOpen, formRef]);

  const handleChange = () => {
    setIsFormValid(formRef.current.checkValidity());
  }

  return (
    <div className={`popup popup_rel_${name} ${isOpen && 'popup_opened'}`}>
    <div className="popup__container">
      <form
        className="popup__form"
        name={name}
        action="#"
        ref={formRef}
        onSubmit={onSubmit}
        onChange={handleChange}
        noValidate>
        <h2 className={`popup__title popup__title_rel_${name}`}>{title}</h2>
        {children}
        <button
                className={`popup__submit popup__submit_rel_${name} ${!isFormValid && `popup__submit_disabled`}`}
                type="submit"
                aria-label={`${btnLabel} ${name}`}>
          {btnLabel}
        </button>
      </form>
      <button
              className="popup__close-btn"
              type="button"
              aria-label="Close popup"
              onClick={onClose}>
      </button>
    </div>
  </div>
  );
}

PopupWithForm.propTypes = {
  /** Any form elements like input, label, etc */
  children  : PropTypes.any,
  /** A *callback function* that handles closing of the popup */
  onClose   : PropTypes.func.isRequired,
  /** A *callback function* that handles the form submit */
  onSubmit   : PropTypes.func.isRequired,
  /** A string representing the **name of the form** */
  name      : PropTypes.string.isRequired,
  /** A string representing the **title of the form** */
  title     : PropTypes.string.isRequired,
  /** A string representing the **label** of the Submit button */
  btnLabel  : PropTypes.string.isRequired,
  /** A boolean indicating if the popup is open or closed */
  isOpen    : PropTypes.bool,
}

export default PopupWithForm;