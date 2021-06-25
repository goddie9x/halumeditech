$(function(){var html=$('html, body'),navContainer=$('.nav-container'),navToggle=$('.nav-toggle'),navDropdownToggle=$('.has-dropdown');navToggle.on('click',function(e){var $this=$(this);e.preventDefault();$this.toggleClass('is-active');navContainer.toggleClass('is-visible');html.toggleClass('nav-open')});navDropdownToggle.on('click',function(){var $this=$(this);$this.toggleClass('is-active').children('ul').toggleClass('is-visible')});navDropdownToggle.on('click','*',function(e){e.stopPropagation()})})
if (window.innerWidth > 768) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('fixed');
        } else {
            $('.sticky-header').removeClass('fixed');
        }
    });
}
if (window.innerWidth < 480) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('clearfix');
        } else {
            $('.sticky-header').removeClass('clearfix');
        }
    });
}
$(document).ready(function() {
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >=200) {
            $('#go_top').show();
        }
        else {
            $('#go_top').hide();
        }
    });
    AOS.init({
        duration: 2000,
        easing: 'ease-in-out-sine'
    })
    /* slick slider */
    if($('#step_register_slider').length){
        $('#step_register_slider').slick({
            dots: false,
            arrows:false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            draggable: false,
            responsive: [
                    {
                      breakpoint: 480,
                      settings: {
                      }
                    }
                  ]
        });
        $('[data-toggle="register-steps"]').on('click',function(){
            var slideIndex = parseInt($(this).index());
            $('#step_register_slider').slick('slickGoTo',slideIndex);
            $(this).addClass('active').siblings().removeClass('active');
        });
    }
});
