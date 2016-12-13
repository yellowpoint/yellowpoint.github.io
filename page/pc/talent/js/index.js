/**
 * Created by yellowpoint on 2016/7/9 0009.
 */

//鼠标悬停更换用户留言
function hoverChangeClient() {
    $(".testimonials .t-main .t-clientbox .t-client").mouseover(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        var wz =  $(this).index();
        $(".testimonials .t-main .t-text").siblings().removeClass("active");
        $(".testimonials .t-main .t-text").eq(wz).addClass("active");
    });
}

//点击切换大图
function clickChangeImg() {
    var liNum = $('.featured .f-mainbox ul li').length;
    var ulMl = null;
    var liList = 0;
    var timer =null;
    $(".featured .f-next").click(function () {
        clearInterval(timer);
        if(liList == liNum-1 ){
            liList = 0;
            ulMl = -liList *940;
            $(".featured .f-mainbox ul").animate({"margin-left": ulMl+"px"},"slow");
        }else{
            liList++;
            ulMl = -liList *940;
            $(".featured .f-mainbox ul").animate({"margin-left": ulMl+"px"},"slow");
        }

    });

    $(".featured .f-previous").click(function () {
        clearInterval(timer);
        if(liList == 0){
            liList = liNum-1;
            ulMl = -liList *940;
            $(".featured .f-mainbox ul").animate({"margin-left": ulMl+"px"},"slow");
        }else{
            liList--;
            ulMl = -liList *940;
            $(".featured .f-mainbox ul").animate({"margin-left": ulMl+"px"},"slow");
        }

    });

    //自动播放
    function gun() {
        if(liList == liNum-1 ){
            liList = 0;
            ulMl = -liList *940;
            $(".featured .f-mainbox ul").animate({"margin-left": ulMl+"px"},"slow");
        }else{
            liList++;
            ulMl = -liList *940;
            $(".featured .f-mainbox ul").animate({"margin-left": ulMl+"px"},"slow");
        }
    }

    timer = setInterval(gun,3000);

    $('.featured .f-mainbox,.featured .f-previous,.featured .f-next').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(gun,3000);
    });

}


//contact页面follow
function hoverFollow() {
    $('.d-text .p-share a').hover(function () {
        $(this).find('.p-fllow').show()
    },function () {
        $(this).find('.p-fllow').hide()
    });
}


//detail页面follow
function hoverDetailFollow() {
    $('.p-main .p-left .p-share a').hover(function () {
        $(this).find('.p-fllow').show()
    },function () {
        $(this).find('.p-fllow').hide()
    });
}




//  function clickChangeImg22() {
//      var oFmain = document.getElementsByClassName('f-mainbox')[0];
//      var oUl = oFmain.getElementsByTagName('ul')[0];
//      var oLi = oFmain.getElementsByTagName('li');
//      var liNum= oLi.length;
//      var oNext = document.getElementsByClassName('f-next')[0];
//      var oprevious = document.getElementsByClassName('f-previous')[0];
//      var ulMl = null;
//      var liList = 0;
//      var timer =null;
//      var nextMove =null;
//
//      oNext.onclick = function () {
//          if(liList == liNum-1 ){
//              liList = 0;
//              ulMl = -liList *940;
//              oUl.style.marginLeft=ulMl+"px";
//              // move(ulMl);
//
//          }else{
//              liList++;
//              ulMl = -liList *940;
//              // oUl.style.marginLeft=ulMl+"px";
//              move(ulMl);
//          }
//      };
//      oprevious.onclick = function () {
//          if(liList == 0 ){
//              liList = liNum-1;
//              ulMl = -liList *940;
//              oUl.style.marginLeft=ulMl+"px";
//              // move(ulMl);
//
//          }else{
//              liList--;
//              ulMl = -liList *940;
//              // oUl.style.marginLeft=ulMl+"px";
//              move(ulMl);
//          }
//      };
//
// function move(targe) {
//     clearInterval(nextMove);
//     nextMove = setInterval(function () {
//         var oUlOffset = oUl.offsetLeft-60;
//         console.log(oUlOffset);
//         if(oUlOffset > targe ){
//             oUl.style.marginLeft = oUlOffset-20+"px";
//         }else if(oUlOffset < targe){
//             oUl.style.marginLeft = oUlOffset+20+"px";
//
//         }else if(oUlOffset == targe){
//             clearInterval(nextMove);
//         }
//
//     },30);
// }
//
//
//      //自动播放
//      function gun() {
//          if(liList == liNum-1 ){
//              // liList --;
//              // ulMl = -liList *940;
//              // move(ulMl);
//              liList=0;
//              oUl.style.marginLeft="0px";
//          }else if(liList == 0){
//              liList++;
//              ulMl = -liList *940;
//              move(ulMl);
//          }else{
//              liList++;
//              ulMl = -liList *940;
//              move(ulMl);
//          }
//      }
//
//      timer = setInterval(gun,2000);
//
//      oFmain.onmouseover= function () {
//          clearInterval(timer);
//      };
//      oFmain.onmouseout= function () {
//          timer = setInterval(gun,2000);
//      };
//
//      oNext.onmouseover= function () {
//          clearInterval(timer);
//      };
//      oNext.onmouseout= function () {
//          timer = setInterval(gun,2000);
//      };
//
//      oprevious.onmouseover= function () {
//          clearInterval(timer);
//      };
//      oprevious.onmouseout= function () {
//          timer = setInterval(gun,2000);
//      };
//
//  };
//
//
// clickChangeImg22();     //js原生版本


$(document).ready(function () {
    hoverChangeClient();        //鼠标悬停更换用户留言
    clickChangeImg();           //点击切换大图
    hoverFollow();              //contact页面follow
    hoverDetailFollow();        //detail页面follow
});

