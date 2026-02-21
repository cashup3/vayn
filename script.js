// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const menuLinks = document.querySelectorAll('.menu-overlay a');

menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Email Signup Modal
const emailSignupBtn = document.getElementById('emailSignupBtn');
const emailModal = document.getElementById('emailModal');
const closeModal = document.getElementById('closeModal');
const emailForm = document.getElementById('emailForm');
const successMessage = document.getElementById('successMessage');
const userEmailSpan = document.getElementById('userEmail');

// Open modal
emailSignupBtn.addEventListener('click', () => {
    emailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close modal
closeModal.addEventListener('click', () => {
    emailModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close modal when clicking outside
emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) {
        emailModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && emailModal.classList.contains('active')) {
        emailModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Form submission
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    
    // Validate form
    if (!email || !country) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate form submission
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { email, country });
    
    // Show success message
    userEmailSpan.textContent = email;
    emailForm.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Reset form after 5 seconds (optional)
    setTimeout(() => {
        emailForm.reset();
        emailForm.style.display = 'block';
        successMessage.style.display = 'none';
        emailModal.classList.remove('active');
        document.body.style.overflow = '';
    }, 5000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.background = 'transparent';
    }
    
    lastScroll = currentScroll;
});

// Video background handling - ensure full video visible on all screen sizes
const heroVideo = document.querySelector('.hero-background video');
if (heroVideo) {
    heroVideo.addEventListener('loadeddata', () => {
        heroVideo.play().catch(err => {
            console.log('Video autoplay prevented:', err);
        });
    });
    
    function fitVideoToViewport() {
        heroVideo.style.objectFit = 'contain';
        heroVideo.style.objectPosition = 'center center';
    }
    
    heroVideo.addEventListener('loadedmetadata', fitVideoToViewport);
    fitVideoToViewport();
    window.addEventListener('resize', fitVideoToViewport);
    window.addEventListener('orientationchange', () => setTimeout(fitVideoToViewport, 100));
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.hero-title, .listen-button').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});





