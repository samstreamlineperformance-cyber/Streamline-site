// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }));
}

// "Enquire about a group booking" pre-selects the club option in the form
const typeSelect = document.getElementById('enquiry-type');
document.querySelectorAll('[data-enquiry]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeSelect) typeSelect.value = link.dataset.enquiry;
  });
});

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
