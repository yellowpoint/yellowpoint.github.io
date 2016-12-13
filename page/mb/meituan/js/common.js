
//回到顶部
function scrollGoTop() {
    $(document).scroll(function () {
        var dd = $(this).scrollTop();
        if(dd > 100){
            $(".gotop").show();
        }else{
            $(".gotop").hide();
        }
    });
    $(".gotop").click(function () {
        $(document).scrollTop(0);
    });
}


$(document).ready(function () {

    scrollGoTop();      //回到顶部
});