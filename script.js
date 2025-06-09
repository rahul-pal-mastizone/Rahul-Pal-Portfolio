document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a navigation link
    const navItems = document.querySelectorAll('.navbar-links a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // This would typically send data to a server
            // For demo purposes, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Scroll event for navbar styling
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-item, .education-item, .certification-item, .info-item, .contact-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run once on page load
    setTimeout(animateOnScroll, 500);
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Add CSS class for animation
const addAnimationCSS = () => {
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item, .project-card, .skill-item, .education-item, .certification-item, .info-item, .contact-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .timeline-item.animate, .project-card.animate, .skill-item.animate, .education-item.animate, .certification-item.animate, .info-item.animate, .contact-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .skill-item:nth-child(2n), .certification-item:nth-child(2n), .info-item:nth-child(2n) {
            transition-delay: 0.1s;
        }
        
        .skill-item:nth-child(3n), .certification-item:nth-child(3n), .info-item:nth-child(3n) {
            transition-delay: 0.2s;
        }
        
        .navbar.scrolled {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            color:var(--primary-color);
            background-color: rgba(255, 255, 255, 0.98);
        }
        
        .hamburger.active .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active .line2 {
            opacity: 0;
        }
        
        .hamburger.active .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    `;
    document.head.appendChild(style);
};

// Call the function to add animation CSS
addAnimationCSS();



// It is justfor the form handling purpose in which the user will be getting Thank You Message
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contactForm");
//   const thankYouMessage = document.getElementById("thankYouMessage");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default Netlify redirect

//     const formData = new FormData(form);

//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(formData).toString()
//     })
//     .then(() => {
//       form.style.display = "none";
//       thankYouMessage.style.display = "block";
//     })
//     .catch((error) => {
//       alert("There was a problem submitting the form: " + error);
//     });
//   });
// });
