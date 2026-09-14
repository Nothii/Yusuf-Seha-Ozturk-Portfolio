const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    });
  });
}
