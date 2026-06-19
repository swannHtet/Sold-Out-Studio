/* ============================================================
   PORTFOLIO — main.js
   ============================================================ */

'use strict';

/* ═══════════════════════════════════════
   PROJECT DATA
═══════════════════════════════════════ */
const projects = [
  {
    id: 0,
    title: 'G-Fatt: The Urban Riot',
    category: 'Motion Flyer',
    status: 'Sold Out',
    role: 'Creative Motion Director',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop'],
    image: './assets/G-Fatt.webp',
    description:
      `The G-Fatt live event needed a visual promo as gritty and raw as the artist's underground hip- hop roots.I engineered a high - impact motion flyer system — from urban - inspired typography and 2.5D parallax environments to aggressive beat - syncing — that positioned the night as an unmissable, premium experience.The final motion design uses a dark cinematic palette and sharp kinetic transitions to convey pure street energy and exclusivity.`,
    challenge:
      `The Challenge: The biggest challenge was condensing a massive artist lineup, 90's Band crew, and complex VIP/VVIP seating details into a punchy, high-energy 8-second visual without cluttering the screen. Through precise frame-by-frame beat-syncing and strategic camera shakes over a Manhattan Bridge backdrop, we arrived at a motion piece that holds attention beautifully on mobile screens and drives one core message: buy the ticket or miss the riot.`,
  },
  {
    id: 1,
    title: `The Cyberpunk Hype`,
    category: 'Cinematic Hype Video',
    status: 'Sold Out',
    role: 'Visual Architect & Editor',
    tools: ['After Effects', 'Premiere Pro'],
    image: './assets/activeHype.webp',
    description:
      `Active Bar needed a high-octane hype video that went far beyond standard, boring nightlife recaps. I engineered a glitch-heavy, cyberpunk-inspired visual experience — from custom UI scanning coordinates to aggressive, laser-synced transitions — that amplified both the DJ's presence and the crowd's raw energy. The final cinematic edit uses rapid frame-cuts and a neon-drenched aesthetic to convey absolute hype, cementing the venue as the ultimate nightlife destination.`,
    challenge:
      `The biggest challenge was transforming standard club footage into a high-end, ego-boosting cinematic asset that actively drives VIP table sales. Through aggressive audio-visual synchronization and custom motion graphics, we arrived at a 35-second masterpiece that perfectly elevates the raw clips. It ends with a bold "VIP TABLES SOLDOUT" manifesto, turning a simple recap into a ruthless marketing weapon.`,
  },
  {
    id: 2,
    title: 'SNARE: The Underground Arena',
    category: 'Motion Flyer/Event Promo',
    status: 'Sold Out',
    role: 'Visual Architect',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop'],
    image: './assets/snareUG.webp',
    description:
      `The DJ duo SNARE needed a visual promo as heavy, commanding, and raw as their stage presence. I designed a gritty, underground fight-club-inspired motion flyer — from aggressive 3D chrome typography and atmospheric smoke to subtle 2.5D parallax character movements — that positioned the night as an elite, heavyweight event. The final motion piece uses a dark industrial palette and tungsten lighting to convey absolute street authority and pure energy.`,
    challenge:
      `The biggest challenge was bringing a static, heavy gangster-themed layout to life without losing its grim, industrial atmosphere. Through strategic lighting flickers, calculated camera zooms, and screen-blended smoke overlays synchronized to a heavy beat, we arrived at a motion asset that reads perfectly as a cinematic poster and encodes the core idea of an unmissable, aggressive nightlife collision.`,
  },
  {
    id: 3,
    title: 'SNARE: The West Coast Bounce',
    category: 'Motion Flyer/Event Promo',
    status: 'Sold Out',
    role: 'Visual Architect',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop'],
    image: './assets/snareHipHop.webp',
    description:
      `The DJ duo SNARE required an alternative promotional visual that captured the golden-hour essence of Los Angeles street culture. I constructed a vibrant, 90s hip-hop-inspired motion flyer — from glowing sunset backdrops and classic lowrider aesthetics to street-style typography — that positioned the event as a high-energy, premium block party. The final motion piece uses a warm, sun-drenched palette and smooth, rhythmic camera motions to convey pure street swag and nostalgia.`,
    challenge:
      `The Challenge: The biggest challenge was capturing the laid-back yet heavy-hitting vibe of West Coast rap within a short visual loop without cluttering the screen. Through smooth, bouncy camera pans that mimic a lowrider's rhythm, combined with beat-synced graffiti reveals and a radiant sunset glow, we arrived at a visually striking promo that holds attention effortlessly and perfectly encodes the core idea of a classic hip-hop night.`,
  },
  {
    id: 4,
    title: 'AURA: The Festival Mainstage',
    category: 'Festival Promo',
    status: 'Completed',
    role: 'Creative Motion Director',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop'],
    image: './assets/aura.webp',
    description:
      `The AURA EDM Festival required a visual promo as explosive and massive as its mainstage lineup. I designed a high-voltage motion experience — from blinding neon lasers and kinetic typography to rapid-fire beat-syncing — that positioned the festival as the ultimate electronic music destination. The final motion design uses an electric neon palette, glitch overlays, and high-bpm camera movements to convey pure adrenaline and massive scale.`,
    challenge:
      `The biggest challenge was capturing the overwhelming sensory overload of a massive stadium rave within a concise, scroll-stopping motion loop. Through aggressive 128-BPM frame cuts, custom glowing light sweeps, and hyper-kinetic transitions, we arrived at a visual teaser that reads perfectly on mobile screens and completely encodes the core idea of an explosive musical climax.`,
  },
  {
    id: 5,
    title: 'PO PO: The VIP Takeover',
    category: 'Motion Flyer',
    status: 'Completed',
    role: 'Visual Strategist & Motion Director',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop'],
    image: './assets/popo.webp',
    description:
      `PO PO didn't just want to open its doors; it wanted to establish immediate nightlife dominance. I engineered a complete, high-voltage visual ecosystem designed to trigger instant VIP FOMO. From aggressive kinetic typography and blinding neon accents to elite aesthetic positioning, every frame was calculated to elevate the brand. The visual identity was built with a single ruthless goal: to make the venue look so legendary that it sells out before the first beat drops.`,
    challenge:
      `The objective was to cut through the noise of standard, boring nightlife marketing and create an undeniable urge for the 1% to book a table. Through dark-mode aesthetics fused with hyper-kinetic motion loops, we transformed PO PO into an exclusive, must-attend destination. The campaign successfully turned an empty venue into an absolute takeover zone, resulting in fully packed VIP lounges and pure mainstage energy.`,
  },
];


