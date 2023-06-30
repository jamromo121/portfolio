/**
 * Preload Images
 */

const preload = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  preload.classList.toggle("remove");
});

/**
 * Add Event to Multiple ELement
 */

const addEventOnElement = (element, eventType, callback) => {
  for (i = 0, len = element.length; i < len; i++) {
    element[i].addEventListener(eventType, callback);
  }
};

/**
 * Navbar for Small Screen
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElement(navTogglers, "click", toggleNav);

/**
 * Header Active
 */

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
