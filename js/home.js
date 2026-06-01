(function () {
  const stack = document.getElementById('showcase-stack');
  if (!stack) return;

  const cards = [...stack.querySelectorAll('.showcase-card')];
  const dots = [...document.querySelectorAll('.showcase-dot')];
  let active = 0;
  let timer;

  function setActive(index) {
    active = (index + cards.length) % cards.length;
    cards.forEach((card, i) => {
      const offset = (i - active + cards.length) % cards.length;
      card.classList.remove('active', 'behind-1', 'behind-2');
      if (offset === 0) card.classList.add('active');
      else if (offset === 1) card.classList.add('behind-1');
      else card.classList.add('behind-2');
    });
    dots.forEach((dot, i) => {
      const on = i === active;
      dot.classList.toggle('active', on);
      dot.setAttribute('aria-selected', on ? 'true' : 'false');
    });
  }

  function next() {
    setActive(active + 1);
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(next, 5500);
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      setActive(Number(dot.dataset.slide));
      startAuto();
    });
  });

  stack.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    next();
    startAuto();
  });

  setActive(0);
  startAuto();

  const canvas = document.getElementById('starfield');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let w = 0;
  let h = 0;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(180, Math.floor((w * h) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.5 + 0.2,
      s: Math.random() * 0.15 + 0.02,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    stars.forEach((star) => {
      star.y += star.s;
      if (star.y > h) star.y = 0;
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${star.a})`;
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  draw();
})();
