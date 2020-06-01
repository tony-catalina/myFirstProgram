define(function (require) {
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var common = require('common');
    var tmpl = require('services/systemsetting_menu.html');
    var utils = require('awd/layui/utils');
    var userdata = {
        menuList: [{
            menuid: 1003,
            menuname: "个人中心",
            url: "xtsz/grzx.html",
            iconone: "&#xe638;"
        }]
    };
    var glydata = {
        "menuList": [{
            menuid: 1003,
            menuname: "个人中心",
            url: "xtsz/grzx.html",
            iconone: "&#xe80d;"
        },
        {
            menuid: 1001,
            menuname: "用户管理",
            url: "xtsz/yhgl.html",
            iconone: "&#xe825;"
        }, {
            menuid: 1004,
            menuname: "监区管理",
            url: "xtsz/jqgl.html",
            iconone: "&#xe835;"
        }, {
            menuid: 1005,
            menuname: "监室管理",
            url: "xtsz/jsgl.html",
            iconone: "&#xe83e;"
        }, {
            menuid: 1006,
            menuname: "会见室管理",
            url: "xtsz/hjsgl.html",
            iconone: "&#xe821;"
        }, {
            menuid: 1007,
            menuname: "办案人管理",
            url: "xtsz/bargl.html",
            iconone: "&#xe81b;"
        }, {
            menuid: 1007,
            menuname: "律师管理",
            url: "xtsz/lsgl.html",
            iconone: "&#xe844;"
        }]
    };
    var jgdata = {
        "menuList": [{
            menuid: 1003,
            menuname: "个人中心",
            url: "xtsz/grzx.html",
            iconone: "&#xe80d;"
        },
        {
            menuid: 1001,
            menuname: "用户管理",
            url: "xtsz/yhgl.html",
            iconone: "&#xe825;"
        }, {
            menuid: 1002,
            menuname: "分类管理",
            url: "xtsz/flgl.html",
            iconone: "&#xe718;"
        }, {
            menuid: 1004,
            menuname: "字典管理",
            url: "xtsz/zdgl.html",
            iconone: "&#xe726;"
        }, {
            menuid: 1005,
            menuname: "违规字典管理",
            url: "xtsz/wgzdgl.html",
            iconone: "&#xe876;"
        }, {
            menuid: 1005,
            menuname: "流程管理",
            url: "xtsz/lcgl.html",
            iconone: "&#xe80c;"
        }]
    };
    var main = {
        init: function () {
            var menudata = userdata;
            if (common.info.user.glybz == 1) {
                menudata = glydata;
            }
            if (common.info.user.glybz == 1 && common.info.user.jsbh == '110000000') {
                menudata = jgdata;
            }
            var html = tmpl('systemsetting_menu', menudata);
            $('#menus').html(html);
            main.eventBind();

        },
        eventBind: function () {
            /**事件绑定**/
            $(".list_li").each(function () {
                $(this).click(function () {
                    $(this).addClass('selected')
                    $(this).siblings().removeClass('selected')
                    var url = $(this).attr("url");
                    $('#Page_Body').empty()
                    var content = '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%; "></iframe>';
                    $('#Page_Body').append(content)
                });
            });
            $('#Page_Body').append('<iframe scrolling="auto" frameborder="0"  src="xtsz/grzx.html" style="width:100%;height:100%; "></iframe>')
            /**事件绑定**/
        }

    }
    $(main.init);

})