import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register the plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Create smoother instance
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2, // how much smoothing (seconds)
  effects: true, // enable data-speed and data-lag attributes
  smoothTouch: 0.1, // smoother for touch devices (lower = less)
});

// Smooth anchor link scrolling (GSAP-friendly)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    if (target && document.querySelector(target)) {
      smoother.scrollTo(target, true, "top 50"); // use GSAP’s smoother scroll
    }
  });
});

// Disable browser’s scroll restoration
window.history.scrollRestoration = "manual";
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Mobile menu toggle logic
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector("button[aria-expanded]");
  const mobileMenu = document.querySelector(".hidden.md\\:hidden");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
    });
  }

  const button = document.querySelector("#menu-btn");
  const menu = document.querySelector("#menu");

  if (button && menu) {
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.classList.add("hidden");
      }
    });

    document.querySelectorAll("#menu a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
});
