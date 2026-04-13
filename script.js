// ================= MOBILE MENU TOGGLE =================
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.mobile-menu-overlay');

    // Toggle active classes
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Show/hide overlay
    if (navLinks.classList.contains('active')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

// Initialize mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    // Close menu when clicking on a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            const overlay = document.querySelector('.mobile-menu-overlay');

            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            overlay.style.display = 'none';
        });
    });
});

// ================= NAVBAR SMOOTH SCROLL + ACTIVE TAB =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// Smooth scroll (already added but making it cleaner)
navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// Active tab while scrolling (PREMIUM FEATURE 🔥)
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
