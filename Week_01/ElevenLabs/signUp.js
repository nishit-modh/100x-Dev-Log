const togglePass = document.querySelector(".fa-regular");
const passwordInputEl = document.querySelector("#inp-pass");

togglePass.addEventListener("click", () => {
  // 1. Check current type and get opposite one as 'const type'
  const type =
    passwordInputEl.getAttribute("type") === "password" ? "text" : "password";

  // 2. set new type
  passwordInputEl.setAttribute("type", type);

  // 3. toggle the eye icon by class
  togglePass.classList.toggle("fa-eye");
  togglePass.classList.toggle("fa-eye-slash");
});
