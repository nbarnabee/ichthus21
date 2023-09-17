let navBar = document.querySelector(".nav-header");

window.onscroll = () => {
  if (window.scrollY > 150) navBar.classList.add("nav-active");
  else navBar.classList.remove("nav-active");
};

const botBlocker = document.getElementById("bot-blocker");
const submitButton = document.getElementById("submit-button");

botBlocker.addEventListener("click", () => {
  if (botBlocker.checked) submitButton.disabled = false;
  else submitButton.disabled = true;
});
