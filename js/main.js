/*------------Modal Functionality------------*/
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

/*------------Nav Functionality------------*/
const homeBtn = document.querySelector("#homeBtn");
const home = document.querySelector("#home");
homeBtn.onclick = () => {
  window.scroll({ top: home.offsetTop, behavior: "smooth" });
  modal.style.display = "none";
};

const featuresBtn = document.querySelector("#featuresBtn");
const features = document.querySelector("#features");
featuresBtn.onclick = () => {
  features.scrollIntoView();
  // window.scroll({ top: features.offsetTop, behavior: "smooth" });
  modal.style.display = "none";
};

const contactBtn = document.querySelector("#contactBtn");
const contact = document.querySelector("#contact");
contactBtn.onclick = () => {
  window.scroll({ top: contact.offsetTop, behavior: "smooth" });
  modal.style.display = "none";
};

const testimonialsBtn = document.querySelector("#testimonialsBtn");
const testimonials = document.querySelector("#testimonials");
testimonialsBtn.onclick = () => {
  window.scroll({ top: testimonials.offsetTop, behavior: "smooth" });
  modal.style.display = "none";
};
