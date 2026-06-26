/*===== عرض وإخفاء القائمة =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('menu-open');
    });
  }
};

showMenu('menu-toggle', 'main-menu');

/*===== إغلاق القائمة عند النقر على رابط =====*/
const navLinks = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('main-menu');
  navMenu.classList.remove('menu-open');
}

navLinks.forEach((link) => link.addEventListener('click', linkAction));

/*===== تفعيل الرابط النشط عند التمرير =====*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        ?.classList.add('active');
    } else {
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        ?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*===== تأثير ScrollReveal =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});

sr.reveal('.hero-content, .about-image, .work-heading, .work-description', {});
sr.reveal('.hero-image, .about-heading, .about-description, .work-image', {
  delay: 400,
});
sr.reveal('.social-link', { interval: 200 });
sr.reveal('.stat-item, .leader-card, .faction-card, .form-control', {
  interval: 200,
});