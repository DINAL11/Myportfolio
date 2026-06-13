(function () {
  const tabs = document.querySelectorAll('.work-cat-btn');
  const panels = document.querySelectorAll('.work-panel');
  if (!tabs.length || !panels.length) return;

  function showCategory(id) {
    tabs.forEach((tab) => {
      const on = tab.dataset.category === id;
      tab.classList.toggle('active', on);
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach((panel) => {
      const on = panel.dataset.panel === id;
      panel.classList.toggle('active', on);
      panel.hidden = !on;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => showCategory(tab.dataset.category));
  });

  const hash = window.location.hash.replace('#', '');
  const valid = ['systems', 'data', 'product', 'healthcare'];
  if (valid.includes(hash)) showCategory(hash);
})();
