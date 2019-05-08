(function ($) {
    var width;
    $("#qqonline_btn").click(
        function () {
            var boxJq = $(".qqonline_box").toggle();
            if (!width) {
                width = boxJq.outerWidth();
            }
            $("#qqonline").css({
                width: (boxJq.is(":hidden") ? '-' : '+') + width + 'px'
            });
        });
    $("#weixin_code").html(qrcode);

    $.fn.qqonline = function (options) {
        var opts = {
            position: "fixed", btntext: "\u5ba2\u670d\u5728\u7ebf", qqs: [{ name: "\u61d2\u4eba\u5efa\u7ad9", qq: "12345678" }], tel: "", more: null, kftop: "120", z: "99999", defshow: true, Event: "", callback: function () { }
        }, $body = $("body"), $url = "";
        $.extend(opts, options);
        if (!$("#qqonline").length > 0) {
            $body.append("<div id='qqonline' class='qqonline qqonlineshow' style=" + opts.position + "><a href='#' class='qqonline_btn qqonline_btn_hide' id='qqonline_btn' onfocus='this.blur()'>" + opts.btntext + "</a><div class='qqonline_box'><div class='qqonline_header'><a href='#' title='\u5173\u95ed' class='x' id='qqonline_x'></a></div><div class='qqonline_con' id='qqonline_con'><ul class='kflist'></ul></div><div class='qqonline_foot'></div></div></div><style>#qqonline ul{padding-left:0; margin:0;list-style-type: none;}.qqonline{font-size:13px;position:fixed;}.qqonline a{ display:block; color:#666; text-decoration:none; font-size:13px;}#qqonline img{ border:none;vertical-align:middle; margin-right:4px; margin-top:-2px;display:inline;}.qqonline_con{padding:8px;}.qqonline_con li.qq{padding:5px 0;}.qqonline_con li.tel{ line-height:1.35; padding-bottom:4px;}.qqonline_con li.more{ padding:2px 0;}.qqonline_con li.tel b{ display:block; color:#C00;}.qqonline_tool a{ display:block; padding:8px 10px; text-align:center;}.qqonline_con .hr{padding:0;height:0;font-size:0;line-height:0;clear:both;margin:5px 0;border-bottom:#fff solid 1px;border-top:#CFCFCF solid 1px;border-left:none;border-right:none;}.qqonline_btn{position:absolute; top:11px;width:22px;left:-22px;display:block;text-align:center;padding:10px 0;}.qqonline .qqonline_xc{ position:absolute; bottom:-14px; right:6px;font-size:10px;display:none;}</style>")
        }
        var $qqonline = $("#qqonline"), $qqonline_con = $("#qqonline_con"), $kflist = $qqonline_con.children("ul"), $qqonline_x = $("#qqonline_x"), $qqonline_btn = $("#qqonline_btn"), $qqonline_w = $qqonline.outerWidth() * 1 + 1; $qqonline.css({ top: opts.kftop + "px", "z-index": opts.z });
        if (!opts.defshow) {
            $qqonline.removeClass("qqonlineshow").css({ right: -$qqonline_w });
        }
        var json = { options: opts.qqs };
        json = eval(json.options);
     
        if (opts.tel) {
            $kflist.append("<li class=hr></li>");
            var json_tel = { options: opts.tel };
            json_tel = eval(json_tel.options);
            $.each(json_tel, function (i, o) {
                $kflist.append("<li class=tel>" + o.name + ":<b>" + o.tel + "</b></li>");
            })
        }
        if (opts.more) {
            $kflist.append("<li class=hr></li><li class=more><a href='" + opts.more + "'>>>\u66f4\u591a\u65b9\u5f0f</a></li>");
        }
        var $qqonlinetop = $qqonline.offset().top;
        if ($.browser.msie && $.browser.version == 6 || opts.position == "absolute") {
            $(window).scroll(
                function () {
                    var offsetTop = $qqonlinetop + $(window).scrollTop() + "px";
                    $qqonline.animate({ top: offsetTop }, { duration: 600, queue: false });
                })
        } $qqonline_x.click(function () {
            $qqonline.hide();
            return false;
        }); if (opts.Event == "") {
            $qqonline.mouseenter(function () {
                $(this).stop().animate({ right: 0 })
            }).mouseleave(function () {
                $(this).stop().animate({ right: -$qqonline_w })
            })
        } else {
            $qqonline_btn.on("click", function () {
                if ($qqonline.hasClass("qqonlineshow")) {
                    $qqonline.animate({ right: -$qqonline_w }, function () {
                        $qqonline.removeClass("qqonlineshow")
                    })
                } else {
                    $qqonline.addClass("qqonlineshow").animate({ right: 0 })
                }
                return false
            })
        }
    }
})(jQuery);
