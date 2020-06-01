/**
 模块名称: 业务动态
 开始时间: 2020-3-11
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdtTable.html');
    var grid = require('awd/easyui/grid');
    var url = require('modules/url');
    var clumn = require('modules/clumn/jshj');


    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            var options = {
                searchItem: {
                }
            }
            /**布局初始化**/
            var ywdtHtml = ywdtPage('com/ywdtTable', options);
            document.querySelector('.ywdt').innerHTML = ywdtHtml;
            $.parser.parse('.ywdt');
            grid.init('ywdtTable', {
                url: url.jshjList2jbxx,
                fit: false,
                width: '98%',
                height: window.innerHeight - 200,
                firstLoad: true,
                columns: clumn({
                    check: false,
                    clumns: ['hjs','uuid','kssj','jssj'],
                    hidden: []
                })
            });
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});