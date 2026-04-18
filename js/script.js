const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // Changer l’icône
  togglePassword.classList.toggle("bx-show");
  togglePassword.classList.toggle("bx-hide");
});
const toggleLoginPassword = document.querySelector("#toggleLoginPassword");
const loginPassword = document.querySelector("#loginPassword");

toggleLoginPassword.addEventListener("click", () => {
  const type =
    loginPassword.getAttribute("type") === "password" ? "text" : "password";
  loginPassword.setAttribute("type", type);

  toggleLoginPassword.classList.toggle("bx-show");
  toggleLoginPassword.classList.toggle("bx-hide");
});
