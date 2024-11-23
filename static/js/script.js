window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var logo_nav = document.querySelector('.nav-logo');
    if (window.scrollY > 100) {
        navbar.classList.add('background');
    } else {
        navbar.classList.remove('background');
    }

    if (window.scrollY > 650) {
        logo_nav.classList.remove('hidden');
    } else {
        logo_nav.classList.add('hidden');
    }
});