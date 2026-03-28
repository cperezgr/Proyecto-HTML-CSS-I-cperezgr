import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  once: true,
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-list');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';

    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('nav-list--open');
  });
}

const filterButtons = document.querySelectorAll('[data-filter]');
const filterItems = document.querySelectorAll('[data-category]');

if (filterButtons.length && filterItems.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((btn) => {
        btn.classList.remove('is-active');
      });

      button.classList.add('is-active');

      filterItems.forEach((item) => {
        const itemCategory = item.dataset.category;
        const shouldShow = selectedFilter === 'all' || itemCategory === selectedFilter;

        item.hidden = !shouldShow;
      });
    });
  });
}
