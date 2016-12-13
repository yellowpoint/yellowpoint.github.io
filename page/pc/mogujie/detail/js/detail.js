/**
 * Created by Administrator on 2016/6/12 0012.
 */

//顶部店铺信息下拉框
function showDropMenu() {
    $(".detail-top-search .t-pingfen,.detail-top-search .jt").hover(
        function(){
            $(".detail-top-search .l-dropmenu").show();
            $(".detail-top-search .ts-left").css("background","#f6f6f6");

        },
        function(){
            $(".detail-top-search .l-dropmenu").hide();
            $(".detail-top-search .ts-left").css("background","#fff");
        }
    );
    $(".detail-top-search .l-dropmenu").hover(
        function(){
            $(".detail-top-search .l-dropmenu").show();
            $(".detail-top-search .ts-left").css("background","#f6f6f6");
        },
        function(){
            $(".detail-top-search .l-dropmenu").hide();
            $(".detail-top-search .ts-left").css("background","#fff");
        }
    );

}

//全部商品的下拉菜单
function showAllList() {
    $(".top-nav li").hover(function () {
        $(this).find(".category-list").show();
    },function () {
        $(this).find(".category-list").hide();
        }
    );
}

//点击切换款式和大图图片
function changeKuans() {
    $(".goods-kuans li").click(function () {
        $(this).parent().find(".selected").removeClass("selected");
        $(this).addClass("selected");
        var bigimg = $(this).attr("bigimg")
        $(".detail-primary .p-left .bigimg img").attr("src",bigimg);
    });
}

//鼠标悬停小图标换大图片
function changeXiaotu() {
    $(".detail-primary .p-left .smallimg li").mouseenter(function () {
        $(this).parent().find(".selected").removeClass("selected");
        $(this).addClass("selected");
        var bigimg = $(this).attr("bigimg");
        $(".detail-primary .p-left .bigimg img").attr("src",bigimg);
    });
}

//点击将小图片左右滑动
function moveXiaoTu() {
    $(".detail-primary .p-left .smallimg .small-jty").click(function () {
        var ulMl = parseInt($(".detail-primary .p-left .smallimg ul").css("margin-left"));
        var ulPage = Math.abs(ulMl/350)+1;
        var ulNumber = ulPage*5;
        if(ulNumber>=$(".detail-primary .p-left .smallimg .smallimgbox li").length){
            return;
        }
        var newUlMl = ulMl-350;
        $(".detail-primary .p-left .smallimg ul").animate({"margin-left":newUlMl});

        //箭头消失或出现
        var newUlPage = Math.abs(newUlMl/350)+1;
        console.log(newUlPage);
        var newUlNumber = newUlPage*5;
        if(newUlNumber>=$(".detail-primary .p-left .smallimg .smallimgbox li").length){
            $(this).hide();
        }else{
            $(this).show();
        }
        if(newUlMl == 0){
            $(".detail-primary .p-left .smallimg .small-jtz").hide();
        }else{
            $(".detail-primary .p-left .smallimg .small-jtz").show();
        }

    });


    $(".detail-primary .p-left .smallimg .small-jtz").click(function () {
        var ulMl = parseInt($(".detail-primary .p-left .smallimg ul").css("margin-left"));
        if(ulMl == 0){
            return;
        }
        var newUlMl = ulMl+350;
        $(".detail-primary .p-left .smallimg ul").animate({"margin-left":newUlMl});

        //箭头消失或出现
        if(newUlMl == 0){
            $(this).hide();
        }else{
            $(this).show();
        }
        var newUlPage = Math.abs(newUlMl/350)+1;
        var newUlNumber = newUlPage*5;
        if(newUlNumber>=$(".detail-primary .p-left .smallimg .smallimgbox li").length){
            $(".detail-primary .p-left .smallimg .small-jty").hide();
        }else{
            $(".detail-primary .p-left .smallimg .small-jty").show();
        }


    });

}

//引入组件数字框加减
function introduceShuzk() {
    $("#spinner")
        .spinner('delay', 200) //delay in ms
        .spinner('changed', function(e, newVal, oldVal) {
            // trigger lazed, depend on delay option.
        })
        .spinner('changing', function(e, newVal, oldVal) {
            // trigger immediately
        });

    //当数字为1的时候，左边的箭头透明的为0.3
    $(".detail-primary .p-right .num-add").click(function () {
        var num = $(".detail-primary .p-right .goods-number .numbox .num-input").val();
        if(num+1> 1){
            $(".detail-primary .p-right .goods-number .numbox .num-reduce").css("opacity","1");
        }else{
            $(".detail-primary .p-right .goods-number .numbox .num-reduce").css("opacity","0.3");
        }
    });
    $(".detail-primary .p-right .num-reduce").click(function () {
        var num = $(".detail-primary .p-right .goods-number .numbox .num-input").val();
        if(num -1 > 1){
            $(".detail-primary .p-right .goods-number .numbox .num-reduce").css("opacity","1");
        }else{
            $(".detail-primary .p-right .goods-number .numbox .num-reduce").css("opacity","0.3");
        }
    });

}

//点击切换尺码
function changeSize() {
    $(".detail-primary .p-right .goods-size li").click(function () {
        $(this).parent().find(".selected").removeClass("selected");
        $(this).addClass("selected");
    });
}

