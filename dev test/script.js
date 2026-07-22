const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/*dropdowns::abrir/cerrar al hacer clic en el link con flecha*/
const dropLinks = document.querySelectorAll(".nav-link-drop");
dropLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const item = link.parentElement;
    const isOpen = item.classList.contains("open");
    // cerrar todos los otros
    document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("open"));
    // abrir/cerrar el actual
    if (!isOpen) item.classList.add("open");
  });
});

/*cerrar dropdowns al hacer clic fuera*/
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-item")) {
    document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("open"));
  }
});

/*carrusel de Why Choose*/
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevCard");
const nextBtn = document.getElementById("nextCard");
let currentPage = 0;

function cardsPerPage() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 1024) return 3;
  return cards.length;
}

function showPage() {
  const perPage = cardsPerPage();
  const totalPages = Math.ceil(cards.length / perPage);
  if (currentPage >= totalPages) currentPage = totalPages - 1;

  cards.forEach((card, i) => {
    const page = Math.floor(i / perPage);
    card.style.display = page === currentPage ? "block" : "none";
  });
}

showPage();

nextBtn.addEventListener("click", () => {
  const perPage = cardsPerPage();
  const totalPages = Math.ceil(cards.length / perPage);
  currentPage = (currentPage + 1) % totalPages;
  showPage();
});

prevBtn.addEventListener("click", () => {
  const perPage = cardsPerPage();
  const totalPages = Math.ceil(cards.length / perPage);
  currentPage = (currentPage - 1 + totalPages) % totalPages;
  showPage();
});

window.addEventListener("resize", showPage);