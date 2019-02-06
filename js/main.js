/*------------Modal Functionality------------*/
const modal = {
  container: document.querySelector(".nav-container"),
  btn: document.querySelector(".menu-icon"),
  closeBtn: document.querySelector(".close-menu")
};

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

/*------------About Team Functionality------------*/
const teamImages = [
  "/images/julianm.jpg",
  "/images/brandon.jpg",
  "/images/brandon.jpg",
  "/images/sean.png",
  "/images/brandon.jpg",
  "/images/brandon.jpg",
  "/images/brandon.jpg",
  "/images/jonathan.jpg"
];
const teamPhotos = document.querySelectorAll(".team-member-photo");

teamPhotos.forEach((member, cur) => {
  member.style.background = `url(${teamImages[cur]})`;
  member.style.backgroundSize = "cover";
  member.style.backgroundRepeat = "no-repeat";
});
