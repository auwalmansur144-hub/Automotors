// Lightbox
document.addEventListener("DOMContentLoaded", () => {
  const lb = document.getElementById("lightbox");
  const lbImg = lb.querySelector("img");
  document.querySelectorAll(".gallery .item img").forEach(img => {
    img.parentElement.addEventListener("click", () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.classList.add("open");
    });
  });
  lb.addEventListener("click", e => { if (e.target===lb || e.target.classList.contains("close")) lb.classList.remove("open"); });
  document.addEventListener("keydown", e => { if (e.key==="Escape") lb.classList.remove("open"); });
});
