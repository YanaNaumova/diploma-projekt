document.addEventListener("DOMContentLoaded", () => {
  const joinMeetupButton = document.querySelector(".joinMeetup");

  joinMeetupButton.addEventListener("click", () => {
    location.pathname = "./page2.html";
  });
});
