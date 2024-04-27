function validateInput() {
  let inputField
  let nameField = document.getElementById("comment");
  let submitBtn = document.getElementById("submit_button");

  if (inputField.value.trim().length > 0 && nameField.value.trim().length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
    submitBtn.style.color = "";
  }
}