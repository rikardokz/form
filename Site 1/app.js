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
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Must be a valid e-mail");
  }
}

function checkPassword(pass1, pass2) {
  const passArr = [pass1, pass2];
  if (pass1.value === pass2.value) {
    passArr.forEach((pass) => {
      showSuccess(pass);
    });
  } else {
    passArr.forEach((pass) => {
      showError(pass, "Passwords must match!");
    });
  }
}

function checkRequired(inputArr) {
  inputArr.forEach((field) => {
    if (field.value.trim() === "") {
      showError(field, `${getFieldName(field)} is required`);
    } else {
      showSuccess(field);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be more than ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(field) {
  return field.id.charAt(0).toUpperCase() + field.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPassword(password, password2);
});
