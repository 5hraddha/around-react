import React      from 'react';
import PropTypes  from 'prop-types';

/**
 * The **ImagePopup** component representing image preview popup
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
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

ImagePopup.propTypes = {
  /** An *object* having selected card data */
  card    : PropTypes.object,
  /** A *callback function* that handles closing of the popup */
  onClose : PropTypes.func.isRequired,
}

export default ImagePopup;