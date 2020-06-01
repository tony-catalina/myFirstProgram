/**
 模块名称: 动态分析
 开始时间: 2020-3-7
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_dtfxJlcx.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/sqdtfxhy');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var form= require('modules/form/_dtfxJlcx');

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
            toolbar.init({
                buttons: [
                    { id: 'bldj', name: '记录查询', icon: 'icon-taizhang', fun: function () {
                        var data = grid.getSelected('table')[0];                    
                        if(data) {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData1 = {};
                            var addData = {};
                            Object.assign(addData, data, addData1);
                            form.init(url.save,addData,function(){
                                grid.reload('table');
                            });
                        }else {
                            utils.alert('请选择人员信息!');
                        }
                    } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {  hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
               pageRender:{
                primary: [
                    { name: 'kssjStart', title: '会议开始日期', type: 'datebox' },
                    { name: 'kssjEnd', title: '至', type: 'datebox' }
                ],
                more: [
                    [
                        { name: 'jssjStart', title: '会议结束日期', type: 'datebox' },
                        { name: 'jssjEnd', title: '至', type: 'datebox' }
                    ]
                ]
                
               },

                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'processDefinitionKey': '',
                        'taskDefinitionKey': ''
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.dtfxlist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['kssj','jssj','hyrr','sfza'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/sqdtfxhy', ['kssj','jssj','hyrr','sfza'],
                []);
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});