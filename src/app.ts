const avatar = document.querySelector(".avatar")!;
const menu = document.querySelector(".menu")!;

const searchButtonBottom = document.querySelector(".search-laptop__btn")!;
const searchInputBottom = document.querySelector(".search-laptop__input")!;

const closeNavigationButton = document.querySelector(".menu-mobile__button")!;

avatar.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});

searchButtonBottom.addEventListener("click", () => {
  searchInputBottom.classList.toggle("search-laptop--active");
});

closeNavigationButton.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});
