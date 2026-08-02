const typingText = document.getElementById("typing-text");

const roles = [
    "Frontend Developer",
    "Technical Support Engineer",
    "Web Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentRole.substring(0, characterIndex);

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && characterIndex === currentRole.length) {
        typingSpeed = 1500;
        isDeleting = true;
    }

    if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400;
    }

    setTimeout(typeRole, typingSpeed);
}

typeRole();