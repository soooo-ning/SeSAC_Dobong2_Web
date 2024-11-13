// ScrollReveal
ScrollReveal().reveal('.squares', { mobile: false });

// Links
const instaIcon = () => window.open('https://www.instagram.com');
const naverBlogIcon = () => window.open('https://www.blog.naver.com');

// Carousel
document.addEventListener('DOMContentLoaded', () => {
  const myCarouselElement = document.querySelector('#carouselExample');
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false,
  });

  // Popovers
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]',
  );
  const popoverList = [...popoverTriggerList].map(
    popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl),
  );
});
