const toggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('main-menu');

if (toggle && navMenu) {
  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open');
  });
}


// إغلاق القائمة عند النقر على أي رابط
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('menu-open');
  });
});