// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Set active navigation link
  const currentLocation = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Click to call functionality
function setupClickToCall() {
  const phoneNumber = '+91-9353172127';
  const phoneElements = document.querySelectorAll('.phone-link');
  
  phoneElements.forEach(element => {
    element.addEventListener('click', (e) => {
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        e.preventDefault();
      }
    });
  });
}

setupClickToCall();

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .blog-card, .why-choose-list li').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// WhatsApp Floating Button
function createWhatsAppButton() {
  const whatsappButton = document.createElement('a');
  whatsappButton.href = 'https://wa.me/919353172127';
  whatsappButton.className = 'whatsapp-float';
  whatsappButton.target = '_blank';
  whatsappButton.rel = 'noopener noreferrer';
  whatsappButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32"><path d="M20.52 3.48C18.25 1.32 15.35 0 12.12 0 5.5 0 0.16 5.34 0.16 11.96c0 2.18.56 4.34 1.64 6.24L0 24l6.51-1.71c1.82.98 3.98 1.49 6.09 1.49 6.62 0 11.96-5.34 11.96-11.96 0-3.23-1.32-6.25-3.48-8.54zm-8.4 18.35c-1.95 0-3.87-.52-5.56-1.49l-.4-.23-4.13 1.08 1.1-4.04-.26-.41c-1.09-1.73-1.67-3.75-1.67-5.8 0-5.5 4.47-9.97 9.97-9.97 2.67 0 5.18 1.09 7.07 3.08 1.89 1.99 2.93 4.64 2.93 7.46 0 5.5-4.47 9.98-9.97 9.98zm5.42-7.49c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.41-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.025-.52-.075-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35z"/></svg>';
  whatsappButton.title = 'Chat with us on WhatsApp';
  
  const tooltip = document.createElement('span');
  tooltip.className = 'whatsapp-tooltip';
  tooltip.textContent = 'Chat with us';
  whatsappButton.appendChild(tooltip);
  
  document.body.appendChild(whatsappButton);
}

// Initialize WhatsApp button when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createWhatsAppButton);
} else {
  createWhatsAppButton();
}
