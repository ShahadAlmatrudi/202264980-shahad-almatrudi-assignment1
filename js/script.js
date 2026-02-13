document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1) Reveal on scroll
  // =========================
  const revealEls = document.querySelectorAll(".reveal-on-scroll");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => io.observe(el));

  // =========================
  // 2) Theme toggle (required JS feature)
  // =========================
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
    if (toggleBtn) toggleBtn.querySelector(".theme-toggle__icon").textContent = "☀️";
  }

  toggleBtn?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("theme-dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.querySelector(".theme-toggle__icon").textContent = isDark ? "☀️" : "🌙";
  });

  // =========================
  // 3) Contact form interaction (no backend)
  // =========================
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name")?.value.trim();
    const email = form.querySelector("#email")?.value.trim();
    const message = form.querySelector("#message")?.value.trim();

    if (!name || !email || !message) {
      if (statusEl) statusEl.textContent = "Please fill in all fields before sending.";
      return;
    }

    if (statusEl) statusEl.textContent = `Thanks, ${name}! Your message is ready (no backend in this project).`;
    form.reset();
  });
});
