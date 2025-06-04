document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('menu');
    hamburgerBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});