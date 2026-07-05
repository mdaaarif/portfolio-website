/* ==========================================================================
   PORTFOLIO INTERACTIVE SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initProjectFilters();
  initNavbarScroll();
});

/**
 * Handles filtering the project cards grid based on selected category tabs.
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Update active state on buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      // 2. Animate and toggle visibility of project cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          // Fade in and show card
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          // Fade out and hide card
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300); // matches the transition duration in CSS
        }
      });
    });
  });
}

/**
 * Handles subtle navbar background transitions as the user scrolls.
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
      navbar.style.padding = '12px 0';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.padding = '16px 0';
    }
  });
}
