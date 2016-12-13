/**
 * Created by Administrator on 2016/6/5 0005.
 */

//搜索框自动提示功能 开始
function zidongtis() {
    var data = [
        {"value": "one", "label": "one"},
        {"value": "夏装", "label": "夏装"},
        {"value": "夏季睡衣", "label": "夏季睡衣"},
        {"value": "夏季泳衣", "label": "夏季泳衣"}
    ];

    $(function () {
        $(".s-text").autocompleter({source: data,empty:false});
    })

}

//搜索框自动提示功能 结束

//图片轮播  开始
function tupianlunbo() {
    $('.my-slider').unslider();
    $(".imglunbo").mouseenter(function () {
        $(".unslider-arrow").show();
    });
    $(".imglunbo").mouseleave(function () {
        $(".unslider-arrow").hide();
    })
}

//图片轮播  结束


//导航栏右边出现的子菜单
function hoverNavMore() {
    $(".hot .hot-left .hl-ul").hover(function () {
        $(this).find(".nm-bt").show();
        $(this).addClass("elect");
        $(this).find("ul").css("border-bottom","0");
        $(this).prev().find("ul").css("border-bottom","0");
        $(this).find(".nav-more").show();
        $(this).filter(".last").css("height","40px");
        $(this).filter(".last").find(".nm-bt").css("height","42px")
    },function () {
        $(this).prev().find("ul").css("border-bottom","1px dashed #ccc");
        $(this).find("ul").css("border-bottom","1px dashed #ccc");
        $(this).removeClass("elect");
        $(this).find(".nav-more").hide();
        $(this).find(".nm-bt").hide();
        $(this).filter(".last").find("ul").css("border-bottom","0");
        }
    );
}

$(document).ready(function () {

    //顶部登陆栏鼠标进入出现下拉子菜单 开始
    $(".li-title").mouseover(function () {
        $(this).children("ol").show();
    });

    $(".li-title").mouseout(function () {
        $(this).children("ol").hide();
    });
//顶部登陆栏鼠标进入出现下拉子菜单 结束

    //搜索框的两个下拉子菜单 开始

    $(".soushangp").mouseover(function () {
        $(this).find("ul").show();
    });

    $(".soushangp").mouseout(function () {
        $(this).find("ul").hide();
    });
    //换搜商品和搜店铺
    $(".soushangp a").click(function () {
        var wenz = $(this).text();
        $(".soushangp span").text("搜"+wenz);
        return false;
    });

    $(".itext").focus(function () {
        $(".itext-xia").show();
        $(this).val('');
        $(this).css("color","#666");


    });
    $(".itext").blur(function () {
        $(".itext-xia").hide();
        if($(this).val() == ''){
            $(this).val('夏日必备单品');
            $(this).css("color","#999");
        }

    });
    $(".itext-xiap2").click(function () {
        alert("sss");
        // var wenz = $(this).text();
        // alert(wenz);
        //
        // $(".itext").val(wenz);
        // return false;
    });
    //搜索框的两个下拉子菜单 结束
   
    
//    滚到下面才出现的顶部搜索框，和下面的回到顶部框  开始
    $(window).scroll(function () {
        var sTop = $(document).scrollTop();
        $(".top-search").stop();
        if(sTop > 300){
            $(".top-search").animate({"top":"0px"});

        }else {
            $(".top-search").animate({"top":"-300px"});

        }
        
        if(sTop > 50){
            $(".rmenu-top").show();
        }else {
            $(".rmenu-top").hide();
        }
    });
    
    $(".rmenu-top").click(function () {
        $(document).scrollTop(0);
    });
    //放到搜商品出现的下拉
    $(".right-sou a").click(function () {
        var wenz = $(this).text();
        $(".right-sou span").text("搜"+wenz);
        return false;
    });


    //点击搜索文本框 出现的历史记录

    // $(".s-text").focus(function () {
    //     $(".itext-xia02").show();
    //     $(this).val('');
    //     $(this).css("color","#666");
    // });
    // $(".s-text").blur(function () {
    //     $(".itext-xia02").hide();
    //     if($(this).val() == ''){
    //         $(this).val('夏日必备单品');
    //         $(this).css("color","#999");
    //     }
    //
    // });

   // 滚到下面才出现的顶部搜索框，和下面的回到顶部框  结束


    // 右边菜单栏开始
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

    //    右边菜单栏结束



    zidongtis();   //引入搜索框自动提示
    tupianlunbo();  //引入图片轮播
    hoverNavMore(); //导航栏右边出现的子菜单

});




