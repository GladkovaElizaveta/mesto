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


//заполнение страницы исходным массивом элементов
initialCards.forEach(function (element) {
    addCard(elementsSection, createCard(element.name, element.link));
});