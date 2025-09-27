// Active le ScrollSpy avec un offset = hauteur de la navbar
(function () {
    const nav = document.querySelector('.navbar');
    const offset = (nav?.offsetHeight || 80) + 8;
    const spy = new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    offset: offset
    });

    // Quand le layout change (images chargées, etc.), on rafraîchit
    window.addEventListener('load', () => spy.refresh());
    window.addEventListener('resize', () => spy.refresh());
})();

// Navbar sticky uniquement après le hero
(function () {
    const nav = document.querySelector('.navbar');
    const spacer = document.getElementById('nav-spacer');
    const hero = document.querySelector('header.hero');
    if (!nav || !hero || !spacer) return;
    const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        nav.classList.remove('is-fixed');
        spacer.style.height = '0px';
    } else {
        nav.classList.add('is-fixed');
        spacer.style.height = nav.offsetHeight + 'px';
    }
    }, { threshold: 0 });
    io.observe(hero);
})();