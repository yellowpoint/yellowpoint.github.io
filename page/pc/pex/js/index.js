

//设置第一屏高度
function setHeaderHeight() {

    $('.header').css('height',$(window).height()+'px');
    $(window).resize(function () {
        $('.header').css('height',$(window).height()+'px');
    });

}


//首页顶部菜单滑块移动

function clickSliderMove() {
    $('.header .h-top .h-menu .slider').css(
        'left', $('.header .h-top .h-menu a:first-child').offset().left + 'px'
    );
    $(window).resize(function () {
        $('.header .h-top .h-menu .slider').css(
            'left', $('.header .h-top .h-menu a:first-child').offset().left + 'px'
        );
    });


    $('.header .h-top .h-menu a').mouseenter(function () {
        $('.header .h-top .h-menu .slider').animate({
            'width': $(this).css('width') ,
            'left': $(this).offset().left + 'px'
        },'fast');
    });

    $('.header .h-top .h-menu').mouseleave(function () {
        $('.header .h-top .h-menu .slider').finish();
        $('.header .h-top .h-menu .slider').animate({
            'width': $('.header .h-top .h-menu a.active').css('width'),
            'left': $('.header .h-top .h-menu a.active').offset().left + 'px'
        },'fast');
    });
}

$(document).ready(function () {
    // setHeaderHeight();         //设置第一屏高度
    clickSliderMove();         //首页顶部菜单滑块移动

});

