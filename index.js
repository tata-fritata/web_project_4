const profileEditButton = document.querySelector(".profile__edit");

const profilePopup = document.querySelector(".popup_type_profile");

// Let's find the form fields in the DOM
let nameInput = document.querySelector(".popup__input_type_name"); // Use querySelector()
let jobInput = document.querySelector(".popup__input_type_about"); // Use querySelector()

// Get the values of each field from the corresponding value property
const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__subtitle");
// Select elements where the field values will be entered

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

/* When we click we want to add class that will make popup visible on the page*/
profileEditButton.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;

  openPopup(profilePopup);
});

profilePopup.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("popup") ||
    event.target.classList.contains("popup__close")
  ) {
    closePopup(profilePopup);
  }
});

// Let's find the form in the DOM
let formElement = document.querySelector(".popup__form_type_profile"); // Use the querySelector() method

// Next is the form submit handler, though
// it won't submit anywhere just yet

// Note that the function name starts with a verb
// and describes exactly what the function does
function handleProfileFormSubmit(evt) {
  // This line stops the browser from
  // submitting the form in the default way.
  evt.preventDefault();
  // Having done so, we can define our own way of submitting the form.
  // We'll explain it in more detail later.
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  // Insert new values using the textContent
  // property of the querySelector() method
  closePopup(profilePopup);
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener("submit", handleProfileFormSubmit);
