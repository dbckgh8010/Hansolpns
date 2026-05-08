$(function() {
    const $menu = $('.nav__item');
    const $header = $('.header');   

    $menu.mouseover(function(){
        if ($(window).width() > 1280) {
            const subHeight = $(this).find('.nav__sub-menu').outerHeight();
            $header.stop().animate({height: 100 + subHeight + 'px'}, 300);
            $(this).find('.nav__sub-menu').css('display', 'block');
            $header.addClass("on");
        }
    })
    $header.mouseout(function(){
        if ($(window).width() > 1280) {
            $header.stop().animate({height: 100 + 'px'}, 300);
            $(this).find('.nav__sub-menu').css('display', 'none');
            $header.removeClass("on");
        }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 0){
        $('.header').addClass('fixed')
    } else {
        $('.header').removeClass('fixed')
    };
});

$('.header-mo__nav').ready(function() {
    $('.header-mo__link, .header-mo__sub-link').on('click', function(e) {
        e.stopPropagation();

        const $this = $(this);
        const $target = $this.next();
        const $group = $this.hasClass('header-mo__link') ? $('.header-mo__link') : $('.header-mo__sub-link');

        if ($this.hasClass('on')) {
            $this.removeClass('on');
            $target.stop().slideUp(200);
        } else {
            $group.removeClass('on').next().stop().slideUp(200);
            $this.addClass('on');
            $target.stop().slideDown(200);
        }
    });
});

$(function() {
    $(".mo__btn").on('click', function(){
        if ('block' == $(".header-mo").css('display')){
            $(this).removeClass('on')
            $(".header-mo").removeClass('on').hide()
            $('html').css({'overflow-y' : '', 'margin-right' : '0', 'width' : '100%'});
        } else {
            $('html').css({'overflow-y' : 'hidden', 'width' : 'auto'});
            $(this).addClass('on')
            $(".header-mo").addClass('on').show()
        }
    })
});
