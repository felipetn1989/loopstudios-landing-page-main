let creations = document.querySelectorAll(".creation");

let creationTitles = document.querySelectorAll(".creation__title");

let creationBackgrounds = document.querySelectorAll(".creation__background");

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

let headerMenu = document.querySelector(".header__menu");

let headerLogo = document.querySelector(".header__logo");

menuIcon.addEventListener("click", () => {
  if (window.getComputedStyle(headerMenu).display == "none") {
    headerMenu.style.display = "block";
    creationTitles.forEach((creationTitle) => {
      creationTitle.style.display = "none";
    });
    menuIcon.src = "images/icon-close.svg";
    headerLogo.style.position = "fixed";
    headerLogo.style.top = "1.75rem";
    menuIcon.style.position = "fixed";
    menuIcon.style.right = "1.5rem";
    menuIcon.style.top = "1.75rem";
  } else {
    headerMenu.style.display = "none";
    creationTitles.forEach((creationTitle) => {
      creationTitle.style.display = "block";
    });
    menuIcon.src = "images/icon-hamburger.svg";
    headerLogo.style.position = "unset";
    headerLogo.style.top = "unset";
    menuIcon.style.position = "unset";
    menuIcon.style.right = "unset";
    menuIcon.style.top = "unset";
  }
});