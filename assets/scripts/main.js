document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.querySelector('.main-nav').classList.add('fixed-top');
            // add padding top to show content behind navbar
        } else {
            document.querySelector('.main-nav').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});