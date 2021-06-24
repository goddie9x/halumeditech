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
/* const $ = document.querySelector.bind(document); */
const $$ = document.querySelectorAll.bind(document);
/* 
handleSlide('.mySlides', '.dot-item');
handleSlide('.biet-thu-slide', '.dot-none', '.arrow-left', '.arrow-right', 3, 3000);
 */
var windowWidth = screen.width;
screen.orientation.onchange = function(e) {
    console.log(screen.width);
}
console.log(windowWidth);
handleSlide('.banner .carousel-item', '.dot-none', '.banner .left', '.banner .right', 1, 3000);

function markActive(elements, numberActive) {
    let Elements = $$(elements);
}

function handleSlide(mySlides, myDots, prev, next, timeNext = 3000) {

    let slideIndex = 0;
    let slides = $$(mySlides);
    let dots = $$(myDots);
    let length = slides.length;
    let numberActive = 0;
    slides.forEach(slide => {

    })
    if (prev && next) {
        $(prev).onclick = function(e) {
            plusSlides(-1);
        }
        $(next).onclick = function(e) {
            plusSlides(+1);
        }
    }
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    dots.forEach((dot, index) => {
        dot.onclick = function(e) {
            showSlides(index)
        }
    });

    function showSlides(n) {
        if (n >= length) { slideIndex = 0 } else if (n < 0) { slideIndex = length - 1 } else { slideIndex = n }
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (dots[index]) {
                dots[index].classList.remove('active');
            }
        })
        for (let i = 0; i < numberActive; i++) {
            let tempIndex = slideIndex + i;
            if (tempIndex >= length) {
                tempIndex = tempIndex - length;
            }
            slides[tempIndex].classList.add('active');
            if (dots[tempIndex]) {
                dots[tempIndex].classList.add('active');
            }
        }
    }
    setInterval(function() {
        tempIndex = slideIndex + numberActive;
        if (tempIndex >= length) {
            tempIndex = tempIndex - length;
        }
        showSlides(tempIndex)
    }, timeNext);
}