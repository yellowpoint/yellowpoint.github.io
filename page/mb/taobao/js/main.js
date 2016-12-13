

//页面字体大小随着宽度变化

function changeFontSize() {
    var ww = $(document).width();
    var wws = ww/3.2;

    if(ww < 540){
        $("html").css("font-size",wws + 'px');
    }else{
        $("html").css("font-size",'168.75px');

    }

    $(window).resize(function(){
        var ww = $(document).width();
        var wws = ww/3.2;

        if(ww < 540){
            $("html").css("font-size",wws + 'px');
        }else{
            $("html").css("font-size",'168.75px');

        }
    });

}




//图片轮播
function tupianlunb() {

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,/*循环播放*/
        speed:1000,
        autoplay: 3000,/*每次切换之间的实际间隔 单位毫秒 */
        pagination: '.swiper-pagination',/*设置分页点....*/
        paginationClickable: false,/*点击点 切换到对应的页*/
        autoplayDisableOnInteraction:false

    })
}



//文字轮播
function textlunb() {

    var mySwiper = new Swiper ('.swiper-textlunb', {
        direction: 'vertical',
        autoplay:3000,
        speed:10,
        loop:true,
        paginationClickable: false,
        simulateTouch:false,
        onlyExternal:true

    })
}

//每日好店轮播
function gslunb() {

    var mySwiper = new Swiper ('.swiper-gslunb', {
        loop: true,/*循环播放*/
        speed:1000,
        pagination: '.swiper-pagination',/*设置分页点....*/
        paginationClickable: false,/*点击点 切换到对应的页*/
        autoplayDisableOnInteraction:false

    })
}


//回到顶部
function scrollGoTop() {
    $(document).scroll(function () {
        var dd = $(this).scrollTop();
        if(dd > 130){
            $(".gotop").show();
        }else{
            $(".gotop").hide();
        }
    });
    $(".gotop").click(function () {
        $(document).scrollTop(0);
    });
}


//倒计时
function daojis() {
    var hh = 1;
    var mm = 33;
    var ss = 11;
    function showTime() {
        if(ss <0){
            ss =59;
            mm--;
            if(mm<0 && hh>0){
                mm = 59;
                hh--;
            }
        }else if(hh == 0 && mm == 0 && ss == 0){
            clearInterval(timer);
        }
        if(hh<10){
            hhz = '0'+hh;
        }else{
            hhz = hh
        }
        if(mm<10){
            mmz = '0'+mm;
        }else{
            mmz = mm
        }
        if(ss<10){
            ssz = '0'+ss;
        }else{
            ssz = ss
        }
        $('.countdown .c-hh').html(hhz);
        $('.countdown .c-mm').html(mmz);
        $('.countdown .c-ss').html(ssz);

        ss--;

    }
    showTime();
    var timer = setInterval(showTime,1000)



}

$(document).ready(function () {

    changeFontSize();       //页面字体大小随着宽度变化
    tupianlunb();           //图片轮播
    textlunb();             //文字轮播
    gslunb();               //每日好店轮播
    scrollGoTop();            //回到顶部
    daojis();                  //倒计时



});