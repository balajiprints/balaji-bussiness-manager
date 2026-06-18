// Balaji Business Manager Login System

const pinInput = document.getElementById("pin");
const loginBtn = document.getElementById("loginBtn");
const error = document.getElementById("error");

function login() {
  const enteredPin = pinInput.value;
  const savedPin = localStorage.getItem("bbm_pin");

  if (enteredPin === savedPin) {
    window.location.href = "dashboard.html";
  } else {
    error.innerText = "Wrong PIN";
    pinInput.value = "";
  }
}

if (loginBtn) {
  loginBtn.addEventListener("click", login);
}

if (pinInput) {
  pinInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      login();
    }
  });
}
