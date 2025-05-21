// Optional interactivity or placeholder
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      alert(`You clicked on "${btn.textContent}"`);
    });
  });
  