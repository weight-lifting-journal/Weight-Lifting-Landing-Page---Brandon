/*------------Modal Functionality------------*/
const modal = {
  container: document.querySelector(".nav-container"),
  btn: document.querySelector(".menu-icon"),
  closeBtn: document.querySelector(".close-menu")
};
// const modal = document.querySelector(".nav-container");
// const modalBtn = document.querySelector(".menu-icon");
// const modalCloseBtn = document.querySelector(".close-menu");

modal.btn.onclick = () => {
  modal.container.style.display = "block";
};

modal.closeBtn.onclick = e => {
  e.preventDefault();
  modal.container.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) {
    modal.container.style.display = "none";
  }
};
