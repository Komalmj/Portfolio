// script.js

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    // You can add your form submission logic here
});

// Animations
const animatedElements = document.querySelectorAll('.animate');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

animatedElements.forEach(element => {
    observer.observe(element);
});

// Interactivity
const toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
});