// Autotors — shared JS

// ====== EDIT THIS ======
const WHATSAPP_NUMBER = "2348000000000"; // change to real number, no + or spaces
const WHATSAPP_MSG = "Hello AutoMotors, I'd like to know more about your cars.";
// =======================

// Inject WhatsApp floating button + footer year on every page
document.addEventListener("DOMContentLoaded", () => {
  // WhatsApp button
  const wa = document.createElement("a");
  wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.className = "wa-float";
  wa.setAttribute("aria-label", "Chat on WhatsApp");
  wa.innerHTML = `<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.39.703 4.612 1.91 6.486L4 29l7.703-1.876A11.93 11.93 0 0 0 16.003 27C22.63 27 28 21.627 28 15S22.63 3 16.003 3zm0 21.6c-1.86 0-3.62-.524-5.118-1.428l-.367-.218-4.572 1.114 1.122-4.46-.24-.378A9.55 9.55 0 0 1 6.4 15c0-5.293 4.31-9.6 9.603-9.6S25.6 9.707 25.6 15s-4.305 9.6-9.597 9.6zm5.27-7.18c-.288-.144-1.708-.844-1.973-.94-.265-.097-.458-.144-.65.145-.193.29-.747.94-.916 1.133-.169.193-.337.217-.626.072-.289-.145-1.222-.45-2.328-1.435-.86-.767-1.44-1.713-1.61-2.003-.169-.29-.018-.446.127-.591.13-.13.29-.337.435-.506.145-.169.193-.29.29-.482.097-.193.048-.362-.024-.506-.073-.145-.65-1.567-.89-2.146-.235-.564-.473-.488-.65-.497l-.554-.01a1.06 1.06 0 0 0-.77.362c-.265.29-1.012.989-1.012 2.41s1.036 2.797 1.18 2.99c.144.193 2.04 3.115 4.946 4.367.69.298 1.23.476 1.65.609.693.22 1.324.19 1.823.115.556-.083 1.708-.698 1.95-1.372.24-.674.24-1.252.169-1.372-.072-.12-.265-.193-.554-.337z"/></svg>`;
  document.body.appendChild(wa);

  // Year
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  // Mobile menu toggle
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if (btn && nav) btn.addEventListener("click", () => nav.classList.toggle("open"));

  // Mark active nav link
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
});
