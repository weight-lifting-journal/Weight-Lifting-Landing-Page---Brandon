const modal = document.querySelector(".nav-container");
const modalBtn = document.querySelector(".menu-icon");
const modalCloseBtn = document.querySelector(".close-menu");

modalBtn.onclick = () => {
  modal.style.display = "block";
};

modalCloseBtn.onclick = e => {
  e.preventDefault();
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
