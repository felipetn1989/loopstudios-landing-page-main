/* Variables declared */

const creations = document.querySelectorAll(".creation");

const creationTitles = document.querySelectorAll(".creation__title");

const creationBackgrounds = document.querySelectorAll(".creation__background");

/* This forEach will create eventListeners for both mouseover and mouseout events to create the hover effects for the Our Creations elements of the page. */

creations.forEach((creation, index) => {
  creation.addEventListener("mouseover", () => {
    creationTitles[index].style.color = "black";
    creations[index].style.cursor = "pointer";
    creationBackgrounds[index].style.opacity = "0.5";
  });
  creation.addEventListener("mouseout", () => {
    creationTitles[index].style.color = "white";
    creationTitles[index].style.cursor = "unset";
    creationBackgrounds[index].style.opacity = "unset";
  });
});

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

  menuIcon.src = headerMenu.classList.contains("display")
    ? "images/icon-close.svg"
    : "images/icon-hamburger.svg";
});
