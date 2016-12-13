/**
 * Created by Administrator on 2016/8/31 0031.
 */



//滚动显示顶部导航背景和头像的移动
function scrollShowBg() {
    $(document).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("n-showbg");
        } else {
            $(".navbar-fixed-top").removeClass("n-showbg");
        }
        $(".header .h-main").css("paddingTop",(130 - $(this).scrollTop())+"px");
    });

}

//点击筛选图片
function clickChangeImg() {
    $(".works .w-nav li").click(function () {
        $(".works .w-nav li").removeClass('active');
        $(this).addClass('active')
    });

    var filterList = {
        init:function(){
            $('#portfoliolist').mixitup({
                targetSelector: '.filtr-item ',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap'
            });
        }

    };

    filterList.init();

}





$(document).ready(function () {
    // $('.w-main').filterizr();           //图片筛选排序
    scrollShowBg();                     //滚动显示顶部导航背景和头像的移动
    clickChangeImg();                   //点击筛选图片
});
