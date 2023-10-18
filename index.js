let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");

function result() {
  if (hoursInput.value === "" && minutesInput.value === "") {
    errorMsg.textContent = "Please enter a valid number of hours.";
    timeInSeconds.textContent = "";
  } else if (minutesInput.value === "") {
    errorMsg.textContent = "Please enter a valid number of minutes.";
    timeInSeconds.textContent = "";
  } else {
    let total =
      parseInt(hoursInput.value) * 3600 +
      parseInt(minutesInput.value) * 60 +
      "s";
    timeInSeconds.textContent = total;
    timeInSeconds.classList.add("output");
    errorMsg.textContent = "";
  }
}

convertBtn.addEventListener("click", result);
