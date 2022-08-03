let navBar = document.querySelector(".nav-header");

window.onscroll = () => {
  if (window.scrollY > 300) navBar.classList.add("nav-active");
  else navBar.classList.remove("nav-active");
};
