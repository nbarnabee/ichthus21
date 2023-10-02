const navBar = document.querySelector(".nav-header");
const phone = document.getElementById("obfus-phone");
const emailAddress = document.getElementById("obfus-email");
const formPlaceholder = document.getElementById("obfus-form");

window.onscroll = () => {
  if (window.scrollY > 150) {
    navBar.classList.add("nav-active");
    phone.textContent = "+41 (0) 79 193 92 03";
    emailAddress.textContent = "contact@ichthus21.eu";
    formPlaceholder.innerHTML = `
    <form action="https://api.staticforms.xyz/submit" method="post">
    <label for="name">Nom/Name</label>
    <input type="text" name="name" id="name">
    <label for="email">Courriel/Email</label>
    <input type="email" name="email" id="email">
    <input type="hidden" name="accessKey" value="8c1ebded-b5a9-47e7-bfc2-4ef0acda300d">
    <input type="hidden" name="redirectTo" value="https://www.ichthus21.eu/en/success.html">
    <input type="text" name="honeypot" style="display: none;">
    <label for="message">Message/Nachricht</label>
    <textarea name="message" id="message" cols="25" rows="6"></textarea>
    <button type="submit" class="btn btn-dark">Submit</button>
    </form>`;
  } else {
    navBar.classList.remove("nav-active");
    emailAddress.textContent = ".";
    phone.textContent = ".";
    formPlaceholder.innerHTML = "";
  }
};
