// Olga Sirenko · Work page
(function () {
  var ACCESS_CODE = 'ACCESS2026'; // case-study access code (checked in the browser: casual gate, not real security)
  var root = document.getElementById('top');

  // ---------- theme ----------
  var toggle = document.getElementById('theme-toggle');
  var icon = toggle && toggle.querySelector('.material-symbols-outlined');
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    if (icon) icon.textContent = t === 'dark' ? 'light_mode' : 'dark_mode';
    try { localStorage.setItem('os-theme', t); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('os-theme'); } catch (e) {}
  setTheme(saved || 'dark');
  if (toggle) toggle.addEventListener('click', function () {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // ---------- locked case studies ----------
  var unlocked = false;
  try { unlocked = sessionStorage.getItem('os-unlocked') === '1'; } catch (e) {}
  var backdrop = document.getElementById('lock');
  var form = document.getElementById('lock-form');
  var input = document.getElementById('lock-code');
  var error = document.getElementById('lock-error');
  var titleEl = document.getElementById('lock-title');
  var request = document.getElementById('lock-request');
  var target = null, opener = null;

  function openLock(card) {
    target = card.getAttribute('href');
    opener = card;
    titleEl.textContent = card.getAttribute('data-title');
    request.href = 'mailto:hello@olgasirenko.com?subject=' + encodeURIComponent('Case study access request: ' + card.getAttribute('data-title'));
    error.textContent = '';
    input.value = '';
    backdrop.classList.add('is-open');
    setTimeout(function () { input.focus(); }, 50);
  }
  function closeLock() {
    backdrop.classList.remove('is-open');
    if (opener) opener.focus();
  }
  document.querySelectorAll('a.case-card[data-locked]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (unlocked) return;
      e.preventDefault();
      openLock(card);
    });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value.trim().toUpperCase() !== ACCESS_CODE) {
      error.textContent = 'That code doesn’t match. Request access below.';
      input.focus();
      return;
    }
    unlocked = true;
    try { sessionStorage.setItem('os-unlocked', '1'); } catch (e2) {}
    document.querySelectorAll('a.case-card[data-locked] [data-lock-icon]').forEach(function (n) { n.remove(); });
    window.location.href = target;
  });
  document.getElementById('lock-close').addEventListener('click', closeLock);
  backdrop.addEventListener('click', function (e) { if (e.target === backdrop) closeLock(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && backdrop.classList.contains('is-open')) closeLock(); });
  if (unlocked) document.querySelectorAll('a.case-card[data-locked] [data-lock-icon]').forEach(function (n) { n.remove(); });
})();
