const avatar = document.querySelector(".avatar")!;
const menu = document.querySelector(".menu")!;

const searchButtonBottom = document.querySelector(".search-laptop__btn")!;
const searchInputBottom = document.querySelector(".search-laptop__input")!;

const closeNavigationButton = document.querySelector(".menu-mobile-close")!;

const searchMobileButton = document.querySelector(".search-mobile__btn")!;
const searchMobileInput = document.querySelector(".search-mobile__input")!;
const logo = document.querySelector(".logo")!;
const searchCloseBtnMobile = document.querySelector(".menu-mobile__button")!;

avatar.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});

searchButtonBottom.addEventListener("click", () => {
  searchInputBottom.classList.toggle("search-laptop--active");
});

closeNavigationButton.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});

searchMobileButton.addEventListener("click", () => {
  searchMobileInput.classList.toggle("search-mobile__input--active");
  logo.classList.toggle("hide");
  searchMobileButton.classList.toggle("search-mobile__btn--change");
  avatar.classList.toggle("hide");
  searchCloseBtnMobile.classList.toggle("search-close-button--active");
});

searchCloseBtnMobile.addEventListener("click", () => {
  logo.classList.toggle("hide");
  searchMobileInput.classList.toggle("search-mobile__input--active");
  searchMobileButton.classList.toggle("search-mobile__btn--change");
  avatar.classList.toggle("hide");
  searchCloseBtnMobile.classList.toggle("search-close-button--active");
});
