/* =========================================
   SiteFix ZA — MAIN JAVASCRIPT
========================================= */

document.addEventListener('DOMContentLoaded', function () {

    /* -------------------------------------
       1. MOBILE NAVIGATION
    ------------------------------------- */

    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    if (hamburger && navLinks) {

        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('nav-open');
            hamburger.classList.toggle('hamburger-open');
            console.log('Hamburger clicked');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('nav-open');
                hamburger.classList.remove('hamburger-open');
            });
        });
    }

    /* -------------------------------------
       2. NAVBAR SCROLL SHADOW
    ------------------------------------- */

    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    /* -------------------------------------
       3. FAQ ACCORDION
    ------------------------------------- */

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', function () {

                const isOpen = item.classList.contains('open');

                faqItems.forEach(function (el) {
                    el.classList.remove('open');
                    el.querySelector('.faq-question')
                      .setAttribute('aria-expanded', 'false');
                });

                if (!isOpen) {
                    item.classList.add('open');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    /* -------------------------------------
       4. ACTIVE NAV LINK ON SCROLL
    ------------------------------------- */

    const sections   = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        let currentSection = '';

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navAnchors.forEach(function (anchor) {
            anchor.classList.remove('nav-active');
            if (anchor.getAttribute('href') === '#' + currentSection) {
                anchor.classList.add('nav-active');
            }
        });
    });

    /* -------------------------------------
       5. SCROLL REVEAL
    ------------------------------------- */

    const revealElements = document.querySelectorAll(
        '.service-card, .portfolio-card, .why-card, ' +
        '.pricing-card, .faq-item, .problem-scenario'
    );

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
        el.classList.add('reveal');
        observer.observe(el);
    });

});