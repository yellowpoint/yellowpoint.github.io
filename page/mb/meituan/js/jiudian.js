/**
 @name:酒店页面js
 @Author:黄典
 @Email:870003719@qq.com
 @Date:2016年6月27日
 */


//酒店页面图片轮播
function jiuDianImgLunBo() {
    var mySwiper = new Swiper('.swiper-container',{
        loop: true,/*循环播放*/
        autoplay: 2000,/*每次切换之间的实际间隔 单位毫秒 */
        speed:1000,
        pagination: '.swiper-pagination',/*设置分页点....*/
        autoplayDisableOnInteraction:false,
    });
}


//页面字体大小随着宽度变化

function changeFontSize() {
    var ww = $(document).width();
    var wws = ww/7.5;

    if(wws < 60){
        $("html").css("font-size",wws);
    }else{
        $("html").css("font-size","60px");
    }

    $(window).resize(function(){
        var ww = $(document).width();
        var wws = ww/7.5;
        if(wws < 60){
            $("html").css("font-size",wws);
        }else{
            $("html").css("font-size","60px");
        }
    });
    
}

//酒店点击切换全日房和钟点房
function clickChance() {
    $(".containe .hotrlmain .h-header .h-header-in:first-child").click(function () {
        $(".containe .hotrlmain .h-header .h-header-in .downline").finish();
        $(".containe .hotrlmain .h-header .h-header-in .downline").animate({"left":"0"},300);
        $(".containe .hotrlmain .h-date").show();
        $(".containe .hotrlmain .zhongdian").hide();
    });
    $(".containe .hotrlmain .h-header .h-header-in:last-child").click(function () {
        $(".containe .hotrlmain .h-header .h-header-in .downline").finish();
        $(".containe .hotrlmain .h-header .h-header-in .downline").animate({"left":"100%"},300);
        $(".containe .hotrlmain .h-date").hide();
        $(".containe .hotrlmain .zhongdian").show();

    });
}



$(document).ready(function () {
    jiuDianImgLunBo();      //酒店页面图片轮播
    changeFontSize();       //页面字体大小随着宽度变化
    clickChance();          //酒店切换全日房和钟点房
});