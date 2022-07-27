const input = document.querySelector(".input");
const form = document.querySelector("form");

const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let emailValue = input.value;

  if (validateEmail(emailValue)) {
    errorMsg.style.display = "none";
    input.classList.remove("error-icon");
    input.style.border = "1px solid hsl(0, 36%, 70%)";
  } else {
    errorMsg.style.display = "block";
    input.classList.add("error-icon");
    input.style.border = "2px solid red";
  }
});

function validateEmail(email) {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
