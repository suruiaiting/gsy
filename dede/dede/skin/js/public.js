function InitMenuFocus(code) {
    $(".menu a").each(function () {
        $(this).attr("class", "");
        if ($(this).attr("val") == code && !/city/.test(location.pathname)) {
            $(this).attr("class", "sel");
        }
    });
}

function productsearch(protype, keyid, citySite) {
    var keywords = $("#" + keyid).val();
    /* 默认初始化搜索 */
    if (keywords == "快速查找产品") {
        keywords = "";
    }
    //var url = citySite + "/product.html?param=" + protype + "-" + keywords + "-1";
    var url = "http://www.fht360.com/Search/Home?param=0-" + escape(keywords) + "-0-1";
    window.open(url);
}

/*menu select*/
InitMenuFocus($("#actionname").val() + "/");

$("#keywodspro_c").bind("keydown focusin", function (event) {
    var e = event || window.event;
    key = e.keyCode || e.Which;
    if (key == 13) {
        productsearch(0, 'keywodspro_c', '');
    }
});

$("#search_btn").click(function () {
    productsearch(0, 'keywodspro_c', '');
    return false;
});

var configroot = $("#configroot").val();
var dataValue = $("#configroot").attr("data-value");
In.add("set", { path: '/newtemplete/' + configroot + '/js/config.js', type: 'js', charset: 'utf-8' });
In("set", function () {
    if (config.global.length > 0) {
        for (var i = 0; i < config.global.length; i++) {
            if (config.global[i].length >= 3) {
                In.add(config.global[i][1], { path: config.global[i][0], type: 'js', charset: 'utf-8', rely: config.global[i][2] });
            } else {
                In.add(config.global[i][1], { path: config.global[i][0], type: 'js', charset: 'utf-8' });
            }
            In(config.global[i][1]);
        }
    }
    if (dataValue in config) {
        if (config[dataValue].length > 0) {
            for (var i = 0; i < config[dataValue].length; i++) {
                if (config[dataValue][i].length >= 3) {
                    In.add(config[dataValue][i][1], { path: config[dataValue][i][0], type: 'js', charset: 'utf-8', rely: config[dataValue][i][2] });
                } else {
                    In.add(config[dataValue][i][1], { path: config[dataValue][i][0], type: 'js', charset: 'utf-8' });
                }
                In(config[dataValue][i][1]);
            }
        }
    }
});

function GetCookie(sMainName, sSubName) {
    var re = new RegExp((sSubName ? sMainName + "=(?:.*?&)*?" + sSubName + "=([^&;$]*)" : sMainName + "=([^;$]*)"), "i");
    return re.test(unescape(document.cookie)) ? RegExp["$1"] : "";
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return 0;
}

/*
        * 智能机浏览器版本信息:
        *
        */
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    }
    return false;
}

$(document).ready(function () {
    if ($("#adminUserId")) {
        var userId = $("#adminUserId").val();

    }

    //智能跳转
    if (browserRedirect()) {
        var _companyCodel = $("#companyMobileUrl").val();
        if (_companyCodel) {
            window.location.href = "http://" + _companyCodel + ".fht360.com";
        }
        return false;
    }

    //模板预览使用--start
    var tempid = parseInt(getQueryString("template_id"));
    if (tempid > 0) {
        $("a").click(function (event) {
            return false; //阻止链接跳转
        });
    }
    //模板预览使用--end
    if($('#weiClose')){
        $("#weiClose").click(function() {
            $("#weiView").hide("slow");
        });
    }
    if($(".weiHicon")){
        $(".weiHicon").mouseover(function () {
            $("#weiQr").show();
        }).mouseout(function () {
            $("#weiQr").hide();
        });
    }

    if ($("#product_categoryId").length) {
        var cid = $("#product_categoryId").val();
        if (parseInt(cid) > 0) {
            $(".ulpro2").each(function() {
                $(this).hide();
            });

            $(".pro1").each(function() {
                if (parseInt($(this).attr("date-categoryid")) == parseInt(cid)) {
                    $(this).children().eq(1).show();
                }
            });
        } else {
            $(".ulpro2").eq(0).show();
        }
    }

    if($(".follow_tag")){
        //--隐藏按钮--start
        $(".follow_tag").hide(); //关注
        //$(".sitemenu").hide();//头部用户标示
        //--隐藏按钮--end
    }

    fixFooter();
});
//ie7字体过大覆盖line-height样式
$(function() {
    if ($.browser.msie && ($.browser.version == '7.0')) {
        $(".productdetail .content").css("line-height", "32px");
    }
    $(".content table").removeAttr("style");
});

//添加城市分站插件后修改footer样式
function fixFooter() {
    var footerCity = $(".footer #PlugInHomeCity");
    var footName = $(".footer #footerName");
    var footContact = $(".footer #footerContact");

    if (footerCity.length==0) {
        footName.addClass("footName");
        footName.attr("id", "footerNameId");
        footContact.attr("id", "footerContactId");
        var nameTextColor = footName.css('color');
        footName.find('a').each(function (index, elem) {
            elem.style.color = nameTextColor;
        });
        return;
    }
    footName.addClass("footContact");

    var footbg = $('.footbg').first();
    var footer = $('.footer').first();

    if(footbg){
        footbg.css('height','auto');
    }
    footer.css({
        //'background-size': 'contain',
        'height': 'auto'
    });

    footer.find('div').each(function (index, elem) {
        //elem.style.backgroundSize = 'contain';
        elem.style.height = 'auto';
    });

    var cityTextColor = footerCity.find('span').css('color');
    footerCity.find('a').each(function(index,elem){
       elem.style.color=cityTextColor;
    });

    var nameTextColor = footName.css('color');
    footName.find('a').each(function (index, elem) {
        elem.style.color = nameTextColor;
    });
}
