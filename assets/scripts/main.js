var currentNumberSelected = 0;
var sumPrice = 0;
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            $('.main-nav').addClass('fixed-top');
            $('.logo').addClass('fixed-top');

            $('.header').append(`
                <div class="scroll-to-top">
                <i class="fa fa-level-up"></i>
                </div>
            `);
            // add padding top to show content behind navbar
        } else {
            $('.main-nav').removeClass('fixed-top');
            $('.logo').removeClass('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            $('.scroll-to-top').remove();
        }
    });
});
activeEvent('.scroll-to-top', function(e) {
    $(window).scrollTop({ top: 0, behavior: 'smooth' });
}, '.header');
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
    let zoomImage = $('.zoom-img');
    if (zoomImage[0]) {

        zoomImage.ezPlus({
            scrollZoom: true,
            zoomWindowWidth: 400,
            zoomWindowHeight: 500,
            minZoomLevel: 0.1,
            responsive: true,
            gallery: 'gall',
            imageCrossfade: true,
            cursor: 'pointer',
            galleryActiveClass: 'active'
        });
        zoomImage.bind('click', function(e) {
            var ez = $('.zoom-img').data('ezPlus');
            $.fancyboxPlus(ez.getGalleryList());
            return false;
        });
    }

});
activeEvent('.menu_bar--mobile', '.nav-scale');
activeEvent('.fa-angle-down', function(e) {
    e.preventDefault();
    $(e.target).parent().next().toggleClass('active');
});
activeEvent('.add-cart', function(e) {
    let product = e.target.closest('.card.item');
    let productName = product.querySelector('.card-title h3').innerHTML;
    let imgURL = product.querySelector('img').getAttribute('src');
    let achol = product.querySelector('a.card-title').getAttribute('href');
    let cost = product.querySelector('.cost').innerHTML;
    let productsPopup = $('.item-product');
    let headerCart = $('.header-cart');
    let topCartContent = `
        <div class="item-product product-${currentNumberSelected} clearfix">
            <a href="${achol}" class="item-image left">
                <img class="" src="${imgURL}" alt="" class="card-img-top">
            </a>
            <div class="item-info">
                <a href="${achol}" class="item-name left">${productName}</a>
                <div class="item-remove left">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <div class="price">${cost}</div>
                     <div class="number-products">
                        <button class="add-number">-</button>
                        <input type="text" class="choice-number">
                        <button class="sub-number">+</button>
                    </div>
                </div>
            </div>
    `;

    currentNumberSelected++;
    $('.header-cart-count').html(currentNumberSelected);
    $('.modal.cart').show();
    $('.popup-add-cart').show();
    $('.cart-popup-quantity').html(`<i class="fa fa-shopping-cart" aria-hidden="true"></i> Gi??? h??ng c???a b???n (${currentNumberSelected} s???n ph???m) <i class="fa fa-caret-right" aria-hidden="true"></i>`);

    productsPopup.find('.item-recent').remove();

    sumPrice += +cost;
    if (currentNumberSelected == 1) {
        headerCart.html(
            `<div class="header-cart-content">${topCartContent}</div>
        <div class="header-cart-footer">
            <div class="total-price">
                <div class="left">T???ng ti???n t???m t??nh</div>
                <div class="right price">${sumPrice}<u>??</u></div>
            </div>
            <div class="do-price btn">Ti???n h??nh thanh to??n</div>
        </div>
    `);
    } else {
        $('.header-cart-content').append(topCartContent);
    }

    $('.content-cart-body').append(`
    <div class="item-product product-${currentNumberSelected} clearfix">
                            <a href="${achol}" class="item-image left">
                                <img class="" src="${imgURL}" alt="" class="card-img-top">
                            </a>
                            <div class="item-info left">
                                <a href="#id1" class="item-name">${productName}</a>
                                <div class="item-remove" >
                                    <i class="fa fa-times" aria-hidden="true"></i>Xo?? s???n ph???m
                                </div>
                                <div class="item-recent"><i class="fa fa-check" aria-hidden="true">S???n ph???m v???a th??m</i></div>
                            </div>
                            <div class="price left">${cost}</div>
                            <div class="number-products left">
                                <button class="add-number">-</button>
                                <input type="text" class="choice-number">
                                <button class="sub-number">+</button>
                            </div>
                            <div class="price price-total left">1.250.000<u>??</u></div>
          </div>
    `);
});
activeEvent('.detail-body .btn', function(e) {
    let product = e.target.closest('.detail-product');
    let productName = product.querySelector('.card-title h3').innerHTML;
    let imgURL = product.querySelector('img').getAttribute('src');
    let achol = product.querySelector('a.card-title').getAttribute('href');
    let cost = product.querySelector('.cost').innerHTML;
    let productsPopup = $('.item-product');
    let headerCart = $('.header-cart');
    let topCartContent = `
        <div class="item-product product-${currentNumberSelected} clearfix">
            <a href="${achol}" class="item-image left">
                <img class="" src="${imgURL}" alt="" class="card-img-top">
            </a>
            <div class="item-info">
                <a href="${achol}" class="item-name left">${productName}</a>
                <div class="item-remove left">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <div class="price">${cost}</div>
                     <div class="number-products">
                        <button class="add-number">-</button>
                        <input type="text" class="choice-number">
                        <button class="sub-number">+</button>
                    </div>
                </div>
            </div>
    `;

    currentNumberSelected++;
    $('.header-cart-count').html(currentNumberSelected);
    $('.modal.cart').show();
    $('.popup-add-cart').show();
    $('.cart-popup-quantity').html(`<i class="fa fa-shopping-cart" aria-hidden="true"></i> Gi??? h??ng c???a b???n (${currentNumberSelected} s???n ph???m) <i class="fa fa-caret-right" aria-hidden="true"></i>`);

    productsPopup.find('.item-recent').remove();

    sumPrice += +cost;
    if (currentNumberSelected == 1) {
        headerCart.html(
            `<div class="header-cart-content">${topCartContent}</div>
        <div class="header-cart-footer">
            <div class="total-price">
                <div class="left">T???ng ti???n t???m t??nh</div>
                <div class="right price">${sumPrice}<u>??</u></div>
            </div>
            <div class="do-price btn">Ti???n h??nh thanh to??n</div>
        </div>
    `);
    } else {
        $('.header-cart-content').append(topCartContent);
    }

    $('.content-cart-body').append(`
    <div class="item-product product-${currentNumberSelected} clearfix">
                            <a href="${achol}" class="item-image left">
                                <img class="" src="${imgURL}" alt="" class="card-img-top">
                            </a>
                            <div class="item-info left">
                                <a href="#id1" class="item-name">${productName}</a>
                                <div class="item-remove" >
                                    <i class="fa fa-times" aria-hidden="true"></i>Xo?? s???n ph???m
                                </div>
                                <div class="item-recent"><i class="fa fa-check" aria-hidden="true">S???n ph???m v???a th??m</i></div>
                            </div>
                            <div class="price left">${cost}</div>
                            <div class="number-products left">
                                <button class="add-number">-</button>
                                <input type="text" class="choice-number">
                                <button class="sub-number">+</button>
                            </div>
                            <div class="price price-total left">1.250.000<u>??</u></div>
          </div>
    `);
});
activeEvent('.cart-footer-2 .left', function() {
    $('.modal.cart').hide();
    $('.popup-add-cart').hide();
});
activeEvent('.item-remove', function(e) {
    e.target.closest('.item-product').remove();
    currentNumberSelected--;
    $('.header-cart-count').html(currentNumberSelected);
});
activeEvent('.item-remove', function(e) {
    e.target.closest('.item-product').remove();
    currentNumberSelected--;
    $('.header-cart-count').html(currentNumberSelected);
}, '.content-cart-popup');
activeEvent('.item-remove', function(e) {
    let currentProduct = e.target.closest('.item-product');
    currentProduct.remove();
    currentNumberSelected--;
    if (currentNumberSelected == 0) {
        $('.header-cart').html('Hi???n kh??ng c?? s???n ph???m n??o');
    }
    $('.header-cart-count').html(currentNumberSelected);
}, '.header-cart');
activeEvent('.modal-overlay', function() {
    $('.modal.cart').hide();
    $('.popup-add-cart').hide();
    $('.popup-quickview').hide();
    $('.rate-creating').hide();
});
activeEvent('.fa-close', function() {
    $('.modal.cart').hide();
    $('.popup-add-cart').hide();
    $('.popup-quickview').hide();
}, '.modal.cart');
activeEvent('.fa-close', function() {
    $('.rate-creating').hide();
});
activeEvent('.fa-close', function() {
    $('.rate-creating').hide();
});
activeEvent('.quick-view', function(e) {
    let popupQuickView = $('.popup-quickview');
    let product = e.target.closest('.card.item');
    let productName = product.querySelector('.card-title h3').innerHTML;
    let imgURL = product.querySelector('img').getAttribute('src');
    let achol = product.querySelector('a.card-title').getAttribute('href')
    let cost = product.querySelector('.cost').innerHTML;

    $('.modal.cart').show();
    popupQuickView.html(`<div class="item-product product-${currentNumberSelected} clearfix">
    <div class="fa fa-close"></div>
    <a href="${achol}" class="item-image left">
        <img class="" src="${imgURL}" alt="" class="card-img-top">
    </a>
    <div class="item-info">
        <a href="${achol}" class="item-name">${productName}</a>
        <div class="item-status">
            <span class="item-trademark ">Th????ng hi???u: <span class="price">Ch??a c??</span></span>
            <span class="item-status-still ">T??nh tr???ng:  <span class="price">C??n h??ng</span></span>
        </div>
        <div class="price">${cost}</div>
        <div class="product-desc">
            <div class="item-detail">
            M??y t???o oxy Sysmed M50 Gi???i thi???u s???n ph???m M??y t???o oxy l?? thi???t b??? cung c???p oxy c???n thi???t gi??p qu?? tr??nh h?? h???p c???a b???nh nh??n ???????c t???t h??n. M??y t???o oxy M50 c???a Sysmed ???????c c???i ti???n v???i thi???t k??? nh??? g???n, ti???t ki???m chi ph?? h??n so v???i c??c s???n ph???m truy???n th???ng.   B??? s???n ph???m chu???n M??y t???o oxy Sysmed M50   Ph??? ki???n bao g???m: th??n m??y, b??nh t???o ???m, d??y th???, 2 b??? l???c (b??? l???c th??, b??? l???c ?????u v??o oxy), 2 ???ng n???i b??nh t???o ???m, s??ch HDSD. Ph??? ki???n M??y t???o oxy Sysmed M50 Th??ng s??? k??? thu???t L??u l?????ng oxy: 0.5 - 5 l??t/ph??t Dung t??ch: 5 l??t Ph????ng ph??p ph??n b???: li??n t???c ????? tinh khi???t: 93 +/-3% ??p su???t kh?? quy???n: 500-1060 hPa B??o ?????ng ????? tinh khi???t: oxy th???p 82%   ??p su???t ng?? ra: 0.05 +/-0.005 Mpa ????? ???n: < 45 dB T??nh n??ng b??? sung: ?????u n???i kim lo???i ch???ng ch??y C??ng su???t: 300W ??i???n ??p: 220V / 50Hz K??ch th?????c: 442 x 282 x 725 mm Tr???ng l?????ng: 14 kg
            </div>
            <a href="${achol}" class="item-more">Chi ti???t ></a>
        </div>
        <div class="number-products">
            <button class="add-number">-</button>
            <input type="text" class="choice-number">
            <button class="sub-number">+</button>
        </div>
        <div class="buy btn">Mua h??ng</div>
    </div>
</div>`)
    popupQuickView.show();
});
activeEvent('.footer-widget h4', function(e) {
    let footerWidget = $(e.target).parents('.footer-widget').find('.list-col');
    footerWidget.toggleClass('active');
    $(e.target).toggleClass('sub');
});
activeEvent('.mode-view-column', function(e) {
    $('.mode-view-column').addClass('active');
    $('.mode-view-grid').removeClass('active');

    replaceClass('.card.item', 'col-lg-3 col-md-4 col-sm-6', 'col-12');
    replaceClass('.card-head', '', 'col-4');
});
activeEvent('.filter-mb', function(e) {
    $(e.target).closest('.filter-mb').toggleClass('opened');
    $('.filter').toggleClass('active');
});
activeEvent('.mode-view-grid', function(e) {
    $('.mode-view-grid').addClass('active');
    $('.mode-view-column').removeClass('active');
    replaceClass('.card.item', 'col-12', 'col-lg-3 col-md-4 col-sm-6');
    replaceClass('.card-head', 'col-4', '');
});
activeEvent('.rating-filter-mb', function(e) {
    $('.rate-table-choice').toggleClass('active');
});
activeEvent('.create-rate', function(e) {
    $('.rate-creating').html(

    );
    $('.rate-creating').show();
});
activeEvent('.fa-star', function(e) {
    let currentStar = $(e.target);
    let index = currentStar.index();
    currentStar.parent().find('.fa-star').each((i, element) => {
        if (i <= index) {
            $(element).css('color', '#ffff00');
        } else {
            $(element).css('color', 'rgba(0, 0, 0, 0.1)');
        }
    });
}, '.rate-popup-quality', 'mouseover');
//library activeEvent made by Tam
function activeEvent(elementTriggers, Targets, elementContainer, event = 'click') {
    if (elementContainer) {
        if (typeof(Targets) == 'function') {
            $(elementContainer).delegate(elementTriggers, event, function(e) {
                Targets(e);
            });
        } else {
            $(elementContainer).delegate(elementTriggers, event, function(e) {
                $(Targets).toggleClass('active');
            });
        }
    } else {
        let trigger = $(elementTriggers).unbind();

        if (trigger) {
            if (typeof(Targets) == 'function') {
                trigger.on(event, function(e) {
                    Targets(e);
                });
            } else {
                trigger.on(event, function(e) {
                    $('.nav-scale').toggleClass('active');
                });
            }
        }
    }
}

function replaceClass(element, classNeedReplace, classReplace) {
    let elementTarget = $(element);

    elementTarget.removeClass(classNeedReplace);
    elementTarget.addClass(classReplace);
}

function add3Dots(string, limit, height, lineHeight, fontWeight, replace = '...') {
    let maxLength = limit - 3;

    if (string.length > maxLength) {
        string = string.slice(0, maxLength) + replace;
    }

    return string;
}

$('.filter-card-list .item-name').html(add3Dots('Nhi???t k??? ??i???n t??? h???ng ngo???i Bosotherm Medical', 35));