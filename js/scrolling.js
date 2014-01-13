jQuery(document).ready(function ($) {
    $(window).stellar();
    var links = $('.navigation').find('li');
    slide = $('.slide');
    arr = $('.arr');
    mywindow = $(window);
    htmlbody = $('html,body');

    slide.waypoint(function (event, direction) {
        dataslide = $(this).attr('data-slide');
        if (event === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        } else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
    }, { offset: 250 });

    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000);
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    arr.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    $.stellar({
        horizontalScrolling: false,
        responsive :true
    });
});