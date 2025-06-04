document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('menu');
    hamburgerBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    // SlideShow
    let slideIndex = 0;
    showSlides();
    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slides.length > 0) {
            slides[slideIndex-1].style.display = "block";
        }
        setTimeout(showSlides, 3000);
    }
});