//点击切换选项栏
function changeXuanxiang() {
    $(".detail-content .dct-right .tabbar-box li").click(function () {
        $(this).parent().find(".elect").removeClass("elect");
        $(this).find("a").addClass("elect");
        var getAllA = $(this).index();
        $(".detail-content .dct-right .panel-box").hide();
        $(".detail-content .dct-right .panel-box").eq(getAllA).show();
        if(getAllA == 0){
            $(".detail-content .dct-right .panel-box").eq(2).show();
        }

    });
}

//滚到一定位置是选项栏顶部固定
function scrollXuanxiang() {
    $(window).scroll(function () {
        var scrollTopSz = $(this).scrollTop();
        if(scrollTopSz >= 1008){
            $(".detail-content .dct-right .tabbar-box").addClass("tabbar-boxfixed");
            $(".detail-content .dct-left .shop-info .shop-name").addClass("shop-namefixed");

        }else{
            $(".detail-content .dct-right .tabbar-box").removeClass("tabbar-boxfixed");
            $(".detail-content .dct-left .shop-info .shop-name").removeClass("shop-namefixed");
        }
        if(scrollTopSz >= 50){
            $(".right-menu .rmenu-top").show();
        }else{
            $(".right-menu .rmenu-top").hide();
        }
    });
}

//点击选项栏时回到上面
function clickXuanxiang() {
    $(".detail-content .dct-right .tabbar-box").click(function () {
        $(window).scrollTop(1008);
    });
}

//引用组件购物车的抛物线动画效果
function clickJiaRu() {

    $(".detail-primary .p-right .goods-buy .buy-after").click(function (evt) {
        var startLeft = evt.clientX;
        var startTop = evt.clientY;
        var endLeft = $(".right-menu .rmenu-gwc").offset().left;
        var endTop = $(".right-menu .rmenu-gwc").offset().top;

        $('<img class="test" src="../img/add-cart.png"/>').fly({
            start: {top: startTop, left: startLeft},
            end: {top: 150, left: endLeft, width: 0, height: 0},
            onEnd: function(){
                // alert('End');
                // this.destory();
            }
        });


    });

}


//顶部登陆栏鼠标进入出现下拉子菜单
function hoverDengLu() {
    $(".loginbar .li-title").mouseover(function () {
        $(this).children("ol").show();
    });

    $(".loginbar .li-title").mouseout(function () {
        $(this).children("ol").hide();
    });

}


// 右边菜单栏
function hoverRightMenu() {
    $(".rmenu-gwc").mouseenter(function () {
        $(".right-menu").animate({
            "right":"0px"
        });
        $(".rmenu-gwc,.rmenu-top").animate({
            "left":"0px"
        });
        $(".g-a").css("border-bottom","1px solid #ef2f23");
        $(".t-a").css("border-top","1px solid rgba(221,221,221,.6)");
    });

    $(".rmenu-gwc").mouseleave(function () {

        $(".g-a").css("border-bottom","1px solid rgba(221,221,221,.6)");
    });

    $(".right-menu").mouseleave (function () {
        $(".right-menu").animate({
            "right":"-30px"
        });
        $(".rmenu-gwc,.rmenu-top").animate({
            "left":"-30px"
        });
        $(".g-a").css("border-bottom","1px solid #202020");
        $(".t-a").css("border-top","1px solid #202020");

    });

    $(".rmenu-top").mouseenter(function () {
        $(".t-a").css("border-top","1px solid #ef2f23");
    });
    $(".rmenu-top").mouseleave(function () {
        $(".t-a").css("border-top","1px solid rgba(221,221,221,.6)");
    });

}

// 优惠的下拉菜单
function hoverYhXia() {
    $(".detail-primary .p-right .goods-price .youhui .yh-box").hover(function () {
        $(".detail-primary .p-right .goods-price .youhui .yh-xiala").show();
    },function () {
        $(".detail-primary .p-right .goods-price .youhui .yh-xiala").hide();
        }
    );
    $(".detail-primary .p-right .goods-price .youhui .yh-xiala").hover(function () {
            $(".detail-primary .p-right .goods-price .youhui .yh-xiala").show();
        },function () {
            $(".detail-primary .p-right .goods-price .youhui .yh-xiala").hide();
        }
    );
}

// 分享的下拉
function hoverFxXia() {
    $(".detail-primary .p-right .goods-share .fenxiang").hover(function () {
        $(".detail-primary .p-right .goods-share .fenxiang .fx-xiala").show();
    },function () {
        $(".detail-primary .p-right .goods-share .fenxiang .fx-xiala").hide();
        }
    );
}



//引入函数

$(document).ready(function () {
    showDropMenu();     //顶部店铺信息下拉框
    showAllList();      //全部商品的下拉菜单
    changeKuans();      //点击切换款式和大图图片
    changeXiaotu();     //鼠标悬停小图标换大图片
    moveXiaoTu();       //点击将小图片左右滑动
    introduceShuzk();   //引入组件数字框加减
    changeSize();       //点击切换尺码
    changeXuanxiang();  //点击切换选项栏
    scrollXuanxiang();  //滚到一定位置是选项栏顶部固定
    clickXuanxiang();   //点击选项栏时回到上面
    clickJiaRu();       //引用组件购物车的抛物线动画效果
    hoverDengLu();      //顶部登陆栏鼠标进入出现下拉子菜单
    hoverRightMenu();   // 右边菜单栏
    hoverYhXia();       // 优惠的下拉菜单
    hoverFxXia();       // 分享的下拉
    $("img").lazyload();//图片懒加载
});