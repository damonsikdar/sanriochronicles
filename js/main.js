// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Simple lightbox for gallery images
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed; inset:0; background:rgba(0,0,0,0.8);
      display:flex; align-items:center; justify-content:center;
      z-index:1000; cursor:zoom-out; padding:1rem;
    `;
    const clone = img.cloneNode();
    clone.style.cssText = 'max-width:90vw; max-height:90vh; border-radius:12px; object-fit:contain;';
    overlay.appendChild(clone);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
