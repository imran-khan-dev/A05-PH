document.addEventListener("DOMContentLoaded", () => {
  // Discover Button
  document.getElementById("discover-btn").addEventListener("click", () => {
    window.location.href = "discover.html";
  });

  // Current Date
  const dateElement = document.querySelector(".current-date");
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  dateElement.textContent = new Date().toLocaleDateString("en-US", options);

  // Function for generate a random bg color
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

  // Task Elements
  const taskAssignedElement = document.querySelector(".task-assigned-count");
  const totalCompletedElement = document.querySelector(
    ".total-completed-count"
  );
  const activityLog = document.querySelector(".activity-log");

  let isLastTaskCompleted = false;

  // Task Completion
  document.querySelectorAll(".complete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.disabled) return;

      const taskTitle =
        this.closest(".task-card").querySelector("h2").textContent;
      const currentTime = new Date().toLocaleTimeString();

      alert("Board updated successfully");

      // Updating Task Assigned Count
      let taskAssigned = parseInt(taskAssignedElement.textContent, 10);
      if (taskAssigned > 0) {
        taskAssignedElement.textContent = taskAssigned - 1;
      }

      // Updating Total Completed Tasks
      let totalCompleted = parseInt(totalCompletedElement.textContent, 10);
      totalCompletedElement.textContent = totalCompleted + 1;

      // Log Entry
      const logEntry = document.createElement("p");
      logEntry.className =
        "text-base p-[10px] rounded-[8px] bg-[#F4F7FF] mb-[28px]";
      logEntry.textContent = `You have Completed The Task "${taskTitle}" at ${currentTime}`;
      activityLog.prepend(logEntry);

      this.disabled = true;
      this.classList.add("opacity-50", "cursor-not-allowed");

      let taskAssignedCount = parseInt(taskAssignedElement.textContent, 10);

      if (taskAssignedCount === 0 && !isLastTaskCompleted) {
        isLastTaskCompleted = true;
        setTimeout(() => {
          alert("Congrats! You have completed all the tasks.");
        }, 200);
      }
    });
  });

  // Clear History
  document.getElementById("clear-history").addEventListener("click", () => {
    activityLog.innerHTML = "";
  });
});
