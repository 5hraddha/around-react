import React from 'react';

function Card(props){
  const { card } = props;
  return (
    <li className="element" key={card._id}>
      <img className="element__img" src={card.link} alt="#" />
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

export default Card;