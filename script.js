const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeMenu = () => {
  document.body.classList.remove("nav-open");
  menuButton?.setAttribute("aria-expanded", "false");
};

menuButton?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
