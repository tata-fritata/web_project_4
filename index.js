const profileEditButton = document.querySelector(".profile__edit");

const profilePopup = document.querySelector(".popup_type_profile");

let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_about");

const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__subtitle");

let formElement = document.querySelector(".popup__form_type_profile");

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
profileEditButton.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;

  openPopup(profilePopup);
});

profilePopup.addEventListener("click", function (event) {
  if (event.target.classList.contains("popup__close")) {
    closePopup(profilePopup);
  }
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(profilePopup);
}

formElement.addEventListener("submit", handleProfileFormSubmit);
