// This file contains the JavaScript code for the education webpage.
// It includes functions for interactivity and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        welcomeMessage.textContent = 'Welcome to the Education Webpage!';
    }

    const toggleButton = document.getElementById('toggle-content');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const content = document.getElementById('dynamic-content');
            if (content) {
                content.classList.toggle('hidden');
                toggleButton.textContent = content.classList.contains('hidden') ? 'Show Content' : 'Hide Content';
            }
        });
    }
});