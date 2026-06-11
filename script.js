const contactMenu = document.querySelector(".contact-menu");
const contactSummary = contactMenu?.querySelector("summary");

contactSummary?.addEventListener("click", (event) => {
  event.preventDefault();
  contactMenu.toggleAttribute("open");
});

document.addEventListener("click", (event) => {
  if (!contactMenu?.contains(event.target)) {
    contactMenu?.removeAttribute("open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    contactMenu?.removeAttribute("open");
  }
});
