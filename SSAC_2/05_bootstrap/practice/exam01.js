// ScrollReveal Configuration
const scrollRevealConfig = {
  slideUp: {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
  },
};

// Initialize ScrollReveal
ScrollReveal().reveal('.slide-up', scrollRevealConfig.slideUp);
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.squares', { mobile: false });

// Social Media Links
const instaIcon = () => window.open('https://www.instagram.com');
const naverBlogIcon = () => window.open('https://www.blog.naver.com');

// Bootstrap Carousel Configuration
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Carousel
  const myCarouselElement = document.querySelector('#carouselExample');
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false,
  });

  // Carousel Event Listener
  myCarouselElement.addEventListener('slide.bs.carousel', event => {
    // Add any carousel slide event handling here
  });

  // Initialize Popovers
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]',
  );
  const popoverList = [...popoverTriggerList].map(
    popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl),
  );
});

// Load More Function (if needed)
async function loadMore(selector) {
  // Add your load more functionality here
  return Promise.resolve();
}
