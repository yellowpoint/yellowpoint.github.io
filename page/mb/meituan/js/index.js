/**
 @name:首页js
 @Author:黄典
 @Email:870003719@qq.com
 @Date:2016年6月27日
 */


//酒店页面图片轮播
function indexNav() {
    var mySwiper = new Swiper('.swiper-container',{
        loop: true,/*循环播放*/
        // autoplay: 2000,/*每次切换之间的实际间隔 单位毫秒 */
        // speed:1000,
        pagination: '.swiper-pagination',/*设置分页点....*/
        autoplayDisableOnInteraction:false,
    });
}




$(document).ready(function () {
    indexNav();     //酒店页面图片轮播
});