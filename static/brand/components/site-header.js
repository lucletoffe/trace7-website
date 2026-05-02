/* site-header.js — toggle thème dark/light + persistance localStorage
   Composant unifié undust.co · antifrag.fr · trace7.fr
   À charger en defer après le DOM. La pré-paint inline (avant <body>)
   est dans le partial head pour éviter le flash.
*/
(function () {
  'use strict';
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  var meta = document.querySelector('meta[name="theme-color"]');
  var COLORS = { dark: '#1a1a1a', light: '#fafaf7' };

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (meta) meta.setAttribute('content', COLORS[theme] || COLORS.dark);
    toggle.setAttribute('aria-label',
      theme === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre');
  }

  apply(document.documentElement.getAttribute('data-theme') || 'dark');

  toggle.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('undust-theme', next); } catch (e) { /* noop */ }
  });
})();
