// 1. Сделать адаптируемый шрифт
// 2. Сделать паддинги адаптируемые
// 3. Адаптив под экраны
// 4. сделать свой селект
// 5. Js фильтрация
// 6. Презентация
// 7. Иконки вынести отдельно
// 8. Картинки переименовать
// 9. сursorPointer при наведении
// 10. проверить название классов на второй странице
// 11. разбить css
// скопировать еще раз футер и хедер, что бы не менять стили

const joinMeetupButton = document.querySelector(".joinMeetup");

joinMeetupButton.addEventListener("click", () => {
  location.pathname = "/page2.html";
});
