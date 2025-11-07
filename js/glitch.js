document.querySelectorAll('.glitch-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.animation = 'glitch 0.3s infinite';
  });
  card.addEventListener('mouseleave', () => {
    card.style.animation = '';
  });
});
