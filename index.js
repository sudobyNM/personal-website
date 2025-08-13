// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

window.history.scrollRestoration = "manual";
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// mobile menu toggle
// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const menu = document.querySelector('.menu');

//     menuToggle.addEventListener('click', () => {
//         menu.classList.toggle('active');
//         menuToggle.classList.toggle('active');
//     });

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("button[aria-expanded]");
  const mobileMenu = document.querySelector(".hidden.md\\:hidden");

  menuButton.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !expanded);
    mobileMenu.classList.toggle("hidden");
  });
});

const button = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

// Hide menu on outside click
document.addEventListener("click", (e) => {
  const isClickInside = menu.contains(e.target) || button.contains(e.target);
  if (!isClickInside) {
    menu.classList.add("hidden");
  }
});

// Close sidebar on link click (mobile)
document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.add("hidden");
  });
});
