// Settings needed for form validation
export const formValidationSettings = {
  formSelector        : ".popup__form",
  inputSelector       : ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass : "popup__submit_disabled",
  inputErrorClass     : "popup__input_type_error",
  errorClass          : "popup__error_visible"
};

// Selectors for selecting User Information on the webpage - title, subtitle and avatar
export const userInfoSelectors = {
  userTitleSelector: ".profile__title",
  userSubtitleSelector: ".profile__subtitle",
  userProfilePicSelector: ".profile__avatar"
};

// Select page logo Element
export const pageLogoElement        = document.querySelector(".logo");

// Select required DOM Elements from User Profile
export const editProfileBtn         = document.querySelector(".profile__edit-btn");

// Select required DOM Elements from Edit User Profile Popup
export const editProfilePopup       = document.querySelector(".popup_rel_profile");
export const editProfilePopupForm   = editProfilePopup.querySelector(".popup__form");
export const editProfileNameInput   = editProfilePopupForm.querySelector("#name-input");
export const editProfileAboutInput  = editProfilePopupForm.querySelector("#about-input");

// Select required DOM Elements for adding new Image
export const addImgBtn              = document.querySelector(".profile__add-btn");

// Select required DOM Elements from Add New Image Popup
export const addImgPopup            = document.querySelector(".popup_rel_place");
export const addImgPopupForm        = addImgPopup.querySelector(".popup__form");

// Select required DOM Elements for updating Avatar
export const updateAvatarBtn        = document.querySelector(".profile__avatar-update-button");

// Select required DOM Elements from Update Avatar Popup
export const updateAvatarPopup      = document.querySelector(".popup_rel_avatar");
export const updateAvatarPopupForm  = updateAvatarPopup.querySelector(".popup__form");