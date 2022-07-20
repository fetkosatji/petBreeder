const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector("nav");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // Navbar scroll
  window.onscroll = () => {
    if (window.scrollY > 250) {
        navbar.classList.add('nav-scroll');
    } else {
        navbar.classList.remove('nav-scroll');
    }
  };
  // navbar for mobile
  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    // nav links animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.removeProperty('animation');
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.4}s`;
      }
    });

    // burger animation
    burger.classList.toggle('toggle');
  });
};
navSlide();
