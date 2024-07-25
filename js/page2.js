document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", () => {
    location.pathname = "/index.html";
  });

  const dropdownButtons = document.querySelectorAll(".dropdownButton");

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.lastElementChild.classList.toggle("show");
      Array.from(btn.parentElement.lastElementChild.children).forEach(
        (item) => {
          if (btn.parentElement.lastElementChild.classList.contains("show")) {
            item.addEventListener("click", (event) => {
              btn.parentElement.lastElementChild.classList.remove("show");
              btn.firstElementChild.textContent = event.target.textContent;
            });
          }
        }
      );
    });
  });
});
