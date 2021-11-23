import React          from "react";
import PropTypes      from 'prop-types';
import PopupWithForm  from "./PopupWithForm";

/**
 * The **DeletePlacePopup** component representing a popup to confirm the deletion of the selected card
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
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

DeletePlacePopup.propTypes = {
  /** A boolean indicating if the popup is open or closed */
  isOpen          : PropTypes.bool.isRequired,
  /** A boolean indicating if the data is getting processed and loaded */
  isDataLoading   : PropTypes.bool.isRequired,
  /** A *callback function* that handles closing of the popup */
  onClose         : PropTypes.func.isRequired,
  /** A *callback function* that submits the `DELETE` request to the API for deleting an existing image card */
  onCardDelete    : PropTypes.func.isRequired,
}

export default DeletePlacePopup;