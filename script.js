// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme toggle with localStorage support
const toggle = document.getElementById('themeToggle');

// Check saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggle.textContent = '🌞'; // Dark mode active, show Sun
} else {
  toggle.textContent = '🌗'; // Light mode active, show Moon
}

// Toggle theme on click
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggle.textContent = '🌞';
  } else {
    localStorage.setItem('theme', 'light');
    toggle.textContent = '🌗';
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
