document.addEventListener("DOMContentLoaded", () => {
  const backHomeButton = document.getElementById("back-home");
  if (backHomeButton) {
    backHomeButton.addEventListener("click", () => {
      // Navigate back to index page
      window.location.href = "index.html";
    });
  }
});
