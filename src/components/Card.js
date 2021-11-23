import React                from 'react';
import PropTypes            from 'prop-types';
import CurrentUserContext   from '../contexts/CurrentUserContext';

/**
 * The **Card** component representing an image card in the webpage
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Card(props){
  const { card, onCardClick, onCardLike, onCardDeleteClick } = props;
  const currentUser = React.useContext(CurrentUserContext);

  // Check if the current user is the owner of the current card and set className for Delete button accordingly
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__delete-btn ${isOwn
      ? 'element__delete-btn_visible'
      : 'element__delete-btn_hidden'}`
  );

  // Check if the card was liked by the current user and set className for Like button accordingly
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-btn ${(isLiked) && 'element__like-btn_active'}`;

  const handleClick = () => onCardClick(card);
  const handleLikeClick = () => onCardLike(card);
  const handleDeleteClick = () => onCardDeleteClick(card);

  return (
    <li className="element" key={card._id}>
      <img className="element__img" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__text">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button
                  className={cardLikeButtonClassName}
                  type="button"
                  aria-label="Like Image"
                  onClick={handleLikeClick}>
          </button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button
              className={cardDeleteButtonClassName}
              type="button"
              aria-label="Delete Image"
              onClick={handleDeleteClick}>
      </button>
    </li>
  );
}

Card.propTypes = {
  /** An *object* having single card data returned from the *API* */
  card                : PropTypes.object.isRequired,
  /** A *callback function* that handles click event on the image card */
  onCardClick         : PropTypes.func.isRequired,
  /** A *callback function* that handles click event on the like button */
  onCardLike          : PropTypes.func.isRequired,
  /** A *callback function* that handles click event on the delete button */
  onCardDeleteClick   : PropTypes.func.isRequired,
};

export default Card;