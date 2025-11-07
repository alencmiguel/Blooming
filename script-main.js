// ===================================
// BLOOMING - SCRIPT PRINCIPAL
// ===================================

// ===================================
// CURSOR PERSONALIZADO
// ===================================
if (window.innerWidth > 1024) {
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
  });

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
  });
}

// ===================================
// ANIMAÇÃO DO LOGO
// ===================================
function animateLogo() {
  const logo = document.querySelector('.logo-center');
  logo.style.animation = 'none';
  setTimeout(() => {
    logo.style.animation = 'spin 0.5s ease-in-out';
  }, 10);
  
  // Criar partículas
  createParticles();
}

// ===================================
// CRIAR PARTÍCULAS
// ===================================
function createParticles() {
  const colors = ['#7B3FF2', '#E8D5FF', '#FFD700'];
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.borderRadius = '50%';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = '50%';
    particle.style.top = '40px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    
    const angle = (Math.PI * 2 * i) / 10;
    const velocity = 5 + Math.random() * 5;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    document.body.appendChild(particle);
    
    let x = 0;
    let y = 0;
    let opacity = 1;
    
    const animateParticle = () => {
      x += vx;
      y += vy;
      opacity -= 0.02;
      
      particle.style.transform = `translate(${x}px, ${y}px)`;
      particle.style.opacity = opacity;
      
      if (opacity > 0) {
        requestAnimationFrame(animateParticle);
      } else {
        particle.remove();
      }
    };
    
    animateParticle();
  }
}

// ===================================
// CLIQUE NOS CARDS
// ===================================
function handleCardClick(type) {
  const card = event.currentTarget;
  card.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    card.style.transform = '';
    
    if (type === 'IA') {
      alert('🤖 Assistente IA em desenvolvimento!\n\nEm breve você poderá conversar com nossa IA especializada em saúde feminina.');
    } else {
      // Redirecionar para a página do fórum com âncora
      window.location.href = 'forum.html#' + type.toLowerCase().replace(' ', '-');
    }
  }, 200);
}

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===================================
// CONTADOR ANIMADO
// ===================================
function animateCounter() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + (counter.getAttribute('data-count') === '100' ? '%' : '+');
      }
    };
    
    updateCounter();
  });
}

// ===================================
// CRIAR ESTRELAS FLUTUANTES
// ===================================
function createFloatingStar() {
  const star = document.createElement('div');
  star.className = 'floating-star';
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.animationDuration = (12 + Math.random() * 6) + 's';
  star.style.animationDelay = Math.random() * 3 + 's';
  document.body.appendChild(star);
  
  setTimeout(() => {
    star.remove();
  }, 20000);
}

// ===================================
// INICIALIZAR ANIMAÇÕES
// ===================================
window.addEventListener('load', () => {
  animateCounter();
  
  // Criar estrelas flutuantes periodicamente
  setInterval(createFloatingStar, 4000);
  
  // Estrelas iniciais já estão no HTML
});

// ===================================
// EFEITO TILT DO MOCKUP DO TELEFONE
// ===================================
const phoneMockup = document.getElementById('phoneMockup');
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 768) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
  }
});

function animatePhone() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  
  if (window.innerWidth > 768) {
    phoneMockup.style.transform = `rotateY(${currentX}deg) rotateX(${-currentY}deg)`;
  }
  
  requestAnimationFrame(animatePhone);
}

animatePhone();

// ===================================
// EFEITO PARALLAX
// ===================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.flower-pattern');
  
  parallaxElements.forEach((el, index) => {
    const speed = 0.5 + (index * 0.1);
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===================================
// HOVER INTERATIVO
// ===================================
document.querySelectorAll('.btn, .card').forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.02)';
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = '';
  });
});

// ===================================
// EASTER EGG - CÓDIGO KONAMI
// ===================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateEasterEgg() {
  document.body.style.animation = 'glow 1s ease-in-out 3';
  alert('🌸 Você descobriu o código secreto! Parabéns! 🌸');
  
  // Criar chuva de estrelas
  for (let i = 0; i < 50; i++) {
    setTimeout(() => createFloatingStar(), i * 100);
  }
}

// ===================================
// INTERSECTION OBSERVER PARA ANIMAÇÕES
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = entry.target.dataset.animation;
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.card, .stat').forEach(el => {
  el.dataset.animation = el.style.animation;
  el.style.animation = 'none';
  observer.observe(el);
});