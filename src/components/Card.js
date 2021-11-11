import React      from 'react';
import PropTypes  from 'prop-types';

/**
 * The **Card** component representing an image card in the webpage
 *
 * @version 0.0.1
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Card(props){
  const { card, onCardClick } = props;
  const handleClick = () => onCardClick(card);

  return (
    <li className="element" key={card._id}>
      <img className="element__img" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__text">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button className="element__like-btn" type="button" aria-label="Like Image"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button className="element__delete-btn" type="button" aria-label="Delete Image"></button>
    </li>
  );
}

Card.propTypes = {
  /** An *object* having single card data returned from the *API* */
  card        : PropTypes.object.isRequired,
  /** A *callback function* that handles click event on the image card */
  onCardClick : PropTypes.func.isRequired,
};

export default Card;