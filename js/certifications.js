// certifications.js — auto-discovery PNG grid + lightbox
(function(){
  var grid = document.getElementById('certs-grid');
  if (!grid) return;

  fetch('certifications/certs.json', { cache: 'no-store' })
    .then(function(r){ return r.json(); })
    .then(function(list){
      grid.innerHTML = '';
      list.forEach(function(c, i){
        var div = document.createElement('button');
        div.className = 'cert';
        div.type = 'button';
        div.dataset.index = i;
        div.setAttribute('aria-label', 'Open ' + c.title);
        div.innerHTML =
          '<img src="certifications/' + encodeURIComponent(c.file) + '" alt="' + escapeHtml(c.title) + '" loading="lazy" />' +
          '<figcaption class="cert-cap">' + escapeHtml(c.title) + (c.issuer ? ' — ' + escapeHtml(c.issuer) : '') + '</figcaption>';
        div.addEventListener('click', function(){ openLb(i); });
        grid.appendChild(div);
      });
      window.__certs = list;
    })
    .catch(function(e){
      grid.innerHTML = '<p class="dim">Could not load certifications.</p>';
      console.error(e);
    });

  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lb-img');
  var lbCap = document.getElementById('lb-cap');
  var cur = 0;

  function openLb(i){
    cur = i;
    show();
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close(){
    lb.hidden = true;
    document.body.style.overflow = '';
  }
  function show(){
    var c = window.__certs[cur];
    if (!c) return;
    lbImg.src = 'certifications/' + encodeURIComponent(c.file);
    lbImg.alt = c.title;
    lbCap.textContent = c.title + (c.issuer ? ' — ' + c.issuer : '');
  }
  function next(){ cur = (cur + 1) % window.__certs.length; show(); }
  function prev(){ cur = (cur - 1 + window.__certs.length) % window.__certs.length; show(); }

  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-next').addEventListener('click', next);
  lb.querySelector('.lb-prev').addEventListener('click', prev);
  lb.addEventListener('click', function(e){ if (e.target === lb) close(); });
  document.addEventListener('keydown', function(e){
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(m){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m];
    });
  }
})();