/* ═══════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════ */
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mx = -100, my = -100, fx = -100, fy = -100;
let followerRaf;

function updateFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  cursorFollower.style.left = fx + 'px';
  cursorFollower.style.top = fy + 'px';
  followerRaf = requestAnimationFrame(updateFollower);
}

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
  cursorFollower.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
  cursorFollower.style.opacity = '0';
});

// Hover states
const hoverEls = document.querySelectorAll('a, button, .tag');
hoverEls.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorFollower.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorFollower.classList.remove('hover');
  });
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cursorFollower.classList.add('project-hover');
    cursorFollower.classList.remove('hover');
    cursor.classList.remove('hover');
  });
  card.addEventListener('mouseleave', () => {
    cursorFollower.classList.remove('project-hover');
  });
});

updateFollower();


/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Scrolled state
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// Hamburger
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
});

// Close on link click
document.querySelectorAll('[data-close-menu]').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--color-text)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));


/* ═══════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
      const index = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));


/* ═══════════════════════════════════════
   HERO CANVAS — Animated Grid Lines
═══════════════════════════════════════ */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, dpr, animId;

  const ACCENT = [249, 115, 22];
  const particles = [];
  const PARTICLE_COUNT = 55;

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.size = Math.random() * 1.5 + 0.3;
      this.speed = Math.random() * 0.4 + 0.15;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.drift = (Math.random() - 0.5) * 0.2;
    }
    update() {
      this.y -= this.speed;
      this.x += this.drift;
      this.opacity -= 0.0008;
      if (this.y < -10 || this.opacity <= 0) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${Math.max(0, this.opacity)})`;
      ctx.fill();
    }
  }

  function resize() {
    dpr = window.devicePixelRatio || 1;
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
  }

  function drawGrid() {
    const COLS = 12, ROWS = 8;
    const cw = W / COLS, rh = H / ROWS;

    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 0.5;

    for (let i = 0; i <= COLS; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cw, 0);
      ctx.lineTo(i * cw, H);
      ctx.stroke();
    }
    for (let j = 0; j <= ROWS; j++) {
      ctx.beginPath();
      ctx.moveTo(0, j * rh);
      ctx.lineTo(W, j * rh);
      ctx.stroke();
    }
  }

  function drawGradient() {
    const g = ctx.createRadialGradient(W * 0.3, H * 0.5, 0, W * 0.3, H * 0.5, W * 0.7);
    g.addColorStop(0, 'rgba(249,115,22,0.06)');
    g.addColorStop(0.5, 'rgba(249,115,22,0.02)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    drawGradient();
    drawGrid();
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(tick);
  }

  function init() {
    resize();
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    cancelAnimationFrame(animId);
    tick();
  }

  window.addEventListener('resize', () => { resize(); });
  init();
})();


/* ═══════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════ */
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');

function openModal(projectId) {
  const p = projects[projectId];
  if (!p) return;

  modalContent.innerHTML = `
    <img src="${p.image}" alt="${p.title}" class="modal__hero-img" loading="lazy" />
    <span class="modal__category">${p.category}</span>
    <h2 class="modal__title" id="modalTitle">${p.title}</h2>
    <p class="modal__desc">${p.description}</p>
    <div class="modal__meta-grid">
      <div class="modal__meta-item">
        <span class="modal__meta-label">Status</span>
        <span class="modal__meta-value modal__meta-value--status">${p.status}</span>
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Role</span>
        <span class="modal__meta-value">${p.role}</span>
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Category</span>
        <span class="modal__meta-value">${p.category}</span>
      </div>
    </div>
    <p class="modal__desc"><strong style="color:var(--color-text)">The Challenge:</strong> ${p.challenge}</p>
    <div class="modal__tools">
      ${p.tools.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Register cursor on new elements
  modalContent.querySelectorAll('.tag').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorFollower.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorFollower.classList.remove('hover'); });
  });
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

