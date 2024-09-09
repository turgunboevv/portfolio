document.addEventListener("DOMContentLoaded", () => {
  const contact = document.querySelector(".contactme");
  const contact_modal = document.querySelector(".contact_modal");
  const modalContent = document.querySelector(".modal");

  contact.addEventListener("click", () => {
    contact_modal.classList.add("active");
  });

  window.addEventListener("click", (event) => {
    if (event.target === contact_modal) {
      contact_modal.classList.remove("active");
    }
  });
});

const menu = document.querySelector("#menu");
const xmark = document.querySelector("#x-mark");

const link_modal = document.querySelector(".link-modal");

menu.addEventListener("click", () => {
  link_modal.classList.add("active");
});

xmark.addEventListener("click", () => {
  link_modal.classList.remove("active");
});

const tega = document.querySelector(".teg-a");
const tegb = document.querySelector(".teg-b");
const tegc = document.querySelector(".teg-c");
const tegd = document.querySelector(".teg-d");

tega.addEventListener("click", () => {
  link_modal.classList.remove("active");
});
tegb.addEventListener("click", () => {
  link_modal.classList.remove("active");
});
tegc.addEventListener("click", () => {
  link_modal.classList.remove("active");
});
tegd.addEventListener("click", () => {
  link_modal.classList.remove("active");
});