
    // Sticky header color change
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        header.classList.remove('transparent');
        header.classList.add('solid');
      } else {
        header.classList.add('transparent');
        header.classList.remove('solid');
      }
    });

 // Year
document.getElementById('year').textContent = new Date().getFullYear();

// Animate counters
const nums = document.querySelectorAll('.num');
const animate = (el) => {
  const target = +el.dataset.target;
  let curr = 0;
  const step = Math.max(1, Math.round(target / 40));
  const tick = () => {
    curr += step;
    if (curr >= target) {
      el.textContent = target + "+"; // 👈 Add plus when complete
    } else {
      el.textContent = curr;
      requestAnimationFrame(tick);
    }
  };
  requestAnimationFrame(tick);
};

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animate(e.target);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.6 });

nums.forEach(n => io.observe(n));

// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();