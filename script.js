function ValidateEmail() {
  let emailInput = document.getElementById("email").value;
  console.log(emailInput);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let email = document.getElementsByClassName("email-error");
  let errorIcon = document.getElementsByClassName("error-icon");

  if (emailInput.match(validRegex)) {
    email[0].style.display = "none";
    errorIcon[0].style.display = "none";
    errorIcon[0].classList.remove("show-icon");

    return true;
  } else {
    email[0].style.display = "block";
    email[0].style.fontSize = "1rem";

    errorIcon[0].style.display = "inline";
    errorIcon[0].classList.add("show-icon");
    console.log(errorIcon);
    return false;
  }
}
