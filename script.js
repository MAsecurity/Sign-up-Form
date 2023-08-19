const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm-password");
const errorOutput = document.querySelector(".password-check");

password2.addEventListener("input", function() {
  if(password1.value != password2.value) {
    errorOutput.style.cssText = "color:red;";
    errorOutput.textContent = `*Password's do not match`;
    password1.classList.add("error");
    password2.classList.add("error");

  }else {
    errorOutput.textContent = ``;
    password1.classList.remove("error");
    password2.classList.remove("error");
  }
})




