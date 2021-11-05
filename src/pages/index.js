// ********************************************************************************************* //
//                                Import Modules and Constants                                   //
// ********************************************************************************************* //
// Import main stylesheet
import "../pages/index.css";

// Import modules
import Api                  from "../components/Api.js";
import Card                 from "../components/Card.js";
import FormValidator        from "../components/FormValidator.js";
import PopupWithForm        from "../components/PopupWithForm.js";
import PopupWithImage       from "../components/PopupWithImage.js";
import PopupDeleteCard      from "../components/PopupDeleteCard.js";
import Section              from "../components/Section.js";
import UserInfo             from "../components/UserInfo.js"

// Import logo and profile picture
import pageLogoUrl          from "../images/logo.svg";

// Import page logo and profile picture Elements
import { pageLogoElement } from "../utils/constants.js";

// Import required constants from User Profile
import { editProfileBtn } from "../utils/constants.js";

// Import required constants from Edit User Profile Popup
import {
  editProfilePopupForm,
  editProfileNameInput,
  editProfileAboutInput
} from "../utils/constants.js";

// Import required constants needed for adding new Image
import { addImgBtn } from "../utils/constants.js";

// Import required constants from Add New Image Popup
import { addImgPopupForm } from "../utils/constants.js";

// Import required constants needed for User Avatar
import { updateAvatarBtn } from "../utils/constants.js";

// Import required constants from Update Avatar Popup
import { updateAvatarPopupForm } from "../utils/constants.js";

// Import Form Validation Settings and Element Selectors
import {
  formValidationSettings,
  userInfoSelectors
} from "../utils/constants.js";

// Import utility functions
import { setDataLoadingMsg } from "../utils/utils.js";

// ********************************************************************************************* //
//                              Establish connection with API                                    //
// ********************************************************************************************* //
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "9bc9c0f1-5a8a-40aa-b985-20e7b24d1389",
    "Content-Type": "application/json"
  }
});

// ********************************************************************************************* //
//                              Setting logo for the webpage                                     //
// ********************************************************************************************* //

// Set Logo for the webpage
pageLogoElement.src   = pageLogoUrl;

// ********************************************************************************************* //
//                                      Form Validations                                         //
// ********************************************************************************************* //
// Implement form validations for all the forms
const editProfileFormValidator  = new FormValidator(formValidationSettings, editProfilePopupForm);
const addImgFormValidator       = new FormValidator(formValidationSettings, addImgPopupForm);
const updateAvatarFormValidator = new FormValidator(formValidationSettings, updateAvatarPopupForm);
editProfileFormValidator.enableValidation();
addImgFormValidator.enableValidation();
updateAvatarFormValidator.enableValidation();

// ********************************************************************************************* //
//                            Add Intial User Info on Page Load                                  //
// ********************************************************************************************* //

// Add user info on page load
const user = new UserInfo(userInfoSelectors);
api.getUserData()
  .then( userData => {
    const {name, about, avatar, _id} = userData;
    user.setUserInfo(name, about, avatar, _id);
  })
  .catch(err => console.log(err));

// ********************************************************************************************* //
//                            Add Intial Image Cards on Page Load                                //
// ********************************************************************************************* //
// Initialize Image Popup
const imgPopup = new PopupWithImage(".popup_rel_image");
imgPopup.setEventListeners();

// Function that returns new Image card
const getNewImgCard = item => {
  const newImgCardSetttings = {
    card: item,
    handleCardClick: (name, link) => imgPopup.open(name, link),
    handleTrashBtnClick: e => deleteImgPopup.open(e, item._id),
    handleLikeBtnClick: (isImgAlreadyLiked, cardId) => {
      if(isImgAlreadyLiked) {
        api.unlikeCard(cardId)
          .then(newImg.renderLikes)
          .catch(err => console.log(err));
      } else {
        api.likeCard(cardId)
        .then(newImg.renderLikes)
        .catch(err => console.log(err));
      }
    }
  };
  const newImg = new Card(newImgCardSetttings, "#element-template", user.getUserInfo().id);
  return newImg;
}

