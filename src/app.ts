const avatar = document.querySelector(".avatar")!;
const menu = document.querySelector(".menu")!;

avatar.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});