projectCards.forEach(card => {
  card.addEventListener('click', () => openModal(Number(card.dataset.project)));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(Number(card.dataset.project)); });
});

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Cursor on modal elements
[modalClose, modalBackdrop].forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorFollower.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorFollower.classList.remove('hover'); });
});



/* ═══════════════════════════════════════
   VIDEO LIGHTBOX
═══════════════════════════════════════ */
(function initVideoModal() {
  const videoModal = document.getElementById('videoModal');
  const videoModalPlayer = document.getElementById('videoModalPlayer');
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoModalBackdrop = document.getElementById('videoModalBackdrop');

  if (!videoModal) return;

  /**
   * Convert any YouTube URL format to a proper embed URL.
   * Handles: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID
   */
  function toYouTubeEmbed(url) {
    // Already an embed URL — return as-is
    if (url.includes('youtube.com/embed/')) return url;

    let videoId = null;

    // youtu.be/ID  or  youtu.be/ID?si=...
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) videoId = shortMatch[1];

    // youtube.com/watch?v=ID
    if (!videoId) {
      const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
      if (watchMatch) videoId = watchMatch[1];
    }

    return videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : url; // fallback: return original if we can't parse it
  }

  function openVideoModal(card) {
    const type = card.dataset.videoType;   // 'youtube' | 'vimeo' | 'local'
    const src = card.dataset.videoSrc;
    const title = card.dataset.videoTitle || '';

    videoModalPlayer.innerHTML = '';

    if (type === 'local') {
      const vid = document.createElement('video');
      vid.src = src;
      vid.controls = true;
      vid.autoplay = true;
      vid.playsInline = true;
      videoModalPlayer.appendChild(vid);
    } else {
      // Normalise to embed URL, then append autoplay params
      const embedSrc = type === 'youtube' ? toYouTubeEmbed(src) : src;
      const sep = embedSrc.includes('?') ? '&' : '?';
      const iframe = document.createElement('iframe');
      iframe.src = embedSrc + sep + 'autoplay=1&rel=0';
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.title = title;
      videoModalPlayer.appendChild(iframe);
    }

    videoModalTitle.textContent = title;
    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    // Stop iframe by clearing src; pause <video> if local
    const iframe = videoModalPlayer.querySelector('iframe');
    const vid = videoModalPlayer.querySelector('video');
    if (iframe) iframe.src = '';
    if (vid) { vid.pause(); }
    videoModal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { videoModalPlayer.innerHTML = ''; }, 300);
  }

  // Wire each video card
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => openVideoModal(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openVideoModal(card); }
    });

    // Cursor hover on entire card and play button
    [card, card.querySelector('.video-card__play')].filter(Boolean).forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorFollower.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorFollower.classList.remove('hover'); });
    });
  });

  videoModalClose.addEventListener('click', closeVideoModal);
  videoModalBackdrop.addEventListener('click', closeVideoModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideoModal(); });

  // Cursor on modal controls
  [videoModalClose, videoModalBackdrop].forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorFollower.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorFollower.classList.remove('hover'); });
  });
})();


