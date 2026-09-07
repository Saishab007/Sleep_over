// ===== Page 1: Yes / No dodge button =====
(function () {
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const note = document.getElementById("dodge-note");
  if (!noBtn || !yesBtn) return;

  const messages = [
    "Nice try!",
    "Nope, not that one 😅",
    "So close!",
    "Almost had it!",
    "Try again!",
    "Not today!",
    "Catch me if you can!",
    "Yeah... no.",
    "Getting warmer? No.",
    "Just click Yes 😉"
  ];
  let msgIndex = 0;
  let dodgeCount = 0;

  function moveNoButton() {
    const btnRect = noBtn.getBoundingClientRect();
    const margin = 12;
    const maxX = window.innerWidth - btnRect.width - margin;
    const maxY = window.innerHeight - btnRect.height - margin;

    const newX = Math.max(margin, Math.random() * maxX);
    const newY = Math.max(margin, Math.random() * maxY);

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";

    dodgeCount++;
    note.textContent = messages[msgIndex % messages.length];
    msgIndex++;
  }

  // Initialize position (fixed positioning needs an initial left/top)
  window.addEventListener("load", () => {
    const rect = noBtn.getBoundingClientRect();
    noBtn.style.left = rect.left + "px";
    noBtn.style.top = rect.top + "px";
  });

  noBtn.addEventListener("pointerenter", moveNoButton);
  noBtn.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      moveNoButton();
    },
    { passive: false }
  );
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
  });
  window.addEventListener("resize", () => {
    // keep the button on-screen if the window is resized
    const rect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - 12;
    const maxY = window.innerHeight - rect.height - 12;
    noBtn.style.left = Math.min(rect.left, Math.max(0, maxX)) + "px";
    noBtn.style.top = Math.min(rect.top, Math.max(0, maxY)) + "px";
  });

  yesBtn.addEventListener("click", () => {
    window.location.href = "date.html";
  });
})();

// ===== Page 2: "Yes" confirmation — quietly email that she said yes =====
(function () {
  const page = document.getElementById("yes-page");
  if (!page) return;

  // Same Formspree endpoint used on the planner page (see README.md for setup steps).
  const FORM_ENDPOINT = "https://formspree.io/f/xrpggdwd";
  const ALREADY_SENT_KEY = "dateMeYesNotified";

  if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) return;
  if (sessionStorage.getItem(ALREADY_SENT_KEY)) return;

  const formData = new FormData();
  formData.append("message", "Ms. Rachel said YES to movie night and sleepover!");
  formData.append("responded_at", new Date().toString());

  fetch(FORM_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then(() => sessionStorage.setItem(ALREADY_SENT_KEY, "1"))
    .catch((err) => console.error("Notification email failed to send:", err));
})();
