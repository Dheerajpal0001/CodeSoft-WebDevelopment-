// Typing effect
const typingText = ["Coder", "Programmer", "Developer", "Designer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === typingText.length) {
        count = 0;
    }
    currentText = typingText[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); // Delay before retyping
    } else {
        setTimeout(type, 150);
    }
})();

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Skills image change
const skills = document.querySelectorAll('.skill');
const skillImage = document.getElementById('skill-image');

skills.forEach(skill => {
    skill.addEventListener('click', (e) => {
        const skillName = e.target.dataset.skill.toLowerCase();
        skillImage.src = `images/${skillName}.png`;
        skillImage.alt = skillName;
    });
});

