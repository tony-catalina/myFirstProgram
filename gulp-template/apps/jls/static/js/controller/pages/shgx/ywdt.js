/**
 模块名称: 业务动态
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');
    require('easyuiZh');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdtTable.html');
    var grid = require('awd/easyui/grid');
    var utils = require('awd/layui/utils');
    var url = require('modules/url');
    var clumn = require('modules/clumn/shgx');
    //单栏
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            var options = {
                searchItem: {  
                },
                
            }
            /**布局初始化**/
            var ywdtHtml = ywdtPage('com/ywdtTable', options);
            document.querySelector('.ywdt').innerHTML = ywdtHtml;
            $.parser.parse('.ywdt');
            grid.init('ywdtTable', {
                url: url.shgxList2jbxx,
                fit: false,
                width: '98%',
                height: window.innerHeight - 200,
                firstLoad: true,
                columns: clumn({
                    check: false,
                    clumns: ['zjh','xm','xbString','gxString','zjlxString'],
                    hidden: []
                })
            });
        },
        eventBind: function () {
            /**事件绑定**/
            $('#searchBtn').on('click', function () {
                var startTime=$('.starttime').datebox('getValue')
                var endTime=$('.endtime').datebox('getValue')
                $("#ywdtTable").datagrid('reload',{
                     createTime_start : startTime,
                     createTime_end : endTime
                })
            });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});