let page = document.querySelector('.page');
let profileName = page.querySelector('.profile__name');
let profileDescription = page.querySelector ('.profile__description');
let profileEditButton = page.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let popupCloseButton = page.querySelector('.popup__container-exit-button');
let cardElement = page.querySelector('.popup__profile-card')
let nameInput = page.querySelector('.popup__profile-input_name');
let activityInput = page.querySelector('.popup__profile-input_description');
function openPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    activityInput.value = profileDescription.textContent;
}
function closePopup() {popup.classList.remove('popup_opened')};
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = activityInput.value;
    closePopup();
}
profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
cardElement.addEventListener('submit', formSubmitHandler); 