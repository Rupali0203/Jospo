// Toggle Mobile Menu
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Send enquiry via WhatsApp + Email
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = this.querySelector('[name="name"]').value.trim();
        const email = this.querySelector('[name="email"]').value.trim();
        const phone = this.querySelector('[name="phone"]').value.trim();
        const message = this.querySelector('[name="message"]').value.trim();

        if (!name || !email) {
            alert('Please enter your name and email address.');
            return;
        }

        // Proper template string (FIXED)
        const enquiryText = `Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

        // Email link (FIXED)
        const mailto = `mailto:rebelbit326@gmail.com?subject=${encodeURIComponent(
            'Jospo Enquiry from ' + name
        )}&body=${encodeURIComponent(enquiryText)}`;

        // WhatsApp link (FIXED)
        const whatsapp = `https://wa.me/916898047716?text=${encodeURIComponent(enquiryText)}`;

        // Open WhatsApp
        window.open(whatsapp, '_blank');

        // Optional: also trigger email
        setTimeout(() => {
            window.location.href = mailto;
        }, 500);
    });
}

console.log("Jospo Website Loaded - SEO Optimized for Bhiwadi/Jaipur");