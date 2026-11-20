// ==========================
// FUNCIONES - ANIVERSARIO
// ==========================

// Fecha en que comenzó la relación: 20 de noviembre de 2025.
// En JavaScript, los meses empiezan en 0: 10 significa noviembre.
const startDate = new Date(2025, 10, 20, 0, 0, 0);
const anniversaryDate = new Date(2026, 10, 20, 0, 0, 0);

// Contador desde el inicio de la relación.
function updateCounter() {
  const now = new Date();
  const difference = Math.max(0, now - startDate);
  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  const note = document.getElementById("counterNote");
  if (now < anniversaryDate) {
    const remaining = anniversaryDate - now;
    const leftDays = Math.floor(remaining / 86400000);
    note.textContent = `Falta${leftDays === 1 ? "" : "n"} ${leftDays} día${leftDays === 1 ? "" : "s"} para nuestro primer aniversario.`;
  } else {
    note.textContent = "Desde el 20 de noviembre de 2025, nuestra historia sigue sumando momentos.";
  }
}
updateCounter();
setInterval(updateCounter, 1000);

// Música: los navegadores requieren que la persona pulse el botón.
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "♫ Pausar música";
    } catch (error) {
      musicButton.textContent = "No se encontró musica.mp3";
    }
  } else {
    music.pause();
    musicButton.textContent = "♫ Activar música";
  }
});

// Abrir y cerrar la carta.
const openLetterButton = document.getElementById("openLetter");
const letterText = document.getElementById("letterText");

openLetterButton.addEventListener("click", () => {
  letterText.classList.toggle("show");
  openLetterButton.textContent = letterText.classList.contains("show")
    ? "Cerrar mi carta"
    : "Abrir mi carta";
});

// Revelar la sorpresa final.
const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", () => {
  surpriseMessage.classList.add("show");
  surpriseButton.textContent = "Una historia que continúa ♡";
});
