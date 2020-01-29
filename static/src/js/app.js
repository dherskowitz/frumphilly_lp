var signupEmail = document.querySelector("#signup-email");
var signupSubmit = document.querySelector("#signup-submit");
var errorNotice = document.querySelector("#error_notice");
var contactOverlay = document.querySelector("#contact-overlay");
var contactOverlayTitle = document.querySelector("#contact-overlay__title");
var contactOverlayLoader = document.querySelector("#contact-overlay__loader");

signupSubmit.addEventListener("click", function (e) {
  var formData = new FormData();
  formData.append("email", signupEmail.value);
  e.preventDefault();
  if (signupEmail.value === "") {
    errorNotice.classList.add("show");
  } else {
    if (errorNotice.classList.contains("show")) {
      errorNotice.classList.remove("show");
    }
    contactOverlay.classList.add("show");
    sendMail(formData);
  }
});

function sendMail(form) {
  fetch("/signup", {
      method: "post",
      body: form
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.response === "invalid_email") {
        errorNotice.classList.add("show");
        contactOverlay.classList.remove("show");
      }
      if (data.response === "success") {
        contactOverlayTitle.innerText = "Message sent 😎";
        contactOverlayLoader.style.display = "none";
        signupEmail.value = "";
      }
    });
}


const slider = document.querySelector('#upcoming_events');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing"
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = "grab"
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  // console.log(walk);
});