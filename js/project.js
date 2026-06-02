(function () {
  if (!document.body.classList.contains('project-page')) return;

  document.querySelectorAll('.section').forEach((section, index) => {
    const header = section.querySelector('.section-header');
    if (!header || section.querySelector('.section-collapse')) return;

    const collapse = document.createElement('div');
    collapse.className = 'section-collapse';
    if (index > 0) collapse.classList.add('is-collapsed');

    let next = header.nextElementSibling;
    while (next) {
      const move = next;
      next = next.nextElementSibling;
      collapse.appendChild(move);
    }

    section.appendChild(collapse);
    header.classList.add('section-toggle');
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');

    const toggle = () => {
      const closed = collapse.classList.toggle('is-collapsed');
      header.setAttribute('aria-expanded', closed ? 'false' : 'true');
    };

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
})();
