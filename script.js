window.onload = function () {
  let daySelect = document.getElementById("day");
  let monthSelect = document.getElementById("month");
  let yearSelect = document.getElementById("year");

  for (let d = 1; d <= 31; d++) {
    let option = document.createElement("option");
    option.value = d;
    option.text = d;
    daySelect.add(option);
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for (let m = 0; m < 12; m++) {
    let option = document.createElement("option");
    option.value = m;
    option.text = months[m];
    monthSelect.add(option);
  }

  let currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= 1947; y--) {
    let option = document.createElement("option");
    option.value = y;
    option.text = y;
    yearSelect.add(option);
  }
};

function calculateAge() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  if (!day || !month || !year) {
    document.getElementById("result").innerText = "Please select your full date of birth!";
    return;
  }

  const birthDate = new Date(year, month, day);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    ageYears--;
  }

  document.getElementById("result").innerText = `You are ${ageYears} years old.`;
}

function resetForm() {
  document.getElementById("day").selectedIndex = 0;
  document.getElementById("month").selectedIndex = 0;
  document.getElementById("year").selectedIndex = 0;
  document.getElementById("result").innerText = "";
}
