// ===== Navbar Active Link Highlight =====
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ===== School Image Slideshow =====
const schoolImage = document.getElementById('school-image');
const images = [
    'schol.jpg',
    'lib.jpg',
    'libr.jpg',
    'kool4.jpg',
    'lab.jpg'
];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    schoolImage.src = images[currentIndex];
}
setInterval(changeImage, 3000);

// ===== Animated Stats =====
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function () {
        current += increment;
        obj.textContent = current + "+";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function checkStatsVisibility() {
    const statsSection = document.querySelector('.school-highlights');
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        animateValue("students-count", 0, 1000, 2000);
        animateValue("experience-count", 0, 30, 2000);
        animateValue("alumni-count", 0, 5000, 2000);
        window.removeEventListener('scroll', checkStatsVisibility);
    }
}
window.addEventListener('scroll', checkStatsVisibility);

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});