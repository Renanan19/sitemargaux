// Project pages: a photograph opens full screen when clicked. Arrow keys or the side buttons move
// to the next one, Escape or a click on the backdrop closes. Without JavaScript the page is unchanged.
(() => {
  const imgs = [...document.querySelectorAll(".zoomable img")];
  if (!imgs.length || !("showModal" in HTMLDialogElement.prototype)) return;
  const fr = document.documentElement.lang === "fr";
  const box = document.createElement("dialog");
  box.className = "zoom";
  box.innerHTML = `<button class="zoom-close" aria-label="${fr ? "Fermer" : "Close"}">&times;</button><button class="zoom-prev" aria-label="${fr ? "Photo précédente" : "Previous photograph"}">&#8249;</button><img alt=""><button class="zoom-next" aria-label="${fr ? "Photo suivante" : "Next photograph"}">&#8250;</button>`;
  document.body.append(box);
  const big = box.querySelector("img");
  let at = 0;
  const show = (i) => {
    at = (i + imgs.length) % imgs.length;
    big.src = imgs[at].getAttribute("src");
    big.alt = imgs[at].alt;
  };
  imgs.forEach((img, i) => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    const open = () => { show(i); box.showModal(); };
    img.addEventListener("click", open);
    img.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
  box.querySelector(".zoom-prev").addEventListener("click", () => show(at - 1));
  box.querySelector(".zoom-next").addEventListener("click", () => show(at + 1));
  box.querySelector(".zoom-close").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  box.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(at - 1);
    if (e.key === "ArrowRight") show(at + 1);
  });
  let x0 = null;
  box.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(at + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });
})();
