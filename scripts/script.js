/* Variables declared */

const creations = document.querySelectorAll(".creation");

const creationTitles = document.querySelectorAll(".creation__title");

const creationBackgrounds = document.querySelectorAll(".creation__background");

const headerMenu = document.querySelector(".header__menu");

const headerLogo = document.querySelector(".header__logo");

/* This time I used the classList function instead of if...else statements. It was able to reduce the number of lines of code by half. Every time I click on menuIcon, the function will add certain classes to my elements if they are not present and remove those classes if they are already there. */

menuIcon.addEventListener("click", () => {
  headerMenu.classList.toggle("display");
  headerLogo.classList.toggle("placement");
  menuIcon.classList.toggle("iconPlacement");
  menuIcon.classList.toggle("changeIcon");
  creationTitles.forEach((creationTitle) => {
    creationTitle.classList.toggle("hideTitles");
  });
  creations.forEach((creation) => {
    creation.classList.toggle("unsetBackground")
  })

  menuIcon.src = headerMenu.classList.contains("display")
    ? "images/icon-close.svg"
    : "images/icon-hamburger.svg";
});
