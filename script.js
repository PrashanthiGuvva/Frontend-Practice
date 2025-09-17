// Get elements
const ageInput = document.getElementById("ageInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

// Add event listener to button
checkBtn.addEventListener("click", function() {
  const age = parseInt(ageInput.value);

  if (ageInput.age) {
    message.textContent = " Please enter a valid age.";
    message.style.color = "red";
  } else if (age >= 18) {
    message.textContent = "Permission Granted!";
    message.style.color = "green";
  } else {
    message.textContent = " Permission Denied!";
    message.style.color = "red";
  }
});
