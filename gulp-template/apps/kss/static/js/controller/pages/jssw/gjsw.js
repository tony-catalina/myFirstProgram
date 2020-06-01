/**
模块名称： 管教送物
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_jsswGjsw.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jssw');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jsswGjswForm = require('modules/form/jsswGjsw');
    var common=require('common');
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
            toolbar.init({
                buttons: [
                    { id: 'addTwo',
                        name: '管教送物',
                        icon: 'icon-jiahao',
                        fun: function() {

                            var data = grid.getSelected('table')[0];
                            if (data) {
                                //console.log(data,888)
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = {gjswr:common.info.user.loginname,gjswsj:currentTime};
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                jsswGjswForm.init(url.updateJsswById,  addData, function () {
                                    grid.reload('table');
                                });
                            } else {
                                layer.alert('请选择要办理的记录!');
                            }
                        }
                     }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() { } }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'ywzt': '7',
                    }, param)
                    grid.query('table', param);
                } 
            });
            grid.init('table', {
                url: url.QueryJsswByYwzt,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['rybh', 'jbxx_xm', 'sqyy', 'sqsj', 'sqwp', 'ajr', 'ajsj'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/jssw',['rybh', 'jbxx_xm', 'sqyy', 'sqsj', 'sqwp', 'ajr', 'ajsj'],[]);
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
