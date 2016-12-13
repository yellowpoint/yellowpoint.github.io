/**
 * Created by Administrator on 2016/6/23 0023.
 */

//导航栏点击更多
function clickMore() {
    $(".containe .nav .more-down .more").click(function () {
        $(this).hide();
        $(".containe .nav").css("height","216px");
    });
    $(".containe .nav .n-footer .nf-right").click(function () {
        $(".containe .nav").css("height","75px");
        $(".containe .nav .more-down .more").show();
    });
}

//图片轮播
function imgLunBo() {

    var mySwiper = new Swiper('.swiper-imglunbo',{
        loop: true,/*循环播放*/
        speed:1000,
        autoplay: 3000,/*每次切换之间的实际间隔 单位毫秒 */
        pagination: '.swiper-pagination',/*设置分页点....*/
        paginationClickable: false,/*点击点 切换到对应的页*/
        autoplayDisableOnInteraction:false
    });
}

//热点新闻滚动
function hotNewsRoll() {
    
    var mySwiper = new Swiper('.swiper-hotnews', {

        direction: 'vertical',
        autoplay:2000,
        speed:2000,
        loop:true,
        paginationClickable: false,
        simulateTouch:false,
        onlyExternal:true


    });
}


//回到顶部
function scrollGoTop() {
    $(document).scroll(function () {
        var dd = $(this).scrollTop();
        if(dd > 100){
            $(".containe .gotop,.containe .feedback").show();
        }else{
            $(".containe .gotop,.containe .feedback").hide();
        }
    });
    $(".containe .gotop").click(function () {
        $(document).scrollTop(0);
    });
}

//登录页面点击勾选
function clickGoXuan() {
    $(".main .option span").click(function () {
        $(this).toggleClass("gouxuan");
    });
}
//订阅页面点击订阅
function clickDing() {
    $(".containe .main .m-box .media .item-box a .jia").click(function () {
        $(this).toggleClass("dingyue");
    });
}
//订阅页面点击切换列表
function clickChange() {
    $(".containe .main .m-nav a:not(.exchange)").click(function () {
        $(this).parents().find("a").removeClass("cur");
        $(this).addClass("cur");
        var wz = $(this).index();
        var lanTiao = wz * 20 + "%";
        $(".containe .main .line-container .line").animate({"left":lanTiao},500);
        $(".containe .main .m-box .media").hide();
        $(".containe .main .m-box .media").eq(wz).show();
    });
}

//搜新闻页面 搜索框获得焦点到顶部
function focusTop() {
    $(".containe .searchbox .search .s-text input").focus(function () {
        $(document).scrollTop(44);
    });
}

$(document).ready(function () {

    clickMore();        //导航栏点击更多
    imgLunBo();         //图片轮播
    hotNewsRoll();      //热点新闻滚动
    scrollGoTop();      //回到顶部
    clickGoXuan();      //登录页面点击勾选
    clickDing();        //订阅页面点击订阅
    clickChange();      //订阅页面点击切换列表
    focusTop();         //搜新闻页面 搜索框获得焦点到顶部
});