window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  const login = document.getElementById("login-screen");

  // имитация загрузки
  setTimeout(() => {
    splash.classList.add("hidden");
    login.classList.remove("hidden");
  }, 1500);
});
