import React          from "react";
import PopupWithForm  from "./PopupWithForm";

function DeletePlacePopup(props){
  const {card, isOpen, isDataLoading, onClose, onCardDelete} = props;

  const handleSubmit = e => {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name="delete"
      title="Are you sure?"
      btnLabel={(isDataLoading) ? 'Deleting': 'Yes'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} />
  );
}

export default DeletePlacePopup;