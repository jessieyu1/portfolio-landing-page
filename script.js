// script.js

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Check if user's preferred color scheme is dark mode
const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Set the initial theme based on user's preference
setTheme(isDarkMode);

// Add event listener to the theme toggle button
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateThemeIcon();
});

// Update the theme icon based on the current theme
function updateThemeIcon() {
  const isDarkMode = body.classList.contains("dark-mode");
  themeIcon.textContent = isDarkMode ? "☀️" : "🌙";
}

// Set the theme and update the theme icon
function setTheme(isDarkMode) {
  if (isDarkMode) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
  updateThemeIcon();
}