/* ═══════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════ */

(function initForm() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const msgInput = document.getElementById('formMessage');
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  function validate() {
    let valid = true;

    const nameGroup = nameInput.closest('.form-group');
    if (!nameInput.value.trim()) {
      nameGroup.classList.add('has-error'); valid = false;
    } else { nameGroup.classList.remove('has-error'); }

    const emailGroup = emailInput.closest('.form-group');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    if (!emailOk) {
      emailGroup.classList.add('has-error'); valid = false;
    } else { emailGroup.classList.remove('has-error'); }

    const msgGroup = msgInput.closest('.form-group');
    if (!msgInput.value.trim()) {
      msgGroup.classList.add('has-error'); valid = false;
    } else { msgGroup.classList.remove('has-error'); }

    return valid;
  }

  [nameInput, emailInput, msgInput].forEach(input => {
    input.addEventListener('input', () => {
      input.closest('.form-group').classList.remove('has-error');
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.disabled = true;
    submitBtn.querySelector('.btn__text').textContent = 'Sending…';

    // Simulate async submission
    await new Promise(r => setTimeout(r, 1500));

    form.reset();
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn__text').textContent = 'Send Message';
    successMsg.classList.add('visible');
    setTimeout(() => successMsg.classList.remove('visible'), 5000);
  });
})();


/* ═══════════════════════════════════════
   BACK TO TOP
═══════════════════════════════════════ */
const backToTop = document.getElementById('backToTop');

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTop.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorFollower.classList.add('hover'); });
backToTop.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorFollower.classList.remove('hover'); });


/* ═══════════════════════════════════════
   LAZY IMAGE LOADING
═══════════════════════════════════════ */
if ('IntersectionObserver' in window) {
  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) { img.src = img.dataset.src; }
        img.style.opacity = '0';
        img.addEventListener('load', () => {
          img.style.transition = 'opacity 0.5s ease';
          img.style.opacity = '1';
        }, { once: true });
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImgs.forEach(img => imgObserver.observe(img));
}


/* ═══════════════════════════════════════
   STAT COUNTER ANIMATION
═══════════════════════════════════════ */
(function initCounters() {
  const stats = document.querySelectorAll('.about__stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const text = el.textContent;
      const num = parseInt(text);
      const suffix = text.replace(/[0-9]/g, '');
      let start = 0;
      const duration = 1200;
      const startTime = performance.now();

      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * num) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.6 });

  stats.forEach(s => counterObserver.observe(s));
})();
