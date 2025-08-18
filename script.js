document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for nav buttons
  const navButtons = document.querySelectorAll(".nav-links button");
  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.textContent.toLowerCase();
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Resume button click
  const resumeBtn = document.querySelector(".resume-btn");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
      alert("Resume download feature will be added soon!");
      // Example: window.open("resume.pdf", "_blank");
    });
  }


});
