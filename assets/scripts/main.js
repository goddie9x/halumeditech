var currentNumberSelected = 0;

$(document).ready(function() {


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
    currentNumberSelected++;
    $('.modal.cart').show();
    $('.popup-add-cart').show();
    $('.cart-popup-quantity').html(`<i class="fa fa-shopping-cart" aria-hidden="true"></i> Giỏ hàng của bạn (${currentNumberSelected} sản phẩm) <i class="fa fa-caret-right" aria-hidden="true"></i>`);
    let product = this.closest('.card.item');
    let productName = product.querySelector('.card-title h3').innerHTML;
    let imgURL = product.querySelector('img').getAttribute('src');
    let achol = product.querySelector('a.card-title').getAttribute('href')
    let cost = product.querySelector('.cost').innerHTML;
    let productsPopup = $('.item-product');

    productsPopup.find('.item-recent').remove();
    if (currentNumberSelected == 1) {
        $('.header-cart').html(`
        <div class="item-product product-${currentNumberSelected} clearfix">
                                <a href="${achol}" class="item-image left">
                                    <img class="" src="${imgURL}" alt="" class="card-img-top">
                                </a>
                                <div class="item-info left">
                                    <a href="#id1" class="item-name">${productName}</a>
                                    <div class="item-remove" >
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="price left">${cost}</div>
                                <div class="number-products left">
                                    <button class="add-number">-</button>
                                    <input type="text" class="choice-number">
                                    <button class="sub-number">+</button>
                                </div>
              </div>
        `);
    } else {
        $('.header-cart').append(`
        <div class="item-product product-${currentNumberSelected} clearfix">
                                <a href="${achol}" class="item-image left">
                                    <img class="" src="${imgURL}" alt="" class="card-img-top">
                                </a>
                                <div class="item-info left">
                                    <a href="#id1" class="item-name">${productName}</a>
                                    <div class="item-remove" >
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="price left">${cost}</div>
                                <div class="number-products left">
                                    <button class="add-number">-</button>
                                    <input type="text" class="choice-number">
                                    <button class="sub-number">+</button>
                                </div>
              </div>
        `);
    }

    $('.content-cart-body').append(`
    <div class="item-product product-${currentNumberSelected} clearfix">
                            <a href="${achol}" class="item-image left">
                                <img class="" src="${imgURL}" alt="" class="card-img-top">
                            </a>
                            <div class="item-info left">
                                <a href="#id1" class="item-name">${productName}</a>
                                <div class="item-remove" >
                                    <i class="fa fa-times" aria-hidden="true"></i>Xoá sản phẩm
                                </div>
                                <div class="item-recent"><i class="fa fa-check" aria-hidden="true">Sản phẩm vừa thêm</i></div>
                            </div>
                            <div class="price left">${cost}</div>
                            <div class="number-products left">
                                <button class="add-number">-</button>
                                <input type="text" class="choice-number">
                                <button class="sub-number">+</button>
                            </div>
                            <div class="price price-total left">1.250.000<u>đ</u></div>
          </div>
    `);
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

$('.cart-footer-2 .left').unbind().click(function() {
    $('.modal.cart').hide();
    $('.popup-add-cart').hide();
});

$('.content-cart-popup').delegate('.item-remove', 'click', function() {
    this.closest('.item-product').remove();
    currentNumberSelected--;
});
$('.header-cart').delegate('.item-remove', 'click', function() {
    this.closest('.item-product').remove();
    currentNumberSelected--;
    if (currentNumberSelected == 0) {
        $('.header-cart').html('Hiện không có sản phẩm nào');
    }
});
$('.modal-overlay').unbind().click(function() {
    $('.modal.cart').hide();
    $('.popup-add-cart').hide();
});
$('.fa-close').unbind().click(function() {
    $('.modal.cart').hide();
});