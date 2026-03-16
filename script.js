/* ═══════════════════════════════════════════════════════════
   TRACE7 — Scripts
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavigation();
    initTallyVisitorId();

    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        if (document.querySelector('.section--hero:not(.section--page-hero)')) {
            initHeroAnimations();
        }

        initScrollAnimations();

        if (document.querySelector('.section--triptyque')) {
            initTriptyqueAnimation();
        }
    } else {
        activateAllHighlights();
        document.querySelectorAll('.triptyque-line').forEach(function(line) {
            line.style.opacity = '1';
            line.style.transform = 'none';
        });
    }
});

/* ═══════════════════════════════════
   THEME TOGGLE
   ═══════════════════════════════════ */

function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const icon = toggle.querySelector('.theme-toggle-icon');
    if (!icon) return;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
    }

    icon.innerHTML = savedTheme === 'light'
        ? '<svg class="icon-sm icon-accent" aria-hidden="true"><use href="#icon-moon"/></svg>'
        : '<svg class="icon-sm icon-accent" aria-hidden="true"><use href="#icon-sun"/></svg>';

    const handleToggle = () => {
        document.documentElement.classList.toggle('light');
        const theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        icon.innerHTML = theme === 'light'
            ? '<svg class="icon-sm icon-accent" aria-hidden="true"><use href="#icon-moon"/></svg>'
            : '<svg class="icon-sm icon-accent" aria-hidden="true"><use href="#icon-sun"/></svg>';
    };

    toggle.addEventListener('click', handleToggle);
    toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
        }
    });
}

/* ═══════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════ */

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-sticky__item[data-section]');
    if (!navItems.length) return;

    const sections = document.querySelectorAll('.section[id]');

    // Smooth scroll
    document.querySelectorAll('.nav-sticky__item[href^="#"], .logo-button[href^="#"], a[href^="#"]').forEach(item => {
        item.addEventListener('click', (e) => {
            const href = item.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                updateActiveNav(sectionId);
            }
        });
    }, { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
}

function updateActiveNav(sectionId) {
    const sectionMap = {
        'hero': null,
        'probleme': 'probleme',
        'modules': 'modules',
        'deploiement': 'modules',
        'qui': 'modules',
        'waitlist': 'waitlist',
        'faq': 'waitlist'
    };

    const navId = sectionMap[sectionId];

    document.querySelectorAll('.nav-sticky__item[data-section]').forEach(item => {
        const isActive = item.getAttribute('data-section') === navId;
        item.classList.toggle('active', isActive);
    });
}

/* ═══════════════════════════════════
   TALLY VISITOR TRACKING
   ═══════════════════════════════════ */

function initTallyVisitorId() {
    var vid = localStorage.getItem('trace7_vid');
    if (!vid) {
        vid = crypto.randomUUID();
        localStorage.setItem('trace7_vid', vid);
    }

    document.querySelectorAll('a[href*="tally.so"]').forEach(function(link) {
        var url = new URL(link.href);
        url.searchParams.set('visitor_id', vid);
        link.href = url.toString();
    });
}

/* ═══════════════════════════════════
   SCRAMBLE TEXT
   ═══════════════════════════════════ */

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function scrambleText(element, finalHTML, duration) {
    const parts = finalHTML.split(/<br\s*\/?>/i);
    const totalChars = parts.reduce((sum, p) => sum + p.length, 0);
    let iteration = 0;
    const totalIterations = duration / 30;
    const interval = setInterval(() => {
        let charsSoFar = 0;
        const scrambled = parts.map(part => {
            const result = part.split('').map((char, i) => {
                const globalIdx = charsSoFar + i;
                if (char === ' ') return ' ';
                if (globalIdx < iteration / (totalIterations / totalChars)) return char;
                return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            }).join('');
            charsSoFar += part.length;
            return result;
        }).join('<br>');
        element.innerHTML = scrambled;
        iteration++;
        if (iteration >= totalIterations) {
            clearInterval(interval);
            element.innerHTML = finalHTML;
        }
    }, 30);
}

/* ═══════════════════════════════════
   HERO ANIMATIONS
   ═══════════════════════════════════ */

