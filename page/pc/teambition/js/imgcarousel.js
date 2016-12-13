/**
 * Created by Administrator on 2016/6/28 0028.

 /**
 @name:首页图片轮播js
 @Author:黄典
 @Email:870003719@qq.com
 @Date:2016年6月28
 */


//图片轮播
function indexImgLunBo() {
    var mySwiper = new Swiper('.swiper-imglunbo',{
        loop: true,/*循环播放*/
        autoplay: 2000,/*每次切换之间的实际间隔 单位毫秒 */
        speed:1000,
        effect : 'fade',//淡入效果
        pagination: '.swiper-pagination',/*设置分页点....*/
        autoplayDisableOnInteraction:false,
        simulateTouch : false,//无法点击和拖动
        paginationClickable :true,//点击分页器可以切换

    });
}


//页面字体大小随着宽度变化

function changeFontSize() {
    var ww = $(document).width();
    var wws = ww/20.7;

    if(wws >= 36){
        $("html").css("font-size","36px");
    }else if(wws <= 24){
        $("html").css("font-size","24px");
    }else{
        $("html").css("font-size",wws);
    }

    $(window).resize(function(){
        var ww = $(document).width();
        var wws = ww/20.7;
        if(wws >= 36){
            $("html").css("font-size","36px");
        }else if(wws <= 24){
            $("html").css("font-size","24px");
        }else{
            $("html").css("font-size",wws);
        }
    });

}





$(document).ready(function () {
    indexImgLunBo();      //页面图片轮播
    changeFontSize();       //页面字体大小随着宽度变化

});