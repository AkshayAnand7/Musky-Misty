/* =======================================
   SCROLL ENGINE — Parallax + Reveals
   Deep scroll-driven animation system
   ======================================= */

(function(){
  'use strict';

  // ---- Lenis-like smooth scroll ----
  let scrollY = 0, targetY = 0, currentY = 0;
  const lerp = (a,b,t) => a + (b - a) * t;
  const SMOOTH = 0.08;

  // ---- Utility ----
  function clamp(v,min,max){return Math.min(Math.max(v,min),max)}
  function mapRange(v,inMin,inMax,outMin,outMax){return outMin+(v-inMin)*(outMax-outMin)/(inMax-inMin)}

  // ---- Element progress: 0 = bottom of viewport, 1 = top ----
  function getProgress(el){
    const rect = el.getBoundingClientRect();
    const wh = window.innerHeight;
    // 0 when element enters bottom, 1 when it exits top
    return clamp((wh - rect.top) / (wh + rect.height), 0, 1);
  }

  // ---- Scroll-driven transform engine ----
  function tickScroll(){
    const sy = window.scrollY;

    // ---- PARALLAX: [data-speed] ----
    document.querySelectorAll('[data-speed]').forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const offset = (center - viewCenter) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });

    // ---- PARALLAX-X: horizontal movement on scroll ----
    document.querySelectorAll('[data-speed-x]').forEach(el => {
      const speed = parseFloat(el.dataset.speedX) || 0;
      const p = getProgress(el);
      const x = (p - 0.5) * speed * 200;
      el.style.transform = `translateX(${x}px)`;
    });

    // ---- SCALE on scroll: [data-scroll-scale] ----
    document.querySelectorAll('[data-scroll-scale]').forEach(el => {
      const p = getProgress(el);
      const from = parseFloat(el.dataset.scrollScale) || 0.85;
      const scale = lerp(from, 1, clamp(p * 2, 0, 1));
      const opacity = clamp(p * 3, 0, 1);
      el.style.transform = `scale(${scale})`;
      el.style.opacity = opacity;
    });

    // ---- ROTATE on scroll: [data-scroll-rotate] ----
    document.querySelectorAll('[data-scroll-rotate]').forEach(el => {
      const deg = parseFloat(el.dataset.scrollRotate) || 5;
      const p = getProgress(el);
      const r = lerp(deg, 0, clamp(p * 2, 0, 1));
      el.style.transform += ` rotate(${r}deg)`;
    });

    // ---- Hero-specific deep parallax ----
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const orb = document.querySelector('.hero-bg-orb');
    const heroLines = document.querySelectorAll('.hero-line');
    if(hero && heroContent){
      const heroH = hero.offsetHeight;
      const p = clamp(sy / heroH, 0, 1.5);
      heroContent.style.transform = `translateY(${sy * 0.4}px)`;
      heroContent.style.opacity = 1 - p * 1.4;
      if(orb){
        orb.style.transform = `translate(-50%, calc(-50% + ${sy * 0.2}px)) scale(${1 + p * 0.3})`;
        orb.style.opacity = 1 - p * 0.8;
      }
    }

    // ---- Section title clip reveals ----
    document.querySelectorAll('.section-title[data-clip]').forEach(el => {
      const p = getProgress(el);
      const clip = clamp(1 - p * 2.5, 0, 1) * 100;
      el.style.clipPath = `inset(0 0 ${clip}% 0)`;
      el.style.transform = `translateY(${clip * 0.4}px)`;
    });

    // ---- Stagger children on scroll: [data-stagger] ----
    document.querySelectorAll('[data-stagger]').forEach(container => {
      const p = getProgress(container);
      const children = container.children;
      for(let i = 0; i < children.length; i++){
        const childP = clamp((p * 2) - (i * 0.12), 0, 1);
        const y = lerp(60, 0, childP);
        const opacity = clamp(childP * 2, 0, 1);
        children[i].style.transform = `translateY(${y}px)`;
        children[i].style.opacity = opacity;
      }
    });

    // ---- Image parallax inside cards ----
    document.querySelectorAll('.product-card-visual[data-img-parallax]').forEach(el => {
      const p = getProgress(el);
      const img = el.querySelector('.product-card-img');
      if(img){
        const y = (p - 0.5) * -20;
        img.style.transform = `translateY(${y}px) scale(1.05)`;
      }
    });

    // ---- Marquee speed variation ----
    const marquee = document.querySelector('.marquee-track');
    if(marquee){
      const marqSection = document.querySelector('.marquee');
      if(marqSection){
        const mp = getProgress(marqSection);
        const extraX = (mp - 0.5) * -100;
        marquee.style.setProperty('--extra-x', extraX + 'px');
      }
    }

    // ---- Scroll progress bar ----
    const prog = document.getElementById('scrollProgress');
    if(prog){
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.transform = `scaleX(${docH > 0 ? sy / docH : 0})`;
    }

    requestAnimationFrame(tickScroll);
  }

  // ---- Scroll reveal with IntersectionObserver ----
  function initReveals(){
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, {threshold: 0.06, rootMargin: '0px 0px -100px 0px'});
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  // ---- Split text into spans for animation ----
  function splitText(){
    document.querySelectorAll('[data-split]').forEach(el => {
      if(el.dataset.splitDone) return;
      const text = el.textContent;
      const words = text.split(' ');
      el.innerHTML = words.map((w, i) =>
        `<span class="word" style="display:inline-block;overflow:hidden"><span class="word-inner" style="display:inline-block;transform:translateY(105%);transition:transform 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.04}s">${w}</span></span>`
      ).join(' ');
      el.dataset.splitDone = '1';

      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if(e.isIntersecting){
            el.querySelectorAll('.word-inner').forEach(w => w.style.transform = 'translateY(0)');
            obs.unobserve(e.target);
          }
        });
      }, {threshold: 0.3});
      obs.observe(el);
    });
  }

  // ---- Counter animation ----
  function initCounters(){
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = el.dataset.count;
      const prefix = el.dataset.countPrefix || '';
      const suffix = el.dataset.countSuffix || '';
      const numTarget = parseInt(target.replace(/[^0-9]/g, ''));
      let counted = false;

      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if(e.isIntersecting && !counted){
            counted = true;
            let start = 0;
            const duration = 1500;
            const startTime = performance.now();
            function step(now){
              const elapsed = now - startTime;
              const p = clamp(elapsed / duration, 0, 1);
              const eased = 1 - Math.pow(1 - p, 4);
              const current = Math.round(eased * numTarget);
              el.textContent = prefix + current + suffix;
              if(p < 1) requestAnimationFrame(step);
              else el.textContent = prefix + target + suffix;
            }
            requestAnimationFrame(step);
            obs.unobserve(el);
          }
        });
      }, {threshold: 0.5});
      obs.observe(el);
    });
  }

  // ---- Horizontal scroll section ----
  function initHorizontalScroll(){
    const section = document.querySelector('[data-horizontal]');
    if(!section) return;
    const track = section.querySelector('.h-scroll-track');
    if(!track) return;

    function update(){
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const scrollable = sectionH - window.innerHeight;
      const progress = clamp(-rect.top / scrollable, 0, 1);
      const trackW = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-progress * trackW}px)`;
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ---- Magnetic scroll-driven card rows ----
  function initMagneticCards(){
    const grid = document.getElementById('productsGrid');
    if(!grid) return;

    // How many cards per "row" based on grid columns
    function getColCount(){
      const style = getComputedStyle(grid);
      const cols = style.gridTemplateColumns.split(' ').length;
      return cols || 4;
    }

    function observeCards(){
      const cards = grid.querySelectorAll('.product-card:not(.magnet-observed)');
      if(!cards.length) return;

      const colCount = getColCount();

      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            const card = entry.target;
            const allCards = Array.from(grid.querySelectorAll('.product-card'));
            const index = allCards.indexOf(card);
            const posInRow = index % colCount;
            // Stagger delay based on position in row
            card.style.animationDelay = (posInRow * 0.08) + 's';
            card.classList.add('magnet-in');
            obs.unobserve(card);
          }
        });
      }, {threshold: 0.05, rootMargin: '0px 0px -40px 0px'});

      cards.forEach(card => {
        card.classList.add('magnet-observed');
        card.style.opacity = '0';
        obs.observe(card);
      });
    }

    // Initial observe
    observeCards();

    // Re-observe after DOM changes (load more, filter, etc.)
    const mutObs = new MutationObserver(() => {
      requestAnimationFrame(observeCards);
    });
    mutObs.observe(grid, {childList: true});
  }

  // ---- Init everything ----
  document.addEventListener('DOMContentLoaded', () => {
    initReveals();
    splitText();
    initCounters();
    initHorizontalScroll();
    initMagneticCards();
    requestAnimationFrame(tickScroll);
  });

})();
