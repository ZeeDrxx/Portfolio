// main.js — theme, lang, scroll reveals
(function(){
  // Theme
  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', function(){
    var t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch(_) {}
  });

  // Language
  var lang = localStorage.getItem('lang') || (navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en');
  if (window.applyI18n) window.applyI18n(lang);
  var langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.addEventListener('click', function(){
    lang = lang === 'en' ? 'fr' : 'en';
    try { localStorage.setItem('lang', lang); } catch(_) {}
    if (window.applyI18n) window.applyI18n(lang);
  });

  // Scroll reveal
  var els = document.querySelectorAll('.section, .project, .lead-card, .edu-card, .t-item, .hero-portrait');
  els.forEach(function(el){ el.classList.add('reveal'); });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function(el){ io.observe(el); });

  // Hero already-visible (no jump)
  document.querySelectorAll('.hero, .hero .hero-grid > *').forEach(function(el){
    el.classList && el.classList.add('visible');
  });

  // Smooth anchor + active nav highlight
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a');
  var spy = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        var id = '#' + e.target.id;
        navAnchors.forEach(function(a){
          a.style.color = (a.getAttribute('href') === id) ? 'var(--text)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(function(s){ spy.observe(s); });
})();
