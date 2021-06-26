$(document).ready(function() {
    $('.menu_bar--mobile').unbind().click(function(e) {
        $('.nav-scale')[0].classList.toggle('active');
    });
    $('i.khoa').unbind().click(function(e) {
        $('.nav_link--slide.khoa').toggle();
    });
    $('i.san-pham').unbind().click(function(e) {
        $('.nav_link--slide.san-pham').toggle();
    });
    $('.add-cart').unbind().click(function(e) {
        $('.modal.cart').show();
        $('.popup-add-cart').show();
    });
    $('.modal-overlay').unbind().click(function() {
        $('.modal.cart').hide();
    })
    $('.fa-close').unbind().click(function() {
        $('.modal.cart').hide();

    })
    $('.banner .slider_main').owlCarousel({
        items: 1,
        rewind: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: false,
        dotsEach: false,
        loop: true,
        nav: true,
        navText: [`<img class='btn-slide-left' src='./assets/medias/icon_left.png'>`, `<img class='btn-slide-right' src='./assets/medias/icon_right.png'>`],
        transitionStyle: 'backSlide',
        center: false,
    });
    $('.slider_faculty').owlCarousel({
        items: 6,
        responsive: {
            1200: {
                item: 6,
            },
            992: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 3,
            },
            0: {
                items: 3,
            }
        },
        rewind: true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        dots: false,
        dotsEach: false,
        loop: false,
        nav: true,
        navText: [`<img class='btn-slide-left' src='./assets/medias/icon_left.png'>`, `<img class='btn-slide-right' src='./assets/medias/icon_right.png'>`],
        margin: 10,
        transitionStyle: 'backSlide',
        center: false,
    });
    $('.service_slide').owlCarousel({
        items: 4,
        responsive: {
            1200: {
                item: 4,
            },
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },
            480: {
                items: 1,
            },
            0: {
                items: 1,
            }
        },
        rewind: true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        dots: false,
        dotsEach: false,
        loop: false,
        nav: true,
        navText: [`<img class='btn-slide-left' src='./assets/medias/icon_left.png'>`, `<img class='btn-slide-right' src='./assets/medias/icon_right.png'>`],
        margin: 10,
        transitionStyle: 'backSlide',
        center: false,
    });
    $('.comment_slide').owlCarousel({
        items: 3,
        responsive: {
            1200: {
                item: 3,
            },
            992: {
                items: 2,
            },
            768: {
                items: 2,
            },
            480: {
                items: 1,
            },
            0: {
                items: 1,
            }
        },
        rewind: true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        dots: false,
        dotsEach: false,
        loop: false,
        nav: true,
        navText: [`<img class='btn-slide-left' src='./assets/medias/icon_left.png'>`, `<img class='btn-slide-right' src='./assets/medias/icon_right.png'>`],
        margin: 10,
        transitionStyle: 'backSlide',
        center: false,
    });
    $('.step_slide').owlCarousel({
        items: 4,
        responsive: {
            1200: {
                item: 4,
            },
            992: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            0: {
                items: 2,
            }
        },
        rewind: true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        dots: false,
        dotsEach: false,
        loop: false,
        nav: true,
        navText: [`<img class='btn-slide-left' src='./assets/medias/icon_left.png'>`, `<img class='btn-slide-right' src='./assets/medias/icon_right.png'>`],
        margin: 10,
        transitionStyle: 'backSlide',
        center: false,
    });
    $('.product_slide').owlCarousel({
        items: 5,
        responsive: {
            993: {
                item: 5,
            },
            992: {
                items: 3,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            0: {
                items: 2,
            }
        },
        rewind: true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        dots: false,
        dotsEach: false,
        loop: false,
        nav: true,
        navText: [`<img class='btn-slide-left' src='./assets/medias/icon_left.png'>`, `<img class='btn-slide-right' src='./assets/medias/icon_right.png'>`],
        margin: 10,
        transitionStyle: 'backSlide',
        center: false,
    });
    $('.news_slide').owlCarousel({
        items: 4,
        responsive: {
            1200: {
                item: 4,
            },
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },
            480: {
                items: 1,
            },
            0: {
                items: 1,
            }
        },
        rewind: true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        dots: false,
        dotsEach: false,
        loop: false,
        nav: true,
        navText: [`<img class='btn-slide-left' src='./assets/medias/icon_left.png'>`, `<img class='btn-slide-right' src='./assets/medias/icon_right.png'>`],
        margin: 10,
        transitionStyle: 'backSlide',
        center: false,
    });
});
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            $('.main-nav').addClass('fixed-top');
            $('.menu_bar--mobile').addClass('fixed-top');

            // add padding top to show content behind navbar
        } else {
            $('.main-nav').removeClass('fixed-top');
            $('.menu_bar--mobile').removeClass('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});