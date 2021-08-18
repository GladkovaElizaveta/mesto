
const page = document.querySelector(".page");
//редактирование профиля
const profileEditButton = page.querySelector(".profile__edit-button");
//поля заполения профиля
const profileName = page.querySelector(".profile__name");
const profileDescription = page.querySelector(".profile__description");

const popups = page.querySelectorAll(".popup");
//попап редактирования
const profileFormPopup = document.querySelector(".popup_type_profile");
const cardFormPopup = document.querySelector(".popup_type_card-add");
//попап добавления
const viewPhotoPopup = document.querySelector(".popup_type_picture");
//кнопка закрытия контейнеров редактирования и добавления элементов
const popupCloseButtonsElements = page.querySelectorAll(".popup__container-exit-button");
//кнопка закрытия увеличенного изображения картинки
const popupCloseButtonsCards = page.querySelectorAll(".popup__close-button");
const formElement = page.querySelector(".popup__profile-card");
//редактирование профайла
const nameInput = page.querySelector(".popup__profile-input_type_name");
const jobInput = page.querySelector(".popup__profile-input_type_description");
//добавление новой картинки
const placeInput = page.querySelector(".popup__profile-input_type_place");
const adressInput = page.querySelector(".popup__profile-input_type_adress");
const cardCreateButton = page.querySelector(".popup__save-button_type_add");
//кнопка удаления элемента
const deleteButton = page.querySelector(".elements__garbage-button");
//кнопка добавления нового элемента
const cardAddButton = page.querySelector(".profile__add-button");
const cardTemplate = page.querySelector(".elements__card-template");
//контейнер с карточками
const elementsSection = page.querySelector(".elements");
const popupPhoto = page.querySelector(".popup__photo");
const popupPhotoCaption = page.querySelector(".popup__photo-caption");

const viewCard = (evt) => {
    openViewPhotoPopup();
    const giveMeAPicture = evt.target.getAttribute("src");
    const givemeAName = evt.target.getAttribute("alt");
    popupPhoto.setAttribute("src", giveMeAPicture);
    popupPhoto.setAttribute("alt", givemeAName);
    popupPhotoCaption.textContent = givemeAName;
    openPopup(viewPhotoPopup);
};

const openViewPhotoPopup = () => {
    viewPhotoPopup.classList.add("popup_opened");
  };

// функция создания карточки
function createCard(name, link) {
    const elementCard = cardTemplate.content.firstElementChild.cloneNode(true);
    const cardPhoto = elementCard.querySelector(".elements__card-image");
    elementCard.querySelector(".elements__place-name").textContent = name;
    cardPhoto.src = link;
    cardPhoto.alt = name;
    cardPhoto.addEventListener("click", openViewPhotoPopup);
    elementCard.querySelector(".elements__garbage-button").addEventListener("click", deleteCard);
    elementCard.querySelector(".elements__like-button").addEventListener("click", addLike);
    return elementCard;
}

// функция добавления элемента в контейнер
function addCard(container, element) {
    container.append(element);
}

// функция добавления новой карточки на страницу
function addNewCard(evt) {
    evt.preventDefault();
    addCard(elementsSection, createCard(nameInput.value, jobInput.value));
    elementsSection.prepend(createCard(elementCard));
    closePopup(formElement);
    formElement.reset();
}

// функция удаления элемента со страницы
function deleteCard(evt) {
    const targetCard = evt.target.closest(".elements__card");
    targetCard.remove();
}

// функция добавления/удаления лайка
function addLike(evt) {
    evt.target.classList.toggle("elements__like-button_active");
}

// функция открытия попапа
function openPopup(popup) {
    popup.classList.add("popup_opened");
}

// функция открытия попапа добавления нового элемента
function openAddCardPopup() {
    openPopup(cardFormPopup);
}

//функция открытия попапа редактирования профиля
function openProfilePopup() {
    openPopup(profileFormPopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

// функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

// функция изменения данных профиля пользователя
function changeName(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(profileFormPopup);
}

// добавление слушателей на кнопку закрытия попапов
popupCloseButtonsCards.forEach(function (button) {
    const popup = button.closest(".popup");
    button.addEventListener("click", function (evt) {
        closePopup(popup);
    });
});

// добавление слушателей на кнопку закрытия попапов
popupCloseButtonsElements.forEach(function (button) {
    const popup = button.closest(".popup");
    button.addEventListener("click", function (evt) {
        closePopup(popup);
    });
});

profileEditButton.addEventListener("click", openProfilePopup);
cardAddButton.addEventListener("click", openAddCardPopup);

formElement.addEventListener("submit", changeName);
formElement.addEventListener("submit", addNewCard);
