/**
 * Created by Administrator on 2016/6/28 0028.
 */

/**
 * 中文版本的下拉菜单效果
 */
function xiaLaCaiDan() {

    $(".banben").mouseover(function () {
        $(".banben-list").show();
    });


    $(".banben-list").mouseleave(function () {
        $(".banben-list").hide();
    });


}

$(function () {
    xiaLaCaiDan();
});