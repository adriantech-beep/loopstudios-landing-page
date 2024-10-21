"use strict";
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const mobileOpenNav = document.querySelector(".mobile-modal-nav");
openNav.addEventListener("click", function () {
  mobileOpenNav.classList.remove("hidden");
});
closeNav.addEventListener("click", function () {
  mobileOpenNav.classList.add("hidden");
});

//Hover effect desktop nav
const desktopNav = document.querySelector(".desktop-nav");
const desktopNavHover = function (e) {
  if (e.target.classList.contains("desktop-nav_link")) {
    const link = e.target;
    const siblings = link
      .closest(".desktop-nav")
      .querySelectorAll(".desktop-nav_link");
    siblings.forEach((element) => {
      if (element !== link) element.style.opacity = this;
    });
  }
};

desktopNav.addEventListener("mouseover", desktopNavHover.bind(0.5));
desktopNav.addEventListener("mouseout", desktopNavHover.bind(1));

//hover effect footer nav
const footerNav = document.querySelector(".footer-nav");
const footerNavHover = function (e) {
  if (e.target.classList.contains("footer-nav_link")) {
    const link = e.target;
    const siblings = link
      .closest(".footer-nav")
      .querySelectorAll(".footer-nav_link");
    siblings.forEach((element) => {
      if (element !== link) element.style.opacity = this;
    });
  }
};
footerNav.addEventListener("mouseover", footerNavHover.bind(0.5));
footerNav.addEventListener("mouseout", footerNavHover.bind(1));
