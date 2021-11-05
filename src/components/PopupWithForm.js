import React from 'react';

function PopupWithForm(props) {
  // Get children of the PopupWithForm component from the props
  const { children } = props; 

  // Get event handlers from the props
  const {  } = props;

  // Get other values from the props
  const {name, title, btnLabel, isOpen} = props;

  return (
    <div className={`popup popup_rel_${name} ${isOpen && 'popup_opened'}`}>
    <div className="popup__container">
      <form className="popup__form" name={name} action="#" noValidate>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button
                className="popup__submit"
                type="submit"
                aria-label={`${btnLabel} ${name}`}>
          {btnLabel}
        </button>
      </form>
      <button
              className="popup__close-btn"
              type="button"
              aria-label="Close popup">
      </button>
    </div>
  </div>
  );
}

export default PopupWithForm;