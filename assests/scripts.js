// Initialize AOS animation
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Back to top button
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownHover = document.querySelector(".dropdown-hover");
  const dropdownMenu = dropdownHover.querySelector(".dropdown-menu");
  const dropdownToggle = dropdownHover.querySelector(".dropdown-toggle");

  // Check if device supports touch
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    // Desktop: Enable hover
    dropdownHover.addEventListener("mouseenter", function () {
      dropdownMenu.classList.add("show");
      dropdownToggle.setAttribute("aria-expanded", "true");
    });

    dropdownHover.addEventListener("mouseleave", function () {
      dropdownMenu.classList.remove("show");
      dropdownToggle.setAttribute("aria-expanded", "false");
    });
  } else {
    // Mobile: Handle touch differently
    dropdownToggle.addEventListener("click", function (e) {
      // If dropdown is closed, prevent redirect and show dropdown
      if (!dropdownMenu.classList.contains("show")) {
        e.preventDefault();
        dropdownMenu.classList.add("show");
        this.setAttribute("aria-expanded", "true");
      }
      // If dropdown is open, allow redirect to /about us.html
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdownHover.contains(e.target)) {
        dropdownMenu.classList.remove("show");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
   

  // Navbar scroll effect
        window.addEventListener("scroll", function () {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });

        // Initialize dropdown hover effect for desktop
        document.addEventListener("DOMContentLoaded", function () {
            const dropdownHovers = document.querySelectorAll(".dropdown-hover");
            
            // Check if device supports touch
            const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

            if (!isTouchDevice) {
                // Desktop: Enable hover
                dropdownHovers.forEach(dropdownHover => {
                    const dropdownMenu = dropdownHover.querySelector(".dropdown-menu");
                    const dropdownToggle = dropdownHover.querySelector(".dropdown-toggle");

                    dropdownHover.addEventListener("mouseenter", function () {
                        dropdownMenu.classList.add("show");
                        dropdownToggle.setAttribute("aria-expanded", "true");
                    });

                    dropdownHover.addEventListener("mouseleave", function () {
                        dropdownMenu.classList.remove("show");
                        dropdownToggle.setAttribute("aria-expanded", "false");
                    });
                });
            }
        });
          