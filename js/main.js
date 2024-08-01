document.addEventListener("DOMContentLoaded", () => {
  const joinMeetupButton = document.querySelector(".joinMeetup");

  joinMeetupButton.addEventListener("click", () => {
    location.href = "./page2.html";
  });
});
