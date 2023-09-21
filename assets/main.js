let navBar = document.querySelector(".nav-header");
let phone = document.getElementById("obfus-phone");
let emailAddress = document.getElementById("obfus-email");

window.onscroll = () => {
  if (window.scrollY > 150) {
    navBar.classList.add("nav-active");
    phone.textContent = "+41 (0) 79 193 92 03";
    emailAddress.textContent = "contact@ichthus21.eu";
  } else {
    navBar.classList.remove("nav-active");
    emailAddress.textContent = ".";
    phone.textContent = ".";
  }
};
