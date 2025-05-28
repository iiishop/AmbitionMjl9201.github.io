document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.sidebar-footer-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      const icon = link.querySelector('svg');
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseleave', () => {
      const icon = link.querySelector('svg');
      icon.style.transform = 'scale(1)';
    });
  });

  function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const debouncedResize = debounce(() => {
  }, 200);

  window.addEventListener('resize', debouncedResize);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile) {
    document.querySelector('.home-container::after').style.animation = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', () => {
  const backToTop = document.querySelector('.back-to-top');
  backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.body.classList.toggle('sidebar-open');
});
 
document.addEventListener('click', (e) => {
    if (!e.target.closest('.home-sidebar') && 
        !e.target.closest('.mobile-toggle') && 
        document.querySelector('.home-sidebar').classList.contains('active')) {
        document.querySelector('.home-sidebar').classList.remove('active');
    }
});
