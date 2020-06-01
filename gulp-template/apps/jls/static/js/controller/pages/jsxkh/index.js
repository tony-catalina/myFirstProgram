/**
 模块名称:
 开始时间: 2020-3-7
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');

    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            var i = 1990;
            var date = new Date();
            var year = date.getFullYear(); //获取当前年份
            var dropList;
            for (var i; i < 2030; i++) {
                if (i == year) {
                    dropList = dropList + "<option value='" + i + "' selected>" + i + "</option>";
                } else {
                    dropList = dropList + "<option value='" + i + "'>" + i + "</option>";
                }
            }
            $('#dateForm select[name=year]').html(dropList); //生成年份下拉列表
            var monthly;
            for (var j = 1; j < 13; j++) {
                monthly = monthly + '<option value="' + j + '">' + j + '</option>'
            }
            $('#dateForm select[name=month]').html(monthly); //生成月份下拉列表

            var jsxkh = '';
            jsxkh += "<tbody style='text-align:center;'>" +
                "<tr>" +
                "<td  rowspan='3' width='15%' style='border:1px solid #0069f6;padding: 8px;'></td>" +
                "<td colspan='3' style='border:1px solid #0069f6;padding: 8px;'>入所录入及时性</td>" +
                "<td colspan='3' style='border:1px solid #0069f6;padding: 8px;'>出所录入及时性</td>" +
                "</tr>" +
                "<tr>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>考核人数</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>不及时录入人数</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>录入及时率</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>考核人数</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>不及时录入人数</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>录入及时率</td>" +
                "</tr>" +
                "<tr>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>0</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>0</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>0</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>0</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>0</td>" +
                "<td style='border:1px solid #0069f6;padding: 8px;'>0</td>" +
                "</tr>" +
                "</tbody>";
            $("#jsxkhTable").append(jsxkh);
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});