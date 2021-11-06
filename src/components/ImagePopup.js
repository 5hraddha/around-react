import React from 'react';

function ImagePopup(props) {
  const {card, onClose} = props;
  return (
    <div className={`popup popup_rel_image ${card && 'popup_opened'}`}>
      <div className="popup__container popup__container_rel_image">
        <figure className="popup__figure">
          <img className="popup__img" src={`${card && card.link}`} alt={`${card && card.name}`} />
          <figcaption className="popup__caption">{`${card && card.name}`}</figcaption>
        </figure>
        <button
                className="popup__close-btn popup__close-btn_rel_image"
                type="button"
                onClick={onClose}
                aria-label="Close popup">
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;