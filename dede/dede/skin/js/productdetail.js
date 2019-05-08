var productId = $("#productid").val();

$(function () {
    /**/
    var img = $("#pimg .bigthumb").find("img");
    $("#pimg .smallthumb a").click(function () {
        var index = $(this).parent().index();
        $("#pimg .smallthumb li").removeClass("sel").eq(index).addClass("sel");
        img.attr("src", $(this).find("img").attr("data-img"));
        return false;
    });
})