// 4. сделать свой селект
// 5. Js фильтрация
// 6. Презентация
// 7. Иконки вынести отдельно
// 8. Картинки переименовать
// 9. сursorPointer при наведении
// 10. проверить название классов на второй странице
// 11. разбить css
document.addEventListener("DOMContentLoaded", () => {
  const joinMeetupButton = document.querySelector(".joinMeetup");

  joinMeetupButton.addEventListener("click", () => {
    location.pathname = "/page2.html";
  });
});