// Function that renders each image card to the DOM
const renderImgCard = item => {
  const newImgCardElement = getNewImgCard(item).generateCard();
  imgCardsList.addItem(newImgCardElement);
}

// Add intial cards on page load
const imgCardsList = new Section({ renderer: renderImgCard }, ".elements");
api.getInitialCards()
  .then(cards => imgCardsList.renderItems(cards))
  .catch(err => console.log(err));

// ********************************************************************************************* //
//                  Initialize all Popups and Set Event Listeners on them                        //
// ********************************************************************************************* //

// Initialize Edit Profile Popup
const handleEditProfileFormSubmit = ({title, subtitle}) => {
  setDataLoadingMsg(editProfilePopupForm, "Saving...");
  api.updateUserData(title, subtitle)
    .then(updatedUserData => {
      const {name, about} = updatedUserData;
      user.setUserInfo(name, about);
    })
    .catch(err => console.log(err))
    .finally(() => setDataLoadingMsg(editProfilePopupForm, "Save"));
  editProfilePopup.close();
  editProfileFormValidator.toggleButtonState();
}
const editProfilePopup = new PopupWithForm(".popup_rel_profile", handleEditProfileFormSubmit);
editProfilePopup.setEventListeners();

// Initialize Add Image Popup
const handleAddImgFormSubmit = ({name, link}) => {
  setDataLoadingMsg(addImgPopupForm, "Creating...");
  api.addNewCard(name, link)
    .then(newCardData => imgCardsList.addItem(getNewImgCard(newCardData).generateCard()))
    .catch(err => console.log(err))
    .finally(() => setDataLoadingMsg(addImgPopupForm, "Create"));
  addImgPopup.close();
  addImgFormValidator.toggleButtonState();
}
const addImgPopup = new PopupWithForm(".popup_rel_place", handleAddImgFormSubmit);
addImgPopup.setEventListeners();

// Initialize Update Avatar Popup
const handleUpdateAvatarFormSubmit = ({avatarlink}) => {
  setDataLoadingMsg(updateAvatarPopupForm, "Saving...");
  api.updateUserAvatar(avatarlink)
    .then(({title, subtitle, avatar}) => user.setUserInfo(title, subtitle, avatar))
    .catch(err => console.log(err))
    .finally(() => setDataLoadingMsg(updateAvatarPopupForm, "Save"));
    updateUserAvatarPopup.close();
    updateAvatarFormValidator.toggleButtonState();
}
const updateUserAvatarPopup = new PopupWithForm(".popup_rel_avatar", handleUpdateAvatarFormSubmit);
updateUserAvatarPopup.setEventListeners();

// Initialize Delete Image Popup
const handleDeleteImgFormSubmit = (cardId, cardToDelete) => {
  api.deleteCard(cardId)
    .then(() => {
      cardToDelete.remove();
      cardToDelete = null;
      deleteImgPopup.close();
    })
    .catch(err => console.log(err));
}
const deleteImgPopup = new PopupDeleteCard(".popup_rel_delete", handleDeleteImgFormSubmit);
deleteImgPopup.setEventListeners();

// ********************************************************************************************* //
//                  Set Event Listeners on all the buttons on the webpage                        //
// ********************************************************************************************* //

// Add Event Listener to Profile Edit Button
const handleEditProfile = () => {
  const {name, about}           = user.getUserInfo();
  editProfileFormValidator.toggleButtonState();
  editProfileFormValidator.resetFormValidation();
  editProfileNameInput.value    = name;
  editProfileAboutInput.value   = about;
  editProfilePopup.open();
}
editProfileBtn.addEventListener("click", handleEditProfile);

// Add Event Listener to Add Image Button
const handleAddImg = () => {
  addImgPopup.open();
  addImgFormValidator.toggleButtonState();
  addImgFormValidator.resetFormValidation();
}
addImgBtn.addEventListener("click", handleAddImg);

// Add Event Listener to Update Avatar Button
const handleUpdateAvatar = () => {
  updateUserAvatarPopup.open();
  updateAvatarFormValidator.toggleButtonState();
  updateAvatarFormValidator.resetFormValidation();
}
updateAvatarBtn.addEventListener("click", handleUpdateAvatar)