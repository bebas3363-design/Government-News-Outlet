const menuBtn = document.getElementById("menuBtn");
const loginDropdown = document.getElementById("loginDropdown");

menuBtn.addEventListener("click", () => {
  loginDropdown.classList.toggle("active");

  // optional -> ganti ikon
  menuBtn.textContent = loginDropdown.classList.contains("active") ? "✕" : "☰";
});
