// ================= NAVBAR SMOOTH SCROLL + ACTIVE TAB =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// Smooth scroll (already added but making it cleaner)
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
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