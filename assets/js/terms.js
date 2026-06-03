const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if(navToggle && navMenu){
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
      });
    }

    // Close menu when clicking on any link on small screens
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
