// JavaScript to handle navigation and content switching
document.addEventListener('DOMContentLoaded', function () {
    const navigationButtons = document.querySelectorAll('.about-me-navigation div');
    const sections = document.querySelectorAll('.about-me-section');

    navigationButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            // Show the selected section
            sections[index].classList.add('active');
        });
    });
});
