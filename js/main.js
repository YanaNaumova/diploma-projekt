// 5. Js фильтрация
// 6. Презентация
// Рекомендованная структура презентации проекта может быть следующей:
// - Приветствие; - Описание проекта, задания;
// - Описание результата проекта;
// - Основные сложности/открытия с которыми вы столкнулись при подготовке проекта.
document.addEventListener("DOMContentLoaded", () => {
  const joinMeetupButton = document.querySelector(".joinMeetup");

  joinMeetupButton.addEventListener("click", () => {
    location.pathname = "/page2.html";
  });
});
