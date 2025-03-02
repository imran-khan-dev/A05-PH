document.addEventListener("DOMContentLoaded", () => {
  // Discover Button
  document.getElementById("discover-btn").addEventListener("click", () => {
    window.location.href = "discover.html";
  });

  // Set Current Date
  const dateElement = document.querySelector(".current-date");
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  dateElement.textContent = new Date().toLocaleDateString("en-US", options);

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Event listener for color button
  document.getElementById("color-btn").addEventListener("click", () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });
  
});
