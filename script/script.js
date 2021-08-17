const initialCards = [
  {
      name: "Йенифер",
      link: "./images/Ien.jpg",
  },
  {
      name: "Трис Мериголд",
      link: "./images/Tris.png",
  },
  {
      name: "Кейра Мец",
      link: "./images/KeyraMeiz.jpg",
  },
  {
      name: "Шанни",
      link: "./images/Shanni.jpg",
  },
  {
      name: "Мадам Саша",
      link: "./images/MadamSaha.jpg",
  },
  {
      name: "Ютта ан Димун",
      link: "./images/Utta.jpg",
  },
];

const page = document.querySelector(".page");
//редактирование профиля
const profileEditButton = page.querySelector(".profile__edit-button");
//поля заполения профиля
const profileName = page.querySelector(".profile__name");
const profileDescription = page.querySelector(".profile__description");

const popups = page.querySelectorAll(".popup");
//попап редактирования
const profileFormPopup = document.getElementById("profileForm");
const cardFormPopup = document.getElementById("cardForm");
//попап добавления
const viewPhotoPopup = document.getElementById("viewPhoto");
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
};

const addCards = () => {
  for (let i = 0; i < initialCards.length; i++) {
      const newCard = cardTemplate.content.firstElementChild.cloneNode(true);
      const arrayElement = initialCards[i];
      newCard.querySelector(".elements__card-image").setAttribute("src", arrayElement.link);
      newCard.querySelector(".elements__card-image").setAttribute("alt", arrayElement.name);
      newCard.querySelector(".elements__place-name").textContent = arrayElement.name;
      newCard.querySelector(".elements__like-button").addEventListener("click", (evt) => {
          evt.target.closest(".elements__like-button").classList.toggle("elements__like-button_active");
      });
      newCard.querySelector(".elements__garbage-button").addEventListener("click", (evt) => {
          evt.target.closest(".elements__card").remove();
      });
      newCard.querySelector(".elements__card-image").addEventListener("click", viewCard);
      elementsSection.appendChild(newCard);
  }
};

const addCard = () => {
  const newCard = cardTemplate.content.firstElementChild.cloneNode(true);
  newCard.querySelector(".elements__card-image").setAttribute("src", adressInput.value);
  newCard.querySelector(".elements__card-image").setAttribute("alt", placeInput.value);
  newCard.querySelector(".elements__place-name").textContent = placeInput.value;
  newCard.querySelector(".elements__like-button").addEventListener("click", (evt) => {
      evt.target.closest(".elements__like-button").classList.toggle("elements__like-button_active");
  });
  newCard.querySelector(".elements__garbage-button").addEventListener("click", (evt) => {
      evt.target.closest(".elements__card").remove();
  });
  newCard.querySelector(".elements__card-image").addEventListener("click", viewCard);
  elementsSection.prepend(newCard);
};

addCards(initialCards);

const openProfileFormPopup = () => {
  profileFormPopup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

const openCardAddPopup = () => {
  cardFormPopup.classList.add("popup_opened");
};

const openViewPhotoPopup = () => {
  viewPhotoPopup.classList.add("popup_opened");
};

const savePopup = () => {
  popups.forEach((item) => {
      item.classList.remove("popup_opened");
  });
};

const closePopup = (evt) => {
  savePopup(evt.target.closest(".popup"));
};
//закрытие окон редактирования и добавления картинок
popupCloseButtonsElements.forEach((item) => {
  item.addEventListener("click", closePopup);
});
//закрытие увеличенного изображения картинки
popupCloseButtonsCards.forEach((item) => {
  item.addEventListener("click", closePopup);
});
//функция сохранения результата
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  savePopup();
}

const saveCard = () => {
  addCard();
  adressInput.value = "";
  placeInput.value = "";
  savePopup();
};

profileEditButton.addEventListener("click", openProfileFormPopup);
cardAddButton.addEventListener("click", openCardAddPopup);
formElement.addEventListener("submit", formSubmitHandler);
cardCreateButton.addEventListener("click", saveCard);
