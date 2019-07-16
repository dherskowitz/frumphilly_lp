var signupEmail = document.querySelector("#signup-email");
var signupSubmit = document.querySelector("#signup-submit");
var errorNotice = document.querySelector("#error_notice");
var contactOverlay = document.querySelector("#contact-overlay");
var contactOverlayTitle = document.querySelector("#contact-overlay__title");
var contactOverlayLoader = document.querySelector("#contact-overlay__loader");

signupSubmit.addEventListener("click", function(e) {
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
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.response === "invalid_email") {
        errorNotice.classList.add("show");
        contactOverlay.classList.remove("show");
      }
      if (data.response === "success") {
        contactOverlayTitle.innerText = "Message sent 😎";
        contactOverlayLoader.style.display = "none";
      }
    });
}
