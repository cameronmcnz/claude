document.addEventListener('DOMContentLoaded', function () {

  // 1. READING PROGRESS BAR
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
  }

  // 2. SCROLL REVEAL
  const revealEls = document.querySelectorAll('.reveal-up');
  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  // 3. STAT COUNTER ANIMATION (landing page)
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  const counters = document.querySelectorAll('.counter[data-target]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          el.textContent = Math.floor(easeOut(progress) * target);
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  // 4. ACTIVE NAV LINK
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar .nav-link').forEach(function (link) {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // 5. ACTIVE SIDEBAR LINK
  document.querySelectorAll('.sidebar-lesson-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace(/\/$/, '') + '/') || currentPath === href) {
      link.classList.add('active');
      // Expand parent accordion section
      const collapseEl = link.closest('.accordion-collapse');
      if (collapseEl) {
        collapseEl.classList.add('show');
        const btn = document.querySelector('[data-bs-target="#' + collapseEl.id + '"]');
        if (btn) btn.classList.remove('collapsed');
      }
    }
  });

  // 6. LESSON COMPLETION (localStorage)
  function getCompleted() {
    try { return JSON.parse(localStorage.getItem('completedLessons') || '[]'); }
    catch (e) { return []; }
  }
  function saveCompleted(arr) {
    localStorage.setItem('completedLessons', JSON.stringify(arr));
  }

  function applyCompletionUI() {
    const completed = getCompleted();
    document.querySelectorAll('.sidebar-check[data-url]').forEach(function (icon) {
      const url = icon.getAttribute('data-url');
      if (completed.indexOf(url) !== -1) {
        icon.classList.add('done');
      } else {
        icon.classList.remove('done');
      }
    });

    const markBtn = document.getElementById('markComplete');
    if (markBtn) {
      const lessonUrl = markBtn.getAttribute('data-lesson');
      if (completed.indexOf(lessonUrl) !== -1) {
        markBtn.innerHTML = '<i class="lni lni-checkmark me-1"></i> Completed ✓';
        markBtn.classList.add('btn-success');
        markBtn.classList.remove('btn-brand');
      }
    }

    updateSidebarProgress(completed);
  }

  function updateSidebarProgress(completed) {
    const allLinks = document.querySelectorAll('.sidebar-lesson-link');
    const total = allLinks.length;
    if (total === 0) return;
    const done = completed.length;
    const pct = Math.round((done / total) * 100);
    const bar = document.getElementById('sidebar-progress-bar');
    const label = document.getElementById('progress-pct');
    if (bar) { bar.style.width = pct + '%'; bar.setAttribute('aria-valuenow', pct); }
    if (label) label.textContent = pct + '%';
  }

  const markBtn = document.getElementById('markComplete');
  if (markBtn) {
    markBtn.addEventListener('click', function () {
      const lessonUrl = markBtn.getAttribute('data-lesson');
      const completed = getCompleted();
      if (completed.indexOf(lessonUrl) === -1) {
        completed.push(lessonUrl);
        saveCompleted(completed);
      }
      applyCompletionUI();
    });
  }

  applyCompletionUI();

  // 7. SIDEBAR COMPLETION PROGRESS BAR — handled inside applyCompletionUI()

  // 8. CALLOUT CARD UPGRADE
  document.querySelectorAll('.lesson-content h2').forEach(function (h2) {
    if (/^try this/i.test(h2.textContent.trim())) {
      const next = h2.nextElementSibling;
      if (next && next.tagName === 'BLOCKQUOTE') {
        next.classList.add('callout-card');
        const label = document.createElement('span');
        label.className = 'callout-label';
        label.textContent = 'Try this in Claude';
        next.insertBefore(label, next.firstChild);
      }
    }
  });

  // 9. SMOOTH ANCHOR SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 10. STICKY NAVBAR SHADOW
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-sm');
      } else {
        navbar.classList.remove('shadow-sm');
      }
    }, { passive: true });
  }

});
