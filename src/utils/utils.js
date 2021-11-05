// Function that sets the message on the submit button while the data is loading
export const setDataLoadingMsg = (form, loadingMsg) => {
  form.querySelector(".popup__submit").textContent = loadingMsg;
}