function initHeroAnimations() {
    const headline = document.querySelector('.hero-headline');
    const subheadline = document.querySelector('.hero-subheadline');
    const cta = document.querySelector('.hero-cta');

    if (!headline) return;

    headline.classList.add('gsap-ready');
    if (subheadline) subheadline.classList.add('gsap-ready');
    if (cta) cta.classList.add('gsap-ready');

    const finalHeadline = headline.innerHTML;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.set(headline, { autoAlpha: 1 });
    tl.add(() => { scrambleText(headline, finalHeadline, 800); }, 0);

    if (subheadline) {
        tl.from(subheadline, { autoAlpha: 0, y: 20, duration: 0.6 }, 1.2);
    }

    if (cta) {
        tl.from(cta, { autoAlpha: 0, y: 20, duration: 0.6 }, 2.0);
    }

    tl.call(animateHeroHighlights, [], 2.5);
}

/* ═══════════════════════════════════
   SCROLL ANIMATIONS
   ═══════════════════════════════════ */

function initScrollAnimations() {
    document.querySelectorAll('h2').forEach(h2 => {
        gsap.from(h2, {
            scrollTrigger: { trigger: h2, start: "top 85%", toggleActions: "play none none none" },
            autoAlpha: 0, x: -30, duration: 0.8, ease: "power2.out"
        });
    });

    document.querySelectorAll('h3').forEach(h3 => {
        gsap.from(h3, {
            scrollTrigger: { trigger: h3, start: "top 85%", toggleActions: "play none none none" },
            autoAlpha: 0, scale: 0.95, duration: 0.6, ease: "power2.out"
        });
    });

    document.querySelectorAll('.section:not(.section--hero) .highlight-bg--rouge, .section:not(.section--hero) .highlight-bg--teal').forEach(highlight => {
        ScrollTrigger.create({
            trigger: highlight, start: "top 92%", once: true,
            onEnter: () => { highlight.classList.add('highlighted'); }
        });
    });

    setTimeout(() => {
        const unhighlighted = document.querySelectorAll('.highlight-bg--rouge:not(.highlighted), .highlight-bg--teal:not(.highlighted)');
        if (unhighlighted.length > 0) {
            const fallbackObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('highlighted');
                        fallbackObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            unhighlighted.forEach(el => fallbackObserver.observe(el));
        }
    }, 8000);
}

function animateHeroHighlights() {
    const highlights = document.querySelectorAll('.section--hero .highlight-bg--rouge, .section--hero .highlight-bg--teal');
    highlights.forEach((el, index) => {
        setTimeout(() => { el.classList.add('highlighted'); }, index * 400);
    });
}

function activateAllHighlights() {
    document.querySelectorAll('.highlight-bg--rouge, .highlight-bg--teal').forEach(function(el) {
        el.classList.add('highlighted');
    });
}

/* ═══════════════════════════════════
   TRIPTYQUE ANIMATION
   ═══════════════════════════════════ */

const triplets = {
    0: { verb: "Tracer", nouns: ["décision", "tolérance", "exigence"] },
    1: { verb: "Connecter", nouns: ["module", "équipe", "métier"] },
    2: { verb: "Justifier", nouns: ["cote", "choix", "spécification"] }
};

function initTriptyqueAnimation() {
    const section = document.querySelector('.section--triptyque');
    const lines = document.querySelectorAll('.section--triptyque .triptyque-line');

    if (!section || !lines.length) return;

    ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        once: true,
        onEnter: () => {
            const tl = gsap.timeline();

            tl.to(lines, {
                opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
            });

            tl.call(startNounRotation, [], 2);
        }
    });
}

function startNounRotation() {
    const nounElements = document.querySelectorAll('.section--triptyque .triptyque-noun');
    const currentIndices = [0, 0, 0];

    if (!nounElements.length) return;

    function animateNextCycle() {
        nounElements.forEach((el, lineIndex) => {
            if (!triplets[lineIndex]) return;
            const nouns = triplets[lineIndex].nouns;
            currentIndices[lineIndex] = (currentIndices[lineIndex] + 1) % nouns.length;
            const nextNoun = nouns[currentIndices[lineIndex]];
            const delay = lineIndex * 420;
            setTimeout(() => { scrambleText(el, nextNoun, 600); }, delay);
        });
    }

    setInterval(animateNextCycle, 4000);
}