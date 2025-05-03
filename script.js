
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Check for saved theme preference or use preferred color scheme
  let theme = localStorage.getItem('theme') || 'dark';
  if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }
  
  // Apply theme
  document.documentElement.classList.toggle('dark', theme === 'dark');
  updateThemeIcon();

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const mobileMenuToggle = document.getElementById('mobile-nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.querySelector('.header');
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  // Scroll animation elements
  const fadeElements = document.querySelectorAll('.section-title, .section-subtitle, .about-container, .projects-grid, .skills-grid, .experience-timeline, .contact-grid');
  const progressBars = document.querySelectorAll('.skill-progress');
  
  function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
  }
  
  function updateThemeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon.sun').forEach(icon => {
      icon.style.display = isDark ? 'block' : 'none';
    });
    document.querySelectorAll('.theme-icon.moon').forEach(icon => {
      icon.style.display = isDark ? 'none' : 'block';
    });
  }
  
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Update hamburger icon
    const lines = mobileMenuToggle.querySelectorAll('.hamburger-line');
    if (mobileMenu.classList.contains('active')) {
      lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      lines[0].style.transform = 'none';
      lines[1].style.opacity = '1';
      lines[2].style.transform = 'none';
    }
  }
  
  // Handle scroll events
  function handleScroll() {
    const scrollY = window.scrollY;
    
    // Header shadow on scroll
    if (scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Show/hide scroll-to-top button
    if (scrollY > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.pointerEvents = 'auto';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.pointerEvents = 'none';
    }
    
    // Animate elements when scrolled into view
    fadeElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('fade-in', 'visible');
      }
    });
    
    // Animate progress bars
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        const level = bar.getAttribute('data-level');
        bar.style.width = `${level}%`;
      }
    });
  }
  
  // Show toast notification
  function showToast(message) {
    const toastText = document.getElementById('toast-text');
    toastText.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3000);
  }
  
  // Event listeners
  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  
  // Close mobile menu when clicking menu items
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });
  
  // Scroll to top button
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Contact form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Simulate form submission
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      contactForm.reset();
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
      showToast('Message sent successfully!');
    }, 1500);
  });
  
  // Initialize on page load
  handleScroll();
  window.addEventListener('scroll', handleScroll);
  
  // MongoDB connection example - normally this would be done on a server
  // For demonstration, this shows how you might structure code that would connect to MongoDB
  // Note: This is just for demonstration, not actually functional in browser
  const connectToMongoDB = () => {
    console.log("This function would connect to MongoDB in a real backend environment");
    // In a real project, you'd use Node.js with something like:
    // const { MongoClient } = require('mongodb');
    // const uri = "mongodb://localhost:27017/portfolioDB";
    // const client = new MongoClient(uri);
    // client.connect()...
  };
  
  // Just logging that we would connect to MongoDB in a real implementation
  console.log("Portfolio website loaded. In a full implementation, backend would connect to MongoDB.");
});
