const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    //Show menu visibility
    document.body.classList.toggle("show-mobile-menu");
});



menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.carousel-button.left');
  const rightBtn = document.querySelector('.carousel-button.right');

  let currentSlide = 0;

  const getVisibleCards = () => {
    if (window.innerWidth <= 640) return 1;
    else if (window.innerWidth <= 900) return 2;
    else return 3;
  };

  const updateCarousel = () => {
    const cards = document.querySelectorAll('.testimonial-card');
    const cardWidth = cards[0].offsetWidth + 30; // width + gap
    const visibleCards = getVisibleCards();
    const maxSlide = cards.length - visibleCards;
    currentSlide = Math.min(currentSlide, maxSlide);
    const shift = currentSlide * cardWidth;
    track.style.transform = `translateX(-${shift}px)`;
  };

  leftBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  rightBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    if (currentSlide < cards.length - getVisibleCards()) {
      currentSlide++;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel(); // initial
});


// Highlight active nav link based on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // adjust for navbar height
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
