$(function () {
    var utils = require('awd/layui/utils');
    var url=require('modules/url');
    $('.awdDesktop').on('click', function () {
        var $this = $(this);
        var alt = $this.attr("alt");
        var e = url.getWebURL+"?serverName=" + alt;
        if (alt == "add") {
            alert("功能正在开发，请稍后！");
            return;
        }
        // alert("弹弹弹！");
        $.ajax({
            url: e,
            dataType: "json",
            success: function (e) {
                if (e == null || e.url == undefined) {
                    alert("无访问权限或应用未上架！");
                    return;
                }
                var url = e.url;
                window.open(url);
            }
        })
    });
    $('#xtsz').on('click', function () {
        var xtszPop = utils.showWin({
            title: '业务信息',
            type: 1,
            area: ['90%', '600px'],
            content: '<div class="section-container">' +
                '<div class="section-item section-item-one section-item-padding">' +
                '<div class="section-header" style="margin-bottom:1%;">' +
                '<div class="section-controls single-colors" id="tools">' +
                '<button type="button" id="edit">' +
                '<span class="iconfont icon-jiahao"></span>手环解除' +
                '</button>' +
                '<button type="button" id="del">' +
                '<span class="iconfont icon-jiahao"></span>手环补发' +
                '</button>' +
                '</div>' +
                ' </div>' +
                ' <div class="section-item-content border-top">' +
                '<form id="search" class="search-form"></form>' +
                '<table id="subtable" ></table>' +
                '</div>' +
                '</div>' +
                ' </div> ',
            maxmin: true,
            btn: ['取消'],
            success: function () {




            },

        })
    })
})