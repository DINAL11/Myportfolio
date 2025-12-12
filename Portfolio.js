// Smooth Scrolling with Tech-inspired Click Feedback
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        // Simulate a clicking sound and glowing effect
        playClickSound();
        triggerClickAnimation(e.clientX, e.clientY);

        // Add fade-in animation before scrolling
        target.classList.add('fade-in');
        setTimeout(() => {
            target.classList.remove('fade-in');
            target.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    });
});


document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

// Form Submission with Techy Confirmation and Animation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Play a tech confirmation sound
    playClickSound();

    // Show confirmation message with animation
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('confirmation-message');
    confirmationMessage.innerHTML = 'Thank you for reaching out! I will get back to you soon.';
    document.body.appendChild(confirmationMessage);

    // Add fade-out effect to the message
    setTimeout(() => {
        confirmationMessage.classList.add('fade-out');
        setTimeout(() => {
            confirmationMessage.remove();
        }, 1000);
    }, 2000);

    this.reset();
});

// Play a futuristic click sound effect
function playClickSound() {
    const clickSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
    clickSound.play();
}

// Trigger a click animation with ripple effect
function triggerClickAnimation(x, y) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);
    ripple.style.left = `${x - 25}px`;
    ripple.style.top = `${y - 25}px`;

    // Remove the ripple after animation
    setTimeout(() => ripple.remove(), 500);
}

document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("mousemove", function (e) {
        let { offsetX, offsetY } = e;
        let { offsetWidth, offsetHeight } = this;
        let x = (offsetX / offsetWidth - 0.5) * 10;
        let y = (offsetY / offsetHeight - 0.5) * 10;

        this.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

    el.addEventListener("mouseleave", function () {
        this.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".animated-section");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});