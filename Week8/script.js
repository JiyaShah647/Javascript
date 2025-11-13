let is24Hour = true; // Default mode: 24-hour

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Determine AM or PM based on hour
  let ampm = hours >= 12 ? "PM" : "AM";

  if (!is24Hour) {
    // Convert to 12-hour format
    hours = hours % 12 || 12;
  }

  // Keep 24-hour format (00–23)
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  document.getElementById("ampm").textContent = ampm;

  // Date display section
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

  document.getElementById("date").textContent =
    `${dayName}, ${date} ${monthName} ${year}`;
}

// Toggle format when button clicked
document.getElementById("toggle-format").addEventListener("click", () => {
  is24Hour = !is24Hour;
  const button = document.getElementById("toggle-format");
  button.textContent = is24Hour
    ? "Switch to 12-hour Format"
    : "Switch to 24-hour Format";
  updateClock(); // Refresh immediately
});

// Update every second
setInterval(updateClock, 1000);
updateClock();
