const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
// show input error message, and its reusable
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show sucess message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control sucess";
}

// email validation
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Must be a valid Email");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "" || password2.value !== password.value) {
    showError(password2, "Password confirmation required and must match");
  } else {
    showSuccess(password2);
  }
});
