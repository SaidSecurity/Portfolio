const lightBug = document.getElementById('lightBug');
const body = document.body;
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

// Load last mode from localStorage
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark');
    lightBug.classList.add('on');
}

// Toggle Dark/Light Mode
lightBug.addEventListener('click', () => {
    body.classList.toggle('dark');
    lightBug.classList.toggle('on');

    if (body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});

// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

const typedTextSpan = document.querySelector(".typed-text");
const textArray = [
    "I do here what I love.",
    "I hack ethically.",
    "I secure web applications."
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500; // Delay between phrases
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


