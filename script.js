const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // alert()

  let isValid = true;

  // name validation
  const nameError = document.getElementById("nameError");
  const nameField = document.getElementById("name");
  const nameRegex = /^[a-zA-Z]{3,}$/;

  if (nameField.value.trim() === "") {
    isValid = false;
    nameError.style.display = "block";
    nameError.innerHTML = "Name is required";
  } else if (!nameRegex.test(nameField.value.trim())) {
    isValid = false;
    nameError.style.display = "block";
    nameError.innerHTML ="Name must be atleast 3 characters and contain only alphabets";
  } else {
    isValid = false;
    nameError.style.display = "none";
  }

  // email validation
  const emailError = document.getElementById("emailError");
  const emailField = document.getElementById("email");
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (emailField.value.trim() === "") {
    isValid = false;
    emailError.style.display = "block";
    emailError.innerHTML ="Email is required";
  } else if (!emailRegex.test(emailField.value.trim())) {
    isValid = false;
    emailError.style.display = "block";
    emailError.innerHTML ="Invalid email format. Please use name@example.com";
  } else {
    isValid = false;
    emailError.style.display = "none";
  }

  // roll validation
  const rollError = document.getElementById("rollError");
  const rollField = document.getElementById("roll");
  const rollRegex = /^[a-zA-Z0-9][^?@&]{11}$/;

  if (rollField.value.trim() === "") {
    isValid = false;
    rollError.style.display = "block";
    rollError.innerHTML ="Roll number is required";
  } else if (!rollRegex.test(rollField.value.trim())) {
    isValid = false;
    rollError.style.display = "block";
    rollError.innerHTML ="Please enter a valid roll number";
  } else {
    isValid = false;
    rollError.style.display = "none";
  }

  // password validation
  const passwordError = document.getElementById("passwordError");
  const passwordField = document.getElementById("password");
  const passwordRegex = /^[a-zA-Z0-9][^?@&]{8}$/;



  if (passwordField.value.trim() === "") {
    isValid = false;
    passwordError.style.display = "block";
    passwordError.innerHTML =" Password is required";
  } else if (!passwordRegex.test(passwordField.value.trim())) {
    isValid = false;
    passwordError.style.display = "block";
    passwordError.innerHTML ="Password must be at least 8 characters long";
  } else {
    isValid = false;
    passwordError.style.display = "none";
  }

  // is validation
  if (isValid) {
    alert("student register successfully");
    studentForm.reset();
  }
});
