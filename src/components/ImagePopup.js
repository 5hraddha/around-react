import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_rel_image">
      <div className="popup__container popup__container_rel_image">
        <figure className="popup__figure">
          <img className="popup__img" src="#" alt="#" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
        <button className="popup__close-btn popup__close-btn_rel_image" type="button" aria-label="Close popup"></button>
      </div>
    </div>
  );
}

export default ImagePopup;